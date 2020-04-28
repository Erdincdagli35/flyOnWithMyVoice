let dog;
let bIMG;
let dIMG;
let bgIMG;
let bArray=[];
let soundClassifier;

function preload() {
	const options = { probabilityThreshold: 0.95 };
	soundClassifier=ml5.soundClassifier('SpeechCommands18w',options);
    bIMG = loadImage('barrier.png');
    dIMG = loadImage('dog3.png');
    bgIMG = loadImage('gameBG.jpg');
}
function setup() {
    createCanvas(800, 450);
    dog = new Dog();
    soundClassifier.classify(gotCommand);
}
function gotCommand(error,results){
	if(error){
		console.error(error);
	}
	console.log(results[0].label,results[0].confidence);
	if(results[0].label=='up'){
		dog.jump();
	} 
}
function keyPressed() {
    if (key == ' ') {
        dog.jump();
    }
}
function draw() {
	if(random(1)<0.005){
		bArray.push(new Barrier());
	}
    background(bgIMG);
    for (let t of bArray){
		t.move();
		t.show();
		console.log('1');
		if(dog.hits(t)){
			console.log('2');
			console.log('game over');
			noLoop();
		}
	}
    dog.show(); 
    dog.move();

}