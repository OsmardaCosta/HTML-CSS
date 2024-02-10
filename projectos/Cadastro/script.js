const abrir = document.querySelector('button')
const modal = document.querySelector('dialog')
const fechar = document.querySelector('dialog button')

abrir.onclick = () =>{
    modal.showModal()
}

fechar.onclick = () => {
    modal.close()
}