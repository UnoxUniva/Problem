class Ground
{
    constructor(xpos,ypos,width1,height1)
    {
        var ground_options = {isStatic:true}
        this.body= Bodies.rectangle(xpos,ypos,width1,height1,ground_options)
        this.width=width1
        this.height=height1

        World.add(world,this.body)

        
        
        
    }
    display()
    {
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        
    }
    
}