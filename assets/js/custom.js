var programSwiper = new Swiper(".program-swiper", {
  effect: "coverflow",
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 100,
  navigation: {
    nextEl: ".program-swiper .swiper-button-prev",
    prevEl: ".program-swiper .swiper-button-next",
  },
  coverflowEffect: {
    rotate: 0,
    depth: 150,
    modifier: 1.5,
    slideShadows: false,
  },
  breakpoints: {
    1325: {
      spaceBetween: 0,
    },
  },
});

var membersSwiper = new Swiper(".members-swiper", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  breakpoints: {
    991: {
      direction: "vertical",
    },
  },
});

$(function () {
  $("#tabcontainer .tabs").hide().eq(0).show();
  $("#tabcontainer-2 .tabs").hide().eq(0).show();
  $("#tabs li").eq(0).addClass("active");

  $("#tabs li").click(function () {
    let num = $("#tabs li").index(this);

    $("#tabcontainer .tabs").hide().eq(num).show();
    $("#tabcontainer-2 .tabs").hide().eq(num).show();

    $("#tabs li").removeClass("active");
    $(this).addClass("active");
  });
});

const targetNode = document.getElementById('megaMenu');
const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
      if (targetNode.classList.contains('show')) {
        $('header').addClass('show-mega-menu');
      } else {
        $('header').removeClass('show-mega-menu');
      }
    }
  }
});
const config = { attributes: true }; 
observer.observe(targetNode, config);
