/*
document.addEventListener("DOMContentLoaded", function(event) {
   const modal = document.querySelector('.modal');
   const modalBtn = document.querySelectorAll('[data-toggle=modal]');
   const closeBtn = document.querySelector('.modal__close');
   const switchModal = () => {
      modal.classList.toggle('modal--visible');
   }
   modalBtn.forEach(element => {
      element.addEventListener('click', switchModal);
   });

   closeBtn.addEventListener('click', switchModal);

});
*/

/*модальное окно*/
$(document).ready(function () {
   var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');

   modalBtn.on('click', function () {
      modal.toggleClass('modal--visible');
   });
   closeBtn.on('click', function () {
      modal.toggleClass('modal--visible');
   });
});

/* 
$(document).keydown(function(e) {
   if (e.keyCode == 27) {
      modal.toggleClass('modal--visible');
   }
});
*/

/* Кнопка вверх*/
$(document).ready(function() { 
   var button = $('#upbutton');	
   $(window).scroll (function () {
     if ($(this).scrollTop () > 300) {
       button.fadeIn();
     } else {
       button.fadeOut();
     }
 });	 
 button.on('click', function(){
 $('body, html').animate({
 scrollTop: 0
 }, 800);
 return false;
 });		 
 });
