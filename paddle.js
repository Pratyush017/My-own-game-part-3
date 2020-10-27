class Paddle{
    constructor(x,y,width,height,a,b,c){

        this.body = Bodies.rectangle(x, y, width, height,{isStatic:true});
        this.width = width;
        this.height = height;
        this.a = a;
        this.b = b;
        this.c = c;
        World.add(world, this.body);
       // console.log(this.body.velocity.x);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);       
        if(this.b !== null){
            this.body.velocity.x = this.c;
            var angle = this.body.angle;
            Matter.Body.rotate(this.body, this.b);
            rotate(angle);
           // angle = angle+0.9;
            //console.log("error");

        }
        if(this.body.position.x === 432){
           move = 1;
        }
        else if(this.body.position.x === 570){
            move = 2;
        }
        if( move === 1){
            this.body.velocity.x = -c;

        }
        else if( move === 2){
            this.body.velocity.x = c;
        }

       // rotate(angle);
        fill(this.a);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        //imageMode(CENTER);
        //image(this.img1,0,0,10,20);
        pop();
    }

   
    }
