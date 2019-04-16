var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var PlayPanel = (function (_super) {
    __extends(PlayPanel, _super);
    function PlayPanel() {
        var _this = _super.call(this) || this;
        _this.skinName = PlayPanelSkin;
        _this.AdaptType = UIBase.Adapt1;
        return _this;
    }
    PlayPanel.prototype.OnOpen = function () {
        _super.prototype.OnOpen.call(this);
        // App.play.InitGame(1);
        this.InitMapBg();
        this.hasChess.text = App.play.Me == 1 ? "你执黑子" : "你执白子";
        this.drawTip.text = "黑棋先手";
        this.InitPlayers();
        this.tapMask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnMaskTap, this);
        App.event.addListener(EventName.UpdateManual, this.UpdateChess, this);
        App.event.addListener(EventName.GameOver, this.OnGameOver, this);
        App.event.addListener(EventName.NewMessage, this.OnNewMsg, this);
    };
    PlayPanel.prototype.InitPlayers = function () {
        this.icon_p2.source = App.user.user_avater;
        this.name_p2.text = App.user.user_name;
        this.chess_p2.text = App.play.Me == 1 ? "黑子" : "白子";
        this.msg_p2.visible = false;
        this.icon_p1.source = App.play.rival.icon;
        this.name_p1.text = App.play.rival.name;
        this.chess_p1.text = App.play.Me != 1 ? "黑子" : "白子";
        this.msg_p1.visible = false;
    };
    PlayPanel.prototype.OnClose = function () {
        _super.prototype.OnClose.call(this);
        this._chessPg && this._chessPg.graphics.clear();
        App.event.delListener(EventName.UpdateManual, this.UpdateChess, this);
        App.event.delListener(EventName.GameOver, this.OnGameOver, this);
        App.event.delListener(EventName.NewMessage, this.OnNewMsg, this);
    };
    PlayPanel.prototype.OnNewMsg = function (p) {
        if (p.id == App.user.user_id) {
            this.MeSay(p.msg);
        }
        else {
            this.OtherSay(p.msg);
        }
    };
    PlayPanel.prototype.MeSay = function (s) {
        var _this = this;
        if (!this.timer_me) {
            this.timer_me = new egret.Timer(2000, 1);
            this.timer_me.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function () {
                _this.msg_p2.visible = false;
            }, this);
        }
        this.msg_p1.visible = false;
        this.msg_p2.visible = true;
        this.msg2.text = s;
        this.timer_other && this.timer_other.reset();
        this.timer_me.reset();
        this.timer_me.start();
    };
    PlayPanel.prototype.OtherSay = function (s) {
        var _this = this;
        if (!this.timer_other) {
            this.timer_other = new egret.Timer(2000, 1);
            this.timer_other.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function () {
                _this.msg_p1.visible = false;
            }, this);
        }
        this.msg_p2.visible = false;
        this.msg_p1.visible = true;
        this.msg1.text = s;
        this.timer_me && this.timer_me.reset();
        this.timer_other.reset();
        this.timer_other.start();
    };
    PlayPanel.prototype.InitMapBg = function () {
        var _bg = new egret.Shape();
        this.mapbg.removeChildren();
        this.mapbg.addChild(_bg);
        var dl = 600 / App.play.row;
        _bg.width = _bg.height = 600;
        // _bg.graphics.beginFill(0xcccccc);
        _bg.graphics.lineStyle(2, 0x000000);
        for (var i = 0; i < App.play.row; i++) {
            _bg.graphics.moveTo((i + 0.5) * dl, 0.5 * dl);
            _bg.graphics.lineTo((i + 0.5) * dl, (App.play.row - 0.5) * dl);
        }
        for (var i = 0; i < App.play.row; i++) {
            _bg.graphics.moveTo(0.5 * dl, (i + 0.5) * dl);
            _bg.graphics.lineTo((App.play.row - 0.5) * dl, (i + 0.5) * dl);
        }
        _bg.graphics.endFill();
        _bg.alpha = 0.5;
    };
    PlayPanel.prototype.UpdateChess = function () {
        var _this = this;
        if (!this._chessPg) {
            this._chessPg = new egret.Shape();
            this.chessBox.addChild(this._chessPg);
        }
        this._chessPg.graphics.clear();
        App.play.Manual.forEach(function (v) {
            _this.DrawChess(v[0], v[1], v[2]);
        });
        this.drawTip.text = App.play.isMeDraw ? "到你落子..." : "对方落子...";
    };
    PlayPanel.prototype.DrawChess = function (a, i, j) {
        var dl = 600 / App.play.row;
        var chess_c = a == 1 ? 0x000000 : 0xffffff;
        this._chessPg.graphics.beginFill(chess_c);
        this._chessPg.graphics.drawCircle((i + 0.5) * dl, (j + 0.5) * dl, dl / 3);
        this._chessPg.graphics.endFill();
    };
    PlayPanel.prototype.OnMaskTap = function (e) {
        if (!App.play.isMeDraw)
            return;
        var p = [e.localX, e.localY];
        var dl = 600 / App.play.row;
        var _a = [Math.floor(p[0] / dl), Math.floor(p[1] / dl)], i = _a[0], j = _a[1];
        if (this.CheckIsEmpty(i, j)) {
            console.log(i, j);
            // App.play.addManual(App.play.Me, i, j);
            var p_1 = {
                roomid: App.play.roomid,
                step: [App.play.Me, i, j],
                manual: App.play.Manual,
            };
            console.log(JSON.stringify(p_1));
            SocketHelper.instance.emit(SocketHelper.cmd_c_s.draw, JSON.stringify(p_1));
        }
    };
    PlayPanel.prototype.CheckIsEmpty = function (i, j) {
        return App.play.Manual.filter(function (v) { return v[1] == i && v[2] == j; }).length == 0;
    };
    PlayPanel.prototype.OnGameOver = function () {
        this.Close();
        App.panel.match.Open();
    };
    return PlayPanel;
}(UIBase));
__reflect(PlayPanel.prototype, "PlayPanel");
//# sourceMappingURL=PlayPanel.js.map