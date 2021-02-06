$(document).ready(function(){

//    $("button").click(function (){

//        let userInput =  $("#inputText").val();
   

//     $("#inputText").after(`<h1> Hello there ${userInput}!</h1>`) ;

// })

$("#buttonTwo").click(function (){
   let userTextInput = $("#userText").val();
   let userColorInput = $("#colorInput").val();
   let validationText = (userTextInput.length > 0)

   
   if ((validationText == true)){
       $("div").after(`<h1 id="myHeading">${userTextInput}</h1>`);
      $("#myHeading").css("color",userColorInput); 
   }
   else{
       $("div").after("<h5> Please enter some text and a valid color</h5>") 
   };
})




})