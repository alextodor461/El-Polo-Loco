class Endbossbar extends Drawableobject{
    
    y = 100;
    x = 1000;
    height = 20;
    width = 100;

    percent = 0;

    IMAGES_BOSS = [
        'img/7.Marcadores/Marcadorvida_enemy/Vede.png',
        'img/7.Marcadores/Marcadorvida_enemy/Vede.png',
        'img/7.Marcadores/Marcadorvida_enemy/Vede.png',
        'img/7.Marcadores/Marcadorvida_enemy/Vede.png',
        'img/7.Marcadores/Marcadorvida_enemy/Vede.png',
        'img/7.Marcadores/Marcadorvida_enemy/Vede.png'
    ];

    constructor(){
        super();
        this.loadImages(this.IMAGES_BOSS); //DAS ERSTE BILD ALSO AND DER STELLE 0
        this.setPercent(0);
        this.x = 500;
        this.y = 0;
        this.width = 180;
        this.height = 50;
    }

    setPercent(percent){
        this.percent = percent;
        let path = this.IMAGES_BOSS[this.resolverImageIndex()];
        this.img = this.imageCache[path];
    }

    resolverImageIndex(){
        if(this.percent == 0){
            return 5;
        }else if(this.percent < 20){
            return 4;
        }else if(this.percent < 40){
            return 3;
        }else if(this.percent < 60){
            return 2;
        }else if(this.percent < 80){
            return 1;
        }else{
            return 0;
        }
    }  
}