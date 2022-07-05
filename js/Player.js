class Player {
  constructor() {
    this.name=null;
    this.index=null;
    this.posX = 0
    this.posY = 0
  }
  getCount(){
    var countRef = database.ref("playerCount");
    countRef.on("value",function(data){
      playerCount = data.val()
    }) 
  }
  updateCount(count){
    database.ref("/").update({
      playerCount:count
    })
  }
  static getPlayersInfo(){
  var playerInfoRef = dataBase.ref("players")
  playerInfoRef.on("value",data =>{
    allPlayers=data.val()
  }) 
  }

  //vposição do carrinho
  addPlayer(){
   var playerIndex = "players/player"+ this.index
   if(this.index===1){
    this.posX=width/2-200
   }else{
    this.posX=width/2+200
   }
   database.ref(playerIndex).set({
    name:this.name,
    posX:this.posX,
    posY:this.posY
   })
  }
}
