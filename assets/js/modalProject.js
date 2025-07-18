// Project data with images and videos for each project
  const projectData = {
    project1: {
      title: 'Content Creation Project',
      images: [
        { src: 'assets/image/projects/lego land/logo.jfif', alt: 'Project 1 Image 1' },
        { src: 'assets/image/projects/lego land/poster.jfif', alt: 'Project 1 Image 2' }
      ],
      videos: [
        { src: 'assets/image/projects/lego land/video1.mp4', alt: 'Project 1 Video', type: 'video/mp4' }
      ]
    },
    project3: {
      title: 'Content Creation Project',
      images: [
        { src: 'assets/image/projects/yakuza clan/j.png', alt: 'Project 3 Image 1' },
        { src: 'assets/image/projects/yakuza clan/meeting_HOUR.png', alt: 'Project 3 Image 2' }
      ]
    },
    project4: {
      title: 'Marketing Strategy Project',
      images: [
        { src: 'assets/image/projects/new life fitness/logo_grey.jpeg', alt: 'Project 4 Image 1' },
        { src: 'assets/image/projects/new life fitness/logo_b.jpeg', alt: 'Project 4 Image 2' },
        { src: 'assets/image/projects/new life fitness/t-shirt.jpeg', alt: 'Project 4 Image 3' }
      ]
    },
    project5: {
      title: 'Web & Landing Pages Project',
      images: [
        { src: 'assets/image/projects/CRM FrontEnd Design/1__authentification.png', alt: 'Project 5 Image 1' },
        { src: 'assets/image/projects/CRM FrontEnd Design/2__menu.png', alt: 'Project 5 Image 2' },
        { src: 'assets/image/projects/CRM FrontEnd Design/3__menu.png', alt: 'Project 5 Image 3' },
        { src: 'assets/image/projects/CRM FrontEnd Design/4__popup.png', alt: 'Project 5 Image 4' },
        { src: 'assets/image/projects/CRM FrontEnd Design/5__popup.png', alt: 'Project 5 Image 5' },
        { src: 'assets/image/projects/CRM FrontEnd Design/6__menu.png', alt: 'Project 5 Image 6' }
      ]
    },
    project6: {
      title: 'Web & Landing Pages Project',
      images: [
        { src: 'assets/image/coming_soon.gif', alt: 'Project 6 Image 1' },
        { src: 'assets/image/Logo_W.jpg', alt: 'Project 6 Image 2' }
      ]
    },
    project7: {
      title: 'Social Media Management Project',
      images: [
        { src: 'assets/image/coming_soon.gif', alt: 'Project 7 Image 1' },
        { src: 'assets/image/Logo_W.jpg', alt: 'Project 7 Image 2' }
      ]
    },
    project8: {
      title: 'Social Media Management Project',
      images: [
        { src: 'assets/image/coming_soonB.gif', alt: 'Project 8 Image 1' },
        { src: 'assets/image/Logo_B.jpg', alt: 'Project 8 Image 2' }
      ]
    }
  };

  // Modal elements
  const modal = document.getElementById('projectModal');
  const closeBtn = document.querySelector('.modal .close');
  const modalTitle = document.querySelector('.modal-title');
  const swiperSlides = document.getElementById('swiperSlides');
  let swiper;

  // Initialize Swiper dynamically
  function initializeSwiper() {
    if (swiper) swiper.destroy(true, true); // Destroy existing Swiper instance
    swiper = new Swiper('.mySwiper', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      spaceBetween: 10,
      slidesPerView: 1,
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
  }

  // Open modal for clicked project
  document.querySelectorAll('.modal-pop').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default link behavior
      const projectId = button.getAttribute('data-project-id');
      const project = projectData[projectId];
      
      if (project) {
        // Set modal title
        modalTitle.textContent = project.title;
        
        // Populate Swiper slides with images and videos
        swiperSlides.innerHTML = [
          ...(project.images || []).map(img => 
            `<div class="swiper-slide"><img src="${img.src}" alt="${img.alt}" loading="lazy"></div>`
          ),
          ...(project.videos || []).map(video => 
            `<div class="swiper-slide">
              <video controls muted>
                <source src="${video.src}" type="${video.type}">
                <p>Your browser does not support this video format. Please check the file path: ${video.src}</p>
              </video>
            </div>`
          )
        ].join('');
        
        // Show modal
        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        
        // Initialize Swiper
        initializeSwiper();

        // Add error handling for video loading
        document.querySelectorAll('video source').forEach(source => {
          source.addEventListener('error', () => {
            console.error(`Failed to load video: ${source.src}`);
          });
        });
      }
    });
  });

  // Close modal
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
    // Pause all videos when closing modal
    document.querySelectorAll('video').forEach(video => video.pause());
  });

  // Close modal when clicking outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = 'auto';
      // Pause all videos when closing modal
      document.querySelectorAll('video').forEach(video => video.pause());
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = 'auto';
      // Pause all videos when closing modal
      document.querySelectorAll('video').forEach(video => video.pause());
    }
  });