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

    constructor(){
        super().loadImage(this.IMAGES_WALKING[0]); //DAS ERSTE BILD ALSO AND DER STELLE 0
        this.loadImages(this.IMAGES_WALKING); //DIE FUNKTION AUS DER WORLD.JS DATEI WIRD HIER GELADEN MIT DEN BILDERN
        this.x = 3600;
        this.animateBoss();
    }

    animateBoss(){
        setInterval(() => {
            if(this.isDead()){
                console.log('endboss is dead')  
            }else if(this.isHurt()){
                console.log('Endboss energy', this.energy);              
            }
        },100);   

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);      
        }, 700);  
    }
}