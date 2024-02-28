const openmodal = () => {
    
    setTimeout(() => {
        const modal = document.querySelector('#container-modal')
    modal.classList.add('open')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'Cadastro'){
            modal.classList.remove('open')
        }
    })
    }, 300);

}

function Dropdown() {
    const menu1 = document.querySelector('.menu1')
    const menu2 = document.querySelector('.menu2')
    const menu3 = document.querySelector('.menu3')
    const links = document.querySelector('.links')
    
    links.classList.toggle('drop')
    menu1.classList.toggle('active')
    menu2.classList.toggle('active')
    menu3.classList.toggle('active')
}