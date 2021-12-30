class StatusbarBottle extends Drawableobject{
    y = 100;
    x = 1000;
    height = 20;
    width = 100;
    world;

    percent = 0;

    IMAGES_BOTTLE = [
        'img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png',
    ];

    constructor(){
        super();
        this.loadImages(this.IMAGES_BOTTLE); //DAS ERSTE BILD ALSO AND DER STELLE 0
        this.setPercent(0);
       
        this.x = 10;
        this.y = 80;
        this.width = 180;
        this.height = 50;
    }

    setPercent(percent){
        this.percent = percent;
        let path = this.IMAGES_BOTTLE[this.resolverImageIndex()];
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