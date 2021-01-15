class Stone{
    constructor(x,y){
      var options= {
          isStatic:false,
          restitution:0,
          friction:1,
          density:1.2
      }
      this.body = Bodies.circle(x, y, 30, options);
      World.add(world, this.body);
      this.image = loadImage("Sprites/stone.png");
      this.r = 30;
    }
  
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 60, 60);
        pop();
    }
}