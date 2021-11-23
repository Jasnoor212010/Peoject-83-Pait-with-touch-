var width=screen.width;
var new_width= width- 70;
var new_height=screen.height-300;
if(width < 992 ){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").width=new_height;
    document.body.style.overflow="hidden";
}
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var current_position_of_touchx,current_position_of_touchy,last_position_of_touchx,last_position_of_touchy
colour="purple";
width_of_line=4;
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    console.log("my_touchstart");
    last_position_of_touchx=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_touchy=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove",my_touchmove)
function my_touchmove(e){
    
    console.log("touchmove");
    current_position_of_touchx=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_touchy=e.touches[0].clientY-canvas.offsetTop;
    
   
     ctx.beginPath();
     ctx.strokeStyle=colour;
     ctx.lineWidth=width_of_line;
     console.log("last position of touchX= "+last_position_of_touchx);
    console.log("last position of touchY= "+last_position_of_touchy);
     ctx.moveTo(last_position_of_touchx,last_position_of_touchy);
     console.log("current position of touchX= "+current_position_of_touchx);
    console.log("current position of touchY= "+current_position_of_touchy);
    ctx.lineTo(current_position_of_touchx,current_position_of_touchy);
    ctx.stroke();
    
    last_position_of_touchx=current_position_of_touchx;
    last_position_of_touchy=current_position_of_touchy; 
}
