//global variable declarations
let box, ball;
let canvas_w = 640;
let canvas_h = 480;

function setup(){
    //set up the initial state of the program
    new Canvas(canvas_w, canvas_h);

    world.gravity.y = 10; 

    box = new Sprite();
    box.width = 50;
    box.height = 100;
    box.x = width / 2;  //width is the width of the canvas
    box.y = height * .75;  //height is the height of the canvas
    box.color = "red";
    box.collider = "static"

    ball = new Sprite();
    ball.radius = 25;
    ball.x = width / 2;  //width is the width of the canvas
    ball.y = height * .125;  //height is the height of the canvas
    ball.color = "red";
    ball.bounciness = 1;

}

function draw(){
    background("skyblue");
    clear();
}