

$(window).on('scroll', function () {
    let windowHeight = $(window).height();
    let scrollTop = $(this).scrollTop();

    // book container
    let book_container = $("#timeline-book-container");
    let rotatex = $('#timeline-book-container').attr('data-rotatex');
    // \\\ book container


    if ((scrollTop > ($(book_container).offset().top) - (windowHeight/2)) && (book_rotate >= 0)) {
        $(book_container).css('transform', 'perspective(800px) rotateX(' + (rotatex - 1) + 'deg)');
    } else if ((scrollTop < ($(book_container).offset().top)  - (windowHeight/2))) {
        console.log("else if");
        $(book_container).css('transform', 'perspective(800px) rotateX(' + (book_rotate + 1) + 'deg)');
    }

    $("body").attr("data-scroll-val", scrollTop);

});



