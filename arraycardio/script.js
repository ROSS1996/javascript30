// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const inventorsDOM = document.getElementById('inventors')
for (person of inventors) {
    let info = document.createElement('li')
    info.innerText = `${person.first} ${person.last}: born in ${person.year}, passed in ${person.passed}`
    inventorsDOM.appendChild(info)
}

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

let fifteen = inventors.filter(born => born.year >= 1500 && born.year <= 1599)
const bornDOM = document.getElementById('born')
for (person of fifteen) {
    let info = document.createElement('li')
    info.innerText = `${person.first} ${person.last}: born in ${person.year}, passed in ${person.passed}`
    bornDOM.appendChild(info)
}

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

let names = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
const namesDOM = document.getElementById('names')
for (person of names) {
    let info = document.createElement('li')
    info.innerText = person
    namesDOM.appendChild(info)
}

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

let ages = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
const agesDOM = document.getElementById('ages')
for (person of ages) {
    let info = document.createElement('li')
    info.innerText = `${person.first} ${person.last}: born in ${person.year}, passed in ${person.passed}`
    agesDOM.appendChild(info)
}

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
let allYears = inventors.reduce((total, current) => { return total + (current.passed - current.year) }, 0);
const allYrsDOM = document.getElementById('allYears')
allYrsDOM.innerText = allYears

// 5. Sort the inventors by years lived

let lived = inventors.sort((a, b) => (a.passed - a.year) < (b.passed - b.year) ? 1 : -1);
const livedDOM = document.getElementById('lived')
for (person of lived) {
    let info = document.createElement('li')
    info.innerText = `${person.first} ${person.last}: lived ${person.passed - person.year} years`
    livedDOM.appendChild(info)
}

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const boulevards = [
    "Boulevards of Paris", "City walls of Paris", "Thiers wall", "Wall of Charles V", "Wall of Philip II Augustus", "City gates of Paris", "Haussmann's renovation of Paris",
    "Boulevards of the Marshals", "Boulevard Auguste-Blanqui", "Boulevard Barbès", "Boulevard Beaumarchais", "Boulevard de l'Amiral-Bruix", "Boulevard Mortier",
    "Boulevard Poniatowski", "Boulevard Soult", "Boulevard des Capucines", "Boulevard de la Chapelle", "Boulevard de Clichy", "Boulevard du Crime",
    "Boulevard du Général-d'Armée-Jean-Simon", "Boulevard Haussmann", "Boulevard de l'Hôpital", "Boulevard des Italiens", "Boulevard Lefebvre", "Boulevard de la Madeleine",
    "Boulevard de Magenta", "Boulevard Malesherbes", "Boulevard Marguerite-de-Rochechouart", "Boulevard Montmartre", "Boulevard du Montparnasse", "Boulevard Raspail",
    "Boulevard Richard-Lenoir", "Boulevard Saint-Germain", "Boulevard Saint-Michel", "Boulevard de Sébastopol", "Boulevard de Strasbourg", "Boulevard du Temple",
    "Boulevard Voltaire", "Boulevard de la Zone"
]

let boulevardsList = boulevards.filter(name => name.includes('de'));
const boulevardDOM = document.getElementById('boulevards')
for (boulevard of boulevardsList) {
    let info = document.createElement('li')
    info.innerText = boulevard
    boulevardDOM.appendChild(info)
}

// 7. sort Exercise
// Sort the people alphabetically by last name

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

let sorted = people.sort()
const peopleDOM = document.getElementById('people')
for (person of sorted) {
    let info = document.createElement('li')
    info.innerText = person
    peopleDOM.appendChild(info)
}

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
let vehicles = data.reduce((vehicle, quantity) => { vehicle[quantity] === undefined ? vehicle[quantity] = 1 : vehicle[quantity]++ ; return vehicle  }, {} )
const vehiclesDOM = document.getElementById('vehicles')

for (const [vehicle, quantity] of Object.entries(vehicles)) {
    let info = document.createElement('li')
    info.innerText = `${vehicle}: ${quantity}`
    vehiclesDOM.appendChild(info)
}

