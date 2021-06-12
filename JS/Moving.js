class Moving {
    constructor(x,y,width,height) {
      var options = {
         isStatic: true
      }
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      noStroke();
      fill("#8C52FF");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };