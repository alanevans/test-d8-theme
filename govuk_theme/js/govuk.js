function toggleMobileMenu() {
  if (!jQuery("#mobile-menu").html()) {
    let content = jQuery(".govuk-header__navigation").parent(".app-navigation").html();
    let html = "<div id='mobile-menu-content'>" + content + "</div>";
    jQuery("#mobile-menu").html(html);
  }
  if (!jQuery("#mobile-menu-content").is(":visible")) {
    jQuery("#mobile-menu-content").slideDown();
  }
  else {
    jQuery("#mobile-menu-content").slideUp();
  }
}
