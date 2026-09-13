/**
 * Straight Stream Labs - Client Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation menu toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const siteNav = document.querySelector('.site-nav');
  
  if (mobileToggle && siteNav) {
    mobileToggle.addEventListener('click', () => {
      siteNav.classList.toggle('mobile-nav-open');
      const isExpanded = siteNav.classList.contains('mobile-nav-open');
      mobileToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (siteNav.classList.contains('mobile-nav-open') && !siteNav.contains(e.target)) {
        siteNav.classList.remove('mobile-nav-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu on link click
    siteNav.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('mobile-nav-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Dynamic copyright year update
  const yearEls = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  yearEls.forEach(el => {
    el.textContent = currentYear;
  });
});
