var clock = setInterval(dynamicclock,1000);

function dynamicclock()
{
var a = new Date();
var time = a.toLocaleTimeString();
document.getElementById('showclock').innerHTML = time;
 
}