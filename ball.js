let ballX, ballY;
let angle;
let speed;

function Ball(speed) {
    this.ballX = 300;
    this.ballY = 200;
    this.angle = random(0, 2*Math.PI);
    this.speed = speed;
};

Ball.prototype.move = function(acc) {
    this.ballX += (this.speed*Math.sin(this.angle));
    this.ballY += (this.speed*Math.cos(this.angle));
    this.speed += acc;
};

Ball.prototype.checkBounce = function() {
    if (this.ballX <= 10 || this.ballX >= 590) {
        this.angle += -2 * this.angle;
        return
    }
    if (this.ballX < xPos + 60 && this.ballX > xPos - 60) {
        if (this.ballY >= 378) {
            let diff = (this.ballX - xPos)/60;
            this.angle = Math.PI - diff * (5*Math.PI) / 12;
        }
    }
    if (this.ballX < xPos2 + 60 && this.ballX > xPos2 - 60) {
        if (this.ballY <= 23) {
            let diff = (xPos2 - this.ballX)/60;
            this.angle = 2*Math.PI - diff * (5/12) * Math.PI;
        }
    }
};

Ball.prototype.checkLose = function() {
    if(this.ballY >= 390) {
        textSize(50);
        text("PLAYER 2 WINS", 120, 200);
        //this.speed = 0;
        return true;
    }
    if(this.ballY <= 10) {
        textSize(50);
        text("PLAYER 1 WINS", 120, 200);
        //this.speed = 0;
        return true;
    }
    return false;
};

