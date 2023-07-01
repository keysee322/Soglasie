function stopScroll(item = 'body') {
  let documentWidth = parseInt(document.documentElement.clientWidth),
    windowsWidth = parseInt(window.innerWidth),
    scrollbarWidth = windowsWidth - documentWidth;
  $(item).attr('style', 'overflow: hidden; padding-right: ' + scrollbarWidth + 'px');
}

function moreToggle(button, target) {
  if ($(button).hasClass('active')) {
    $(target).height(160);
  } else {
    $(target).height($(target)[0].scrollHeight);
  }
  $(button).toggleClass('active');
}

// возвращаем скролл для body
function freeScroll(item = 'body') {
  $(item).attr('style', '');
}

function increase() {
  let temp = $('.product__count-input').val();
  if (temp < 99) {
    $('.product__count-input').val(++temp);
  }
}
function decrease() {
  let temp = $('.product__count-input').val();
  if (temp > 1) {
    $('.product__count-input').val(--temp);
  }
}
function inputParse() {
  let temp = $('.product__count-input').val();
  if (temp > 99) {
    $('.product__count-input').val(Math.abs(temp.slice(0, -1)));
  }
  if (temp < 1) {
    $('.product__count-input').val(Math.abs(temp.slice(0, -1)));
  }
}

$(document).ready(() => {
  $('#promo').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    items: 1,
    autoWidth: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    smartSpeed: 800,
    autoplayHoverPause: true,
  });
  if (document.documentElement.clientWidth > 1300) {
    $('#new__content').owlCarousel({
      loop: true,
      margin: 60,
      nav: true,
      navText: [
        '<svg width="24" height="38" viewBox="0 0 24 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 2L4 20.5867L22 36" stroke="black" stroke-opacity="0.5" stroke-width="5"/></svg>',
        '<svg width="24" height="38" viewBox="0 0 24 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L20 20.5867L2 36" stroke="black" stroke-opacity="0.5" stroke-width="5"/></svg>',
      ],
      dots: false,
      items: 3,
      autoWidth: false,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplaySpeed: 1000,
      smartSpeed: 800,
      autoplayHoverPause: true,
    });
  } else if (
    document.documentElement.clientWidth <= 1300 &&
    document.documentElement.clientWidth > 520
  ) {
    $('#new__content').owlCarousel({
      loop: true,
      margin: 60,
      nav: true,
      navText: [
        '<svg width="24" height="38" viewBox="0 0 24 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 2L4 20.5867L22 36" stroke="black" stroke-opacity="0.5" stroke-width="5"/></svg>',
        '<svg width="24" height="38" viewBox="0 0 24 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L20 20.5867L2 36" stroke="black" stroke-opacity="0.5" stroke-width="5"/></svg>',
      ],
      dots: false,
      items: 2,
      autoWidth: false,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplaySpeed: 1000,
      smartSpeed: 800,
      autoplayHoverPause: true,
    });
  } else if (document.documentElement.clientWidth <= 520) {
    $('#new__content').owlCarousel({
      loop: true,
      margin: 60,
      nav: true,
      navText: [
        '<svg width="24" height="38" viewBox="0 0 24 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 2L4 20.5867L22 36" stroke="black" stroke-opacity="0.5" stroke-width="5"/></svg>',
        '<svg width="24" height="38" viewBox="0 0 24 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L20 20.5867L2 36" stroke="black" stroke-opacity="0.5" stroke-width="5"/></svg>',
      ],
      dots: false,
      items: 1,
      autoWidth: false,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplaySpeed: 1000,
      smartSpeed: 800,
      autoplayHoverPause: true,
    });
  }

  $('.header__burger-button').on('click', function () {
    $('.burger').addClass('active');
    stopScroll();
  });
  $('.burger__close').on('click', function () {
    $('.burger').removeClass('active');
    freeScroll();
  });

  $('.catalog__sort-button').on('click', function () {
    $(this).toggleClass('revert');
  });

  // $('.product__count-inc').on('click', function () {
  //   increase();
  // });
  // $('.product__count-dec').on('click', function () {
  //   decrease();
  // });
  // $('.product__count-input').keyup(function () {
  //   inputParse();
  // });
});
