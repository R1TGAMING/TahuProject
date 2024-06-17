class scene1 extends Phaser.Scene {
  constructor(){
    super("menuGame");
  }
  preload() {
    //Load background
    this.load.image("bg1", "Clouds/Clouds 1/1.png");
    this.load.image("bg2", "Clouds/Clouds 1/2.png");
    
  }
  create() {
    //Background
     this.add.image(0,0, "bg1").setScale(config.width, config.height);
    this.bg2 = this.add.tileSprite(0, 1100, config.width * 2, 400, "bg2").setScale(2);
    
        
    //Text
     //Play Button
    this.play = this.add.text(50, 800, "Play", {
      fontFamily : "Sofia Sans",
      fontSize : "100px",
    });
    this.play.setInteractive();
     //Title
    this.add.text(config.width / 2 - 120, 200, "Tahu", {
      fontSize : "100px",
      align : "center"
    });
     //About Button
    this.about = this.add.text(50, 900, "About", {
      fontFamily : "Sofia Sans",
      fontSize : "100px",
    });
    this.about.setInteractive();
    
    //PointerDown Event 
     //About Button Event
    this.about.on("pointerdown", () => {
      this.scene.start("about");
    });
     //Play Button Event 
     this.play.on("pointerdown", () => {
       this.scene.start("game");
     });
  }
  update() {
    //Loop Background To Position X
    this.bg2.tilePositionX -= 0.3;
    this.bg2.tilePositionY = 0;
  }
  
}