class EndbossbarIcon extends Drawableobject{ 
    y;
    x;
    height;
    width;

    IMAGES_BOSS_ICON = 'img/7.Marcadores/Icono/Mesa de trabajo 130.png';
    

    constructor(){
        super();
        this.loadImage(this.IMAGES_BOSS_ICON); //DAS ERSTE BILD ALSO AND DER STELLE 0
        this.x = 495;
        this.y = 5;
        this.width = 50;
        this.height = 50;
    }
}