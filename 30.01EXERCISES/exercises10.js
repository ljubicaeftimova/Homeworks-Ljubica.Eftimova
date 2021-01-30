//EXERCISE 1
let newArray = [];

for (let i=1; i<=100; i++){
    if(i % 3 === 0 && i % 7 === 0 ){
        newArray.push(i);
    }
    
}

console.log(newArray);


//EXERCISE 2
  var balance = 10000; 

  function makeDeposit() {
    var deposit = Number(prompt('How much would you like to deposit?'));
	balance += deposit;
	alert('Your current balance is: '+balance);
	atm();
    }


function makeWithdrawal() {
    var withdrawal = Number(prompt('How much would you like to withdrawal?'));
        balance -= withdrawal;
		alert('Your current balance is: '+balance);
		atm();
}

	function getBalance() {
		alert('Your current balance is: '+balance);
		atm();
	}

	function exit() {
			atm();
		
	}

	function atm() {

		var choice = Number(prompt('Select a choice 1.) Balance 2.) Deposit 3.) Withdrawal 4.) Exit')); 

		if (choice === 1) {
			makeDeposit();
		} else if (choice === 2) {
			makeWithdrawal();
		} else if (choice === 3) {
			getBalance();
		} else if (choice === 4) {
			exit();
		
		}
	}

	atm();



// EXECISE 3
// let arraysOfAllUsers[];
// currentUser="";

let loginForm = document.getElementById("login");
let loginPass = document.getElementById("pass");
let loginButton = document.getElementById("logInBtn");


loginButton.addEventListener("click", function() {
    let username = loginForm.value;
	let password = loginForm.value;
	console.log(username);
	console.log(password);

    if (username === "Darko" && password === "Darko123") {
		alert("You have successfully logged in.");}
		else {alert("Please register")};

}, false)


    