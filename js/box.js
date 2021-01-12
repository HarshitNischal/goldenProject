class Box 
{
constructor(x,y) {
 this.x=x
 this.y=y
 this.width=20   
 this.height=20 
}
display(){
    fill("brown")
    rect(this.x,this.y,this.width,this.height);
}
}