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

    car1 = createSprite(960,253);
    car1.addImage(c1)
    car1.scale=0.11
    car2 = createSprite(1019,239);
    car2.addImage(c2)
    car2.scale=0.07
    car3 = createSprite(965,303);
    car3.addImage(c3)
    car3.scale=0.11
    car4 = createSprite(987,338);
    car4.addImage(c4)
    car4.scale=0.11
    car5 = createSprite(1037,354);
    car5.addImage(c5)
    car5.scale=0.07
    car6 = createSprite(1058,242);
    car6.addImage(c6)
    car6.scale=0.07
    car7 = createSprite(1100,262);
    car7.addImage(c7)
    car7.scale=0.019
    car8 = createSprite(1113,300);
    car8.addImage(c8)
    car8.scale=0.10
    car9 = createSprite(1106,334);
    car9.addImage(c9)
    car9.scale=0.12
    car10 = createSprite(1076,358);
    car10.addImage(c10)
    car10.scale=0.11
    carGroup.add(car1) 
    carGroup.add(car2)
    cars = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];
    box=new Box(660,649)
    box2=new Box(1747,456)
    box3=new Box(1742,586)
    box4=new Box(1396,909)
    box4=new Box(1147,919)
    box5=new Box(268,383)
    box6=new Box(437,868)
    box7=new Box(186,416)
    box8=new Box(190,679)
    box9=new Box(765,536)
    box10=new Box(1438,201)
  boxes=[box,box2,box3,box4,box5,box6,box7,box8,box9,box10]
  wall1=createSprite(330,120,250,50) 
  wall1.shapeColor=rgb(58,73,73) 
  wall2=createSprite(219,128,100,10) 
  wallGroup.add(wall1) 
  wallGroup.add(wall2)
 
  }

  play(){
    form.hide();

    Player.getPlayerInfo();

    
    
    if(allPlayers !== undefined){
      //var display_position = 100;
      background("#c68767")
      image(t,0,0,displayWidth,displayHeight)
      box.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    wall1.display()
    wall2.display()

    fill("black")
      text(mouseX,displayWidth-100,100)
      text(mouseY,displayWidth-100,150)
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x;
      var y;

      

      for(var plr in allPlayers){
       index = index+1;
                 x = 500-allPlayers[plr].positionx;
                 y=500-allPlayers[plr].positiony;
                     
                    cars[index -1].x = x;
                    cars[index - 1].y =y;
                       
                 if(index === player.index){
                          // to display player name on the basket.
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);
                         /*allPlayers.array.forEach(element => {
                           element.type = "Crewmate";
                         });*/
                         //allPlayers[plr].type = "Crewmate";

                         
                   
                         

                    //var imposterPlayer = allPlayers.array.filter(player => player.type === "Imposter")[0];
                   // var crewPlayers = allPlayers.array.filter(player => player.type === "crewmate");
                    
                    //TODO: Save allPlayer ;
                    
                     }
      }

    }
    carGroup.collide(wallGroup)
    var r=Math.round(random(1,10))
    console.log(r)
    if(player.index===r)
    {
      player.type ="Imposter"
      player.update()
    }
    
    if(keyIsDown(LEFT_ARROW))
    {
      player.x+=5;
      player.update()
    }    
    if(keyIsDown(RIGHT_ARROW))
    {
      player.x-=5;
      player.update()
    }
    if(keyIsDown(UP_ARROW))
    {
      player.y+=5;
      player.update()
    }
    if(keyIsDown(DOWN_ARROW))
    {
      player.y-=5;
      player.update()
    }
/*if(cars.index!==null){
  if(cars.isTouching(boxes)){
    alert("touched the box")
  }
}*/

    /*if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      cars[index-1].x +=3
      player.update();
    }
    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      cars[index-1].x -=3
      player.update();
    }
    if(player.distance>4100){
      //console.log(error)
      gameState = 2
      
    }*/

    drawSprites();
  }
  end(){
    console.log("gameEnded",player.rank)
   // form.end();
  }
}
