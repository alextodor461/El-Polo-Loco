class Background extends MovableObject{
    constructor(imagePath, x, y){
        super().loadImage(imagePath);
        this.x = x;
        this.y = 170 - this.height;
        this.width = 720;
        this.height = 480;
    }
}