$(document).ready(function () {
  var headerMenu = $(".header-menu");
  headerMenu.on("click", function () {
    $(".navbar-dropdown").toggleClass("navbar-dropdown--visible");
  });
  $(".fancybox").fancybox();

  const tab = $(".tab");
  tab.on("click", function () {
    tab.removeClass("tabs-aside__item--active");
    $(this).toggleClass("tabs-aside__item--active");
    let activeTabContent = $(this).attr("data-target");
    $(".tabs-content").removeClass("tabs-content--visible");
    $(activeTabContent).toggleClass("tabs-content--visible");
  });

  var bookmark = $(".bookmarks-main__icon");
  bookmark.on("click", function () {
    $(this).toggleClass("bookmarks-main__icon--active");
  });

  var prefootSlider = new Swiper(".prefoot-slider", {
    // Optional parameters
    loop: true,
    effect: "fade",
    speed: 2100,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
      el: ".prefoot-slider__pagination",
    },
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

  var slideshowSlider = new Swiper(".swiper-container", {
    // Optional parameters
    loop: true,
    // effect: "fade",
    navigation: {
      nextEl: ".slideshow-slider__button--next",
      prevEl: ".slideshow-slider__button--prev",
    },
  });
});
