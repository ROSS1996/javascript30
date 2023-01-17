let challenges =
    [
        { name: "JavaScript Drum Kit", folder: "drumkit" },
        { name: "JS and CSS Clock", folder: "clock" },
        { name: "CSS Variables", folder: "variables" },
        { name: "Array Cardio Day 1", folder: "arraycardio" },
        { name: "Flex Panel Gallery" },
        { name: "Type Ahead", folder: "typeahead" },
        { name: "Array Cardio Day 2", folder: "arraycardio2" },
        { name: "Fun with HTML5 Canvas" },
        { name: "Dev Tools Domination", folder: "devtools" },
        { name: "Hold Shift and Check Checkboxes", folder: "checkboxes" },
        { name: "Custom Video Player" },
        { name: "Key Sequence Detection", folder: "keydetect" },
        { name: "Slide in on Scroll" },
        { name: "JavaScript References VS Copying" },
        { name: "LocalStorage" },
        { name: "Mouse Move Shadow" },
        { name: "Sort Without Articles" },
        { name: "Adding Up Times with Reduce" },
        { name: "Webcam Fun" },
        { name: "Speech Detection" },
        { name: "Geolocation" },
        { name: "Follow Along Link Highlighter" },
        { name: "Speech Synthesis" },
        { name: "Sticky Nav" },
        { name: "Event Capture, Propagation, Bubbling and Once" },
        { name: "Stripe Follow Along Nav" },
        { name: "Click and Drag" },
        { name: "Video Speed Controller" },
        { name: "Countdown Timer" },
        { name: " Whack A Mole" },
    ]

const list = document.getElementById('challenges')
for (challenge of challenges) {
    let li = document.createElement('li');
    if (challenge.folder) {
        let a = document.createElement('a')
        a.innerText = challenge.name
        a.href = `./${challenge.folder}`
        a.target = "_blank"
        li.appendChild(a)
    } else {
        li.innerText = challenge.name
    }
    list.appendChild(li)
}

