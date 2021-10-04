function preload(){
  Shooterimage=loadImage("images.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  Shooter=createSprite(70,650)
  Shooter.addImage(Shooterimage)
  zombie= new Zombie(width,300)

 zombieGroup=new Group()
zombieGroup.add(zombie.body)
bulletGroup=new Group()

}



function draw() {
  background("black");  
  drawSprites();
if(frameCount%50===0){
  zombie= new Zombie(width,random(100,height-100))
  zombieGroup.add(zombie.body)
}

  if(keyDown("space")){
    bullet= new Bullet (Shooter.x,Shooter.y)
    bulletGroup.add(bullet.body)
  }
bulletGroup.collide(zombieGroup,kill)

}
function kill(bullets,zombies){
zombies.destroy()
bullets.destroy()
}