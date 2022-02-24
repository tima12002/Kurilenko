const modalWindows = () => {
    const WindowBtn = document.querySelectorAll('#Window')
    const servicesModal = document.querySelector('.services-modal')
    const servicesClose = document.querySelector('.services-modal__close')
    const overlay = document.querySelector('.overlay')

    WindowBtn.forEach(WindowModalBtn => WindowModalBtn.addEventListener('click', (e) =>{
        e.preventDefault()
        servicesModal.style.display = 'block'
        overlay.style.display = 'block'
    
        }
    ))

    servicesClose.addEventListener('click', (e) =>{
        
        servicesModal.style.display = 'none'
        overlay.style.display = 'none'
    })

    const wboxModalBtn = document.querySelector('#WboxModal')
    const headerModal = document.querySelector('.header-modal')
    const closeModal = document.querySelector('.header-modal__close')
    

    wboxModalBtn.addEventListener('click', (e) =>{
        e.preventDefault()
        headerModal.style.display = 'block'
        overlay.style.display = 'block'
    })

    closeModal.addEventListener('click', (e) =>{
        
        headerModal.style.display = 'none'
        overlay.style.display = 'none'
    })
   
   
}
export default modalWindows