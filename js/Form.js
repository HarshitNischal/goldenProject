class Form {

  constructor() {
    this.input = createInput(" ").attribute("placeholder","name");
    this.button = createButton('Play');
    this.kill = createButton('Kill');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('reset');
    this.greet2 = createElement('h2');
    this.task = createButton('Task');
    this.replay=createButton('Replay');

  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);

this.reset.position(displayWidth-160 , 20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

 
  //  this.greet2.html(player.name)
  // this.greet2.position(displayWidth/2 - 70, displayHeight/4);
    this.reset.mousePressed(()=>{
      this.greet2.hide();
      player.updateCount(0)
      game.update(0)
    })
    this.replay.mousePressed(()=>{
      var playerRef=database.ref('players');
      playerRef.remove();
      clear();
      game.start();
    })
  }  
  imposter()
{ 
  debugger;
  this.task.hide();
  this.kill.position(displayWidth-250 , 20);
  if(player.type==="Imposter"){
    
    var imposterPlayer="player"+player.index
    //console.log(imposterPlayer)
    
     for (var plr in allPlayers){  
      console.log(allPlayers[plr])
      if(player.x - imposterPlayer.x <= 100 || player.y - imposterPlayer.y <= 100){
      
        this.kill.mousePressed(()=>{
          console.log("working")
         var playerIndex = "players/player" + i;
         database.ref('/').update({
           playerIndex:null
         })
        })
       }
      } 

  
  }     

  }
crewMate()
{
  this.kill.hide();
  if(player.type==="crewMate")
  this.task.position(displayWidth-250 , 20);
  this.task.mousePressed(()=>{
    for( var b in boxes)
    {
        if(player.positionx - boxes[b].x <100 || player.y - boxes[b].y <100){
        boxes[b].visible=false;
        return true;
      }
    }
  })
}
}