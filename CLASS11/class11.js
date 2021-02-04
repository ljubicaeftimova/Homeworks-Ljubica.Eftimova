

$(document).ready(function(){

//1.Create input form which will contain info about book(Name,Author,Telephone,Date). After clicking on the add button the book will be inserted into unordered list.

    // $("button").click(function (){
    //     let userName = $("#namebook").val();
    //     let userAuthor = $("#authorbook").val();
    //     let userTelephone = $("#telbook").val();
    //     let userDate = $("#datebook").val();
        
    //     $("ul").append( `
    //                         <h2>Results</h2>
    //                      <li> Book name: ${userName}</li><br>
    //                      <li> Book Author: ${userAuthor}</li><br>
    //                      <li> Telephone: ${userTelephone}</li><br>
    //                      <li> Date: ${userDate}</li><br>`

    //     );  
// })



//2.Create table which will have info about cars(Licence plates,Model,Color). Every even row will have red color and every first and last td border will have background color.

// $( "tr:even" ).css( "color", "red" );
// $( "td:first-child" ).css( "background-color", "grey" );
// $( "td:last-child" ).css( "background-color", "grey" );

//3.Create Menu option which will have 3 options(Starting,Increased,Reduce), after clicking every one of them it will afect the font in the paragraph.

// $("#mydivC").css("style", "display:none").show();
// $("#mydivA").hide();
// $("#mydivU").hide();

// $("#pocetna").click(function(){
     
//     $("#mydivC").css("style", "display:none").show();
//     $("#mydivA").hide();
//     $("#mydivU").hide();


// });
// $("#zgolemi").click(function(){
     
//     $("#mydivA").css('font-size', "28px").show();
//     $("#mydivC").hide();
//     $("#mydivU").hide();


// });
// $("#namali").click(function(){
     
//     $("#mydivU").css('font-size', "8px").show();
//     $("#mydivC").hide();
//     $("#mydivA").hide();


// });

// })

//4.Create Navigation Menu with 3 options. Initially on loading the page the first will be showed. After clicking on another option the currentlly 
//active content will be hiden and the selected one will be shown.

   $("img:nth(0)").show();
   $("img:nth(1)").hide();
   $("img:nth(2)").hide();
   $("#buildings").change("click", function(){

   

      if ($("#buildings").val() === "project1"){
          $("img:nth(0)").show();
         $("img:nth(1)").hide();
         $("img:nth(2)").hide();
      } else if ($("#buildings").val() === "project2"){
         $("img:nth(0)").hide();
         $("img:nth(1)").show();
         $("img:nth(2)").hide();
      } else if ($("#buildings").val() === "project3"){
         $("img:nth(0)").hide();
         $("img:nth(1)").hide();
      $("img:nth(2)").show();
       }

   })
})


//5.Use this link https://api.openaq.org/v1/cities to make ajax call with jQuery. The returned data need to be shown in unordered list.