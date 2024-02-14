$('#main-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

window.addEventListener('scroll', function() {
    var header = document.querySelector('.main_header');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      header.style.backgroundColor = 'rgba(25, 23, 22, 0.7)'; /* رنگ دلخواه برای هدر */
    } else {
      header.style.backgroundColor = 'transparent'; /* رنگ پیشفرض هدر */
    }
  });