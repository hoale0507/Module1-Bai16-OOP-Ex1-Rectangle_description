class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    setRectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    set height(height){
        this.height = height;
    }
    getArea(){
        return this.width * this.height;
    }
    getPerimeter(){
        return this.width * 2 + this.height * 2;
    }
    drawRectangle(){
        let c = document.getElementById("canvas");
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.fillRect(0,0,this.width,this.height);
        ctx.stroke();
        ctx.fillStyle = "red";
    }
}
