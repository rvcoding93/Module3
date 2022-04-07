// PRACTICE QUESTIONS 

/**
 * Write a function that defines a variable called 
 * firstName, then prints it to the terminal screen 
 * 5 times.
 */

// function nameFunction (firstName) {
//     for ( let i = 0; i < 5; i++ ){
//     firstName = ["firstName"]; // brackets are just for green flare in the console, will work without them.
//     console.log(firstName);
//     }
// }
// nameFunction ()



/**
 * Write a function that defines a variable called 
 * isWorking that is assigned a boolean. Print different 
 * messages based on the value of isWorking.
 */

// function tru () {
//     let isWorking = true




//     console.log ();
// }




/**
 * Write a function that takes in a number and prints 
 * that number multiplied by 20
 */

// function reprint (num) {
//     num = num*20;
//     console.log(num)
// }

// reprint(20)


/**
 * Write a function that takes in a string and prints 
 * out the 3rd letter. If the string doesn't have a 3rd 
 * letter print that it doesn't have a 3rd letter in the 
 * string.
 */

// function third (input) {
//     input = input.indexOf(2)
//     if (input <0) {
//     console.log("there are less than 3 letters..");
//     } else {
//         console.log("Cool, you can count past 3")
//     }
// }

// third("bugg")




/**
 * Write a function takes in an array of numbers and 
 * print out the 5th number in the array multiplied 
 * by 20. Account for the edge case of there not being 
 * a fifth number.
 */

// function fifth (num) {
//     numArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
//     for (let i = 0 ; i <5 ; i++) {
//         num = numArr.length(5)
//         console.log(num)
//     }
// }

// fifth()



/**
 * Write a function that takes in a string and prints 
 * a boolean if the first and last characters are the same 
 * or not.
 */




/**
 * Fizz Buzz
 * =============
 * start with the number one, and count upwards.
 * If any number is divisible by 3, it is replaced with the word 
 * Fizz and any number divisible by 5 by the word buzz.
 * Numbers divisible by 15 become fizz buzz
 */

if (n / 3) % 0
if (n * 5) % 0


//==========================================================================================================

//Morning Algorithm Challenge 1
/**
 * Write a function that takes in a number (minutes), then 
 * converts it to seconds. Print "that is a lot of seconds" 
 * when the seconds is above 5000 seconds.
 */

function secCount (mins) {
    mins = mins * 60
    if (mins < 5000) {
        console.log(["you don't have much time.."]) // works without the array brackets, just adding for green flare in console
    } else {
        console.log(["that is a lot of seconds, you have time to go to Morehouse!"]) // works without the array brackets, just adding for green flare in console
    }
}

secCount (5)
secCount (10)
secCount (5000)


//Morning Algorithm Challenge 2
/**
 * Write a function that takes in an array of letters. 
 * Convert the array into an object that has 
 * each value as a key and its value should be true if it 
 * is a vowel or false if it is not. Print the object to 
 * the screen.
 */
 let vowels = ['a','e','i','o','u'];
 let numbers = [1,1,1,1,1]
 //let a, e, i, o, u;
 //[a,e,i,o,u] = [1,2,3,4,5]

 const letterVal = Object.assign(vowels,numbers);
 const [1,1,1,1,1] = letterVal
 //let vowel = Object.assign({a:1},{e:1},{i:1},{o:1},{u:1})
 //let letters = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
 //const noVal = [0]
// const letterNoVal = Object.assign(letters,noVal)
 //const totalVal = [letterNoVal + letterVal]


function converter (letterVal) {

    if (letterVal = undefined) {
        console.log(false)
    } else {
        console.log(true)
    }
}

converter()