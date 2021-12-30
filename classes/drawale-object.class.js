class Drawableobject{
    img;
    imageCache = {};
    currentImage = 0;
    x = 100;
    y = 260;
    height = 170;
    width = 100;

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    //Triangle of the objects
    drawFrame(ctx){
        if(this instanceof Chicken || this instanceof Bottle || this instanceof Throwableobject || this instanceof Endboss){ //Checkt ob es ein chicken oder charakter ist und wendet es nur bei denen an
        ctx.beginPath();
        ctx.lineWidth = '4';
        ctx.strokeStyle = 'blue';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        }
    }

     //Funktion für die charaktere: chickens, charakter, endboss. Diese datei ist mit deren datei gekoopelt und wird übertragen
     playAnimation(images){
        let i = this.currentImage % images.length;
            //0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, usw.
            let path = images[i];
            this.img = this.imageCache[path];
            this.currentImage++; 
    }

    loadImage(path){ //path parameter dort rein
        this.img = new Image(); //img wird definiert
        this.img.src = path; //die .src von dem bild wird dort rein gepackt und dann in den Parameter in der funktion
    }

    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        }); 
    }
}