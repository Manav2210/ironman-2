var stonesGroup;
var bg, backgroundImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
 playerImage = loadImage("images/iron.png");
   stoneImage = loadImage("images/stone.png");
}

function setup() {
  stonesGroup = new Group();

  createCanvas(1000, 600);
  bg = createSprite(510,300,);
  bg.addImage(backgroundImg);
    bg.velocityY = 3;
 bg.scale=1.5;
 edges = createEdgeSprites();
 player = createSprite(460,300,20,20);
 player.addImage(playerImage);
 player.scale=0.3;
 player.debug=false;
 player.setCollider("rectangle",100,0,200,400);
}


function draw() {

    if (bg.y > 500) {
      bg.y = 200 ;
    }

    player.bounceOff(edges[0]);
    player.bounceOff(edges[1]);
    player.bounceOff(edges[2]);

    //Generating stones
    generatestones();

    //To make player Collide with stones.
    for (var i = 0; i < stonesGroup.length; i++) {
      var temp = stonesGroup.get(i);
      if (temp.isTouching(player)) {
        player.collide(temp);
      }
    }




    if(keyDown("up")){
      player.velocityY = player.velocityY-0.6
    }
  if(keyDown("left")){
    player.x = player.x-5;
  }
  if(keyDown("right")){
    player.x = player.x+5;
  }
  if(keyDown("down")){
    player.y = player.y+5;
  }
  player.velocityY = player.velocityY+0.05;


    drawSprites();

}



//function to generate stones
function generatestones() {
  if (frameCount % 60 == 0) {
    var stone = createSprite(random(50, 950),0, 50, 20);
    stone.addImage(stoneImage);
    stone.scale = 0.7;
    stone.velocityY = 5;
    stone.lifetime = 300;
    stonesGroup.add(stone);
  }
}
