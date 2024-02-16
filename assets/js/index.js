const colors = ['aec5ec', 'ecc4ae', 'dfecae', 'ecaede', 'cfecae', 'ecb2ae', 'aeecd3']
const storeColor = document.querySelectorAll('.store__color')
storeColor.forEach(box => {
    const randomNumber = Math.floor(Math.random() * colors.length)
    const randomColor = colors[randomNumber]
    box.style.backgroundColor = '#' + randomColor
})


// infinite scroll
const scrollers = document.querySelectorAll(".scroller");
// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}
function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}


// ad
const ads = document.querySelectorAll('.scroller__ad-image')
ads.forEach((ad, i) => {
    ad.addEventListener('mouseout', () => {
        ads.forEach((ad, index) => {
            ad.classList.remove('filter')
            ad.classList.remove('active')
        })
    })
    
    ad.addEventListener('mouseover', () => {
        ads.forEach((ad, index) => {
            if (i === index) {
                ad.classList.add('active')                
                return
            } 

            ad.classList.add('filter')
        })
    })

})


// terms & conditions
const tncOpenButton = document.querySelector('.register__button')
const tncCloseButton = document.querySelector('.register__modal-close')
const tncModal = document.querySelector('.register__modal')
tncOpenButton.addEventListener('click', () => {
  tncModal.classList.add('active')
  document.body.style.overflowY = 'hidden'
})
tncCloseButton.addEventListener('click', () => {
  tncModal.classList.remove('active')
  document.body.style.overflowY = 'auto'
})


// pricing modal
const pricingModalOpenButtons = document.querySelectorAll('.pricing__card-button')
const pricingModalCloseButton = document.querySelector('.pricing__modal-close')
const pricingModalModal = document.querySelector('.pricing__modal')
pricingModalOpenButtons.forEach(button => {
  button.addEventListener('click', () => {
    pricingModalModal.classList.add('active')
    document.body.style.overflowY = 'hidden'
  })
})

pricingModalCloseButton.addEventListener('click', () => {
  pricingModalModal.classList.remove('active')
  document.body.style.overflowY = 'auto'
})


// toggle nav 
const openNavButton = document.querySelector('.nav__open')
const nav = document.querySelector('.nav__links')
openNavButton.addEventListener('click', () => {
  nav.classList.toggle('active')
  openNavButton.querySelector('i').classList.toggle('ri-close-line')
  openNavButton.querySelector('i').classList.toggle('ri-menu-line')
  if (nav.classList.contains('active')) {
    openNavButton.querySelector('span').innerHTML = 'close'
  } else {
    openNavButton.querySelector('span').innerHTML = 'menu'    
  }
})

const navDate = document.querySelector('.nav__date')
const year = new Date().getFullYear()
navDate.innerHTML = `@${year}`

// close nav on clicking link
const navLinkArray = Array.from(document.querySelectorAll('.nav__link'))
navLinkArray.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active')
    openNavButton.querySelector('span').innerHTML = 'menu' 
    openNavButton.querySelector('i').classList.remove('ri-close-line')
    openNavButton.querySelector('i').classList.add('ri-menu-line')
  })
})