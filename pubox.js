class PuBox{

    constructor(x,y){
        var options = {
         restitution:0.1,
         density:1,
         friction:1
        }
        this.object = Bodies.rectangle(x,y,50,50,options)
        this.width = 50
        this.height = 50
        World.add(world,this.object)
    }
    display(){
        var posX = this.object.position.x
        var posY = this.object.position.y
        var angle = this.object.angle

        
        push();
     translate(posX,posY)
     rotate(angle)
     fill("purple")

     rectMode(CENTER)
     rect(0,0,this.width,this.height)
     pop();


    }
}