class Carousel {
    constructor(carouselElement) {
      this.carouselElement = carouselElement;
      this.items = this.carouselElement.querySelectorAll('.carousel-item');
      this.totalItems = this.items.length;
      this.currentIndex = 0;
      this.prevButton = this.carouselElement.querySelector('.carousel-control-prev');
      this.nextButton = this.carouselElement.querySelector('.carousel-control-next');
  
      this.prevButton.addEventListener('click', () => this.showPrev());
      this.nextButton.addEventListener('click', () => this.showNext());
  
      this.update();
    }
  
    showPrev() {
      this.currentIndex = (this.currentIndex === 0) ? this.totalItems - 1 : this.currentIndex - 1;
      this.update();
    }
  
    showNext() {
      this.currentIndex = (this.currentIndex === this.totalItems - 1) ? 0 : this.currentIndex + 1;
      this.update();
    }
  
    update() {
      this.items.forEach((item, index) => {
        if (index === this.currentIndex) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }
  }
  
  // Initialize all carousels on the page
  document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
      new Carousel(carousel);
    });
  });