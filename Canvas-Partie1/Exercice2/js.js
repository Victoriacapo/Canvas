var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

//carree en rotation pour le toit
ctx.rotate(Math.PI/4); //ou rotate(ctx,45);
ctx.fillStyle = "olivedrab";
ctx.fillRect(500,-200,200,200);


//carree stable pour la base de la maison.
ctx.setTransform(1, 0, 0, 1, 0, 0);// permet que la rotation n'affecte pas le carrée stable
ctx.fillStyle = "blue";
ctx.fillRect(355,350,280,280);

// porte
ctx.fillStyle = "pink";
ctx.fillRect(170,280,50,70);

// fenetre
ctx.fillStyle = "powderblue";
ctx.fillRect(120,180,30,30);
ctx.fillRect(255,180,30,30);
