const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')



class Sprite {
    constructor({position, backgroundImg}) {
    this.position = position
    this.backgroundImg = new Image()
   this.backgroundImg.src = backgroundImg
    }
    draw(){
        c.drawImage(this.backgroundImg, this.position.x, this.position.y)
    }
}

const level1 = new Sprite({
    position:{ x:0, y:0, },
    backgroundImg: 'Fotos/lvl1.jpg'
});


canvas.width = 1024
canvas.height = 576

const keys = {
    w: {
        pressed:false
    },
    a: {
        pressed:false
    },
    d: {
        pressed:false
    }
}





const player = new Player()
 
//context.clearRect(x, y, width, height);
//animation of character
function animate(){
    window.requestAnimationFrame(animate) //pretty much makes canvas 60FPS 
    // c.fillStyle ='grey'
    // c.fillRect(0,0,canvas.width,canvas.height) //makes background rect = rectangle
    level1.draw();
    player.draw()
    player.update()                                 //calling the classes
    
    player.velocity.x = 0;
    if(keys.d.pressed) {
        player.velocity.x = 5
    }
    else if (keys.a.pressed){
        player.velocity.x = -5
    }
}

animate()






