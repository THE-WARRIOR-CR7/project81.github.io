canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(100,89,64,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=2;
ctx.arc(300,89,64,0,2*Math.PI);
ctx.stroke();  


ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=2;
ctx.arc(500,89,64,0,2*Math.PI);
ctx.stroke();  

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=2;
ctx.arc(200,125,64,0,2*Math.PI);
ctx.stroke();  

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=2;
ctx.arc(400,125,64,0,2*Math.PI);
ctx.stroke();  

