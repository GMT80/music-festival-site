$(document).ready(function() {

    $('#date').countdown('2020/07/10', function(e) {
        $(this).html(e.strftime('<p><span> %D </span> days <span> %H </span> hours <span> %M </span> minutes <span> %S </span> seconds</p>'))
    });

});