	$(document).ready(function(){
		
		$('header').fadeIn(500);
		
		$('header').ready(function(){
			$('section').delay(500).fadeIn(500);
		});

		$('section').ready(function(){
			$('.section-01-02').eq(0).delay(1500).show("slow");
			$('.section-01-02').eq(1).delay(1800).show("slow");
			$('.section-01-02').eq(2).delay(2100).show("slow");
			$('#mouse-area').mouseover(function(){
				$('footer').delay(500).fadeIn(500);
			});
		});
		$('.section-01-02').ready(function(){
			$('.section-01-01').eq(0).delay(2000).fadeIn("slow");
			$('.section-01-01').eq(1).delay(2300).fadeIn("slow");
			$('.section-01-01').eq(2).delay(2600).fadeIn("slow");
		});
		$('.section-01-01').ready(function(){
			$('.section-01-03').first().delay(3500).show("slow", function showNext() {
    			$(this).next('.section-01-03').delay(500).show("slow", showNext);
  			});
		});
		$('.section-01-03').ready(function(){
			$('.section-01-04').first().delay(6000).show("slow", function showNext() {
    			$(this).next('.section-01-04').delay(500).show("slow", showNext);
  			});
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