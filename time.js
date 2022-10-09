var webstar= new Date("5/21/2022");
var webnow = new Date();
var dotime = webnow.getTime() - webstar.getTime();
var donow = Math.floor(dotime / (1000 * 60 * 60 * 24));
document.write(+donow)
