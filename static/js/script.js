const slideImage = document.querySelector('.hero')
const slideText = document.querySelector('.hero-text')
const menu = document.querySelector('.menu')
const nav = document.querySelector('.small-screen-nav')

const slides = [
    {
        image: './static/images/slide-image-1.jpeg',
        text: 'Slide One Text'
    },
    {
        image: './static/images/slide-image-2.jpeg',
        text: 'Slide Two Text'
    },
    {
        image: './static/images/slide-image-1.jpeg',
        text: 'Slide Three Text'
    },
    {
        image: './static/images/slide-image-1.jpeg',
        text: 'Slide Four Text'
    },
    {
        image: './static/images/slide-image-1.jpeg',
        text: 'Slide Five Text'
    }

]


let i= 0

setInterval(function(){ 

    if(i === slides.length){

        slideImage.style.backgroundImage  = `url(${slides[0].image})`
        slideText.textContent  = slides[0].text
        i = 0;
        console.log(i)
    }else if(i < slides.length){

            slideImage.style.backgroundImage  = `url(${slides[i].image})`
            slideText.textContent  = slides[i].text
    }

    i++;
}, 5000);


menu.addEventListener('click',()=>{
    nav.classList.toggle('hidden')
})
