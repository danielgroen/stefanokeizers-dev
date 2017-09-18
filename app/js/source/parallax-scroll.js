var breakpoint = 768;

$.fn.parallax = function(strength, offset) {
	if ( $(window).width() > breakpoint ) {
		if ( this[0].offsetTop < ( $(window).scrollTop() + $(window).height() )) {
				if (offset == 'center') {
		 		   this.css('background-position', '0 '+ Math.round( ( $(window).scrollTop() - this[0].offsetTop ) * strength + (this[0].offsetHeight / 8) ) +'px');
				} else {
				    this.css('background-position', '0 '+ Math.round(($(window).scrollTop() - this[0].offsetTop) * strength) +'px');
				}
		}
	} else {
	    this.css('background-position', '0 0');
	}

};

$(window).on('scroll', function() {
	$('#header-block .inner').parallax(0.2);
	$('#media .inner').parallax(0.2);
	$('#contact .inner').parallax(0.2);
});