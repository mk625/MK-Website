

toggle_book_page = {    
    previous: () => {
        current_paper = $(".book-container").find(".current-paper");

        if ($(current_paper).prev().prev().is(":last-child")) {
            console.log("if");

            $(current_paper).removeClass("paper-flipped");
        } else {
            console.log("else");

            $(current_paper).removeClass("paper-flipped current-paper").next().addClass("current-paper");

            if ($(".book-container").find(".current-paper").is(":last-child")) {
                console.log("nested if");
                $(".book-container").find(".current-paper").prev().css({ 'z-index': '' });
            } else {
                console.log("nested else");
                $(".book-container").find(".current-paper").prev().prev().css({ 'z-index': '' });
            }
        }
    },
    next: () => {
        current_paper = $(".book-container").find(".current-paper");

        if ($(".book-container").find(".paper-flipped").length === 0) {
            console.log("if");

            $(".book-container").find(".paper-1").addClass("paper-flipped current-paper");
        } else {
            console.log("else");
            
            $(current_paper).prev().addClass("paper-flipped current-paper").siblings().removeClass("current-paper");
            $(".book-container").find(".current-paper").css({ 'z-index': (parseInt($(".book-container").find(".current-paper").next().css('z-index'))) + 1 });
        }
    }
}


