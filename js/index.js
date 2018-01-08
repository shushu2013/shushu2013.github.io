// fastclick 
$(function(){
    FastClick.attach(document.body)
})

// side
$(function() {
    'use strict'

    var side = $('.c-side')
    var action = $('.c-action.js-action')

    $('html').on('click', function(e) {
        var target = $(e.target)
        
        if(!side.hasClass('is-hidden') && !target.is(action) ) {
            side.addClass('is-hidden')
        }

        if(target.is(action) || target.is(action.children())) {
            side.toggleClass('is-hidden')
        }
    })
})

// move
$(function() {
    'use strict'

    var side = $('.c-side')
    var action = $('.c-action.js-action')
    // 记录上一次 touch 位置
    var touch_clientX
    var touch_clientY
    var action_right
    var action_bottom

    // 屏幕宽度和高度
    var screenHeight = $(window).height();  // screen.height
    var screenWidth = $(window).width();    // screen.width
    
    action.on('touchstart', function(e) {
        var touch = e.originalEvent.changedTouches[0]

        touch_clientX = touch.clientX
        touch_clientY = touch.clientY

        action_right = Number.parseFloat(action.css('right'))
        action_bottom = Number.parseFloat(action.css('bottom'))
    })

    action.on('touchmove', function(e) {
        var touch = e.originalEvent.changedTouches[0]
        var WBOUND = 15; // 边界范围控制
        var HBOUND = 15;

        e.preventDefault()  // 阻止默认事件（解决移动端页面滑动）
        // e.stopPropagation() // 阻止事件冒泡


        // 超出屏幕预设边界，直接返回
        if(touch.clientX < WBOUND || touch.clientX > (screenWidth - WBOUND)) {
            return
        }
        if(touch.clientY < HBOUND || touch.clientY > (screenHeight - HBOUND)) {
            return
        }

        // 计算该偏移的位置
        var right = action_right + (touch_clientX - touch.clientX)
        var bottom = action_bottom + (touch_clientY - touch.clientY)
        
        action.css('right', right + 'px')
        action.css('bottom', bottom + 'px')
    })
})

// hobby
$(function(){
    'use strict'

    var nav = $('.c-hobby .c-hobby__nav')
    var span = $('.c-hobby .js-hobby-change')
    var div = $('.c-hobby .js-hobby-trigger')

    nav.on('click', function(e) {
        var item = $(e.target)

        if(span.is(item)) {
            var $div = $('.c-hobby div[data-category="' + item.attr('data-category') + '"]')

            span.removeClass('is-hobby-active')
            item.addClass('is-hobby-active')

            div.addClass('is-hidden')
            $div.removeClass('is-hidden')
        }
    })
})