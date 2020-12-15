class Pig
{
constructor (x,y)
{
var pig_options= {restitution:1,
                density:1,
                friction:1}
this.body=Bodies.rectangle(x,y, 50,50,pig_options)
 this.width=50
 this.height=50
 World.add(world,this.body)

            }
       display()     
{
var position=this.body.position
var angle=this.body.angle
push()
translate(position.x,position.y)
rotate(angle)
fill("lime")
stroke("green")
rect(0,0,this.width,this.height)

pop()








}
}