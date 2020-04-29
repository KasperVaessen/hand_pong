let xPos;
let xPos2;
let ball;
let a;
let v;

function setup() {
    createCanvas(600, 400);
    ball = new Ball(5);
    xPos = 300;
    xPos2 = 300;
    a = 0.002;
    v = 2;
}

function draw() {
    background(220);
    strokeWeight(0);
    fill(255,0,0);

    ball.checkBounce();
    if(ball.checkLose()) {
        console.log("kut")
        ball = new Ball(5);
        a = 0.002;
        v = 2;
    };
    ball.move(a);
    ellipse(ball.ballX, ball.ballY, 20);

    if(keyIsDown(LEFT_ARROW) && xPos > 50) {
        xPos -= v;
    }
    if(keyIsDown(RIGHT_ARROW) && xPos < 550) {
        xPos += v;
    }

    if(keyIsDown(65) && xPos2 > 50) {
        xPos2 -= v;
    }
    if(keyIsDown(68) && xPos2 < 550) {
        xPos2 += v;
    }

    strokeWeight(5);
    fill(255, 0, 0);
    line(xPos-50, 390, xPos+50, 390);
    line(xPos2-50, 10, xPos2+50, 10);
    if(v > 7) {
        a = 0;
    }
    v += a;
}