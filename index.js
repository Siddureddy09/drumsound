var noOfbuttons=document.querySelectorAll("button").length;
for(var i=0;i<noOfbuttons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var n=this.innerHTML;
        switch(n){
            case 'w':s1.play();
            break;
            case 'a':s2.play();
            break;
            case 's':s3.play();
            break;
            case 'd':s4.play();
            break;
            case 'j':s5.play();
            break;
            case 'k':s6.play();
            break;
            case 'l':s7.play();
            break;
            
        }
    }
)}
var  s1=new Audio("sounds/crash.mp3");
var  s2=new Audio("sounds/kick-bass.mp3");
var  s3=new Audio("sounds/snare.mp3");
var  s4=new Audio("sounds/tom-1.mp3");
var  s5=new Audio("sounds/tom-2.mp3");
var  s6=new Audio("sounds/tom-3.mp3");
var  s7=new Audio("sounds/tom-4.mp3");
document.addEventListener("keypress",function(event){
    n=event.key;
    switch(n){
        case 'w':s1.play();
        break;
        case 'a':s2.play();
        break;
        case 's':s3.play();
        break;
        case 'd':s4.play();
        break;
        case 'j':s5.play();
        break;
        case 'k':s6.play();
        break;
        case 'l':s7.play();
        break;
        
    }
})