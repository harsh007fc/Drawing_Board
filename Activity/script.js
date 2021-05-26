let bars = document.querySelector(".bars");
let tools = document.querySelector(".tools");
let board = document.querySelector(".board");
let fas = document.querySelectorAll(".fas");
let pencil = document.querySelector(".fa-pencil-alt");
let eraser = document.querySelector(".fa-eraser");
let colorPicker = document.querySelector(".color-picker");
let redColor = document.querySelector(".red");
let greenColor = document.querySelector(".green");
let blueColor = document.querySelector(".blue");
let blackColor = document.querySelector(".black");
let yellowColor = document.querySelector(".yellow");
let widthBox = document.querySelector(".width-box");
let eraserWidthBox = document.querySelector(".eraser-width-box");
let pencilSlider = document.querySelector(".pencil-slider");
let eraserSlider = document.querySelector(".eraser-slider");
let memory = [];

//*********to change selecte tool color********//
for (let i = 0; i < fas.length; i++) {
    fas[i].addEventListener("click", function (e) {
        for (let i = 0; i < fas.length; i++) {
            fas[i].classList.remove("tool-active");
        }
        e.target.classList.add("tool-active");
    });
}

bars.addEventListener("click", function () {
    bars.classList.toggle("change");
    tools.classList.toggle("tools-inactive");
});

board.height = window.innerHeight;
board.width = window.innerWidth;
let tool = board.getContext("2d");
window.addEventListener("resize", function () {
    board.height =  window.innerHeight;
    board.width = window.innerWidth;
    draw();
});
draw();
function draw() {
    tool.fillStyle = "#333";
    tool.fillRect(0, 0, window.innerWidth, window.innerHeight);

    /////////////////////////////////////////////////////////////////
    let lastSelectedColor; //variable for previous seleced color of penc 
    let selectedColor; //to track color of current selected color
    pencil.addEventListener("click", function () {
            colorPicker.classList.add("unhide");
            widthBox.classList.add("unhide");
            eraserWidthBox.classList.remove("unhide");
            tool.lineWidth = pencilSlider.value;
            if(selectedColor == "#333"){
                console.log(selectedColor);
                selectedColor = lastSelectedColor;
                tool.strokeStyle = selectedColor;
            }
    });
//************************************************************************************************************** *//
    redColor.addEventListener("click", function () {
        selectedColor = "#eb3b5a";
        lastSelectedColor = "#eb3b5a";
        tool.strokeStyle = selectedColor;
        // tool.strokeStyle = "#eb3b5a";
    });
    greenColor.addEventListener("click", function () {
        selectedColor = "#20bf6b";
        lastSelectedColor = "#20bf6b";
        tool.strokeStyle = selectedColor;
        // tool.strokeStyle = "#20bf6b";
    });
    blueColor.addEventListener("click", function () {
        selectedColor = "#45aaf2";
        lastSelectedColor = "#45aaf2";
        tool.strokeStyle = selectedColor;
        // tool.strokeStyle = "#45aaf2";
    });
    blackColor.addEventListener("click", function () {
        selectedColor = "black"; 
        lastSelectedColor = "black"; 
        tool.strokeStyle = selectedColor;
        // tool.strokeStyle = "black";
    });
    yellowColor.addEventListener("click", function () {
        selectedColor = "#fed330";
        lastSelectedColor = "#fed330";
        tool.strokeStyle = selectedColor;
        // tool.strokeStyle = "#fed330";
    });
    
    pencilSlider.addEventListener("change",function(){
        tool.lineWidth = pencilSlider.value
    });
    
    pencil.addEventListener("dblclick",function(){
        colorPicker.classList.remove("unhide");
        widthBox.classList.remove("unhide");
    });
//***************************************************************************************************************************** //
    eraser.addEventListener("click", function () {
            activeTool = "eraser";
            // tool.strokeStyle = "#333";
            selectedColor = "#333";
            tool.strokeStyle = selectedColor;
            eraserWidthBox.classList.add("unhide");
            colorPicker.classList.remove("unhide");
            widthBox.classList.remove("unhide");
            tool.lineWidth = eraserSlider.value;
         
    });
    eraserSlider.addEventListener("change",function(){
        tool.lineWidth = eraserSlider.value
    });
    eraser.addEventListener("dblclick", function () {
        eraserWidthBox.classList.remove("unhide");
    });

    
////////////////////////////////////////////////////////////////////////////////////////////////////
for(let i = 0; i < memory.length; i++){
    let point = memory[i];
    tool.lineWidth = point.width;
    tool.strokeStyle = point.color;
    if(point.rec == "start"){
        tool.beginPath();
        tool.moveTo(point.x,point.y);
    }
    else if(point.rec == "between"){
        tool.lineTo(point.x,point.y);
        tool.stroke();
    }
    else if(point.rec == "end"){
        tool.lineTo(point.x,point.y);
        tool.stroke();
    }
}

// //////////////////////////////////////////////////////
    let isMouseDown = false;
    board.addEventListener("mousedown", function (e) {
        let x = e.clientX;
        let y = e.clientY;
        let paintedPoint = {
            rec : "start",
            x: x,
            y: y,
            color:selectedColor,
            width:tool.lineWidth,

        };
        memory.push(paintedPoint);
        tool.beginPath();
        tool.moveTo(x, y);
        isMouseDown = true;
    });
    board.addEventListener("mousemove", function (e) {
        let x = e.clientX;
        let y = e.clientY;
        let paintedPoint = {
            rec : "between",
            x: x,
            y: y,
            color:selectedColor,
            width:tool.lineWidth,

        };
        memory.push(paintedPoint);
        if (isMouseDown == true) {
            tool.lineTo(x, y);
            tool.stroke();
        }
    });
    board.addEventListener("mouseup", function (e) {
        let x = e.clientX;
        let y = e.clientY;
        let paintedPoint = {
            rec : "end",
            x: x,
            y: y,
            color:selectedColor,
            width:tool.lineWidth,

        };
        memory.push(paintedPoint);
        tool.lineTo(x, y);
        tool.stroke();
        // tool.closePath();
        isMouseDown = false;
    });
}



