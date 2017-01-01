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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHQvLyBzY3JvbGwgdG8gaWRcclxuXHQkKFwiLm1lbnUtLXNjcm9sbFwiKS5maW5kKCcubWVudV9fbGluaycpLm1QYWdlU2Nyb2xsMmlkKHtcclxuICBcdHNjcm9sbFNwZWVkOiA1MDAsXHJcbiAgXHRwYWdlRW5kU21vb3RoU2Nyb2xsOiBmYWxzZVxyXG5cdH0pO1xyXG5cclxuXHQvLyBpc290b3BlXHJcblxyXG5cdHZhciAkdGlsZSA9ICQoJy50aWxlJyk7XHJcblx0dmFyICRidXR0b25zID0gJCgnLnMtcG9ydGZvbGlvX19tZW51Jyk7XHJcblx0dmFyICRsaW5rID0gJGJ1dHRvbnMuZmluZCgnLm1lbnVfX2xpbmsnKTtcclxuXHJcblx0KGZ1bmN0aW9uKCl7XHJcblx0XHQkdGlsZS5pc290b3BlKHtcclxuXHRcdFx0XHRpdGVtU2VsZWN0b3I6ICcudGlsZV9faXRlbScsXHJcblx0XHRcdH0pXHJcblxyXG5cdFx0JGxpbmsub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cdFx0XHR2YXIgc2VsZWN0b3IgPSAkdGhpcy5kYXRhKCdmaWx0ZXInKTtcclxuXHRcdFx0JHRpbGUuaXNvdG9wZSh7XHJcblx0XHRcdFx0ZmlsdGVyOiBzZWxlY3RvcixcclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblxyXG5cclxuXHJcblx0fSkoKTtcclxuXHJcblx0XHJcbn0pIl19
