/**
* Template Name: iPortfolio - v3.2.0
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let li = document.querySelector('#portfolio-flters').children; console.log(li);
      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        let portfolioFilters = select('#portfolio-flters li', true); 
        console.log(portfolioFilters);
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });console.log(this.getAttribute('data-filter'));
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()

function btn(n) {
  portafolio();
  setTimeout(function(){
    console.log('btnLi Activado');
    btnLi(n);
  },1000);
}

function btnLi(n){
  let li = document.querySelectorAll('#portfolio-flters>li');
  let portfolioContainer = document.querySelector('.portfolio-container');
  if (portfolioContainer) {
    let portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: '.portfolio-item'
    });
    //console.log(n);console.log(li);
    let fil=[];
    for(var i=0; i<li.length; i++){fil[i] = li[i];}        
    console.log(fil);
    fil.forEach(function(el) {
      el.classList.remove('filter-active');
    });
    fil[n].classList.add('filter-active');

    portfolioIsotope.arrange({
      filter: fil[n].getAttribute('data-filter')
    });console.log(fil[n].getAttribute('data-filter'));
    portfolioIsotope.on('arrangeComplete', function() {
      AOS.refresh()
    });
  }
}

async function portafolio(){
  const url = 'https://portafolio1.webcindario.com/api/v1/?tabla=portafolio';
  const res = await fetch(url);
  const data = await res.json();
  data.reverse();//console.log(data);
  const unicos = [];
  let porta = document.querySelector('.portfolio-container');
  let cat = document.querySelector('#portfolio-flters');
  let div = '';
  data.forEach(item => {
    const {ID, nombre, cate, cover, imagen1, descripcion, url_page, visible} = item;
    div += `
    <div class="col-lg-4 col-md-6 portfolio-item filter-${cate}">
      <div class="portfolio-wrap">
        <img src="https://portafolio1.webcindario.com/modulos/portafolio/fotos/${cover}" class="img-fluid" alt="">
        <div class="portfolio-links">
          <a target="_blank" href="https://portafolio1.webcindario.com/modulos/portafolio/fotos/${cover}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="${nombre}"><i class="bx bx-plus"></i></a>
          <a target="_blank" href="https://portafolio1.webcindario.com/index.php?mod=portafolio&ext=item&id=${ID}" title="Más Detalles"><i class="bx bx-link"></i></a>
        </div>
      </div>
    </div>`;
    if (!unicos.includes(cate)) {
      unicos.push(cate);
    }
  });//console.log(unicos.reverse());
  porta.innerHTML = div;
  unicos.reverse();
  let li = '<li onclick="btn(0)" data-filter="*" class="filter-active">All</li>';
  var n=0;
  for(var i=0;i<unicos.length;i++){n++;
    li += `<li onclick="btn(${n})" data-filter=".filter-${unicos[i]}">${unicos[i]}</li>`
  }
  cat.innerHTML = li;
}