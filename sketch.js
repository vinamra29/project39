var canvas , playerCount,database,f,g,p;
var gameState = 0;
var allPlayers;
var cars;
var car1, car2, car3, car4, car1Img,car2Img,car3Img,car4Img;
function preLoad (){
  car1Img = loadImage("a1-removebg-preview.png")
  car2Img = loadImage("a2-removebg-preview.png")
  car3Img = loadImage("a3-removebg-preview.png")
  car4Img = loadImage("a4-removebg-preview.png")
}
function setup(){
  createCanvas(windowWidth,windowHeight)
  database = firebase.database();
 g = new game ()
 g.getState()
 g.start()
}
function draw(){
if (playerCount == 4){
  g.update(1)
}
if (gameState == 1){
  clear ()
  g.play()
}

}