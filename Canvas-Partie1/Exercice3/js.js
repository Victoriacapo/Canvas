var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

//1er carree
ctx.fillStyle = "blue";
ctx.fillRect(130,150,150,50);
//2e carree
ctx.fillStyle = "Black";
ctx.fillRect(105,200,200,50);
//1e roue
ctx.beginPath();
ctx.arc(150,301,50,0,Math.PI*2,true);
ctx.strokeStyle = "black";
ctx.stroke();
//2e roue
ctx.beginPath();
ctx.arc(290,301,50,0,Math.PI*2,true);
ctx.strokeStyle = "black";
ctx.stroke();
