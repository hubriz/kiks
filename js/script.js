/*$(function(){
	$("#jquery-test").html("jQuery is loaded");
});
*/
$(window).load(function() {
    $('#slider').nivoSlider({
		effect:'boxRainGrowReverse',
		boxCols: 16, 
		boxRows: 8,
		pauseTime:6000,
		directionNav:false,
		controlNavThumbs:true,
		captionOpacity:0.6
	});
});