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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHQvLyBzY3JvbGwgdG8gaWRcclxuXHQvKiQoXCJhW2hyZWYqPScjJ11cIikubVBhZ2VTY3JvbGwyaWQoe1xyXG4gIFx0c2Nyb2xsU3BlZWQ6IDUwMCxcclxuICBcdHBhZ2VFbmRTbW9vdGhTY3JvbGw6IGZhbHNlXHJcblx0fSk7Ki9cclxuXHJcblx0Ly8gaXNvdG9wZVxyXG5cclxuXHR2YXIgJHRpbGUgPSAkKCcudGlsZScpO1xyXG5cdHZhciAkYnV0dG9ucyA9ICQoJy5zLXBvcnRmb2xpb19fbWVudScpO1xyXG5cdHZhciAkbGluayA9ICRidXR0b25zLmZpbmQoJy5tZW51X19saW5rJyk7XHJcblxyXG5cdChmdW5jdGlvbigpe1xyXG5cdFx0JHRpbGUuaXNvdG9wZSh7XHJcblx0XHRcdFx0aXRlbVNlbGVjdG9yOiAnLnRpbGVfX2l0ZW0nLFxyXG5cdFx0XHR9KVxyXG5cclxuXHRcdCRsaW5rLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHRcdFx0dmFyIHNlbGVjdG9yID0gJHRoaXMuZGF0YSgnZmlsdGVyJyk7XHJcblx0XHRcdCR0aWxlLmlzb3RvcGUoe1xyXG5cdFx0XHRcdGZpbHRlcjogc2VsZWN0b3IsXHJcblx0XHRcdH0pXHJcblx0XHR9KVxyXG5cclxuXHJcblxyXG5cdH0pKCk7XHJcblxyXG5cdFxyXG59KSJdfQ==
