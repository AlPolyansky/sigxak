$(document).ready(function(){
	// scroll to id
	$(".menu--scroll").find('.menu__link').mPageScroll2id({
  	scrollSpeed: 500,
  	pageEndSmoothScroll: false
	});

	// isotope

	var $tile = $('.tile');
	var $buttons = $('.s-portfolio__menu');
	var $link = $buttons.find('.menu__link');

	(function(){
		$tile.isotope({
				itemSelector: '.tile__item',
				//initLayout: false
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cdC8vIHNjcm9sbCB0byBpZFxyXG5cdCQoXCIubWVudS0tc2Nyb2xsXCIpLmZpbmQoJy5tZW51X19saW5rJykubVBhZ2VTY3JvbGwyaWQoe1xyXG4gIFx0c2Nyb2xsU3BlZWQ6IDUwMCxcclxuICBcdHBhZ2VFbmRTbW9vdGhTY3JvbGw6IGZhbHNlXHJcblx0fSk7XHJcblxyXG5cdC8vIGlzb3RvcGVcclxuXHJcblx0dmFyICR0aWxlID0gJCgnLnRpbGUnKTtcclxuXHR2YXIgJGJ1dHRvbnMgPSAkKCcucy1wb3J0Zm9saW9fX21lbnUnKTtcclxuXHR2YXIgJGxpbmsgPSAkYnV0dG9ucy5maW5kKCcubWVudV9fbGluaycpO1xyXG5cclxuXHQoZnVuY3Rpb24oKXtcclxuXHRcdCR0aWxlLmlzb3RvcGUoe1xyXG5cdFx0XHRcdGl0ZW1TZWxlY3RvcjogJy50aWxlX19pdGVtJyxcclxuXHRcdFx0XHQvL2luaXRMYXlvdXQ6IGZhbHNlXHJcblx0XHRcdH0pXHJcblxyXG5cdFx0JGxpbmsub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cdFx0XHR2YXIgc2VsZWN0b3IgPSAkdGhpcy5kYXRhKCdmaWx0ZXInKTtcclxuXHRcdFx0JHRpbGUuaXNvdG9wZSh7XHJcblx0XHRcdFx0ZmlsdGVyOiBzZWxlY3RvcixcclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblx0fSkoKTtcclxuXHJcblx0XHJcbn0pIl19
