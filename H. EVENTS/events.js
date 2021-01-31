

//HOMEWORK DYNAMIC TABLE

let buttonForSubmit=document.getElementById("btnSubmit");
let div=document.getElementById("divTable");

buttonForSubmit.addEventListener('click', function(event){
    event.preventDefault();
    let rowsUser = document.getElementById("row").value;
    let coloumnUser = document.getElementById("coloumn").value;
//creating table
    let table = document.createElement('table');
    for (let i = 1; i <= rowsUser; i++){

        let trows = document.createElement('tr'); 

            for (let j = 1; j <= coloumnUser ; j++){
            
            let tcoloumn = document.createElement('td');
            tcoloumn.innerText = ('Row ' + j + 'Col ' + i);
            trows.appendChild(tcoloumn);
            }

            table.appendChild(trows);
            table.setAttribute("border", "3");
        
    }
    div.appendChild(table);

}, false)

// //EXERCISE one
let myButton = document.getElementById("myBtn");
myButton.addEventListener('click',function(){
    alert ("Hello Ljubica");
},false)

//EXERCISE TWO
let pargraphButton = document.getElementById("btnPara");
pargraphButton.addEventListener('click', function(){
    let myParagraph = document.getElementById("myParagraph");
    myParagraph.style.color = "red";
    myParagraph.style.backgroundColor= "blue";
    myParagraph.style.fontSize = "34px";
})



//EXERCISE THREE - NE MI IZLEGUVA !!!!!!


let firstName = document.getElementById("myname");
let secondName = document.getElementById("surname");
let userEmail = document.getElementById("mail");
let userPass = document.getElementById("pass");
let btnUser = document.getElementById("submit");
let result = document.getElementById("string");

function getUserInfo(firstName, secondName, userEmail, userPass){
   
    return `Firstname: ${firstName}
    Lastname: ${secondName}
    Username: ${userEmail}
    Password: ${userPass}`;

}
btnUser.addEventListener('click', function(){
    
    let inputFirstname = firstName.value;
    let inputLastname = secondName.value;
    let inputUsermail = userEmail.value;
    let inputPassword = userPass.value;

    let userInfo = getUserInfo(inputFirstname,inputLastname,inputUsermail,inputPassword);

    result.innerText = userInfo;
    let firstName = '';
    let secondName = '';
    let userEmail = '';
    let userPass ='';
}, false)


//EXERCISES FROM CLASS
function onEnterPressed(event) {
    console.log(event);

    if (event.keyCode == 65) {
    alert(`Button A has been pressed ${event.target.value}`)
    }
    else {
        console.log(`${event.target.value}`);
    }
}

document.getElementById("SEDC").addEventListener("keyup",onEnterPressed);

function onEnterPressed(event) {
    console.log(event);

    if (event.keyCode == 97) {
    alert(`Button A has been pressed ${event.target.value}`)
    }
    else {
        console.log(`${event.target.value}`);
    }
}

document.getElementById("SEDC").addEventListener("keydown",onEnterPressed);
//keydown podrazbira deka kopceto e pritisnato
//keyup podrazbira deka kopceto e otpusteno

function setBorder(event){
    event.target.style.border="3px solid red";
}

let btnHelloUser = document.getElementById("helloButton");
btnHelloUser.addEventListener("mouseover", setBorder);

