class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(50,200);
    car1.addImage(c1)
    car1.scale=0.1
    car2 = createSprite(60,200);
    car2.addImage(c2)
    car2.scale=0.1
    car3 = createSprite(70,200);
    car3.addImage(c3)
    car3.scale=0.1
    car4 = createSprite(80,200);
    car4.addImage(c4)
    car4.scale=0.1
    car5 = createSprite(90,200);
    car5.addImage(c5)
    car5.scale=0.1
    car6 = createSprite(100,200);
    car6.addImage(c6)
    car6.scale=0.1
    car7 = createSprite(110,200);
    car7.addImage(c7)
    car7.scale=0.1
    car8 = createSprite(120,200);
    car8.addImage(c8)
    car8.scale=0.1
    car9 = createSprite(130,200);
    car9.addImage(c9)
    car9.scale=0.1
    car10 = createSprite(140,200);
    car10.addImage(c10)
    car10.scale=0.01

    cars = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 40;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 10;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        
       cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
          cars[index - 1].shapeColor = "red";
          //camera.position.x = displayWidth/2;
          //camera.position.y = cars[index-1].y
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      cars[index-1].y +=3
      player.update();
    }
    if(keyIsDown(DOWN_ARROW) && player.index !== null){
      cars[index-1].y -=3
      player.update();
    }
    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      cars[index-1].x +=3
      player.update();
    }
    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      cars[index-1].x -=3
      player.update();
    }
    drawSprites();
  }
}
