
// show header when scrolling
$(document).ready(function(){ 
    $(window).scroll(function(event){ 
        var height = $('html,body').scrollTop();
        if (height > 20) {  
            $('.header ').addClass('sticky');
        } else { 
            $('.header').removeClass("sticky");
        } 
    }); 
});

// hiệu ứng thêm hàng vào giỏ
// hiệu ứng thêm hàng vào giỏ
$(document).on('click','.add-to-cart', function(e){
    e.preventDefault();
    if ($(this).hasClass('disable')){
        return false; 
    }
    $(document).find('.add-to-cart').addClass('disable');
    var parent = $(this).parents('.card');
    var src = parent.find('img').attr('src');
    console.log("day la bug "+src);
    var cart = $(document).find('#cart-shop');
    console.log("day la bug "+parent);
    var parTop = $(this).offset().top;
    var parLeft = $(this).offset().left;
    $('<img />', {
        class: 'img-product-fly',
        src: src,
    }).appendTo('body').css({
        'top': parseInt(parTop - 80) + parseInt(parent.height()-350),
        'left': parLeft,
        'z-index': 99999,
    });
    setTimeout(function(){
        $(document).find('.img-product-fly').css({
            'top'   : cart.offset().top,
            'left'  : cart.offset().left,
        });
        setTimeout(function(){
            $(document).find('.img-product-fly').remove();
            var count = parseInt(cart.find('#count-item').data('count'))+1;
            cart.find('#count-item').text('('+count+')').data('count', count);
            $(document).find('.add-to-cart').removeClass('disable');
        },1000)
    },400);

});

// tăng giảm số lượng
$('input.input-qty').each(function() {
  var $this = $(this),
    qty = $this.parent().find('.is-form'),
    min = Number($this.attr('min')),
    max = Number($this.attr('max'))
  if (min == 0) {
    var d = 0
  } else d = min
  $(qty).on('click', function() {
    if ($(this).hasClass('minus')) {
      if (d > min) d += -1
    } else if ($(this).hasClass('plus')) {
      var x = Number($this.val()) + 1
      if (x <= max) d += 1
    }
    $this.attr('value', d).val(d)
  })
})



// xem thêm ảnh

$(document).on('click','.product-same-image ul li', function(e){
    e.preventDefault();
    var srcimage = $(this).find('img').attr('src');
    $(this).parents().find('.product-image > img').attr('src',srcimage);
})



