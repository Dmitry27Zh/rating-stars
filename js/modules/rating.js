const elements = document.querySelectorAll('.rating__bar')

const init = (bar) => {
  const stars = bar.querySelectorAll('.rating__star')

  const ratingBarChangeHandler = () => {
    bar.classList.add('rating__bar--active')
    bar.removeEventListener('change', ratingBarChangeHandler)
  }

  bar.addEventListener('change', ratingBarChangeHandler)

  for (let star of stars) {
    star.addEventListener('mouseenter', () => {
      bar.classList.add('rating__bar--hover')
    })

    star.addEventListener('mouseleave', () => {
      bar.classList.remove('rating__bar--hover');
    })
  }
}

export const initRatings = () => elements.forEach(init)
