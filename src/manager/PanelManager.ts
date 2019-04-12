class PanelManager {
    private _play: PlayPanel;
    public get play(): PlayPanel {
        if (!this._play) this._play = new PlayPanel();
        return this._play;
    }

    private _match: MatchPanel;
    public get match(): MatchPanel {
        if (!this._match) this._match = new MatchPanel();
        return this._match;
    }

    private _login: LoginPanel;
    public get login(): LoginPanel {
        if (!this._login) this._login = new LoginPanel();
        return this._login;
    }

    private _confirm: ConfirmPanel;
    public get confirm(): ConfirmPanel {
        if (!this._confirm) this._confirm = new ConfirmPanel();
        return this._confirm;
    }
}