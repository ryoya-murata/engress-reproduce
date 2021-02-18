$(function () {
  // クリック時の動作
  $('.hamberger__line-wrapper').on('click', function() {

      // メニューを閉じる
      if($(this).hasClass('open')) {
          $(this).removeClass('open');
          $('.hamberger-menu').removeClass('open');
         


      // メニューを開く
      } else {
          $(this).addClass('open');
          $('.hamberger-menu').addClass('open');
         
      }
  });
});
