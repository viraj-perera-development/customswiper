/* SWIPER CORSI ACADEMY */
var swiper = new Swiper(".academySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2.5,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
     autoplay: {
        delay: 2000,
    }, 

    on: {
        init: function () {

        },
    },
    id: {

    }

  });
  
  swiper.on('slideChange', function () {
    if(this.activeIndex === 0) {
        $('.transp').removeClass('d-none');
        $('.transp').addClass('d-block');
    }else{
        $('.transp').removeClass('d-block');
        $('.transp').addClass('d-none');
    };
    if(this.activeIndex === 1) {
        $('.target').removeClass('d-none');
    }else{
        $('.target').addClass('d-none');
    }
    if(this.activeIndex === 2) {
        $('.vision').removeClass('d-none');
    }else{
        $('.vision').addClass('d-none');
    }
    if(this.activeIndex === 3) {
        $('.present').removeClass('d-none');
    }else{
        $('.present').addClass('d-none');
    }
    if(this.activeIndex === 4) {
        $('.leader').removeClass('d-none');
    }else{
        $('.leader').addClass('d-none')
    }

  });
/* SWIPER CORSI ACADEMY */