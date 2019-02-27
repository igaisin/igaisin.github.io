var app;
var bitStr, bit;
var binary = "01101001011001110110000101101001011100110110100101101110";
binary = binary.split("");
var fontSize = 22;

var columns = window.innerWidth / fontSize,
rows = window.innerHeight / fontSize;

init();

window.addEventListener("resize", function() {
	app.renderer.resize(window.innerWidth, window.innerHeight);
});

function init() {
	app = new PIXI.Application(window.innerWidth, window.innerHeight, {
		transparent: true
	});
	document.body.appendChild(app.view);

	createBinary();

	setInterval(rain, 256)
	app.ticker.add(updateBinary);
	// console.log(app.stage)
}

function createBinary() {
	for (var x = 0; x < columns; x++) {
		for (var y = 0; y < rows; y++) {
			let style;
			bit = binary[Math.floor(Math.random()*binary.length)]
			if (bit == "0") {				
				style = {
					fontSize: fontSize, 
					fill: '#FF4136',
				};
			} else {
				style = {
					fontSize: fontSize, 
					fill: '#7FDBFF',
				};
			}
			bitStr = new PIXI.Text(bit, style);
			
			app.stage.addChild(bitStr);

			bitStr.x =  x * (fontSize);
			bitStr.y =  y * (fontSize);
			// bitStr.y -= fontSize;
		}
	}
}

function updateBinary(delta) {
	bit = app.stage.children[Math.floor(Math.random()*app.stage.children.length)];
	bit.setText(binary[Math.floor(Math.random()*binary.length)])
	if (bit._text == "0") {
		bit._style._fill = "#FF4136";
	} else {
		bit._style._fill = "#7FDBFF";
	}
}

function rain() {
	app.stage.children.forEach(function(obj, id) {
		if(obj.y + fontSize > window.innerHeight) {
		 	obj.y = 0 - fontSize;
		}
		if (obj.x + fontSize > window.innerWidth) {
			obj.x = 0 - fontSize;
		}
		obj.y += fontSize;
		obj.x += fontSize;
	});
}