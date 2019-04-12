var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PanelManager = (function () {
    function PanelManager() {
    }
    Object.defineProperty(PanelManager.prototype, "play", {
        get: function () {
            if (!this._play)
                this._play = new PlayPanel();
            return this._play;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelManager.prototype, "match", {
        get: function () {
            if (!this._match)
                this._match = new MatchPanel();
            return this._match;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelManager.prototype, "login", {
        get: function () {
            if (!this._login)
                this._login = new LoginPanel();
            return this._login;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelManager.prototype, "confirm", {
        get: function () {
            if (!this._confirm)
                this._confirm = new ConfirmPanel();
            return this._confirm;
        },
        enumerable: true,
        configurable: true
    });
    return PanelManager;
}());
__reflect(PanelManager.prototype, "PanelManager");
//# sourceMappingURL=PanelManager.js.map