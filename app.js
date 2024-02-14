
'use strict';

const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function () {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    // Check if the body contains 'light-theme' class after the toggle
    if (document.body.classList.contains('light-theme')) {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
});



var currentImageIndex = 0; // Start with the first image

function switchImage() {
    currentImageIndex++; // Increment the index
    if (currentImageIndex > 4) { // If it's past the last image index
        currentImageIndex = 0; // Reset to the first image
    }

    var imgPath = "images/img_" + currentImageIndex + ".png"; // Create the path for the new image
    document.getElementById('catImage').src = imgPath; // Set the new image path as the src
}

