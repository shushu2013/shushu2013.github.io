// side
$(function() {
    var side = $('.side');
    var action = $('.side-action')

    $('html').on('click', function(e) {
        var target = $(e.target);
        // console.log(target);
        // console.log(target.is(side));
        if(!side.hasClass('hiddened') && !target.is(action)) {
            side.addClass('hiddened');
        }

        if(target.is(action)) {
            side.toggleClass('hiddened');
        }
    })
})

// hobby
$(function(){
    var nav = $('.hobby .nav');
    var span = $('.hobby .nav span');
    var div = $('.hobby .list div[data-category]')

    nav.on('click', function(e) {
        var item = $(e.target);
        // console.log(item);
        // console.log(span.is(item));

        if(span.is(item)) {
            var $div = $('.hobby .list div[data-category="' + item.attr('data-category') + '"]');

            span.removeClass('actived');
            item.addClass('actived');

            div.removeClass('no-hidden');
            div.addClass('hidden');
            $div.addClass('no-hidden');
            $div.removeClass('hidden');
        }
    })
})