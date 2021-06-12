class Ball{
    constructor(x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, {isStatic : false,'friction':0.1, 'restitution': 0.9, 'density': 0.15}); 
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        noStroke();
        fill("#FF5F90");
        ellipse(0, 0, this.radius, this.radius);
    }
}