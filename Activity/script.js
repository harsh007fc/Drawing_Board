let bars = document.querySelector(".bars");
let tools = document.querySelector(".tools");



bars.addEventListener("click",function(){
    bars.classList.toggle("change");
    tools.classList.toggle("tools-inactive");
});


