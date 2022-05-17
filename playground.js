/* <------> FUNCTION LIBRARY <------> */

// convert an array of numbers to binary equivalent
const binaryArrayToNumber = arr => {
return parseInt(arr.join(''), 2); // joined the itmes in the array together, and then used parseInt with a radix of 2 to convert to binary
}; //[1, 0, 1, 1, 0, 1, 1] == 91
  
// sum numbers which are divisible
function sumDivisibleNumbers(number) {
    // sum of numbers below argument "number" divisible by 3 and 5 (negative returns 0, only count each number once)
    let sum = 0; // create variable to update during loops
    for (let x = 0; x < number; x++) { // loop as many times as the number argument says to
        if (number < 0) { 
            return 0;
        } else if (x % 3 == 0 && x % 5 == 0) { // checking against both conditions first => numbers which match both cases will only be tested once
            sum += x;
        } else if (x % 3 == 0) {
            sum += x;
        } else if (x % 5 == 0) {
            sum += x;
        }
    } return sum;
}; // sumDivisibleNumbers(10) == 23

// find smallest number in an array
function findSmallestNumber(numbers) {  
    
    let smallest = numbers[0]; // asigning the first index of the numbers array to a variable so i csee if any others are smallest
    
    for (let x = 0; x < numbers.length; x++) {
        if (numbers[x] < smallest) {
            smallest = numbers[x]
            
        } 
    } return smallest;
};

// sums the two smallest numbers of an array using .sort().splice().reduce()
function sumTwoSmallestNumbers(numbers) { 
    return numbers
      .sort((a, b) => a - b)    // returns ascending value order
      .slice(0, 2)              // returns two first indices
      .reduce((x, y) => x + y)  // creates and calls a function which adds together the two values and returns an evaluated array
};  // reTesting([19, 5, 42, 2, 77]); --> returns 7

// returns true if the argument is a palindrome (ignores punctuation)
function palindromeCheck(word) {
    word = word.toUpperCase().replace(/[^A-Z]/g, ""); // convert string to uppercase && replace anything that isn't a capital letter with ""
    
    const arr1 = word.split(""); // [ 'd', 'y', 'l', 'a', 'n' ]
    const arr2 = [...arr1].reverse(); // [ 'y', 'n', 'l', 'd', 'a' ]

    return arr1.every((val, idx) => val === arr2[idx]) // check that every index matches
}; // palindromeCheck("Racecar!"); --> returns true

// returns the specified value in the fibonacci sequence
function fibonacciCheck(count) {
    if (count < 0) return "OOPS";
    if (count === 0) return 0;
    let a = 0;
    let b = 1;
    for (let i = 1; i < count; i++) {
      const temp = b;
      b = a + b;
      a = temp;
    }
    return b;
}; fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)

// creates an array containing the values of nested objects -- HOW CAN I WRITE THIS TO INCLUDE A PROPERTY NAME AS AN ARGUMENT INSTEAD OF NEEDING TO ALTER THE FUNCTION EACH TIME? 
function addNestedObjectValuesToArray(arrayOfObjects) {
    const newArray = [];
    for (let x = 0; x < array.length; x++ ) {
        newArray.push(array[x].PROPERTY); // pushes 
    } return newArray; 
}; // const books = [{title: 'Book', author: 'Name'}, {title: 'Book2', author: 'Name2'}] --> returns --> [ 'Book', 'Book2' ]
  

/* <------> STRING METHODS <------> */

// adding a method to the "String" object prototype - still unsure why better than normal function
String.prototype.toJadenCase = function () {
    return this
    .toLowerCase() 
    .split(' ') // creates an array with values using the (argument) as a knife
    .map(dylan => dylan.charAt(0).toUpperCase() + dylan.slice(1)) // do some research to understand this
    .join(' '); // joins values of an array together WITH (argument) between them
};



/* <------> ARRAY METHODS <------> */

.from()

