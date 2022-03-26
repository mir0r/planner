  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 600,
    allowTouchMove: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    }
    
  });

  const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 600,
    spaceBetween: 350,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination1',
    },

    navigation: {
      nextEl: '.swiper1-button-next',
      prevEl: '.swiper1-button-prev',
    }
    
  });

  const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    
    centeredSlides: true,
    parallax: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination2',
    },

   
    
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 330
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 1,
        spaceBetween: 80
      },
      1500:{
        slidesPerView: 1,
        spaceBetween: -500
      },
      1520:{
        slidesPerView: 1,
        spaceBetween: -300
      }
    }
    
  });
let mainCheck = document.querySelector('#menu')
let headerMenu = document.querySelector('.header_menu')
let menuCheck = document.querySelector('#left_menu');
let leftMenu = document.querySelector('.left_menu')
let body = document.querySelector('body')

mainCheck.addEventListener('click', function () {
  if (! headerMenu.classList.contains('active')) {
    headerMenu.classList.remove('reverse')
    headerMenu.classList.add('active')
  } else if (headerMenu.classList.contains('active')) {
    headerMenu.classList.remove('active')
    headerMenu.classList.add('reverse')
  }
})

menuCheck.addEventListener('click', function () {
  leftMenu.classList.toggle('active')
  body.classList.toggle('freezed')
  // let checkResult = menuCheck.getAttribute('aria-checked');
  // if (checkResult = 'true') {
  //   leftMenu.classList.add('active')
  // } else
  // if (checkResult = 'false'){
  //   leftMenu.classList.remove('active')
  // }
})

document.addEventListener('scroll', function () {
  let header = document.querySelector('header')
  if (window.scrollY > 0) {
    header.classList.add('fixed')    
  } else {
    header.classList.remove('fixed')    
  }
  
})

document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = document.querySelector('nav').offsetHeight;
      // const topOffset = 0; // если не нужен отступ сверху 
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset - 20;

      leftMenu.classList.remove('active')
      body.classList.remove('freezed')
      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});


