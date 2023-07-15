const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");
const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');
const prevButton = gallery.querySelector('.prev');
const nextButton = gallery.querySelector('.next');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

let currentImageIndex = 0;
let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

// function changeVideo() {
//     // Get the URL entered by the user
//     var url = document.getElementById("videoURL").value;

//     // Extract the video ID from the URL
//     var videoID = url.split("v=")[1];
//     var ampersandPosition = videoID.indexOf('&');
//     if (ampersandPosition != -1) {
//         videoID = videoID.substring(0, ampersandPosition);
//     }

//     // Update the src attribute of the <iframe> element
//     document.querySelector("iframe").src = "https://www.youtube.com/embed/" + videoID + "?autoplay=1";
// }

hamburgerMenu.addEventListener('click', () => {
    if (menu.style.maxHeight) {
        menu.style.maxHeight = null;
    } else {
        menu.style.maxHeight = menu.scrollHeight + "px";
    }
});
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

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
})