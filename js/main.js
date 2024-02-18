$('#main-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
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
$('#best_selling_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:3
        },
        1000:{
            items:4
        }
    }
})


window.addEventListener('scroll', function() {
    var header = document.querySelector('.sticky');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      header.style.backgroundColor = 'rgba(25, 23, 22, 0.7)'; /* رنگ دلخواه برای هدر */
    } else {
      header.style.backgroundColor = 'transparent'; /* رنگ پیشفرض هدر */
    }
  });

  let menu = document.querySelector(".menu")
  let menuBtn = document.querySelector(".hamburger_menu")
  let menuBtnIcon = document.querySelector(".hamburger_menu i")

  menuBtn.addEventListener("click", function(){
    if(menuBtnIcon.classList.contains("fa-bars")){
      menu.style.right = "-16px"
      menuBtnIcon.classList = "fa fa-times"
    } else {
      menu.style.right = "-400px"
      menuBtnIcon.classList = "fa fa-bars"
    }
  })

  // let sub_menu = document.querySelector(".women_sub_menu")
  // let sub_menuBtn = document.querySelector("#women_sub_menu")

  // sub_menuBtn.addEventListener("click", function(){
  //   if(sub_menu.classList.contains("women_sub_menu")){
  //     menu.style.right = "-16px"
  //   } else {
  //     menu.style.right = "-400px"
  //   }
  // })

