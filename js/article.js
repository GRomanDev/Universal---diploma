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

  const animItems = document.querySelectorAll('._anim-items');

  if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / 40;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / 40;
        }

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
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
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
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