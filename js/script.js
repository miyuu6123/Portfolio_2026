$(function() {
    //ナビゲーションをクリック
    $('a[href*="#"]:not([href="#"])').click(function() {
        //移動先のコンテンツの位置を取得
        var target = $($(this).attr("href")).offset().top;

        //70px減らす
        target -= 70;

        //コンテンツへスクロール
        $("html, body").animate({ scrollTop: target }, 500);

        return false;
    });
});



$(function() {
    var menuBtn = $('.c-menu__btn');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800){
            menuBtn.fadeIn();
        }else if ($(this).scrollTop() < 800){
            menuBtn.fadeOut();
        }
    });

});

/*


$(function() {
    $(".works-img").append("<div class= works-imgs></div>");

    $(".works-imgs").each(function() {
        $(this).html(
            "<p>" + $(this).parent().children("img").attr("alt") + "</p>"
        );
    });

    $(".works-img").hover(function() {
        $(this)
            .children(".works-imgs")
            .stop()
            .fadeIn(300);

        $(this)
            .children(".works-imgs")
            .children("p")
            .stop()
            .animate({ "top" : 0 }, 300);
    }, function() {

        $(this).children(".works-imgs").stop().fadeOut(300);

        $(this)
            .children(".works-imgs")
            .children("p")
            .stop()
            .animate({ "top": "10px" }, 300);
    
    });
});

*/