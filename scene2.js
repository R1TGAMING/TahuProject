class scene2 extends Phaser.Scene {
  constructor(){
    super("about");
  }
  preload() {
    //Load background
    this.load.image("bg1", "Clouds/Clouds 1/1.png");
    this.load.image("bg2", "Clouds/Clouds 1/2.png");
    this.load.image("bg3", "Clouds/Clouds 1/4.png");
  }
  create() {
     //Background
     this.add.image(0,0, "bg1").setScale(config.width, config.height);
    this.bg2 = this.add.tileSprite(0, 1100, config.width * 2, 400, "bg2").setScale(2);
    this.bg3 = this.add.tileSprite(300, 1100, config.width * 2, 400, "bg3").setScale(1.5);
    
    //Text
     //Information about
    this.add.text(20,20, "Hi! i am IPIdev\nAssets :", {
      fontFamily : "Sofia Sans",
      fontSize : "80px",
    });
    this.add.text(20, 200, "https://free-game-assets.itch.io/free-sky-with-clouds-background-pixel-art-set", {
      fontFamily : "Sofia Sans",
      fontSize : "18px",
    });
     //Back Button
    this.backButton = this.add.text(20, 1150, "Back", {
      fontFamily : "Sofia Sans",
      fontSize : "80px",
    });
    this.backButton.setInteractive();
    this.backButton.on("pointerdown", () => {
      this.scene.start("menuGame");
    });
    
  }
  update() {
    //Loop Background To Position X
    this.bg2.tilePositionX -= 0.3;
    this.bg2.tilePositionY = 0;
    this.bg3.tilePositionX += 0.1;
  }
  
}