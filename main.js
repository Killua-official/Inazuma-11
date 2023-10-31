// Receive elements and create animation for each section
const boxContainer = document.querySelector('.footer .box-container');

const observer = new IntersectionObserver(handleShowingContainer);
observer.observe(boxContainer);

const aboutSection = document.querySelector('.about');

const aboutObserver = new IntersectionObserver(handleShowingContainer);
aboutObserver.observe(aboutSection);

const audioSection = document.querySelector('.audio');

const audioObserver = new IntersectionObserver(handleShowingContainer);
audioObserver.observe(audioSection);

const tableContainerSection = document.querySelector('.table-container');

const tableContainerObserver = new IntersectionObserver(handleShowingContainer);
tableContainerObserver.observe(tableContainerSection);

const charactersSection = document.querySelector('.characters');

const charactersObserver = new IntersectionObserver(handleShowingContainer);
charactersObserver.observe(charactersSection);

const statisticsSection = document.querySelector('.statistics');

const statisticsObserver = new IntersectionObserver(handleShowingContainer);
statisticsObserver.observe(statisticsSection);


// Generic function to handle element visibility for each section
function handleShowingContainer(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}

// Form submission handler
const form = document.querySelector('#myForm');
const emailInput = document.querySelector('#emailInput');
const errorMessage = document.querySelector('#error-message');


// Event listener "submit" for email form of the footer section
form.addEventListener('submit', function (event) {
    if (!isValidEmail(emailInput.value)) {
        event.preventDefault();
        errorMessage.textContent = 'Please enter a valid email address.';
    } else {
        errorMessage.textContent = '';
        alert('Form submitted!');
        form.reset();
    }
});

// Checking the correctness of the data entered into the email form
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

// Retrieving references to DOM elements using their IDs
const moreText = document.getElementById("more-text");
const seeMoreButton = document.getElementById("learn-more-button");

// Event listener "click" for about section
seeMoreButton.addEventListener("click", function () {
    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        seeMoreButton.textContent = "Show less";
    } else {
        moreText.style.display = "none";
        seeMoreButton.textContent = "See more";
    }
});


// Event listener "keypress" for home, about and contact section
document.addEventListener("keypress", function (event) {
    const keyPressed = event.key;

    if (keyPressed === '1') {
        window.location.href = '#home';
    } else if (keyPressed === '2') {
        window.location.href = '#about';
    } else if (keyPressed === '3') {
        window.location.href = '#contact-box';
    }
});

// Function to display the contents of the dropdown menu on mouseover
function showDropdownContent(dropdown) {
    const dropdownContent = dropdown.querySelector(".dropdown-content");
    dropdownContent.style.display = "block";
}

// Function to hide the contents of the dropdown menu when the mouse moves away
function hideDropdownContent(dropdown) {
    const dropdownContent = dropdown.querySelector(".dropdown-content");
    dropdownContent.style.display = "none";
}


/*The snippet from the w3schools website is used here. It creates and configures a
back to top button that allows the user to return to the top of the page.*/

// Function to move the page to the beginning when the "top" button is clicked
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Set up a page scroll event handler
window.onscroll = function () {
    scrollFunction();
};

// Function to control whether the back to top button is displayed when scrolling
function scrollFunction() {
    const pxValue = (150 * window.innerHeight) / 100;

    if (document.body.scrollTop > pxValue || document.documentElement.scrollTop > pxValue) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// Select the audio player element with the class "audio-player"
const audioPlayer = document.querySelector('.audio-player');
// Select the play/pause button element with the class "play-pause-button"
const playPauseButton = document.querySelector('.play-pause-button');

// Event listener "click" for audio section
playPauseButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.textContent = "Pause";
    } else {
        audioPlayer.pause();
        playPauseButton.textContent = "Play";
    }
});

// Function to open a modal by its ID
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

// Function to close the modals
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Close the modals if the user clicks outside of them
window.onclick = function(event) {
    const signupModal = document.getElementById('signupModal');
    const loginModal = document.getElementById('loginModal');
    if (event.target === signupModal) {
        signupModal.style.display = 'none';
    }
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
};


