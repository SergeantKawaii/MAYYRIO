const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')


canvas.width = 1024
canvas.height = 576

const player = new Player()
 
//context.clearRect(x, y, width, height);
//animation of character
function animate(){
    window.requestAnimationFrame(animate) //pretty much makes canvas 60FPS 
    c.fillStyle ='grey'
    c.fillRect(0,0,canvas.width,canvas.height) //makes background rect = rectangle
    
    player.draw()
    player.update()                                 //calling the classes
    
}

animate()

