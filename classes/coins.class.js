class Coin extends MovableObject{
    width = 100;
    height = 100;
    x = 700;
    y = 250;

    IMAGES_COIN =[
        'img/8.Coin/Moneda1.png',
        'img/8.Coin/Moneda2.png'
    ];
   
    constructor(){
        super().loadImage('img/8.Coin/Moneda1.png');
        this.loadImages(this.IMAGES_COIN);
        this.animates();
        this.x = 300 + Math.random() * 7000;
        this.y = 100 + Math.random() * 150;
    }

    animates(){
        setInterval(() => {
           this.playAnimation(this.IMAGES_COIN);
        },300);   
    }   
}