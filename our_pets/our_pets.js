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


// cards hovering
const cards = document.querySelectorAll('.sliderCard')

cards.forEach((card) => {
  card.onmouseenter = function () {
    this.querySelector('.learnMoreBtn').style.backgroundColor = '#F1CDB3';
  }

  card.onmouseleave = function () {
    this.querySelector('.learnMoreBtn').style.backgroundColor = 'transparent';
  }
})


// pagination
const pagesList = document.querySelectorAll('.paginationData');
const pagesDiv = document.querySelector('#pages');

for (let i = 0; i < pagesList.length; i++) {
  const newDiv = document.createElement('div')
  newDiv.classList.add('page')
  newDiv.innerText = i + 1

  if (i === 0) newDiv.classList.add('selectedPage')

  newDiv.onclick = () => {
    const pageButtons = document.querySelectorAll('.page')

    pageButtons.forEach((pageButton) => {
      pageButton.classList.remove('selectedPage')
    })

    pagesList.forEach((page) => {
      page.classList.remove('shown')
    })
    
    pagesList[i].classList.add('shown')
    pageButtons[i].classList.add('selectedPage')
  }

  pagesDiv.appendChild(newDiv)
}
