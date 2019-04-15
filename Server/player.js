function player(id, name, ws) {
	this.id = id;
	this.name = name;
	this.ws = ws;
	
	this.icon = "";
	
	this.room = "";
	this.chess = 0;
}

player.prototype.Join = function(key) {
	this.room = key;
	this.chess = key == this.id?1:2;
	this.ws.join(key);
}

player.prototype.Leave = function() {
	if (!this.room) return;
	this.ws.leave(this.room);
	this.room = "";
	this.chess = 0;
}

module.exports = player;