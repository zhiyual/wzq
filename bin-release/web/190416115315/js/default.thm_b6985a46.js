window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/views/ConfirmSkin.exml'] = window.ConfirmSkin = (function (_super) {
	__extends(ConfirmSkin, _super);
	function ConfirmSkin() {
		_super.call(this);
		this.skinParts = ["msgLabel","yesBtn","noBtn","content"];
		
		this.currentState = "confirm";
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.content_i()];
		this.noBtn_i();
		
		this.states = [
			new eui.State ("confirm",
				[
					new eui.AddItems("noBtn","content",1,"")
				])
			,
			new eui.State ("alert",
				[
					new eui.SetProperty("yesBtn","horizontalCenter",0),
					new eui.SetProperty("yesBtn","label","OK")
				])
		];
	}
	var _proto = ConfirmSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Group();
		this.content = t;
		t.height = 320;
		t.horizontalCenter = 0;
		t.verticalCenter = -50;
		t.width = 460;
		t.elementsContent = [this._Rect2_i(),this.msgLabel_i(),this.yesBtn_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillColor = 0xffffff;
		t.left = 0;
		t.right = 0;
		t.strokeColor = 0xea9b00;
		t.strokeWeight = 4;
		t.top = 0;
		return t;
	};
	_proto.msgLabel_i = function () {
		var t = new eui.Label();
		this.msgLabel = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.maxWidth = 400;
		t.text = "Label";
		t.textColor = 0x000000;
		t.verticalCenter = -50;
		return t;
	};
	_proto.yesBtn_i = function () {
		var t = new eui.Button();
		this.yesBtn = t;
		t.bottom = 30;
		t.horizontalCenter = -130;
		t.label = "YES";
		return t;
	};
	_proto.noBtn_i = function () {
		var t = new eui.Button();
		this.noBtn = t;
		t.bottom = 30;
		t.horizontalCenter = 130;
		t.label = "NO";
		return t;
	};
	return ConfirmSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/views/LoginPanelSkin.exml'] = window.LoginPanelSkin = (function (_super) {
	__extends(LoginPanelSkin, _super);
	function LoginPanelSkin() {
		_super.call(this);
		this.skinParts = ["nameIn","loginBtn","icon","l1","content"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.content_i()];
	}
	var _proto = LoginPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg1_jpg";
		t.top = 0;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Group();
		this.content = t;
		t.height = 1136;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 640;
		t.elementsContent = [this._Group1_i(),this.l1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 300;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 600;
		t.elementsContent = [this._Rect1_i(),this.nameIn_i(),this.loginBtn_i(),this.icon_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0xFFFFFF;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		return t;
	};
	_proto.nameIn_i = function () {
		var t = new eui.EditableText();
		this.nameIn = t;
		t.background = true;
		t.backgroundColor = 0x02e8b1;
		t.bold = true;
		t.border = true;
		t.borderColor = 0xc48200;
		t.fontFamily = "Microsoft YaHei";
		t.height = 40;
		t.horizontalCenter = "0";
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 400;
		t.y = 55;
		return t;
	};
	_proto.loginBtn_i = function () {
		var t = new eui.Button();
		this.loginBtn = t;
		t.horizontalCenter = 0;
		t.label = "登录";
		t.y = 197;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "001_png";
		t.verticalCenter = -260;
		t.x = 240;
		t.y = -171;
		return t;
	};
	_proto.l1_i = function () {
		var t = new eui.Label();
		this.l1 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.maxWidth = 600;
		t.size = 24;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.y = 818;
		return t;
	};
	return LoginPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/views/MapPanelSkin.exml'] = window.MapPanelSkin = (function (_super) {
	__extends(MapPanelSkin, _super);
	function MapPanelSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
	}
	var _proto = MapPanelSkin.prototype;

	return MapPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/views/MatchPanelSkin.exml'] = window.MatchPanelSkin = (function (_super) {
	__extends(MatchPanelSkin, _super);
	function MatchPanelSkin() {
		_super.call(this);
		this.skinParts = ["matchBtn","nick","icon","content","mtip"];
		
		this.currentState = "auto";
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.content_i()];
		this.matchBtn_i();
		
		this.nick_i();
		
		this.icon_i();
		
		this._Rect1_i();
		
		this.mtip_i();
		
		this.states = [
			new eui.State ("auto",
				[
					new eui.AddItems("matchBtn","content",0,""),
					new eui.AddItems("nick","content",1,""),
					new eui.AddItems("icon","content",1,"")
				])
			,
			new eui.State ("ing",
				[
					new eui.AddItems("_Rect1","",1,""),
					new eui.AddItems("mtip","",1,"")
				])
		];
	}
	var _proto = MatchPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg1_jpg";
		t.top = 0;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Group();
		this.content = t;
		t.height = 1136;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 640;
		t.elementsContent = [];
		return t;
	};
	_proto.matchBtn_i = function () {
		var t = new eui.Button();
		this.matchBtn = t;
		t.horizontalCenter = 0;
		t.label = "开始匹配";
		t.width = 200;
		t.y = 874;
		return t;
	};
	_proto.nick_i = function () {
		var t = new eui.Label();
		this.nick = t;
		t.background = true;
		t.backgroundColor = 0xff0000;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "昵称";
		t.textColor = 0x00f9ff;
		t.y = 244;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.horizontalCenter = 0;
		t.source = "001_png";
		t.y = 384;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.mtip_i = function () {
		var t = new eui.Label();
		this.mtip = t;
		t.horizontalCenter = 0;
		t.size = 45;
		t.text = "Matching...";
		t.textAlign = "center";
		t.verticalCenter = -120;
		return t;
	};
	return MatchPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/views/MessageSkin.exml'] = window.MessageSkin = (function (_super) {
	__extends(MessageSkin, _super);
	function MessageSkin() {
		_super.call(this);
		this.skinParts = ["qk_list","quickBox","moreBtn","sendBtn","msgLabel"];
		
		this.height = 300;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = MessageSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 90;
		t.left = 0;
		t.right = 0;
		t.elementsContent = [this.quickBox_i(),this._Rect1_i(),this._Rect2_i(),this.moreBtn_i(),this.sendBtn_i(),this.msgLabel_i()];
		return t;
	};
	_proto.quickBox_i = function () {
		var t = new eui.Group();
		this.quickBox = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 500;
		t.x = 120;
		t.y = -200;
		t.elementsContent = [this._Scroller1_i()];
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.viewport = this.qk_list_i();
		return t;
	};
	_proto.qk_list_i = function () {
		var t = new eui.List();
		this.qk_list = t;
		t.itemRendererSkinName = MsgItemSkin;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.msg = "我等到花都谢啦！";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.msg = "哇哦！！！！";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.msg = "你死到临头！";
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.msg = "圣光会制裁你！";
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		t.msg = "哈哈哈！！";
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xff9300;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 20;
		t.fillColor = 0x00a7ff;
		t.height = 50;
		t.right = 180;
		t.strokeColor = 0xe1ff00;
		t.strokeWeight = 2;
		t.verticalCenter = 0;
		t.width = 440;
		return t;
	};
	_proto.moreBtn_i = function () {
		var t = new eui.Image();
		this.moreBtn = t;
		t.right = 100;
		t.source = "more_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.sendBtn_i = function () {
		var t = new eui.Button();
		this.sendBtn = t;
		t.label = "发送";
		t.right = 20;
		t.verticalCenter = 0;
		t.width = 60;
		return t;
	};
	_proto.msgLabel_i = function () {
		var t = new eui.EditableText();
		this.msgLabel = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.right = "190";
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		t.width = 420;
		return t;
	};
	return MessageSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/views/MsgItemSkin.exml'] = window.MsgItemSkin = (function (_super) {
	__extends(MsgItemSkin, _super);
	function MsgItemSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 50;
		this.width = 500;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Label1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.msg"],[0],this._Label1,"text");
	}
	var _proto = MsgItemSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x00e9ff;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.height = 2;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.height = 2;
		t.left = 0;
		t.right = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 26;
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	return MsgItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/views/PlayPanelSkin.exml'] = window.PlayPanelSkin = (function (_super) {
	__extends(PlayPanelSkin, _super);
	function PlayPanelSkin() {
		_super.call(this);
		this.skinParts = ["mapbg","chessBox","tapMask","hasChess","drawTip","icon_p1","icon_p2","name_p1","name_p2","chess_p1","chess_p2","msg1","msg_p1","msg2","msg_p2","content"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.content_i()];
	}
	var _proto = PlayPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg1_jpg";
		t.top = 0;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Group();
		this.content = t;
		t.height = 1136;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 640;
		t.elementsContent = [this._Group1_i(),this.hasChess_i(),this.drawTip_i(),this._Group2_i(),this._Message1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 600;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 600;
		t.elementsContent = [this._Rect1_i(),this.mapbg_i(),this.chessBox_i(),this.tapMask_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.fillColor = 0xffffff;
		t.height = 600;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.mapbg_i = function () {
		var t = new eui.Group();
		this.mapbg = t;
		t.height = 600;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chessBox_i = function () {
		var t = new eui.Group();
		this.chessBox = t;
		t.height = 600;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tapMask_i = function () {
		var t = new eui.Rect();
		this.tapMask = t;
		t.fillAlpha = 0;
		t.fillColor = 0xFFFFFF;
		t.height = 600;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.hasChess_i = function () {
		var t = new eui.Label();
		this.hasChess = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "Label";
		t.verticalCenter = 366;
		return t;
	};
	_proto.drawTip_i = function () {
		var t = new eui.Label();
		this.drawTip = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "Label";
		t.textColor = 0x000000;
		t.verticalCenter = -383;
		t.x = 267;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 137;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 640;
		t.elementsContent = [this._Rect2_i(),this.icon_p1_i(),this.icon_p2_i(),this.name_p1_i(),this.name_p2_i(),this.chess_p1_i(),this.chess_p2_i(),this.msg_p1_i(),this.msg_p2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xefb434;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.icon_p1_i = function () {
		var t = new eui.Image();
		this.icon_p1 = t;
		t.height = 80;
		t.left = 30;
		t.top = 30;
		t.width = 80;
		return t;
	};
	_proto.icon_p2_i = function () {
		var t = new eui.Image();
		this.icon_p2 = t;
		t.height = 80;
		t.right = 30;
		t.top = 30;
		t.width = 80;
		return t;
	};
	_proto.name_p1_i = function () {
		var t = new eui.Label();
		this.name_p1 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.left = 130;
		t.text = "Label";
		t.textColor = 0xff0000;
		t.top = 36;
		return t;
	};
	_proto.name_p2_i = function () {
		var t = new eui.Label();
		this.name_p2 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.right = 130;
		t.text = "Label";
		t.textColor = 0xff0000;
		t.top = 36;
		return t;
	};
	_proto.chess_p1_i = function () {
		var t = new eui.Label();
		this.chess_p1 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.left = 130;
		t.size = 24;
		t.text = "Label";
		t.textColor = 0x0009ff;
		t.top = 80;
		return t;
	};
	_proto.chess_p2_i = function () {
		var t = new eui.Label();
		this.chess_p2 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.right = 130;
		t.size = 24;
		t.text = "Label";
		t.textColor = 0x0009FF;
		t.top = 80;
		t.width = 65;
		return t;
	};
	_proto.msg_p1_i = function () {
		var t = new eui.Group();
		this.msg_p1 = t;
		t.left = 30;
		t.minWidth = 200;
		t.top = 70;
		t.elementsContent = [this._Image2_i(),this.msg1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(51,58,2,7);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "msg_bg_png";
		t.top = 0;
		return t;
	};
	_proto.msg1_i = function () {
		var t = new eui.Label();
		this.msg1 = t;
		t.bottom = 10;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.lineSpacing = 5;
		t.maxWidth = 400;
		t.right = 10;
		t.size = 26;
		t.text = "Label";
		t.textColor = 0x000000;
		t.top = 60;
		return t;
	};
	_proto.msg_p2_i = function () {
		var t = new eui.Group();
		this.msg_p2 = t;
		t.minWidth = 200;
		t.right = 30;
		t.top = 70;
		t.elementsContent = [this._Image3_i(),this.msg2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(7,58,3,7);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "msg_bg_png";
		t.top = 0;
		return t;
	};
	_proto.msg2_i = function () {
		var t = new eui.Label();
		this.msg2 = t;
		t.bottom = 10;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.lineSpacing = 5;
		t.maxWidth = 400;
		t.right = 10;
		t.size = 26;
		t.text = "Label";
		t.textColor = 0x000000;
		t.top = 60;
		return t;
	};
	_proto._Message1_i = function () {
		var t = new Message();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.skinName = "MessageSkin";
		return t;
	};
	return PlayPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/views/ResultPanelSkin.exml'] = window.ResultPanelSkin = (function (_super) {
	__extends(ResultPanelSkin, _super);
	function ResultPanelSkin() {
		_super.call(this);
		this.skinParts = ["tipLB","yesBtn","content"];
		
		this.currentState = "vic";
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.content_i()];
		this.states = [
			new eui.State ("vic",
				[
					new eui.SetProperty("tipLB","textColor",0xffe500),
					new eui.SetProperty("tipLB","text","VICTORY")
				])
			,
			new eui.State ("def",
				[
					new eui.SetProperty("tipLB","textColor",0xc90000),
					new eui.SetProperty("tipLB","text","DEFEAT")
				])
		];
	}
	var _proto = ResultPanelSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Group();
		this.content = t;
		t.height = 1136;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 640;
		t.elementsContent = [this.tipLB_i(),this.yesBtn_i()];
		return t;
	};
	_proto.tipLB_i = function () {
		var t = new eui.Label();
		this.tipLB = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 90;
		t.text = "Label";
		t.verticalCenter = 0;
		t.x = 200;
		t.y = 523;
		return t;
	};
	_proto.yesBtn_i = function () {
		var t = new eui.Button();
		this.yesBtn = t;
		t.horizontalCenter = 0;
		t.label = "确  定";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 360;
		t.width = 200;
		return t;
	};
	return ResultPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);