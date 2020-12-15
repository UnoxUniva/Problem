class Log
{
    constructor(x,y,height1,angle)
    {

        var log_options = {restitution:.5,
                           density:1,
                           friction:1.2}

        this.body = Bodies.rectangle(x,y,20,height1,log_options);
        this.width = 20;
        this.height = height1;
        Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body)
       console.log("In Log")
        
    }

display()
{
    console.log("Log Display")
    var position = this.body.position;
    var angle = this.body.angle;
    push();
    rectMode(CENTER);   
    translate(position.x,position.y);
    rotate(angle)
    rect(0,0,this.width,this.height)
    pop();
}

}