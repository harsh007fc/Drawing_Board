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

board.height = 754;
board.width = 1536;
let tool = board.getContext("2d");
window.addEventListener("resize", function () {
    board.height = 754;
    board.width = 1536;
    draw();
});
draw();
function draw() {
    tool.fillStyle = "#333";
    tool.fillRect(0, 0, window.innerWidth, window.innerHeight);

    pencil.addEventListener("click", function () {
        // tool.strokeStyle = "black";
        // tool.lineWidth = 2;
        tool.lineWidth = pencilSlider.value
        colorPicker.classList.add("unhide");
        widthBox.classList.add("unhide")
    });
    pencil.addEventListener("dblclick",function(){
        colorPicker.classList.remove("unhide");
        widthBox.classList.remove("unhide");
    });

    redColor.addEventListener("click", function () {
        tool.strokeStyle = "#eb3b5a";
    });
    greenColor.addEventListener("click", function () {
        tool.strokeStyle = "#20bf6b";
    });
    blueColor.addEventListener("click", function () {
        tool.strokeStyle = "#45aaf2";
    });
    blackColor.addEventListener("click", function () {
        tool.strokeStyle = "black";
    });
    yellowColor.addEventListener("click", function () {
        tool.strokeStyle = "#fed330";
    });
    eraser.addEventListener("click", function () {
        tool.strokeStyle = "#333";
        eraserWidthBox.classList.add("unhide");
        tool.lineWidth = eraserSlider.value;
    });
    eraser.addEventListener("dblclick", function () {
        // tool.strokeStyle = "#333";
        eraserWidthBox.classList.remove("unhide");
        // tool.lineWidth = eraserSlider.value;
    });

    let isMouseDown = false;
    board.addEventListener("mousedown", function (e) {
        let x = e.clientX;
        let y = e.clientY;
        tool.beginPath();
        tool.moveTo(x, y);
        isMouseDown = true;
    });
    board.addEventListener("mousemove", function (e) {
        let x = e.clientX;
        let y = e.clientY;
        if (isMouseDown == true) {
            tool.lineTo(x, y);
            tool.stroke();
        }
    });
    board.addEventListener("mouseup", function (e) {
        let x = e.clientX;
        let y = e.clientY;
        tool.lineTo(x, y);
        tool.stroke();
        isMouseDown = false;
    });
}

