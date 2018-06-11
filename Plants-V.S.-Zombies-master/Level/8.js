oS.Init({
	PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper],
	ZName: [oZombie, oConeheadZombie, oBucketheadZombie],
	PicArr: function() {
		var bigImg = document.createElement("img"); //创建一个img元素
		bigImg.src = "images/beijing9.png"; //给img元素的src属性赋值
		//bigImg.width="320";  //320个像素 不用加px
		var myp = document.getElementById('myp8'); //获得dom对象
		myp8.appendChild(bigImg); //为dom添加子元素img
		var a = oRepeater.prototype,
			b = a.PicArr;
		return ["images/interface/background1.jpg", b[a.CardGif], b[a.NormalGif]]
	}(),
	backgroundImage: "images/interface/background1.jpg",
	CanSelectCard: 1,
	LevelName: "关卡 1-8",
	LargeWaveFlag: {
		10: $("imgFlag1")
	},
	LoadMusic: function() {
		NewEle("oEmbed", "embed", "width:0;height:0", {
			src: "music/Look up at the.swf"
		}, EDAll)
	}
}, {
	ArZ: [oZombie, oZombie, oZombie, oZombie, oZombie, oZombie, oZombie, oConeheadZombie, oConeheadZombie, oBucketheadZombie],
	FlagNum: 10,
	SumToZombie: {
		1: 7,
		2: 9,
		3: 10,
		"default": 10
	},
	FlagToSumNum: {
		a1: [3, 5, 9],
		a2: [1, 2, 3, 10]
	},
	FlagToMonitor: {
		9: [ShowFinalWave, 0]
	},
	FlagToEnd: function() {
		NewImg("imgSF", "images/card/plants/Repeater.png", "left:827px;top:525px", EDAll, {
			onclick: function() {
				GetNewCard(this, oRepeater, 9)
			}
		});
		NewImg("PointerUD", "images/interface/PointerDown.gif", "top:490px;left:836px", EDAll)
	}
});
function aa() {

			document.getElementById("myp8").style.display = "none";
		}
		setTimeout("aa()", 2000);