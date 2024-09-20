$(function () {
  //HEADER SLIDER START
  $('.header__slider').slick({
    slidesToShow: 2,
    arrows: false,
  })

  $('.header__slider-arrow--left').on('click', function (e) {
    e.preventDefault()
    $('.header__slider').slick('slickPrev')
  })

  $('.header__slider-arrow--right').on('click', function (e) {
    e.preventDefault()
    $('.header__slider').slick('slickNext')
  })

  //HEADER SLIDER END
  //REPLACEMENT SLIDER START
  $('.replacement__slider').slick({
    slidesToShow: 1,
    arrows: false,
  })

  $('.replacement__slider-arrow--left').on('click', function (e) {
    e.preventDefault()
    $('.replacement__slider').slick('slickPrev')
  })

  $('.replacement__slider-arrow--right').on('click', function (e) {
    e.preventDefault()
    $('.replacement__slider').slick('slickNext')
  })

  //REPLACEMENT SLIDER END
  //ACCORDEON START

  $(document).ready(function () {
    // Прикрепляем клик по заголовкам acc-head
    $('#accordeon .acc-head').on('click', f_acc);
  });

  function f_acc() {
    var $item = $(this).closest('.accordeon__item');

    // Скрываем все кроме того, что должны открыть и удаляем модификаторы --active
    $('#accordeon .acc-body').not($(this).next()).slideUp(500);
    $('#accordeon .accordeon__item').not($item).removeClass('accordeon__item--active');
    $('#accordeon .acc-head').not($(this)).removeClass('acc-head--active');

    // Открываем или скрываем блок под заголовком, по которому кликнули
    $(this).next().slideToggle(500);

    // Добавляем/удаляем модификатор --active для текущего элемента
    $item.toggleClass('accordeon__item--active');
    $(this).toggleClass('acc-head--active');
  }


  //ACCORDEON END
  //MASTERS SLIDER START
  $('.masters__slider').slick({
    slidesToShow: 4,
    arrows: false,

  })

  $('.masters__slider-arrow--left').on('click', function (e) {
    e.preventDefault()
    $(this).closest('.masters__slider-wrapper').find('.masters__slider').slick('slickPrev')
  })

  $('.masters__slider-arrow--right').on('click', function (e) {
    e.preventDefault()
    $(this).closest('.masters__slider-wrapper').find('.masters__slider').slick('slickNext')
  })


  //MASTERS SLIDER END
  //SERVICES SLIDER START
  $('.services__slider').slick({
    slidesToShow: 6,
    arrows: false,
    centerMode: false,
    variableWidth: true,
  })

  $('.services__slider-arrow--left').on('click', function (e) {
    e.preventDefault()
    $('.services__slider').slick('slickPrev')
  })

  $('.services__slider-arrow--right').on('click', function (e) {
    e.preventDefault()
    $('.services__slider').slick('slickNext')
  })

  //SERVICES SLIDER END
  //HAPPENED SLIDER START
  $('.happened__slider').slick({
    slidesToShow: 4,
    arrows: false,
    dots: true,
    centerMode: false,
    variableWidth: true,
    appendDots: ('.happened__slider-dots'),
  })

  $('.happened__slider-arrow--left').on('click', function (e) {
    e.preventDefault()
    $('.happened__slider').slick('slickPrev')
  })

  $('.happened__slider-arrow--right').on('click', function (e) {
    e.preventDefault()
    $('.happened__slider').slick('slickNext')
  })

  //HAPPENED SLIDER END
  //EXAMPLES SLIDER START
  $('.examples__slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    appendDots: ('.examples__slider-dots'),
        responsive:
    [
      {
        breakpoint: 815,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          variableWidth: true,
        },
      },
    ]
  })

  $('.examples__slider-arrow--left').on('click', function (e) {
    e.preventDefault()
    $('.examples__slider').slick('slickPrev')
  })

  $('.examples__slider-arrow--right').on('click', function (e) {
    e.preventDefault()
    $('.examples__slider').slick('slickNext')
  })

  //EXAMPLES SLIDER END
  //MARKS SLIDER START
  $('.marks__slider').slick({
    slidesToShow: 8,
    arrows: false,
    dots: true,
    centerMode: false,
    variableWidth: true,
    appendDots: ('.marks__slider-dots'),
  })

  $('.marks__slider-arrow--left').on('click', function (e) {
    e.preventDefault()
    $('.marks__slider').slick('slickPrev')
  })

  $('.marks__slider-arrow--right').on('click', function (e) {
    e.preventDefault()
    $('.marks__slider').slick('slickNext')
  })

  //MARKS SLIDER END
  //WORKS SLIDER START
  $('.works__slider').slick({
    slidesToShow: 3,
    arrows: false,
    dots: true,
    centerMode: false,
    variableWidth: true,
    appendDots: ('.works__slider-dots'),
  })

  $('.works__slider-arrow--left').on('click', function (e) {
    e.preventDefault()
    $('.works__slider').slick('slickPrev')
  })

  $('.works__slider-arrow--right').on('click', function (e) {
    e.preventDefault()
    $('.works__slider').slick('slickNext')
  })

  //WORKS SLIDER END
  //SALE SLIDER START
  $('.sale__slider').slick({
    slidesToShow: 2,
    arrows: false,
    dots: true,
    centerMode: false,
    variableWidth: true,
    draggable: false,
    swipe: false,
    focusOnSelect: true,

    appendDots: ('.sale__slider-dots'),
  })

  $('.sale__slider-arrow--left').on('click', function (e) {
    e.preventDefault()
    $('.sale__slider').slick('slickPrev')
  })

  $('.sale__slider-arrow--right').on('click', function (e) {
    e.preventDefault()
    $('.sale__slider').slick('slickNext')
  })

  //SALE SLIDER END
  //WORKS SLIDER START
  $('.sale__inner-slider').slick({
    slidesToShow: 4,
    arrows: false,
  })


  
  $('.sale__inner-slider-arrow--left').on('click', function (e) {
    e.preventDefault()
    $(this).closest('.sale__inner_slider-wrapper').find('.sale__inner-slider').slick('slickPrev')
  })

  $('.sale__inner-slider-arrow--right').on('click', function (e) {
    e.preventDefault()
    $(this).closest('.sale__inner_slider-wrapper').find('.sale__inner-slider').slick('slickNext')
  })

  //WORKS SLIDER END
  //GALLERY SLIDERS START
  $('.gallery__main-slider').slick({
    arrows: false,
    slidesToShow: 1,
    infinite: true,
    draggable: true,
    dots: false,
    // autoplay: true,
    asNavFor: '.gallery__child-slider',
    // responsive:
    // [
    //   {
    //     breakpoint: 815,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 400,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },

    // ]
  })

  $('.gallery__slider-arrow--left').on('click', function (e) {
    e.preventDefault()
    $('.gallery__main-slider').slick('slickPrev')
  })

  $('.gallery__slider-arrow--right').on('click', function (e) {
    e.preventDefault()
    $('.gallery__main-slider').slick('slickNext')
  })


  $('.gallery__child-slider').slick({
    arrows: false,
    slidesToShow: 6,
    infinite: true,
    draggable: true,
    dots: false,
    focusOnSelect: true,
    asNavFor: '.gallery__main-slider',
    responsive:
    [
      {
        breakpoint: 900,
        settings: {
          slidesToShow:5,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow:3,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow:2,
        },
      },
    ]
  })

  //GALLERY SLIDERS END
  //ACCORDEON START

  $(document).ready(function () {
    // Прикрепляем клик по заголовкам acc-head
    $('.questions__acc .questions__acc-head').on('click', f_acc);
  });

  function f_acc() {
    var $item = $(this).closest('.questions__acc-item');

    // Скрываем все кроме того, что должны открыть и удаляем модификаторы --active
    $('.questions__acc .questions__acc-text').not($(this).next()).slideUp(500);
    $('.questions__acc .questions__acc-item').not($item).removeClass('questions__acc-item--active');
    $('.questions__acc .questions__acc-head').not($(this)).removeClass('questions__acc-head--active');

    // Открываем или скрываем блок под заголовком, по которому кликнули
    $(this).next().slideToggle(500);

    // Добавляем/удаляем модификатор --active для текущего элемента
    $item.toggleClass('questions__acc-item--active');
    $(this).toggleClass('questions__acc-head--active');
  }



  //ACCORDEON END
  //footer__highway START
  $('.footer__highway-slider').slick({
    slidesToShow: 10,
    arrows: false, 
    vertical: true, 
    verticalSwiping: true,
  })

  $('.footer__highway-arrow--left').on('click', function (e) {
    e.preventDefault()
    $('.footer__highway-slider').slick('slickPrev')
  })

  $('.footer__highway-arrow--right').on('click', function (e) {
    e.preventDefault()
    $('.footer__highway-slider').slick('slickNext')
  })

  //footer__highway END
  //footer__city START
  $('.footer__city-slider').slick({
    slidesToShow: 10,
    arrows: false, 
    vertical: true, 
    verticalSwiping: true,
  })

  $('.footer__city-arrow--left').on('click', function (e) {
    e.preventDefault()
    $('.footer__city-slider').slick('slickPrev')
  })

  $('.footer__city-arrow--right').on('click', function (e) {
    e.preventDefault()
    $('.footer__city-slider').slick('slickNext')
  })
  //footer__city END
  //footer__metro START
  $('.footer__metro-slider').slick({
    slidesToShow: 9,
    arrows: false, 
    vertical: true, 
    verticalSwiping: true,
  })

  $('.footer__metro-arrow--left').on('click', function (e) {
    e.preventDefault()
    $('.footer__metro-slider').slick('slickPrev')
  })

  $('.footer__metro-arrow--right').on('click', function (e) {
    e.preventDefault()
    $('.footer__metro-slider').slick('slickNext')
  })
  //footer__metro END


})