function Triangle(x1, y1, x2, y2, x3, y3, color){
    Line(x1, y1, x2, y2, color);
    Line(x2, y2, x3, y3, color);
    Line(x3, y3, x1, y1, color);
}   

function Tree(x, y, zoom) {
    Triangle (x, y, 
              x+10*zoom, y+10*zoom, 
              x-10*zoom, y+10*zoom, 
              "green");

    Triangle (x, y+10*zoom, 
              x+20*zoom, y+30*zoom, 
              x-20*zoom, y+30*zoom, 
              "green");

    Triangle (x, y+30*zoom, 
              x+30*zoom, y+60*zoom, 
              x-30*zoom, y+60*zoom, 
              "green"); 

    Line (x+10*zoom, y+60*zoom, x+10*zoom, y+70*zoom, "brown");
    Line (x+10*zoom, y+70*zoom, x-10*zoom, y+70*zoom, "brown");
    Line (x-10*zoom, y+70*zoom, x-10*zoom, y+60*zoom, "brown");

}