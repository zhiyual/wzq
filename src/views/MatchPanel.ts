class MatchPanel extends UIBase {

    private static readonly StateAuto = "auto";
    private static readonly StateIng = "ing";

    public constructor() {
        super();
        this.skinName = MatchPanelSkin;
    }

    private matchBtn: eui.Button;
    private nick: eui.Label;

    protected OnOpen() {
        super.OnOpen();
        this.currentState = MatchPanel.StateAuto;
        this.nick.text = App.user.user_name;
        this.matchBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnMatchTap, this);
    }

    protected OnClose() {
        super.OnClose();
    }

    private OnMatchTap() {
        this.currentState = MatchPanel.StateIng;
        this.MatchUser()
        .then((res: {roomid: string, chess_b: string})=>{
            console.log("----",res)
            this.currentState = MatchPanel.StateAuto;
            this.Close();
            App.play.InitGame({
                roomid: res.roomid,
                chess: res.chess_b == App.user.user_id?1:2,
            });
            App.panel.play.Open();
        })
    }

    private async MatchUser(): Promise<any> {
        return new Promise((resolve, reject)=>{
            SocketHelper.instance.emit(SocketHelper.cmd_c_s.match, "");
            SocketHelper.instance.on(SocketHelper.cmd_s_c.match, (res)=>{
                resolve(JSON.parse(res));
            }, this)
        })
    }
}