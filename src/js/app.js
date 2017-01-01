$(document).ready(function(){
	// scroll to id
	/*$("a[href*='#']").mPageScroll2id({
  	scrollSpeed: 500,
  	pageEndSmoothScroll: false
	});*/

	// isotope

	var $tile = $('.tile');
	var $buttons = $('.s-portfolio__menu');
	var $link = $buttons.find('.menu__link');

	(function(){
		$tile.isotope({
				itemSelector: '.tile__item',
			})

		$link.on('click',function(e){
			e.preventDefault();
			var $this = $(this);
			var selector = $this.data('filter');
			$tile.isotope({
				filter: selector,
			})
		})



	})();

	
})