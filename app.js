const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;
let isPaintng = false;
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
}
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);