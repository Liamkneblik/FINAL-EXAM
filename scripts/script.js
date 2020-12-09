let formElems = document.querySelector('.bottom-area')
let thumbBar = document.querySelector('#thumb-bar')
let submit = document.querySelector('button')
formElems.style.visibility = 'hidden';

loopImages();

function loopImages(){
    let thumbBar = document.querySelector('#thumb-bar')
    for (i = 1; i < 6; i++) {
        let image = document.createElement('img')
        image.src = `images/pic${i}.jpg`
        image.alt = `pic${i}.jpg`
        thumbBar.appendChild(image)
    }
}

function displayImg(event){
    formElems.style.visibility = 'visible'
    let bigImage = document.querySelector('.displayed-img')
    bigImage.src = event.target.src
}

function applyEffect(){
    let userInput= document.querySelector('input');
    let bigImage = document.querySelector('.displayed-img');
    if (userInput.value === 'blur'){
        for (i = 1; i < 6; i++) {
            let image = document.createElement('img');
            image.src = `images/pic${i}.jpg`;
            if (image.src === bigImage.src){
                bigImage.src =`images/pic${i}${'B'}.jpg`;
            }
        }
    }
    else{
        alert('Cannot apply this effect');
    }
    userInput.value = '';
}

submit.addEventListener('click', applyEffect)
thumbBar.addEventListener('mouseover',displayImg)
