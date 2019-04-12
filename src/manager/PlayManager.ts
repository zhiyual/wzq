class PlayManager {
    public readonly row = 17;

    private _manual: number[][] = [];
    public addManual(chess: number, i: number, j: number) {
        this._manual.push([chess, i, j]);
        App.event.disListener(EventName.UpdateManual);
    }

    public get Manual(): number[][] {
        return this._manual || [];
    }


    private _map: number[][] = [];

    private meChess: number = 1; 

    roomid: string;
    public InitGame(res: {roomid: string, chess: number}) {
        this._manual = [];
        this.meChess = res.chess;
        this.roomid = res.roomid;
    }

    /**
     * 1.黑子   2.白子
     */
    public get Me(): number {
        return this.meChess;
    }

    public get isMeDraw(): boolean {
        let l = this.Manual.length;
        if (l == 0) {
            return this.Me == 1;
        } else {
            return this.Manual[l - 1][0] != this.Me;
        }
    }
}