class Bullet{
    constructor(x,y){
this.body=createSprite(x+4,y+0.2)
this.body.velocityX=8
this.Image=loadImage("bullet image.png")
this.body.addImage(this.Image)
this.body.scale=0.5
  }
}