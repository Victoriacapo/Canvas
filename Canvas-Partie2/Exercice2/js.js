var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

//tête du vaisseau
ctx.beginPath();
ctx.lineWidth="3";
ctx.strokeStyle="black";
ctx.moveTo(125,244);
ctx.quadraticCurveTo(170,100,240,238);
ctx.stroke();
ctx.fillStyle = 'lightblue'; // Définition de la couleur de remplissage
ctx.fill();           // Remplissage du dernier chemin tracé

//1er angle corps vaisseau
ctx.beginPath();
ctx.lineWidth="3";
ctx.strokeStyle="black";
ctx.moveTo(75,280);
ctx.quadraticCurveTo(170,380,325,280);
ctx.stroke();
ctx.fillStyle = 'lightblue'; // Définition de la couleur de remplissage
ctx.fill();           // Remplissage du dernier chemin tracé

//2e angle corps vaisseau
ctx.beginPath();
ctx.lineWidth="3";
ctx.strokeStyle="blue";
ctx.moveTo(75,280);
ctx.quadraticCurveTo(170,180,325,280);
ctx.stroke();
ctx.fillStyle = 'lightblue'; // Définition de la couleur de remplissage
ctx.fill();           // Remplissage du dernier chemin tracé
