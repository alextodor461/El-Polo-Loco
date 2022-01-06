class Heart extends MovableObject{
    width = 75;
    height = 75;
    x = 700;
    y = 250;

    IMAGES_HEART =[
        'img/7.Marcadores/Icono/Vidas.png'
    ];
   
    constructor(){
        super().loadImage(this.IMAGES_HEART);
        this.loadImages(this.IMAGES_HEART);
        this.x = 300 + Math.random() * 7000;
        this.y = 75;
    }
}