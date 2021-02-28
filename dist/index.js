"use strict";
let categories = document.querySelector('.categories');
let options_body = document.querySelector('.options-body');
let total_price = document.querySelector('.price');
let main_image = document.querySelector('.main-image img');
localStorage.setItem('type', 'man');
localStorage.setItem('sleeve', 'long');
localStorage.setItem('collar', 'business classic');
localStorage.setItem('cuff', 'single button');
localStorage.setItem('material', 'white');
fetch('./php/getImage.php?type=man&sleeve=long&collar=business classic&cuff=single button').then(function (response) {
    return response.blob();
}).then(function (myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
    main_image.src = objectURL;
});
categories.addEventListener('click', (e) => {
    console.log('juhu');
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
    else if (category.classList.contains('material')) {
        for (let i = 0; i < hiddenElems.length; i++) {
            hiddenElems[i].classList.add('hidden');
        }
        let model_content = document.querySelector('.material-content');
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
let options = document.getElementsByClassName('options-body');
Array.prototype.forEach.call(options, (element) => {
    element.addEventListener('click', (e) => {
        let woman = document.querySelector('.woman');
        let man = document.querySelector('.man');
        let long = document.querySelector('.long');
        let short = document.querySelector('.short');
        let businessClassic = document.querySelector('.businessClassic');
        let cut_awayClassic = document.querySelector('.cut-awayClassic');
        let cut_awayModern = document.querySelector('.cut-awayModern');
        let singleButton = document.querySelector('.singleButton');
        let change = document.querySelector('.change');
        let doubleButton = document.querySelector('.doubleButton');
        let envelope = document.querySelector('.envelope');
        if (e.target.classList.contains('woman')) {
            man.classList.remove('active');
            woman.classList.add('active');
            localStorage.setItem("type", "woman");
        }
        else if (e.target.classList.contains('man')) {
            woman.classList.remove('active');
            man.classList.add('active');
            localStorage.setItem("type", "man");
        }
        if (e.target.classList.contains('short')) {
            long.classList.remove('active');
            short.classList.add('active');
            localStorage.setItem("sleeve", "short");
            document.querySelector('.cuff').style.pointerEvents = 'none';
            document.querySelector('.cuff').style.opacity = 0.5;
        }
        else if (e.target.classList.contains('long')) {
            short.classList.remove('active');
            long.classList.add('active');
            localStorage.setItem("sleeve", "long");
            document.querySelector('.cuff').style.pointerEvents = 'auto';
            document.querySelector('.cuff').style.opacity = 1;
        }
        if (e.target.classList.contains('businessClassic')) {
            businessClassic.classList.add('active');
            cut_awayClassic.classList.remove('active');
            cut_awayModern.classList.remove('active');
            localStorage.setItem("collar", "business classic");
        }
        else if (e.target.classList.contains('cut-awayClassic')) {
            businessClassic.classList.remove('active');
            cut_awayClassic.classList.add('active');
            cut_awayModern.classList.remove('active');
            localStorage.setItem("collar", "cut-away classic");
        }
        else if (e.target.classList.contains('cut-awayModern')) {
            businessClassic.classList.remove('active');
            cut_awayClassic.classList.remove('active');
            cut_awayModern.classList.add('active');
            localStorage.setItem("collar", "cut-away modern");
        }
        if (e.target.classList.contains('singleButton')) {
            singleButton.classList.add('active');
            change.classList.remove('active');
            doubleButton.classList.remove('active');
            envelope.classList.remove('active');
            localStorage.setItem("cuff", "single button");
        }
        else if (e.target.classList.contains('change')) {
            singleButton.classList.remove('active');
            change.classList.add('active');
            doubleButton.classList.remove('active');
            envelope.classList.remove('active');
            localStorage.setItem("cuff", "change");
        }
        else if (e.target.classList.contains('doubleButton')) {
            singleButton.classList.remove('active');
            change.classList.remove('active');
            doubleButton.classList.add('active');
            envelope.classList.remove('active');
            localStorage.setItem("cuff", "double button");
        }
        else if (e.target.classList.contains('envelope')) {
            singleButton.classList.remove('active');
            change.classList.remove('active');
            doubleButton.classList.remove('active');
            envelope.classList.add('active');
            localStorage.setItem("cuff", "envelope");
        }
        fetch('./php/getImage.php?type=' + localStorage.getItem('type') + '&sleeve=' + localStorage.getItem('sleeve') + '&collar=' + localStorage.getItem('collar') + '&cuff=' + localStorage.getItem('cuff')).then(function (response) {
            return response.blob();
        }).then(function (myBlob) {
            var objectURL = URL.createObjectURL(myBlob);
            main_image.src = objectURL;
        });
    });
});
//# sourceMappingURL=index.js.map