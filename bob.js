class Bob{
    constructor(x,y,radius){
        var options={
            isStatic: false,
            restitution: 0.5,
            friction: 0.3,
        }
        this.radius=radius;
        this.body=Bodies.circle(x, y, this.radius, options);
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;
        var angle= this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill(255,20,175);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}