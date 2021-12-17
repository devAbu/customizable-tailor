"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let categories = document.querySelector('.categories');
let options_body = document.querySelector('.options-body');
let total_price = document.querySelector('.price');
let reset_button = document.querySelector('.btn-reset');
let elems = document.querySelectorAll('.category-container');
let hiddenElems = document.querySelectorAll('.category-options');
let options_box = document.querySelectorAll('.options-content');
let main_image = document.querySelector('.main-image img');
localStorage.setItem('type', 'man');
localStorage.setItem('sleeve', 'long');
localStorage.setItem('collar', 'business classic');
localStorage.setItem('cuff', 'single button');
localStorage.setItem('material', 'white');
let firstImage = () => {
    fetch('./php/getImage.php?type=man&material=white&sleeve=long&collar=business classic&cuff=single button').then(function (response) {
        return response.blob();
    }).then(function (myBlob) {
        var objectURL = URL.createObjectURL(myBlob);
        main_image.src = objectURL;
        main_image.classList.remove('hidden');
    });
};
firstImage();
reset_button.addEventListener('click', () => {
    firstImage();
    for (let i = 0; i < elems.length; i++) {
        if (elems[i].classList.contains('cuff')) {
            elems[i].style.pointerEvents = 'auto';
            elems[i].style.opacity = 1;
        }
        elems[i].classList.remove('selected');
    }
    for (let i = 0; i < hiddenElems.length; i++) {
        hiddenElems[i].classList.add('hidden');
    }
    for (let i = 0; i < options_box.length; i++) {
        if (options_box[i].classList.contains('man') || options_box[i].classList.contains('white') || options_box[i].classList.contains('long') || options_box[i].classList.contains('businessClassic') || options_box[i].classList.contains('singleButton')) {
            options_box[i].classList.add('active');
        }
        else {
            options_box[i].classList.remove('active');
        }
    }
    localStorage.setItem('type', 'man');
    localStorage.setItem('sleeve', 'long');
    localStorage.setItem('collar', 'business classic');
    localStorage.setItem('cuff', 'single button');
    localStorage.setItem('material', 'white');
    total_price.innerHTML = '$89';
});
categories.addEventListener('click', (e) => {
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
        e.target.parentNode.parentNode.classList.add('hidden');
    });
});
let options = document.getElementsByClassName('options-body');
Array.prototype.forEach.call(options, (element) => {
    element.addEventListener('click', (e) => {
        let woman = document.querySelector('.woman');
        let man = document.querySelector('.man');
        let white = document.querySelector('.white');
        let lugaBlue = document.querySelector('.luga-blue');
        let purgaBlackBlue = document.querySelector('.parga-black-blue');
        let long = document.querySelector('.long');
        let short = document.querySelector('.short');
        let businessClassic = document.querySelector('.businessClassic');
        let cut_awayClassic = document.querySelector('.cut-awayClassic');
        let cut_awayModern = document.querySelector('.cut-awayModern');
        let singleButton = document.querySelector('.singleButton');
        let change = document.querySelector('.change');
        let doubleButton = document.querySelector('.doubleButton');
        let envelope = document.querySelector('.envelope');
        if (e.target.classList.contains('woman') || e.target.parentNode.classList.contains('woman')) {
            man.classList.remove('active');
            woman.classList.add('active');
            localStorage.setItem("type", "woman");
        }
        else if (e.target.classList.contains('man') || e.target.parentNode.classList.contains('man')) {
            woman.classList.remove('active');
            man.classList.add('active');
            localStorage.setItem("type", "man");
        }
        if (e.target.classList.contains('white') || e.target.parentNode.classList.contains('white')) {
            lugaBlue.classList.remove('active');
            purgaBlackBlue.classList.remove('active');
            white.classList.add('active');
            localStorage.setItem("material", "white");
            total_price.innerHTML = '$89';
        }
        else if (e.target.classList.contains('luga-blue') || e.target.parentNode.classList.contains('luga-blue')) {
            lugaBlue.classList.add('active');
            purgaBlackBlue.classList.remove('active');
            white.classList.remove('active');
            localStorage.setItem("material", "luga-blue");
            total_price.innerHTML = '$119';
        }
        else if (e.target.classList.contains('parga-black-blue') || e.target.parentNode.classList.contains('parga-black-blue')) {
            lugaBlue.classList.remove('active');
            purgaBlackBlue.classList.add('active');
            white.classList.remove('active');
            localStorage.setItem("material", "parga-black-blue");
            total_price.innerHTML = '$89';
        }
        if (e.target.classList.contains('short') || e.target.parentNode.classList.contains('short')) {
            long.classList.remove('active');
            short.classList.add('active');
            localStorage.setItem("sleeve", "short");
            document.querySelector('.cuff').style.pointerEvents = 'none';
            document.querySelector('.cuff').style.opacity = 0.5;
        }
        else if (e.target.classList.contains('long') || e.target.parentNode.classList.contains('long')) {
            short.classList.remove('active');
            long.classList.add('active');
            localStorage.setItem("sleeve", "long");
            document.querySelector('.cuff').style.pointerEvents = 'auto';
            document.querySelector('.cuff').style.opacity = 1;
        }
        if (e.target.classList.contains('businessClassic') || e.target.parentNode.classList.contains('businessClassic')) {
            businessClassic.classList.add('active');
            cut_awayClassic.classList.remove('active');
            cut_awayModern.classList.remove('active');
            localStorage.setItem("collar", "business classic");
        }
        else if (e.target.classList.contains('cut-awayClassic') || e.target.parentNode.classList.contains('cut-awayClassic')) {
            businessClassic.classList.remove('active');
            cut_awayClassic.classList.add('active');
            cut_awayModern.classList.remove('active');
            localStorage.setItem("collar", "cut-away classic");
        }
        else if (e.target.classList.contains('cut-awayModern') || e.target.parentNode.classList.contains('cut-awayModern')) {
            businessClassic.classList.remove('active');
            cut_awayClassic.classList.remove('active');
            cut_awayModern.classList.add('active');
            localStorage.setItem("collar", "cut-away modern");
        }
        if (e.target.classList.contains('singleButton') || e.target.parentNode.classList.contains('singleButton')) {
            singleButton.classList.add('active');
            change.classList.remove('active');
            doubleButton.classList.remove('active');
            envelope.classList.remove('active');
            localStorage.setItem("cuff", "single button");
        }
        else if (e.target.classList.contains('change') || e.target.parentNode.classList.contains('change')) {
            singleButton.classList.remove('active');
            change.classList.add('active');
            doubleButton.classList.remove('active');
            envelope.classList.remove('active');
            localStorage.setItem("cuff", "change");
        }
        else if (e.target.classList.contains('doubleButton') || e.target.parentNode.classList.contains('doubleButton')) {
            singleButton.classList.remove('active');
            change.classList.remove('active');
            doubleButton.classList.add('active');
            envelope.classList.remove('active');
            localStorage.setItem("cuff", "double button");
        }
        else if (e.target.classList.contains('envelope') || e.target.parentNode.classList.contains('envelope')) {
            singleButton.classList.remove('active');
            change.classList.remove('active');
            doubleButton.classList.remove('active');
            envelope.classList.add('active');
            localStorage.setItem("cuff", "envelope");
        }
        fetch('./php/getImage.php?type=' + localStorage.getItem('type') + '&material=' + localStorage.getItem('material') + '&sleeve=' + localStorage.getItem('sleeve') + '&collar=' + localStorage.getItem('collar') + '&cuff=' + localStorage.getItem('cuff')).then(function (response) {
            return response.blob();
        }).then(function (myBlob) {
            var objectURL = URL.createObjectURL(myBlob);
            main_image.src = objectURL;
        });
    });
});
const shareButton = document.querySelector(".btn-share");
const overlay = document.querySelector(".overlay");
const shareModal = document.querySelector(".share");
const title = window.document.title;
const url = window.document.location.href;
const options2 = { type: "image/png" };
const shareNow = () => __awaiter(void 0, void 0, void 0, function* () {
    fetch('./php/getImage.php?type=' + localStorage.getItem('type') + '&material=' + localStorage.getItem('material') + '&sleeve=' + localStorage.getItem('sleeve') + '&collar=' + localStorage.getItem('collar') + '&cuff=' + localStorage.getItem('cuff'))
        .then(function (response) {
        return response.blob();
    })
        .then(function (blob) {
        var file = new File([blob], "picture.jpg", { type: 'image/jpeg' });
        var filesArray = [file];
        if (navigator.canShare && navigator.canShare({ files: filesArray })) {
            navigator.share({
                text: 'some_text',
                files: filesArray,
                title: 'some_title',
                url: 'some_url'
            });
        }
    });
});
shareButton.addEventListener("click", () => {
    shareNow();
});
overlay.addEventListener("click", () => {
    overlay.classList.remove("show-share");
    shareModal.classList.remove("show-share");
});
//# sourceMappingURL=index.js.map