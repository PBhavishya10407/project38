var cat,rat,stone,ground;
var score = 0;
var catimage,ratimage,stoneimage,backgroundimage;

function preload()
{
    catimage = loadImage("cat image.png");
    ratimage = loadImage("rat image.png");
    stoneimage = loadImage("stone image.png");
    backgroundimage = loadImage("background image.png");
}

function setup()
{
    createCanvas(400,400)

    ground = createSprite(200,400,400,20);
   cat = createSprite(350,370);
   cat.addImage(catimage);
   cat.scale = 0.3;
}

function draw()
{
    background(backgroundimage);

    fill("red");
    textSize(20);
    text("Score : "+score,300,50);

    if(frameCount%50===0)
    {
        rat = createSprite(50,370);
        rat.addImage(ratimage);
        rat.scale=0.3;
        rat.velocityX=3;
    }

    if(frameCount%60===0)
    {
        stone = createSprite(10,370);
        stone.addImage(stoneimage);
        stone.scale=0.3;
        stone.velocityX=3;
    }

    if(keyWentDown("UP_ARROW"))
    {
        cat.velocityY=-2;
    }

    if(keyWentDown("DOWN_ARROW"))
    {
        cat.velocityY=2;
    }

    if(cat.collide(ground))
    {
        cat.velocityY=0;
    }

    if(cat.isTouching(rat))
    {
        rat.destroy();
        score = score+2;
    }

    if(cat.isTouching(stone))
    {
        background("yellow");
        fill("red");
        textSize(20);
        text("Game Over",150,200);
        cat.destroy();
        rat.destroy();
        stone.destroy();
        background.destroy();
    }
    drawSprites();
}
