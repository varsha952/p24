class Ball {
    constructor(x,y){
        var options = {
            restitution : 0.3 ,
            isStatic : false,
            density : 1.2,
            friction : 0.5 

            
        }
        this.body = Bodies.circle(x , y , 20, options)
        
        World.add(world,this.body)
    }
   display () {
     push()
     translate(this.body.position.x , this.body.position.y )
    ellipseMode(RADIUS)
    ellipse(0,0 , 20 ,20)
   pop()
   }
}