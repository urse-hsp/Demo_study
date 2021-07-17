/**
 * Created by admin on 2019/11/16.
 */
window.onload = function(){
    var mySwiper = new Swiper ('.swiper-container', {
        //direction: 'vertical', // ��ֱ�л�ѡ��
        loop: true, // ѭ��ģʽѡ��

        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        // �����Ҫ��ҳ��
        pagination: {
            el: '.swiper-pagination',
            clickable :true
        }
    })
};
Zepto(function($){
    $(window).scroll(function(){
        if($(this).scrollTop()>720){
            $(".returnTop").show();
        }else{
            $(".returnTop").hide();
        }
    });
    $(".returnTop").tap(function(){
        $("html,body").scrollTop(0);
    });
    $.ajax({
        url:"data/json.json",
        type:"get",
        success:function(res){
            var carousel = res.data;
            var str = "";
            $.each(carousel,function (index,element) {
                str+=`<li><a href="#">
                    <img src="images/img/${element.img}"/>
                    <div class="description">
                    <p>${element.title}</p>
                <div>
                <spam>席位充足</spam><em><i>￥</i>${element.price}<b>起</b></em>
                </div>
                </div>
                </a></li>`
            });
            $(".products").html(str)
        }
    })
});