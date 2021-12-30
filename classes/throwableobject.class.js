class Throwableobject extends MovableObject{
    acceleration = 2.5;
    speedX = 20;
    world;

    constructor(x, y){
        super();
        this.x = x;
        this.y = y;
        this.loadImage('img/6.botella/1.Marcador.png');      
        this.height = 100;
        this.width = 80;
        this.throw(100, 150);
    }  

    throw(x, y){  
        this.y = y;  
        this.x = x;
        this.speedY = 20;
        this.applyGravity();  

        setInterval(() =>{
            this.x += 10;
        }, 25)
    }
}