// Enemies our player must avoid
const  Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.speed*dt;
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if (this.x > 510) {
        this.x = -70;
        this.speed = 100 + Math.floor(Math.random() * 200);
    };

    // x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight

    if (player.x + 80 > this.x && player.x < this.x + 80 &&
        player.y + 80 > this.y && player.y < this.y + 80) {

        player.x = 202;
        player.y = 405;
    }


   
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
   // console.log(this.x);
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

const  Player = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function (dt) {
 
};


Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


let count = 0;
Player.prototype.handleInput = function (keyPress) {
    if (keyPress == 'up' && this.y > 0) {
        this.y -= 83;
    }

    if (keyPress == 'down' && this.y < 405) {
        this.y += 83;
    }

    if (keyPress == 'left' && this.x > 0) {
        this.x -= 101;
    }

    if (keyPress == 'right' && this.x < 404) {
        this.x += 101;
    }


    if (this.y <= 0) {
        setTimeout(() => {
            this.x = 202;
            this.y = 405;
        }, 600);
        count++;
    };
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



const allEnemies = [];

const enemyLocation = [73, 156, 239];

let positionX = 50;
enemyLocation.forEach(location => {
    let enemy = new Enemy(positionX, location, 200);
    allEnemies.push(enemy);
    positionX += 150;
});


// For each enemy located on the y axis from 0 on the x axis move at a speed of 200 
// Until randomly regenerated in the enemy update function above


let player = new Player(202, 405);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
