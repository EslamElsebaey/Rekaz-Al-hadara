$(document).ready(function(){
     // preloader
     setTimeout(function () {
      $(".preloader").css({
        opacity : "0" , 
        visibility : "hidden" , 
      })
    }, 2000);





/************************************************************************************************** */

// main swiper

const mainSwiper = new Swiper('.mainBanner .mainSwiper', {
  loop: true,
  draggable: true,
  // autoplay: true,
  navigation: {
    nextEl: ' .mainBanner .swiper-button-next',
    prevEl: '.mainBanner .swiper-button-prev',
  },

  pagination: {
    el: '.mainBanner .swiper-pagination',
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
  }
});



/************************************************************************************************** */




// clients swiper
const clientsSwiper = new Swiper('.clients .swiper', {
  loop: true,
  // autoplay : true ,
  pagination: {
    el: '.clients .swiper-pagination',
    clickable: true,
  },
 
  navigation: {
    nextEl: ' .clients .swiper-button-next',
    prevEl: '.clients .swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    350: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    400: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    700: {
      slidesPerView: 4,
      spaceBetween: 20
    } , 
      992: {
      slidesPerView: 5,
      spaceBetween: 15
    } , 
    1100: {
      slidesPerView: 6,
      spaceBetween: 20
    }
  }
});


// news swiper
const newsSwiper = new Swiper(' .news .swiper', {
  loop: true,
  // autoplay: true,
  pagination: {
    el: '.news-parent .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.news-parent .swiper-button-next ',
    prevEl: '.news-parent .swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    350: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
      spaceBetween : 30 ,
    },
  }
});


// projects swiper
const projectsSwiper = new Swiper(' .projects .swiper', {
  loop: true,
  // autoplay: true,
  pagination: {
    el: '.projects .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.projects .swiper-button-next ',
    prevEl: '.projects .swiper-button-prev',
  },
  breakpoints: {
    350: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    } 
  }
});



/************************************************************************************************** */



// open and close sideBar


$(".menu-bars").click(function(){
  $(this).toggleClass("open-bars");
  $("nav").toggleClass("reset-left");
  $("body").toggleClass("overflowHidden");
})




/************************************************************************************************** */
 

// to top button
$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop")
  }else{
    $(".toTop").removeClass("showToTop")
  }
})

$(".toTop").click(function(){
  $('html, body').animate({scrollTop:0}, 500);
}) 


/************************************************************************************************** */



// counters

let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;


valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-num"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1 ;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});


/************************************************************************************************** */



// footer nested menu


if($(window).width() <= 768) {
  $(".footer-title").click(function(){
    $(this).next().slideToggle(350);
    $(this).toggleClass("arrow-rotate");
    $(".footer-title").not($(this)).next().slideUp(300);
    $(".footer-title").not($(this)).removeClass("arrow-rotate");
  })
}





/************************************************************************************************** */


// nav nested menu

if($(window).width() <= 768) {
$(".li-drop > a").click(function (e) {
  e.preventDefault() ;
  $(this).siblings(".ul-drop").slideToggle(300) ;
  $(this).toggleClass("icon-rotate");
  $(".li-drop a").not($(this)).siblings(".ul-drop").slideUp(300);
  $(".li-drop a").not($(this)).removeClass("icon-rotate");
  })
  }
  

/************************************************************************************************** */



 

//fixed nav
   
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 150) {
        $("header").addClass("fixed");
        if($(window).width() > 768){
          $(".logo img").addClass("logo-height");
        }
      } else {
        $("header").removeClass("fixed");
        if($(window).width() > 768){
          $(".logo img").removeClass("logo-height");
        }
      }
    });
    var fixedBar = document.querySelector("header"),
      prevScrollposition = $(window).scrollTop();

    (window.onscroll = function () {
      var o = $(window).scrollTop();
      prevScrollposition < o && prevScrollposition > 0 ? fixedBar.classList.add("fixsedt") : fixedBar.classList.remove("fixsedt"), (prevScrollposition = o);
    })   
  




})  // end of document ready


/************************************************************************************************** */



//  Fire wow 
new WOW().init();


/************************************************************************************************** */


