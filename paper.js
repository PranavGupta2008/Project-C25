class Paper{

constructor(x,y,r)
{
var options={
isStatic:false,
restitution:0.3,
friction:0.4,
density:1.5
};
this.x=x;
this.y=y;
this.r=r;
this.body=Bodies.circle(this.x,this.y,(this.r-25)/2,options);
this.image=loadImage("paper.png");
World.add(world,this.body);
}
display()
{
var paperpos=this.body.position;
push()
translate(paperpos.x,paperpos.y);
var angle =this.body.angle;
rotate(angle);
imageMode(CENTER);
//ellipseMode(RADIUS); 
image(this.image,0,0,this.r,this.r);
//ellipse(0,0,this.r,this.r);
pop()
}




}