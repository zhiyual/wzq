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


    private OnOpen() {}

    private OnClose() {}
}