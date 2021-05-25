let bars = document.querySelector(".bars");
let tools = document.querySelector(".tools");
let board = document.querySelector(".board");



bars.addEventListener("click",function(){
    bars.classList.toggle("change");
    tools.classList.toggle("tools-inactive");
    
});


board.height = window.innerHeight;
board.width = window.innerWidth;


