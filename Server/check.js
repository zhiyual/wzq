function Check() {
	this.map = [];
	this.row = 17;
}

Check.prototype.checkManual = function(arr) {
	this.map = [];
	for (let i=0;i<this.row;i++) {
		this.map[i] = [];
		for (let j=0;j<this.row;j++) {
			this.map[i][j] = 0;
		}
	}
	
	let n = arr.length;
	for (let k=0;k<n;k++) {
		this.map[arr[k][1]][arr[k][2]] = arr[k][0];
	}
	
	let _last = arr[n-1];
	let _me = _last[0];
	let _count = 0;
	
	// 横向
	for (let i=0;i<5;i++) {
		if (this.map[_last[1]+i] && this.map[_last[1]+i][_last[2]] == _me) {
			_count++;
		}
	}
	for (let i=-1;i>-5;i--) {
		if (this.map[_last[1]+i] && this.map[_last[1]+i][_last[2]] == _me) {
			_count++;
		}
	}
	
	if (_count >= 5) {
		return true;
	}
	
	// 竖向
	_count = 0;
	for (let i=0;i<5;i++) {
		if (this.map[_last[1]] && this.map[_last[1]][_last[2]+i] == _me) {
			_count++;
		}
	}
	for (let i=-1;i>-5;i--) {
		if (this.map[_last[1]] && this.map[_last[1]][_last[2]+i] == _me) {
			_count++;
		}
	}
	
	if (_count >= 5) {
		return true;
	}
	
	// 左上右下
	_count = 0;
	for (let i=0;i<5;i++) {
		if (this.map[_last[1]+i] && this.map[_last[1]+i][_last[2]+i] == _me) {
			_count++;
		}
	}
	for (let i=-1;i>-5;i--) {
		if (this.map[_last[1]+i] && this.map[_last[1]+i][_last[2]+i] == _me) {
			_count++;
		}
	}
	
	if (_count >= 5) {
		return true;
	}
	
	
	// 右上左下
	_count = 0;
	for (let i=0;i<5;i++) {
		if (this.map[_last[1]-i] && this.map[_last[1]-i][_last[2]+i] == _me) {
			_count++;
		}
	}
	for (let i=-1;i>-5;i--) {
		if (this.map[_last[1]+i] && this.map[_last[1]+i][_last[2]-i] == _me) {
			_count++;
		}
	}
	
	if (_count >= 5) {
		return true;
	}
	
	return false;
}


module.exports = Check;