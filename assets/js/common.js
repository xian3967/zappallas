$(function() {
  // モーダル用
  $('.p-modal__button').click(function() {
    $('.p-modal__content__warpper').show();
    $('.p-modal__content').fadeIn();
    $('body').addClass('is-scrolloff');
  });
  $('.p-modal__content__close').click(function() {
    $('.p-modal__content__warpper').hide();
    $('.p-modal__content').fadeOut();
    $('body').removeClass('is-scrolloff');
  });
  $('.p-modal__content__background').click(function() {
    $('.p-modal__content__close').click();
  });

  // タブ用
  $('.p-tab__button').click(function() {
    $('.p-tab__button').removeClass('is-current');
    $(this).addClass('is-current');
    var tabCurrent = $(this).data('contents');
    $('.p-tab__content').removeClass('is-showing');
    $('.p-tab__content_' + tabCurrent).addClass('is-showing');
  });
});