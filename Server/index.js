var app = require('express')();
var http = require('http').Server(app);
var ss = require('socket.io')(http);
var room = require('./room');
var check = require('./check');
var person = require('./player');

var ck = new check();

/**请求命令 */
var cmd_req = {
	/**登录 */
	login: "login",
	match: "match",
	draw: "draw",
	over: "over",
}

/**响应命令 */
var cmd_res = {
	login: "login",
	match: "match",
	draw: "draw",
	over: "over",
	conn: "conn",
}

var allConn = {};
var names = [];
var awaits = [];
var rooms = [];

var findRoom = ()=>{
	let rsl = null;
	for (let i=0;i<rooms.length;i++) {
		if (!rooms[i].isFull()) {
			rsl = rooms[i];
			break;
		}
	}
	
	return rsl;
}

var NewRoom = (id)=>{
	let rm = new room(id);
	rm.addPlayer(id);
	rooms.push(rm);
	// ss.sockets.socket(id).join(id);
}

var DelRoom = (id)=>{
	for (let i=0;i<rooms.length;i++) {
		if (rooms[i].name == id) {
			rooms.splice(i, 1);
			break;
		}
	}
}

// app.get('/', function(req, res) {
// 	// res.send('Hello!')
// 	res.sendFile(__dirname + '/index.html')
// })

ss.on('connection', function (socket) {
	console.log(socket.id + ' Connected!');
	let player = new person(socket.id, "", socket);
	allConn[socket.id] = player;
	socket.emit(cmd_res.conn, "");
	
	socket.on('disconnect', ()=>{
		let id = socket.id;
		for (let i=0;i<awaits.length;i++) {
			if (awaits[i] == id) {
				awaits.splice(i, 1);
				break;
			}
		}
		
		if (allConn[id] && allConn[id].room) {
			// socket.leave();
			let d = {
				loser: id,
			}
			ss.sockets.in(allConn[id].room).emit(cmd_res.over, JSON.stringify(d));
		}
		
		let n = allConn[id]?allConn[id].name:"";
		if (names.indexOf(n) >= 0) {
			names.splice(names.indexOf(n), 1);
		}
		delete allConn[id];

	});
	
	socket.on(cmd_req.login, (msg)=>{
		msg = JSON.parse(msg);
		let id = socket.id;
		if (names.indexOf(msg.name) != -1) {
			let rsl = {
				errCode: 1001
			}
			socket.emit(cmd_res.login, JSON.stringify(rsl));
		} else {
			allConn[id].name = msg.name;
			allConn[id].icon = msg.icon;
			names.push(msg.name);
			
			console.log(msg.name + ' Login!');
			
			let rsl = {
				id: id,
				name: msg.name
			}
			socket.emit(cmd_res.login, JSON.stringify(rsl));
		}
	});
	
	socket.on(cmd_req.match, ()=>{
		let id = socket.id;
		if (awaits.length > 0) {
			console.log(awaits)
			let rival_id = awaits.shift();
			console.log(id, rival_id);
			allConn[id].Join(id);
			allConn[rival_id].Join(id);
			
			let p1 = allConn[id];
			let p2 = allConn[rival_id];
			
			let rsl = {
				roomid: id,
				chess_b: id,
				rival: {},
			}
			
			rsl.rival = {
				name: p2.name,
				icon: p2.icon
			}
			p1.ws.emit(cmd_res.match, JSON.stringify(rsl));
			
			rsl.rival = {
				name: p1.name,
				icon: p1.icon
			}
			p2.ws.emit(cmd_res.match, JSON.stringify(rsl));
		} else {
			awaits.push(id);
		}
		
		
// 		let rm = findRoom();
// 		if (rm) {
// 			rm.addPlayer(id);
// 			socket['room'] = rm.name;
// 			socket.join(rm.name);
// 			
// 			let rsl = {
// 				roomid: rm.name,
// 				chess_b: rm.players[0],
// 			}
// 			
// 			ss.sockets.in(rm.name).emit(cmd_res.match, JSON.stringify(rsl));
// 		} else {
// 			NewRoom(id);
// 			socket.join(id);
// 			socket['room'] = id;
// 		}
	});
	
	
	socket.on(cmd_req.draw, (msg)=>{
		msg = JSON.parse(msg);
		let id = socket.id;
		let m = msg.manual || [];
		m.push(msg.step);
		
		ss.sockets.in(msg.roomid).emit(cmd_res.draw, JSON.stringify(msg.step));
		
		if(ck.checkManual(m)) {
			let d = {
				winer: id,
			}
			ss.sockets.in(msg.roomid).emit(cmd_res.over, JSON.stringify(d));
		}
	});
	
	socket.on(cmd_req.over, ()=>{
		let id = socket.id;
		allConn[id] && allConn[id].Leave();
	})
	
})

http.listen(3002, function () {
	console.log('listen on 3002!')
});




// var _rms = require('./room');
// var rms = new _rms();
// rms.createNewRoom('lala');
// rms.createNewRoom('lele');
// console.log(rms.all_room);