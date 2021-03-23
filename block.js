class Block {
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0.25,
            'density':0.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visiblity=255;

        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
        }
        else{
        World.remove(world,this.body)
        push();
        this.visiblity=this.visiblity-5;
        tint(225,this.visiblity);
       // rect(this.body.position.x,this.body.position.y,this.width,this.height)
        pop();
      }
        }
      }

