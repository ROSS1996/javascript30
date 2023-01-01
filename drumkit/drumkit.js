let bassKeys = ['n', 'c']
let snareKeys = ['b', 'v']
let rimKeys = ['a']
let ohKeys = ['x', 'm']
let chKeys = ['z']
let hTomKeys = ['f', 'g']
let lTomKeys = ['h', 'j']
let crashKeys = ['t', 'y']
let splashKeys = ['e', 'r']
let rideKeys = ['u']
let bellKeys = ['i']



document.addEventListener("keydown", function (event) {
    let key = event.key
    key = key.toLowerCase()
    // Bass Kick
    if (bassKeys.indexOf(key) != -1) {
        const audio = new Audio('./sounds/kick.wav')
        audio.play()
    }
    // Snare
    if (snareKeys.indexOf(key) != -1) {
        let audio = new Audio('./sounds/snare.wav')
        audio.play()
    } else if (rimKeys.indexOf(key) != -1) {
        let audio = new Audio('./sounds/rim.wav')
        audio.play()
    }
    // High Hats
    if (ohKeys.indexOf(key) != -1) {
        let audio = new Audio('./sounds/closed.wav')
        audio.play()
    } else if (chKeys.indexOf(key) != -1) {
        let audio = new Audio('./sounds/open.wav')
        audio.play()
    }
    // Tom
    if (hTomKeys.indexOf(key) != -1) {
        let audio = new Audio('./sounds/hightom.wav')
        audio.play()
    } else if (lTomKeys.indexOf(key) != -1) {
        let audio = new Audio('./sounds/lowtom.wav')
        audio.play()
    }
    // Crash
    if (crashKeys.indexOf(key) != -1) {
        const audio = new Audio('./sounds/crash.wav')
        audio.play()
    }
    // Splash
    if (splashKeys.indexOf(key) != -1) {
        const audio = new Audio('./sounds/splash.wav')
        audio.play()
    }
    // Ride
    if (rideKeys.indexOf(key) != -1) {
        const audio = new Audio('./sounds/ride.wav')
        audio.play()
    }
    // Bell
    if (bellKeys.indexOf(key) != -1) {
        const audio = new Audio('./sounds/bell.wav')
        audio.play()
    }
});
