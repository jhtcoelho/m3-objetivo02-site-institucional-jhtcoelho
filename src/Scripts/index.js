
// Modal acionado na header

function handleModal(){
    const button = document.querySelector('.header__button')
    const modalContainer = document.querySelector('#modal')

    button.addEventListener('click', () => {
        modalContainer.showModal()

        closeModal()
    })
}

function closeModal(){
    const button = document.querySelector('.modal__close')
    const modalContainer = document.querySelector('#modal')

    button.addEventListener('click', () => {
        modalContainer.close()
    })
}

// Modal acionado no FAQ

function handleModalFaq(){
    const button = document.querySelector('.faq__button')
    const modalContainer = document.querySelector('#modal')

    button.addEventListener('click', () => {
        modalContainer.showModal()

        closeModalFaq()
    })
}

function closeModalFaq(){
    const button = document.querySelector('.modal__close')
    const modalContainer = document.querySelector('#modal')

    button.addEventListener('click', () => {
        modalContainer.close()
    })
}

// Chamada das funções do Modal

handleModal()
handleModalFaq()