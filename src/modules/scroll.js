const scroll = () => {
    const scrollBtn = document.querySelector('.smooth-scroll')
    const toTop = document.querySelector('#header')

    if(pageYOffset > 350) {
        scrollBtn.style.display = 'block'
    } else {
        scrollBtn.style.display = 'none'
    }
    window.addEventListener('scroll', function() {
        if(pageYOffset > 350) {
            scrollBtn.style.display = 'block'
        } else {
            scrollBtn.style.display = 'none'
        }
      })
    
    scrollBtn.addEventListener('click', () => {
        toTop.scrollIntoView({behavior: "smooth"})
    })
}


export default scroll
