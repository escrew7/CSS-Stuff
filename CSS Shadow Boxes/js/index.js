$(document).ready(function(){
   $('.para').fadeIn(1000).removeClass('para');
  
   $('.insider2').click(function(){
      $('.para2').slideToggle(1000);
   });
  
  $('.insider3').hover(function(){
    $('.para3').fadeToggle(1000);
  });
  
   $('.insider4').click(function(){
    $('.insider4').toggleClass('backG');
  });
});