    $(function(){
        $('.page-scroll a').bind('click', function(event) {
            var anchor = $(this);
            if (anchor.attr('href') !== "#") {

	            $('html, body').animate({
	                scrollTop: $(anchor.attr('href')).offset().top
	            }, 1500);
	            event.preventDefault();
            };
        });        
    });