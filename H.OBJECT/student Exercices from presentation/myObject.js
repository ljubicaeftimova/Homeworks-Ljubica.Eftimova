// // let player = new Object ();
// // player.name = "Bube";
// // player.years = "24";
// // player.city = "Skopje";
// // console.log(player.name);
// // console.log(player);

// // let hotel = {
// // name:'Aleksandar Palas',
// // years: '1996',
// // city : 'ohrid'
// // }

// // hotel.rooms=24;
// // console.log(hotel);

// // function Hotel(name, rooms, booked){//adding properties to constructor
// //     this.name = name;//assigning values to properties from object(this is as pointer for property from object)
// //     this.rooms = rooms;//assigning values to properties from object
// //     this.booked = booked;//assigning values to properties from object

// //     this.checkAvailability = function(){
// //         return this.rooms - this.booked;
// //     };
    
// // }


// // let tempHotel = new Hotel('Makedonija',25,10);
// // let temp2Hotel = new Hotel('Srbija',30,10);
// // let temp3= new Hotel('Makedonija',25,10);
// // temp3.name="Imeee";
// // console.log(tempHotel.name);
// // console.log(temp3.name);

// function windowSize() { 
// 	let width= this.innerWidth; 
// 	let height = this.innerHeight; 
// 	return [height, width]; 
// }


// console.log(windowSize());
// //drugo
// var width = 600;
// let shape= {
//     width: 300
// }; 

// function showWidth() { 
// 	console.log(this.width);
// }
// shape.showWidth = showWidth; 
// shape.showWidth(); // 300 

// showWidth(); //600


//studet exercise 1
// let myObject = {
// 	firstName: "Ljubica",
// 	lastName: "Eftimova",
// 	age:24,
// 	city:"Skopje",
// 	employed:true
// }

// console.log(myObject);
// console.log(myObject.firstName);

// students exercise 2
// myObject.city="Madrid";
// myObject.employed=false;
// myObject.age=25;
// console.log(myObject);

// let trainer = { 
// 	name :  "Stefan",
// 	lastName: "Stefanovski",
// 	academy: "SEDC",
// 	lecture: "Objects"
// }

// delete (trainer.lecture);
// trainer.ages=25;
// trainer.getFullName=function(){
// 	return this.name + this.lastName;
// }
// console.log(trainer);

// let car = {
// model:"golf5",
// color:"blue",
// year:2009,
// fuel:"petrol",
// fuelConsumtion:6.6,
// calculation: function(){
// 	let distance = Number(prompt("enter a distance"));
// 	return distance *(this.fuelConsumtion/100)
// }
// }
// console.log(car.calculation());


emptyArray=[];
let firstName = document.getElementById("nameInput");
let lastName = document.getElementById("lastInput");
let age = document.getElementById("ageInput");
let buttonForSave=document.getElementById("btnForm");
let divElement = document.getElementById("hah");

function Student(firstName,lastName,age){
	this.firststName=firstName.value;
	this.laststName=lastName.value;
	this.stage=age.value;
}
buttonForSave.addEventListener('click',function(){
	let studentInfo = new Student(firststName,laststName,stage);
	emptyArray.push(studentInfo);
	return emptyArray;
},false)

function showStudents(studentsArr, element){
	for (i=0;i<studentsArr.length;i++) {
	let li = document.createElement("li");
	li.appendChild(studentsArr[i]);
	element.appendChild(li);
	}}

showStudents(emptyArray, divElement)

