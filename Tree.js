class Tree{
    constructor(x, y) {
      var options= {
         'isStatic' : true,
         'restitution':0.3,
         'friction':0.5,
         'density':1.2
      }
        this.body = Bodies.rectangle(x, y, 20, 20, options); 
        World.add(world, this.body);
        this.image = loadImage("sprites/tree.png");
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image, 0, 0, 400, 440);
      pop();
    }
  }
  