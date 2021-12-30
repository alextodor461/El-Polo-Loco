class Cloud extends MovableObject{
    constructor(){
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');

        this.y = 20 + Math.random() * 80; //Zahl zwischen 20 und 80. Math.random gibt eine zufällige zahl zwischen 0-1. Mit *500 wird es umgewandelt 
        this.width = 500;
        this.height = 300;

        this.x = 100 + Math.random() * 2000; //Zahl zwischen 200 und 700. Math.random gibt eine zufällige zahl zwischen 0-1. Mit *500 wird es umgewandelt
        this.animate();
    } 

    //Die funktion bewegt die wolken. jede 100ms werden von der x-achse 0.1px abgezogen
    animate(){
        this.moveLeft();
    }
}