
$(".file-upload input[type=file]").change(function(){
  var filename = $(this).val().replace(/.*\\/, "");
  $("#filename").val(filename);
});


function Send_Otziv(){
  err=0,
    t1=$("#name").val(),
    t2=$("#number_dog").val(),
    t3=$("#comment").val();
  t5=$('#otziv-tel').val();
  dogovorPattern = /^[A-Za-zА-Яа-я]{2}[0-9]{4}[-]{1}[0-9]{2}$/;

  var formData = new FormData();
  jQuery.each($('#feedbackFile')[0].files, function(i, file) {
    formData.append('feedbackFile', file);
  });
  formData.append('name', $('input#name').val());
  formData.append('number_dog', $('input#number_dog').val());
  formData.append('otziv-tel', $('input#otziv-tel').val());
  formData.append('comment', $('textarea#comment').val());
  if(t2.search(dogovorPattern) == 0){
    $('#number_dog').css({border:"solid 1px #f1f1f1"});
  } else {
    $('#number_dog').css({border:"solid 1px #f5989d"});
    err = 1;
  }
  if(t1 == ''){
    $("#name").css({border:"solid 1px #f5989d"});
    err = 1;
  } else {
    $("#name").css({border:"solid 1px #f1f1f1"});
  }
  if(t3 == ''){
    $("#comment").css({border:"solid 1px #f5989d"});
    err = 1;
  } else {
    $("#comment").css({border:"solid 1px #f1f1f1"});
  }
  if(t5 == ''){
    $("#otziv-tel").css({border:"solid 1px #f5989d"});
    err = 1;
  } else {
    $("#otziv-tel").css({border:"solid 1px #f1f1f1"});
  }
  "0"==err&&
  $.ajax({
    type:"POST",
    url:"/ajax-script/otziv-add.php",
    ache: false,
    contentType: false,
    processData: false,
    data: formData,
    success: function(e){
      $("#forma_comment").html(e),
        $(".review-form").css("display","none"),
        $(".review-form__otziv").css("display","flex"),
        $("#name").val(""),
        $("#number_dog").val(""),
        $("#comment").val(""),
        $("#feedbackFile").val(""),
        $("#filename").val(""),
        $("#name").css({'border':'1px solid #f1f1f1'}),
        $("#number_dog").css({'border':'1px solid #f1f1f1'}),
        $("#comment").css({'border':'1px solid #f1f1f1'})
    }
  })
}
$(".review-form__otziv-btn").on("click",function(e){
  $(".review-form__otziv").css("display","none"),
    $(".review-form").css("display","block"),
    e.preventDefault()
});

$(".callback-banner input[type=file]").change(function(){
  var filename = $(this).val().replace(/.*\\/, "");
  $(".input-file").text(filename);
});

