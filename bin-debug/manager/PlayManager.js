var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PlayManager = (function () {
    function PlayManager() {
        this.row = 17;
        this._manual = [];
        this._map = [];
        this.meChess = 1;
        // =============================
        this._rival = null;
    }
    PlayManager.prototype.addManual = function (chess, i, j) {
        this._manual.push([chess, i, j]);
        App.event.disListener(EventName.UpdateManual);
    };
    Object.defineProperty(PlayManager.prototype, "Manual", {
        get: function () {
            return this._manual || [];
        },
        enumerable: true,
        configurable: true
    });
    PlayManager.prototype.InitGame = function (res) {
        this._manual = [];
        this.meChess = res.chess;
        this.roomid = res.roomid;
        this._rival = res.rival;
    };
    Object.defineProperty(PlayManager.prototype, "Me", {
        /**
         * 1.黑子   2.白子
         */
        get: function () {
            return this.meChess;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayManager.prototype, "isMeDraw", {
        get: function () {
            var l = this.Manual.length;
            if (l == 0) {
                return this.Me == 1;
            }
            else {
                return this.Manual[l - 1][0] != this.Me;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayManager.prototype, "rival", {
        get: function () {
            return this._rival;
        },
        enumerable: true,
        configurable: true
    });
    return PlayManager;
}());
__reflect(PlayManager.prototype, "PlayManager");
//# sourceMappingURL=PlayManager.js.map