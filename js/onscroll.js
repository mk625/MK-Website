

$(window).on('wheel', function (event) {
    let windowHeight = $(window).height();
    let scrollTop = $(this).scrollTop();
    let scrollToBottom = Math.sign(event.originalEvent.deltaY) === 1;

    console.log(scrollToBottom);

    // book container
    let book_container = $("#timeline-book-container");
    let rotatex = $('#timeline-book-container').attr('data-rotatex');
    // \\\ book container

    if ((scrollToBottom) && (scrollTop > ($(book_container).offset().top) - (windowHeight/2)) && (rotatex > 0)) {
        $(book_container).css('transform', 'perspective(800px) rotateX(' + (rotatex - 1) + 'deg)');
        $('#timeline-book-container').attr('data-rotatex', rotatex - 1);
    } else if ((!scrollToBottom) && (scrollTop < ($(book_container).offset().top) - (windowHeight / 2)) && (rotatex < 0)) {
        $(book_container).css('transform', 'perspective(800px) rotateX(' + (rotatex - 1) + 'deg)');
        $('#timeline-book-container').attr('data-rotatex', rotatex - 1);
    }
});


