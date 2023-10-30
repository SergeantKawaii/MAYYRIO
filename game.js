const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')


canvas.width = 1024
canvas.height = 576
class Player {
    constructor(){
        this.position = {
            x: 100,
            y: 100,
        }

        this.height = 100,
        this.width = 100,
         this.sides = {
             bottom: this.height + this.position.y
        }

        
    }
    draw(){
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)

    }
    update(){
if (this.sides.bottom < canvas.height){
        this.position.y++;
        this.sides.bottom = this.position.y + this.height

        }
    }
}


const player = new Player()
 
//context.clearRect(x, y, width, height);
//animation of character

// let bottom = 100 + y
function animate(){
    window.requestAnimationFrame(animate)
    c.fillStyle ='grey'
    c.fillRect(0,0,canvas.width,canvas.height)
    
    player.draw()
    player.update()
    
}

animate()

