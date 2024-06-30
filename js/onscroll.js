

$(window).on('wheel', function (event) {
    // book section
        let windowHeight = $(window).height();
        let scroll_val = $(this).scrollTop();
        let scrollToBottom = Math.sign(event.originalEvent.deltaY) === 1;
        
        let book_container = $("#timeline-book-container");
        let book_top = $(book_container).offset().top;
        let rotatex = $(book_container).attr('data-rotatex');

        // console.log(scroll_val);
        // console.log(windowHeight - $(book_container).height());


        if ((scrollToBottom) && (scroll_val > (book_top) - (windowHeight / 2)) && (rotatex > 0)) {
            console.log("if");
            $(book_container).css('transform', 'perspective(800px) rotateX(' + (rotatex - 1) + 'deg)');
            $(book_container).attr('data-rotatex', rotatex - 1);
        } else if ( (!scrollToBottom) && (scroll_val < (book_top)) && (rotatex < 70) ) {
            console.log("if else");
            $(book_container).css('transform', 'perspective(800px) rotateX(' + (rotatex + 1) + 'deg)');
            $(book_container).attr('data-rotatex', rotatex + 1);
        }
    // \\\ book section



    // skills section
        if ((scroll_val + 250) > ($("#features-sec").offset().top)) {
            $("#features-sec").addClass("features-sec-anim");
        }
    // \\\ skills section
});


