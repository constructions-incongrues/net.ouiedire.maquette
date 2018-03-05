$(document).ready(function() {

	var set_flyer_src;

    set_flyer_src = function (flyer_src) {
        $(".flyer-big-size")
			.css("background-image", flyer_src)
			.promise()
			.done(function() {
				$(".flyer-modal")
					.css("display", "block");
			});
    }

	$(".expand-last-flyer").click(function() {
   		var last_flyer_src;
   		last_flyer_src = $(this)
   							.closest(".side-container")
   							.prev("figure")
   							.find(".last-flyer")
   							.css("background-image");

		set_flyer_src(last_flyer_src);
   })

   $(".expand-trigger").click(function() {
	    var flyer_src;
	    flyer_src = $(this)
				    	.closest(".expand-author-container")
				    	.prev(".flyer")
			    		.css("background-image");

		set_flyer_src(flyer_src);
	});

   $(".flyer-modal").click(function() {
   		$(".flyer-modal")
   			.css("display", "none");
   });

});