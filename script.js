const slideImg = document.getElementById('slide-image'); 

const images = [
    "images/slide1.jpg",
    "images/slide2.jpg",
    "images/slide3.jpg"
];

let currentIndex = 0;

let slideInterval;

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;    
    document.getElementById('slide-image').src = images[currentIndex];
    resetInterval(); 
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById('slide-image').src = images[currentIndex];
    resetInterval(); 
}


function startInterval() {
    slideInterval = setInterval(nextSlide, 7000);
}

function resetInterval() {
    clearInterval(slideInterval); 
    startInterval();             
}

startInterval();





const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.checked = true;
}

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
});