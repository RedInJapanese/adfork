class Map extends AdventureScene {
    constructor() {
        super("map", "Map(Click to continue)");
    }

    onEnter() {

        let clip = this.add.text(this.w * 0.3, this.w * 0.3, "Room One\n   |\nRoom Two\n   |\nRoom Three\n   |\nRoom Four ---Door A\n   |       |\nRoom Five   -- Door B\n").setFontSize(this.s * 2)
        this.input.on('pointerdown', () => this.scene.start('room1'));
    }
}


class Room1 extends AdventureScene {
    constructor() {
        super("room1", "First Room");
    }

    onEnter() {

        let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Metal, bent."))
            .on('pointerdown', () => {
                this.showMessage("No touching!");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

        let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a nice key.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('key');
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
            })

        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("It's locked. Can you find a key?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.loseItem("key");
                    this.showMessage("*squeak*");
                    door.setText("🚪 unlocked door");
                    this.gotoScene('room2');
                }
            })

    }
}

class Room2 extends AdventureScene {
    constructor() {
        super("room2", "Second Room");
    }
    onEnter() {
        let paper = this.add.text(this.w * 0.5, this.w * 0.1, "📝 piece of paper ")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Random piece of paper.")
            })
            .on('pointerdown', () => {
                this.showMessage("Paper: Welcome to the escape room. The next room is not for the faint of heart.");
            })

        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {this.showMessage("Proceed?");
            })
            .on('pointerdown', () => {
                this.showMessage("*squeak*");
                this.gotoScene('room3');
            })
    }
}

class Room3 extends AdventureScene {
    constructor() {
        super("room3", "Third Room");
    }
    onEnter() {
        let pressed = false
        let bbutton = this.add.text(this.w * 0.1, this.w * 0.1, "🅱️ B button")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a button with the letter B on it.")
            })
            .on('pointerdown', () => {
                pressed = true
                this.showMessage("Yay! Proceed!");
            })
        let abutton = this.add.text(this.w * 0.5, this.w * 0.1, "🅰️ A button")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a button with the letter A on it.")
            })
            .on('pointerdown', () => {  
                this.showMessage("Oops! Wrong button!");
                this.tweens.add({
                    targets: abutton,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            })

        let door = this.add.text(this.w * 0.3, this.w * 0.5, "🚪 locked door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {this.showMessage("Proceed?");
            })
            .on('pointerdown', () => {
                if(pressed == true){
                    this.showMessage("*squeak*");
                    this.gotoScene('room4');
                } else {
                    this.showMessage("Looks like you have to push a button. Wonder which one...")
                }

            })
    }
}

class Room4 extends AdventureScene {
    constructor() {
        super("room4", "Fourth Room");
    }
    onEnter() {
        let doora = this.add.text(this.w * 0.1, this.w * 0.1, "🚪 door a")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Door A. Enter to see what's inside.")
            })
            .on('pointerdown', () => {
                this.showMessage("*squeak*");
                this.gotoScene('doora');            
            })

        let doorb = this.add.text(this.w * 0.5, this.w * 0.1, "🚪 door b")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {this.showMessage("Door B. Enter to see what's inside.");
            })
            .on('pointerdown', () => {
                this.showMessage("*squeak*");
                this.gotoScene('doorb');
            })

        let doorc = this.add.text(this.w * 0.3, this.w * 0.3, "🚪 door c")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {this.showMessage("Door C. Looks like you need a code to go through.");
            })
            .on('pointerdown', () => {
                if (this.hasItem("passcode")) {
                    this.loseItem("passcode");
                    this.showMessage("*squeak*");
                    this.gotoScene('room5');
                }
        })
    }
}

class DoorA extends AdventureScene {
    constructor() {
        super("doora", "Door A");
    }
    onEnter() {
        let doora = this.add.text(this.w * 0.1, this.w * 0.1, "🚪 Go Back?")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Return to fourth room?")
            })
            .on('pointerdown', () => {
                this.showMessage("*squeak*");
                this.gotoScene('room4');            
            })

        let pass = this.add.text(this.w * 0.5, this.w * 0.1, "📝 passcode")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {this.showMessage("It's a piece of paper with a code written on it, maybe you should save it for later.");
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the passcode.");
                this.gainItem("passcode")
                this.tweens.add({
                    targets: pass,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => pass.destroy()
                });
            })
    }
}

class DoorB extends AdventureScene {
    constructor() {
        super("doorb", "Door B");
    }
    onEnter() {
        let doorb = this.add.text(this.w * 0.1, this.w * 0.1, "🚪 Go Back?")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Return to fourth room?")
            })
            .on('pointerdown', () => {
                this.showMessage("*squeak*");
                this.gotoScene('room4');            
            })
    }
}

class Room5 extends AdventureScene {
    constructor() {
        super("room5", "Fifth Room");
    }

    onEnter() {
        let textObject = this.add.text(
            400, //x
            0,//y
            "Last Room", //text
            {
                font: "80px Courier New",
                color: "#000000",
            } //style
        );
        this.tweens.add({
            targets: textObject,
            y: 320,
            duration: 800,
            repeat: 0
        });
        let door = this.add.text(this.w * 0.3, this.w * 0.3, "🚪")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                    this.showMessage("Finish the game?");
            })
            .on('pointerdown', () => {
                this.showMessage("*squeak*");
                this.gotoScene('outro');
            })

    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    preload(){
        this.load.image('thing', './assets/logo.png');
        this.load.image('log', './assets/ltext.png');
    }
    create(){
        this.add.image(910,500,'thing')
        this.add.image(900,680,'log')

        this.graphics = this.add.graphics();

        this.textObject = this.add.text(
            810, //x
            730,//y
            "Games", //text
            {
                font: "40px Arial",
                color: "#ffffff",
            } //style
        );
        this.textObject = this.add.text(
            810, //x
            780,//y
            "Presents", //text
            {
                font: "40px Arial",
                color: "#ffffff",
            } //style
        );
        this.cameras.main.fadeIn(6000);
        this.time.addEvent({
            delay: 3000, 
            loop:false,
            callback: () => {
                this.scene.start("map")
            }
        })
    }
    update(){
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    preload(){
        this.load.image('monke', './assets/monke.jpg');
    }
    create() {
        this.add.text(600, 400, "Yay! You beat the game!").setFontSize(50);
        this.add.text(600, 500, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
        let sprite = this.add.image(910,-10,'monke')
        sprite.setScale(.3)

        this.tweens.add({
            targets: sprite,
            y: 700,
            duration: 500,
            repeat: 0
        });
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Map, Room1, Room2, Room3, Room4, DoorA, DoorB, Room5, Outro],
    title: "Adventure Game",
});

