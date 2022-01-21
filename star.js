function Star(x, y, zoom) {
   Line (x, y, x+6*zoom, y+20*zoom, "yellow");
   Line (x, y, x-6*zoom, y+20*zoom, "yellow");
   Line (x+6*zoom, y+20*zoom, x-10*zoom, y+9*zoom, "yellow");
   Line (x-10*zoom, y+9*zoom, x+10*zoom,y+9*zoom, "yellow" );
   Line (x+10*zoom, y+9*zoom, x-6*zoom, y+20*zoom, "yellow");
}