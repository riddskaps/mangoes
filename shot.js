class shot{
    constructor(bodyA,anchor){
        var options={
            bodyA:bodyA,
            pointB:anchor,
            stiffness:0.004,
            lenght:10
            }
        this.bodyA=bodyA    
        this.pointB=anchor;
        this.sling = Constraint.create(options);
        World.add(world,this.sling)
     }

     attach(body){
        this.sling.bodyA = body;
    }
    
     fly(){
         this.sling.bodyA=null;
     }

    display(){
        if (this.sling.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("white")
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }

    }
}