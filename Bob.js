class Bob {
    constructor(x,y,r){

        var options = {
            isStatic:true,
            density:10,
            friction: 0.5,
            restitution:0.3
          };



          this.body=Bodies.circle(x,y,r/2,options)
          this.r=r;
          this.r=r;
          
          World.add(world, this.body);

      
      
        }
        display(){
        var pos=this.body.position
       
           
            
        push();
        translate(pos.x,pos.y)
        fill("pink")



        ellipseMode(CENTER)
        ellipse(0,0,this.r,this.r)
        
        pop();
    
        }
       
    }