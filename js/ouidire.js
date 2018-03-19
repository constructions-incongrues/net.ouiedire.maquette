$(document).ready(function() {

	/*************************************************create player instance****************************************************/

	var wavesurfer;

	wavesurfer = WaveSurfer.create({
	    container: '#waveform',
	    waveColor: '#ffffff',
	    progressColor: '#808080',
	    barHeight: 1,
	    barWidth: 1,
	    height: 100,
	    hideScrollbar: true,
	    backend: 'MediaElement'
	});

	/*************************************************get audio source*********************************************************/

	var audio_source;

	audio_source = $("#waveform").attr("data-src");

	wavesurfer.load(audio_source);

	/*************************************************start / pause player*****************************************************/

	$(".transport-play").click(function() {
		if (wavesurfer.isPlaying()) {
			wavesurfer.pause();
			$(this)
				.find(".white")
				.toggleClass('fa-play fa-pause');
		} else {
			wavesurfer.play();
			$(this)
				.find(".white")
				.toggleClass('fa-pause fa-play');
		}
		//wavesurfer.playPause();
	});

	/************************************************flyer visual expand********************************************************/

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