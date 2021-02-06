
    document.getElementById("postBtn").addEventListener("click",function(){
        let userNumber = Number($("#numberInput").val());
        if (userNumber > 99 || userNumber < 1){
            alert("Please enter a number between 1 to 100")
        }
        else{
            fetch("https://jsonplaceholder.typicode.com/posts/")
                .then(reslut => reslut.json())
                .then(info => { 
                    if (info !== undefined && info.length > 0){
                        document.getElementById("numberDiv").innerHTML = (
                            `
                                <ul>
                                    ${info.map(info =>{
                                        if(userNumber=== info.id){
                                            return (
                                                `
                                                    <li>
                                                        Id : ${info.id} </br>
                                                        Title: ${info.title} </br>
                                                        Body: ${info.body} </br>
                                                    </li>  
                                                `

                                            )
                                        }
                                    }).join("")}
                                <ul> 
                            `
                        )
                    }
                    }
                )

                .catch(error => {
                    console.error(error);
                })
        }
    },false)  

    

    document.getElementById("showBtn").addEventListener("click",function(){
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(response => response.json())
            .then(json => {
                if (json !== undefined && json.length > 0){
                    document.getElementById("omnisDiv").innerHTML = (
                        `
                            <ul>
                                ${json.map(json => {
                                    if (json.title.match("omnis")){
                                        return (
                                            `
                                                <li>
                                                        Id: ${json.id}
                                                        Title: ${json.title}
                                                </li>
                                            `
                                        )
                                    }
                                }).join("")}

                                </ul>
                        `
                    )
                }
            })
    }) 

    document.getElementById("createUser").addEventListener("click",function(){

        let userFirstName = $("#userFirstName").val();
        let userLastName = $("#userLastName").val();
        let userName = $("#userName").val();
        let userEmail = $("#userEmail").val();
        let userPhone = $("#userPhone").val();
        
        function createNewUser(userFirstName, userLastName,userName,userEmail, userPhone){
            if (userName !== "" && userLastName !== "" && userEmail !== "" && userPhone !== ""){
                fetch("https://jsonplaceholder.typicode.com/users", {
                    method: "POST",
                    body: JSON.stringify({
                        
                        "First Name": userFirstName,
                        "Last Name": userLastName,
                        "Username": userName,
                        "e-mail": userEmail,
                        "Userphone": userPhone
                    }),
                    headers: {
                        "Content-type": "registration/json; charset=UTF-8", 
                    }
                })
                .then(response => response.json())
                .then(registrationUser => console.log("sucess", registrationUser))
                .catch(error => {
                    console.error(error);
                })
            } 
        }
        createNewUser(userFirstName, userLastName,userName,userEmail, userPhone);
    })

    document.getElementById("getCities").addEventListener("click", function() {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/photos",
            success: function(result) {
                if (result !== undefined && result.length > 0) {
                    document.getElementById("divCities").innerHTML = (
                        `
                            <ul>
                                ${result.map((element) => {
    
                                    return (
                                        `
                                            <li>
                                                id: ${element.id}<br />
                                                title: ${element.title}<br />
                                                url: ${element.url}<br />
                                                thumbnailUrl: ${element.thumbnailUrls}<br />
                                            </li><br />
                                        `
                                    )
                                }).join("")}
                            </ul>
                        `
                    )
                }
            },
            error: function (error) {
                console.error(error);
            }
        })
    }, false)