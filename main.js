var mouseEvent = "";
var lp_of_x, lp_of_y   

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

screen_width=screen.width

new_width=screen_width-35
new_height=screen.height-300

if (screen_width < 992) {

    canvas.width = new_width
    canvas.height = new_height
    document.body.style.overflow = "hidden"
}

canvas.addEventListener("touchstart", touch_start);

function touch_start(e) {
    last_position_of_x=e.touches[0].clientX - canvas.offsetLeft
    last_position_of_y=e.touches[0].clientY - canvas.offsetTop
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    //Addictonal Activity ends

}



canvas.addEventListener("touchmove", touchmove);
function touchmove(e) {

    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;


    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();


    last_position_of_x = current_position_of_touch_x;
    last_position_of_y = current_position_of_touch_y;
}

function clear_canvas(){

ctx.clearRect(0,0, ctx.canvas.width,ctx.canvas.height)


}



canvas.addEventListener("mousedown", mouseDown)
function mouseDown(){

mouseEvent="mouseDown"
} 

canvas.addEventListener("mouseup", mouseUp)
function mouseUp(){

mouseEvent="mouseUp"
} 

canvas.addEventListener("mouseleave",mouseLeave)
function mouseLeave(){

mouseEvent="mouseLeave"
} 

canvas.addEventListener("mousemove", mouseMove);
function mouseMove(e){

    cp_of_x= e.clientX - canvas.offsetLeft
    cp_of_y= e.clientY - canvas.offsetTop

    if(mouseEvent=="mouseDown"){

    ctx.beginPath();
    ctx.strokeStyl="Black"
    ctx.lineWidth=5
    ctx.moveTo(lp_of_x,lp_of_y);
    ctx.lineTo(cp_of_x,cp_of_y);
    ctx.stroke()

    }

    lp_of_x=cp_of_x;
    lp_of_y=cp_of_y;


    
}
