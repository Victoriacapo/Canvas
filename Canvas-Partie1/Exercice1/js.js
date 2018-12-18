var c = document.getElementById('mon_canvas');
var ctx = c.getContext('2d');
// Le reste du script ici...
// base de la maison, fond vert
ctx.fillStyle = 'olivedrab';
ctx.fillRect(100,150,200,200);
// porte
ctx.fillStyle = 'pink';
ctx.fillRect(170,280,50,70);

// fenetre
ctx.fillStyle = 'powderblue';
ctx.fillRect(120,180,30,30);
ctx.fillRect(255,180,30,30);

//toit
ctx.beginPath();      // Début du chemin
ctx.moveTo(200,50);   // Le tracé part du point 200 (car la moitie de 400 qui est la taille du canvas dans l'html)
ctx.lineTo(100,150);  // Un segment est ajouté
ctx.lineTo(300,150);  // Un segment est ajouté 
ctx.fillStyle = 'lightblue'; // Définition de la couleur de remplissage
ctx.fill();           // Remplissage du dernier chemin tracé
