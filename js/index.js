const pages = ['home', 'entry']
export function get_page() {
  const body = document.querySelector('body')

  for(const page of pages) {
    if(body.classList.contains(page)) {
      return page
    }
  }

  return null
}

const max_opacity = 1,
  fade_intervals = {}
export function fade_in(key, element) {
  element.style.opacity = 0

  fade_intervals[key] = setInterval(() => {
    element.style.opacity =
      parseFloat(element.style.opacity) + max_opacity / 10

    if(element.style.opacity >= 1) {
      clearInterval(fade_intervals[key])
    }
  }, 125)
}
