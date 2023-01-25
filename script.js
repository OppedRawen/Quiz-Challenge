var button = document.querySelector("#start");
var container = document.querySelector(".container");
var wrapper = document.querySelector(".wrapper");
var title = document.querySelector(".title");
var text = document.querySelector(".text");
var timer = document.getElementById("timer");
//create new element
var optionButton1 = document.createElement("button");
var optionButton2 = document.createElement("button");
var optionButton3 = document.createElement("button");
var optionButton4 = document.createElement("button");

var replay = document.createElement("button");
replay.setAttribute("id","start");
//put buttons into array
var buttonArray = [optionButton1,optionButton2,optionButton3,optionButton4];



//store questions and option
var question1= "When was the constitution of the United Stated written?";
var options1 = ["1692","1787","1824","1793"];
var correct1 = "1787";
var question2 = "Who is James Madision?";
var options2 = ["Father of the constitution","famous twitch streamer","celebrity chef","profession tennis player"];
var correct2 = "Father of the constitution";
var question3 = "What is the approximate size of Japan in terms of landsize?";
var options3 = ["New York","Sweden","Thailand","California"];
var correct3 = "California";
var question4 = "How much bones do human have?";
var options4 = ["215","206","189","178"];
var correct4 = "206";
var allButton;
var loop1 = false;
var loop2 = false;
var loop3 = false;
var loop4 = false;
var seconds = 10;
allButton = document.querySelectorAll(".button");
//start button event listener
function init(){
    startGame();
}



function startGame(){


button.addEventListener("click",function(){
    container.setAttribute("style","background-color: rgb(215, 248, 255);");
    title.textContent = question1;
    text.remove();
    button.remove();
    for(var i =0;i<4;i++){
        buttonArray[i].innerHTML = options1[i];
        buttonArray[i].setAttribute("class","button");
        container.appendChild(buttonArray[i]);
    }
    
    
   

   select();
   setTime();
   
  
});
}
function select(){
   
    for(var i=0;i<4;i++){
        
        if(buttonArray[i].textContent===correct1){
            
                buttonArray[i].addEventListener('click',function(){
                    title.textContent=question2;
                   for(var i=0;i<4;i++){
                    
                     buttonArray[i].innerHTML=options2[i];
                   }
                   select2();
                   
                 });
            
            
        }
    //     else{
    //     buttonArray[i].addEventListener('click',function(){
    //         timeOut();
    //     })
    // }
    }
}
function select2(){
    for(var i=0;i<4;i++){
        
        if(buttonArray[i].textContent===correct2){
            
                buttonArray[i].addEventListener('click',function(){
                    title.textContent=question3;
                   for(var i=0;i<4;i++){
                    
                     buttonArray[i].innerHTML=options3[i];
                   }
                   select3();
                 });
            
            
        }
        // else{
        //     buttonArray[i].addEventListener('click',function(){
        //         timeOut();
        //     })
        // }
        
    }
}
function select3(){
    for(var i=0;i<4;i++){
        
        if(buttonArray[i].textContent===correct3){
            
                buttonArray[i].addEventListener('click',function(){
                    title.textContent=question4;
                   for(var i=0;i<4;i++){
                   
                     buttonArray[i].textContent=options4[i];
                   }
               
                 })
            
            
        }else{
            buttonArray[i].addEventListener('click',function(){
                timeOut();
            })
        }
        
    }
}
function setTime(){
    var timerInterval =setInterval(function(){
        seconds--;
        timer.textContent = seconds;
        if(seconds===0){
            clearInterval(timerInterval);
            timeOut();
            seconds=10;
        }
    },1000);
}
function timeOut(){
    title.textContent = "You have run out of time, would you like to play again?";
    button.textContent = "Play agin";
    for(var i =0;i<4;i++){
        buttonArray[i].remove();
    }
    container.appendChild(button);
}
init();


