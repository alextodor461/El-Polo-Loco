class Level{
    enemies;
    endboss
    clouds;   
    coin;
    bottle;
    background;

    level_end_x = 4000;

    constructor(enemies, endboss, clouds, coin, bottle, background){    
        this.enemies = enemies;
        this.endboss = endboss;
        this.clouds = clouds; 
        this.coin = coin;
        this.bottle = bottle;
        this.background = background;
    }
}