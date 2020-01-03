var PLAY = 1;
var END = 0;
var gameState = PLAY;
var ground;
var bheam, bheamImg;
var gameOver, restart;
var score;
var laddooGroup, laddoImage;
var Jelly1, Jelly2, Jelly3, Jelly4, Jelly5, Jelly6;
var witch, witchImg;


function preload() {
    groundImage = loadImage("runn.png");
    laddoImage = loadImage("Face6.png");
    bheamImg = loadImage("Run (10).png");
    gameOverImg = loadImage("gameover.png");
    restartImg = loadImage("restart.png");
    Jelly1Img = loadImage("Jelly (1).png");
    Jelly2Img = loadImage("Jelly (2).png");
    Jelly3Img = loadImage("Jelly (3).png");
    Jelly4Img = loadImage("Jelly (4).png");
    Jelly5Img = loadImage("Jelly (5).png");
    Jelly6Img = loadImage("Jelly (6).png");
    Jelly7Img = loadImage("Jelly (6).png");
    Jelly8Img = loadImage("Jelly (6).png");
    Jelly9Img = loadImage("Jelly (6).png");
    Jelly10Img = loadImage("Jelly (6).png");
    Jelly11Img = loadImage("Jelly (6).png");
    Jelly12Img = loadImage("Jelly (6).png");
    Jelly13Img = loadImage("Jelly (6).png");
    Jelly14Img = loadImage("Jelly (6).png");
    Jelly15Img = loadImage("Jelly (6).png");
    Jelly16Img = loadImage("Jelly (6).png");
    Jelly17Img = loadImage("Jelly (6).png");
    Jelly18Img = loadImage("Jelly (6).png");
    Jelly19Img = loadImage("Jelly (6).png");
    Jelly20Img = loadImage("Jelly (6).png");
    Jelly21Img = loadImage("Jelly (6).png");
    witchImg = loadImage("mush.png");


}

function setup() {
    createCanvas(600, 400);

    ground = createSprite(100,380,10,10);
    ground.addImage(groundImage);
    ground.scale = 0.5;

    bheam = createSprite(100, 300);
    bheam.addImage(bheamImg);
    bheam.scale = 0.2;

    witch = createSprite(200, 0);
    witch.addImage(witchImg);
    witch.scale = 0.8;
    witch.velocityY = 0.7;

    laddooGroup = createGroup();

    gameOver = createSprite(300, 130);
    gameOver.addImage(gameOverImg);

    restart = createSprite(300, 240);
    restart.addImage(restartImg);

    gameOver.scale = 0.4;
    restart.scale = 0.4;

    gameOver.visible = false;
    restart.visible = false;

    Jelly1 = createSprite(35,30,10,10);
    Jelly1.addImage(Jelly1Img);
    Jelly1.scale = 0.2;

    Jelly2 = createSprite(110,30,10,10);
    Jelly2.addImage(Jelly2Img);
    Jelly2.scale = 0.2;

    Jelly3 = createSprite(185,30,10,10);
    Jelly3.addImage(Jelly3Img);
    Jelly3.scale = 0.2;

    Jelly4 = createSprite(260,30,10,10);
    Jelly4.addImage(Jelly4Img);
    Jelly4.scale = 0.2;

    Jelly5 = createSprite(340,30,10,10);
    Jelly5.addImage(Jelly5Img);
    Jelly5.scale = 0.2;

    Jelly6 = createSprite(420,30,10,10);
    Jelly6.addImage(Jelly6Img);
    Jelly6.scale = 0.2;

    Jelly7 = createSprite(500,30,10,10);
    Jelly7.addImage(Jelly2Img);
    Jelly7.scale = 0.2;

    Jelly8 = createSprite(35,90,10,10);
    Jelly8.addImage(Jelly1Img);
    Jelly8.scale = 0.2;

    Jelly9 = createSprite(110,90,10,10);
    Jelly9.addImage(Jelly4Img);
    Jelly9.scale = 0.2;

    Jelly10 = createSprite(185,90,10,10);
    Jelly10.addImage(Jelly6Img);
    Jelly10.scale = 0.2;

    Jelly11 = createSprite(260,90,10,10);
    Jelly11.addImage(Jelly5Img);
    Jelly11.scale = 0.2;

    Jelly12 = createSprite(340,90,10,10);
    Jelly12.addImage(Jelly2Img);
    Jelly12.scale = 0.2;

    Jelly13 = createSprite(420,90,10,10);
    Jelly13.addImage(Jelly3Img);
    Jelly13.scale = 0.2;

    Jelly14 = createSprite(500,90,10,10);
    Jelly14.addImage(Jelly5Img);
    Jelly14.scale = 0.2;

    Jelly15 = createSprite(35,150,10,10);
    Jelly15.addImage(Jelly4Img);
    Jelly15.scale = 0.2;
          
    Jelly16 = createSprite(110,150,10,10);
    Jelly16.addImage(Jelly6Img);
    Jelly16.scale = 0.2;
          
    Jelly17 = createSprite(185,150,10,10);
    Jelly17.addImage(Jelly1Img);
    Jelly17.scale = 0.2;
          
    Jelly18 = createSprite(260,150,10,10);
    Jelly18.addImage(Jelly2Img);
    Jelly18.scale = 0.2;
          
    Jelly19 = createSprite(340,150,10,10);
    Jelly19.addImage(Jelly5Img);
    Jelly19.scale = 0.2;
          
    Jelly20 = createSprite(420,150,10,10);
    Jelly20.addImage(Jelly4Img);
    Jelly20.scale = 0.2;
          
    Jelly21 = createSprite(500,150,10,10);
    Jelly21.addImage(Jelly6Img);
    Jelly21.scale = 0.2;
       
    score = 0;


}

