updateClock()

window.addEventListener('load', function() {
    setInterval(() => {
        updateClock()
    }, 1000);
})

function updateClock() {
    // Date Time
    let currentTime = new Date()
    // Hours
    let currentHrs = currentTime.getHours()
    let hourHand = document.getElementById('hourHand')
    let hourDeg = (currentHrs/12) * 360
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    hourHand.style.transformOrigin = 'top right';
    // Minutes
    let currentMin = currentTime.getMinutes()
    let minHand = document.getElementById('minHand')
    let minDeg = (currentMin/60) * 360
    minHand.style.transform = `rotate(${minDeg}deg)`;
    minHand.style.transformOrigin = 'top right';
    // Seconds
    let currentSec = currentTime.getSeconds()
    let secHand = document.getElementById('secHand')
    let secDeg = (currentSec/60) * 360
    secHand.style.transform = `rotate(${secDeg}deg)`;
    secHand.style.transformOrigin = 'top right';
}