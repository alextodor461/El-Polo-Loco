class Endboss extends MovableObject{
    height = 450;
    width = 350;
    y = 10;

    IMAGES_WALKING =[
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G12.png',
    ];

    IMAGES_HURT = [
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/3.Herida/G21.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/3.Herida/G22.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/3.Herida/G23.png',
    ];

    IMAGES_DEAD = [
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/4.Muerte/G26.png',
    ];

    constructor(){
        super().loadImage(this.IMAGES_WALKING[0]); //DAS ERSTE BILD ALSO AND DER STELLE 0
        this.loadImages(this.IMAGES_WALKING); //DIE FUNKTION AUS DER WORLD.JS DATEI WIRD HIER GELADEN MIT DEN BILDERN
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 7000;
        this.animateBoss();
    }

    animateBoss(){
        setInterval(() => {
            if(this.isDead()){
                this.playAnimation(this.IMAGES_DEAD);
                this.fallBoss();
                window.addEventListener('keydown', (e) =>{
                    if(e.keyCode == 39){
                        keyboard.right = false;
                    }
                
                    if(e.keyCode == 37){
                        keyboard.left = false;
                    }        
                });  
            }else if(this.isHurt()){
                this.playAnimation(this.IMAGES_HURT);             
            }
        },125);   

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);      
        }, 500);  
    }
}