class ResultPanel extends UIBase {

    private static readonly StateVic = "vic";
    private static readonly StateDef = "def";

    public constructor() {
        super();
        this.skinName = ResultPanelSkin;
    }

    private yesBtn: eui.Button;
    private tipLB: eui.Label;


    private _rsl: boolean;

    protected OnOpen() {
        super.OnOpen();
        this.currentState = this._rsl?ResultPanel.StateVic:ResultPanel.StateDef;
        this.tipLB.verticalCenter = 0;
        this.yesBtn.visible = false;

        egret.Tween.get(this.tipLB).wait(100).to({verticalCenter: -340}, 700)
        .call(()=>{
            this.yesBtn.visible = true;
        })
    }

    protected OnClose() {
        super.OnClose();
    }


    public async Open(layer: egret.DisplayObjectContainer, rsl: boolean): Promise<any> {
        return new Promise((resolve, reject)=>{
            this._rsl = rsl;
            super.Open(layer);
            this.yesBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
                this.Close();
                resolve();
            }, this)
        })
    }


    public static async Show(rsl: boolean): Promise<any> {
        return App.panel.result.Open(App.layer.tipLayer, rsl);
    }
}