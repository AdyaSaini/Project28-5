class Ground{
    constructor(width, height) {
        var options= {
            'isStatic' : true,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.rectangle(600,550, width, height, options);
        World.add(world, this.body);
        this.width = width;
        this.height = height;
    }
    display(){
      var pos =this.body.position;
      fill("gray");
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }