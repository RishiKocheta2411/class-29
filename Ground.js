class Ground{
    constructor(x,y,w,h){
        var options={
            isStatic:true,
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        World.add(world,this.body)
    }

    show(){
        var p=this.body.position

        push();
        noStroke()
        fill ("green")            
        rectMode(CENTER);
        rect(p.x,p.y,this.w,this.h) 
        pop();
    }
}