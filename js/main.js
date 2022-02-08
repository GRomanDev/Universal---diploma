$(document).ready(function () {
  const menuLinks = document.querySelectorAll('.navbar-menu__link');
  var headerMenu = $(".header-menu");
  headerMenu.on("click", function () {
    $(".navbar-dropdown").toggleClass("navbar-dropdown--visible");
    $(".icon-menu").toggleClass("menu-open");
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && document.querySelector('.navbar-dropdown').classList.contains('navbar-dropdown--visible')) {
      document.querySelector('.navbar-dropdown').classList.remove('navbar-dropdown--visible');
      document.querySelector('.icon-menu').classList.remove('menu-open');
    }
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (e.target === link && document.querySelector('.navbar-dropdown').classList.contains('navbar-dropdown--visible')) {
        document.querySelector('.navbar-dropdown').classList.remove('navbar-dropdown--visible');
        document.querySelector('.icon-menu').classList.remove('menu-open');
      }
    });
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
});