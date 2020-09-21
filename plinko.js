class Plinko{
    constructor(x,y,r){
        var options={
            restitution:0.4
        }
        this.body=Bodies.circle(x,y,this.r,options);
        this.r=r;
      //this.color=color(random(0,255),random(0,255),random(0,255))
     
      World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        noStroke();
      // fill(this.color)
       ellipeMode(RADIUS)
       ellipse(0,0,this.r,this.r);
       pop();

       

        for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75));
  }

for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j1,75));
  }
      
    }
}