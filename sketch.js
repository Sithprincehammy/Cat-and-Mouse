var tom, jerry;

function preload() {
    //load the images here
    mouse1 = loadImage("images/mouse1.png");
    mouse2 = loadImage("images/mouse2.png");
    mouse3 = loadImage("images/mouse3.png");
    mouse4 = loadImage("images/mouse4.png");
    cat1 = loadImage("images/cat1.png");
    cat2 = loadImage("images/cat2.png");
    cat3 = loadImage("images/cat3.png");
    cat4 = loadImage("images/cat4.png");
    garden = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here
    jerry = createSprite(200,650,50,50);
    jerry.addImage(mouse2);
    jerry.scale = 0.1;
    tom = createSprite(800,600,50,50);
    tom.addImage(cat1);
    tom.scale = 0.3;
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.addImage(cat4);
        tom.velocity.x = 0
        jerry.addImage(mouse1);
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyDown("left")){
        jerry.addImage(mouse3);
        tom.addAnimation("cat2",cat3);
        tom.velocity.x = tom.velocity.x - 5

        
    }

}
