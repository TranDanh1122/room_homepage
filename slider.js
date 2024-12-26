let sliderAction = document.querySelectorAll('.slider__action')

let numberOfSlider = document.querySelectorAll('[content_slider]').length
let headerEl = document.querySelector('header')
let changeSlide = (e) => {
    let currentSlide = parseInt(headerEl.getAttribute('slider'))
    if (e.target.classList.contains('slider__action--left')) currentSlide -= 1
    if (e.target.classList.contains('slider__action--right')) currentSlide += 1
    if (currentSlide <= 0) currentSlide = numberOfSlider
    if (currentSlide >= numberOfSlider + 1) currentSlide = 1
    headerEl.setAttribute('slider', currentSlide)
}
let timeOut;
let autoSlide = () => {
    let currentSlide = parseInt(headerEl.getAttribute('slider'))
    currentSlide += 1
    if (currentSlide <= 0) currentSlide = numberOfSlider
    if (currentSlide >= numberOfSlider + 1) currentSlide = 1
    headerEl.setAttribute('slider', currentSlide)
    clearTimeout(timeOut)
    timeOut = setTimeout(autoSlide, 5000);
}
timeOut = setTimeout(autoSlide, 5000);
sliderAction.forEach(el => el.addEventListener('click', changeSlide))
