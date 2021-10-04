class Zombie{
    constructor(x,y){
this.body=createSprite(x+4,y+0.2)
this.body.velocityX=-8
this.Image=loadImage("zombie.png")
this.Image2=loadImage("zombie2.png")
this.Image3=loadImage("zombie3.png")
this.Image4=loadImage("zombie4.png")
this.body.lifetime=400
this.body.scale=0.5
var rand=random([1,2,3,4])
switch(rand){
case 1:this.body.addImage(this.Image);break;
case 2:this.body.addImage(this.Image2);break;
case 3:this.body.addImage(this.Image3);break;
case 4:this.body.addImage(this.Image4);break;
}

}
}