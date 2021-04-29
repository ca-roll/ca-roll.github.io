$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
});
$(document).scroll(function(){
	var y=  $(this).height() - $(window).height() - $(this).scrollTop();
	if (y<10) {
		$('.social').fadeIn();
	} else {
		$('.social').fadeOut();
	}
});
