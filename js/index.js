// side
$(function() {
    'use strict'

    var side = $('.c-side')
    var action = $('.c-action.js-action')

    $('html').on('click', function(e) {
        var target = $(e.target)
        // console.log(target);
        // console.log(target.is(side));
        if(!side.hasClass('is-hidden') && !target.is(action)) {
            side.addClass('is-hidden')
        }

        if(target.is(action)) {
            side.toggleClass('is-hidden')
        }
        // console.log('click')
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
    
    action.on('touchstart', function(e) { 
        var touch = e.originalEvent.changedTouches[0]

        touch_clientX = touch.clientX
        touch_clientY = touch.clientY
    })

    action.on('touchmove', function(e) {
        var touch = e.originalEvent.changedTouches[0]
        var action_right = Number.parseInt(action.css('right')) 
        var action_bottom = Number.parseInt(action.css('bottom'))

        e.preventDefault()  // 阻止默认事件（解决移动端页面滑动）
        // e.stopPropagation() // 阻止事件冒泡

        // 计算该偏移的位置
        var right = action_right + (touch_clientX - touch.clientX)
        var bottom = action_bottom + (touch_clientY - touch.clientY)
        
        // 保留上一次 touch 位置
        touch_clientX = touch.clientX
        touch_clientY = touch.clientY
        
        // side.text(action.css('right'))

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
        // console.log(item)
        // console.log(span.is(item))

        if(span.is(item)) {
            var $div = $('.c-hobby div[data-category="' + item.attr('data-category') + '"]')

            span.removeClass('is-hobby-active')
            item.addClass('is-hobby-active')

            div.addClass('is-hidden')
            $div.removeClass('is-hidden')
        }
    })
})