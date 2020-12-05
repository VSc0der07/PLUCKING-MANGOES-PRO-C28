class Tree {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
}
this.image = loadImage ("tree.png")
this.body = Bodies.rectangle (x,y,1,height,options)
this.width = width;
this.height = height;
World.add (world,this.body);
}

display(){

imageMode(CENTER);
image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
}
}