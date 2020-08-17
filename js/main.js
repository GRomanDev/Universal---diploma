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
});
