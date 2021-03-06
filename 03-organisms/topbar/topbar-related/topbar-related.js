if (document.querySelector('#js-topbar-related')) {
  window.addEventListener(
    'scroll',
    () => {
      fixedRelatedTopbar('js-topbar-related', 'sticky', '.js-header', 25);
    },
    false,
  );
}

function fixedRelatedTopbar(elementID, className, headerClass, offset) {
  // Get the current scroll position
  const scroll = window.pageYOffset !== undefined ? window.pageYOffset
    : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  const headerHeight = document.querySelector(headerClass).offsetHeight;
  const el = document.getElementById(elementID);

  if (scroll >= headerHeight + offset) {
    el.classList.add(className);
  }
  if (scroll < headerHeight + offset) {
    el.classList.remove(className);
  }
}
