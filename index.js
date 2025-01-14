  // Initialize Swiper
  const swiper = new Swiper('.swiper', {
    direction: 'vertical', 
    slidesPerView: 3, 
    spaceBetween: 50, 
    loop: true, 
    autoplay: {
        delay: 500, 
        disableOnInteraction: false, 
    },
    speed: 500, 
    simulateTouch: false, 
});
