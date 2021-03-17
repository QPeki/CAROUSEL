let slideIndex = 0;
const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const slide  = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dots span');
const next = document.querySelector(' .carousel .next');
const prev = document.querySelector(' .carousel .prev');
const carousel= document.querySelector('.carousel .dots');

showslide();


function plusslide(position) {
    slideIndex += position;

    if (slideIndex > slide.length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slide.length;
    }

    // Default active class is removed from all dots

    for (let i = 0; i < dots.length; i++) {
        const e = dots[i];
        e.classList.remove('dot-active');
    }

    slides.style.left = `-${slideIndex - 1}00%`;
    dots[slideIndex - 1].classList.add('dot-active');

    console.log(slideIndex + position);
    
}

function currentslide(index) {

    if (index > slide.length) {
        index = 1;
    } else if (index < 1) {
        index = slide.length;
    }

    for (let i = 0; i < dots.length; i++) {
        const e = dots[i];
        e.classList.remove('dot-active');
    }

    slides.style.left = `-${index - 1}00%`;
    dots[index - 1].classList.add('dot-active');
    
    console.log(index);
    slideIndex = index;
   
}

function showslide() {
    slideIndex++;

    if (slideIndex > slide.length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slide.length;
    }

    for(let i = 0; i < dots.length; i++) {
        const e = dots[i];
        e.classList.remove('dot-active');
    }

    slides.style.left = `-${slideIndex - 1}00%`;
    dots[slideIndex -1].classList.add('dot-active');
}

//  Timer

let interval = setInterval(() => {
    showslide();
}, 3000); // Change every image after 3 seconds.

slider.addEventListener('mouseover', () => {
    clearInterval(interval); // On hover stop changing every image after 3 seconds.
});

carousel.addEventListener('mouseover', () => {
    clearInterval(interval); 
});

next.addEventListener('mouseover', () => {
    clearInterval(interval); 
});

prev.addEventListener('mouseover', () => {
    clearInterval(interval); 
});


slider.addEventListener('mouseout', () => {
    interval = setInterval(() => {
        showslide();
    }, 3000); // On mouseout from slide start again chaning every image after 3 seconds.
})

carousel.addEventListener('mouseout', () => {
    interval = setInterval(() => {
        showslide();
    }, 3000); 

})

next.addEventListener('mouseout', () => {
    interval = setInterval(() => {
        showslide();
    }, 3000); 

})

prev.addEventListener('mouseout', () => {
    interval = setInterval(() => {
        showslide();
    }, 3000); 

})


