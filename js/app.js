/*the top images*/
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}








//anniversary timer

const anniversaryDate = new Date ('2024-04-24T17:00:00');

function updateCountdown(){
    const currentDate = new Date();
    const timeDifference = anniversaryDate - currentDate;

    //calculate days, hours, minutes and seconds
    
    const days= Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours= Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes= Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds= Math.floor((timeDifference % (1000 * 60)) / 1000);



    const timerDisplay = document.getElementById('timer');
    timerDisplay.innerHTML = `
    <div class="timer-text">${days} &nbsp;<span>Days</span>&nbsp;</div>
    <div class="timer-text">${hours} &nbsp;<span>Hours</span>&nbsp;</div>
    <div class="timer-text">${minutes} &nbsp;<span>Minutes</span>&nbsp;</div>
    <div class="timer-text">${seconds} &nbsp;<span>Seconds</span>&nbsp;</div>
    `;

}

// update the countdown every second
setInterval(updateCountdown, 1000);




/*background colours*/

const colors= ['#0077B6', '#D90429', '#EF233C', '#161A1D'];
let currentIndex = 0;

function cycleBackgroundColor() {
    const body = document.body;
    body.style.backgroundColor = colors[currentIndex];

    //increment the index or reset to 0 when reaching the end
    currentIndex = (currentIndex + 1) % colors.length;


}

// change the background color every 10 seconds
setInterval(cycleBackgroundColor,10000);

//initial color change when the script is first loaded
cycleBackgroundColor();


//audio player

document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('myAudio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const seekSlider = document.getElementById('seekSlider');
    const currentTime = document.getElementById('currentTime');
    const duration = document.getElementById('duration');

    playPauseBtn.addEventListener('click', function () {
        if (audio.paused || audio.ended) {
            audio.play();
            playPauseBtn.innerHTML = '&#10074;&#10074;'; // Pause symbol
        } else {
            audio.pause();
            playPauseBtn.innerHTML = '&#9658;'; // Play symbol
        }
    });

    audio.addEventListener('timeupdate', function () {
        updateSeekBar();
    });

    seekSlider.addEventListener('input', function () {
        let seekTime = audio.duration * (seekSlider.value / 100);
        audio.currentTime = seekTime;
    });

    audio.addEventListener('loadedmetadata', function () {
        duration.innerHTML = formatTime(audio.duration);
    });

    function updateSeekBar() {
        let seekValue = (audio.currentTime / audio.duration) * 100;
        seekSlider.value = seekValue;
        currentTime.innerHTML = formatTime(audio.currentTime);
    }

    function formatTime(seconds) {
        let minutes = Math.floor(seconds / 60);
        let secs = Math.floor(seconds % 60);
        return minutes + ':' + (secs < 10 ? '0' : '') + secs;
    }
});


/**photo gallery */

document.getElementById('next2').onclick = function(){
    let lists2 = document.querySelectorAll('.item2');
    document.getElementById('slide2').appendChild(lists2[0]);
}
document.getElementById('prev2').onclick = function(){
    let lists2 = document.querySelectorAll('.item2');
    document.getElementById('slide2').prepend(lists2[lists2.length - 1]);
}


//animated heart particles

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('heartCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const hearts = [];

    function createHeart() {
        const heart = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 10 + 10,
            speedX: Math.random() * 3 - 1.5,
            speedY: Math.random() * 3 - 1.5,
        };

        hearts.push(heart);
    }

    function drawHearts() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        hearts.forEach((heart, index) => {
            heart.x += heart.speedX;
            heart.y += heart.speedY;

            if (heart.size > 0.2) {
                heart.size -= 0.1;
            } else {
                hearts.splice(index, 1);
            }

            ctx.fillStyle = 'red';
            ctx.beginPath();
            ctx.moveTo(heart.x, heart.y);
            ctx.bezierCurveTo(
                heart.x + 5, heart.y - 5,
                heart.x + 10, heart.y + 10,
                heart.x, heart.y + 20
            );
            ctx.bezierCurveTo(
                heart.x - 10, heart.y + 10,
                heart.x - 5, heart.y - 5,
                heart.x, heart.y
            );
            ctx.fill();
        });
    }

    function animateHearts() {
        createHeart();
        drawHearts();
        requestAnimationFrame(animateHearts);
    }

    // Resize canvas on window resize
    window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // Start animation
    animateHearts();
});


//Note click

document.addEventListener('DOMContentLoaded', function () {
    const displayButton = document.getElementById('displayButton');
    const displayContainer = document.getElementById('displayContainer');
    const displayedImage = document.getElementById('displayedImage');
    const displayText = document.getElementById('displayText');

    displayButton.addEventListener('click', function () {
        // Replace the placeholder values with your image URL and desired text
        const imageUrl = './images/note.jpg';
        const textContent = 'Remember this? I thought it would be a great idea to include this note since we have both been wanting such a love like this. ';

        // Update the image source and text content
        displayedImage.src = imageUrl;
        displayText.textContent = textContent;

        // Show the container
        displayContainer.classList.remove('hidden');
    });
});


/*puzzle mini game */

document.addEventListener('DOMContentLoaded', function () {
    const puzzleContainer = document.getElementById('puzzle-container');
    const imageSrc = 'your-image.jpg'; // Replace with your image URL
    const gridSize = 3; // Adjust the grid size

    // Function to create puzzle pieces
    function createPuzzlePieces() {
        const pieceWidth = 100 / gridSize;
        const pieceHeight = 100 / gridSize;

        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                const piece = document.createElement('div');
                piece.className = 'puzzle-piece';
                piece.style.width = `${pieceWidth}%`;
                piece.style.height = `${pieceHeight}%`;
                piece.style.backgroundImage = `url(${imageSrc})`;
                piece.style.backgroundSize = `${gridSize * 100}% ${gridSize * 100}%`;
                piece.style.backgroundPosition = `-${j * pieceWidth}% -${i * pieceHeight}%`;

                // Enable dragging for puzzle pieces using interact.js
                interact(piece).draggable({
                    inertia: true,
                    restrict: {
                        restriction: puzzleContainer,
                        endOnly: true,
                        elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
                    },
                });

                puzzleContainer.appendChild(piece);
            }
        }
    }

    createPuzzlePieces();
});

