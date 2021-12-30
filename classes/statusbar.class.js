class Statusbar extends Drawableobject{
    y = 100;
    x = 1000;
    height = 20;
    width = 100;

    percent = 100;

    IMAGES_LIVE = [
        'img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/100_.png',
    ];

    constructor(){
        super();
        this.loadImages(this.IMAGES_LIVE); //DAS ERSTE BILD ALSO AND DER STELLE 0
        this.setPercent(100);
       
        this.x = 10;
        this.y = 0;
        this.width = 180;
        this.height = 50;
    }

    setPercent(percent){
        this.percent = percent;
        let path = this.IMAGES_LIVE[this.resolverImageIndex()];
        this.img = this.imageCache[path];
    }

    resolverImageIndex(){
        if(this.percent == 100){
            return 5;
        }else if(this.percent > 80){
            return 4;
        }else if(this.percent > 60){
            return 3;
        }else if(this.percent > 40){
            return 2;
        }else if(this.percent > 20){
            return 1;
        }else{
            return 0;
        }
    }  
}