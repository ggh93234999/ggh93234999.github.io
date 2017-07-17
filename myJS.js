$(document).ready(function(){
	$(".content:even").addClass("content_white");
	$(".content:odd").addClass("content_grey");
	$("div").addClass("shadow");
	$("#mainNaviBotton1").click(function(){
		$("#mainNavi1").toggle();
	});
});