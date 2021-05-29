class Tree{
    constructor(width, height) {
        var options = {
          'isStatic':true,  
          'restitution':0.8,
            'density':1.2
            
        }
        this.body = Bodies.rectangle(900, 340, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Images/tree.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
       //this.body.position.x = mouseX;
       //this.body.position.y = mouseY;

       //console.log(this.body.position.x);
       //console.log(this.body.position.y);
       
        push ();

        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop ();
      }
}
