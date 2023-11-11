window.addEventListener('keydown', (event) => {
    switch(event.key) {
        case'w':
        if(player.position.y > 360){ player.velocity.y  = -10; }   //for dobule jump i can make two if statememts; one if player y is = 
                                                                    //to ground juymp once, the second jump can be if player y is  not = to ground 
        console.log(player.position.y)
        break;


         case'a':
         keys.a.pressed = true;
         break;

         case'd':
         keys.d.pressed = true;
         break;
    
    }
    
    })

    window.addEventListener('keyup', (event) => {
        switch(event.key) {
    
             case'a':
             keys.a.pressed = false;
             break;
    
             case'd':
             keys.d.pressed = false;
             break;
        
        }
        
        })
    