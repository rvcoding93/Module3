// /**
//  * Julius Caesar protected his confidential information by encrypting it using a cipher. 
//  * Caesar's cipher shifts each letter by a number of letters. 
//  *
//  * =====If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. 
//  * 
//  * =====In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.
//  * 
//  * Write a function that takes in a string and an integer that performs a Caesar Cipher encryption
//  */


// // function caesarCipher() {

// // let abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// // const blankArr = []

// //     for(let num = 0;num < 26; num++){
// //         alphabet = blankArr.push(num)
// //         console.log(blankArr)
// //     }






// // console.log(cesarCipher(4))


// // console.log("letter encountered: c:", alphabetIndexes["c"]);
// //     console.log("ENCRYPTED LETTER:", alphabet.charAt(alphabetIndexes["C"] + inputNumber));
// //     //the method used above ".charAt" finds the index of the passed in number for the word passed in as well.

// function ceasarCipher (inputString, inputNumber) {  //cat <<<<<<<<<<<<<===============
//     const alphabet = "abcdefghijklmnopqrstuvwxyz";  // ((passedThroughNumber + 25) % 25)) you are adding the passed through number 
//                                                     //  TO the 25  which is the alphabet max, anything over 25 will me modular to 25 
//                                                     //  resetting back at 0 counting forward with the remainder
    
//     const alphabetIndexes = {
//         a: 0, b: 1, c:2, d:3, e:4, f:5, g:6, h:7, i:8, j:9, k:10, l:11, m:12, n:13, o:14,
//         p:15, q:16, r:17, s:18, t:19, u:20, v:21, w:22, x:23, y:23, z:25,
//     };

//     let currentEncryptedCharacter = null;
//     let encryptedCharacterIndex = null;
//     let currentCharacter = null;
//     let encryptedString = "";

//     for (let currentInputStringIndex = 0; currentInputStringIndex < inputString.length; currentInputStringIndex++) {
//         currentCharacter = inputString.charAt(currentInputStringIndex); // current character is C from CAT
//         encryptedCharacterIndex = (alphabetIndexes[currentCharacter] + inputNumber) % 25; // 2 + 5 = 7 based off passed in 5 called below (this note does not apply to modular addition)
//         currentEncryptedCharacter = alphabet.charAt(encryptedCharacterIndex); // 
//         encryptedString += currentEncryptedCharacter;
//     }

//         console.log(encryptedString)
    
// }

// // ceasarCipher("come",8)
// // ceasarCipher("over",4)
// // ceasarCipher("to",8)
// // ceasarCipher("my",4)
// // ceasarCipher("house",8)
// ceasarCipher("jerk",2)


// //currentInputStringIndex % Array.length // this formula allows you to count beyond the limitations of your array. 
//                                          // if you go over 25 the REMAINDER(%) over 25 will loop back to the beginning of the index

// // LOOK UP " REGEX " ---- Regular Expression

