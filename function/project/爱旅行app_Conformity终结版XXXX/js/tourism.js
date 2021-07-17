Zepto(function ($) {
    var moveLeft = $(window).width();
    $(".tab>div").tap(function () {
        var index = $(this).index();
        $(".tab-list>div").css({
            "transform": "translate(" + (-moveLeft * index) + "px)",
            "transition": "all 1s"
        });
        $(this).addClass("bottom-border").siblings().removeClass("bottom-border");
    });

    $(".tab-list>div").swipeLeft(function () {
        var index = $(this).index();
        index++;
        if (index <= 2) {
            $(".tab>div").eq(index).addClass("bottom-border").siblings().removeClass("bottom-border");
            $(".tab-list>div").css({
                "transform": "translate(" + (-moveLeft * index) + "px)",
                "transition": "all 1s"
            });
        } else {
            return;
        }

    });

    $(".tab-list>div").swipeRight(function () {
        var index = $(this).index();
        index--;
        console.log(index);
        if (index!=-1) {
            $(".tab>div").eq(index).addClass("bottom-border").siblings().removeClass("bottom-border");
            $(".tab-list>div").css({

                "transform": "translate(" + (-moveLeft * index) + "px)",
                "transition": "all 1s"
            });
        } else {
            return;
        }
    });
});