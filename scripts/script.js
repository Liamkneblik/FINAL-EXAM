let formElems = document.querySelector('.bottom-area')
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