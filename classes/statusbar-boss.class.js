class Endbossbar extends Drawableobject{
    
    y = 100;
    x = 1000;
    height = 20;
    width = 100;
    percent = 100;

    IMAGES_BOSS = [
        'img/7.Marcadores/Barra/Marcador vida/azul/100_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
    ];

    constructor(){
        super();
        this.loadImages(this.IMAGES_BOSS); //DAS ERSTE BILD ALSO AND DER STELLE 0
        this.setPercent(100);
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
        if(this.percent == 100){
            return 0;
        }else if(this.percent > 80){
            return 1;
        }else if(this.percent > 60){
            return 2;
        }else if(this.percent > 40){
            return 3;
        }else if(this.percent > 20){
            return 4;
        }else{
            return 5;
        }
    }  
}