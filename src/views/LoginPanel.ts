class LoginPanel extends UIBase {
    public constructor() {
        super();
        this.skinName = LoginPanelSkin;
    }

    private nameIn: eui.EditableText;
    private loginBtn: eui.Button;

    protected OnOpen() {
        super.OnOpen();
        this.loginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnLoginTap, this);
        SocketHelper.instance.on(SocketHelper.cmd_s_c.login, res=>{
            let p: {errCode?: number, id?: string, name?: string} = JSON.parse(res);
            if (p.errCode) {
                ConfirmPanel.Show('昵称重复！', 'alert');
            } else {
                ConfirmPanel.Show('登录成功！', 'alert')
                .then(()=>{
                    App.user.InitUserInfo({
                        avater: "",
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
        let p = {
            name: this.nameIn.text
        }
        SocketHelper.instance.emit(SocketHelper.cmd_c_s.login, JSON.stringify(p));
    }
}