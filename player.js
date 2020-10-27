class Player{
    constructor(x,y,width,height){

     
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.img1 = loadImage("user.png","user2.png","user3.png");
        /*this.img1 = loadImage("user.png");
        this.img2 = loadImage("user2.png");
        this.img3 = loadImage("user3.png");
        this.img4 = loadImage("userjump.png");
        this.img5 = loadImage("userleft.png");*/

        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
       // rotate(angle);
       // fill("yellow");
        imageMode(CENTER);
        image(this.img1,0,0,25,25);
       
        pop();
    }
    jump(){
        if(keyCode === 32){
            player.velocityY = -5;
           
        }
    }

    
        
}