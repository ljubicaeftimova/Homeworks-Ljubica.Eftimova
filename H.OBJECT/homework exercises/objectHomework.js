//HOMEWORK 1
function Animal (name,kind){

    this.kind = kind;
    this.name = name;
   
    this.speakMethod = function(){
    return (this.kind + " " + this.name +" says: hey bro!!!");
    }
}

let animalKind = prompt("enter your pet kind");
let animalName = prompt("enter your pet");
let AnimalObject = new Animal(animalName,animalKind);
alert (AnimalObject.speakMethod());

//HOMEWORK 2


function Book(title, author,readingStatus){
        this.title = title;
        this.author = author;
        this.readingStatus = readingStatus;

        this.readMethod = function() {
            if(readingStatus == true){
                return "Already read " + title + " by " + author;
            } else {
                return "You still need to read " + title + " by " + author;
            }
        };
}


let title = prompt("Enter book title");
let author = prompt("Enter book author");
let readingStatus = prompt("enter Yes or No");
if (readingStatus === "Yes"){
    readingStatus = true;
} else{readingStatus = false;}


let Bookobject = new Book(title,author,readingStatus);
alert (Bookobject.readMethod());




