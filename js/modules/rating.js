const elements = document.querySelectorAll('.rating__bar')

const init = (bar) => {
  const stars = bar.querySelectorAll('.rating__star')
  let isRatingBarActive = false;

  const ratingBarChangeHandler = () => {
    bar.classList.add('rating__bar--active')
    isRatingBarActive = true
    bar.removeEventListener('change', ratingBarChangeHandler)
  }

  bar.addEventListener('change', ratingBarChangeHandler)

  for (let star of stars) {
    star.addEventListener('mouseenter', () => {
      bar.classList.add('rating__bar--hover')
      bar.classList.remove('rating__bar--active')
    })

    star.addEventListener('mouseleave', () => {
      bar.classList.remove('rating__bar--hover');
      if (isRatingBarActive) {
        bar.classList.add('rating__bar--active')
      }
    })
  }
}

export const initRatings = () => elements.forEach(init)
