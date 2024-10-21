// Array of MOFUNDO images (URLs from Google Drive)
const mofundoImages = [
    
    https://drive.google.com/uc?export=view&id=1ZmxZ0-rU0edjWiPJWFz-U9-AC_Uss836

    "https://drive.google.com/uc?export=view&id=YOUR_IMAGE_ID3",
    "https://drive.google.com/uc?export=view&id=YOUR_IMAGE_ID4",

"
];

// Get the button and image elements
const generateBtn = document.getElementById('generate-btn');
const mofundoImage = document.getElementById('mofundo-image');

// Add an event listener to the button
generateBtn.addEventListener('click', function() {
    // Pick a random image from the array
    const randomIndex = Math.floor(Math.random() * mofundoImages.length);
    mofundoImage.src = mofundoImages[randomIndex]; // Set the random image as the source
});
