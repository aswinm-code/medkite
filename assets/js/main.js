/**
* Template Name: Mentor
* Template URL: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

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
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

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
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

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
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

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
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  // Sample course data
  const courseData = {
    "Bachelor Courses": [
      {
        name: "B.Sc/B.Voc - MLT",
        image: "/assets/img/courses/MLT.jpg",
        duration: "12 Months",
        qualification: "10 +2",
        detailUrl: "course-details.html?course=mlt"
      },
      {
        name: "B.Sc/B.Voc - RIT",
        image: "assets/img/courses/RIT.jpg",
        duration: "14 Months",
        qualification: "10 +2",
        detailUrl: "course-details.html?course=rit"
      },
      {
        name: "B.Sc/B.Voc - OTT",
        image: "assets/img/courses/OTT.jpg",
        duration: "2 Years",
        qualification: "+2",
        detailUrl: "course-details.html"
      },
      {
        name: "BPT/B.Voc - BP",
        image: "assets/img/courses/BP.jpg",
        duration: "14 Months",
        qualification: "10 +2",
        detailUrl: "course-details.html"
      }
    ],
    "Diploma Courses": [
      {
        name: "Diploma in Medical Lab Technology",
        image: "assets/img/courses/diploma-ML.jpg",
        duration: "1/2 Years",
        qualification: "+2 Science",
        detailUrl: "course-details.html"
      },
      {
        name: "Diploma in X-ray and Imaging Technology",
        image: "assets/img/courses/RIT.jpg",
        duration: "1/2 Year",
        qualification: "10 & 12 Science",
        detailUrl: "course-details.html"
      },
      {
        name: "Diploma in Operation Theatre",
        image: "assets/img/courses/OTT.jpg",
        duration: "1/2 Years",
        qualification: "+2 Science",
        detailUrl: "course-details.html"
      },
      {
        name: "Diploma in Dietics and Applied Nutrition",
        image: "assets/img/courses/diploma-dietician.jpg",
        duration: "1/2 Year",
        qualification: "12 Any Stream",
        detailUrl: "course-details.html"
      },

      {
        name: "Diploma in Physiotherapy",
        image: "assets/img/courses/BP.jpg",
        duration: "1/2 Year",
        qualification: "12 Any Stream",
        detailUrl: "course-details.html"
      },
      {
        name: "Diploma in X-Ray Technician",
        image: "assets/img/courses/diploma-xray.jpg",
        duration: "1 Year",
        qualification: "12 Any Stream",
        detailUrl: "course-details.html"
      }
    ],
    "Nursing Courses": [
      {
        name: "Diploma in ANM/GNM courses",
        image: "assets/img/courses/diploma-nurse.jpg",
        duration: "2-3 Years",
        qualification: "10 & +2 Any Stream",
        detailUrl: "course-details.html"
      }
    ],
    "Certification Courses": [
      {
        name: "Emergency Medical Technician-Basic",
        image: "/assets/img/courses/emergency-med.jpeg",
        duration: "6 Months",
        qualification: "12th Science",
        detailUrl: "course-details.html"
      },
      {
        name: "General Duty Assistant",
        image: "/assets/img/courses/general-duty.jpeg",
        duration: "6 Months",
        qualification: "12th Science",
        detailUrl: "course-details.html"
      },
      {
        name: "Phelobotany Technician",
        image: "/assets/img/courses/phelobotany.jpeg",
        duration: "6 Months",
        qualification: "12th Science",
        detailUrl: "course-details.html"
      },
      {
        name: "Emergency Medical Technician Advanced",
        image: "/assets/img/courses/emerg-med.jpeg",
        duration: "6 Months",
        qualification: "12th Science",
        detailUrl: "course-details.html"
      }
    ]
  };

  const courseDetailsData = {
    mlt: {
      name: "B.Sc/B.Voc - MLT",
      image: "assets/img/courses/MLT.jpg",
      overview: [
        "This course provides comprehensive training in medical laboratory technology, equipping students with the skills required for modern healthcare diagnostics.",
        "Graduates will be prepared for a variety of roles in hospitals, clinics, and research labs. The curriculum blends theoretical knowledge with practical experience, ensuring students are ready to meet industry standards and excel in their careers."
      ],
      scope: [
        "Employment in hospitals, diagnostic centers, and research labs",
        "Opportunities in pathology, microbiology, and biochemistry labs",
        "Further studies and specialization in allied health sciences"
      ],
      highlights: [
        "Hands-on laboratory training",
        "Experienced faculty and industry experts",
        "Internship opportunities in leading hospitals",
        "Placement assistance after completion"
      ]
    },
    rit: {
      name: "B.Sc/B.Voc - RIT",
      image: "assets/img/courses/RIT.jpg",
      overview: [
        "course provides comprehensive training in medical laboratory technology, equipping students with the skills required for modern healthcare diagnostics.",
        "Graduates will be prepared for a variety of roles in hospitals, clinics, and research labs. The curriculum blends theoretical knowledge with practical experience, ensuring students are ready to meet industry standards and excel in their careers."
      ],
      scope: [
        "Employment in hospitals, diagnostic centers, and research labs",
        "Opportunities in pathology, microbiology, and biochemistry labs",
        "Further studies and specialization in allied health sciences"
      ],
      highlights: [
        "Hands-on laboratory training",
        "Experienced faculty and industry experts",
        "Internship opportunities in leading hospitals",
        "Placement assistance after completion"
      ]
    },
    // Add other courses here with their slug as key
    // Example:
    // ott: { ... }
    // bp: { ... }
  };

  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  function renderCoursesByCategory() {
    const container = document.getElementById('course-categories');
    if (!container) return;
    const category = getQueryParam('category');
    container.innerHTML = '';
    if (category && courseData[category]) {
      container.innerHTML += `
        <div class="section-title text-center mb-5" data-aos="fade-up">
          <h2>${category}</h2>
        </div>
        <div class="row g-4 mb-5">
          ${courseData[category].map(course => `
            <div class="col-md-6 col-lg-4">
              <div class="course-tile border-0 h-100" data-aos="fade-right">
                <img src="${course.image}" alt="${course.name}">
                <div class="tile-body d-flex flex-column">
                  <h5 class="tile-title">
                    <a href="${course.detailUrl}" class="text-decoration-none text-dark">${course.name}</a>
                  </h5>
                  <div class="mb-3 text-muted small d-flex flex-wrap align-items-center justify-content-between">
                    <div class="me-4 d-flex align-items-center">
                      <i class="bi bi-clock me-1"></i>
                      <span>${course.duration}</span>
                    </div>
                    <div class="d-flex align-items-center ms-auto">
                      <i class="bi bi-mortarboard me-1"></i>
                      <span>${course.qualification}</span>
                    </div>
                  </div>
                  <div class="course-rating mb-2">
                    <span class="star text-warning">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star"></i>
                    </span>
                  </div>
                  <div class="mt-auto">
                    <a href="${course.detailUrl}" class="cssbuttons-io d-inline-block" style="margin-top:0.5rem;">
                      <span>
                        Enroll Now
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="alert alert-info mt-5">
          Please select a course category from the navigation menu.
        </div>
      `;
    }
  }

  function renderCourseDetails() {
    const courseSlug = getQueryParam('course');
    const course = courseDetailsData[courseSlug];
    if (!course) return;

    // Page Title
    const pageTitle = document.querySelector('.page-title h1');
    if (pageTitle) pageTitle.textContent = course.name;

    // Overview, scope, highlights, image
    const detailsContainer = document.querySelector('.course-details-single');
    if (detailsContainer) {
      detailsContainer.innerHTML = `
        <img src="${course.image}" alt="${course.name}" class="img-fluid rounded-4 shadow-sm mb-4 w-100" style="object-fit:cover; max-height:320px;">
        <h4 class="mb-3">Course Overview</h4>
        ${course.overview.map(p => `<p>${p}</p>`).join('')}
        <h4 class="mt-4 mb-2">Scope of the Course</h4>
        <ul class="mb-4">
          ${course.scope.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <h4 class="mb-2">Course Highlights</h4>
        <ul class="mb-4">
          ${course.highlights.map(item => `<li>${item}</li>`).join('')}
        </ul>
      `;
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    renderCoursesByCategory();
    if (window.location.pathname.includes('course-details.html')) {
      renderCourseDetails();
    }
  });

})();