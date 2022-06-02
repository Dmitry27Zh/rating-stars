const elements = document.querySelectorAll('.rating__bar')

const init = (bar) => {
  if (bar.querySelector('.rating__control:checked')) {
    bar.classList.add('is-filled')
    return
  }

  const ratingBarChangeHandler = () => {
    bar.classList.add('is-filled')
  }

  bar.addEventListener('change', ratingBarChangeHandler, { once: true })
}

export const initRatings = () => elements.forEach(init)
