
class World{
    character = new Character();
    enemies = new Chicken();
    endboss = new Endboss();
    statusbar = new Statusbar();
    statusbarcoin = new StatusbarCoin();
    statusbarbottle = new StatusbarBottle();
    statusbarboss = new Endbossbar();
    statusbarboss_icon = new EndbossbarIcon();
    throwBottle = [];
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    collect_coin = new Audio('audio/collect-coin.mp3');
    collect_bottle = new Audio('audio/collect-bottle.mp3');
    hit_chicken = new Audio('audio/pepe-hurt.mp3');
    hit_chicken_with_bottle = new Audio('audio/hit-chicken.mp3');
    win_music= new Audio('audio/win-musik.mp3');
    game_over = new Gameover();
    you_won = new Wongame();
    dead_chicken = "img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png";

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard; 
        this.run();
        this.draw(); 
        this.setWorld();   
    }


    run(){
        setInterval(() => { 
            this.checkcollisionWithChicken();
            this.checkThrowableobject();
            this.checkcollisionWithCoin();
            this.checkcollisionWithHeart();
            this.checkcollisionWithBottle();        
            this.checkcollisionWithBoss();
            this.hurtChickens();   
            this.hurtBoss();  
        }, 10);  
            
    }


    checkcollisionWithChicken(){
        this.level.enemies.forEach((enemy) =>{
            if(this.character.isCollidingChickenCoins(enemy) && !this.character.isHurt() && !this.character.isDead()) {
                this.character.hit();   
                this.hit_chicken.play();
                this.statusbarcoin.setPercent(this.character.coinAmount -= 10);
                this.statusbar.setPercent(this.character.energy); 
            }
         })
    }


    checkcollisionWithBoss(){
        this.level.endboss.forEach((enemy) =>{
            if(this.character.isColliding(enemy) && !this.character.isHurt() && !this.character.isDead()) {
                this.character.hitByBoss();   
                this.hit_chicken.play();
                this.statusbarcoin.setPercent(this.character.coinAmount -= 10);
                this.statusbar.setPercent(this.character.energy); 
            }
         })
    }


    checkcollisionWithCoin(){    
        this.level.coin.forEach((coins) =>{
            if(this.character.isCollidingChickenCoins(coins)) {
                this.character.hitCoin(); 
                this.collect_coin.play();                
                this.statusbarcoin.setPercent(this.character.coinAmount); 
                let pos = this.level.coin.indexOf(coins);
                this.level.coin.splice(pos, 1);
            }
         })
    }


    checkcollisionWithHeart(){    
        this.level.heart.forEach((hearts) =>{
            if(this.character.isColliding(hearts) && this.statusbar.percent < 100) {
                this.character.hitHeart();                
                this.statusbar.setPercent(this.character.energy); 
                let pos = this.level.heart.indexOf(hearts);
                this.level.heart.splice(pos, 1);
            }
         })
    }


    checkcollisionWithBottle(){
        this.level.bottle.forEach((bottles) =>{
            if(this.character.isColliding(bottles) && this.statusbarbottle.percent < 100) {
                this.character.hitBottle();   
                this.collect_bottle.play();     
                this.statusbarbottle.setPercent(this.character.bottleAmount); 
                let pos = this.level.bottle.indexOf(bottles);
                this.level.bottle.splice(pos, 1);
                console.log(this.statusbarbottle.percent);
            }
         })
    }


    hurtChickens(){
        this.level.enemies.forEach((enemy) =>{  
            this.throwBottle.forEach((bottle) =>{         
                if (enemy.isColliding(bottle) && !enemy.isHurt() && !enemy.isDead()) {
                    enemy.hitChickens();

                    if (enemy.isDead()) {
                        setTimeout(() => {
                            let index = this.level.enemies.indexOf(enemy);
                            this.level.enemies.splice(index, 1);
                        }, 1000);
                    }        
                }
        })    
    })  
    }


    hurtBoss(){
      this.throwBottle.forEach((bottle) =>{          
        if (this.endboss.isColliding(bottle) && !this.endboss.isHurt() && !this.endboss.isDead()) {
            this.endboss.hitBoss();
            console.log(this.endboss.energy);
            this.statusbarboss.setPercent(this.endboss.energy);
            this.hit_chicken_with_bottle.play();
         }
    
        if (this.endboss.isDead()) {
            this.win_music.play();
        }
    }) 
    }


    checkThrowableobject(){
        if(this.keyboard.space && (new Date().getTime() - this.character.lastthrow > 500)  && this.character.bottleAmount > 0 ){
            this.character.lastthrow = new Date().getTime();
            let bottles = new Throwableobject(this.character.x + 100, this.character.y + 100);
            this.throwBottle.push(bottles);          
            this.statusbarbottle.setPercent(this.character.bottleAmount -= 20);
            console.log(this.statusbarbottle.percent -= 20);
        }
    }

    
    setWorld(){
        this.character.world = this;
    }


    draw(){
        this.wind;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        
        this.addObjectToMap(this.level.background);
        this.addObjectToMap(this.level.clouds);
        
        this.addObjectToMap(this.level.bottle);
        this.addToMap(this.character); 
        this.addObjectToMap(this.level.coin);
        this.addObjectToMap(this.level.heart);
        this.addObjectToMap(this.level.enemies);
        this.addToMap(this.endboss); 
        this.addObjectToMap(this.throwBottle);
        this.ctx.translate(-this.camera_x, 0);
    
        this.addToMap(this.statusbar);
        this.addToMap(this.statusbarcoin);
        this.addToMap(this.statusbarbottle);
        this.addToMap(this.statusbarboss);
        this.addToMap(this.statusbarboss_icon);
        
        if(this.endboss.isDead()){
            this.addToMap(this.you_won);
        }
       
        if(this.character.isDead()){
            this.addToMap(this.game_over);
        }

        //Draw wird immer wieder aufgerufen und zeigt jede veränderung z.b wenn sich die objekte bewegen
        self = this;
        requestAnimationFrame(function(){
            self.draw();
        });     
    }


    addObjectToMap(object){
        object.forEach(o => {
            this.addToMap(o);
        });
    };


    addToMap(mo){
        if(mo.otherDirection){
            this.flipImage(mo);
        }
        
        //Funktionen in der Drawableobject datei definiert
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if(mo.otherDirection){
            this.flipImageBack(mo);
        }
    }


    flipImage(mo){
        this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
    }


    flipImageBack(mo){
        this.ctx.restore();
            mo.x = mo.x * -1;
    }
}