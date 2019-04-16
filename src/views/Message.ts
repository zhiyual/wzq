class Message extends eui.Component {
    public constructor() {
        super();
        this.skinName = MessageSkin;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.OnOpen, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.OnClose, this);
    }


    private quickBox: eui.Group;
    private qk_list: eui.List;
    private moreBtn: eui.Image;
    private sendBtn: eui.Button;
    private msgLabel: eui.EditableText;


    private OnOpen() {
        this.quickBox.y = 0;

        this.moreBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnMoreTap, this);
        this.qk_list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.OnQkTap, this);
        this.sendBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnSendTap, this);
    }

    private OnClose() {

    }

    private OnSendTap() {
        this.quickBox.y = 0;
        let t: string = this.msgLabel.text || "";
        if (!t) {
            ConfirmPanel.Show("消息不能为空！", "alert");
            return;
        }
        this.msgLabel.text = "";
        SocketHelper.instance.emit(SocketHelper.cmd_c_s.msg, JSON.stringify({msg: t}));
    }

    private OnMoreTap() {
        if (this.quickBox.y == 0) {
            // this.quickBox.y = 200;
            egret.Tween.get(this.quickBox).to({y: -200}, 100);
        } else {
            // this.quickBox.y = 0;
            egret.Tween.get(this.quickBox).to({y: 0}, 100);
        }
    }

    private OnQkTap() {
        let d: {msg: string} = this.qk_list.selectedItem;
        this.msgLabel.text = d.msg;
        egret.Tween.get(this.quickBox).to({y: 0}, 100);
    }
}