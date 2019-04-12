function roommgr(n) {
	this.name = n;
	this.players = [];
}

roommgr.prototype.isFull = function () {
	console.log(this.players)
	return this.players.length >= 2;
}


roommgr.prototype.addPlayer = function (p) {
	if (!p) return false;
	if (this.isFull()) return false;
	this.players.push(p);
}

module.exports = roommgr;