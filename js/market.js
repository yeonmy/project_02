$(function(){
    var toolTop = $("#xin").offset().top;
    var toolbottom = $("#cai").offset().top + 100;
    var flag = true;
    toggleside();
    function toggleside (){
        if($(document).scrollTop() >= toolTop && $(document).scrollTop() <= toolbottom){
            $(".sidebar").fadeIn();
        } else {
            $(".sidebar").fadeOut();
        }
    }
    $(window).scroll(function() {
        toggleside();
        if(flag) {
            $(".www .w").each(function(i,ele){
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    $(".sidebar li").eq(i).addClass("curr").siblings().removeClass();
                }
            })
        }
    })
    $(".sidebar li").click(function () {
        flag = false;
        var current = $(".www .w").eq($(this).index()).offset().top;
        $("body,html").stop().animate({
            scrollTop: current
        },function(){
            flag = true;
        })
        $(this).addClass("curr").siblings().removeClass();
    })
})