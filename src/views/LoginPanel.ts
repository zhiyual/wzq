class LoginPanel extends UIBase {
    public constructor() {
        super();
        this.skinName = LoginPanelSkin;
    }

    private nameIn: eui.EditableText;
    private loginBtn: eui.Button;
    private icon: eui.Image;
    private l1: eui.Label;

    private _avater: string;

    protected OnOpen() {
        super.OnOpen();
        this._avater = App.config.RandomIcon;
        this.icon.source = this._avater;
        this.nameIn.text = `${Utils.Screen.width} * ${Utils.Screen.height}`
        this.l1.text = `${App.layer.Excs[0]}\n${App.layer.GlobalScale}`
        this.loginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnLoginTap, this);
        SocketHelper.instance.on(SocketHelper.cmd_s_c.login, res=>{
            let p: {errCode?: number, id?: string, name?: string} = JSON.parse(res);
            if (p.errCode) {
                ConfirmPanel.Show('昵称重复！', 'alert');
            } else {
                ConfirmPanel.Show('登录成功！', 'alert')
                .then(()=>{
                    App.user.InitUserInfo({
                        avater: this._avater,
                        name: p.name,
                        uid: p.id
                    });
                    this.Close();
                    App.panel.match.Open();
                })
            }
        }, this)
    }

    protected OnClose() {
        super.OnClose();
    }

    private OnLoginTap() {
        let __nick = this.nameIn.text || "";
        if (__nick.length == 0) {
            ConfirmPanel.Show('请输入昵称！', 'alert');
            return;
        }

        if (__nick.length > 9) {
            ConfirmPanel.Show('昵称长度为 1-9 个字符！', 'alert');
            return;
        }


        let p = {
            name: __nick,
            icon: this._avater
        }
        SocketHelper.instance.emit(SocketHelper.cmd_c_s.login, JSON.stringify(p));
    }
}