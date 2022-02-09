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

  const animItems = document.querySelectorAll('._anim-items');

  if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
          animItem.classList.add('_active');
        } else {
          if (!animItem.classList.contains('_anim-no-hide')) {
            animItem.classList.remove('_active');
          }
        }
      }
    }

    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.scrollX || document.documentElement.scrollLeft,
        scrollTop = window.scrollY || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      };
    }

    setTimeout(() => {
      animOnScroll();
    }, 300);
  }
});