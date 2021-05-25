let bars = document.querySelector(".bars");
let tools = document.querySelector(".tools");
let board = document.querySelector(".board");



bars.addEventListener("click",function(){
    bars.classList.toggle("change");
    tools.classList.toggle("tools-inactive");
    
});


board.height = window.innerHeight;
board.width = window.innerWidth;
let tool = board.getContext("2d");
window.addEventListener("resize",function(){
    board.height = window.innerHeight;
    board.width = window.innerWidth;
    draw();
})
draw();
function draw(){
    tool.fillStyle = "#333";
    tool.fillRect(0,0,window.innerWidth,window.innerHeight);


    let isMouseDown = false;
    board.addEventListener("mousedown",function(e){
        let x = e.clientX;
        let y = e.clientY;
        tool.beginPath();
        tool.moveTo(x,y);
        isMouseDown = true;

    });
    board.addEventListener("mousemove",function(e){
        let x = e.clientX;
        let y = e.clientY;
        if(isMouseDown == true){
            tool.lineTo(x,y);
            tool.stroke();
        }

    });
    board.addEventListener("mouseup",function(e){
        let x = e.clientX;
        let y = e.clientY;
        tool.lineTo(x,y);
        tool.stroke();
        isMouseDown = false;

    });
}







