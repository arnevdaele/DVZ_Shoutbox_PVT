$(document).ready(function() {
    if ($('#shoutbox > .body > .window').length) {
        $('#shoutbox > .body > .window').after('<div id="enhanced-shoutbox-bottom-border" style="display:block;height:5px;background-color:rgba(0,0,0,0.0);cursor:s-resize;"></div>');
        $('#enhanced-shoutbox-bottom-border').on('mousedown', function(event) {
            var draggable = $('#shoutbox > .body > .window');
            var startHeight = draggable.height();
            var pY = event.pageY;
            $(document).on('mouseup', function() {
                $(document).off('mouseup').off('mousemove');
                localStorage.setItem('enhanced-shoutbox-max-height', draggable.css('max-height'));
            });
            $(document).on('mousemove', function(event) {
                var my = (event.pageY - pY);
                draggable.css({
                    'max-height': startHeight + my
                });
            });
        });
        if (localStorage.getItem('enhanced-shoutbox-max-height')) {
            $('#shoutbox > .body > .window').css('max-height', localStorage.getItem('enhanced-shoutbox-max-height'));
        }
    }
});
