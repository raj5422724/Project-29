class poly {
    constructor() {
    this.body = Bodies.polygon(75, 200, 40,35);
    this.image = loadImage("poly.png");
    World.add(world, this.body);
    }
    display() {
        var pos =this.body.position;
        fill("brown");
        imageMode(CENTER);
        image(this.image,pos.x, pos.y,80,70);
    }
}

