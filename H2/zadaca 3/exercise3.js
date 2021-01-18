function Bank(atm) {

    let withDraw = parseInt(prompt("Insert wanted cash"));

    if(atm - withDraw > 0){

        let restSum = atm - withDraw;
        console.log("Current money left is: " + restSum);
        console.log("Your withdrawn is: " + withDraw);

    } else {
        console.log("Not enough money!");
    }
}


Bank(24000);

