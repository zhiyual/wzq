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
var LoginPanel = (function (_super) {
    __extends(LoginPanel, _super);
    function LoginPanel() {
        var _this = _super.call(this) || this;
        _this.skinName = LoginPanelSkin;
        return _this;
    }
    LoginPanel.prototype.OnOpen = function () {
        var _this = this;
        _super.prototype.OnOpen.call(this);
        this._avater = App.config.RandomIcon;
        this.icon.source = this._avater;
        // this.nameIn.text = `咸鱼号：${Math.floor(Math.random()*1000)}`;
        this.nameIn.text = Utils.RandomHz(Math.floor(Math.random() * 4) + 2);
        // this.l1.text = `${App.layer.Excs[0]}\n${App.layer.GlobalScale}`
        this.loginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnLoginTap, this);
        SocketHelper.instance.on(SocketHelper.cmd_s_c.login, function (res) {
            var p = JSON.parse(res);
            if (p.errCode) {
                ConfirmPanel.Show('昵称重复！', 'alert');
            }
            else {
                ConfirmPanel.Show('登录成功！', 'alert')
                    .then(function () {
                    App.user.InitUserInfo({
                        avater: _this._avater,
                        name: p.name,
                        uid: p.id
                    });
                    _this.Close();
                    App.panel.match.Open();
                });
            }
        }, this);
    };
    LoginPanel.prototype.OnClose = function () {
        _super.prototype.OnClose.call(this);
    };
    LoginPanel.prototype.OnLoginTap = function () {
        var __nick = this.nameIn.text || "";
        if (__nick.length == 0) {
            ConfirmPanel.Show('请输入昵称！', 'alert');
            return;
        }
        if (__nick.length > 9) {
            ConfirmPanel.Show('昵称长度为 1-9 个字符！', 'alert');
            return;
        }
        var p = {
            name: __nick,
            icon: this._avater
        };
        SocketHelper.instance.emit(SocketHelper.cmd_c_s.login, JSON.stringify(p));
    };
    return LoginPanel;
}(UIBase));
__reflect(LoginPanel.prototype, "LoginPanel");
//# sourceMappingURL=LoginPanel.js.map