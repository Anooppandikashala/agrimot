
(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  // const preloader = document.querySelector('#preloader');
  // if (preloader) {
  //   window.addEventListener('load', () => {
  //     preloader.remove();
  //   });
  // }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  // function aosInit() {
  //   AOS.init({
  //     // duration: 300,
  //     // easing: 'ease-in-out',
  //     // once: true,
  //     // mirror: false
  //     duration: 800,
  //     easing: 'ease-in-out',
  //     once: true, // Animation happens only once
  //     mirror: false,
  //     anchorPlacement: 'top-bottom',
  //     offset: 100,
  //     disable: false // Enable on all devices
  //   });
  // }
  // window.addEventListener('load', aosInit);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();
  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /*
   * Pricing Toggle
   */

  // const pricingContainers = document.querySelectorAll('.pricing-toggle-container');

  // pricingContainers.forEach(function(container) {
  //   const pricingSwitch = container.querySelector('.pricing-toggle input[type="checkbox"]');
  //   const monthlyText = container.querySelector('.monthly');
  //   const yearlyText = container.querySelector('.yearly');

  //   pricingSwitch.addEventListener('change', function() {
  //     const pricingItems = container.querySelectorAll('.pricing-item');

  //     if (this.checked) {
  //       monthlyText.classList.remove('active');
  //       yearlyText.classList.add('active');
  //       pricingItems.forEach(item => {
  //         item.classList.add('yearly-active');
  //       });
  //     } else {
  //       monthlyText.classList.add('active');
  //       yearlyText.classList.remove('active');
  //       pricingItems.forEach(item => {
  //         item.classList.remove('yearly-active');
  //       });
  //     }
  //   });
  // });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  // document.addEventListener('DOMContentLoaded', function() {
  //   AOS.init({
  //     duration: 800,
  //     easing: 'ease-in-out',
  //     once: true, // Animation happens only once
  //     mirror: false,
  //     anchorPlacement: 'top-bottom',
  //     offset: 100,
  //     disable: false // Enable on all devices
  //   });

  //   // Fallback: If AOS doesn't initialize within 2 seconds, show all content
  //   setTimeout(function() {
  //     if (!document.documentElement.classList.contains('aos-ready')) {
  //       document.querySelectorAll('[data-aos]').forEach(function(el) {
  //         el.style.opacity = '1';
  //         el.style.visibility = 'visible';
  //       });
  //     }
  //   }, 2000);

  //   // Refresh AOS on window resize
  //   let resizeTimer;
  //   window.addEventListener('resize', function() {
  //     clearTimeout(resizeTimer);
  //     resizeTimer = setTimeout(function() {
  //       AOS.refresh();
  //     }, 250);
  //   });
  // });

  
  const products = [
    // ACB (filter-branding)
    { image: "assets/img/portfolio/web-acb-new-bg.webp", title: "ACB", filter: "filter-branding" },

    // MCB / MCCB (filter-mccb)
    { image: "assets/img/portfolio/web-mccb-new-bg.webp", title: "MCCB", filter: "filter-mccb" },
   
    // FN Switch (filter-switches)
    { image: "assets/img/portfolio/web-FN-new-bg.webp", title: "FN Switch Disconnector", filter: "filter-switches" },

    // Changeover / Starters / Controllers (filter-changeover)
    { image: "assets/img/portfolio/web-changeover-new-bg.webp", title: "Onload Changeover Switch", filter: "filter-changeover" },
    
    // Power Contactors (filter-contactors)
    { image: "assets/img/portfolio/web-contactor-new-bg.webp", title: "Power Contactor", filter: "filter-contactors" },

    // DB
    { image: "assets/img/portfolio/web-db-new-bg.webp", title: "Distribution Board", filter: "filter-db" },

    //Capacitor
    { image: "assets/img/portfolio/web-capacitor-new-bg.webp", title: "Capacitor", filter: "filter-capacitor" },

    // Motor Starter
    { image: "assets/img/portfolio/web-motor-starter-new-bg.webp", title: "Motor Starter", filter: "filter-motor-starter" },

    // Industrial Signalling
    { image: "assets/img/portfolio/web-indicator-new-bg.webp", title: "Industrial Signalling", filter: "filter-indicators" },


    //Fuse and Fuse Carrier
    { image: "assets/img/portfolio/web-fuse-NEW-BG.webp", title: "Fuse and Fuse Carrier", filter: "filter-fuse" },

    //Junction Box and Meter Box
    { image: "assets/img/portfolio/web-sintex-new-bg.webp", title: "Junction Box and Meter Box", filter: "filter-boxes" },
  
  ];


  const container = document.getElementById("portfolio-container");

  products.forEach((product, index) => {
    const itemHTML = `
      <div class="col-xl-10 col-lg-10 col-md-12 col-sm-12 portfolio-item isotope-item ${product.filter}">
        <div class="portfolio-card">
          <div class="image-container">
            <img src="${product.image}" class="img-fluid" alt="${product.title}" loading="lazy" >
            <div class="overlay">
              <div class="overlay-content">
                <a href="${product.image}" class="glightbox zoom-link" title="${product.title}">
                  <i class="bi bi-zoom-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="content">
            <h3>${product.title}</h3>
          </div>
        </div>
      </div>
    `;

    container.insertAdjacentHTML("beforeend", itemHTML);
  });


  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'vertical';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    // imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
    //   initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
    //     itemSelector: '.isotope-item',
    //     layoutMode: layout,
    //     filter: filter,
    //     sortBy: sort
    //   });
    // });

    const container = isotopeItem.querySelector('.isotope-container');
    initIsotope = new Isotope(container, {
      itemSelector: '.isotope-item',
      layoutMode: layout,
      filter: filter,
      sortBy: sort,
      transitionDuration: '0.6s'
    });

    // Re-layout after images load
    imagesLoaded(container, function() {
      initIsotope.layout();
    });

    // Add resize event listener
    window.addEventListener('resize', function() {
      initIsotope.layout();
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() 
      {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  document.addEventListener("DOMContentLoaded", function () {
    const inner = document.querySelector(".filters-scroll-area");
    const btnLeft = document.querySelector(".left-arrow");
    const btnRight = document.querySelector(".right-arrow");

    btnLeft.addEventListener("click", () => {
      inner.scrollBy({ left: -400, behavior: "smooth" });
    });

    btnRight.addEventListener("click", () => {
      inner.scrollBy({ left: 400, behavior: "smooth" });
    });
  });

  const clients = [
    { image: "assets/img/clients/cl1.webp", alt: "Client 1" },
    { image: "assets/img/clients/cl2.webp", alt: "Client 2" },
    { image: "assets/img/clients/cl3.webp", alt: "Client 3" },
    { image: "assets/img/clients/cl4.webp", alt: "Client 4" },
    { image: "assets/img/clients/cl5.webp", alt: "Client 5" },
    { image: "assets/img/clients/cl6.webp", alt: "Client 6" },
    // { image: "assets/img/clients/cl1.jpg", alt: "Client 1" },
    // { image: "assets/img/clients/cl2.png", alt: "Client 2" },
    // { image: "assets/img/clients/cl3.png", alt: "Client 3" },
  ];

  const clientList = document.getElementById("clientList");

  function renderClients(filter = "") {
    // const filteredClients = clients.filter(c =>
    //   c.name.toLowerCase().includes(filter.toLowerCase())
    // );

    clientList.innerHTML = clients.map((c, index) => `
      <div class="col-xl-2 col-lg-3 col-md-4 col-6" data-aos="zoom-in" data-aos-delay="${100 + index * 50}">
        <div class="client-item">
          <img src="${c.image}" class="img-fluid" alt="${c.alt}" loading="lazy">
        </div>
      </div>
    `).join("");
  }
  renderClients();

  document.addEventListener('DOMContentLoaded', function() {
    // Remove preloader immediately after DOM is ready
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      preloader.remove();
    }
    
    // Defer heavy animations
    setTimeout(() => {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        anchorPlacement: 'top-bottom',
        offset: 100,
        disable: false
      });
    }, 100);
  });

  document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.dataset.target);
      if (target) {
        if (target.style.display === 'none' || target.style.display === '') {
          target.style.display = 'block';
          this.textContent = 'Show Less';
        } else {
          target.style.display = 'none';
          this.textContent = 'Read More';
        }
      }
    });
  });

  // footer year
  document.getElementById("current-year").textContent = new Date().getFullYear();

  // window.addEventListener("load", () => {
  //   // Initialize Isotope again
  //   const iso = new Isotope('.isotope-container', {
  //     itemSelector: '.isotope-item',
  //     layoutMode: 'fitRows'
  //   });

  //   // Initialize Glightbox
  //   const lightbox = GLightbox({ selector: '.glightbox' });
  // });

})();