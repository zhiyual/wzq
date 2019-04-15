class SocketHelper {

    private static readonly ServerIP: string = "http://172.21.50.30:3002"
    // private static readonly ServerIP: string = "http://45.76.10.80:3002"


    private static _ins: SocketHelper;
    public static get instance(): SocketHelper {
        if (!this._ins) this._ins = new SocketHelper();
        return this._ins;
    }

    public static readonly cmd_c_s = {
        /**登录 */
        login: "login",
        match: "match",
        draw: "draw",
        over: 'over'
    }

    public static readonly cmd_s_c = {
        login: "login",
        match: "match",
        draw: "draw",
        over: "over",
        conn: "conn",
    }


    private _socket: SocketIOClient.Socket;
    public Connect() {
        let surl = SocketHelper.ServerIP;
        this._socket = io(surl);
    }

    public emit(e: string, msg: string) {
        this._socket.emit(e, msg);
    }

    public on(e: string, callback: Function, callbackObj) {
        this._socket.on(e, (msg: string = '')=>{
            callback.call(callbackObj, msg);
        })
    }


    public InitListener() {
        SocketHelper.instance.on(SocketHelper.cmd_s_c.draw, res=>{
            let p: number[] = JSON.parse(res);
            App.play.addManual(p[0], p[1], p[2]);
        }, this);

        SocketHelper.instance.on(SocketHelper.cmd_s_c.over, res=>{
            let p: {winer?: string, loser?: string} = JSON.parse(res);

            let tip: string = "";
            let isWin: boolean = false;
            if (p.winer) {
                tip = p.winer == App.user.user_id?"YOU WIN!":"YOU LOSE!";
                isWin = p.winer == App.user.user_id;
            }

            if (p.loser) {
                tip = p.loser != App.user.user_id?"YOU WIN!":"YOU LOSE!";
                isWin = p.loser != App.user.user_id;
            }

            ResultPanel.Show(isWin)
            .then(()=>{
                App.event.disListener(EventName.GameOver);
            })
            
            
            SocketHelper.instance.emit(SocketHelper.cmd_c_s.over, "");
        }, this);
    }
    
}