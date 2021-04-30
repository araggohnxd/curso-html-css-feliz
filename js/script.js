const wrapperCarousel = document.querySelector('.wrapper-carousel');
const scrollerCarousel = wrapperCarousel.querySelector('.scroller-carousel');
const rightArrow = wrapperCarousel.querySelector('.main-arrow.-right');
const leftArrow = wrapperCarousel.querySelector('.main-arrow.-left');
const imgWidth = wrapperCarousel.querySelector('.carousel-img').clientWidth;
  
rightArrow.addEventListener('click', scrollToNextItem);
leftArrow.addEventListener('click', scrollToPrevItem);
  
function scrollToNextItem() {
   scrollerCarousel.scrollBy({left: imgWidth, top: 0, behavior: 'smooth'});
}
function scrollToPrevItem() {
   scrollerCarousel.scrollBy({left: -imgWidth, top: 0, behavior: 'smooth'});
}