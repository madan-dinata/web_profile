// Efek pada saat di scroll
	$('.page-scroll').on('click',function(e){

		var tujuan = $(this).attr('href');

		var elemenTujuan = $(tujuan);

		$('html,body').animate({
			scrollTop: elemenTujuan.offset().top -50
		}, 1000, 'easeInOutExpo');

		e.preventDefault();
	});


// Paralax
	// Paralax saat halaman di buka atau refresh
		//about
		$(window).on('load', function(){
			$('.pKiri').addClass('pMuncul');
			$('.pKanan').addClass('pMuncul');
		});
		// akhir about

	// Paralax saat Di Scroll
		$(window).scroll(function() {
			var wScroll = $(this).scrollTop();

		// Jumbotron paralax slow elemen
			$('.jumbotron img').css({
				'transform' : 'translate(0px, '+ wScroll/1.8 +'%)'
			});

			$('.jumbotron h1').css({
				'transform' : 'translate(0px, '+ wScroll/1 +'%)'
			});

			$('.jumbotron p').css({
				'transform' : 'translate(0px, '+ wScroll/0.6 +'%)'
			});
		// akhir jumbotron

		// Paralax landing elemen
			//Portpolio
				if( wScroll > $('.portpolio').offset().top - 370 ) {
					$('.portpolio .thumbnail').each(function(i){
						setTimeout(function(){
							$('.portpolio .thumbnail').eq(i).addClass('muncul');
						}, 200 * i);
					});
			// akhir portpolio
		}
			// contact
				if( wScroll > $('.contact').offset().top - 370 ) {
					$('.contact').each(function(i){
						setTimeout(function(){
							$('.contact').eq(i).addClass('muncul');
						}, 300);
					});
		}
});