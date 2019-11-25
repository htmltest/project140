$(document).ready(function() {

    $('.realme5-header-item a').click(function(e) {
        var curBlock = $($(this).attr('href'));
        if (curBlock.length > 0) {
            $('html, body').animate({'scrollTop': curBlock.offset().top});
        } else {
            $('html, body').animate({'scrollTop': 0});
        }
        e.preventDefault();
    });

    $('.dialog-video-play').click(function(e) {
        var curLink = $(this);
        var curBlock = curLink.parent();
        curLink.hide();
        curBlock.find('.realme5-video-play').show().html('<video src="' + curLink.attr('data-video') + '" autoplay="" loop="" controls=""></video>');
        e.preventDefault();
    });

});