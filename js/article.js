$(document).ready(function () {
  var headerMenu = $(".header-menu");
  headerMenu.on("click", function () {
    $(".navbar-dropdown").toggleClass("navbar-dropdown--visible");
    $(".icon-menu").toggleClass("menu-open");
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
    loop: true,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: ".slideshow-slider__button--next",
      prevEl: ".slideshow-slider__button--prev",
    },
  });

  $(".forms").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        required: "This field must not be empty",
        minlength: "At least 2 characters required",
      },
    });
  });

  const loadComments = document.querySelector(".comments__button-load");
  let loadCommentsText = document.querySelector(".comments__button-load span");
  loadComments.addEventListener("click", function () {
    document.querySelector(".comments__cards--hidden").classList.toggle("comments__cards--visible");
    // loadComments.style.display = "none";
    if (loadCommentsText.innerText.toLowerCase() === 'show less') {
      loadCommentsText.innerText = 'Load more';
    } else {
      loadCommentsText.innerText = 'Show less';
    }
  });
});