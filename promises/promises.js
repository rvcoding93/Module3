
/**
 * :::::::::::::PROMISES::::::::::::
 * An object that represents the eventual completion of 
 * an asynchronus operation and its result
 */
// const myFirstPromise = new Promise(function (resolve, reject) {
//     //GO DO SOME ASYNC WORK...
//     let gettingMarried = 'no'

//     setTimeout(function () {
//         if (gettingMarried === 'yes') {
//         //IF IT SUCCEEDS
//         resolve ('----DONE----')
//     } else {
//         //IF IT FAILS
//         reject ('----ERROR----');
//         }
//     }, 2500)
// });

// // PROMISE STATES: Pending, Fufilled (Results), Rejected (Error)
// console.log(myFirstPromise) // Before 

// myFirstPromise.then(function (result) {
//     console.log(result);
//     console.log(myFirstPromise);
// }, function(error) {
//     console.log(error);
//     console.log(myFirstPromise);
// });







// When something RETURNS a promise 
/**
 * ::::::: FETCHING DATA from an API
 */

// fetch('https://anapioficeandfire.com/api/characters/583').then(function (response) {
//     return response.json();
// })


fetch('https://anapioficeandfire.com/api/characters/583'),
then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data);
});

import fetch from 'node-fetch'
// //==========================================

// fetch("https://anapioficeandfire.com/api/characters/583"), then(function(response) {
//     return response.json();
// }).then(function (data) {
//     console.log(data);
// }); 