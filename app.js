
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

 function ask(){
    var serverResponse="";
    readline.question(`Rock(0) Paper(1) or scissors(2)`, (choice) => {
    
    var XMLHttpRequest =require("xmlhttprequest").XMLHttpRequest;
    var Http = new XMLHttpRequest();
    var url = "http://localhost:3030/play";
    const fetch = require("node-fetch");

    fetch(url)
    .then(
        response => response.text() 
    ).then(
        html =>{
            console.log(html)
            serverResponse=html;

            if(html==0){
                y = "Rock";
            }
            if(html==1){
                y = "Paper";
            }
            if(html==2){
                y = "Scissors";
            }


            if(choice == 0 && html == 2){
                console.log("Server chose scissors. User wins!")
            }
            
           else if(html == 0 && choice == 2){
                console.log("Server chose Rock. User Loses!")
            }
            else if(html<choice){
                
                console.log("Server chose " +y+ ". User Loses!")
        
            } else if(html>choice){
                
                console.log("Server chose " +y+ ". User Wins!")
        
            }
            else{
                console.log("User and Computer both chose " + y + ". Its a Tie!");
            }






        } 
    );

   

  
    
  })

}



 ask();











