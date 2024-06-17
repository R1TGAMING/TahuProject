class Ingame extends Phaser.Scene {
  constructor() {
    super("game");
    
    //Player Object
    this.playerObject = {
      x : 0,
      y : 0,
      speed : 200,
      health : 3,
    };
  }
  preload() {

  }
 
  
  create() {
    //Player Setup
    this.player = this.add.rectangle(config.width / 2,config.height / 2, 64, 64, 0xf00000)
    
    this.playerPhysics = this.physics.add.existing(this.player)
    this.playerPhysics.body.setCollideWorldBounds(true)
    
     //Drag Event
    this.player.setInteractive();
    this.input.setDraggable(this.player)
    this.input.on("drag", this.startDrag, this)
    
    
  }
  update() {
    
  }
  //All function
  startDrag(pointer,object,dragX,dragY) {
    object.x = dragX
    object.y = dragY
  }
  
}