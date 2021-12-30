class Bottle extends MovableObject{
    width = 100;
    height = 100;
    x = 700;
    y = 330;

    constructor(){
        super().loadImage('img/6.botella/2.Botella_enterrada1.png');
        this.x = 300 + Math.random() * 3000;
    }
}