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
$('#best_selling_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:false,
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
$('#discount_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:false,
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
$('#comment_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1170:{
            items:3
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
  }),



 function openPopup() {
    var popup = document.getElementById("myPopup");
    popup.style.display = "block";
  }
  
  function closePopup() {
    var popup = document.getElementById("myPopup");
    popup.style.display = "none";
  }

  function toggleSidebar() {
    const shopping_card = document.getElementById('shopping_card');
    if (shopping_card.style.left === '-800px') {
        shopping_card.style.left = '0';
    } else {
        shopping_card.style.left = '-800px';
    }
}

