class Game {
  constructor() {}

  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount=player.getCount()
    car1=createSprite(width/2-50,height-100)
    car1.addImage("carro1",car1Img)
    car1.scale=0.1
    car2=createSprite(width/2+100,height-100)
    car2.addImage("carro2",car2Img)
    car2.scale=0.1
    cars=[car1,car2]
  }
  getState(){
    var stateRef = database.ref("gameState");
    stateRef.on("value",function(data){
      gameState = data.val()
    }) 
  }
  update(state){
    database.ref("/").update({
      gameState:state
    })
  }
  play(){
    form.hide()
    Player.getPlayersInfo()
    if(allPlayers!==undefined){
    image(trackImg,0,-height*5,width,height*6)
    drawSprites()
    }
}
}