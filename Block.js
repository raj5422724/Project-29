class blocks {
  constructor(x,y) {
    var gravity = {
      'isStatic': false,
    }
    this.body = Bodies.rectangle(x,y,25,30,gravity);
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    strokeWeight(3);
    rect(pos.x, pos.y,30,35);
  }
}