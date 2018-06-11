//关卡页面10波强度最大为15
oS.Init({
	FlagToEnd: function() {
		NewImg('imgSF', 'images/Card/Plants/SunShroom.png', 'left:667px;top:220px', EDAll, {
			onclick: function() {
				SelectModal(12)
			}
		});
		NewImg('PointerUD', 'images/interface/PointerDown.gif', 'top:185px;left:676px', EDAll);
	}
});