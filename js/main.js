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

   // Слайдер
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
      
      // Валидация формы
      // modal__form
      $('.modal__form').validate({
         errorElement: "div",
         errorClass: "invalid",
         rules: {
            userName: {
               required: true,
               minlength: 2,
               maxlength: 15
            },
            userPhone: {
               required: true,
               minlength: 17
            },
            userEmail: {
              required: true,
              email: true
            },
            policyCheckbox: {
               required: true
            }
         },
         errorPlacement: function (error, element) {
            if (element.attr("type") == "checkbox") {
                return element.next('label').append(error);
            }
        
             error.insertAfter($(element));
        },
         messages: {
            userName: {
            required: "Пожалуйста, укажите имя",
            minlength: "Слишком короткое имя",
            maxlength: "Слишком длинное имя"
            },
            userPhone: {
               required: "Необходимо указать номер телефона",
               minlength: "Неправильный номер телефона"
            },
            userEmail: {
               required: "Необходимо указать почту",
               email: "Введите в формате repair-design@gmail.com"
            },
            policyCheckbox: {
               required: ""
            }
         },
         submitHandler: function(form) {
            $(form).ajax.Submit();
         }
      });
      // control__form
      $('.control__form').validate({
         errorElement: "div",
         errorClass: "invalid",
         rules: {
            userName: {
               required: true,
               minlength: 2,
               maxlength: 15
            },
            userPhone: {
               required: true,
               minlength: 17
            },
            policyCheckbox: {
               required: true
            }
         },
         errorPlacement: function (error, element) {
            if (element.attr("type") == "checkbox") {
                return element.next('label').append(error);
            }
        
             error.insertAfter($(element));
        },
         messages: {
            userName: {
            required: "Пожалуйста, укажите имя",
            minlength: "Слишком короткое имя",
            maxlength: "Слишком длинное имя"
            },
            userPhone: {
               required: "Необходимо указать номер телефона",
               minlength: "Неправильный номер телефона"
            },
            policyCheckbox: {
               required: ""
            }
         }
      });
      // footer__form
      $('.footer__form').validate({
         errorElement: "div",
         errorClass: "invalid",
         rules: {
            userName: {
               required: true,
               minlength: 2,
               maxlength: 15
            },
            userPhone: {
               required: true,
               minlength: 17
            },
            userQuestion: {
              required: true
            },
            policyCheckbox: {
               required: true
            }
         },
         errorPlacement: function (error, element) {
            if (element.attr("type") == "checkbox") {
                return element.next('label').append(error);
            }
        
             error.insertAfter($(element));
        },
         messages: {
            userName: {
            required: "Пожалуйста, укажите имя",
            minlength: "Слишком короткое имя",
            maxlength: "Слишком длинное имя"
            },
           userPhone: {
            required: "Необходимо указать номер телефона",
            minlength: "Неправильный номер телефона"
            },
           userQuestion: {
            required: "Пожалуйста, введите ваш вопрос"
            },
           policyCheckbox: {
            required: ""
            }
         }
      });
      // Маска для телефона
      $('[type=tel]').mask('+7(000) 00-00-000');
      // video
      var player;
    $('.video__play').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            height: '465',
            width: '100%',
            videoId: 'RHzzLqJWqHs',
            events: {
                'onReady': videoPlay
            }
        });
        $('.video__play').css('max-height', '31rem');
    })
    function videoPlay(event) {
        event.target.playVideo();
    }
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
 
 // yandex map
 ymaps.ready(function () {
   var myMap = new ymaps.Map('map', {
           center: [56.845872, 35.905525],
           zoom: 9
       }, {
           searchControlProvider: 'yandex#search'
       }),

       // Создаём макет содержимого.
       MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
           '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
       ),

       myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
           hintContent: 'Наш офис',
       }, {
           // Опции.
           // Необходимо указать данный тип макета.
           iconLayout: 'default#image',
           // Своё изображение иконки метки.
           iconImageHref: 'img/marker.png',
           // Размеры метки.
           iconImageSize: [32, 32],
           // Смещение левого верхнего угла иконки относительно
           // её "ножки" (точки привязки).
           iconImageOffset: [-5, -38]
       });
   myMap.geoObjects
       .add(myPlacemark)
   });
});