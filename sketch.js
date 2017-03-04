var newWidth=100;
var newHeight=50;

//setup function executes once
function setup(){
    createCanvas(600,400);
    background(90);
}

//draw function loops forever
function draw(){
    // background(50);
    if(mouseIsPressed){
         noStroke();
    fill(150,0,255,100);
    ellipse(mouseX,mouseY,newWidth,newHeight);
    }
   
}