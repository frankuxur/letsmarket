// modal carousel
const images = document.querySelectorAll('.modal__image')
const imagesLength = images.length
const leftArrow = document.querySelector('.modal__prev')
const rightArrow = document.querySelector('.modal__next')
const closeModal = document.querySelector('.modal__close')
const modal = document.querySelector('.modal')
const modalBg = document.querySelector('.modal__bg')
const modalContent = document.querySelector('.modal__content')
const detailButtons = document.querySelectorAll('.product')

modalBg.addEventListener('click', () => {
    modal.classList.remove('active')
    
    images.forEach((image, i) => {
        if (i === 0) {
            image.classList.add('active')
        } else {
            image.classList.remove('active')
        }
    })
    
    document.querySelector('body').style.overflowY = 'auto'
})

let index = 0
leftArrow.addEventListener('click', () => {
    images[index].classList.remove('active')
    if (index !== 0) {
        index--
        images[index].classList.add('active')
    } else {
        index = imagesLength - 1
        images[index].classList.add('active')
    }
})

rightArrow.addEventListener('click', () => {
    images[index].classList.remove('active')
    if (index === imagesLength - 1) {
        index = 0
        images[index].classList.add('active')
    } else {
        index++
        images[index].classList.add('active')
    }
})

closeModal.addEventListener('click', () => {
    modal.classList.remove('active')
    
    images.forEach((image, i) => {
        if (i === 0) {
            image.classList.add('active')
        } else {
            image.classList.remove('active')
        }
    })
    
    document.querySelector('body').style.overflowY = 'auto'
})

detailButtons.forEach((button) => {
    button.addEventListener('click', () => {
        modal.classList.add('active')
        
        document.querySelector('body').style.overflowY = 'hidden'
    })
})


// custom cursor
const customCursor = document.querySelector('[data-cursor]');

modalBg.addEventListener('mousemove', (e) => {
    customCursor.style.opacity = '1'
    const posX = e.clientX;
    const posY = e.clientY;

    customCursor.style.left = `${posX}px`
    customCursor.style.top = `${posY}px`
})

modalContent.addEventListener('mousemove', (e) => {
    customCursor.style.opacity = '0'
})

