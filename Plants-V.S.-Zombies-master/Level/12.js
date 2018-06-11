//关卡页面10波强度最大为15
oS.Init({
	FlagToEnd: function() {
		NewImg('imgSF', 'images/Card/Plants/FumeShroom.png', 'left:587px;top:270px', EDAll, {
			onclick: function() {
				SelectModal(0)
			}
		});
		NewImg('PointerUD', 'images/interface/PointerDown.gif', 'top:235px;left:596px', EDAll);
	}
});