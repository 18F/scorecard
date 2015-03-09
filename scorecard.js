

 
//Dom ready handler
$(function(){
	//page setup

	//tile mouseovers
	$(".tile").on("mouseenter",function(){
		$(this).find(".score-box").fadeIn("slow");
		$(this).find(".big-number").fadeOut("slow");
	});

	$(".tile").on("mouseleave",function(){
		$(this).find(".score-box").fadeOut("slow");
		$(this).find(".big-number").fadeIn("slow");		
	});

	//set up tile coloring when a score is chosen
	$(".score-button").on("click",function(){
		updateTileColor(this);
		var this_tile = $(this).parentsUntil(".col-md-3",".tile");		
		$(this_tile).find(".big-number").html($(this).attr("value"));
	})


})


var updateTileColor = function(pButton){
	var this_tile = $(pButton).parentsUntil(".col-md-3",".tile");

	if($(this_tile).attr("data-scoretype") == "1-is-bad") {
		if ($(pButton).attr("value") == 1) {
			clearTileColor(this_tile);
			$(this_tile).addClass("score-bad");
		}
		else if ($(pButton).attr("value") == 2) {
			clearTileColor(this_tile);
			$(this_tile).addClass("score-kinda-bad");

		}
		else if ($(pButton).attr("value") == 3) {
			clearTileColor(this_tile);
			$(this_tile).addClass("score-ok");			
		}
		else if ($(pButton).attr("value") == 4) {
			clearTileColor(this_tile);
			$(this_tile).addClass("score-kinda-good");			
		}

		else if ($(pButton).attr("value") == 5) {
			clearTileColor(this_tile);
			$(this_tile).addClass("score-great");			
		}

		
	}
	else if ($(this_tile).attr("data-scoretype") == "1-is-good") {

	}


}

var clearTileColor = function(pTile) {
	$(pTile).removeClass("lightblue score-bad score-kinda-bad score-ok score-kinda-good score-great");

}