// 1 task starts 
// function isPrime(number) {
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i == 0) {
//             return "tub emas";
//         }
//     }
//     return "tub";
// }
// console.log(isPrime(11)); 
// 1 task end

// 2 task starts
// let textarea = document.getElementById("textarea").value 
// let arr = textarea.split(" ").filter((item) => item !== "");

// console.log(arr.length);
// 3 task starts 

// let count = 0
// let count2 = 0
// function myFunction(e) {
//     e.preventDefault();
//     let vowels = ["a" , "e" , "i" , "o" , "u" , "o'"]
    
//     let input = document.getElementById("number").value
//     for (let key of input) {
//         if (vowels.includes(key)) {
//             count++
//     }else{
//         count2++
//     }
// }
// }
// console.log(count);
// console.log(count2);


// 4 task starts
// function replace(arr, k) {
//     let lastK = arr.splice(-k);
//     arr = lastK.concat(arr);
//     return arr;
// }
// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// let result = replace(arr, k);
// console.log(result);

// 5 task starts 
// let arr =  [2,3,1,2,4,3] ; 
// let total = 0
// let target = 7

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] + arr[j] == target) {
//            total++
//         }
//     }
// }
// console.log(total);
// 6 task starts

// function findPower(number) {
//     let usual = false 
//     for (let i = 0; i <= number; i++) {
//         let count = Math.pow(2, i)

//         if (count == number) {
//             return true
//         }
//     }
//     return usual

// }
// console.log(findPower(16));
// 6 task end 

// 7 task starts

// function isPalindromeNumber(arr) {
//     for (let i = 0; i < arr.length / 2; i++) {
//         if (arr[i] !== arr[arr.length - 1 - i]) {
//             return "Mos tushmaydi ";
//         }
//     }
//     return "Mos tushadi ";
// }

// console.log(isPalindromeNumber([1, 2, 2, 1]));
// console.log(isPalindromeNumber([1, 2, 3, 1])); 
// 7 task end

// 8 task starts
// let array = ["text", "world", "laptop"];
// let length = 0
// for (let i = 0; i < array.length; i++) {
//     length = array[i].length
//     console.log(`${array[i]} ${length}`);
// }
// 8 task end 

// 9 task starts
// function moveZeros(arr) {
//     const zeros = arr.filter(num => num === 0);
//     arr = arr.filter(num => num !== 0);
//     arr.push(...zeros);
//     return arr;
// }

// const arr = [0, 3, 0, 4, 3];
// const result = moveZeros(arr);
// console.log(result); 
// 9 task end

// 10 task starts
// function moveItems(arr1, arr2) {
//     const commonItems = arr1.filter(item => arr2.includes(item));
//     arr1 = arr1.filter(item => !commonItems.includes(item));
//     arr2 = arr2.filter(item => !commonItems.includes(item));
//     return commonItems;
// }
// const arr1 = [8, 3, 5, 1,2,4];
// const arr2 = [3, 5, 9,1];
// const result = moveItems(arr1, arr2);
// console.log(result); 
// 10 task end 