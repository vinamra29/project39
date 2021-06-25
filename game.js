class game {
    constructor(){

    }
    getState(){
        var gameStateref = database.ref('gameState');
        gameStateref.on("value",function(data){
            gameState = data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

   async start(){
        if(gameState==0){
            f=new form ()
            f.display()
            p = new player ()
            var playerCountref =await database.ref('playerCount').once("value")
            if (playerCountref.exists()){
                
                playerCount = playerCountref.val()
                p.getCount()
          }
           
        }
         car1 = createSprite(100,500);
         car1.addImage(car1Img)
         car2 = createSprite(300,500)
         car2.addImage(car2Img)
         car3 = createSprite(500,500);
         car3.addImage(car3Img)
         car4 = createSprite(700,500)
         car4.addImage(car4Img)
         cars = [car1,car2,car3,car4] 
    }
    play(){
        f.hide();
        textSize(30);
        text("Game Start", 120, 100)
        player.getPlayerInfo();
    
        if(allPlayers !== undefined){
          var index = 0;
          var x = 0;
          var y ;
          var display_position = 130;
          for(var plr in allPlayers){
            index = index+1
            x = x+200
            y = windowHeight-allPlayers[plr].distance
            cars[index-1].x = x  
            cars[index-1].y=y
            if (index==p.index){
              cars[index-1].shapeColor = "red"
              camera.position.x= windowWidth/2
              camera.position.y= cars[index-1].y
            }
            if (plr === "player" + p.index)
              fill("red")
            else
              fill("black");
    
            display_position+=20;
            
            textSize(15);
            text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
          }
        }
    
        if(keyIsDown(UP_ARROW) && p.index !== null){
          p.distance +=50
          p.update();
        }

        drawSprites();
      }
}