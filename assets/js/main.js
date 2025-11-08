

(function () {
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
    navmenu.addEventListener('click', function (e) {
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
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
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
        detailUrl: "course-details.html?course=ott"
      },
      {
        name: "BPT/B.Voc - BP",
        image: "assets/img/courses/BP.jpg",
        duration: "14 Months",
        qualification: "10 +2",
        detailUrl: "course-details.html?course=bp"
      }
    ],
    "Diploma Courses": [
      {
        name: "Diploma in Medical Lab Technology",
        image: "assets/img/courses/diploma-ML.jpg",
        duration: "1/2 Years",
        qualification: "+2 Science",
        detailUrl: "course-details.html?course=dml"
      },
      {
        name: "Diploma in X-ray and Imaging Technology",
        image: "assets/img/courses/RIT.jpg",
        duration: "1/2 Year",
        qualification: "10 & 12 Science",
        detailUrl: "course-details.html?course=drit"
      },
      {
        name: "Diploma in Operation Theatre",
        image: "assets/img/courses/OTT.jpg",
        duration: "1/2 Years",
        qualification: "+2 Science",
        detailUrl: "course-details.html?course=dot"
      },
      {
        name: "Diploma in Dietics and Applied Nutrition",
        image: "assets/img/courses/diploma-dietician.jpg",
        duration: "1/2 Year",
        qualification: "12 Any Stream",
        detailUrl: "course-details.html?course=dan"
      },

      {
        name: "Diploma in Physiotherapy",
        image: "assets/img/courses/BP.jpg",
        duration: "1/2 Year",
        qualification: "12 Any Stream",
        detailUrl: "course-details.html?course=dpt"
      },
      {
        name: "Diploma in X-Ray Technician",
        image: "assets/img/courses/diploma-xray.jpg",
        duration: "1 Year",
        qualification: "12 Any Stream",
        detailUrl: "course-details.html?course=dxt"
      }
    ],
    "Nursing Courses": [
      {
        name: "Diploma in ANM/GNM courses",
        image: "assets/img/courses/diploma-nurse.jpg",
        duration: "2-3 Years",
        qualification: "10 & +2 Any Stream",
        detailUrl: "course-details.html?course=nc"
      }
    ],
    "Certification Courses": [
      {
        name: "Emergency Medical Technician-Basic",
        image: "/assets/img/courses/emergency-med.jpeg",
        duration: "6 Months",
        qualification: "12th Science",
        detailUrl: "course-details.html?course=emerg"
      },
      {
        name: "General Duty Assistant",
        image: "/assets/img/courses/general-duty.jpeg",
        duration: "6 Months",
        qualification: "12th Science",
        detailUrl: "course-details.html?course=gda"
      },
      {
        name: "Phelobotany Technician",
        image: "/assets/img/courses/phelobotany.jpeg",
        duration: "6 Months",
        qualification: "12th Science",
        detailUrl: "course-details.html?course=pt"
      },
      {
        name: "Emergency Medical Technician Advanced",
        image: "/assets/img/courses/emerg-med.jpeg",
        duration: "6 Months",
        qualification: "12th Science",
        detailUrl: "course-details.html?course=emta"
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
    ott: {
      name: "B.Sc/B.Voc - Operation Theatre Technology (OTT)",
      image: "assets/img/courses/OTT.jpg",
      overview: [
        "Program prepares students to work as skilled Operation Theatre Technologists in hospitals and healthcare settings.",
        "Covers training in surgical procedures, patient care, and handling advanced OT equipment under supervision of doctors and surgeons."
      ],
      scope: [
        "Employment in hospitals, emergency care units, and trauma centers",
        "Opportunities in nursing homes, private clinics, and government health establishments",
        "Scope for higher studies and specialization in surgical or allied health sciences"
      ],
      highlights: [
        "Training in handling surgical instruments and OT management",
        "Knowledge of sterilization, infection control, and patient safety",
        "Exposure to advanced diagnostic and monitoring equipment",
        "Career opportunities with good salary growth in healthcare sector"
      ]
    },
    bp: {
      name: "BPT/B.Voc - Physiotherapy Technology",
      image: "assets/img/courses/bpt.png",
      overview: [
        "Course trains students to work as Physiotherapy Technicians skilled in patient assessment, specimen collection, and clinical support.",
        "Focuses on practical techniques, infection control, biomedical waste management, and professional healthcare practices."
      ],
      scope: [
        "Employment in hospitals, rehabilitation centers, and physiotherapy clinics",
        "Opportunities in private practices, sports and fitness centers, and community health programs",
        "Further studies in physiotherapy and allied health sciences"
      ],
      highlights: [
        "Hands-on training in patient care and clinical support",
        "Learning diagnostic specimen collection and handling",
        "Knowledge of infection control and safety protocols",
        "Career opportunities in both public and private healthcare sectors"
      ]
    },
    dml: {
      name: "Diploma in Medical Laboratory Technology (DMLT)",
      image: "assets/img/courses/diploma-ML.jpg",
      overview: [
        "Program provides in-depth training in pathology, microbiology, haematology, and biochemistry for accurate diagnosis and treatment support.",
        "Students gain hands-on experience in handling advanced laboratory equipment and performing precise diagnostic tests."
      ],
      scope: [
        "Employment in pathology labs, hospitals, and diagnostic centers",
        "Opportunities in research labs, blood banks, and clinical consultancies",
        "Career options as laboratory technicians, technologists, medical writers, and analysts"
      ],
      highlights: [
        "Comprehensive curriculum with practical lab training",
        "Exposure to advanced diagnostic tools and techniques",
        "Internship opportunities in reputed hospitals and labs",
        "High career demand in both private and government healthcare sectors"
      ]
    },
    drit: {
      name: "Diploma/Certificate - Radiology Technician",
      image: "assets/img/courses/RIT.jpg",
      overview: [
        "Course equips students with skills to operate advanced imaging technologies including X-ray, CT Scan, and MRI.",
        "Focuses on diagnostic imaging, patient care, radiation safety, and collaboration with doctors for accurate disease detection."
      ],
      scope: [
        "Employment in hospitals, diagnostic centers, and research labs",
        "Opportunities as CT Scan Technologist, MRI Technician, and Radiographer",
        "Career growth in public institutions, private healthcare, and medical equipment companies"
      ],
      highlights: [
        "14-month program with 2000 hours of theory, practical, and hospital internship",
        "Certification by VIVO/NSDC",
        "Hands-on training with modern radiographic devices",
        "High demand and career opportunities in India and abroad"
      ]
      
    },
    dot: {
      name: "Diploma - Operation Theatre Technology (OTT)",
      image: "assets/img/courses/OTT.jpg",
      overview: [
        "Program trains students to become skilled Operation Theatre Technologists, assisting doctors and surgeons during surgeries and emergency procedures.",
        "Covers OT management, surgical instrument handling, sterilization, infection control, and patient care in critical care settings."
      ],
      scope: [
        "Employment in hospitals, trauma and emergency care units, and ICUs",
        "Opportunities in nursing homes, private clinics, and government healthcare establishments",
        "Scope for career growth as OT Technician, Lab Technician, or Consultant in healthcare institutions"
      ],
      highlights: [
        "Hands-on training in managing OT equipment like ventilators, monitors, and defibrillators",
        "Focus on sterilization, infection control, and patient safety",
        "Exposure to various surgical specialties such as orthopaedics, neurosurgery, and gynaecology",
        "High demand for OT Technologists in both India and abroad"
      ]
    },
    dan: {
      name: "Diploma - Dietics and Applied Nutrition",
      image: "assets/img/courses/diploma-dietician.jpg",
      overview: [
        "Course provides essential knowledge of nutrition science and public health, enabling students to guide individuals and communities towards healthier lifestyles.",
        "Focuses on balanced diets, food safety, and the importance of proper nutrition in preventing lifestyle diseases."
      ],
      scope: [
        "Work as diet technicians, nutrition managers, or catering supervisors in healthcare and hospitality sectors",
        "Opportunities in NGOs, food safety departments, and wellness centers",
        "Possibility to start self-employed diet consultancy or online nutrition business"
      ],
      highlights: [
        "1-year diploma (6 months theory + 6 months internship) with practical exposure",
        "Eligibility: 12th pass from any stream (Arts, Commerce, or Science)",
        "Affiliated diploma certification from Vishkarma University for self-employment",
        "Focus on real-world nutrition planning and public health awareness"
      ]
    },
    dpt: {
      name: "Diploma/B.Voc - Physiotherapy Technician",
      image: "assets/img/courses/BP.jpg",
      overview: [
        "Course prepares students to assist in clinical settings by collecting patient specimens, monitoring vital signs, and supporting laboratory procedures.",
        "Focuses on diagnostic techniques, biomedical waste management, infection control, and professional patient care practices."
      ],
      scope: [
        "Employment in hospitals, rehabilitation centers, and physiotherapy clinics",
        "Opportunities in diagnostic labs, blood banks, and physician offices",
        "Career growth in community healthcare, private practice, and allied medical services"
      ],
      highlights: [
        "Training in specimen collection and vital sign monitoring",
        "Exposure to clinical lab techniques and patient interaction",
        "Knowledge of infection control, safety, and first aid",
        "Balanced curriculum with both theory and hands-on practical learning"
      ]
    },
    dxt: {
      name: "Diploma - X-Ray Technician",
      image: "assets/img/courses/diploma-xray.jpg",
      overview: [
        "Course trains students to operate X-Ray machines and produce diagnostic images of internal organs for disease and injury detection.",
        "Focuses on radiographic imaging, patient care, safety measures, and hands-on training in hospital and lab environments."
      ],
      scope: [
        "Employment in hospitals, diagnostic centers, and radiology labs",
        "Opportunities in emergency care, mobile X-Ray units, and private clinics",
        "Pathways to specialize further in CT, MRI, and mammography with higher studies"
      ],
      highlights: [
        "1-year certificate course with practical exposure",
        "Eligibility: Minimum 10th pass from a recognized institution",
        "Covers radiological physics, patient care, and emergency management",
        "Hands-on training in both routine and special radiographic procedures"
      ]
    },
    nc: {
      name: "Diploma in Nursing",
      image: "assets/img/courses/diploma-nurse.jpg",
      overview: [
        "2–3 year diploma program covering fundamentals of nursing, patient care, and healthcare services.",
        "Blends classroom study with hospital-based training and a mandatory 6-month internship.",
        "Covers GNM and ANM syllabus to provide comprehensive knowledge of nursing practice."
      ],
      scope: [
        "Hospitals, nursing homes, and trauma centers",
        "NGOs, community health programs, and public health sectors",
        "Medical writing, healthcare administration, and training institutes"
      ],
      highlights: [
        "Eligibility: 10+2 with minimum 50% marks (any relevant stream)",
        "Course Duration: 2–3 years with semester-wise exams",
        "Fee: INR 85,000",
        "Job Roles: Nursing In-charge, Emergency Nurse, Nursing Assistant, Head Nursing Services",
        "High job security, career flexibility, and good salary packages"
      ],
      difference: [
        "2-Year (ANM): Focus on community health, first aid, maternal & child care, handling minor ailments.",
        "3-Year (GNM): In-depth hospital-based training in medical-surgical care, patient management, and specialized nursing."
      ]
    },
    emerg: {
      name: "Emergency Medical Technician (EMT)",
      image: "assets/img/courses/emergency-med.jpeg",
      overview: [
        "Job-oriented healthcare course after 12th, focusing on providing basic emergency care and life support.",
        "Equips students with skills to assess, manage, and stabilize critically ill or injured patients.",
        "EMTs play a vital role in emergency departments, ambulances, and disaster response units."
      ],
      scope: [
        "Hospitals and emergency departments",
        "Ambulance services and trauma centers",
        "Disaster management teams and NGOs",
        "Global demand for skilled EMT professionals"
      ],
      highlights: [
        "Eligibility UG: 10+2 with Physics, Chemistry, Biology (min. 50%)",
        "Eligibility PG: Graduation in a relevant field (min. 55%)",
        "Course Duration: 1–2 years depending on institution",
        "Key Skills: Quick decision making, multitasking, communication, resilience",
        "Job Roles: EMT, Paramedic, Emergency Care Technician, Ambulance Assistant"
      ],
      objectives: [
        "Perform CPR on adults, children, and infants",
        "Manage airways and provide oxygen therapy",
        "Use Automated External Defibrillator (AED)",
        "Assess and treat medical & trauma emergencies",
        "Safely move and transfer patients"
      ],
      subjects: [
        "Anatomy & Physiology",
        "EMS Systems & Documentation",
        "Airway Management & Oxygen Therapy",
        "Cardio-pulmonary Resuscitation (CPR)",
        "Medical & Trauma Emergencies",
        "Pediatric, Obstetric & Geriatric Emergencies",
        "Shock Management",
        "Environmental & Disaster Emergencies"
      ]
    },
    gda: {
      name: "General Duty Assistant (GDA)",
      image: "assets/img/courses/general-duty.jpeg",
      overview: [
        "Prepares students to provide quality patient care in hospitals, clinics, and nursing homes.",
        "Certified GDAs can work under the supervision of nurses and healthcare professionals.",
        "Focuses on personal care, patient support, and maintaining a safe healthcare environment."
      ],
      scope: [
        "Hospitals and nursing homes",
        "Rehabilitation centers",
        "Home healthcare services",
        "NGOs and community health programs"
      ],
      highlights: [
        "Eligibility: 10th/12th pass (varies by institution)",
        "Course Duration: 6–12 months",
        "Certification: Healthcare Sector Skills Council (HSSC)",
        "Key Skills: Patient care, hygiene, communication, teamwork, safety protocols",
        "Job Roles: General Duty Assistant, Nursing Aide, Patient Care Attendant, Ward Assistant"
      ],
      objectives: [
        "Assist nurses and healthcare staff in patient care",
        "Demonstrate basic personal care and hygiene practices",
        "Maintain infection control and universal safety procedures",
        "Communicate effectively with patients and healthcare teams",
        "Follow ethical and professional standards in healthcare"
      ],
      subjects: [
        "Basics of Anatomy & Physiology",
        "Personal Hygiene & Grooming",
        "Hospital Bed Making & Patient Transport",
        "Infection Control & Safety Procedures",
        "Bio-Medical Waste Management",
        "Admission & Discharge Process",
        "Patient Observation & Reporting"
      ]
    },
    pt: {
      name: "Phlebotomy Technician",
      image: "assets/img/courses/phelobotany.jpeg",
      overview: [
        "Phlebotomy Technicians play a vital role in clinical laboratories by collecting blood and other specimens from patients.",
        "With the advancement of diagnostic technology and automated instruments, demand for skilled Phlebotomy Technicians is growing rapidly.",
        "They work in hospitals, diagnostic labs, blood banks, and physician offices."
      ],
      scope: [
        "Hospitals and clinics",
        "Diagnostic laboratories",
        "Blood banks and transfusion centers",
        "Independent laboratories",
        "Physician offices"
      ],
      highlights: [
        "Eligibility: 10th/12th pass (varies by institution)",
        "Course Duration: 6–12 months",
        "Certification: Recognized healthcare skill councils/institutes",
        "Key Skills: Venipuncture, sample collection, infection control, patient handling",
        "Job Roles: Phlebotomy Technician, Lab Assistant, Blood Collection Technician"
      ]
    },
    emta: {
      name: "Emergency Medical Technician – Advanced",
      image: "/assets/img/courses/emerg-med.jpeg",
      overview: [
        "The EMT-Advanced program trains healthcare professionals in advanced pre-hospital and emergency care.",
        "Students learn advanced airway management, trauma and medical interventions, pharmacology, and basic cardiology.",
        "Graduates are equipped to provide advanced patient care at the scene and during transport."
      ],
      scope: [
        "Hospitals and trauma centers",
        "Ambulance and emergency response services",
        "Disaster management teams",
        "Air medical and inter-facility transfer units",
        "Government and private healthcare organizations"
      ],
      highlights: [
        "Eligibility: 12th pass (Science preferred) or equivalent",
        "Course Duration: 12–18 months",
        "Certification: Recognized healthcare skill councils/institutes",
        "Key Skills: Advanced patient assessment, airway & trauma management, pharmacology, critical care transport",
        "Job Roles: Advanced EMT, Emergency Care Technician, Trauma Care Assistant"
      ]
    },
    
    
    
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

  document.addEventListener("DOMContentLoaded", function () {
    renderCoursesByCategory();
    if (window.location.pathname.includes('course-details.html')) {
      renderCourseDetails();
    }
  });

})();