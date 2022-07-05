class Drawing{
    constructor({position, velocity, size}, acceleration, color){
        this.position = position;
        this.velocity = velocity;
        this.acceleration = acceleration;
        this.color = color;
        this.size = size;
    }
    draw(){
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
        setTimeout(() => {  
            c.clearRect(this.position.x,this.position.y,this.size.width, this.size.height)
        }, 100);
    }
}

class Updating extends Drawing {
    update(){
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        // Changing Enmy Car Position
        if(Car.position.y + Car.size.height + Car.velocity.y >= canvas.height){
            Car.position.y = 0
            Car.position.x = (innerWidth - innerWidth / 4) / 2 + randomNum()
        }

        // Collision Dectection From Starting Of The Raod TO The End Of The Road. 
        if (
          Road.position.x + Road.size.width <= newPlayer.position.x + newPlayer.size.width + newPlayer.velocity.x ||
          Road.position.x >= newPlayer.position.x + newPlayer.velocity.x
        ) {
          newPlayer.velocity.x = 0;
        }

        // Dectection Of Biker (New Player) If It's Position Is Higher Than 110px  
        if(newPlayer.position.y + newPlayer.velocity.y <= 110){
            newPlayer.velocity.y = 0
        }

        // Collision Dectection Between Biker And Enmy Car
        if(Car.position.x + Car.size.width >= newPlayer.position.x &&
            newPlayer.position.x + newPlayer.size.width >= Car.position.x &&
            Car.position.y + Car.size.height + Car.velocity.y >= newPlayer.position.y &&
            newPlayer.position.y + newPlayer.size.height + newPlayer.velocity.y >= Car.position.y){
            // Alert Game Over
            alert("Game Over")

            // Setting Biker Position Again To Top OF The Canvas 
            Car.position.y = 0
            Car.position.x = (innerWidth - innerWidth / 4) / 2 + randomNum()

            // Setting Player Position Again To Back.
            newPlayer.position.x = (innerWidth - innerWidth / 4) / 2 + innerWidth / 4 / 2 - 20;
            newPlayer.position.y = innerHeight - 50 - 25;

            // Keys Back To False
            key = {
                a: {
                  pressed: false,
                },
                d: {
                  pressed: false,
                },
                w: {
                  pressed: false,
                },
                s: {
                  pressed: false,
                }
              };
        }
    }
}
