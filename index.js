// swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 90,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const sliders = document.querySelectorAll('.swiper-slide')

sliders.forEach((slider) => {
  slider.setAttribute('style', 'width: 270px; margin-right: 90px;')
})


// scroll
const anchors = document.querySelectorAll('a.scroll-to')

anchors.forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href')
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
})


// modal window
const modal = document.querySelector(".modal");
const body = document.querySelector("body");
const btns = document.querySelectorAll(".learnMoreBtn");
const closeBtns = document.querySelectorAll(".close-button");

btns.forEach((btn) => {
  btn.onclick = function () {
    body.style.overflow = "hidden";
    document.querySelector('#modal-name').textContent = this.dataset.name;
    document.querySelector('#modal-breed').textContent = this.dataset.breed;
    document.querySelector('#modal-description').textContent = this.dataset.description;
    document.querySelector('#modal-photo').setAttribute('src', `${this.dataset.photo}`);

    modal.style.display = "block";
  }
})

closeBtns.forEach((closeBtn) => {
  closeBtn.onclick = function () {
    modal.style.display = "none";
    body.style.overflow = "auto";
  }
})

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    body.style.overflow = "auto";
  }
}


console.log('My self graduation is 98');