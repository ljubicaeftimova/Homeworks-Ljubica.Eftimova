function Bank(atm) {

    let withDrawn = parseInt(prompt("Insert wanted cash"));

    if(atm - withDrawn > 0){

        let restSum = atm - withDrawn;
        console.log("Currnet money left is: " + restSum);
        console.log("Your withdrawn is: " + withDrawn);

    } else {
        console.log("Not enough money!");
    }
}


Bank(24000);