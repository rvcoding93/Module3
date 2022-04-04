








// Template Literals, Template Strings
// const empltyTemplateLiteral = ``;

// const poem = `
//     heights by great men reached and kept
//     were not obtained by sudden flight, but
//     they, were their companions slept were
//     toiling upward in the night.
// `;

// const firstName = "Will";
// const lastName = "Smith";

// const fullName = `${firstName} ${lastName}`; //${}

// //Spread Operator
// const actors = ["Denzel Washington", "Morgan Freeman"];
// const actresses = ["Halle Berry", "Nia Long"];

// const hollywood = [...actors, ...actresses] // ... is the syntax for spread operators 
// const reversehollywood = [...actresses, ...actors] // ... is the syntax for spread operators 


// console.log(hollywood)
// console.log(reversehollywood)


//Destructuring 
// const actors = ["Denzel Washington", "Morgan Freeman"];
// const actresses = ["Halle Berry", "Nia Long"];
// const hollywood = [...actors,...actresses];

// // const firstActor = actors [0];
// const [firstActor, secondActor] = actresses;
// //const firstActress = actresses[0]
// const [firstActress] = actresses;
// const [actorOne, ...rest] = hollywood;

// console.log(actorOne);
// console.log(rest);



// console.log(firstActor);
// console.log(secondActor)

/**
 * Write a function that takes in 2 arrays and 
 * combines them into a single array.============================================================================================================================ SPREAD OPERATOR IS THE SOLUTION
 * =============================================================================================================================================================================================
 * Then, it should save the value of the first 3 values of 
 * the new array into new variables.  * =========================================================================================================================== DECONSTRUCTOR IS THE SOLUTION
 *==============================================================================================================================================================================================
 * 
 * The remaining values of the combined array should be saved into 
 * a new variable. ================================================================================================================================================= DECONSTRUCTOR IS THE SOLUTION
  ===============================================================================================================================================================================================

 * All of the values in the remaining values variable you created should have an 's' added to them.  ============================================================== DECONSTRUCTOR IS THE SOLUTION
=================================================================================================================================================================================================
 * Finally, all of the remaining values that were saved into 
 * that variable should be printed to the screen within the 
 * following sentence:
 * 
 * "The current value is [REMAINING VAL?UE]"
 * and so on until all of the remaining values have been printed in that sentence
 */



// ASSIGNMENT BELOW
// //==========================================================================================================================================================
// function assignment() {

// const choice = ['smack', 'slap', 'rocked', 'whatDidTheFiveFingersSayToTheFace' ];
// const result = ['consequences','whoops', 'getRocked', 'august'];
// //======================


// const stage = [...choice, ...result];
// // console.log (stage)
// //======================


// const [x, y, z,...stage1] = stage;
// const s = "s";
// //======================

// const consequences = `${stage1}s`; //${}

// console.log (x, y, z);
// console.log (stage);
// console.log(stage1);
// console.log (consequences);



// }

// console.log (assignment())




// function arryMachine (arr1, arr2) {
//     const combinedArray = [...arr1,...arr2];
//     const [val1, val2, val3, ...remainingVals] = combinedArray;

//     console.log (combinedArray)
//     // Map will iterate over all array values
//     // then it will modify the values with what 
//     // you do in the function
//     // Finally, it'll return an array with the modified
//     // values 
//     combinedArray = combinedArray.map((currentValue) => {
//             //return `${currentValue}s`
//             return currentValue*5;
//     })
//     console.log(combinedArray);
// }

// arrayMachine([1,2,3,4,5], [6,7,8,9,10])
// ;
// //==========================================================================================================================================================

//JavaScript Class Inheritance 

//=====Classes are written as functions with key:value pairs inside of them. they are called/created using the THIS.(DOT) syntax. Functions inside a class can be made the same way THIS.*FUNCTION NAME HERE*=====

// const rankings = {
//     first: "Jimmy",
//     second: "Sandy"
// };

// rankings.first = "Billy"  ======//using the variable name with DOT NOTATION (rankings.*METHOD*) we can change indipendent object (defined by variable name ) inside the class SEE EXAMPLE ABOVE======

// console.log(rankings.first);





//=====================ES5 Method for Classes BELOW=================
// function Car() {
//     this.running = false
//     this.color = undefined

//     this.startEngine = function () {
//         this.running = true;
//     }
// }

// const ferrari = new Car();
// const lambo = new Car();


// ferrari.startEngine();


// console.log(ferrari);
// console.log(lambo);

//=========================  ES6 Way BELOW =============================

class Car {
    constructor (paint = "Gray") {
     this.running = false;
     this.color = paint;
 }
    startEngine() {
        this.running = true;
    }
}

// const ferrari = new Car("red");
// ferrari.startEngine();
// console.log(ferrari);

class Tesla extends Car {   // Extends - adds to an existing class  (following syntax below), inherits default traits from class it is extending
    constructor(){
        super("Black");
        this.isElectric = true;
    }
    stopEngine () {
        this.running=false;
    }
}      

class honda extends Car {
    constructor (){
        super("Grey");
        this.isElectric = false;
    }
}

const ride = new Tesla();       // logs: Tesla { running: false, color: 'Black' }
ride.startEngine();
console.log(ride);
ride.stopEngine();
console.log(ride);