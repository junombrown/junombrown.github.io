var page = $("#info_page");
var page_project = $("#plaster");
$(document).ready(function() {

    //if click on button, open the right page 
    $(".nav_box").on("click", function(event) {
        if ($(page).hasClass("open")) {
            $(page).removeClass("open")

            //console.log("before" + page)
        }


        $(page_project).removeClass("open");
        if (page != $(this).attr("href")) {
            page = $(this).attr("href");
            // console.log("after" + page)
            $(page).addClass("open");

        }
    });

    $(".icon").on("click", function(event) {

        page_project = $(this).attr("href");
        $(page_project).addClass("open");


    });





});