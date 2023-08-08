const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser-btn"); 
const colorOption = Array.from(
    document.getElementsByClassName("color-option")
);
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = 2;
let isPaintng = false;
let isFilling = false;
function onMove(event) {
    // 마우스를 누른 상태에서 커서를 움직이면 선을 그린다.
    if(isPaintng){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    // 사용자가 canvas 위에 마우스가 올라가면 마우스의 위치로 좌표가 설정된다.
    ctx.moveTo(event.offsetX, event.offsetY);
}
// 마우스를 누르면 true
function startPainting() {
    isPaintng = true;
}
// 마우스를 뗴면 false
function cancelPainting() {
    isPaintng = false;
    ctx.beginPath();
}
function onLineWidthChange(event){
    ctx.lineWidth = event.target.value;
}
function onColorChacnge(event){
    ctx.strokeStyle = event.target.value;
}
function onColorClick(event){
    ctx.strokeStyle = event.target.dataset.color;
    ctx.fillStyle = event.target.dataset.color;
}
function onModeClick(){
    if(isFilling){
        isFilling = false
        modeBtn.innerText = "Fill";
    } else {
        isFilling = true
        modeBtn.innerText = "Draw";
    }
}
function onCanvasClick(){
    if(isFilling){
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}
function onDestroyClick(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}
function onEraserClick(){
    ctx.strokeStyle = "white";
    isFilling = false;
    modeBtn.innerText = "Fill";
}
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChacnge);

colorOption.forEach(color => color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);