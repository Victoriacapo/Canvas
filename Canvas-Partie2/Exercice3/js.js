var c = document.getElementById('mon_canvas');
var ctx = c.getContext('2d');

//cercle tête
ctx.beginPath();
ctx.arc(200,60,50,0,Math.PI*2,true);
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.fillStyle = 'black';
ctx.fill();

// corps
ctx.fillStyle = 'brown';
ctx.fillRect(155,105,100,180);

// 2 rectangles pr les bras
ctx.fillStyle = 'powderblue';
ctx.fillRect(75,105,80,30);
ctx.fillRect(255,105,80,30);

// 2 rectangles pr les pieds
ctx.fillStyle = 'powderblue';
ctx.fillRect(156,285,30,60);// les 2 rectangles sont sur le même point Y. car ils sont paralleles
ctx.fillRect(225,285,30,60);

//courbe entre-jambe
ctx.beginPath();
ctx.lineWidth="3";
ctx.fillStyle="#ffff"; //remplis d'une couleur blanche pr faire le creu
ctx.moveTo(186,300);
ctx.quadraticCurveTo(200,210,225,300);
ctx.fill();

ctx.beginPath();
ctx.lineWidth="3";
ctx.fillStyle="blue";
ctx.moveTo(75,105);
ctx.quadraticCurveTo(50,120,75,135);
ctx.fill();

ctx.beginPath();
ctx.lineWidth="3";
ctx.fillStyle="blue";
ctx.moveTo(335,105);
ctx.quadraticCurveTo(365,120,335,135);
ctx.fill();

ctx.beginPath();
ctx.lineWidth="3";
ctx.fillStyle="blue";
ctx.moveTo(156,345);
ctx.quadraticCurveTo(171,370,186,345);
ctx.fill();

ctx.beginPath();
ctx.lineWidth="3";
ctx.fillStyle="blue";
ctx.moveTo(225,345);
ctx.quadraticCurveTo(240,370,255,345);
ctx.fill();

// ctx.beginPath();
// ctx.lineWidth='3';
// ctx.strokeStyle='black';
// ctx.moveTo(180,115);
// ctx.quadraticCurveTo(160,100,250,115);
// ctx.moveTo(280,300);
// ctx.quadraticCurveTo(160,100,250,300);
// ctx.stroke();
