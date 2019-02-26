var canvas = new fabric.Canvas('binaryCanvas', {
	backgroundColor: 'rgba(0, 0, 0, 0.8)',
	renderOnAddRemove: false
});
canvas.setDimensions({
	width: window.innerWidth,
	height: window.innerHeight
});
canvas.selection = false

window.addEventListener("resize", resizeCanvas, false);
function resizeCanvas() {
	canvas.setWidth(window.innerWidth);
	canvas.setHeight(window.innerHeight);
	canvas.renderAll();
}

var bits, bit;
var binary = "01101001011001110110000101101001011100110110100101101110";
binary = binary.split("");
var fontSize = 33;
var firstSlt = false
var columns = (window.innerWidth / (fontSize / 1.2)) - 1;
var rows = (window.innerHeight / (fontSize / 1.2)) - 2;

for (var x = 1; x < columns; x++) {
	for (var y = 1; y < rows; y++) {
		bit = binary[Math.floor(Math.random()*binary.length)]
		bits = new fabric.Text(
			bit, {
			left: x * (fontSize / 1.2),
			top: y * (fontSize / 1.2),
			fill: "snow",
			fontSize: fontSize,
		});
		if (bit == "0") {
			bits.setShadow("0 0 8px #f00");
		} else {
			bits.setShadow("0 0 8px #0ff");
		}
		canvas.add(bits)
	}
}

canvas.forEachObject(function(o) {
	o.selectable = false;
});

setInterval(function() {
	bit = canvas._objects[Math.floor(Math.random()*canvas._objects.length)];
	bit.text = binary[Math.floor(Math.random()*binary.length)];
	if (bit.text == "0") {
		bit.setShadow("0 0 8px #f00");
	} else {
		bit.setShadow("0 0 8px #0ff");
	}
	canvas.renderAll();
}, 10) 