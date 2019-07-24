	$(document).ready(function(){
		
		$('header').fadeIn(500);
		
		$('header').ready(function(){
			$('section').delay(500).fadeIn(500);
		});

		$('section').ready(function(){
			$('footer').delay(1000).fadeIn(500);
		});
		$(window).load(function(){
			var win = $(window).width();
			if (win < 900) {
				$("#navbar-atas").css({
					'display':'none'
				});
				$(".br-hover").css({
					'text-align': 'left',
					'width' : '100%'
				});
			}else if(win > 900){
				$("#navbar-atas").show();
				$(".br-hover").css({
					'text-align': 'center',
					'width' : 'auto'
				});
			}
		});
		$(window).resize(function(){
			var win = $(window).width();
			if (win < 900) {
				$("#navbar-atas").fadeOut("fast");
				$(".br-hover").css({
					'text-align': 'left',
					'width' : '100%'
				});
			}else if(win > 900){
				$("#navbar-atas").fadeIn("fast");
				$(".br-hover").css({
					'text-align': 'center',
					'width' : 'auto'
				});
			}
		});
		$(window).scroll(function(){
			var win = $(window).width();
			var scr = $(window).scrollTop();
			if (win > 900) {
				if (scr > 2) {
					$("#navbar-atas").fadeOut("fast");
				}else if (scr == 0){
					$("#navbar-atas").fadeIn("slow");
				}	
			}
		});

		$('.dropdown').mouseenter('show.bs.dropdown', function(e){
		  	$(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
		});

		$('.dropdown').mouseleave('hide.bs.dropdown', function(e){
		  	$(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
		});
	});