var main = function() {
    /* Push the body and the nav over by 120px over */
    $('.icon-menu').click(function() {
        $('.menu').animate({
            left: "0px"
        }, 200);

        $('body').animate({
            left: "120px"
        }, 200);
    });

    /* Then push them back */
    $('.icon-close').click(function() {
        $('.menu').animate({
            left: "-120px"
        }, 200);

        $('body').animate({
            left: "0px"
        }, 200);
    });

    $('#ready').click(function() {
        $('#ready').fadeOut(1000);
    });

    $('#notready').click(function() {
        $('#notready').fadeOut(1000);
    });
};


$(document).ready(main);