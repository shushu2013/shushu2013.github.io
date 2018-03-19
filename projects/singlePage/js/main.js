/*
 * 点击切换目录
 */
$('nav .js-toggle').click(function () {
    $('nav .js-menu').toggleClass("is-hidden")
});


/*
 * 点击链接滚动到页面对应位置
 */
$(function() {
    $('.js-scroll').click(function(event) {
        event.preventDefault();
        var top = $(this.hash).offset().top;
        console.log(top);
        $('html,body').animate({
            scrollTop: top
        }, 900);
    });
});

/*
 * banner 轮播
 */
$(function () {
    $('#slider').responsiveSlides({
        auto: true,
        /*是否显示左右导航箭头*/
        nav: false,
        speed: 500,
        namespace: "callbacks",
        /*是否显示页码*/
        pager: true,
    });
});

/*
 * 图片幻灯片
 */
baguetteBox.run('.js-gallery');

/*
 * 回到顶部
 */
$(function () {
    $().UItoTop({
        text: '',
        easingType: 'easeOutQuart'
    });
});

// 提交按钮
$('.c-contact form input[type="submit"]').click(function(e) {
    var form = $('.c-contact form')[0];

    if(validForm(form)) {
        e.preventDefault();
        alert('提交成功，客服将会及时与您联系！');
    }
})

function validForm(ele) {
    var name = $(ele.name).val();
    var tel = $(ele.tel).val();
    var addr = $(ele.addr).val();
    var time = $(ele.time).val();

    return name && tel && addr && time
}
