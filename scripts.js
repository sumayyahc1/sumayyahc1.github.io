const pepperImages = [
    'pepper1.jpg',
    'pepper2.jpg',
    'pepper3.jpg',
    // Add more image file names here
];

const pepperImage = document.getElementById('pepper-image');
const randomizeButton = document.getElementById('randomize-button');

function showRandomPepperImage() {
    const randomIndex = Math.floor(Math.random() * pepperImages.length);
    pepperImage.src = `images/${pepperImages[randomIndex]}`;
}

randomizeButton.addEventListener('click', showRandomPepperImage);

// Show a random image when the page loads
showRandomPepperImage();
