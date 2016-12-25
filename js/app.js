$(document).ready(function(){
	setBindings();
});

function setBindings(){
	$("nav a").click(function(e){
		var sectionID = e.currentTarget.id + "Section";
		//alert('button id'+ e.currentTarget.id + "Section");
		$("html body").animate({
			scrollTop: $("#" + sectionID).offset().top
		}, 1000)
	})



}