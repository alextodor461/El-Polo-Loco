class Chicken extends MovableObject{

    y = 350;
    height = 80;
    width = 70;
    world;

    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png',      
    ];

    IMAGES_DEAD = ['img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'];

    constructor(){ 
       super().loadImage('img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
       this.loadImages(this.IMAGES_WALKING);
       this.loadImages(this.IMAGES_DEAD);
       this.x = 700 + Math.random() * 6000; //Zahl zwischen 200 und 700. Math.random gibt eine zufällige zahl zwischen 0-1. Mit *500 wird es umgewandelt
       this.speed = 0.2 + Math.random() * 0.5; //Die Hünchen bewegen sich zufällig schnell.
       this.animates();
    } 

    animates(){
        setInterval(() =>{
            if (!this.isDead()) {
                this.moveLeft();
            }
        }, 1000 / 120);
        
        setInterval(() => { //um function animate haüfig zu ausführen 
         if (this.isDead()) {
             this.playAnimation(this.IMAGES_DEAD);

         }else{
             this.playAnimation(this.IMAGES_WALKING);
         }
        }, 200); // jede 200 millisekunde ändert sich das bild 
    }
}


