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
var Message = (function (_super) {
    __extends(Message, _super);
    function Message() {
        var _this = _super.call(this) || this;
        _this.skinName = MessageSkin;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.OnOpen, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.OnClose, _this);
        return _this;
    }
    Message.prototype.OnOpen = function () {
        this.quickBox.y = 0;
        this.moreBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnMoreTap, this);
        this.qk_list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.OnQkTap, this);
        this.sendBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnSendTap, this);
    };
    Message.prototype.OnClose = function () {
    };
    Message.prototype.OnSendTap = function () {
        this.quickBox.y = 0;
        var t = this.msgLabel.text || "";
        if (!t) {
            ConfirmPanel.Show("消息不能为空！", "alert");
            return;
        }
        this.msgLabel.text = "";
        SocketHelper.instance.emit(SocketHelper.cmd_c_s.msg, JSON.stringify({ msg: t }));
    };
    Message.prototype.OnMoreTap = function () {
        if (this.quickBox.y == 0) {
            // this.quickBox.y = 200;
            egret.Tween.get(this.quickBox).to({ y: -200 }, 100);
        }
        else {
            // this.quickBox.y = 0;
            egret.Tween.get(this.quickBox).to({ y: 0 }, 100);
        }
    };
    Message.prototype.OnQkTap = function () {
        var d = this.qk_list.selectedItem;
        this.msgLabel.text = d.msg;
        egret.Tween.get(this.quickBox).to({ y: 0 }, 100);
    };
    return Message;
}(eui.Component));
__reflect(Message.prototype, "Message");
//# sourceMappingURL=Message.js.map