class player {
    constructor() {
     this.distance = 0;
     this.name = null;
     this.index = null;
    }
    getCount(){
        var playercountref = database.ref('playerCount')
        playercountref.on("value",function (data){
            playerCount = data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update (){
     var playerIndex = "players/player"+this.index
     database.ref(playerIndex).set({
         name:this.name,
         distance :this.distance
     })
    }
    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
          allPlayers = data.val();
        })
      }
}