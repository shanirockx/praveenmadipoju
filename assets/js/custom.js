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

var missionSwiper = new Swiper(".mission-swiper", {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 2.5,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    type: "custom",
  },
  breakpoints: {
    1399: {
      spaceBetween: 200,
    },
    1199: {
      spaceBetween: 100,
    },
  },
  navigation: {
    nextEl: ".mission-swiper .swiper-button-next",
    prevEl: ".mission-swiper .swiper-button-prev",
  },
});

var homeProgramSwiper = new Swiper(".home-program-swiper", {
  loop: true,
  slidesPerView: 1.95,
  spaceBetween: 20,
  centeredSlides: true,
  roundLengths: true,
  navigation: {
    nextEl: ".home-program-swiper .swiper-button-prev",
    prevEl: ".home-program-swiper .swiper-button-next",
  },
  breakpoints: {
    1400: {
      spaceBetween: 55,
      slidesPerView: 3.95,
    },
    1200: {
      spaceBetween: 30,
      slidesPerView: 3.95,
    },
    1199: {
      spaceBetween: 30,
      slidesPerView: 2.95,
    },
  },
});

var clientSwiper = new Swiper(".client-swiper", {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      return current + " / " + total;
    },
  },
  navigation: {
    nextEl: ".client-swiper .swiper-button-next",
    prevEl: ".client-swiper .swiper-button-prev",
  },
});

var coachingSwiper = new Swiper(".event-coaching-swiper", {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    nextEl: ".event-coaching-swiper .swiper-button-next",
    prevEl: ".event-coaching-swiper .swiper-button-prev",
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

function initMegaMenuObserver() {
  if (window.innerWidth > 1199) {
    const targetNode = document.getElementById("megaMenu");
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          if (targetNode.classList.contains("show")) {
            $("header").addClass("show-mega-menu");
          } else {
            $("header").removeClass("show-mega-menu");
          }
        }
      }
    });

    const config = { attributes: true };
    observer.observe(targetNode, config);
  }
}
window.addEventListener("resize", initMegaMenuObserver);
initMegaMenuObserver();

const hoverableLists = document.querySelectorAll(".hoverable-list");
hoverableLists.forEach((list) => {
  const imgContainerId = list.getAttribute("data-img-container");
  const imgElement = document.getElementById(imgContainerId);
  list.addEventListener("mouseover", (event) => {
    if (event.target.tagName === "LI") {
      const newImgSrc = event.target.getAttribute("data-img-target");
      if (imgElement) {
        imgElement.src = newImgSrc;
      }
      list
        .querySelectorAll("li")
        .forEach((li) => li.classList.remove("active"));
      event.target.classList.add("active");
    }
  });
});

document.querySelectorAll(".list-itens").forEach((item) => {
  item.addEventListener("mouseover", function () {
    const newImage = this.getAttribute("data-image");
    document.getElementById("megaMenuImage").src = newImage;
  });

  item.addEventListener("mouseout", function () {
    document.getElementById("megaMenuImage").src =
      "assets/img/program-trainee.png";
  });
});
//header toggle
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("toggle-menu").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("mobile-menu");
  });
});
