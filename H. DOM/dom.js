//exercise ONE

let paragraphAll = document.getElementsByTagName("p");
let paragraphOne = paragraphAll[0].innerHTML += `<span><b>.You can do it</b></span>`;
let paragraphTwo = document.getElementsByClassName("second");
paragraphTwo[0].innerText += "CHANGED PARAGRAPH TWO";

document.querySelector("text").innerText = "changed TEXT";

let headerOneFirst = document.getElementById("myTitle").innerText = "First header changed";
let lastDiv = document.getElementsByTagName("div")[2];
console.log(lastDiv);
let headerOneSecond = lastDiv.firstElementChild.innerText = " Second H1 changed";
let headerThree = lastDiv.lastElementChild.innerText = " H3 is changed";



    
    // exercise TWO
    function numbersList(array,element){
      
      
        element.innerHTML = `<h4> The inputed array looks like: </h4>`;
    
    for (let j of array) {
        element.innerHTML += `<li>${j}</li>`
                    }
    let sum = 0;
    for ( let i of array){
            sum += i;
            document.getElementById("suma").innerText = `The sum is : ${sum}`;
    }
}


    let numberIng = Number(prompt("Insert numbers in array"));  //VNESUVAM ARRAY
    let tempArray = [];
        
        for (let index = 0; index < numberIng; index++) {
            let inputedNumber = Number(prompt("Number input"));
            tempArray.push(inputedNumber);
        }

    let para = document.getElementById("firstParagraph");   //GO SELEKTIRAM DIVOT
    numbersList(tempArray,para);    //POVIKUVAM FUNKCIJA



//exercise THREE
    let maindiv = document.getElementById("divRecept");

    let recipeName = prompt("Name of the recept");
    let sentenceRecipe = document.createElement("h3");
    sentenceRecipe.innerText = `This is a recipe for ${recipeName}`;
    maindiv.appendChild(sentenceRecipe);

    let numOfIngrediants = Number(prompt("Enter number of ingridiants please!"));
    let sentenceIngridiants = document.createElement("p");
    sentenceIngridiants.innerText = `${numOfIngrediants} ingridiants will be needed for this recipe`;
    maindiv.appendChild(sentenceIngridiants);

    let ingArray = [];
    function arrayIngridiants() {

    for (let i = 1; i <= numOfIngrediants; i++) {
        let ingredientName = prompt(`Enter the Ingredient:`);
        ingArray.push(ingredientName);
    }
    return arrayIngridiants;
    }

    console.log(arrayIngridiants());
    console.log(ingArray);

function createTable(ingridiantElement) {

    let table = document.createElement("table");
    let tableBody = document.createElement("tbody");

    for (let j = 0; j < ingArray.length; j++) {
        let trow = document.createElement("tr");
        tableBody.appendChild(trow);
        let tcoloumn = document.createElement("td");
        tcoloumn.innerText = `${ingArray[j]}`; //TUKA SE ZIMAAT VREDNOSTITE OD ARRAY
        trow.appendChild(tcoloumn);
    }


    table.setAttribute("border", "3");
    table.appendChild(tableBody);
    ingridiantElement.appendChild(table);

}

createTable(maindiv);
    

