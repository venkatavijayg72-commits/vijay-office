//1.	Remove duplicates from the array. ex: [1,2,3,2,4,3,5]

let arr= [1,2,3,2,4,3,5];

function removeDuplicates(arr) {
  return [new Set(arr)];
}
console.log("removeDuplicates:",removeDuplicates(arr));


//2.	Find the longest word. Ex: [“apple”, “banana”, “grapes”, “Watermelon”]

let fruits = ["apple", "banana", "grapes", "Watermelon"];
let longestWord = fruits.reduce((a, b) => (a.length >= b.length ? a : b));

console.log("longest word:" + longestWord); 



//3.	Convert string to array. Ex: “JavaScript is fun”


let str = "JavaScript is fun";
let word = str.split(" ");

console.log("after coverting string to array:" + word); 


