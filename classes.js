class Player {
    constructor(){
        this.position = {
            x: 100,
            y: 100,
        }
        this.velocity = {
            x:0,
            y:0,
        }

        this.height = 100,
        this.width = 100,
         this.sides = {
             bottom: this.position.y + this.height 
        }
        this.gravity = 0.5;
        
    }
    draw(){
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)

    }
    update(){
        this.position.y += this.velocity.y                  //adding velocity to the character Y
if (this.sides.bottom + this.velocity.y < canvas.height){

        this.velocity.y += this.gravity                             //adding gravity to velocity 
        this.sides.bottom = this.position.y + this.height 

        } else {   // can also use else if  statement instead of else 
            this.velocity.y = 0         //once character is not above ground, veolcity must be 0 so char doesn't go through ground
        }
    }
    
    
    
    
    //movement(){
        //if d pressed, this.position.x +10
    //}
}
