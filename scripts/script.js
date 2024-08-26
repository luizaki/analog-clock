// retrieve hands
const secondsHand = document.getElementById('second-hand');
const minutesHand = document.getElementById('minute-hand');
const hoursHand = document.getElementById('hour-hand');

// retrieve calendar window
const calendar = document.getElementById('calendar-window');

// retrieve second tick
const secondTick = document.querySelector('.second-tick');

// function to display second ticks around the clock
function setTick(){
    let ticks = [];

    for(let i = 1; i <= 60; i++) {
        ticks.push(`<span style="--i: ${i};"><p></p></span>`);
    }
    
    secondTick.insertAdjacentHTML("afterbegin", ticks.join(""));
}

// function to retrieve current time and call rotate hand function accordingly
function updateClock() {
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    const current = new Date();

    // get respective time components and proportionize them
    let seconds = current.getSeconds() / 60;
    let minutes = (seconds + current.getMinutes()) / 60;
    let hours = (minutes + current.getHours()) / 12;

    // update hand rotation
    rotateHand(secondsHand, seconds);
    rotateHand(minutesHand, minutes);
    rotateHand(hoursHand, hours);

    // update calendar window
    let month = months[current.getMonth()];
    let date = current.getDate().toString().padStart(2, '0');

    calendar.innerHTML = `${month} | ${date}`;
}

// function to rotate the hand of each component
function rotateHand(hand, rotation) {
    hand.style.setProperty('--rotation', rotation * 360);
}

// calling the clock function every second
setInterval(updateClock, 1000);
setTick();