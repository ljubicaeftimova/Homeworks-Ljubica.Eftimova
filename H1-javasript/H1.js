let birthday = prompt("Внесете го вашиот датум на раѓање (MM/DD/YYYY).");
let convertedBirthday = birthday.match(/(\d\d)(\d\d)(\d\d\d\d)/);

let birthdate = new Date(convertedBirthday[3], convertedBirthday[1] - 1,  convertedBirthday[2]); 

let birthDay = birthdate.getDate();
let birthMonth = birthdate.getMonth()+1 ;
let birthYear = birthdate.getFullYear();

let todaydate = new Date();

let todayDay = todaydate.getDate();
let todayMonth = todaydate.getMonth()+1; 
let todayYear = todaydate.getFullYear();

//Difference calulations 
let ageDay = todayDay - birthDay;
let ageMonth = todayMonth - birthMonth;
let age = todayYear - birthYear;

if(age < 18){
    alert("Вие сте малолетен");
} else if (age == 18 && todayMonth < birthMonth) {
    alert("Вие сте малолетен");
} else if (age == 18 && birthMonth == todayMonth && todayDay < birthDay) {
    alert("Вие сте малолетен");
} else if (age == 18 && todayMonth == birthMonth && todayDay == birthDay){
    alert("Среќен роденден, Вие сте полнолетен");
}else {
    alert("Вие сте полнолетен");
 }

