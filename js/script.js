'use strict';

const ratingBar = document.querySelector('.rating__bar')
const stars = ratingBar.querySelectorAll('.rating__star')
let isRatingBarActive = false;

const ratingBarChangeHandler = () => {
  ratingBar.classList.add('rating__bar--active')
  isRatingBarActive = true
  ratingBar.removeEventListener('change', ratingBarChangeHandler)
}

ratingBar.addEventListener('change', ratingBarChangeHandler)

for (let star of stars) {
  star.addEventListener('mouseenter', () => {
    ratingBar.classList.add('rating__bar--hover')
    ratingBar.classList.remove('rating__bar--active')
  })

  star.addEventListener('mouseleave', () => {
    ratingBar.classList.remove('rating__bar--hover');
    if (isRatingBarActive) {
      ratingBar.classList.add('rating__bar--active')
    }
  })
}
