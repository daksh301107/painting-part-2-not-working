var drawing=[];
var currentPath=[];
function setup() {
  createCanvas(500, 200);
  canvas.mousePressed(startPath);
  //canvas.mousereleased(endPath);
}
function startPath(){
    currentPath=[];
    drawing.push(currentPath);    
}
//function endPath(){
  //  drawing.push(currentpath);
//}
function draw() {
    background(204,240,239);
      
    if (mouseIsPressed){
        fill(0);
        var point={
            x:mouseX,
            y:mouseY
        }
        currentPath.push(point);
    
    }


stroke(0);
strokeWeight(4);
noFill();
for (var i=0;i<drawing.length;i++){
    var path=drawing[i];
    beginShape();
    for(var j=0;j<path.length;j++){
     vertex(path[j].x,path[j].y)
}   

endShape();   
}
}