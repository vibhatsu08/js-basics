/*//normal array
var fruits = ["banana", "apple", "pear"]; //method 1
var fruits = new Array("banana", "apple", "pear");
console.log(fruits);

//using the concat method in arrays
var arr1 = new Array("banana", "apple", "pear");
var arr2 = new Array("soup", "burger", "pizza");
var newArr = arr1.concat(arr2);
console.log(newArr);

//javascript array every method
function isBigEnough(element, index, array){
    return (element >= 10);
}

var passed = ["12", "9", "144", "15", "5"].every(isBigEnough);
console.log("Results of the first test: " + passed);
var passed = ["12", "19", "144", "15", "115"].every(isBigEnough);
console.log("Results of the first test: " + passed);

//javascript filter method
function isPassedElements(element, index, array){
    return (element >= 10);
}

var passedElements = [12, 9, 144 ,15, 8].filter(isPassedElements);
console.log("Elements that've passed the first test: " + passedElements);
var passedElements = [12, 90, 879, 90, 56].filter(isPassedElements);
console.log("Elements that've passed the second test: " + passedElements);

//javascript program to use the forEach method in array.
function isEachElement(element, index, array){
    console.log("<br/>[" + index + "]: " + element);
}
[12, 5, 8, 30, 4].forEach(isEachElement);

//javascript program to find the index of the element using the indexOf() method
var index = [12, 5, 8, 90, 76].indexOf(8);
console.log("8 is at position: " + index);
var index = [12, 5, 8, 90, 76].indexOf(13);
console.log("13 is at position: " + index);

//javascript program to use the .join() method
var arr = new Array("apple", "banana", "pear");
var str = arr.join();
console.log(str);
var str = arr.join(" / ");
console.log(str);
var str = arr.join(", ");
console.log(str);
var str = arr.join(" * ");
console.log(str);

//javascript program to use the lastIndexOf() method
var arr = new Array(12, 5, 89, 2, 5, 124, 125);
var lastIndex = arr.lastIndexOf(5);
console.log(lastIndex);

//javascript program to use the .map() method
var arr = [1, 4, 9, 25, 26];
var newArr = arr.map(Math.sqrt);
console.log(newArr);

//javascript program to use the pop method and the push method
var arr = [12, 7, 89, 09, 45];
console.log(arr.pop()); //pop method
console.log(arr.push(13)); //push method

//javascript program to use the .reduce function
function reduceFunction(a, b){
    return a + b;
}
var arr = [1, 2, 3, 4, 5];
var sum = arr.reduce(reduceFunction);
console.log(sum);

var arr = [1, 2, 3, 4, 5];
var reverseArr = arr.reverse();
console.log(reverseArr);

//javascript program to use the shift method
var arr = [1, 2, 3, 4, 5];
var shiftArr = arr.shift();
console.log(shiftArr);

//javascript program to use the unshift method
var arr = [1, 2, 3, 4, 5];
var unshiftArr = arr.unshift(10);
console.log(unshiftArr);

//javascript program to use the slice method
var arr = [1, 2, 3, 4, 5];
var newArr = arr.slice(1, 4);
console.log(newArr);

//javascript program to use the .some method
function isSomeFunction(element, index, array){
    return (element <= 10);
}

var arr = [12, 43, 19, 87, 8, 90, 12, 15, 67];
var newArr = arr.some(isSomeFunction);
console.log(newArr);*/

//javascript program to use the sort method
var arr = [12, 43, 19, 87, 8, 90, 12, 15, 67];
var newArr = arr.sort();
console.log(newArr);
