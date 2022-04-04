/* Activity - Looping through Array
- Create an array which consists of few names of your friends and ***000**
- use a for loop to iterate through the array and print out the contents.
*/

// let names = ["Jason", "Vic", "Mike", "Jasper"]

// for(let i = 0; i < names.length;++i ){
//         console.log(names[i]);
//     }

/*
Activity - Sum of Given Integers
- Compute the sum of the two given integers
- If the sum is in the range 50..80 return 65 otherwise return 80
*/

// const x = [10,20,30,40,50,60,70,80,90];
// const y = [1,2,3,4,5,6,7,8,9];
// let total = x + y;

// while total < 50 {
//     console.log sum;
// };

// const letter = ['a','A','e','E','I','i','o','O','u','U'];
// var inputUser = prompt("What is your word?", "enter word here..");
// var x = (prompt(message? "What is your word..?"));

// function letterCheck (letter)
// //     {prompt = ("enter your word below" , "what is your word?")}
// //  if input includes(v) {
// //     return  "There is a vowel present!";
// //     } 
//      {
//         if contains(v) return true
//     }  

// function vowelCheck(letter){
//     const vowels = {
//         "a": true,
//         "e": true,
//         "i": true,
//         "o": true,
//         "u": true,
//     };
//     if (vowels[letter]){
//         console.log (true);
//     } else {
//         console.log(false);
//     }
// }

// vowelCheck("a")
// vowelCheck("t")

// class pizzaOrders {

//     function pizzaPieToppings(orderPie){
//         const toppings = {
//             "anchovies": true,
//             "pineapple": true,
//             "pepperoni": true,
//             "pepper": true,
//             "sausage": true,
//             "garlic": true,
//         };
//         if (toppings[orderPie]){
//             console.log (true);
//         } else {
//             console.log(false);
//         }
//     }


// } 
    // const newToppings = {
    //     function.newOrder(orderDough,orderPineapple,orderHeartAttack)
    //     this.dough = dough
    //     this.newtoppings = dough, pineapple, heartAttack)

    // }
// pizzaPieToppings("pineapple")
// pizzaPieToppings("pepperoni")
// pizzaPieToppings("apples")

function pizzaOrder (orderDough, topping, additionalTopping, additionalTopping1, additionalTopping2, additionalTopping3) {
    this.dough = orderDough;
    this.topping = topping;
    this.additionalTopping = additionalTopping;
    this.additionalTopping1 = additionalTopping1;
    this.additionalTopping2 = additionalTopping2;
    this.additionalTopping3 = additionalTopping3;


}

const pizzaOrder1 = new pizzaOrder ("flour", "pineapple", "skittles", "chicken", "heartAttack", "bbqSauce",)


console.log (pizzaOrder1);
    