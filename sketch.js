var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(70,580,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(280,580,200,30);
    block2.shapeColor = "red";

    block3 = createSprite(490,580,200, 30);
    block3.shapeColor = "yellow";

    block4 = createSprite(700,580,200,30)
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "purple";
    ball.velocityY = -3;
    ball.velocityX = 2;
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    

    
    ball.bounceOff(block1);
    
 
    if(block1.isTouching(ball)){
        ball.shapeColor = "blue";
        music.play();

        
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        

        //write code to stop music
    }

    ball.bounceOff(block3);


    ball.bounceOff(block4);

    drawSprites();
}
