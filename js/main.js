$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("load scroll", function () {
    $(".fa-bars").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if ($(window).scrollTop() > 35) {
      $(".header").css({
        background: "#002e5f",
        "box-shadow": "0 .2rem .5rem rgba(0,0,0,.4)",
      });
    } else {
      $(".header").css({ background: "none", "box-shadow": "none" });
    }
  });

  const counters = document.querySelectorAll(".counter");
  const speed = 120;
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const inc = target / speed;
      if (count < target) {
        counter.innerText = count + inc;
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });

  (function ($) {
    "use strict";

    $(".clients-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 } },
    });

    $(".testimonials-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      responsive: {
        0: { items: 1 },
        576: { items: 2 },
        768: { items: 3 },
        992: { items: 4 },
      },
    });
  })(jQuery);

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  $(".accordion-header").click(function () {
    $(".accordion .accordion-body").slideUp(500);
    $(this).next(".accordion-body").slideDown(500);
    $(".accordion .accordion-header span").text("+");
    $(this).children("span").text("-");
  });
});

// edit by ankush raj mahe yam

// counter effect

$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 1200,
  });
});

// counter effects

// const dynamicText = document.querySelector("#home h2 span");
// const words = [
//   "Bring your business to online",
//   "Better solution for online services",
//   "Digital marketing and Advertising",
//   "Increase chances to win election by PAC",
// ];

// let wordIndex = 0;
// let charIndex = 0;
// let isDeleting = false;

// const typeEffect = () => {
//   const currentWord = words[wordIndex];
//   const currentChar = currentWord.substring(0, charIndex);
//   dynamicText.textContent = currentChar;
//   dynamicText.classList.add("stop-blinking");

//   if (!isDeleting && charIndex < currentWord.length) {
//     charIndex++;
//     setTimeout(typeEffect, 200);
//   } else if (isDeleting && charIndex > 0) {
//     charIndex--;
//     setTimeout(typeEffect, 100);
//   } else {
//     isDeleting = !isDeleting;
//     dynamicText.classList.remove("stop-blinking");
//     wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
//     setTimeout(typeEffect, 1200);
//   }
// };

// typeEffect();

/*--=========================typing annimation=============*/
/*
var typed = new Typed("#typing", {
  strings: [
    "",
    "Web Designer",
    "web Developer",
    "Graphic Designer",
    "Stratregist",
  ],
  typeSpeed: 100,
  Backspeed: 60,
  loop: true,
});
*/
