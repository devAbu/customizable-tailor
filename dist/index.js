"use strict";
let categories = document.querySelector('.categories');
let close_button = document.querySelector('.close-options');
let options_body = document.querySelector('.options-body');
let total_price = document.querySelector('.price');
let main_image = document.querySelector('.main-image img');
categories.addEventListener('click', (e) => {
    let elems = document.querySelectorAll('.category-container');
    let hiddenElems = document.querySelectorAll('.category-options');
    for (let i = 0; i < elems.length; i++) {
        elems[i].classList.remove('selected');
    }
    for (let i = 0; i < hiddenElems.length; i++) {
        hiddenElems[i].classList.add('hidden');
    }
    var category = e.target;
    category.classList.add('selected');
    if (category.classList.contains('model')) {
        let model_content = document.querySelector('.model-content');
        if (model_content.classList.contains('hidden')) {
            model_content.classList.remove('hidden');
        }
        else {
            model_content.classList.add('hidden');
        }
    }
    else if (category.classList.contains('sleeve')) {
        let model_content = document.querySelector('.sleeve-content');
        if (model_content.classList.contains('hidden')) {
            model_content.classList.remove('hidden');
        }
        else {
            model_content.classList.add('hidden');
        }
    }
});
//# sourceMappingURL=index.js.map