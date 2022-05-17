let digitButton = document.querySelectorAll("button")
const createDisplay = document.createElement('div');
createDisplay.innerHTML = `<h3>...</h3>`;
document.body.prepend(createDisplay);

let tempArray = [];
let tempAnswer = 0;
let equalAnswer = 0;
let operatorInUse = false;
let digit = 0;

/*
This was tough. Some edge cases I'm not bothering to address because it was really the core of the functionality I struggled with and after figuring that out on my own I'm satisfied with having learnt from this and want to move onto the rest of the odin project.

It was a struggle to pass multiple arrays around, one of which was cleared often, and having everything sho up properly on the display adn evalutate properly while respecting the order of operations. I'd make more thorough notes if this wasn't a project nobody will ever see. If you're reading this somehow, I hope you're having a nice day. :)
*/

function setDigit(number) {
    operatorInUse = false;
    digit += number;
    tempArray.push(number);
    createDisplay.innerHTML = `<h3>${tempArray.join('')}</h3>`;
}

function setOperator(operatorChosen) {
    tempAnswer = eval(tempArray.join(''));
    createDisplay.innerHTML = `<h3>${tempAnswer}${operatorChosen}</h3>`;
    if (operatorInUse == false) {
        tempArray.push(operatorChosen);
        operatorInUse = true;
    } else {
        console.log("bitch");
    }
};

function giveAnswer() {
    if (operatorInUse) {
    } else {
        equalAnswer = eval(tempArray.join('')) // I know I shouldn't use eval, but for the purposes of this beginner lesson it felt fine. I am assuming that because I'm only allowing them to enter numbers that the potential for exploitation would be lessened since they couldn't like, execute code or something. Maybe if they enter it in binnary? lmao idk. Next time I'll be using a better option but for this I'm cool with it. Onto the next project.
        createDisplay.innerHTML = `<h3>${equalAnswer}</h3>`;
        digit = '';
        tempArray = [equalAnswer];
    }
}

function clearOut() {
    createDisplay.innerHTML = `<h3>...</h3>`;
    tempArray = [];
    tempAnswer = 0;
    equalAnswer = 0;
    operatorInUse = false;
    digit = 0;
}

//unused / failure stuff

// if (operator == '') {
//     console.log("do nothing")
// }
// else if (operator == '+') {
//     tempArray.reduce((x, y) => x + y)
//     console.log(`${tempArray} has been reduced with addition +`);
// } 
// else if (operator == '-') {
//     tempArray.reduce((x, y) => x - y)
//     console.log(`${tempArray} has been reduced with subtraction -`);
// } 
// else if (operator == '*') {
//     tempArray.reduce((x, y) => x * y)
//     console.log(`${tempArray} has been reduced with subtraction *`);
// }
// else if (operator == '/') {
//     tempArray.reduce((x, y) => x / y)
//     console.log(`${tempArray} has been reduced with subtraction /`);
// }





// let display = 0;
// let digit = '';
// let operator = '';
// let tempArray = [];
// let joinedArray = [];
// let operatorInUse = false;
// let currentAnswer = 0;
// let operatorHasBeenUsed = false



// function setDigit(number) { // first attempt, failed
    
//     operatorInUse = false;
//     digit += '' + number;
//     createDisplay.innerHTML = `<h3>Current number is: ${digit}</h3>`;
    
    
// };


// function setDigit(number) { // second attempt, still failed
//     console.log(`The number selected is ${number}`);
//     // operatorInUse = false;
//     if (operatorHasBeenUsed == false) { // if no operator has been used, add number to tempArray(step 1)
//         //NEED TO BE A FUCKING DIGIT ADDED THING
//         tempArray.push(number);
//     }
//     else { // push the new number into tempArray, evaluate that and store it in currentAnswer, and clear the temp array(step 3)
//         tempArray.push(number);
//         currentAnswer = eval(tempArray.join('')); // 6
//         tempArray = []; // 

//     }
    
// }

// function setOperator(operatorChosen) {
    
//     if (!operatorInUse) {
//         tempArray.push(digit)
//         createDisplay.innerHTML = `<h3>Current number is: ${digit} ${operatorChosen}</h3>`;
//         // joinedArray = eval(tempArray.join(''));
//         tempArray.push(operatorChosen)
//         digit = '';
//         operatorChosen = '';
//         operatorInUse = true;
//     } else {
//         console.log("Select a number instead!")
//     }
    
// };

// function setOperator(operatorChosen) { // second attempt, still failed
//     if (operatorHasBeenUsed == false) { // if no operator has been used before, add it to tempArray (step 2)
//         tempArray.push(operatorChosen)
//         operatorHasBeenUsed = true
//     }
//     else { // push the current answer back into the temp array, then push the operator in also (step 4) ((THEN LOOP ELSES UNTIL EQUAL))
//         tempArray.push(currentAnswer)
//         tempArray.push(operatorChosen)
        
//     }
    
// }

// function giveAnswer() { // second attempt, still failed
//     console.log(`The current answer is: ${currentAnswer}`);
// }

// // function giveAnswer() {
// //     if (!operatorInUse) {
// //         tempArray.push(digit)
// //         console.log(`the temp array is ${tempArray}`);
// //         // we need to nest arrays or maybe use an object so that PEMDAS is respected whenever we eval the array
// //         joinedArray = eval(tempArray.join(''));
// //         console.log(`the joined array is ${joinedArray}`);
// //         // currentAnswer = eval(tempArray.join(''));
// //         // console.log(currentAnswer);
        
// //         createDisplay.innerHTML = `<h3>Current number is: ${joinedArray}</h3>`;
// //         digit = '';
// //         operatorChosen = '';
// //         operatorInUse = false;
        
        
// //     }
// // };

// function clearOut() {
//     display = 0;
//     digit = '';
//     operator = '';
//     tempArray = [];
//     joinedArray = [];
//     // divideZeroCheck = false;
//     createDisplay.innerHTML = `<h3>Current number is:   </h3>`;
// };