$('.callback-banner').on('click', '.js--send-fos', function(event) {
  event.preventDefault();
  let type = $(this).closest('.callback-banner').data('id');
  if (type === "stoimost-ostekl") {
    let extension = $('.callback-banner input[type=file]')[0].files[0];
    let defsize = 8388608; // 8 мб
    let allowedFileTypes = [  "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "rtf", "application/pdf"];
    let fosObject = $(this).closest('.callback-banner');
    let tema = fosObject.find('.callback-banner__title').text();
    let name = fosObject.find('.input-name');
    let tel = fosObject.find('.input-tel');
    let phone_lid = fosObject.find('.input-tel');
    let metrika = fosObject.find('.input-metrika').val();
    let page = fosObject.find('.input-page');
    let err = 0;
    // console.log(fosObject);
    // console.log(name);
    // console.log(tel);
    // console.log(type);
    // console.log(metrika);
    // console.log(page);
    if (name.val() === '') {
      name.css({border:"solid 2px #f5989d"});
      err=1;
    }
    else {
      name.css({'border':'2px solid #f1f1f1'});
    }
    if (tel.val() === '') {
      tel.css({border:"solid 2px #f5989d"});
      err=1;
    }
    else {
      tel.css({'border':'2px solid #f1f1f1'});
    }
    if(err === 0){
      // console.log(metrika);
      // console.log(t1);
      // console.log(t2);
      // console.log(length);
      // console.log(height);
      // console.log(quizSliderItem);
      // console.log(bonus);
      // console.log(page);
      // console.log(tema);
      // $smart=localStorage.getItem('smart');
      //       if ($smart=='yandex') $smart_mail='73472588954';
      //       if (($smart!='yandex') && ($smart!='gugl')) $smart_mail='73472588239';
      // console.log('Ошибки нет')
      // console.log('Метка ' + metrika);

      // console.log('smart_mail='+$smart_mail);

      $smart=localStorage.getItem('smart');
      $smart_mail='';
      if ($smart=='mkset') {
        $smart_mail='73472588376';
        $smart_canal = 'mkset';
      }
      if ($smart=='target_vk') {
        $smart_mail='73472588367';
        $smart_canal = 'vk';
      }
      if ($smart=='target_fb') {
        $smart_mail='73472588319';
        $smart_canal = 'fb';
      }
      if ($smart=='target_inst') {
        $smart_mail='73472588589';
        $smart_canal = 'instagramm';
      }
      if ($smart=='target_odn') {
        $smart_mail='73472588165';
        $smart_canal = 'target_odn';
      }
      if ($smart=='komsomolka') {
        $smart_mail='73472588372';
        $smart_canal = 'komsomolka';
      }
      if ($smart=='yandex_direct') {
        $smart_mail='73472588820';
        $smart_canal = 'yandex direct';
      }
      if ($smart=='google_advert') {
        $smart_mail='73472588830';
        $smart_canal = 'google advert';
      }
      if ($smart==null) {
        $smart='73472588100';
        $smart_canal = 'seo';
      }


      tel = tel.val();
      // console.log(tel);
      Newphone = tel.slice(1);
      // console.log(Newphone);
      tel = "+7"+Newphone;
      // console.log(tel);

      yaCounter33163223.reachGoal(metrika);
      ga('send', 'event', 'sumbit', metrika);
      var formData = new FormData();
      if (type === "stoimost-ostekl") {
        jQuery.each($('.callback-banner input[type=file]')[0].files, function (i, file) {
          formData.append('uploadimage', file);
        });
        formData.append('uploadimage', file);
      }
      formData.append('tema', tema);
      formData.append('tel', tel);
      formData.append('phone_lid', phone_lid);
      formData.append('name', name.val());
      formData.append('page', page.val());
      formData.append('type', type);
      formData.append('smart', $smart_canal);
      formData.append('called_did', $smart_mail);
      $.ajax({
        type: "POST",
        url: "/ajax-script/send_file_new.php",
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
        success: function(response){
          console.log('1');
          console.log(response);
          fosObject.html(response);
          // $('.rr-quiz-fedback-title').hide();
        }
      });
    }
  }
  else {
    let fosObject = $(this).closest('.callback-banner');
    let tema = fosObject.find('.callback-banner__title').text();
    let name = fosObject.find('.input-name');
    let tel = fosObject.find('.input-tel');
    let phone_lid = fosObject.find('.input-tel');
    let metrika = fosObject.find('.input-metrika').val();
    let page = fosObject.find('.input-page');
    let err = 0;
    // console.log(fosObject);
    // console.log(name);
    // console.log(tel);
    // console.log(type);
    // console.log(metrika);
    // console.log(page);
    if (name.val() === '') {
      name.css({border:"solid 2px #f5989d"});
      err=1;
    }
    else {
      name.css({'border':'2px solid #f1f1f1'});
    }
    if (tel.val() === '') {
      tel.css({border:"solid 2px #f5989d"});
      err=1;
    }
    else {
      tel.css({'border':'2px solid #f1f1f1'});
    }
    if(err === 0){
      // console.log(metrika);

      tel = tel.val();
      // console.log(tel);
      Newphone = tel.slice(1);
      // console.log(Newphone);
      tel = "+7"+Newphone;
      // console.log(tel);

      // console.log(t1);
      // console.log(t2);
      // console.log(length);
      // console.log(height);
      // console.log(quizSliderItem);
      // console.log(bonus);
      // console.log(page);
      // console.log(tema);
      // $smart=localStorage.getItem('smart');
      //       if ($smart=='yandex') $smart_mail='73472588954';
      //       if (($smart!='yandex') && ($smart!='gugl')) $smart_mail='73472588239';
      // console.log('Ошибки нет')
      // console.log('Метка ' + metrika);

      // console.log('smart_mail='+$smart_mail);

      $smart=localStorage.getItem('smart');
      $smart_mail='';
      if ($smart=='mkset') {
        $smart_mail='73472588376';
        $smart_canal = 'mkset';
      }
      if ($smart=='target_vk') {
        $smart_mail='73472588367';
        $smart_canal = 'vk';
      }
      if ($smart=='target_fb') {
        $smart_mail='73472588319';
        $smart_canal = 'fb';
      }
      if ($smart=='target_inst') {
        $smart_mail='73472588589';
        $smart_canal = 'instagramm';
      }
      if ($smart=='target_odn') {
        $smart_mail='73472588165';
        $smart_canal = 'target_odn';
      }
      if ($smart=='komsomolka') {
        $smart_mail='73472588372';
        $smart_canal = 'komsomolka';
      }
      if ($smart=='yandex_direct') {
        $smart_mail='73472588820';
        $smart_canal = 'yandex direct';
      }
      if ($smart=='google_advert') {
        $smart_mail='73472588830';
        $smart_canal = 'google advert';
      }
      if ($smart==null) {
        $smart='73472588100';
        $smart_canal = 'seo';
      }

      yaCounter33163223.reachGoal(metrika);
      ga('send', 'event', 'sumbit', metrika);
      var formData = new FormData();
      if (type === "stoimost-ostekl") {
        jQuery.each($('.callback-banner input[type=file]')[0].files, function (i, file) {
          formData.append('uploadimage', file);
        });
        formData.append('uploadimage', file);
      }
      formData.append('tema', tema);
      formData.append('tel', tel);
      formData.append('phone_lid', phone_lid);
      formData.append('name', name.val());
      formData.append('page', page.val());
      formData.append('type', type);
      formData.append('smart', $smart_canal);
      formData.append('called_did', $smart);
      $.ajax({
        type: "POST",
        url: "/ajax-script/send_fos.php",
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
        success: function(response){
          console.log('1');
          fosObject.html(response);
          // $('.rr-quiz-fedback-title').hide();
        }
      });
    }
  }
});

// Форма отправки на почту
function sendModal () {
  var theme = $('.pop-up__header-title').text(); // Тема заголовка

  var err = 0,
    name = $('#pop-up-name').val(),
    phone = $('#pop-up-phone').val(),
    phone_lid = $('#pop-up-phone').val(),
    mail = $('#pop-up-mail').val(),
    message = $('#pop-up-message').val(),
    metka = $('#metrica-popup').val();
  page = $('.input-page').val();
  pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (name == '') {
    $('#pop-up-name').addClass('error');
    err = 1;
  } else {
    $('#pop-up-name').removeClass('error');
  }
  if (phone == '') {
    $('#pop-up-phone').addClass('error');
    err = 1;
  } else {
    $('#pop-up-phone').removeClass('error');
  }

  if(mail.search(pattern) == 0){
    $('#pop-up-mail').removeClass('error');
  } else {
    $('#pop-up-mail').addClass('error');
    err = 1;
  }


  if (err == '0') {
    // console.log(name);
    // console.log(mail);
    // console.log(message);
    // console.log(metka);

    $smart=localStorage.getItem('smart');
    $smart_mail='';
    if ($smart=='mkset') {
      $smart_mail='73472588376';
      $smart_canal = 'mkset';
    }
    if ($smart=='target_vk') {
      $smart_mail='73472588367';
      $smart_canal = 'vk';
    }
    if ($smart=='target_fb') {
      $smart_mail='73472588319';
      $smart_canal = 'fb';
    }
    if ($smart=='target_inst') {
      $smart_mail='73472588589';
      $smart_canal = 'instagramm';
    }
    if ($smart=='target_odn') {
      $smart_mail='73472588165';
      $smart_canal = 'target_odn';
    }
    if ($smart=='komsomolka') {
      $smart_mail='73472588372';
      $smart_canal = 'komsomolka';
    }
    if ($smart=='yandex_direct') {
      $smart_mail='73472588820';
      $smart_canal = 'yandex direct';
    }
    if ($smart=='google_advert') {
      $smart_mail='73472588830';
      $smart_canal = 'google advert';
    }
    if ($smart==null) {
      $smart='73472588100';
      $smart_canal = 'seo';
    }

    console.log('smart='+$smart);
    console.log('phone_lid='+phone_lid);
    console.log('tel='+$('#pop-up-phone').val());

    console.log(phone);
    Newphone = phone.slice(1);
    console.log(Newphone);
    phone = "+7"+Newphone;

    var formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('phone_lid', phone_lid);
    formData.append('mail', mail);
    formData.append('message', message);
    formData.append('theme', theme);
    formData.append('page', page);
    formData.append('smart', $smart_canal);
    formData.append('called_did', $smart);
    $.ajax({
      type: "POST",
      url: "/ajax-script/send_fos_popup.php",
      cache: false,
      contentType: false,
      processData: false,
      data: formData,
      success: function(response){
        $('.pop-up__good').css('visibility', 'visible');
        yaCounter33163223.reachGoal(metka);
        ga('send', 'event', 'sumbit', metka);
      }
    });
  }
}

let titleHeight = $('.product-element__block-title').height();
if (titleHeight < 800) {
  $('.js--title-max-height').hide();
  $('.product-element__block').removeClass('hide');
}

$('.product-element').on('click', '.js--title-max-height', function(){
  let curElem = $(this).prev('.product-element__block');
  $(curElem).toggleClass('hide');
  if ($(curElem).hasClass('hide')) {
    $(this).html('Развернуть');
  } else {
    $(this).html('Скрыть');
  }
  return false;
});

$('.js--link-back').on('click', function(evt){
  window.history.go(-1);
});

$('.js--colorbox-pdf').colorbox();

$('.js--profil-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  prevArrow: $('.js--profil-prev'),
  nextArrow: $('.js--profil-next'),
  dots: true,
  appendDots: $('.js--profil-dots'),
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
        adaptiveHeight: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        adaptiveHeight: true,
      }
    },
  ]
});

