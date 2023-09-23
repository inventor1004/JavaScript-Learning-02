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



/* Objects */
const person = {
  firstName: 'Chris',
  lastName: 'Park',
  age: 27,
  nation: 'Korea',
  job: 'Student'
}

// using ${}
console.log(`My name is ${person.firstName} ${person.lastName}\n
I'm ${person.age} years old and from ${person.nation}.\n
Now I'm a ${person.job}.`)

// using ['']
console.log(`My name is ${person['firstName']} ${person['lastName']}\n
I'm ${person['age']} years old and from ${person['nation']}.\n
Now I'm a ${person['job']}.`)
// same output:
// My name is Chris Park
// I'm 27 years old and from Korea.
// Now I'm a Student.


// Using bracket notion
// to cobcatebate the key using variable
const nameKey = 'Name'
console.log(person['first' + nameKey] + ' ' + person['last' + nameKey]); // Chris Park
//> dot notation can not cobcatedates mulitple keys


// Apply object
// prompt to the user and answer based on the user input
const userInput = prompt('What do you want to know about Chris? Choose between firstName, lastName, age, job, or nation!');

if (person[userInput])
  alert(`His ${userInput} is ${person[userInput]}`);
else
  alert("Sorry. I don't have that information...");