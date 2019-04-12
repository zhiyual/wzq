var app = require('express')();
var http = require('http').Server(app);
var ss = require('socket.io')(http);
var room = require('./room');
var check = require('./check');

var ck = new check();

/**请求命令 */
var cmd_req = {
	/**登录 */
	login: "login",
	match: "match",
	draw: "draw",
}

/**响应命令 */
var cmd_res = {
	login: "login",
	match: "match",
	draw: "draw",
	over: "over",
}

var allConn = {};
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
	socket.on('disconnect', ()=>{
		for (let i=0;i<awaits.length;i++) {
			if (awaits[i] == socket['uname']) {
				awaits.splice(i, 1);
				break;
			}
		}
		
		delete allConn[socket['uname']]
		
		if (socket['room']) {
			// socket.leave();
			ss.sockets.in(socket['room']).emit(cmd_res.over, JSON.stringify(d));
		}
	});
	
	socket.on(cmd_req.login, (msg)=>{
		let id = socket.id;
		socket['uname'] = msg;
		allConn[id] = socket;
		console.log(id + ' Login!');
		socket.emit(cmd_res.login, id);
	});
	
	socket.on(cmd_req.match, ()=>{
		let id = socket.id;
		let rm = findRoom();
		if (rm) {
			rm.addPlayer(id);
			socket['room'] = rm.name;
			socket.join(rm.name);
			
			let rsl = {
				roomid: rm.name,
				chess_b: rm.players[0],
			}
			
			ss.sockets.in(rm.name).emit(cmd_res.match, JSON.stringify(rsl));
		} else {
			NewRoom(id);
			socket.join(id);
			socket['room'] = id;
		}
	});
	
	
	socket.on(cmd_req.draw, (msg)=>{
		msg = JSON.parse(msg);
		
		let m = msg.manual || [];
		m.push(msg.step);
		console.log(m);
		ss.sockets.in(msg.roomid).emit(cmd_res.draw, JSON.stringify(msg.step));
		if(ck.checkManual(m)) {
			let d = {
				winer: msg.step[0]
			}
			ss.sockets.in(msg.roomid).emit(cmd_res.over, JSON.stringify(d));
		}
	})
	
// 	socket.on('chat msg', (msg)=>{
// 		var name = socket.id || null;
// 		if (!name) return;
// 		socket.emit('chat msg', name + ': ' + msg);
// 		socket.broadcast.emit('chat msg', name + ': ' + msg)
// 	});
// 	
// 	socket.on('group', (gn)=>{
// 		socket.join(gn);
// 		socket.emit('group', socket.id + ' join---' + gn);
// 	})
// 	
// 	socket.on('btg', (msg)=>{
// 		let pm = JSON.parse(msg);
// 		let rsl = {
// 			id: socket.id,
// 			group: pm.group,
// 			msg: pm.info
// 		}
// 		
// 		ss.sockets.in(pm.group).emit('btg', JSON.stringify(rsl));
// 	})
})

http.listen(3002, function () {
	console.log('listen on 3002!')
});




// var _rms = require('./room');
// var rms = new _rms();
// rms.createNewRoom('lala');
// rms.createNewRoom('lele');
// console.log(rms.all_room);