var sheet;
var context;

function Begin() {
    canvas = document.getElementById('sheet');
    context = canvas.getContext('2d');
}

function End() {
}

function Line(x1, y1, x2, y2, color) {
    context.beginPath();
    _setPen(1, color);
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    
    context.closePath();
    context.stroke();
}

function Box(x1, y1, x2, y2, color) {
    context.beginPath();
    _setPen(1, color);
    context.moveTo(x1, y1);
    context.lineTo(x2, y1);
    context.lineTo(x2, y2);
    context.lineTo(x1, y2);
    context.lineTo(x1, y1);
    
    context.closePath();
    context.stroke();
}

function Circle(x, y, radius, color) {
    context.moveTo(x, y);
    _setPen(1, color);
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, false);
    
    context.stroke();
}

function _setPen(lineWidth, color) {
    context.lineWidth = lineWidth;
    context.strokeStyle = color;
}