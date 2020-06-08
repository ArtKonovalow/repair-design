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
      closeBtn = $('.modal__close'),
      closeModal = () => {
         modal.removeClass('modal--visible');
      }

   modalBtn.on('click', function () {
      modal.toggleClass('modal--visible');
   });
   closeBtn.on('click', function () {
      modal.toggleClass('modal--visible');
   });
   $(window).on('click', function (event) {
      if (event.target == modal[0]) {
         closeModal();
      }
   });
   $(document).on('keydown', function (event) {
      if (event.code == 'Escape') {
         closeModal();
      }
   });

   var mySwiper = new Swiper ('.swiper-container', {
      loop: true,
      spaceBetween: 100,
      pagination: {
         el: '.swiper-pagination',
         type: 'bullets',
      },
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
         },
      })

      var next = $('.swiper-button-next');
      var prev = $('.swiper-button-prev');
      var bullets = $('.swiper-pagination');

      next.css('left', prev.width() + 10 + bullets.width() +10)
      bullets.css('left', prev.width() +10)

      new WOW().init();

   }); 

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