	/**
		method to draw a grid of round-rectangles  
	*/
	function drawRectGrid() {
		for (var i = 180; i <= 1100; i+=100) {
			for (var j = 50; j <= 1100; j+=100) {
				var rectangle = new Rectangle(new Point(i, j), new Point(i + 15, j+15));
				var cornerSize = new Size(3, 3);
				var path = new Path.RoundRectangle(rectangle, cornerSize);
				path.fillColor = hue();
			}
		} 
	}

	/**
		method to paint color (each invocation is randomized)
	*/
	function hue() {
		var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + 
		',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
		return hue; 
	}
	
	/**
		method to draw a grid of circles
	*/
	function drawCircleGrid() {
		for (var i = 180; i <= 1100; i+=100) {
			for (var j = 50; j <= 1100; j+=100) {
				var myCircle = new Path.Circle(new Point(i, j), 10);
				myCircle.fillColor = hue();
			}
		}
	} 

	// Uncomment this to draw a grid of rectangles 
	// setInterval(drawRectGrid, 500);

	// Uncomment this to draw a grid of circles
	setInterval(drawCircleGrid, 500);

	var cirArr = []; 
	
	// dictionary object which helps set up the properties of each key press
	var keyData = {
			q: {
				sound: new Howl({
		  		src: ['sounds/bubbles.mp3']
				}),
				color: hue()
			},
			w: {
				sound: new Howl({
		  		src: ['sounds/clay.mp3']
				}),
				color: hue()
			},
			e: {
				sound: new Howl({
		  		src: ['sounds/confetti.mp3']
				}),
				color: hue()
			},
			r: {
				sound: new Howl({
		  		src: ['sounds/corona.mp3']
				}),
				color: hue()
			},
				t: {
				sound: new Howl({
		  		src: ['sounds/dotted-spiral.mp3']
				}),
				color: hue()
			},
			y: {
				sound: new Howl({
		  		src: ['sounds/flash-1.mp3']
				}),
				color: hue()
			},
			u: {
				sound: new Howl({
		  		src: ['sounds/flash-2.mp3']
				}),
				color: hue()
			},
			i: {
				sound: new Howl({
		  		src: ['sounds/flash-3.mp3']
				}),
				color: hue()
			},
			o: {
				sound: new Howl({
			    src: ['sounds/glimmer.mp3']
				}),
				color: hue()
			},
			p: {
				sound: new Howl({
		  		src: ['sounds/moon.mp3']
				}),
				color: hue()
			},
			a: {
				sound: new Howl({
		  		src: ['sounds/pinwheel.mp3']
				}),
				color: hue()
			},
			s: {
				sound: new Howl({
		  		src: ['sounds/piston-1.mp3']
				}),
				color: hue()
			},
				d: {
				sound: new Howl({
		  		src: ['sounds/piston-2.mp3']
				}),
				color: hue()
			},
			f: {
				sound: new Howl({
		  		src: ['sounds/prism-1.mp3']
				}),
				color: hue()
			},
			g: {
				sound: new Howl({
		  		src: ['sounds/prism-2.mp3']
				}),
				color: hue()
			},
			h: {
				sound: new Howl({
		  		src: ['sounds/prism-3.mp3']
				}),
				color: hue()
			},
			j: {
				sound: new Howl({
		  		src: ['sounds/splits.mp3']
				}),
				color: hue()
			},
			k: {
				sound: new Howl({
		  		src: ['sounds/squiggle.mp3']
				}),
				color: hue()
			},
			l: {
				sound: new Howl({
		  		src: ['sounds/strike.mp3']
				}),
				color: hue()
			},
			z: {
				sound: new Howl({
		  		src: ['sounds/suspension.mp3']
				}),
				color: hue()
			},
			x: {
				sound: new Howl({
		  		src: ['sounds/timer.mp3']
				}),
				color: hue()
			},
			c: {
				sound: new Howl({
		  		src: ['sounds/ufo.mp3']
				}),
				color: hue()
			},
			v: {
				sound: new Howl({
		  		src: ['sounds/veil.mp3']
				}),
				color: hue()
			},
			b: {
				sound: new Howl({
		  		src: ['sounds/wipe.mp3']
				}),
				color: hue()
			},
			n: {
				sound: new Howl({
			    src: ['sounds/zig-zag.mp3']
				}),
				color: hue()
			},
			m: {
				sound: new Howl({
		  		src: ['sounds/moon.mp3']
				}),
				color: hue()
			},
			enter : {
				sound: new Howl({
		  		src: ['sounds/zig-zag.mp3']
				}),
				color: hue()
			}
		}
	

	// wrapper function from paper.js for keypress
	// view.size gives the size of the visible area
	function onKeyDown(event) { 
		if (keyData[event.key]) {
			var maxPoint = new Point(view.size.width, view.size.height);
			var randomPoint = Point.random();
			var point = maxPoint * randomPoint;
			var newCircle = new Path.Circle(point, 500)
			newCircle.fillColor = keyData[event.key].color;
			keyData[event.key].sound.play();
			cirArr.push(newCircle);
		} 

		if ($("#msg")) {
			$("#msg").css("display", "none");
			$("#msg").remove();
		} 
	}

	function onFrame(event) {
	
		for (var i = 0; i < cirArr.length; i++) {
			// scale down the animateCircle by 0.909 factor of the shape in previous frame
			cirArr[i].scale(.909);
			// change the hue every frame
			cirArr[i].fillColor.hue += 1; 

			// remove circle when it scales down to 0
			if (cirArr[i].area < 1) {
				// Removes the item and all its children from the project. The item is not destroyed 
				// and can be inserted again after removal
				cirArr[i].remove();
				// remove circle from the list
				cirArr.splice(i, 1);
				// decrement i so that we won't skip an element in the array
				i--;
				// console.log(cirArr);
			}
		}  
	} 