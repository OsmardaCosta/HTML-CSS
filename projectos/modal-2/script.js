const abrir = () => {  
    setTimeout(() => {
        const modal = document.querySelector('.modal-container')
        modal.classList.add('Abrir')
    
        modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar'){
            modal.classList.remove('Abrir')
        }
        })
    }, 200); 
} 