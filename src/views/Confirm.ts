class ConfirmPanel extends UIBase {
    public constructor() {
        super();
        this.skinName = ConfirmSkin;
    }

    private msgLabel: eui.Label;
    private yesBtn: eui.Button;
    private noBtn: eui.Button;

    protected OnOpen() {
        super.OnOpen();
    }

    protected OnClose() {
        super.OnClose();
    }

    public Open(layer: egret.DisplayObjectContainer, params: ConfirmParams) {
        super.Open(layer);
        this.msgLabel.textFlow = (new egret.HtmlTextParser).parser(params.msg);
        let ste: string = params.type || "confirm";
        this.currentState = ste;
        return new Promise((resolve, reject)=>{
            this.yesBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=> {
                this.Close();
                resolve();
            }, this);

            this.noBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=> {
                this.Close();
                reject()
            }, this);
        })
    }

    public static Show <k extends "confirm"|"alert"> (msg: string, type?: k) {
        return App.panel.confirm.Open(App.layer.loadingLayer, {msg: msg, type: type});
    }
    
}

type ConfirmParams = {
    msg: string;
    type?: string;
}