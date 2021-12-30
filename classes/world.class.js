
class World{
    character = new Character();
    enemies = new Chicken();
    endboss = new Endboss();
    statusbar = new Statusbar();
    statusbarcoin = new StatusbarCoin();
    statusbarbottle = new StatusbarBottle();
    statusbarboss = new Endbossbar();
    throwBottle = [];
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    collect_coin = new Audio('audio/collect-coin.mp3');
    collect_bottle = new Audio('audio/collect-bottle.mp3');
    hit_chicken = new Audio('audio/pepe-hurt.mp3');
    hit_chicken_with_bottle = new Audio('audio/chicken.mp3');
    game_over = new Gameover();
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
            this.checkcollision();
            this.checkcollisionWithCoin();
            this.checkcollisionWithBottle();        
            this.checkThrowableobject();
        }, 100);    

        setInterval(() => { 
            this.checkcollisionWithEnemy();
        }, 10);    
    }

    checkcollision(){
        this.level.enemies.forEach((enemy) =>{
            if(this.character.isColliding(enemy) && !this.character.isHurt() && !this.character.isDead()) {
                this.character.hit();   
                this.hit_chicken.play();
                this.statusbar.setPercent(this.character.energy); 
            }
         })
    }

    checkcollisionWithCoin(){    
        this.level.coin.forEach((coins) =>{
            if(this.character.isColliding(coins)) {
                this.character.hitCoin(); 
                this.collect_coin.play();                
                this.statusbarcoin.setPercent(this.character.coinAmount); 
                let pos = this.level.coin.indexOf(coins);
                this.level.coin.splice(pos, 1);
            }
         })
    }

    checkcollisionWithBottle(){
        this.level.bottle.forEach((bottles) =>{
            if(this.character.isColliding(bottles)) {
                this.character.hitBottle();   
                this.collect_bottle.play();     
                this.statusbarbottle.setPercent(this.character.bottleAmount); 
                let pos = this.level.bottle.indexOf(bottles);
                this.level.bottle.splice(pos, 1);
            }
         })
    }
  
    //auf diese funktion will ich im chicken class drauf greifen
    checkcollisionWithEnemy(){
        this.level.endboss.forEach((boss) =>{
            this.throwBottle.forEach((bottles) =>{
                 if(bottles.isColliding(boss)) {
                    this.endboss.hit();
                    this.hit_chicken_with_bottle.play();    
            }
           })    
         })
    }

    checkThrowableobject(){
        if(this.keyboard.space && (new Date().getTime() - this.character.lastthrow > 500)){
            this.character.lastthrow = new Date().getTime();
            let bottles = new Throwableobject(this.character.x, this.character.y);
            this.throwBottle.push(bottles);     
        }
        
    }

    setWorld(){
        this.character.world = this;
        this.enemies.world = this;
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
        this.addObjectToMap(this.level.enemies);
        this.addObjectToMap(this.level.endboss);
        this.ctx.translate(-this.camera_x, 0);
        
        this.addObjectToMap(this.throwBottle);
        this.addToMap(this.statusbar);
        this.addToMap(this.statusbarcoin);
        this.addToMap(this.statusbarbottle);
        this.addToMap(this.statusbarboss);
        

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