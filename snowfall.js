class Snowfall {
    constructor(x,y,r) {

    this.x = x
    this.y = y
    this.r = r

    this.body = Bodies.circle(x,y,r)
    World.add(world,this.body)
    this.image = loadImage("snow5.webp")
    }

    display() {
        var pos = this.body.position
        image(this.image,pos.x,pos.y,pos.r);
        rectMode(CENTER)
    }
}