var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var MatchPanel = (function (_super) {
    __extends(MatchPanel, _super);
    function MatchPanel() {
        var _this = _super.call(this) || this;
        _this.skinName = MatchPanelSkin;
        return _this;
    }
    MatchPanel.prototype.OnOpen = function () {
        _super.prototype.OnOpen.call(this);
        this.currentState = MatchPanel.StateAuto;
        this.nick.text = App.user.user_name;
        this.icon.source = App.user.user_avater;
        this.matchBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnMatchTap, this);
    };
    MatchPanel.prototype.OnClose = function () {
        _super.prototype.OnClose.call(this);
    };
    MatchPanel.prototype.OnMatchTap = function () {
        var _this = this;
        this.currentState = MatchPanel.StateIng;
        this.mtip.text = 'MATCHING...';
        this.MatchUser()
            .then(function (res) {
            console.log("----", res);
            App.play.InitGame({
                roomid: res.roomid,
                chess: res.chess_b == App.user.user_id ? 1 : 2,
                rival: res.rival,
            });
            _this.mtip.text = App.user.user_name + "\n\nVS\n\n" + res.rival.name;
            setTimeout(function () {
                _this.currentState = MatchPanel.StateAuto;
                _this.Close();
                App.panel.play.Open();
            }, 3000);
        });
    };
    MatchPanel.prototype.MatchUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        SocketHelper.instance.emit(SocketHelper.cmd_c_s.match, "");
                        SocketHelper.instance.on(SocketHelper.cmd_s_c.match, function (res) {
                            resolve(JSON.parse(res));
                        }, _this);
                    })];
            });
        });
    };
    MatchPanel.StateAuto = "auto";
    MatchPanel.StateIng = "ing";
    return MatchPanel;
}(UIBase));
__reflect(MatchPanel.prototype, "MatchPanel");
//# sourceMappingURL=MatchPanel.js.map