

// //HOMEWORK 1

function stringArray(str){

for(let i=0; i < str.length; i++) {
      if (str[i] === str[str.length - 1]) {
        document.write(str[i]+ ".");
      } 
       else {     
         document.write(str[i] + " ");
       }
    }

 }
 stringArray(["JavaScript", "is", "the", "most", "popular", "programming","language"]);


//HOMEWORK 2

for (let i=1; i<21; i++){
    if(i % 2 === 0){
        document.write(i + "<br>" );
    } else {
        document.write(i + " ");
    }

}
//HOMEWORK 3
function Sum(arr) {

let biggestNumber=0;
let smallestNumber=arr[0];

for (let i = 0; i < arr.length; i++) {

    if (arr[i] > biggestNumber){
    biggestNumber = arr[i];}

    if(arr[i] < smallestNumber){
    smallestNumber=arr[i]; }

    }
    console.log(biggestNumber+smallestNumber);
}

Sum([1, 2, 3, 10, 9, 23, 21, 11, 20, 15, 16.1, 0.5]);

//HOMEWORK 4

 function merge(arrOne, arrTwo) {

    let mergeArray=[];
    let smallerLength;

    if (arrOne.length<=arrTwo.length){
        smallerLength=arrOne.length;
    }
    else {
        smallerLength=arrTwo.length;
  }

     for (let i=0; i<smallerLength; i++) {

        mergeArray[i]= ([(i+1) + " " + arrOne[i] + " "+ arrTwo[i]]);

     }
     console.log(mergeArray);
     
    }
    

 let nameArray=["Ljubica", "Leonardo", "Penelope"];
 let surnameArray=["Eftimova", "Dicaprio", "Cruz","Jackson"];
  merge(nameArray, surnameArray);
  

//loops STUDENT EXERCISE 1

function sumPow(num1, num2){

    let result = 0;
    let i = num1;

    for ( let i=num1; i<=num2; i++){
            result += Math.pow(i, 2);
    }
    return result;
    }
    
    
console.log(sumPow(101, 150));

//STUDENT EXERCISE ONE

function numberCount(number, array) {
    let counter = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] === number){
            counter++;
        }
    }
    return counter;
}
let inputNumber = parseInt(prompt("Enter a single-digit number:"));
let testArray = [1,2,2,3,4,5,6,4,3,7,8,1,3,9,1,8,4,0,6,0,0];
console.log(`There are ${numberCount(inputNumber, testArray)} occurences of ${inputNumber} in the array!`);

//STUDENT EXERCISE TWO

function findNumber(array, type){
    let newArray = [];
    if(type === "even"){
       for (let i of array) {
           if(i % 2 === 0){
               newArray.push(i);
           }
       } 
       console.log(newArray)
    } else if(type === "odd"){
        for (let j of array) {
            if(j % 2 !== 0){
                newArray.push(j);
            }
        } 
        console.log(newArray)
    } else {
        console.log("The type was not correct. Please enter odd or even");
        return null;
    }
    
}

findNumber([1,2,8,10,11,3,5,7,6,4,18,20,14,100,101], "even");







   