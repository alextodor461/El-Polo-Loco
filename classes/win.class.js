class Wongame extends MovableObject{
    height = 480;
    width = 720;
    x;
    y;
    win_game = 'img/9.Intro _ Outro Image/_Game over_ screen/3.Game over.png';
  
    constructor(){
        super().loadImage(this.win_game);
        this.height;
        this.width;
        this.x = 0;
        this.y = 0;
    }
}