class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
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
    this.reset.position(displayWidth-100,20);

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

    this.reset.mousePressed(()=>{
      game.update(0);
      player.updateCount(0);
      player.updateReset();
      Player.updateCarsAtEnd(0);
      game = new Game();
      game.getState();
      game.start();
    });

  }
 displayEnd(){
  var leaderboard = createElement('h1')
  leaderboard.position(displayWidth/2,displayHeight/2-300);
  var display_position = 100;
    for(var plr in allPlayers){
      if (plr === "player" + player.index)
        fill("red")
      else
        fill("black");

      display_position+=20;
      leaderboard.position(displayWidth/2,display_position);
      textSize(15);
    leaderboard.html(allPlayers[plr].name + ": " + allPlayers[plr].rank, 120,display_position)
    }
   }


}
