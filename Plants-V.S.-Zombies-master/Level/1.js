oS.Init({

	PName: [oPeashooter],
	ZName: [oZombie],

	PicArr: function() {

		var bigImg = document.createElement("img"); //创建一个img元素
		bigImg.src = "images/beijing2.png"; //给img元素的src属性赋值
		//bigImg.width="320";  //320个像素 不用加px
		var myp = document.getElementById('myp'); //获得dom对象
		myp.appendChild(bigImg); //为dom添加子元素img

		
		var a = oSunFlower.prototype,
			b = a.PicArr;

		return ["images/interface/SodRollCap.png", "images/interface/SodRoll.png", "images/interface/sod1row.png", "images/interface/background1unsodded.jpg", b[a.CardGif], b[a.NormalGif]]
	}(),

	SunNum: 1075,
	backgroundImage: "images/interface/background1unsodded.jpg",
	LF: [0, 0, 0, 1, 0, 0],
	CanSelectCard: 0,
	LevelName: "关卡 1-1",
	LoadMusic: function() {

		NewEle("oEmbed", "embed", "width:0;height:0", {
			src: "music/UraniwaNi.swf"
		}, EDAll)
	},
	InitLawnMower: function() { /*小车*/
		oGd.$LM[3] = 1;
		NewImg("LawnMower3", "images/LawnMower.gif", "position:absolute;left:" + oS.LawnMowerX + "px;top:" + (GetY(3) - 60) + "px;z-index:11", EDAll)
	},
	StartGame: function() { /*草地道路*/
		NewImg("sod1row", "images/interface/sod1row.png", "left:132px;top:280px;clip:rect(0,0,117px,0);z-index:1", EDAll);
		NewImg("SodRoll", "images/interface/SodRoll.png", "left:112px;top:244px;z-index:1", EDAll);
		NewImg("SodRollCap", "images/interface/SodRollCap.png", "left:17px;top:322px;z-index:1", EDAll);
		(function(e, g, a, d, c, f, b) {
			e += 15;
			g += 16;
			d += 16;
			$("sod1row").style.clip = "rect(0," + e + "px,117px,0)";
			SetStyle($("SodRoll"), {
				left: g + "px",
				width: --a + "px",
				height: "141px"
			});
			SetStyle($("SodRollCap"), {
				left: d + "px",
				width: --c + "px",
				height: --f + "px",
				top: ++b + "px"
			});
			e < 755 ? oSym.addTask(3, arguments.callee, [e, g, a, d, c, f, b]) : (ClearChild($("SodRoll"), $("SodRollCap")), (function() {
				SetBlock($("dTop"));
				NewEle("DivTeach", "div", 0, 0, EDAll);
				oS.InitLawnMower();
				oP.Monitor({
					ar: [0],
					f: function(k) {
						var l = oS.C + 1,
							i = oS.Chose;
						switch(k) {
							case 0:
								innerText($("DivTeach"), "点击卡片选择豌豆射手！");
								NewImg("PointerUD", "images/interface/PointerUP.gif", "top:60px;left:50px", EDAll);
								oSym.addTask(10, arguments.callee, [++k]);
								break;
							case 1:
								i > 0 && (innerText($("DivTeach"), "点击草地种下豌豆射手，最好种在靠左边！"), EditImg($("PointerUD"), "", "images/interface/PointerDown.gif", {
									left: "170px",
									top: "270px"
								}), ++k);
								oSym.addTask(10, arguments.callee, [k]);
								break;
							case 2:
								var h = oGd.$;
								while(--l) {
									if(h["3_" + l + "_1"]) {
										SetNone($("PointerUD"));
										innerText($("DivTeach"), "你拥有了第一个植物，点击收集掉落的阳光！");
										AutoProduceSun(25);
										oSym.addTask(10, arguments.callee, [++k]);
										return
									}
								}!i && (ClearChild($("PointerUD")), k = 0);
								oSym.addTask(10, arguments.callee, [k]);
								break;
							case 3:
								oS.SunNum > 99 && (innerText($("DivTeach"), "你拥有了足够的阳光来种植另一个豌豆射手！"), EditImg($("PointerUD"), "", "images/interface/PointerUP.gif", {
									left: "50px",
									top: "60px",
									display: "block"
								}), ++k);
								oSym.addTask(10, arguments.callee, [k]);
								break;
							default:
								var j = 0,
									h = oGd.$;
								while(--l) {
									h["3_" + l + "_1"] && (++j)
								}
								j > 0 ? (SetNone($("PointerUD")), innerText($("DivTeach"), "别让僵尸靠近你的房子！"), oP.AddZombiesFlag(), oSym.addTask(500, SetNone, [$("DivTeach")])) : oSym.addTask(10, arguments.callee, [4])
						}
					}
				});
				BeginCool();
				SetVisible($("dFlagMeter"))
			})())
		})(35, 122, 68, 117, 73, 71, 322)
	}
}, {
	ArZ: [oZombie, oZombie, oZombie, oZombie, oZombie],
	FlagNum: 4,
	SumToZombie: {
		1: 5,
		"default": 5
	},
	FlagToSumNum: {
		a1: [3],
		a2: [1, 2]
	},
	FlagToMonitor: {
		3: [ShowFinalWave, 0]
	},
	FlagToEnd: function() {
		NewImg("imgSF", "images/card/plants/SunFlower.png", "left:667px;top:330px", EDAll, {
			onclick: function() {
				GetNewCard(this, oSunFlower, 2)
			}
		});
		EditImg($("PointerUD"), 0, "images/interface/PointerDown.gif", {
			left: "676px",
			top: "295px",
			display: "block"
		})
	}

});
function aa() {

			document.getElementById("myp").style.display = "none";
		}
		setTimeout("aa()", 2000);