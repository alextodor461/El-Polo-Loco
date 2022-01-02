class Throwableobject extends MovableObject{
    acceleration = 2.5;
    speedX = 20;
    world;

    THROW_ANIMATION = [
        'img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 6.png',
    ];

    constructor(x, y){
        super();
        this.x = x;
        this.y = y;
        this.loadImage('img/6.botella/1.Marcador.png');  
        this.loadImages(this.THROW_ANIMATION);    
        this.height = 100;
        this.width = 80;
        this.throw();
    }  

    throw(){  
        this.speedY = 20;
        this.applyGravity();  

        setInterval(() => {
            this.playAnimation(this.THROW_ANIMATION);        
        }, 75);

        setInterval(() =>{
            this.x += 12.5;
        }, 25)
    }
}