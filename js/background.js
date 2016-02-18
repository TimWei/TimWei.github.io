$('body').ready(function(){

	//bash or wutevery script lang生成這個array
	 var BACKGROUND_IMGS =[
			"colle1.png",
			"fate.png",
			"fate2.png",
			"fate3.png",
			"fate4.png",
			"fate5.png",
			"fate6.png",
			"fate7.png",
			"fate8.png",
			"gatari.png",
			"gatari2.png",
			"gatari3.png",
			"gatari4.png",
			"gatari5.png",
			"gatari6.png",
			"gatari7.png",
			"holo.png",
			"holo2.jpg",
			"holo3.jpg",
			"holo4.jpg",
			"idol.png",
			"idol2.png",
			 "idol3.png",
			 "kolle.jpg",
			 "ll1.jpg",
			 "ll2.jpg",
			 "ll3.jpg",
			 "ll4.jpg",
			 "ll5.jpg",
			 "ll6.jpg",
			 "madoka.png",
			 "madoka2.png",
			 "nise.jpg",
			 "nise2.png",
			 "nise3.png",
			 "noara.jpg",
			 "pad.png",
			 "remi.png",
			 "sao1.png",
			 "touhou.png",
			 "touhou2.png"];
	    var bck_img = BACKGROUND_IMGS[Math.floor(Math.random()*BACKGROUND_IMGS.length)];

	 var body_after = '.body:after {top: 1px;content : "";display: inline;position: absolute;background-image: url("http://timwei.github.io/img/background/'+ bck_img +'");background-repeat: no-repeat;background-position: bottom center;background-attachment: fixed;background-size: auto 350px;width: 100%;height: 100%;opacity : 0.5;z-index: -1;}'
	 $('body').append('<style>'+body_after+'</style>');

});