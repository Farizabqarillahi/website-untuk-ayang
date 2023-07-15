const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');
const prevButton = gallery.querySelector('.prev');
const nextButton = gallery.querySelector('.next');

let currentImageIndex = 0;

prevButton.addEventListener('click', () => {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    images[currentImageIndex].style.display = 'block';
});

nextButton.addEventListener('click', () => {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    images[currentImageIndex].style.display = 'block';
});