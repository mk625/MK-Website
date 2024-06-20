

$(window).on("load", function() {
    $("body").addClass("doc-loaded");

    if ($(window).scrollTop() > 50) {
        $("#site-header").addClass("sticky-header");
    } else {
        $("#site-header").removeClass("sticky-header");
    }
});



$(window).scroll(function () {
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition > 50) {
        $("#site-header").addClass("sticky-header");
    } else {
        $("#site-header").removeClass("sticky-header");
    }

});





