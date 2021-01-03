var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4, car5, car6, car7, car8, car9, car10 ;

function preload(){
  c1=loadImage("images/Brown.png")
  c2=loadImage("images/Cyan.png")
  c3=loadImage("images/Dark Blue.png")
  c4=loadImage("images/Lime.png")
  c5=loadImage("images/pink.png")
  c6=loadImage("images/Purple.png")
  c7=loadImage("images/Red.png")
  c8=loadImage("images/White.png")
  c9=loadImage("images/yellow.png")
  c10=loadImage("images/Orange.png")

}

function setup(){
  canvas = createCanvas(1000,1000);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 10){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
