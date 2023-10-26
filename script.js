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

function handleShowingContainer(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}

const form = document.querySelector('#myForm');
const emailInput = document.querySelector('#emailInput');
const errorMessage = document.querySelector('#error-message');

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

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}


const moreText = document.getElementById("more-text");
const seeMoreButton = document.getElementById("learn-more-button");


seeMoreButton.addEventListener("click", function() {
    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        seeMoreButton.textContent = "Show less";
    } else {
        moreText.style.display = "none";
        seeMoreButton.textContent = "See more";
    }
});

document.addEventListener('keypress', function (event) {
    const keyPressed = event.key;

    if (keyPressed === '1') {
        window.location.href = '#home';
    } else if (keyPressed === '2') {
        window.location.href = '#about';
    } else if (keyPressed === '3') {
        window.location.href = '#contact-box';
    }
});


const audio = document.getElementById("myAudio");
const playPauseButton = document.getElementById("playPauseButton");

playPauseButton.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = "Pause";
    } else {
        audio.pause();
        playPauseButton.textContent = "Play";
    }
});


function showDropdownContent(dropdown) {
    const dropdownContent = dropdown.querySelector(".dropdown-content");
    dropdownContent.style.display = "block";
}

function hideDropdownContent(dropdown) {
    const dropdownContent = dropdown.querySelector(".dropdown-content");
    dropdownContent.style.display = "none";
}








