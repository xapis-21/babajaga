const slideImage = document.querySelector('.hero')
const slideText = document.querySelector('.hero-text')
const menu = document.querySelector('.menu')
const nav = document.querySelector('.small-screen-nav')

const slides = [
    {
        image: 'https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000',
        text: 'Slide One Text'
    },
    {
        image: 'https://images.pexels.com/photos/279949/pexels-photo-279949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000',
        text: 'Slide Two Text'
    },
    {
        image: 'https://images.pexels.com/photos/4488660/pexels-photo-4488660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000',
        text: 'Slide Three Text'
    },
    {
        image: 'https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000',
        text: 'Slide Four Text'
    },
    {
        image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000',
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
