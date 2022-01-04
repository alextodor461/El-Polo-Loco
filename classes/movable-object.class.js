//IN MOVABLE OBJECTS WERDEN SACHEN GESCHRIEBEN, DIE MAN ÜBERALL MEHRMALS VERWENDENT. 'VERERBUNG'

class MovableObject extends Drawableobject{

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2;
    acceleration_fall = 3;
    energy = 100;
    coinAmount = 0;
    bottleAmount = 0;
    lasthit = 0;

    applyGravity(){
        setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0){ //Function wird hier eingesetzt, siehe unten diese function 
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
            }
        }, 35);
    }

    fall(){
        setInterval(() => {    
            this.y -= this.speedY;
            this.speedY -= this.acceleration_fall;    
        }, 35);
    }

    fallBoss(){   
        setInterval(() => {    
            this.y -= this.speedY;
            this.speedY -= this.acceleration_fall;    
        }, 300);       
    }
    
    //Die Function wird in der IF-afrage eingesetzt, siehe über diese Function
    isAboveGround(){
        if(this instanceof Throwableobject){
            return true;
        }else{
            return this.y < 120;
        } 
    }

    isColliding(mo){
        return this.x + this.width > mo.x &&
        this.y + this.height > mo.y &&
        this.x < mo.x &&
        this.y < mo.y + mo.height
    }

    moveRight(){
       setInterval(() => {
        if(this.world.keyboard.right){
           this.x += this.speed + 2;
           this.otherDirection = false;
        }
        }, 1000 / 120);
    }

    moveLeftPepe(){
        setInterval(() => {
         if(this.world.keyboard.left){
            this.x -= this.speed + 2;
            this.otherDirection = true;
         }
         }, 1000 / 120);
     }

    moveLeft(){
            this.x -= this.speed;   
    }

    jump(){
        this.speedY = 25;
    }

    walkLeft(){
        this.x -= this.speed + 2;
        this.otherDirection = true;
    }

    walkRight(){
        this.x += this.speed + 2;
        this.otherDirection = false;
    }

    hit(){
        this.energy -= 10;
        if(this.energy < 0){
            this.energy = 0;
        }else{
            this.lasthit = new Date().getTime();
        }
    }

    hitChickens(){
        this.energy -= 100;
        if(this.energy < 0){
            this.energy = 0;
        }else{
            this.lasthit = new Date().getTime();
        }
    }

    hitByBoss(){
        this.energy -= 20;
        if(this.energy < 0){
            this.energy = 0;
        }else{
            this.lasthit = new Date().getTime();
        }
    }

    hitCoin(){
        this.coinAmount += 5;
        if(this.coinAmount > 100){
            this.coinAmount = 100;
        }
    }

    hitBottle(){
        this.bottleAmount += 10;
        if(this.bottleAmount > 100){
            this.bottleAmount = 100;
        }
    }

    isDead(){
        return this.energy == 0;
    }

    isHurt(){
        let timepassed = new Date().getTime() - this.lasthit;
        timepassed = timepassed / 1000;
        return timepassed < 0.5;   
    }
}

