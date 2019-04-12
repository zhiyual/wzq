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
var ConfirmPanel = (function (_super) {
    __extends(ConfirmPanel, _super);
    function ConfirmPanel() {
        var _this = _super.call(this) || this;
        _this.skinName = ConfirmSkin;
        return _this;
    }
    ConfirmPanel.prototype.OnOpen = function () {
        _super.prototype.OnOpen.call(this);
    };
    ConfirmPanel.prototype.OnClose = function () {
        _super.prototype.OnClose.call(this);
    };
    ConfirmPanel.prototype.Open = function (layer, params) {
        var _this = this;
        _super.prototype.Open.call(this, layer);
        this.msgLabel.textFlow = (new egret.HtmlTextParser).parser(params.msg);
        var ste = params.type || "confirm";
        this.currentState = ste;
        return new Promise(function (resolve, reject) {
            _this.yesBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.Close();
                resolve();
            }, _this);
            _this.noBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.Close();
                reject();
            }, _this);
        });
    };
    ConfirmPanel.Show = function (msg, type) {
        return App.panel.confirm.Open(App.layer.loadingLayer, { msg: msg, type: type });
    };
    return ConfirmPanel;
}(UIBase));
__reflect(ConfirmPanel.prototype, "ConfirmPanel");
//# sourceMappingURL=Confirm.js.map