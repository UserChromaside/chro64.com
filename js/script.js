const texts = ['Professional at not being a skid', 'Owner of CraterMC', 'Coding Professional'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let isDeleting = false;
let pauseEnd = false;

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    
    if (!isDeleting) {
        // Typing effect
        letter = currentText.slice(0, ++index);
    } else {
        // Deleting effect
        letter = currentText.slice(0, --index);
    }

    // Implement blinking cursor
    document.getElementById('typewriter').innerHTML = letter + '<span class="cursor">|</span>';

    let typingSpeed = 200;
    if (isDeleting) { typingSpeed /= 2; } // Make deleting speed faster

    if (!isDeleting && letter === currentText) {
        // Pause at end of typing before starting to delete
        typingSpeed = 1000; // 1 second pause at the end
        isDeleting = true; // Switch to deleting
    } else if (isDeleting && letter === '') {
        isDeleting = false; // Switch to typing
        count++; // Move to next text
        index = 0; // Reset index
        typingSpeed = 200; // Reset typing speed
    }

    setTimeout(type, typingSpeed);
}


document.addEventListener('DOMContentLoaded', (event) => {
    // Assuming you have an element with the id 'enter-button'
    var enterButton = document.getElementById('enter-screen');
    var video = document.getElementById('backgroundVideo'); // Replace with your video element ID
    var audio = document.getElementById('audio'); // Replace with your audio element ID
    type();
    enterButton.addEventListener('click', function() {

        document.getElementById('enter-screen').style.opacity = 0;
        
        setTimeout(function() {
            video.play();
            audio.play();
        
            
            document.getElementById('enter-screen').style.display = 'none';
        }, 500); 
        
    });
});
