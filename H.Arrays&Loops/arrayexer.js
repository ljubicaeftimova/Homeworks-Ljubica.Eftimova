//ARRAYS HOMEWORK 1

function tellStory(x,y,z){
    let myArray=[];
    myArray[0]=x;
    myArray[1]=y;
    myArray[2]=z;

    console.log ("This is", myArray[0], ".", myArray[0],"is a nice person. Today they are", myArray[1], ". They are ", myArray[2], "all day. The end.");
}

let userName = prompt("Enter a name");
let userMood = prompt("Enter a mood");
let userActivity = prompt("Enter activity");

tellStory(userName,userMood,userActivity);




//ARRAYS HOMEWORK 2

function sumArray(a,b,c,d,e) {

        let numberArray=[];

        numberArray[0]=a;
        numberArray[1]=b;
        numberArray[2]=c;
        numberArray[3]=d;
        numberArray[4]=e;

        let sum = numberArray[0]+numberArray[1]+numberArray[2]+numberArray[3]+numberArray[4];
        console.log(sum);

}

let numOne= parseInt(prompt("please enter number one"));
let numSecond= parseInt(prompt("please enter number two"));
let numThird= parseInt(prompt("please enter number three"));
let numForth= parseInt(prompt("please enter number four"));
let numFifth= parseInt(prompt("please enter number five"));

sumArray(numOne, numSecond,numThird, numForth, numFifth);