function draw() {
    background("green")

    bheam.x = World.mouseX;
    
    createEdgeSprites();

    if (gameState === PLAY) {

    
        if (keyDown("space")) {
            createBullet(bheam.x);
        }

        if (laddooGroup.isTouching(Jelly1)){
            Jelly1.destroy();
        }
        if (laddooGroup.isTouching(Jelly2)){
            Jelly2.destroy();
        }
        if (laddooGroup.isTouching(Jelly3)){
            Jelly3.destroy();
        }
        if (laddooGroup.isTouching(Jelly4)){
            Jelly4.destroy();
        }
        if (laddooGroup.isTouching(Jelly5)){
            Jelly5.destroy();
        }
        if (laddooGroup.isTouching(Jelly6)){
            Jelly6.destroy();
        }
        if (laddooGroup.isTouching(Jelly7)){
            Jelly7.destroy();
        }
        if (laddooGroup.isTouching(Jelly8)){
            Jelly8.destroy();
        }
        if (laddooGroup.isTouching(Jelly9)){
            Jelly9.destroy();
        }
        if (laddooGroup.isTouching(Jelly10)){
            Jelly10.destroy();
        }
        if (laddooGroup.isTouching(Jelly11)){
            Jelly11.destroy();
        }
        if (laddooGroup.isTouching(Jelly12)){
            Jelly12.destroy();
        }
       if (laddooGroup.isTouching(Jelly13)){
            Jelly13.destroy();
        }
        if (laddooGroup.isTouching(Jelly14)){
            Jelly14.destroy();
        }
        if (laddooGroup.isTouching(Jelly15)){
            Jelly15.destroy();
        }
        if (laddooGroup.isTouching(Jelly16)){
            Jelly16.destroy();
        }
        if (laddooGroup.isTouching(Jelly17)){
            Jelly17.destroy();
        }
        if (laddooGroup.isTouching(Jelly18)){
            Jelly18.destroy();
        }
        if (laddooGroup.isTouching(Jelly19)){
            Jelly19.destroy();
        }
        if (laddooGroup.isTouching(Jelly20)){
            Jelly20.destroy();
        }
        if (laddooGroup.isTouching(Jelly21)){
            Jelly21.destroy();
        }

        if (witch.isTouching(bheam)) {
            gameState = END;
        }

        var rand = (Math.round(random(0, 1)));

        if (laddooGroup.isTouching(witch)) {
            if (frameCount % 10 === 0) {
                witch.destroy();
                witch = createSprite(Math.round(random(20, 580), Math.round(random(-400, 0))));
                witch.addImage(witchImg);
                witch.scale = 0.8;
                witch.velocityY = 1;
                score = score + 4;
            }

        }
        if (witch.y > 400) {
            witch.x = Math.round(random(20, 390));
            witch.y = 0;
        }
        
    }

    else if (gameState === END) {

        witch.destroy();
        laddooGroup.setVelocityXEach(0);
        bheam.visible = false;
        gameOver.visible = true;
        restart.visible = true;

        if (mousePressedOver(restart)) {
            reset();
        }
    }
    

    fill("white");
    textSize(30);
    text("Score: " + score, 450, 220);

    drawSprites();
}
function createBullet(x) {
    var bullet = createSprite(100, 100, 5, 10);
    bullet.addImage(laddoImage);
    bullet.y = 360;
    bullet.scale = 0.4;
    bullet.x = x;
    bullet.velocityY = -1;
    bullet.lifetime = 1000;
    laddooGroup.add(bullet);
}
function reset() {
    gameState = PLAY;
    gameOver.visible = false;
    restart.visible = false;
    laddooGroup.destroyEach();
    bheam.visible = true;
    witch = createSprite(200, 0);
    witch.addImage(witchImg);
    witch.scale = 0.8;
    witch.velocityY = 0.7;
    score = 0;

    Jelly1 = createSprite(35,30,10,10);
    Jelly1.addImage(Jelly1Img);
    Jelly1.scale = 0.2;

    Jelly2 = createSprite(110,30,10,10);
    Jelly2.addImage(Jelly2Img);
    Jelly2.scale = 0.2;

    Jelly3 = createSprite(185,30,10,10);
    Jelly3.addImage(Jelly3Img);
    Jelly3.scale = 0.2;

    Jelly4 = createSprite(260,30,10,10);
    Jelly4.addImage(Jelly4Img);
    Jelly4.scale = 0.2;

    Jelly5 = createSprite(340,30,10,10);
    Jelly5.addImage(Jelly5Img);
    Jelly5.scale = 0.2;

    Jelly6 = createSprite(420,30,10,10);
    Jelly6.addImage(Jelly6Img);
    Jelly6.scale = 0.2;

    Jelly7 = createSprite(500,30,10,10);
    Jelly7.addImage(Jelly2Img);
    Jelly7.scale = 0.2;

    Jelly8 = createSprite(35,90,10,10);
    Jelly8.addImage(Jelly1Img);
    Jelly8.scale = 0.2;

    Jelly9 = createSprite(110,90,10,10);
    Jelly9.addImage(Jelly4Img);
    Jelly9.scale = 0.2;

    Jelly10 = createSprite(185,90,10,10);
    Jelly10.addImage(Jelly6Img);
    Jelly10.scale = 0.2;

    Jelly11 = createSprite(260,90,10,10);
    Jelly11.addImage(Jelly5Img);
    Jelly11.scale = 0.2;

    Jelly12 = createSprite(340,90,10,10);
    Jelly12.addImage(Jelly2Img);
    Jelly12.scale = 0.2;

    Jelly13 = createSprite(420,90,10,10);
    Jelly13.addImage(Jelly3Img);
    Jelly13.scale = 0.2;

    Jelly14 = createSprite(500,90,10,10);
    Jelly14.addImage(Jelly5Img);
    Jelly14.scale = 0.2;

    Jelly15 = createSprite(35,150,10,10);
    Jelly15.addImage(Jelly4Img);
    Jelly15.scale = 0.2;
          
    Jelly16 = createSprite(110,150,10,10);
    Jelly16.addImage(Jelly6Img);
    Jelly16.scale = 0.2;
          
    Jelly17 = createSprite(185,150,10,10);
    Jelly17.addImage(Jelly1Img);
    Jelly17.scale = 0.2;
          
    Jelly18 = createSprite(260,150,10,10);
    Jelly18.addImage(Jelly2Img);
    Jelly18.scale = 0.2;
          
    Jelly19 = createSprite(340,150,10,10);
    Jelly19.addImage(Jelly5Img);
    Jelly19.scale = 0.2;
          
    Jelly20 = createSprite(420,150,10,10);
    Jelly20.addImage(Jelly4Img);
    Jelly20.scale = 0.2;
          
    Jelly21 = createSprite(500,150,10,10);
    Jelly21.addImage(Jelly6Img);
    Jelly21.scale = 0.2;
    


    

}




