canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let A = new Point(199, 200, 20, "Red"); //Punt A
let B = new Point(600, 200, 20, "green"); //Punt B
let C = new Point(400, 400, 20, "blue"); //Punt C

let AB = new Point(0, 0, 10, "white"); //Punt AB
let BC = new Point(0, 0, 10, "White"); //Punt BC
let AC = new Point(0, 0, 10, "White"); //Punt AC

let Centroid = new Point(0, 0, 10, "Purple"); //Centroid punt

let l = new LinearFunction(1, 1); //AB lijn
let m = new LinearFunction(1, 1); //BC lijn
let n = new LinearFunction(1, 1); //AC lijn

let o = new LinearFunction(1, 1); //AB half naar C lijn
let p = new LinearFunction(1, 1); //BC half naar A lijn
let q = new LinearFunction(1, 1); //AC half naar B lijn

A.drag();
B.drag();
C.drag();

function animate()
{
  requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);

  l.defineLineWithTwoPoints(A, B); //Lijn AB
  l.draw(context);

  m.defineLineWithTwoPoints(B, C); //Lijn BC
  m.draw(context);

  n.defineLineWithTwoPoints(A, C); //Lijn AC
  n.draw(context);

  o.defineLineWithTwoPoints(AB, C); //Lijn AB half naar C lijn.
  o.draw(context);

  p.defineLineWithTwoPoints(BC, A); //Lijn BC half naar A lijn.
  p.draw(context);

  q.defineLineWithTwoPoints(AC, B); //Lijn AC half naar B lijn.
  q.draw(context);

  AB.x = (A.x + B.x) / 2; //Positie AB punt
  AB.y = (A.y + B.y) / 2;

  BC.x = (B.x + C.x) / 2; //Positie BC punt
  BC.y = (B.y + C.y) / 2;

  AC.x = (A.x + C.x) / 2; //Positie AC punt
  AC.y = (A.y + C.y) / 2;

  //Centroid.x = (A.x + B.x + C.x) / 3; //Centroid position
  //Centroid.y = (A.y + B.y + C.y) / 3;

  Centroid.x = o.intersection(q).x;
  Centroid.y = o.intersection(q).y;

  A.draw(context);
  B.draw(context);
  C.draw(context);

  A.printText("A");
  B.printText("B");
  C.printText("C");

  AB.draw(context);
  BC.draw(context);
  AC.draw(context);

  AB.printText("AB");
  BC.printText("BC");
  AC.printText("AC");

  Centroid.draw(context);

  Centroid.printText("Centroid");
}

animate();
