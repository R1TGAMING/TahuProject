class Projectiles extends Phaser.GameObjects.Rectangle {
  constructor(scene, posX, posY){
    super(scene, posX, posY, 64, 32, 0xf00000);
    scene.add.existing(this);
    scene.physics.world.enableBody(this)
    setTimeout(() => {
      this.body.velocity.y = - 1000
    })
    
  }
}