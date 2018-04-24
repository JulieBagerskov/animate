(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.tasty_burger_130 = function() {
	this.initialize(img.tasty_burger_130);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,102);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tasty_burger_130();
	this.instance.parent = this;
	this.instance.setTransform(-65,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-51,130,102);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tasty_burger_130();
	this.instance.parent = this;
	this.instance.setTransform(-65,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-51,130,102);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		playSound("airslide");
	}
	this.frame_35 = function() {
		// Nøgleordet "this" står her for maintime-line
		// "Stop" er en CreateJS metode, som stopper tidslinjen
		this.stop();
		console.log('tidslinjen stoppet!');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(31).call(this.frame_35).wait(1));

	// Layer_8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgGDAh6MAAAgvgIMHAAMAAAAvgg");
	var mask_graphics_23 = new cjs.Graphics().p("EgGDAiYMAAAgvgIMHAAMAAAAvgg");
	var mask_graphics_24 = new cjs.Graphics().p("EgEyAiYMAAAgvgIMHAAMAAAAvgg");
	var mask_graphics_25 = new cjs.Graphics().p("EgDhAiYMAAAgvgIMHAAMAAAAvgg");
	var mask_graphics_26 = new cjs.Graphics().p("EgCQAiYMAAAgvgIMHAAMAAAAvgg");
	var mask_graphics_27 = new cjs.Graphics().p("EgA+AiYMAAAgvgIMGAAMAAAAvgg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:38.8,y:217}).wait(23).to({graphics:mask_graphics_23,x:38.8,y:220}).wait(1).to({graphics:mask_graphics_24,x:46.9,y:220}).wait(1).to({graphics:mask_graphics_25,x:55,y:220}).wait(1).to({graphics:mask_graphics_26,x:63.1,y:220}).wait(1).to({graphics:mask_graphics_27,x:71.2,y:220}).wait(9));

	// burgertekst
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("Aj6WuIAAjZQAAhZA0glQAfgXApAAQAwAAAeAbQAQAOANAbQAPgnASgTQAggiA6AAQAxAAAnAfQA7AuAABjIAADWgAAbSeQgLAaAAArIAACIICxAAIAAiUQAAg/glgbQgWgRghAAQg3AAgTAygAi4StQgKAXAAAsIAAB7ICcAAIAAh9QAAgrgMgZQgTgmgxAAQgxABgRAogAj6PVIAAhFIE1AAQA3AAAkgUQA3gfAAhJQAAhXg8gfQgggRg2AAIk1AAIAAhFIEZAAQBcAAAyAZQBbAuAAB/QAACAhbAuQgyAZhcAAgAj6HYIAAjkQAAg5AQglQAhhEBWAAQAtAAAdASQAdASAQAiQAMgdATgQQAUgOAsgCIBDgCQAdgBAOgEQAYgGAGgQIAMAAIAABUIgRAFIh7AHQgyADgQAhQgKATAAApIAACWIDYAAIAABEgAi2C8QgKAVAAAhIAACiICsAAIAAiZQAAgvgTgbQgUgbgyAAQg1ABgUAlgAjAhIQhHhAAAhmQAAhGAbgyQAnhLBjgQIAABDQg3ANgZAmQgaAlAAA6QAABEA1AvQA0AuBnAAQBZAAA5gmQA4gnAAhWQAAhEgogrQgngshZgBIAACdIg3AAIAAjcIEMAAIAAArIhBARQAmAiAPAaQAZAsAABEQAABYg6A/QhIBFh/AAQh9AAhKhDgAj6o/IAAlsIA9AAIAAEqICZAAIAAkTIA5AAIAAETICqAAIAAkwIA8AAIAAFygAj6wTIAAjlQAAg3AQglQAhhFBWgBQAtAAAdATQAdATAQAhQAMgeATgPQAUgOAsgCIBDgCQAdgBAOgEQAYgGAGgQIAMAAIAABTIgRAGIh7AIQgyACgQAhQgKATAAAoIAACXIDYAAIAABEgAi20vQgKAUAAAiIAACiICsAAIAAiZQAAgugTgbQgUgbgyAAQg1gBgUAmg");
	this.shape.setTransform(105.5,281.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(36));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AmKfIMAAAg+PIMVAAMAAAA+Pg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AmKfIMAAAg+PIMVAAMAAAA+Pg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AmKfIMAAAg+PIMVAAMAAAA+Pg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AmKfIMAAAg+PIMVAAMAAAA+Pg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AmKfIMAAAg+PIMVAAMAAAA+Pg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AmKfIMAAAg+PIMVAAMAAAA+Pg");
	var mask_1_graphics_22 = new cjs.Graphics().p("EgGKAglMAAAg+PIMVAAMAAAA+Pg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AmKfIMAAAg+PIMVAAMAAAA+Pg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:39.5,y:-107.1}).wait(17).to({graphics:mask_1_graphics_17,x:39.5,y:-107.1}).wait(1).to({graphics:mask_1_graphics_18,x:39.5,y:-42.1}).wait(1).to({graphics:mask_1_graphics_19,x:39.5,y:22.9}).wait(1).to({graphics:mask_1_graphics_20,x:39.5,y:87.9}).wait(1).to({graphics:mask_1_graphics_21,x:39.5,y:152.9}).wait(1).to({graphics:mask_1_graphics_22,x:39.5,y:208.5}).wait(1).to({graphics:mask_1_graphics_23,x:39.5,y:282.9}).wait(13));

	// tasty
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggdjIAAi/IiykrIBSAAIB6DQIALAtIACAAIANguIB1jPIBKAAIiuEqIAADAgAgiQsIAAmtIilAAIAAg9IGPAAIAAA9IilAAIAAGtgAhtD1QgngJgVgJIAXg9QASAJAjAIQAkAJAqAAQAYABAVgFQAVgEAQgKQAPgKAJgNQAJgQAAgTQAAgdgTgQQgTgRgdgMIg8gYQghgKgdgQQgcgRgTgbQgTgaAAgqQAAg8ArglQAsgkBQAAQAvAAAoAHQAnAHAWAMIgWA6QgRgIgjgIQgjgGgqAAQgvgBgXAVQgYAUAAAaQAAAbASARQAUARAcAMIA9AZQAhAMAcAQQAdASATAZQATAaAAAoQAAAhgNAbQgMAagYATQgYATgiAKQghAKgqAAQg5AAgogJgACSpBIg1iCIi/AAIgzCCIhGAAIDJnxIAkAAIDKHxgABJr8Ig4iLIgShMIgBAAIgTBOIg4CJICWAAgAgi14IAAmsIilAAIAAg+IGPAAIAAA+IilAAIAAGsg");
	this.shape_1.setTransform(37,282.2);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(36));

	// burger
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(80,0,1,1,0,0,0,0,51);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(80,549);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regY:0,y:549},12).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},12).wait(1).to({regY:51.1,scaleY:0.67,y:600.1},0).wait(1).to({regY:51.2,scaleY:1.25,y:588.2},0).wait(1).to({regY:51.4,scaleY:0.97,x:77.6,y:600.6},0).wait(1).to({regX:0.1,scaleY:0.7,x:80.1,y:600.5},0).wait(1).to({scaleY:0.97},0).wait(19));

	// background
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFCC00","#D7443F","#CC3300"],[0.075,0.635,1],7.8,-253.8,0,10.3,-253.8,310.9).s().p("EgMzAu3MAAAhdtIZnAAMAAABdtg");
	this.shape_2.setTransform(80,300,0.976,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,198,160,702);
// library properties:
lib.properties = {
	id: 'F75EA6A62D4E406B94502B476768DECF',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/tasty_burger_130.png?1524575984577", id:"tasty_burger_130"},
		{src:"sounds/airslide.mp3?1524575984577", id:"airslide"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F75EA6A62D4E406B94502B476768DECF'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;