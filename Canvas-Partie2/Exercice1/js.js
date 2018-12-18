var c = document.getElementById('mon_canvas');
var ctx = c.getContext('2d');

//boule de glace
ctx.beginPath();
ctx.arc(200,150,98,0,Math.PI,true); //en mettant true ou false la courbe s'inverse
ctx.strokeStyle = 'red'; //remplie la ligne effectué
ctx.stroke();
ctx.fillStyle = 'pink'; //remplie la forme, représente la couleur de fond
ctx.fill();

//cornet
ctx.beginPath();      // Début du chemin
ctx.moveTo(200,350);   // Le tracé part du point 200 (car la moitie de 400 qui est la taille du canvas dans l'html)
ctx.lineTo(100,150);  // Un segment est ajouté
ctx.lineTo(300,150);  // Un segment est ajouté
ctx.fillStyle = 'lightblue'; // Définition de la couleur de remplissage
ctx.fill();           // Remplissage du dernier chemin tracé
