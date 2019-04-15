class PlayPanel extends UIBase {
    public constructor() {
        super();
        this.skinName = PlayPanelSkin;
        this.AdaptType = UIBase.Adapt1;
    }


    private mapbg: eui.Group;
    private tapMask: eui.Rect;
    private chessBox: eui.Group;
    private _chessPg: egret.Shape;

    private icon_p1: eui.Image;
    private name_p1: eui.Label;
    private chess_p1: eui.Label;
    private icon_p2: eui.Image;
    private name_p2: eui.Label;
    private chess_p2: eui.Label;

    private drawTip: eui.Label;
    private hasChess: eui.Label;

    protected OnOpen() {
        super.OnOpen();

        // App.play.InitGame(1);

        this.InitMapBg();
        this.hasChess.text = App.play.Me == 1?"你执黑子":"你执白子";
        this.drawTip.text = "黑棋先手";
        this.InitPlayers();


        this.tapMask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnMaskTap, this);
        App.event.addListener(EventName.UpdateManual, this.UpdateChess, this);
        App.event.addListener(EventName.GameOver, this.OnGameOver, this);
    }

    private InitPlayers() {
        this.icon_p1.source = App.user.user_avater;
        this.name_p1.text = App.user.user_name;
        this.chess_p1.text = App.play.Me == 1?"黑子":"白子";

        this.icon_p2.source = App.play.rival.icon;
        this.name_p2.text = App.play.rival.name;
        this.chess_p2.text = App.play.Me != 1?"黑子":"白子";
    }

    protected OnClose() {
        super.OnClose();
        this._chessPg && this._chessPg.graphics.clear();
        App.event.delListener(EventName.UpdateManual, this.UpdateChess, this);
        App.event.delListener(EventName.GameOver, this.OnGameOver, this);
    }

    private InitMapBg() {
        let _bg = new egret.Shape();
        this.mapbg.removeChildren();
        this.mapbg.addChild(_bg);

        let dl = 600 / App.play.row;
        _bg.width = _bg.height = 600;
        // _bg.graphics.beginFill(0xcccccc);
        _bg.graphics.lineStyle(2, 0x000000);
        for (let i=0;i<App.play.row;i++) {
            _bg.graphics.moveTo((i+0.5)*dl, 0.5*dl);
            _bg.graphics.lineTo((i+0.5)*dl, (App.play.row - 0.5)*dl);            
        }

        for (let i=0;i<App.play.row;i++) {
            _bg.graphics.moveTo(0.5*dl, (i+0.5)*dl);
            _bg.graphics.lineTo((App.play.row - 0.5)*dl, (i+0.5)*dl);            
        }

        _bg.graphics.endFill();
        _bg.alpha = 0.5;
    }

    private UpdateChess() {
        if (!this._chessPg) {
            this._chessPg = new egret.Shape();
            this.chessBox.addChild(this._chessPg);
        }

        this._chessPg.graphics.clear();
        App.play.Manual.forEach((v)=>{
            this.DrawChess(v[0], v[1], v[2]);
        });

        this.drawTip.text = App.play.isMeDraw?"到你落子...":"对方落子..."
    }

    private DrawChess(a, i, j) {
        let dl = 600 / App.play.row;
        let chess_c: number = a==1?0x000000:0xffffff;
        this._chessPg.graphics.beginFill(chess_c);
        this._chessPg.graphics.drawCircle((i+0.5)*dl, (j+0.5)*dl, dl/3);
        this._chessPg.graphics.endFill();
    }


    private OnMaskTap(e: egret.TouchEvent) {
        if (!App.play.isMeDraw) return;
        let p = [e.localX, e.localY];
        let dl = 600 / App.play.row;
        let [i, j] = [Math.floor(p[0]/dl), Math.floor(p[1]/dl)]
        if (this.CheckIsEmpty(i, j)) {
            console.log(i, j);
            // App.play.addManual(App.play.Me, i, j);
            let p = {
                roomid: App.play.roomid,
                step: [App.play.Me, i, j],
                manual: App.play.Manual,
            }
            console.log(JSON.stringify(p))
            SocketHelper.instance.emit(SocketHelper.cmd_c_s.draw, JSON.stringify(p));
        }
    }

    private CheckIsEmpty(i, j): boolean {
        return App.play.Manual.filter((v)=>{return v[1]==i&&v[2]==j}).length == 0;
    }

    private OnGameOver() {
        this.Close();
        App.panel.match.Open();
    }
}