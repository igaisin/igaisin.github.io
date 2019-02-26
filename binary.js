	var app;
	var bitStr, bit;
	var binary = "01101001011001110110000101101001011100110110100101101110";
	binary = binary.split("");
	var fontSize = 22;

	var columns = (window.innerWidth / fontSize) - 1,
	rows = (window.innerHeight / fontSize) - 1;

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
					fill: 'snow',
					dropShadow: true,
					dropShadowColor: 'rgba(255, 0, 55, 1)',
					dropShadowBlur: 8,
					dropShadowAngle: 0,
					dropShadowDistance: 0
				};
			} else {
				style = {
					fontSize: fontSize, 
					fill: 'snow',
					dropShadow: true,
					dropShadowColor: 'rgba(0, 255, 55, 1)',
					dropShadowBlur: 8,
					dropShadowAngle: 0,
					dropShadowDistance: 0
				};
			}
			bitStr = new PIXI.Text(bit, style);
			
			app.stage.addChild(bitStr);

			bitStr.x =  x * (fontSize);
			bitStr.y =  y * (fontSize);
		}
	}
}

function updateBinary(delta) {
	bit = app.stage.children[Math.floor(Math.random()*app.stage.children.length)];
	bit.setText(binary[Math.floor(Math.random()*binary.length)])
	if (bit._text == "0") {
		bit._style._dropShadowColor = "rgba(255, 0, 55, 1)";
	} else {
		bit._style._dropShadowColor = "rgba(0, 255, 55, 1)";
	}
}