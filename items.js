let challenges =
    [
        { name: "JavaScript Drum Kit", complete: "01/01/2023", folder: "drumkit" },
        { name: "JS and CSS Clock", complete: "02/01/2023", folder: "clock" },
        { name: "CSS Variables", complete: "03/01/2023", folder: "variables" },
        { name: "Array Cardio Day 1", complete: "04/01/2023", folder: "arraycardio" },
        { name: "Flex Panel Gallery" },
        { name: "Type Ahead", complete: "06/01/2023", folder: "typeahead" },
        { name: "Array Cardio Day 2", complete: "07/01/2023", folder: "arraycardio2" },
        { name: "Fun with HTML5 Canvas" },
        { name: "Dev Tools Domination" },
        { name: "Hold Shift and Check Checkboxes" },
        { name: "Custom Video Player" },
        { name: "Key Sequence Detection" },
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
    if (challenge.complete) {
        let span = document.createElement('span')
        span.innerText = ` - ${challenge.complete}`
        li.appendChild(span)
    }
    list.appendChild(li)
}