if (window.location.pathname === '/dveri/portalnye-dveri-ufa/') {
  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  $('.resheniya-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    draggable: false,
    arrows:false
  });
  $('.swiper-button-next').on('click', function() {
    $('.resheniya-slider').slick('slickPrev');
  });
  $('.swiper-button-prev').on('click', function() {
    $('.resheniya-slider').slick('slickNext');
  });
}

if ($(window).width() < 576) {
  $('.reviews').on('touchstart', '.reviews-slider__item', function(){
    $(this).find('p').toggleClass('no-line-clamp');
    $('.reviews-slider').slick('refresh');
  });
}

// console.log(window.location.pathname);

if (window.location.pathname == '/okna/') {
  // console.log($('.section-item').eq(0));
  $('.section-item').eq(5).css('order', '-1');
  $('.section-item').eq(0).css('order', '2');
}

$('body').on('click', '.js--filter-profil', function(){
  var noiseID = null;
  var lightID = null;
  $('.choice-item__input').each(function() {
    if ($(this).is(':checked')) {
      if ($(this).hasClass('noise') ) {
        noiseID = $(this).closest('.choice-item').data('noise')

      }
      if ($(this).hasClass('light') ) {
        lightID = $(this).closest('.choice-item').data('light');
      }
    }
  });
  console.log(lightID,noiseID);
  var formData = new FormData();
  formData.append('lightId', lightID);
  formData.append('noizeId', noiseID);
  $.ajax({
    type:"POST",
    url:"/ajax-script/card-filter.php",
    ache: false,
    contentType: false,
    processData: false,
    data: formData,
    success: function(e){
      $('.js--card-list').html(e);
      $('.choice__step').removeClass('active');
      $('.choice__step[data-step="2"]').addClass('active');
    }
  })
});
