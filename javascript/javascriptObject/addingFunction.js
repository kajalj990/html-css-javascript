class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    getArea = function (){
        return this.width*this.height;
    }
}

let obj1 = new Rectangle(3,5);  
console.log("height and width of the rectangle1:("+obj1.height+","+obj1.width+")");
console.log("Area of rectangle1 is "+obj1.getArea())
