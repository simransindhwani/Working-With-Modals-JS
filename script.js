'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

const showModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const hideModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//showing the modal on show modal press button
for(let i=0; i<btnShowModal.length;i++){
    btnShowModal[i].addEventListener('click', showModal);
}

//hiding the modal on close modal button
btnCloseModal.addEventListener('click', hideModal);

//hiding the modal on ESC Key press
document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        hideModal();
    }
})
