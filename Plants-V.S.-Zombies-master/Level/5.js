oS.Init({
	PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut],
	ZName: [oZombie, oConeheadZombie],
	PicArr: function() {
		var bigImg = document.createElement("img"); //创建一个img元素
		bigImg.src = "images/beijing6.png"; //给img元素的src属性赋值
		//bigImg.width="320";  //320个像素 不用加px
		var myp = document.getElementById('myp5'); //获得dom对象
		myp5.appendChild(bigImg); //为dom添加子元素img
		var a = oPotatoMine.prototype,
			b = a.PicArr;
		return ["images/interface/background1.jpg", "images/interface/crater1.png", b[a.CardGif], b[a.NormalGif]]
	}(),
	backgroundImage: "images/interface/background1.jpg",
	CanSelectCard: 0,
	LevelName: "1-5 特别关：陨石坑",
	LargeWaveFlag: {
		10: $("imgFlag1")
	},
	LoadMusic: function() {
		NewEle("oEmbed", "embed", "width:0;height:0", {
			src: "music/Look up at the.swf"
		}, EDAll)
	},
	StartGame: function() {
		SetHidden($("dSunNum"));
		SetVisible($("tdShovel"));
		SetBlock($("dTop"));
		NewEle("DivTeach", "div", 0, 0, EDAll);
		oP.Monitor({
			ar: [0],
			f: function(c) {
				var d, a = oGd.$,
					b = oS.Chose;
				switch(c) {
					case 0:
						innerText($("DivTeach"), "你必须清理一下你的草坪，用铲子挖出那些植物！");
						NewImg("PointerUD", "images/interface/PointerUP.gif", "top:36px;left:250px", EDAll);
						oSym.addTask(10, arguments.callee, [++c]);
						break;
					case 1:
						b < 0 && (innerText($("DivTeach"), "点击移除一棵植物！"), ++c);
						oSym.addTask(10, arguments.callee, [c]);
						break;
					case 2:
						!(a["2_6_1"] && a["3_8_1"] && a["4_7_1"]) ? (innerText($("DivTeach"), "一直挖吧，挖到你的草坪上没有植物！"), ++c) : b > -1 && (innerText($("DivTeach"), "点击铲子挖出那些植物！"), c = 1);
						oSym.addTask(10, arguments.callee, [c]);
						break;
					default:
						!(a["2_6_1"] || a["3_8_1"] || a["4_7_1"]) ? (function() {
							SetNone($("DivTeach"), $("PointerUD"));
							SetVisible($("dSunNum"), $("dFlagMeter"));
							ClearChild($("oEmbed"));
							NewEle("oEmbed", "embed", "width:0;height:0", {
								src: "music/Watery Graves.swf"
							}, EDAll);
							oS.InitLawnMower();
							SetBlock($("dTop"));
							PrepareGrowPlants(function() {
								BeginCool();
								AutoProduceSun(25);
								oSym.addTask(2000, function() {
									oP.AddZombiesFlag();
									SetVisible($("dFlagMeterContent"))
								}, [])
							})
						})() : oSym.addTask(10, arguments.callee, [3])
				}
			}
		}, function() {
			var c = Math.floor(1 + Math.random() * 5),
				f = Math.floor(1 + Math.random() * 9),
				g = GetX(f) - 55,
				e = GetY(c) - 60,
				b = c + "_" + f,
				a = oP.FlagZombies,
				d;
			switch(true) {
				case a > 3:
					SetStyle(d = $("imgCrater"), {
						left: g + "px",
						top: e + "px",
						zIndex: 3 * c
					});
					delete oGd.$Crater[d.getAttribute("S")];
					oGd.$Crater[b] = 2;
					d.setAttribute("S", b);
					(d = oGd.$[b + "_1"]) && d.Die();
					break;
				case a > 2:
					(NewImg("imgCrater", "images/interface/crater1.png", "left:" + g + "px;top:" + e + "px;z-index:" + 3 * c, EDAll)).setAttribute("S", b);
					(d = oGd.$[b + "_1"]) && d.Die();
					oGd.$Crater[b] = 2
			}
		});
		SetVisible($("dFlagMeter"));
		CustomPlants(0, 2, 6);
		CustomPlants(0, 3, 8);
		CustomPlants(0, 4, 7)
	}
}, {
	ArZ: [oZombie, oZombie, oZombie, oZombie, oZombie, oZombie, oZombie, oConeheadZombie, oConeheadZombie, oConeheadZombie],
	FlagNum: 10,
	SumToZombie: {
		1: 7,
		2: 10,
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
		NewImg("imgSF", "images/card/plants/PotatoMine.png", "left:587px;top:270px", EDAll, {
			onclick: function() {
				GetNewCard(this, oPotatoMine, 6)
			}
		});
		NewImg("PointerUD", "images/interface/PointerDown.gif", "top:235px;left:596px", EDAll)
	}
});
function aa() {

			document.getElementById("myp5").style.display = "none";
		}
		setTimeout("aa()", 2000);