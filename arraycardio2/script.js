// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
    ];
console.log('Array #1: ')
console.log(people)
// Some and Every Checks
let currentYear = new Date().getFullYear()
// Array.prototype.some() // is at least one person 19 or older?
let someNineteen = people.some( person => (currentYear - person.year) >= 19 ? true : false )
console.log(`Is there at least one person older than 19? ${someNineteen}`)
// Array.prototype.every() // is everyone 19 or older?
let allNineteen = people.every( person => (currentYear - person.year) >= 19 ? true : false )
console.log(`Is everyone older than 19? ${allNineteen}`)

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];
console.log('Array #2: ')
console.log(comments)
// Array.prototype.find()
// find the comment with the ID of 823423
let comment = comments.find(comment => comment.id === 823423 ? true : false)
console.log('Comment ID 823423: ')
console.log(comment)
// Array.prototype.findIndex()
// Find the comment with this ID
let commentIndex = comments.findIndex(comment => comment.id === 823423 ? true : false)
// delete the comment with the ID of 823423
let updatedComments = comments.filter(comment => comment.id !== 823423)
// OR
updatedComments = [...comments.slice(0, commentIndex), ...comments.slice(commentIndex + 1)]
console.log(`Removed ID 823423: `)
console.log(updatedComments)

