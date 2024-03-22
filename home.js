$(document).ready(function(){
    $("#toggle").click(function(){
        $(".block").toggle("aa")
    })
    $("#toggle").click(function(){
        $("header").toggleClass("bb")
    })

})

$(window).scroll(function()
{
    $('header').toggleClass('background',$(this).scrollTop()>100);
});

  