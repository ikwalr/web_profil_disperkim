$(document).ready(function() {
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll > 150) {
			// $(".nav-b").addClass('sitenav-active');
			$('.nav-b').slideDown(240);
		} else {
			$('.nav-b').slideUp(240);
			// $('.nav-b').removeClass('sitenav-active');
		}
	})
})

  $(document).ready(function() {
  	$('#media-tabs').tabs();
  })
