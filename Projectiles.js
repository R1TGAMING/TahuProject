class Projectiles extends Phaser.GameObjects.Rectangle {
  constructor(scene, posX, posY){
    super(scene, posX, posY, 64, 32, 0xf00000);
    
    //Add To Scene And Physics
    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    
    //Set This Velocity From Y
    this.body.velocity.y = - 1000;
    
    //Add To Group Scene
    scene.projectiles.add(this);
    
    }
    
    update() {
      //If This Lower Then 40 Will Got Destroyed
      if (this.y < 40) {
        this.destroy();
      }
      
  }
}