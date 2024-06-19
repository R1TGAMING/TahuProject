class Ingame extends Phaser.Scene {
  constructor() {
    super("game");
    
    //Player Object
    this.playerObject = {
      speed : 200,
      health : 3,
    };
    
  }
  
  preload() {

  }
 
  
  create() {
    //Projectiles
    this.projectiles = this.add.group();
    
    //Player Setup
    this.player = this.add.rectangle(config.width / 2,config.height / 2, 64, 64, 0xf00000);
    
    this.playerPhysics = this.physics.add.existing(this.player);
    this.playerPhysics.body.setCollideWorldBounds(true);
    
     //Drag Event
    this.player.setInteractive();
    this.input.setDraggable(this.player);
    this.input.on("drag", this.startDrag, this);
    
    
  }
  update() {
    //Update Projectiles
    this.shootProjectiles();
     //Will Loop Once Object And Update The Object
    for(var i = 0; i < this.projectiles.getChildren().length; i++){
      var shoot = this.projectiles.getChildren()[i];
      shoot.update();
    }
  }
  
  //All function
  startDrag(pointer,object,dragX,dragY) {
    object.x = dragX;
    object.y = dragY;
    
  }
  
  shootProjectiles() {
    let projectiles = new Projectiles(this, this.player.x, this.player.y - 100);
    return projectiles;
  }
  
  
}