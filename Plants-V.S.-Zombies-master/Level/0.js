oS.Init({
	PicArr: function() {
		var a = $User.Browser.IE6 ? 8 : 32;//判断浏览器为IE6以上
		return [ShadowPNG, "images/Sun.gif", "images/OptionsMenuback" + a + ".png", "images/OptionsBackButton" + a + ".png", "images/Surface.png", "images/Help.png", "images/SelectorScreenStartAdventur.png", "images/SelectorScreenSurvival.png", "images/Logo.jpg", "images/LawnMower.gif", "images/ZombiesWon.png", "images/LargeWave.gif", "images/FinalWave.gif", "images/PrepareGrowPlants.gif", "images/interface/PointerUP.gif", "images/interface/PointerDown.gif", "images/interface/Shovel.png", "images/interface/SunBack.png", "images/interface/ShovelBack.png", "images/interface/GrowSoil.png", "images/interface/SeedChooser_Background.png", "images/interface/Button.png", "images/interface/LogoLine.png", "images/interface/dialog_topleft.png", "images/interface/dialog_topmiddle.png", "images/interface/dialog_topright.png", "images/interface/dialog_centerleft.png", "images/interface/dialog_centermiddle.png", "images/interface/dialog_centerright.png", "images/interface/SelectorScreen_Almanac.png", "images/interface/SelectorScreen_AlmanacHighlight.png", "images/interface/dialog_bottomleft.png", "images/interface/dialog_bottommiddle.png", "images/interface/dialog_bottomright.png", "images/interface/Almanac_IndexBack.jpg", "images/interface/Almanac_IndexButton.png", "images/interface/Almanac_CloseButton.png", "images/interface/Almanac_CloseButtonHighlight.png", "images/interface/Almanac_IndexButtonHighlight.png", "images/interface/Almanac_PlantBack.jpg", "images/interface/Almanac_PlantCard.png", "images/interface/Almanac_ZombieBack.jpg", "images/interface/Almanac_ZombieCard.png", "images/interface/AwardScreen_Back.jpg"]
	//图片阴影
	}(),
	LevelName: "JSPVZ",
	LoadMusic: function() {//背景音乐
		NewEle("oEmbed", "embed", "width:0;height:0", {
			src: "music/Faster.swf"
		}, EDAll)
	},
	LoadAccess: function() {
		EDAll.scrollLeft = 0;//scrollLeft()函数用于设置或返回当前匹配元素相对于水平滚动条左侧的偏移。
		EDAll.innerHTML += WordUTF8;//innerHTML 属性设置或返回表格行的开始和结束标签之间的 HTML。
		LoadProProcess();
		oSym.Stop();
	}
});