const wrapperCarousel = document.querySelector('.wrapperCarousel');
const scrollerCarousel = wrapperCarousel.querySelector('.scroller');
const rightBtn = wrapperCarousel.querySelector('.main-arrow.-right');
const leftBtn = wrapperCarousel.querySelector('.main-arrow.-left');
const imgWidth = wrapperCarousel.querySelector('.wrapper').clientWidth;
  
rightBtn.addEventListener('click', scrollToNextItem);
leftBtn.addEventListener('click', scrollToPrevItem);
  
function scrollToNextItem() {
   scrollerCarousel.scrollBy({left: imgWidth, top: 0, behavior: 'smooth'});
}
function scrollToPrevItem() {
   scrollerCarousel.scrollBy({left: -imgWidth, top: 0, behavior: 'smooth'});
}