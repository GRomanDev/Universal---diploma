$(document).ready(function () {
  var headerMenu = $(".header-menu");
  headerMenu.on("click", function () {
    $(".navbar-dropdown").toggleClass("navbar-dropdown--visible");
  });

  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
      },
    });
  });

  var slideshowSlider = new Swiper(".slideshow-slider", {
    // Optional parameters
    loop: true,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: ".slideshow-slider__button--next",
      prevEl: ".slideshow-slider__button--prev",
    },
  });
});
