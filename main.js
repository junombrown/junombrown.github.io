var page = $("#info_page");
var page_project = $("#plaster");
var all_projects = $(".page_project");
var all_pages = $(".page_project, .move");
$(document).ready(function() {
    console.log("website developed by Marie Verdeil")
    console.log("https://verdeil.net")
        //if click on button, open the right page 
    $(".nav_box").on("click", function(event) {

        //closing the project pages

        $(all_projects).removeClass("open");

        //closing all pages if Juno brown is clicked
        if ($(this).attr("href") == "#home") {
            $(all_pages).removeClass("open")

        } else {

            //toggle betwen info and project
            // $(page).toggleClass("open");
            newpage = $(this).attr("href");
            if (page != newpage) {
                $(page).removeClass("open");
                page = $(this).attr("href");
            }

            $(page).toggleClass("open");
        }

    });

    $(".icon").on("click", function(event) {
        $('#projects_page').toggleClass("open")
        page_project = $(this).attr("href");
        $(page_project).toggleClass("open");


    });





});