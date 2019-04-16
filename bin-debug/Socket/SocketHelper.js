var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SocketHelper = (function () {
    function SocketHelper() {
    }
    Object.defineProperty(SocketHelper, "instance", {
        get: function () {
            if (!this._ins)
                this._ins = new SocketHelper();
            return this._ins;
        },
        enumerable: true,
        configurable: true
    });
    SocketHelper.prototype.Connect = function () {
        var surl = window['env'] == "debug" ? SocketHelper.ServerIP_deb : SocketHelper.ServerIP_pub;
        this._socket = io(surl);
    };
    SocketHelper.prototype.emit = function (e, msg) {
        this._socket.emit(e, msg);
    };
    SocketHelper.prototype.on = function (e, callback, callbackObj) {
        this._socket.on(e, function (msg) {
            if (msg === void 0) { msg = ''; }
            callback.call(callbackObj, msg);
        });
    };
    SocketHelper.prototype.InitListener = function () {
        SocketHelper.instance.on(SocketHelper.cmd_s_c.draw, function (res) {
            var p = JSON.parse(res);
            App.play.addManual(p[0], p[1], p[2]);
        }, this);
        SocketHelper.instance.on(SocketHelper.cmd_s_c.over, function (res) {
            var p = JSON.parse(res);
            var tip = "";
            var isWin = false;
            if (p.winer) {
                tip = p.winer == App.user.user_id ? "YOU WIN!" : "YOU LOSE!";
                isWin = p.winer == App.user.user_id;
            }
            if (p.loser) {
                tip = p.loser != App.user.user_id ? "YOU WIN!" : "YOU LOSE!";
                isWin = p.loser != App.user.user_id;
            }
            ResultPanel.Show(isWin)
                .then(function () {
                App.event.disListener(EventName.GameOver);
            });
            SocketHelper.instance.emit(SocketHelper.cmd_c_s.over, "");
        }, this);
        SocketHelper.instance.on(SocketHelper.cmd_s_c.msg, function (res) {
            var p = JSON.parse(res);
            App.event.disListener(EventName.NewMessage, p);
        }, this);
    };
    SocketHelper.ServerIP_deb = "http://localhost:3002";
    SocketHelper.ServerIP_pub = "http://45.76.10.80:3002";
    SocketHelper.cmd_c_s = {
        /**登录 */
        login: "login",
        match: "match",
        draw: "draw",
        over: 'over',
        msg: "msg",
    };
    SocketHelper.cmd_s_c = {
        login: "login",
        match: "match",
        draw: "draw",
        over: "over",
        conn: "conn",
        msg: 'msg',
    };
    return SocketHelper;
}());
__reflect(SocketHelper.prototype, "SocketHelper");
//# sourceMappingURL=SocketHelper.js.map