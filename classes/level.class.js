class Level{
    enemies;
    endboss;
    clouds;   
    coin;
    bottle;
    heart;
    background;

    level_end_x = 7500;

    constructor(enemies, endboss, clouds, coin, bottle, heart, background){    
        this.enemies = enemies;
        this.endboss = endboss;
        this.clouds = clouds; 
        this.coin = coin;
        this.bottle = bottle;
        this.heart = heart;
        this.background = background;
    }
}