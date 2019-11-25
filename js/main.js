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
        curBlock.find('.realme5-video-play').show();
        curBlock.data('player').playVideo();
        e.preventDefault();
    });

});

var tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    $('.realme5-video').each(function(e) {
        var curBlock = $(this);
        curBlock.data('player', new YT.Player(curBlock.find('.realme5-video-player').attr('id'), {
                height: '360',
                width: '640',
                videoId: curBlock.find('.dialog-video-play').attr('data-video')
            })
        );
    });
}