// .splice(start, deleteCount, item1, item2, itemN) mutates away items from an array and returns them
let testArray = [1, 2, 3, 4, 5]; /* --> */ testArray.splice(1, 2, "EXTRA"); // --> returns --> [2, 3] --> also mutates into [ 1, 'EXTRA', 4, 5 ]

// .find() returns the first element in an array that satisfies a the function argument
let findArrayMethod = [1, 2, 3, 4, 5].find(x => x - 2 == 3); // --> returns --> 5

// .findIndex() returns the index of the element that satisfies the callback function
let findIndexArrayMethod = [1, 2, 3, 4, 5].findIndex(x => x > 2); // --> returns --> 2 

// .indexOf() returns the index of the element
let indexOfArrayMethod = ([19, 5, 42, 2, 77, 42].indexOf(42)) // --> returns --> 2

// .map() immutable method -- returns a new array after performing the function argument on each index of a given array
let mapArrayMethod = [1, 2, 3, 4, 5].map(x => x *2) // --> returns --> [2, 4, 6, 8, 10]

// .filter() returns a new array filtering out the elements which don't satisfy the function argument
let filterArrayMethod = [19, 5, 42, 2, 77, 42].filter(x => x < 20); // --> returns --> [ 19, 5, 2 ]

// .reduce() executes a callback function on every element against the one which precedes it and returns the resulting single value
let reduceArrayMethod = [1, 2, 3, 4, 5, 6].reduce((x, y) => x + y); // --> returns --> 21

// .every() returns true if every element satisfies a condition
let everyArrayMethod = [1, 2, 3, 4, 5].every(x => x < 6); // --> returns --> true

// .some() returns true if any element satisfies a condition
let someArrayMethod = [1, 2, 3, 4, 5].some(x => 2); // --> returns --> true 

// .fill() changes all the elements in an array to a static value from a start index. returns a modified array.
let fillArrayMethod = [1, 2, 3, 4, 5].fill("crystal", 2); // --> returns --> [ 1, 2, 'crystal', 'crystal', 'crystal' ]

// .includes() returns true if the array its called on contains the provided element
let includesArrayMethod = [1, 2, 3, 4, 5, "sunshine", "moon"].includes((2 - 1) && "moon"); // --> returns --> true

// .sort() returns a mutated array - by default in ascending order according to UTF-16 code units values
// if the comparison function returns -1, it places the first item before the second, opposite for 1, and remains unchanged for 0
let sortArrayMethod = [1, "louis", 9, 45, 900, 90, "winston"].sort() // --> returns --> [ 1, 45, 9, 90, 900, 'louis', 'winston' ]
let sortArrayMethodAscendingNumbers = [9, 80, 10, 20, 5, 70].sort((a, b) => a - b) // --> returns --> [ 5, 9, 10, 20, 70, 80 ]
let sortArrayMethodDescendingNumbers = [9, 80, 10, 20, 5, 70].sort((a, b) => b - a) // --> returns --> [ 80, 70, 20, 10, 9, 5 ]

// .forEach() performs a function "for each" element of an array -- returns nothing, but mutates the array
[1, 2, 3, 4, 5].forEach((num, index, array) => array[index] = num * 2); // --> doubles the elements in the array, returns nothing
["dylan", "louis", "winston"].forEach((word, index, dylan) => dylan[index] += "extra"); // --> appends "extra", returns nothing
["Iron", "Super", "Ant", "Aqua"].forEach((name, index) => originalArr[index] = `${name}man`) // --> appends "man", returns nothing
function expandedEachExamples() {
    const wordarr = ["dylan", "louis", "winston"];
    wordarr.forEach((word, index, dylan) => dylan[index] += "extra");
    console.log(wordarr); // --> ["dylanextra", "louisextra", "winstonextra"]

    const originalArr = ["Iron", "Super", "Ant", "Aqua"];
    originalArr.forEach((name, index) => originalArr[index] = `${name}man`);
    console.log( "Overridden: %s", originalArr ); // -->  Overridden: [ 'Ironman', 'Superman', 'Antman', 'Aquaman' ]

    const numArr = [1, 2, 3, 4, 5];
    numArr.forEach((num, index, array) => array[index] = num * 2);
    console.log(numArr); } // --> [ 2, 4, 6, 8, 10 ]



