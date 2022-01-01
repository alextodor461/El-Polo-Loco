class Gameover extends MovableObject{
    height = 480;
    width = 720;
    x;
    y;
    game_over = 'img/9.Intro _ Outro Image/_Game over_ screen/2.oh no you lost!.png';
  
    constructor(){
        super().loadImage(this.game_over);
        this.height;
        this.width;
        this.x = 0;
        this.y = 0;
    }
}