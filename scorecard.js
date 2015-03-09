

 
//Dom ready handler
$(function(){
	//page setup

	//setup tiles
	setupTiles();

	//tile mouseovers
	$(".tile").on("mouseenter",function(){
		$(this).find(".score-box").filter(":not(:animated)").fadeIn("slow");
		$(this).find(".big-number").filter(":not(:animated)").fadeOut("slow");
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


var tile_detail = "<div class='score-box'>" + 
					"<div style='height: 30px'>" +
						"<div class='pull-left'>Disagree</div>" + 
						"<div class='pull-right'>Agree</div>" +
					"</div>" + 
					"<div style='width: 220px' class='score-div center-block'>" +

						"<button type='button' class='btn btn-xs btn-default score-button' value='1'>1</button>" +
						"<button type='button' class='btn btn-xs btn-default score-button' value='2'>2</button>" +
						"<button type='button' class='btn btn-xs btn-default score-button' value='3'>3</button>" +
						"<button type='button' class='btn btn-xs btn-default score-button' value='4'>4</button>" +
						"<button type='button' class='btn btn-xs btn-default score-button' value='5'>5</button>" +

					"</div>" +

				"</div>" + 
				"<div class='big-number'>" +
				"</div>"

var setupTiles = function(){
	//adds scoring and other elements to basic declaritive tiles
	$(".tile").addClass("lightblue");
	$(".tile").each(function(index){

			$(this).find(".tile-caption").after(tile_detail);			


	})


}

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

		if ($(pButton).attr("value") == 5) {
			clearTileColor(this_tile);
			$(this_tile).addClass("score-bad");
		}
		else if ($(pButton).attr("value") == 4) {
			clearTileColor(this_tile);
			$(this_tile).addClass("score-kinda-bad");

		}
		else if ($(pButton).attr("value") == 3) {
			clearTileColor(this_tile);
			$(this_tile).addClass("score-ok");			
		}
		else if ($(pButton).attr("value") == 2) {
			clearTileColor(this_tile);
			$(this_tile).addClass("score-kinda-good");			
		}

		else if ($(pButton).attr("value") == 1) {
			clearTileColor(this_tile);
			$(this_tile).addClass("score-great");			
		}
	}


}

var clearTileColor = function(pTile) {
	$(pTile).removeClass("lightblue score-bad score-kinda-bad score-ok score-kinda-good score-great");

}