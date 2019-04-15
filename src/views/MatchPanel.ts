class MatchPanel extends UIBase {

    private static readonly StateAuto = "auto";
    private static readonly StateIng = "ing";

    public constructor() {
        super();
        this.skinName = MatchPanelSkin;
    }

    private matchBtn: eui.Button;
    private nick: eui.Label;
    private mtip: eui.Label;
    private icon: eui.Image;

    protected OnOpen() {
        super.OnOpen();
        this.currentState = MatchPanel.StateAuto;
        this.nick.text = App.user.user_name;
        this.icon.source = App.user.user_avater;
        this.matchBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnMatchTap, this);
    }

    protected OnClose() {
        super.OnClose();
    }

    private OnMatchTap() {
        this.currentState = MatchPanel.StateIng;
        this.mtip.text = 'MATCHING...';
        this.MatchUser()
        .then((res: {roomid: string, chess_b: string, rival: {name: string, icon: string}})=>{
            console.log("----",res)
            App.play.InitGame({
                roomid: res.roomid,
                chess: res.chess_b == App.user.user_id?1:2,
                rival: res.rival,
            });
            this.mtip.text = `${App.user.user_name}\n\nVS\n\n${res.rival.name}`;
            setTimeout(()=>{
                this.currentState = MatchPanel.StateAuto;
                this.Close();
                App.panel.play.Open();
            }, 3000);
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