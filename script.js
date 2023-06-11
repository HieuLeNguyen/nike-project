$('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2400,
  });

$('.slider-products').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// // Lấy phần header và vị trí của nó
// const header = document.querySelector('.pre-l-nav');
// let prevScrollpos = window.pageYOffset;

// // Thêm hoặc xóa class hide khi người dùng cuộn màn hình
// window.onscroll = function() {
//   const currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     header.classList.remove("hide");
//   } else {
//     header.classList.add("hide");
//   }
//   prevScrollpos = currentScrollPos;
// }

// //
// var top0 = document.getElementsByClassName('pre-l-nav');

// window.addEventListener('scroll', function () {
//     if (window.scrollY >= 36) {
//         top0.style.top = 0;
//     } else {
//         top0.style.top = 36;
//     }
// });
