function age(x, y) {
    
    let dogAge = x *7;
    let humanAge = y/7;

    console.log("Dog's age in human age are: " + dogAge);
    console.log("Human's age in dogs age are: " + humanAge);

}
let ageDog= parseInt(prompt("please ENTER HUMAN AGE,to calculate dog age based on human age"));
let ageHuman= parseInt(prompt("please ENTER DOG AGE,to calculate human age based on dog age,  "));
age(ageDog,ageHuman);