var rocketImg,rocket
var coinImg,coin,cg
var meteor,meteorImg,mg
var background,backgroundImg
var gameState = "play";
var score

function preload(){
    rocketImg = loadImage("rocket1.png")
    coinImg = loadImage("coin1.jpg")
    meteorImg = loadImage("1.jpg")
    backgroundImg = loadImage("background.jpg")
}

function setup() {
 createCanvas(1350,600)
 background("white")

 background = createSprite(700,300)
 background.addImage("space",backgroundImg)
 background.scale = 2;

 rocket = createSprite(625,500)
 rocket.addImage("player",rocketImg) 
 rocket.scale = 0.15;

 cg = new Group();
 mg = new Group();


 
 
}

function draw() {

    if(gameState === "play"){

        if(keyDown("left_arrow")){
            rocket.x -= 3; 
        }
        if(keyDown("right_arrow")){
            rocket.x += 3; 
        }
        if(keyDown("up_arrow")){
            rocket.y -= 3; 
        }
        if(keyDown("down_arrow")){
            rocket.y += 3; 
        }
        spawnObstacles();
        if (rocket.isTouching(mg)){
         rocket.velocity = 0;
         cg.destroyEach();
         mg.destroyEach();
         gameState = "end";
        }
        spawnCoins();
         if (rocket.isTouching(cg)){
         score = ("Score: " + score)
         score.scale = 2;
         score = score + 1 ;
         coin.destroy();
        }

        drawSprites();
    }

    if (gameState === "end"){
        stroke("yellow");
        fill("white");
        textSize(50)
        text("Game Over",600,300)
        rocket.destroy();
    }

}


function spawnObstacles(){
    if (frameCount%200 === 0){
        meteor = createSprite(200,-50)
        meteor.x = Math.round(random(700,300))
        meteor.addImage("asteroid",meteorImg)
        meteor.velocityY = 2;
        meteor.lifetime = 700
        meteor.scale = 0.1
        mg.add(meteor)
        
    }
}

function spawnCoins(){
    if (frameCount%250 === 0){
        coin = createSprite(200,-50)
        coin.x = Math.round(random(700,300))
        coin.addImage("asteroid",coinImg)
        coin.velocityY = 2;
        coin.lifetime = 700
        coin.scale = 0.1
        cg.add(coin) 
    }
}