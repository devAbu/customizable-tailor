"use strict";
let categories = document.querySelector('.categories');
let options_body = document.querySelector('.options-body');
let total_price = document.querySelector('.price');
let main_image = document.querySelector('.main-image img');
categories.addEventListener('click', (e) => {
    let elems = document.querySelectorAll('.category-container');
    let hiddenElems = document.querySelectorAll('.category-options');
    for (let i = 0; i < elems.length; i++) {
        elems[i].classList.remove('selected');
    }
    let category = e.target;
    category.classList.add('selected');
    if (category.classList.contains('model')) {
        for (let i = 0; i < hiddenElems.length; i++) {
            hiddenElems[i].classList.add('hidden');
        }
        let model_content = document.querySelector('.model-content');
        if (model_content.classList.contains('hidden')) {
            model_content.classList.remove('hidden');
            model_content.classList.add('show');
        }
        else if (category.classList.contains('selected')) {
            model_content.classList.add('hidden');
            model_content.classList.remove('show');
        }
    }
    else if (category.classList.contains('sleeve')) {
        for (let i = 0; i < hiddenElems.length; i++) {
            hiddenElems[i].classList.add('hidden');
        }
        let model_content = document.querySelector('.sleeve-content');
        if (model_content.classList.contains('hidden')) {
            model_content.classList.remove('hidden');
        }
        else {
            model_content.classList.add('hidden');
        }
    }
    else if (category.classList.contains('collar')) {
        for (let i = 0; i < hiddenElems.length; i++) {
            hiddenElems[i].classList.add('hidden');
        }
        let model_content = document.querySelector('.collar-content');
        if (model_content.classList.contains('hidden')) {
            model_content.classList.remove('hidden');
        }
        else {
            model_content.classList.add('hidden');
        }
    }
    else if (category.classList.contains('cuff')) {
        for (let i = 0; i < hiddenElems.length; i++) {
            hiddenElems[i].classList.add('hidden');
        }
        let model_content = document.querySelector('.cuff-content');
        if (model_content.classList.contains('hidden')) {
            model_content.classList.remove('hidden');
        }
        else {
            model_content.classList.add('hidden');
        }
    }
});
let closeButtons = document.getElementsByClassName('close-options');
Array.prototype.forEach.call(closeButtons, (element) => {
    element.addEventListener('click', (e) => {
        console.log('Close Model -- X');
        e.target.parentNode.parentNode.classList.add('hidden');
    });
});
//# sourceMappingURL=index.js.map