// ------ COMMON REGEX ------ //
let onlyLowerCaseAlphabet = ("Dylan King SAYS: HELLO World!").replace(/[^a-z]/g, ""); // --> returns --> "ylaningorld"

/* <------> Document Object Model Manipulation <------> */

// ::: NOTABLE CONCEPTS :::
// Event Listeners
// Event Loop - web workers
// Timers
// Debouncing 
// All node objects (e.g Element, Attr, Text etc...) inherit properties and methods from a primary Node object. These properties and methods are the baseline values and functions for manipulating, inspecting, and traversing the DOM
// Every node has a nodeType and nodeName property that is inherited from Node -- EX: Text nodes have a nodeType code of 3 and nodeName value of '#text'

// ::: NODE PROPERTIES :::
/*
childNodes
firstChild
lastChild
nextSibling
nodeName
nodeType
nodeValue
parentNode
previousSibling
Node Methods:
appendChild()
cloneNode()
compareDocumentPosition()
contains()
hasChildNodes()
insertBefore()
isEqualNode()
removeChild()
replaceChild()
Document Methods:

document.createElement()
document.createTextNode()
HTML * Element Properties:

innerHTML
outerHTML
textContent
innerText
outerText
firstElementChild
lastElementChild
nextElementChild
previousElementChild
children
HTML element Methods:

insertAdjacentHTML()

*/

// Working with the DOM is like working with regular objects. It has and inherits properties, values, and methods.

createElement()
createTextNode()

// CREATE an element and store it into memory with a variable
const createElementVar = document.createElement('div');

// SET the inner HTML of an element
parentElement.innerHTML = '<p>This is a paragraph which will placed within the parent element</p>';

// INSERT an element into the DOM
document.body.appendChild(elementToAppend);
document.body.prepend(elementToAppend);

// INSERTS a given element node at a given position relative to the element it is invoked upon
Element.insertAdjacentElement(position, element)
// 'beforebegin': Before the targetElement itself
// 'afterbegin': Just inside the targetElement, before its first child.
// 'beforeend': Just inside the targetElement, after its last child.
// 'afterend': After the targetElement itself.

// add event listener
document.addEventListener(type, listener); // sketchbox.addEventListener('click', function);

// .querySelector(selectors) returns a specific(or first) element specified by the selector
let selectedElements = document.querySelector("selectors"); // stores a reference to the first element according to the selectors

// .querySelectorAll(selectors)returns all elements specified by the selectors
let selectedElementsAll = document.querySelectorAll("selectors"); // stores a reference to all elements according to the selector





// sets a variable to all of the divs (just the ones created within this function, maybe? unsure) let squares = board.querySelectorAll("div");
squares.forEach((div) => div.remove()); // removes all of the divs from the board so that if we change the size they are recreated properly


// STYLE background
document.body.style.backgroundColor = "blue";

// get the first link on a page
let firstLink = document.body.getElementsByTagName("a")[0];

// get an element according to its ID -- queryselector is better
let getElementById = document.getElementById("element id goes here");

// get an element according to its class -- queryselector is better
let getElementsByClassName = document.getElementsByClassName("class name goes here");

// style an element
let elementStyle = element.style.color = "magenta";

// returns the amount of each element type
function count(elementSelector) {
    return document.querySelectorAll(elementSelector).length;
}; 

// adds an event listener for a click and calls a function with log a message to the console
window.addEventListener("click", () => { // window is an object provided by the browser by default
console.log("You knocked?");
});

// behaviour for a button which can only be clicked once
let button = document.querySelector("button");
  function once() {
    console.log("Done.");
    button.removeEventListener("click", once);
}
button.addEventListener("click", once);