oS.Init({
	PName: [oPeashooter, oSunFlower, oCherryBomb],
	ZName: [oZombie, oConeheadZombie],
	PicArr: function() {
		var bigImg = document.createElement("img"); //创建一个img元素
		bigImg.src = "images/beijing4.png"; //给img元素的src属性赋值
		//bigImg.width="320";  //320个像素 不用加px
		var myp = document.getElementById('myp3'); //获得dom对象
		myp3.appendChild(bigImg); //为dom添加子元素img
		var a = oWallNut.prototype,
			b = a.PicArr;
		return ["images/interface/background1unsodded2.jpg", b[a.CardGif], b[a.NormalGif]]
	}(),
	backgroundImage: "images/interface/background1unsodded2.jpg",
	LF: [0, 0, 1, 1, 1, 0],
	CanSelectCard: 0,
	LevelName: "关卡 1-3",
	LargeWaveFlag: {
		8: $("imgFlag1")
	},
	LoadMusic: function() {
		NewEle("oEmbed", "embed", "width:0;height:0", {
			src: "music/Faster.swf"
		}, EDAll)
	},
	InitLawnMower: function() {
		var a = 5,
			b = oGd.$LM;
		while(--a > 1) {
			b[a] = 1;
			NewImg("LawnMower" + a, "images/LawnMower.gif", "position:absolute;left:" + oS.LawnMowerX + "px;top:" + (GetY(a) - 60) + "px;z-index:" + (3 * a + 2), EDAll)
		}
	},
	StartGame: function() {
		ClearChild($("oEmbed"));
		NewEle("oEmbed", "embed", "width:0;height:0", {
			src: "music/UraniwaNi.swf"
		}, EDAll);
		SetBlock($("dTop"));
		SetVisible($("dFlagMeter"));
		oS.InitLawnMower();
		PrepareGrowPlants(function() {
			oP.Monitor();
			BeginCool();
			AutoProduceSun(25);
			oSym.addTask(1500, function() {
				oP.AddZombiesFlag();
				SetVisible($("dFlagMeterContent"))
			}, [])
		})
	}
}, {
	ArZ: [oZombie, oZombie, oZombie, oZombie, oZombie, oZombie, oZombie, oZombie, oConeheadZombie, oConeheadZombie],
	FlagNum: 8,
	SumToZombie: {
		1: 8,
		"default": 10
	},
	FlagToSumNum: {
		a1: [3, 5, 7],
		a2: [1, 2, 3, 6]
	},
	FlagToMonitor: {
		7: [ShowFinalWave, 0]
	},
	FlagToEnd: function() {
		NewImg("imgSF", "images/card/plants/WallNut.png", "left:827px;top:330px", EDAll, {
			onclick: function() {
				GetNewCard(this, oWallNut, 4)
			}
		});
		NewImg("PointerUD", "images/interface/PointerDown.gif", "top:295px;left:836px", EDAll)
	}
});
function aa() {

			document.getElementById("myp3").style.display = "none";
		}
		setTimeout("aa()", 2000);