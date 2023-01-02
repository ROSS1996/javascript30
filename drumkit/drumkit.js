let keys = {
    'bass': ['n', 'c'],
    'snare': ['b', 'v'],
    'rim': ['a'],
    'closedHH': ['x', 'm'],
    'openHH': ['z'],
    'highTom': ['f', 'g'],
    'lowTom': ['h', 'j'],
    'crash': ['t', 'y'],
    'splash': ['e', 'r'],
    'ride': ['u'],
    'bell': ['i']
}

function checkInstrument(key) {
    // Bass Kick
    if (keys.bass.indexOf(key) != -1) {
        return 'bass'
    }
    // Snare
    if (keys.snare.indexOf(key) != -1) {
        return 'snare'
    } else if (keys.rim.indexOf(key) != -1) {
        return 'rim'
    }
    // High Hats
    if (keys.openHH.indexOf(key) != -1) {
        return 'open'
    } else if (keys.closedHH.indexOf(key) != -1) {
        return 'closed'
    }
    // Tom
    if (keys.highTom.indexOf(key) != -1) {
        return 'hightom'
    } else if (keys.lowTom.indexOf(key) != -1) {
        return 'lowtom'
    }
    // Crash
    if (keys.crash.indexOf(key) != -1) {
        return 'crash'
    }
    // Splash
    if (keys.splash.indexOf(key) != -1) {
        return 'splash'
    }
    // Ride
    if (keys.ride.indexOf(key) != -1) {
        return 'ride'
    }
    // Bell
    if (keys.bell.indexOf(key) != -1) {
        return 'bell'
    }
    return null
}

document.addEventListener("keydown", function (event) {
    let instrument = checkInstrument(event.key.toLowerCase())
    let element = document.getElementById(instrument);
    if (instrument != null) {
        let audio = new Audio(`./sounds/${instrument}.wav`);
        audio.play()
        element.classList.toggle('playing')
    }
});

document.addEventListener("keyup", function (event) {
    let instrument = checkInstrument(event.key.toLowerCase())
    let element = document.getElementById(instrument);
    if (instrument != null) {
        element.classList.toggle('playing')
    }
});
