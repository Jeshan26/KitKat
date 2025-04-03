// script to fetch the scroll-height and adding a class to make effects 
$(window).on("scroll", function (){
    if($(this).scrollTop() > 400){
        $("header").addClass("scrollHeader");
    }else{
        $("header").removeClass("scrollHeader");
    }
 });