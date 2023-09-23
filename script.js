'use strict';

/* Array */
const friends = ["Micheal", "Steven", "Peter"];

// add new data at the end of the array
//> push return the number of elements in array
let newLen = friends.push("Lee");
console.log(friends);       // ['Micheal', 'Steven', 'Peter', 'Lee']
console.log(newLen);        // 4

// add new data at the certain index
friends[4] = "Chris";
console.log(friends);       // ['Micheal', 'Steven', 'Peter', 'Lee', 'Chris']

// add at the front
friends.unshift('John');
console.log(friends);       // ['John', 'Micheal', 'Steven', 'Peter', 'Lee', 'Chris']

// remove the last element
//> pop returns removed element
let removedElement = friends.pop();
console.log(friends);        // ['John', 'Micheal', 'Steven', 'Peter', 'Lee']
console.log(removedElement); // Chris


// remove the first element
removedElement = friends.shift();
console.log(friends);        // ['Micheal', 'Steven', 'Peter', 'Lee']
console.log(removedElement); // John


// find certain element's index
console.log(friends.indexOf('Steven')); // 1

// Check whether the certain element is in array or not
console.log(friends.includes('Steven')); // ture
console.log(friends.includes('Chris'));  // false
