'use strict'

$(function(){

  // hamburger menu
  $('#js-hamburger').click(function(){
    $('#js-header__nav').toggleClass('is-active');
    $(this).toggleClass('is-active');
    $('body').toggleClass('nav-open');
  });

  $('#js-header__nav').click(function(){
    $(this).toggleClass('is-active');
    $('#js-hamburger').toggleClass('is-active');
    $('body').toggleClass('nav-open');
  });

  //  header bar
  $(window).scroll(function(){
    if($(window).scrollTop() > $(window).height()){
      $('#js-header').addClass('is-active');
    } else{
      $('#js-header').removeClass('is-active');
    }
  });

  // contact.html  If privacyPolicy is checked, button is active 
  $('.privacyPolicy__check').change(function(){
    let property = $(this).prop('checked');
    if (property) {
      $('.btn__submit').addClass('is-active');
    } else {
      $('.btn__submit').removeClass('is-active');
    }
  });

  // contact.html - input form error check
  $('.btn__submit').click(function(){
    if(!inputCheck()){
            
      // if there are errors, scroll to the form top
      let formTop = $('form').offset().top;
      $('body,html').scrollTop (formTop - 50);

      return false;
    } 
  });

  function inputCheck(){
    let result = true;

    // error class reset
    $('#js-input__name').removeClass('err');
    $('#js-input__mail').removeClass('err');
    $('#js-input__tel').removeClass('err');
    $('#js-input__inquiry').removeClass('err');

    // error message reset
    $('.form__errorMessage').empty();

    // get the entry
    let name = $('#js-input__name').val();
    let mail = $('#js-input__mail').val();
    let tel = $('#js-input__tel').val();
    let inquiry = $('#js-input__inquiry').val();


    // consultation sort
    if(!$("input:radio[name = 'sort']:checked").val()){
      $('.sort-errorMessage').html('※お問い合わせ種別は必須項目です');
      result = false;
    }

    // name
    if(name == ""){
      $('#js-input__name').addClass('err');
      $('.name-errorMessage').html('※お名前は必須項目です');
      result = false;
    }else if (!name.match(/[^\s\t]/)){
      $('#js-input__name').addClass('err');
      $('.name-errorMessage').html('※使用できない文字が含まれています');
      result = false;
    } else if (name.length > 25) {
      $('#js-input__name').addClass('err');
      $('.name-errorMessage').html('※お名前は25文字以内で入力してください');
      result = false;
    }

    // mail
    if(mail == ""){
      $('#js-input__mail').addClass('err');
      $('.mail-errorMessage').html('※メールアドレスは必須項目です');
      result = false;
    } else if(!mail.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
      $('#js-input__mail').addClass('err');
      $('.mail-errorMessage').html('※メールアドレスが間違っています');
      result = false;
    }

    // tel
    if(tel == ""){

    } else if(!tel.match(/\d{2,4}-?\d{2,4}-?\d{3,4}/)) {
      $('#js-input__tel').addClass('err');
      $('.tel-errorMessage').html('※電話番号が間違っています');
      result = false;
    }

    // inquiry
    if(inquiry == ""){
      $('#js-input__inquiry').addClass('err');
      $('.inquiry-errorMessage').html('※お問い合わせ内容は必須項目です');
      result = false;
    } else if(!inquiry.match(/.*\S+.*/)) {
      $('#js-input__inquiry').addClass('err');
      $('.inquiry-errorMessage').html('※お問い合わせ内容は必須項目です');
      result = false;
    }

    return result;
  }


  // main visual fade in

  $('.mv').hide().fadeIn(2000);
  $('.js-mv__copy').addClass('is-active');
  $('.mv__copy-lowerPage').addClass('is-active');


  // fade up at each sections
  $(window).scroll(function(){
    $('.js-fadeUp').each(function(){
      let triggerPoint = $(this).offset().top - $(window).height() - 40;
      if($(window).scrollTop() > triggerPoint){
        $(this).addClass('is-active');
      } else{
        $(this).removeClass('is-active');
      }
    });
  });

  // about.html message section ceo image fade in
  $(window).scroll(function(){
    let triggerPoint = $('.message').offset().top - $(window).height()/2;
    if($(window).scrollTop() > triggerPoint){
      $('.message__wrapper').addClass('is-active');
    }else{
      $(this).removeClass('is-active');
    }
  });
});



