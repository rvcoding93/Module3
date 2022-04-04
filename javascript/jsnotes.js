//: : : : :: Variables : : : : ://///
// var firstName = "Troy"

// {
//     car firstName = "Jerry";
//     console.log(firstName);
//     // this block of code is "scoped" from everything outside of it 
// }

// const API_KEY = "kGfGfGfg"
// if (true) {
//     const firstName= "Jerry";
//     console.log(firstName); //Jerry
//     console.log(API_KEY); //APIKEY
//     if (True) {
//         let lastName = "Patterson";
//         console.log(lastName); // Patterson
//         console.log(firstName); // Jerry
//     }
//     console.log(lastName); // Reference Error Undefined
// }

// console.log(API_KEY) // API Key

// following the code above, the block in the brackets is "scoped" and individualized from the rest of the code block outside of the brackets


//::::::ARROW FUNCTIONS ::::::

// }


//  const sayName = function (name) {
//      console.log(name);

// const sayName = name => {
//     return name
// }

// const sayNameInLineReturn = (name) => name;

// console.log(sayName("Troy"));
// console.log(sayNameInLineReturn("Kendra"));


// //Using a Default AGE setting of 21, this is known as a DEFAULT PARAMETER
// const personInTheClubAge = (age = 21) => {
//     console.log(age);
//}

//Notice below how the default black is applied with the default 4 vs how it is changed when info is passed through on the second example
// const howManyWheels = (color = "Black", wheels = 4) => {
//     console.log(color,wheels);
// }
// howManyWheels(); 
// howManyWheels("red", 18);



// Create a function using the arrow function syntax that multiplies a given number by 3 
// if no multiplier is passed to it and by whatever the multiplier is in the case that 
// something is passed in for it. Do not use any conditional methods like if or switch. 
// Lastly, print the result to the 10 times.
const multiplier = (a,b = 3) => a*b;

for ( i=0; i<10; i++) {
   console.log(multiplier(5))


   console.log(multiplier(4,9))

}



/* const sayName = (name) => {
    console.log(name)
}   */

//  const sayNameInLineReturn = (name) => name;

//  const sayNameWithoutParenthesis = name => name;

//  sayName("Troy")




//NOTES
//- left of arrow are parameters, right is code block 





// const names = ["Troy","Tory2","Troy3","Troy4","Troy5"]

// const [firstName, secondName] = names;

// console.log(secondName);

//=======OBJECT DESTRUCTURING======================================================================
// let player = {
//     name : "Troy",
//     age: Infinity,
//     location: "Houston",
//     sport:"Life"
// };

// let { name, sport } = player ;  //<<<THIS is how you destructure an object *** LET > {} > = > variableName***

// console.log(sport);

// sport = "coding"
// console.log(sport);

// console.log(player)




