
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
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

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
    // MCB / MCCB (filter-mccb)
    { image: "assets/img/portfolio/product1.png", title: "MCB With K Curve", filter: "filter-mccb" },
    // { image: "assets/img/portfolio/product6.png", title: "MCCB - DY125U", filter: "filter-mccb" },
    // { image: "assets/img/portfolio/product22.png", title: "RCCB & RCBO", filter: "filter-mccb" },

    // ACB (filter-branding)
    { image: "assets/img/portfolio/product24.png", title: "ENERSYS", filter: "filter-branding" },
    // { image: "assets/img/portfolio/product17.png", title: "S-Line BUSBAR", filter: "filter-branding" },
    // { image: "assets/img/portfolio/product18.png", title: "LTXL CAPACITOR", filter: "filter-branding" },

    // FN Switch (filter-switches)
    { image: "assets/img/portfolio/product25.png", title: "Breaker Control Switches", filter: "filter-switches" },

    // Changeover / Starters / Controllers (filter-changeover)
    { image: "assets/img/portfolio/product2.png", title: "MK.i.DOL STARTER", filter: "filter-changeover" },
    // { image: "assets/img/portfolio/product7.png", title: "MD STARTER+", filter: "filter-changeover" },
    // { image: "assets/img/portfolio/product8.png", title: "MU-GS SMART CONTROLLER", filter: "filter-changeover" },
    // { image: "assets/img/portfolio/product10.png", title: "Single Phase ACCL", filter: "filter-changeover" },
    // { image: "assets/img/portfolio/product13.png", title: "iMMR Motor Relay", filter: "filter-changeover" },
    // { image: "assets/img/portfolio/product14.png", title: "SMART CONTROLLER", filter: "filter-changeover" },
    // { image: "assets/img/portfolio/product15.png", title: "Single Phase Controller", filter: "filter-changeover" },
    // { image: "assets/img/portfolio/product21.png", title: "Three Phase ACCL", filter: "filter-changeover" },
    // { image: "assets/img/portfolio/product11.png", title: "Water Controller WLC SzLC", filter: "filter-changeover" },
    // { image: "assets/img/portfolio/product9.png", title: "Px300 Solar Drive Controller", filter: "filter-changeover" },
    // { image: "assets/img/portfolio/product4.png", title: "M-POWER++", filter: "filter-changeover" },
    // { image: "assets/img/portfolio/product5.png", title: "M-POWER Pro", filter: "filter-changeover" },
    // { image: "assets/img/portfolio/product27.png", title: "Voltage Monitoring Relay", filter: "filter-changeover" },
    // { image: "assets/img/portfolio/product26.png", title: "Earth Leakage Relay", filter: "filter-changeover" },

    // Power Contactors (filter-contactors)
    { image: "assets/img/portfolio/product3.png", title: "MK1 & MK2 Contactors", filter: "filter-contactors" },
    // { image: "assets/img/portfolio/product12.png", title: "Motor Protection Relays", filter: "filter-contactors" },
    // { image: "assets/img/portfolio/product20.png", title: "numrAL Relays", filter: "filter-contactors" },

    // Indicators (filter-indicators)
    { image: "assets/img/portfolio/product16.png", title: "Industrial Signalling Products", filter: "filter-indicators" },
    // { image: "assets/img/portfolio/product28.png", title: "Metal Push Buttons", filter: "filter-indicators" },
    // { image: "assets/img/portfolio/product19.png", title: "Monitors", filter: "filter-indicators" },
  ];


  const container = document.getElementById("portfolio-container");

  products.forEach((product, index) => {
    const itemHTML = `
      <div class="col-lg-8 col-md-8 portfolio-item isotope-item ${product.filter}">
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

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
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

  const clients = [
    { image: "assets/img/clients/cl1.jpg", alt: "Client 1" },
    { image: "assets/img/clients/cl2.png", alt: "Client 2" },
    { image: "assets/img/clients/cl3.png", alt: "Client 3" },
    { image: "assets/img/clients/cl4.png", alt: "Client 4" },
    { image: "assets/img/clients/cl5.png", alt: "Client 5" },
    { image: "assets/img/clients/cl6.png", alt: "Client 6" },
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
          <img src="${c.image}" class="img-fluid" alt="${c.alt}">
        </div>
      </div>
    `).join("");
  }
  renderClients();

  const services = [
      {
        title: "Distribution Boxes",
        image: "assets/img/products/db.png",
        description: "High-quality distribution boxes for residential, commercial, and industrial applications. Available in various sizes and configurations.",
        features: [
          "Metal & Plastic Enclosures",
          "IP Rated Protection",
          "Custom Configurations"
        ]
      },
      {
        title: "MCBs & Protection Devices",
        image: "assets/img/products/mcb.png",
        description: "Complete range of miniature circuit breakers, RCCBs, MCCBs, and surge protection devices from leading brands.",
        features: [
          "Single & Three Phase MCBs",
          "Earth Leakage Protection",
          "Surge Arresters"
        ]
      },
      {
        title: "Electrical Panels",
        image: "assets/img/products/panels.png",
        description: "Custom-designed electrical panels and control systems for various power distribution requirements.",
        features: [
          "LT & HT Panels",
          "Control Panels",
          "MCC & PCC Panels"
        ]
      }
    ];

    const serviceList = document.getElementById("serviceList");
    //const serviceFilter = document.getElementById("serviceFilter");

    function renderServices(filter = "") {
      // const filtered = services.filter(s =>
      //   s.title.toLowerCase().includes(filter.toLowerCase())
      // );

      serviceList.innerHTML = services.map(s => `
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="250">
          <div class="service-item">
            <div class="service-image">
              <img src="${s.image}" alt="${s.title}" class="img-fluid" 
                style="width: 100%; height: 200px; object-fit: contain; border-radius: 8px 8px 0 0;">
            </div>
            <div class="service-content" style="padding: 20px;">
              <h3>${s.title}</h3>
              <p>${s.description}</p>
              <ul class="feature-list list-unstyled mb-4">
                ${s.features.map(f => `<li><i class="bi bi-check-circle"></i> ${f}</li>`).join("")}
              </ul>
            </div>
          </div>
        </div>
      `).join("");
    }

    // serviceFilter.addEventListener("input", (e) => {
    //   renderServices(e.target.value);
    // });

    renderServices();


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