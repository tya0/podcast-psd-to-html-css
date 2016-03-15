
$(function() { 
	seeOptions();
	hamburger();
	screenWidth();
	loadMore();
	audio();
	closeNav();
	filterSeason();
}); 

function loadMore() {
	button = $('#loadMore')
	$('#episodes .episode:lt(4)').show();
	button.on('click',function(e) {
	 	e.preventDefault();
	 	if (button.not('.expanded').length > 0) {
	 		$('#episodes .episode:lt(10)').show();
	    	button.text('Show Less').addClass('expanded');
	 	} else  {
	    	$('#episodes .episode').not(':lt(4)').hide();
	    	button.text('Load More').removeClass('expanded');
	    };
	 });
}

function audio(){
	audiojs.events.ready(function() {
    	var as = audiojs.createAll();
  	});
}

function seeOptions(){
	$('.option').on('click', function(e){
		e.preventDefault();
		$(this).children().toggleClass('show');
	});
}

function hamburger(){
	$('.hamburger-wrap').on('click', function(e){
		e.preventDefault();
		$('nav ul.nav').slideToggle();
	})
}

function screenWidth(){
	$(window).on('resize', function(){
		if ($(window).width() > 480) {
			$('ul.nav').css('display', 'flex');
		} else if ($(window).width() <= 480) {
			$('ul.nav').css('display', 'none');
		}
	});
}

function closeNav() {
	if ($(window).width() <= 480) {
		$('nav ul.nav li a').on('click', function(){
			$('nav ul.nav').css('display', 'none');
		})
	};
};

function filterSeason() {
	$('select#season').change(function() {
		var season = $(this).val()
		filterList(season);
	});

	function filterList(season) {
		var list = $('.episodes .episode');
		$(list).fadeOut('fast');
		if (season == 'all') {
			$('.episode').each(function() {
				$('#episodes .episode:lt(4)').delay(200).fadeIn();
			});
			$('#loadMore').show();
		} else {
			$('.episodes').find('.episode[data-season=' + season + ']').each(function (i) {
				$(this).delay(200).fadeIn();
				if ($('episode:visible').length < 4) {
					$('#loadMore').hide();
				}
			});
		}
	}
}
