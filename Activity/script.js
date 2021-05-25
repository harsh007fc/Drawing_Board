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
let whiteColor = document.querySelector(".white");
let yellowColor = document.querySelector(".yellow");

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
    board.height = window.innerHeight;
    board.width = window.innerWidth;
    draw();
});
draw();
function draw() {
    tool.fillStyle = "#333";
    tool.fillRect(0, 0, window.innerWidth, window.innerHeight);

    pencil.addEventListener("click", function () {
        tool.strokeStyle = "black";
        tool.lineWidth = 2;
        colorPicker.classList.toggle("hide");
        redColor.addEventListener("click", function () {
            tool.strokeStyle = "red";
        });
        greenColor.addEventListener("click", function () {
            tool.strokeStyle = "green";
        });
        blueColor.addEventListener("click", function () {
            tool.strokeStyle = "blue";
        });
        whiteColor.addEventListener("click", function () {
            tool.strokeStyle = "white";
        });
        yellowColor.addEventListener("click", function () {
            tool.strokeStyle = "yellow";
        });
    });
    eraser.addEventListener("click", function () {
        tool.strokeStyle = "#333";
        tool.lineWidth = 10;
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
