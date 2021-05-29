class Launcherobject{
    constructor(width, height) {
        var options = {
            'restitution':0.8,
            'density':1.2,
            //'friction':5,
            //'frictionAir':2
            
        }
        this.body = Bodies.rectangle(235, 420, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Images/stone.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
       
       
        push ();

        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop ();
      }
}
