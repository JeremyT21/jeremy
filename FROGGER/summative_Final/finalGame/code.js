/*
    Jeremy Thummel, Sohail Meghani, David Cacarovski
    June 18th, 2020
    ICS2O Summative Assignment - Frogger
    This code is what makes up our game.
*/
let _this;
      
//variables for our sprites
let frogger;
let frogger2;
let fly;
let background;
let arrow;
let road;
let road2;
let road3;
let road4;
let road5;
let water;
let water2;
let lava;
let lava2;
let log;
let log2;
let log3;
let log4;
let train;
let trainTrack;
let car;
let car2;
let carRight;
let carRight2;
let victory;
let blackBox;
let titleBackground;
let gameOverScreen;
let desert;
let snow;
let fire;
let pausebg;
let snowBall;
let snowBall2;
let snowBall3;
let snowBall4;
let fireBall;
let fireBall2;
let fireBall3;
let fireBall4;
let snowMobile;
let snowMobile2;
let snowMobile3;
let snowMobile4;

//variables to control music
let musicControl=1;
let musicTrue = true;

//variables to control sprite movement
let dxCar;
let dxCarRight;
let dxTrain;
let dxFly;
let dyFly;
let dxLog;
let dxFrogger;
let mapRandom;
let dxFireBall;
      
//variables for our input keys
let leftArrow;
let rightArrow;
let downArrow;
let upArrow;
let spaceKey;
let enterKey;
let pauseKey;
let unpauseKey;
      
//variables for game text objects
let title;
let play;
let help;
let textScore;//used to store the text itself
let fliesEaten=+0;//this is used to track the actual score
let victoryText;
let victoryText2;
let victoryTextShadow;
let victoryTextShadow2;
let titleText;
let titleText2;
let titleText3;
let gameOverText;
let gameOverText2;
let gameOverTextShadow;
let gameOverTextShadow2;
let pauseText;
let pauseText2;
let pauseTextShadow;
let pauseTextShadow2;
let pauseTrue = true;

//variables for audio
let bg1;
let tm;
let vs;
let go;
let db;
let sb;
let pm;
let pa;
let vb;

//variables for powerups
let boot;
let bootz = 0;
let bootReady = 0;
let yellowTrue = true;
//variables to control the game's stages (e.g. the game over stage) and / or scenes
let sceneReady=+0;
let unpauseReady=1;

//
class titleScreen extends Phaser.Scene
{
    constructor (config)
    {
       super({key: "titleScreen"});
    }
    preload ()
    {
        //SPRITES

        this.load.image('titlebg', '../assets/images/title.jpg');

        //AUDIO

        this.load.audio('tm','../audio/titleMusic.m4a');

        this.load.audio('bg1','../audio/backgroundmusic.mp3');
    }
    create (data)
    {
        titleBackground = this.add.sprite(400, 300, 'titlebg');
        //KEYS
        spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        //MUSIC
        tm = this.sound.add('tm');

        bg1 = this.sound.add('bg1');
    }
    update ()
    {
        if (musicControl == 1)
        {
            tm.play();
            musicControl = musicControl + 1;
        }
        if(enterKey.isDown)
        {
            tm.stop();
            game.scene.stop("titleScreen");
            game.scene.start("mainGame");
            musicControl = 1;
        }
    }// END OF UPDATE
}
class mainGame extends Phaser.Scene
{
    constructor (config)
    {
        super({key: "mainGame"});
            _this=this;
    }
      
    preload ()
    {
        //SPRITES

        this.load.image('frogger','../assets/sprites/frogger.png');

        this.load.image('frogger2','../assets/sprites/froggerPowerUp.png');
        
        this.load.image('fly','../assets/sprites/fly.png');
        
        this.load.image('background','../assets/sprites/background.jpg');

        this.load.image('road','../assets/sprites/road.jpg');

        this.load.image('water','../assets/sprites/water.png');

        this.load.image('car','../assets/sprites/car.png');

        this.load.image('carRight','../assets/sprites/car2.png');

        this.load.image('train','../assets/sprites/train2.png');

        this.load.image('trainTrack','../assets/sprites/trainTrack.png');

        this.load.image('log','../assets/sprites/log.png');

        this.load.image('victory','../assets/sprites/victoryBox.png');

        this.load.image('blackBox','../assets/sprites/blackBox.png');

        this.load.image('gameOverScreen','../assets/sprites/gameOverScreen.png');

        this.load.image('boot','../assets/sprites/boot2.png');

        this.load.image('yellowFrogger',' ../assets/sprites/froggerPowerUp.png');

        //AUDIO

        this.load.audio('bg1','../audio/backgroundmusic.mp3');

        this.load.audio('tm','../audio/titleMusic.m4a');

        this.load.audio('vs','../audio/victorySound.mp3');

        this.load.audio('go','../audio/gameOver.m4a');

        this.load.audio('pm','../audio/powerupMusic.mp3');

        this.load.audio('pa','../audio/powerupAcquired.mp3');

   }//in the preload function we will load our game resources
        
   create (data)
   {
        //SPRITES    

        background = this.add.sprite(400, 300, 'background');
        
        road = this.add.sprite(300, 415, 'road');

        road2 = this.add.sprite(150, 415, 'road');

        road3 = this.add.sprite(100, 415, 'road');

        road4 = this.add.sprite(500, 415, 'road');

        road5 = this.add.sprite(700, 415, 'road');

        carRight = this.add.sprite(parseInt(-400+Math.round(Math.random()*100)) , 385, 'carRight');

        car = this.add.sprite(parseInt(650+Math.round(Math.random()*900)) , 440, 'car');

        carRight2 = this.add.sprite(parseInt(-800+Math.round(Math.random()*0)) , 385, 'carRight');

        trainTrack = this.add.sprite(400, 255, 'trainTrack');

        boot = this.add.sprite(parseInt(-500+Math.round(Math.random()*1280)), parseInt(200+Math.round(Math.random()*280)), 'boot');

        frogger = this.add.sprite(400, 575, 'frogger');

        frogger2 = this.add.sprite(0, 0, 'frogger2');

        frogger.angle=0;

        fly = this.add.sprite(parseInt(300+Math.round(Math.random()*200)), parseInt(50+Math.round(Math.random()*50)), 'fly');

        train = this.add.sprite(700, 245, 'train');

        gameOverScreen = this.add.sprite(-1000, 300, 'gameOverScreen');

        blackBox = this.add.sprite(140, 60, 'blackBox');

        victory = this.add.sprite(-1000, 300, 'victory');

        //SPEED OF SPRITE MOVEMENT

        dxCar=4;
          
        dxCarRight=4;
          
        dxTrain=10;

        dxFly=1;

        dyFly=1;

        dxFrogger=2;

        //SETTING INPUTS / KEYS
        
        leftArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        
        rightArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        
        upArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        
        downArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

        spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

        pauseKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);

        unpauseKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        
        // SOUNDS
          
        bg1 = this.sound.add('bg1');

        bg1.loop = true;

        tm = this.sound.add('tm');

        vs = this.sound.add('vs');
          
        go = this.sound.add('go');

        pm = this.sound.add('pm');

        pa = this.sound.add('pa');
          
        textScore = this.add.text(10, 10, 'Flies Eaten: 0', {fontFamily: 'Verdana', fontSize: 32, color: 'white'});

        victoryTextShadow = this.add.text(-1000, -1000, 'You got the Fly!', {fontFamily: 'Verdana', fontSize: 32, color: '#009EFF'});
        victoryTextShadow2 = this.add.text(-1000, -1000, 'Press Enter to keep playing!', {fontFamily: 'Verdana', fontSize: 32, color: '#009EFF'});

        victoryText = this.add.text(-1000, -1000, 'You got the Fly!', {fontFamily: 'Verdana', fontSize: 32, color: 'black'});
        victoryText2 = this.add.text(-1000, -1000, 'Press Enter to keep playing!', {fontFamily: 'Verdana', fontSize: 32, color: 'black'});

        pauseText = this.add.text(-1000, -1000, 'Paused', {fontFamily: 'Verdana', fontSize: 32, color: 'black'});
        pauseText2 = this.add.text(-1000, -1000, 'Press ESC and P to continue playing!', {fontFamily: 'Verdana', fontSize: 28, color: 'black'});

        pauseTextShadow = this.add.text(-1000, -1000, 'Paused', {fontFamily: 'Verdana', fontSize: 32, color: 'black'});
        pauseTextShadow2 = this.add.text(-1000, -1000, 'Press ESC and P to continue playing!', {fontFamily: 'Verdana', fontSize: 28, color: 'black'});

        gameOverTextShadow = this.add.text(-1000, -1000, 'Press Enter to Play Again!', {fontFamily: 'Verdana', fontSize: 20, color: '#009EFF'});
        gameOverTextShadow2 = this.add.text(-1000, -1000, 'You got: '+fliesEaten+' Flies!', {fontFamily: 'Verdana', fontSize: 30, color: '#009EFF'});

        gameOverText = this.add.text(-1000, -1000, 'Press Enter to Play Again!', {fontFamily: 'Verdana', fontSize: 20, color: 'black'});
        gameOverText2 = this.add.text(-1000, -1000, 'You got: '+fliesEaten+' Flies!', {fontFamily: 'Verdana', fontSize: 30, color: 'black'});
        
    }//create the game resources and assign them to variables
        
    update()
    {
        if (yellowTrue == true)
        {
            frogger2.x = frogger.x - 8000;
            frogger2.y = frogger.y - 8000;
        }
        if(musicControl == 1 && musicTrue == true)
        {
            bg1.play();
            musicControl=musicControl+1;
            bootz = 0;
            bootReady = 0;
            pauseTrue = true;
        }

        //moving the NPC sprites
        car.x=car.x-dxCar;

        carRight.x=carRight.x+dxCarRight;

        carRight2.x=carRight2.x+dxCarRight;

        train.x=train.x-dxTrain;

        fly.angle=fly.angle+1;

        victory.angle=victory.angle+0.1;

        if((carRight.x)>950)//goes off the right screen
        {
            carRight.x=parseInt(-400+Math.round(Math.random()*100))
        }

        if((carRight2.x)>950)//goes off the right screen
        {
            carRight2.x=parseInt(-500+Math.round(Math.random()*100))
        }

        if((car.x)<-150)//bounces off right
        {
            car.x=parseInt(800+Math.round(Math.random()*1200))
        }

        if((train.x)<-150)//bounces off right
        {
            train.x=parseInt(1000+Math.round(Math.random()*2200))
        }

        //PAUSE SCREEN

        if(pauseKey.isDown && pauseTrue==true)
        {
           frogger.x=-1000;
           frogger.y=-5000;
           victory.x=400;
           pauseText.x=335;
           pauseText.y=250;
           pauseTextShadow.x=337;
           pauseTextShadow.y=252;
           pauseText2.x=140;
           pauseText2.y=290;
           pauseTextShadow2.x=142;
           pauseTextShadow2.y=292;
           if(unpauseKey.isDown && pauseTrue==true)
           {
            frogger.x=400;
            frogger.y=575;
            victory.x=-8000;
            pauseText.y=-9999;
            pauseText2.y=-9999;
            pauseTextShadow2.y=-9999;
            pauseTextShadow.y=-9999;
            unpauseReady=1;
          }
        }

        //PLAYER MOVEMENT

        if(leftArrow.isDown)
        {
            frogger.x=frogger.x-dxFrogger-bootz;
            frogger.angle=270;
        }

        if(rightArrow.isDown)
        {
            frogger.x=frogger.x+dxFrogger+bootz;
            frogger.angle=90;
        }

        if(upArrow.isDown)
        {
            frogger.y=frogger.y-dxFrogger-bootz;
            frogger.angle=0;
        }

        if(downArrow.isDown)
        {
            frogger.y=frogger.y+dxFrogger+bootz;
            frogger.angle=180;
        }

        if(leftArrow.isDown && upArrow.isDown)
        {
            frogger.angle=315;
        }

        if(rightArrow.isDown && upArrow.isDown)
        {
            frogger.angle=45;
        }

        if(leftArrow.isDown && downArrow.isDown)
        {
            frogger.angle=225;
        }

        if(rightArrow.isDown && downArrow.isDown)
        {
            frogger.angle=135;
        }

        if((frogger.x+22)>800)//frogger goes off the right
        {
            frogger.x=frogger.x-dxFrogger;
            if(bootReady == 1)// if frogger has boot powerup
            {
                frogger.x=frogger.x-dxFrogger;
            }
        }

        if((frogger.x-22)<0)//frogger goes off the left
        {
          frogger.x=frogger.x+dxFrogger;
          if(bootReady == 1)// if frogger has boot powerup
            {
              frogger.x=frogger.x+dxFrogger;
            }
        }
             
        if((frogger.y-22)<0)//frogger goes off the top
        {
            frogger.y=frogger.y+dxFrogger;
            if(bootReady == 1)// if frogger has boot powerup
            {
               frogger.y=frogger.y+dxFrogger;
            }
        }
              
        if((frogger.y+22)>600)//frogger goes off the bottom
        {
            frogger.y=frogger.y-dxFrogger;
            if(bootReady == 1)// if frogger has boot powerup
            {
               frogger.y=frogger.y-dxFrogger;
            }
        }

        //PLAYER MOVEMENT FOR POWERED UP FROGGER
            if(leftArrow.isDown)
        {
            frogger2.x=frogger2.x-dxFrogger-bootz;
            frogger2.angle=270;
        }

        if(rightArrow.isDown)
        {
            frogger2.x=frogger2.x+dxFrogger+bootz;
            frogger2.angle=90;
        }

        if(upArrow.isDown)
        {
            frogger2.y=frogger2.y-dxFrogger-bootz;
            frogger2.angle=0;
        }

        if(downArrow.isDown)
        {
            frogger2.y=frogger2.y+dxFrogger+bootz;
            frogger2.angle=180;
        }

        if(leftArrow.isDown && upArrow.isDown)
        {
            frogger2.angle=315;
        }

        if(rightArrow.isDown && upArrow.isDown)
        {
            frogger2.angle=45;
        }

        if(leftArrow.isDown && downArrow.isDown)
        {
            frogger2.angle=225;
        }

        if(rightArrow.isDown && downArrow.isDown)
        {
            frogger2.angle=135;
        }

        if((frogger2.x+22)>800)//frogger goes off the right
        {
            frogger2.x=frogger2.x-dxFrogger;
            if(bootReady == 1)// if frogger has boot powerup
            {
                frogger2.x=frogger2.x-dxFrogger;
            }
        }

        if((frogger2.x-22)<0)//frogger goes off the left
        {
          frogger2.x=frogger2.x+dxFrogger;
          if(bootReady == 1)// if frogger has boot powerup
            {
              frogger2.x=frogger2.x+dxFrogger;
            }
        }
             
        if((frogger2.y-22)<0)//frogger goes off the top
        {
            frogger2.y=frogger2.y+dxFrogger;
            if(bootReady == 1)// if frogger has boot powerup
            {
               frogger2.y=frogger2.y+dxFrogger;
            }
        }
              
        if((frogger2.y+22)>600)//frogger goes off the bottom
        {
            frogger2.y=frogger2.y-dxFrogger;
            if(bootReady == 1)// if frogger has boot powerup
            {
               frogger2.y=frogger2.y-dxFrogger;
            }
        }
        //TEXT

        if(fliesEaten>0)
        {
            textScore.text="Flies Eaten: "+fliesEaten;
        }

        //COLLISIONS

        if(_this.collides(frogger,fly)==true)
        {
            pm.stop();
            bg1.stop();
            vs.play();
            pauseTrue = false;
            musicTrue = false;
            fly.x=-1000;
            fliesEaten=fliesEaten+1;
            victory.x=400;
            victoryText.x=260;
            victoryText.y=250;
            victoryTextShadow.x=262;
            victoryTextShadow.y=252;
            victoryText2.x=170;
            victoryText2.y=290;
            victoryTextShadow2.x=172;
            victoryTextShadow2.y=292;
            frogger.x=-5000;
            frogger.y=-5000;
            sceneReady=1;
            bootz = 0;
            //SETTING UP MAP
            mapRandom=parseInt(1+Math.round(Math.random()*3));
        }
        if(_this.collides(boot,road)==true)
        {
            boot.y=boot.y-25;
        }
        if(_this.collides(boot,road2)==true)
        {
            boot.y=boot.y-25;
        }
        if(_this.collides(boot,road3)==true)
        {
            boot.y=boot.y-25;
        }
        if(_this.collides(boot,road4)==true)
        {
            boot.y=boot.y-25;
        }
        if(_this.collides(boot,road5)==true)
        {
            boot.y=boot.y-25;
        }
        if(_this.collides(boot,trainTrack)==true)
        {
            boot.y=boot.y+25;
        }
        if(_this.collides(frogger,boot)==true)
        {
            yellowTrue = false;
            frogger2.x = frogger.x;
            frogger2.y = frogger.y;
            bootReady = 1;
            bootz = 2;
            boot.x=-8000;
            boot.y=-8000;
            setTimeout(bootOver, 5000); //Credit to https://www.w3schools.com/js/js_timing.asp for the code
            bg1.stop();
            pa.play();
            pm.play();
        }
        function bootOver()
        {
            pm.stop();
            yellowTrue = true;
            musicControl = 1;
        }
        if(enterKey.isDown && sceneReady==1)
        {
            musicTrue = true;
            vs.stop();
            //WAY TO SWITCH LEVELS
            if(mapRandom == 2)
            {
                musicControl = 1;
                musicTrue = true;
                game.scene.stop("mainGame");
                game.scene.start("mainGame2");
            }
            if(mapRandom == 3)
            {
                musicControl = 1;
                musicTrue = true;
                game.scene.stop("mainGame");
                game.scene.start("mainGame3");
            }
            if(mapRandom == 4)
            {
                musicControl = 1;
                game.scene.stop("mainGame");
                game.scene.start("mainGame4");
            }
        }
        if(enterKey.isDown && sceneReady==1)
        {
            vs.stop();
            this.scene.restart();//Credits to https://phaser.io/examples/v3/view/scenes/restart-a-scene for the restart scene code.
            sceneReady=0;
            musicControl = 1;
            musicTrue = true;
        }

        if(_this.collides(carRight,carRight2)==true)
        {
           carRight2.x=carRight2.x-200;
        }
        if(_this.collides(frogger,carRight)==true)
        {
            pm.stop();
            bg1.stop();
            go.play();
            pauseTrue = false;
            musicTrue = false;
            gameOverScreen.x=400;
            gameOverText.x=265;
            gameOverText.y=560;
            gameOverText2.x=275;
            gameOverText2.y=520;
            gameOverTextShadow.x=267;
            gameOverTextShadow.y=562;
            gameOverTextShadow2.x=277;
            gameOverTextShadow2.y=522;
            textScore.x=-1000;
            blackBox.x=-1000;
            victory.y=760;
            victory.x=400;
            fly.x=5000;
            frogger.x=-5000;
            frogger.y=-5000;
            sceneReady=2;
            //SETTING UP MAP
            mapRandom=parseInt(1+Math.round(Math.random()*3));
        }

        if(_this.collides(frogger,carRight2)==true)
        {
            pm.stop();
            bg1.stop();
            go.play();
            pauseTrue = false;
            musicTrue = false;
            gameOverScreen.x=400;
            gameOverText.x=265;
            gameOverText.y=560;
            gameOverText2.x=275;
            gameOverText2.y=520;
            gameOverTextShadow.x=267;
            gameOverTextShadow.y=562;
            gameOverTextShadow2.x=277;
            gameOverTextShadow2.y=522;
            textScore.x=-1000;
            blackBox.x=-1000;
            victory.y=760;
            victory.x=400;
            fly.x=5000;
            frogger.x=-5000;
            frogger.y=-5000;
            sceneReady=2;
            //SETTING UP MAP
            mapRandom=parseInt(1+Math.round(Math.random()*3));
        }

        if(_this.collides(frogger,car)==true)
        {
            pm.stop();
            bg1.stop();
            go.play();
            pauseTrue = false;
            musicTrue = false;
            gameOverScreen.x=400;
            gameOverText.x=265;
            gameOverText.y=560;
            gameOverText2.x=275;
            gameOverText2.y=520;
            gameOverTextShadow.x=267;
            gameOverTextShadow.y=562;
            gameOverTextShadow2.x=277;
            gameOverTextShadow2.y=522;
            textScore.x=-1000;
            blackBox.x=-1000;
            victory.y=760;
            victory.x=400;
            fly.x=5000;
            frogger.x=-5000;
            frogger.y=-5000;
            sceneReady=2;
            //SETTING UP MAP
            mapRandom=parseInt(1+Math.round(Math.random()*3));
        }

        if(_this.collides(frogger,train)==true)
        {
            pm.stop();
            bg1.stop();
            go.play();
            pauseTrue = false;
            musicTrue = false;
            gameOverScreen.x=400;
            gameOverText.x=265;
            gameOverText.y=560;
            gameOverText2.x=275;
            gameOverText2.y=520;
            gameOverTextShadow.x=267;
            gameOverTextShadow.y=562;
            gameOverTextShadow2.x=277;
            gameOverTextShadow2.y=522;
            textScore.x=-1000;
            blackBox.x=-1000;
            victory.y=760;
            victory.x=400;
            fly.x=5000;
            frogger.x=-5000;
            frogger.y=-5000;
            sceneReady=2;
            //SETTING UP MAP
            mapRandom=parseInt(1+Math.round(Math.random()*3));
        }

        if(sceneReady==2 && enterKey.isDown)
        {
            musicTrue = true;
            go.stop();
            musicControl = 1;
            fliesEaten=0;
            sceneReady=0;
            if(mapRandom == 1)
            {
                this.scene.restart();
            }
            if(mapRandom == 2)
            {
                musicControl = 1;
              
                game.scene.stop("mainGame");
                game.scene.start("mainGame2");
            }
            if(mapRandom == 3)
            {
                musicControl = 1;
              
                game.scene.stop("mainGame");
                game.scene.start("mainGame3");
            }
            if(mapRandom == 4)
            {
              musicControl = 1;
              game.scene.stop("mainGame");
              game.scene.start("mainGame4");
            }
        }

    }//this represents the game loop and is where all the major code that controls the game is written
        
    collides(sprite1,sprite2)
    {
        return Phaser.Geom.Intersects.RectangleToRectangle(sprite1.getBounds(),sprite2.getBounds());
    }

}//end of our first game scene/screen
//SECOND LEVEL
class mainGame2 extends Phaser.Scene
{
    constructor (config)
    {
        super({key: "mainGame2"});
        _this=this;
    }
      
    preload ()
    {
        //SPRITES

        this.load.image('frogger','../assets/sprites/frogger.png');
        
        this.load.image('fly','../assets/sprites/fly.png');
        
        this.load.image('desert','../assets/sprites/desertLevel.png');

        this.load.image('road','../assets/sprites/road.jpg');

        this.load.image('water','../assets/sprites/water.png');

        this.load.image('carRight','../assets/sprites/car2.png');

        this.load.image('car','../assets/sprites/car.png');

        this.load.image('train','../assets/sprites/train2.png');

        this.load.image('trainTrack','../assets/sprites/trainTrack.png');

        this.load.image('log','../assets/sprites/log.png');

        this.load.image('victory','../assets/sprites/victoryBox.png');

        this.load.image('blackBox','../assets/sprites/blackBox.png');

        this.load.image('gameOverScreen','../assets/sprites/gameOverScreen.png');

        //AUDIO

        this.load.audio('db','../audio/desertBackground.m4a');

        this.load.audio('tm','../audio/titleMusic.m4a');

        this.load.audio('vs','../audio/victorySound.mp3');

        this.load.audio('go','../audio/gameOver.m4a');

    }//in the preload function we will load our game resources
        
    create (data)
    {
        //SPRITES


        desert = this.add.sprite(400, 300, 'desert');

        trainTrack = this.add.sprite(400, 380, 'trainTrack');

        road = this.add.sprite(300, 475, 'road');

        road2 = this.add.sprite(150, 475, 'road');

        road3 = this.add.sprite(100, 475, 'road');

        road4 = this.add.sprite(500, 475, 'road');

        road5 = this.add.sprite(700, 475, 'road');

        water = this.add.sprite(400, 210, 'water');

        water2 = this.add.sprite(400, 135, 'water');

        fly = this.add.sprite(parseInt(500+Math.round(Math.random()*200)), parseInt(25+Math.round(Math.random()*50)), 'fly');

        train = this.add.sprite(700, 375, 'train');

        carRight = this.add.sprite(parseInt(-200+Math.round(Math.random()*200)) , 450, 'carRight');

        carRight2 = this.add.sprite(parseInt(-500+Math.round(Math.random()*100)) , 450, 'carRight');

        car = this.add.sprite(parseInt(200+Math.round(Math.random()*700)) , 505, 'car');

        car2 = this.add.sprite(parseInt(650+Math.round(Math.random()*800)) , 505, 'car');

        log = this.add.sprite(parseInt(-300+Math.round(Math.random()*250)) , 228, 'log');

        log2 = this.add.sprite(parseInt(500+Math.round(Math.random()*900)) , 188, 'log');

        log3 = this.add.sprite(parseInt(-100+Math.round(Math.random()*100)) , 148, 'log');

        log4 = this.add.sprite(parseInt(500+Math.round(Math.random()*900)) , 108, 'log');

        frogger = this.add.sprite(400, 575, 'frogger');

        frogger.angle=0;

        gameOverScreen = this.add.sprite(-1000, 300, 'gameOverScreen');

        blackBox = this.add.sprite(140, 60, 'blackBox');

        victory = this.add.sprite(-1000, 300, 'victory');

        //SPEED OF SPRITE MOVEMENT

        dxCar=4;

        dxLog=1.5;
        
        dxCarRight=4;
        
        dxTrain=10;

        dxFly=1;

        dyFly=1;

        //SETTING INPUTS / KEYS
        
        leftArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        
        rightArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        
        upArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        
        downArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

        spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

        pauseKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);

        unpauseKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        
        // SOUNDS
          
        db = this.sound.add('db');

        db.loop = true;

        tm = this.sound.add('tm');

        vs = this.sound.add('vs');
          
        go = this.sound.add('go');

        //
          
        textScore = this.add.text(10, 10, 'Flies Eaten: 0', {fontFamily: 'Verdana', fontSize: 32, color: 'white'});

        victoryTextShadow = this.add.text(-1000, -1000, 'You got the Fly!', {fontFamily: 'Verdana', fontSize: 32, color: '#009EFF'});
        victoryTextShadow2 = this.add.text(-1000, -1000, 'Press Enter to keep playing!', {fontFamily: 'Verdana', fontSize: 32, color: '#009EFF'});

        victoryText = this.add.text(-1000, -1000, 'You got the Fly!', {fontFamily: 'Verdana', fontSize: 32, color: 'black'});
        victoryText2 = this.add.text(-1000, -1000, 'Press Enter to keep playing!', {fontFamily: 'Verdana', fontSize: 32, color: 'black'});

        pauseText = this.add.text(-1000, -1000, 'Paused', {fontFamily: 'Verdana', fontSize: 32, color: 'black'});
        pauseText2 = this.add.text(-1000, -1000, 'Press ESC and P to continue playing!', {fontFamily: 'Verdana', fontSize: 28, color: 'black'});

        pauseTextShadow = this.add.text(-1000, -1000, 'Paused', {fontFamily: 'Verdana', fontSize: 32, color: 'black'});
        pauseTextShadow2 = this.add.text(-1000, -1000, 'Press ESC and P to continue playing!', {fontFamily: 'Verdana', fontSize: 28, color: 'black'});

        gameOverTextShadow = this.add.text(-1000, -1000, 'Press Enter to Play Again!', {fontFamily: 'Verdana', fontSize: 20, color: '#009EFF'});
        gameOverTextShadow2 = this.add.text(-1000, -1000, 'You got: '+fliesEaten+' Flies!', {fontFamily: 'Verdana', fontSize: 30, color: '#009EFF'});

        gameOverText = this.add.text(-1000, -1000, 'Press Enter to Play Again!', {fontFamily: 'Verdana', fontSize: 20, color: 'black'});
        gameOverText2 = this.add.text(-1000, -1000, 'You got: '+fliesEaten+' Flies!', {fontFamily: 'Verdana', fontSize: 30, color: 'black'});
        
    }//create the game resources and assign them to variables
        
    update()
    {
        if(musicControl == 1)
        {
          db.play();
          musicControl=musicControl+1;
        }

        //moving the NPC sprites
        car.x=car.x-dxCar;

        carRight.x=carRight.x+dxCarRight;

        carRight2.x=carRight2.x+dxCarRight;

        car2.x=car2.x-dxCar;

        train.x=train.x-dxTrain;

        log.x=log.x+dxLog;

        log2.x=log2.x-dxLog;

        log3.x=log3.x+dxLog;

        log4.x=log4.x-dxLog;

        fly.angle=fly.angle+1;

        victory.angle=victory.angle+0.1;

        //PAUSE SCREEN

         if(pauseKey.isDown && pauseTrue==true)
        {
           frogger.x=-1000;
           frogger.y=-5000;
           victory.x=400;
           pauseText.x=335;
           pauseText.y=250;
           pauseTextShadow.x=337;
           pauseTextShadow.y=252;
           pauseText2.x=140;
           pauseText2.y=290;
           pauseTextShadow2.x=142;
           pauseTextShadow2.y=292;
           if(unpauseKey.isDown && pauseTrue==true)
           {
            frogger.x=400;
            frogger.y=575;
            victory.x=-8000;
            pauseText.y=-9999;
            pauseText2.y=-9999;
            pauseTextShadow2.y=-9999;
            pauseTextShadow.y=-9999;
            unpauseReady=1;
          }
        }

        if((carRight.x)>950)//goes off the right screen
        {
            carRight.x=parseInt(-400+Math.round(Math.random()*100));
        }

        if((carRight2.x)>950)//goes off the right screen
        {
            carRight2.x=parseInt(-500+Math.round(Math.random()*100));
        }

        if((car.x)<-150)
        {
            car.x=parseInt(800+Math.round(Math.random()*1000));
        }

        if((car2.x)<-150)
        {
          car2.x=parseInt(800+Math.round(Math.random()*1000));
        }
        if((train.x)<-150)
        {
            train.x=parseInt(1000+Math.round(Math.random()*2200));
        }

        if((log.x)>950)//goes off the right screen
        {
            log.x=parseInt(-150+Math.round(Math.random()*150));
        }

        if((log2.x)<-150)
        {
            log2.x=parseInt(800+Math.round(Math.random()*150));
        }

        if((log3.x)>950)//goes off the right screen
        {
            log3.x=parseInt(-150+Math.round(Math.random()*150));
        }

        if((log4.x)<-150)
        {
            log4.x=parseInt(800+Math.round(Math.random()*150));
        }

        //PLAYER MOVEMENT

        if(leftArrow.isDown)
        {
            frogger.x=frogger.x-2.5;
            frogger.angle=270;
        }

        if(rightArrow.isDown)
        {
            frogger.x=frogger.x+2.5;
            frogger.angle=90;
        }

        if(upArrow.isDown)
        {
          frogger.y=frogger.y-2.5;
          frogger.angle=0;
        }

        if(downArrow.isDown)
        {
          frogger.y=frogger.y+2.5;
          frogger.angle=180;
        }

        if(leftArrow.isDown && upArrow.isDown)
        {
          frogger.angle=315;
        }

        if(rightArrow.isDown && upArrow.isDown)
        {
          frogger.angle=45;
        }

        if(leftArrow.isDown && downArrow.isDown)
        {
          frogger.angle=225;
        }

        if(rightArrow.isDown && downArrow.isDown)
        {
          frogger.angle=135;
        }

        if((frogger.x+22)>800)//frogger goes off the right
        {
            frogger.x=frogger.x-2.5;
        }

        if((frogger.x-22)<0)//frogger goes off the left
        {
          frogger.x=frogger.x+2.5;
        }
             
        if((frogger.y-22)<0)//frogger goes off the top
          {
            frogger.y=frogger.y+2.5;
          }
        
        if((frogger.y+22)>600)//frogger goes off the bottom
          {
            frogger.y=frogger.y-2.5;
          }

        //TEXT

        if(fliesEaten>0)
        {
            textScore.text="Flies Eaten: "+fliesEaten;
        }

        //COLLISIONS

        if(_this.collides(frogger,fly)==true)
        {
            db.stop();
            vs.play();
            pauseTrue = false;
            fly.x=-1000;
            fliesEaten=fliesEaten+1;
            victory.x=400;
            victoryText.x=260;
            victoryText.y=250;
            victoryTextShadow.x=262;
            victoryTextShadow.y=252;
            victoryText2.x=170;
            victoryText2.y=290;
            victoryTextShadow2.x=172;
            victoryTextShadow2.y=292;
            frogger.x=-5000;
            frogger.y=-5000;
                    
            sceneReady=1;                
            //SETTING UP MAP
            mapRandom=parseInt(1+Math.round(Math.random()*3));
        }

        if(_this.collides(frogger,log)==true)
        {
            frogger.x=log.x;
            if((frogger.x+22)>850)//frogger goes off the right
            {
                db.stop();
                go.play();
                gameOverScreen.x=400;
                gameOverText.x=265;
                gameOverText.y=560;
                gameOverText2.x=275;
                gameOverText2.y=520;
                gameOverTextShadow.x=267;
                gameOverTextShadow.y=562;
                gameOverTextShadow2.x=277;
                gameOverTextShadow2.y=522;
                textScore.x=-1000;
                blackBox.x=-1000;
                victory.y=760;
                victory.x=400;
                fly.x=5000;
                frogger.x=-5000;
                frogger.y=-5000;
                sceneReady=2;
                mapRandom=parseInt(1+Math.round(Math.random()*3));
            }
        }
        else if(_this.collides(frogger,log2)==true)
        {
           frogger.x=log2.x;
           if((frogger.x-22)<-50)//frogger goes off the left
           {
             db.stop();
             go.play();
             gameOverScreen.x=400;
             gameOverText.x=265;
             gameOverText.y=560;
             gameOverText2.x=275;
             gameOverText2.y=520;
             gameOverTextShadow.x=267;
             gameOverTextShadow.y=562;
             gameOverTextShadow2.x=277;
             gameOverTextShadow2.y=522;
             textScore.x=-1000;
             blackBox.x=-1000;
             victory.y=760;
             victory.x=400;
             fly.x=5000;
             frogger.x=-5000;
             frogger.y=-5000;
             sceneReady=2;
             mapRandom=parseInt(1+Math.round(Math.random()*3));
           }
        }
        else if(_this.collides(frogger,log3)==true)
        {
          frogger.x=log3.x;
          if((frogger.x+22)>850)//frogger goes off the right
          {
            db.stop();
            go.play();
            gameOverScreen.x=400;
            gameOverText.x=265;
            gameOverText.y=560;
            gameOverText2.x=275;
            gameOverText2.y=520;
            gameOverTextShadow.x=267;
            gameOverTextShadow.y=562;
            gameOverTextShadow2.x=277;
            gameOverTextShadow2.y=522;
            textScore.x=-1000;
            blackBox.x=-1000;
            victory.y=760;
            victory.x=400;
            fly.x=5000;
            frogger.x=-5000;
            frogger.y=-5000;
            mapRandom=parseInt(1+Math.round(Math.random()*3));
            sceneReady=2;
          }
        }
        else if(_this.collides(frogger,log4)==true)
        {
          frogger.x=log4.x;
          if((frogger.x-22)<-50)//frogger goes off the left
          {
            db.stop();
            go.play();
            gameOverScreen.x=400;
            gameOverText.x=265;
            gameOverText.y=560;
            gameOverText2.x=275;
            gameOverText2.y=520;
            gameOverTextShadow.x=267;
            gameOverTextShadow.y=562;
            gameOverTextShadow2.x=277;
            gameOverTextShadow2.y=522;
            textScore.x=-1000;
            blackBox.x=-1000;
            victory.y=760;
            victory.x=400;
            fly.x=5000;
            frogger.x=-5000;
            frogger.y=-5000;
            mapRandom=parseInt(1+Math.round(Math.random()*3));
            sceneReady=2;
          }
        }
        if(enterKey.isDown && sceneReady==1)
        {
            vs.stop();
            //WAY TO SWITCH LEVELS
            if(mapRandom == 1)
            {
              musicControl = 1;
              game.scene.stop("mainGame2");
              game.scene.start("mainGame");
            }
            if(mapRandom == 3)
            {
              musicControl = 1;
              game.scene.stop("mainGame2");
              game.scene.start("mainGame3");
            }
            if(mapRandom == 4)
            {
              musicControl = 1;
              game.scene.stop("mainGame2");
              game.scene.start("mainGame4");
              
            }
        }
        if(enterKey.isDown && sceneReady==1)
        {
          vs.stop();
          this.scene.restart();//Credits to https://phaser.io/examples/v3/view/scenes/restart-a-scene for the restart scene code.
          sceneReady=0;
          musicControl = 1;
          //SETTING THE MAP
        }
        if(_this.collides(carRight,carRight2)==true)
        {
            carRight2.x=carRight2.x-100;
        }

        if(_this.collides(car,car2)==true)
        {
            car2.x=car2.x+100;
        }
        if(_this.collides(frogger,carRight)==true)
        {
            db.stop();
            go.play();
            pauseTrue = false;
            gameOverScreen.x=400;
            gameOverText.x=265;
            gameOverText.y=560;
            gameOverText2.x=275;
            gameOverText2.y=520;
            gameOverTextShadow.x=267;
            gameOverTextShadow.y=562;
            gameOverTextShadow2.x=277;
            gameOverTextShadow2.y=522;
            textScore.x=-1000;
            blackBox.x=-1000;
            victory.y=760;
            victory.x=400;
            fly.x=5000;
            frogger.x=-5000;
            frogger.y=-5000;
            mapRandom=parseInt(1+Math.round(Math.random()*3));
            sceneReady=2;
        }
        if(_this.collides(frogger,carRight2)==true)
        {
            db.stop();
            go.play();
            pauseTrue = false;
            gameOverScreen.x=400;
            gameOverText.x=265;
            gameOverText.y=560;
            gameOverText2.x=275;
            gameOverText2.y=520;
            gameOverTextShadow.x=267;
            gameOverTextShadow.y=562;
            gameOverTextShadow2.x=277;
            gameOverTextShadow2.y=522;
            textScore.x=-1000;
            blackBox.x=-1000;
            victory.y=760;
            victory.x=400;
            fly.x=5000;
            frogger.x=-5000;
            frogger.y=-5000;
            mapRandom=parseInt(1+Math.round(Math.random()*3));
            sceneReady=2;
        }
        if(_this.collides(frogger,car)==true)
        {
            db.stop();
            go.play();
            pauseTrue = false;
            gameOverScreen.x=400;
            gameOverText.x=265;
            gameOverText.y=560;
            gameOverText2.x=275;
            gameOverText2.y=520;
            gameOverTextShadow.x=267;
            gameOverTextShadow.y=562;
            gameOverTextShadow2.x=277;
            gameOverTextShadow2.y=522;
            textScore.x=-1000;
            blackBox.x=-1000;
            victory.y=760;
            victory.x=400;
            fly.x=5000;
            frogger.x=-5000;
            frogger.y=-5000;
            mapRandom=parseInt(1+Math.round(Math.random()*3));
            sceneReady=2;
        }
        if(_this.collides(frogger,car2)==true)
        {
            db.stop();
            go.play();
            pauseTrue = false;
            gameOverScreen.x=400;
            gameOverText.x=265;
            gameOverText.y=560;
            gameOverText2.x=275;
            gameOverText2.y=520;
            gameOverTextShadow.x=267;
            gameOverTextShadow.y=562;
            gameOverTextShadow2.x=277;
            gameOverTextShadow2.y=522;
            textScore.x=-1000;
            blackBox.x=-1000;
            victory.y=760;
            victory.x=400;
            fly.x=5000;
            frogger.x=-5000;
            frogger.y=-5000;
            mapRandom=parseInt(1+Math.round(Math.random()*3));
            sceneReady=2;
        }
        if(_this.collides(frogger,train)==true)
        {
            db.stop();
            go.play();
            pauseTrue = false;
            gameOverScreen.x=400;
            gameOverText.x=265;
            gameOverText.y=560;
            gameOverText2.x=275;
            gameOverText2.y=520;
            gameOverTextShadow.x=267;
            gameOverTextShadow.y=562;
            gameOverTextShadow2.x=277;
            gameOverTextShadow2.y=522;
            textScore.x=-1000;
            blackBox.x=-1000;
            victory.y=760;
            victory.x=400;
            fly.x=5000;
            frogger.x=-5000;
            frogger.y=-5000;
            mapRandom=parseInt(1+Math.round(Math.random()*3));
            sceneReady=2;
        }
        if(_this.collides(frogger,water)==true && _this.collides(frogger,log)==false && _this.collides(frogger,log2)==false && _this.collides(frogger,log3)==false && _this.collides(frogger,log4)==false)
        {
            db.stop();
            go.play();
            pauseTrue = false;
            gameOverScreen.x=400;
            gameOverText.x=265;
            gameOverText.y=560;
            gameOverText2.x=275;
            gameOverText2.y=520;
            gameOverTextShadow.x=267;
            gameOverTextShadow.y=562;
            gameOverTextShadow2.x=277;
            gameOverTextShadow2.y=522;
            textScore.x=-1000;
            blackBox.x=-1000;
            victory.y=760;
            victory.x=400;
            fly.x=5000;
            frogger.x=-5000;
            frogger.y=-5000;
            mapRandom=parseInt(1+Math.round(Math.random()*3));
            sceneReady=2;
        }
        else if(_this.collides(frogger,water2)==true && _this.collides(frogger,log)==false && _this.collides(frogger,log2)==false && _this.collides(frogger,log3)==false && _this.collides(frogger,log4)==false)
        {
            db.stop();
            go.play();
            pauseTrue = false;
            gameOverScreen.x=400;
            gameOverText.x=265;
            gameOverText.y=560;
            gameOverText2.x=275;
            gameOverText2.y=520;
            gameOverTextShadow.x=267;
            gameOverTextShadow.y=562;
            gameOverTextShadow2.x=277;
            gameOverTextShadow2.y=522;
            textScore.x=-1000;
            blackBox.x=-1000;
            victory.y=760;
            victory.x=400;
            fly.x=5000;
            frogger.x=-5000;
            frogger.y=-5000;
            mapRandom=parseInt(1+Math.round(Math.random()*3));
            sceneReady=2;
        }
        if(sceneReady==2 && enterKey.isDown)
        {
            go.stop();
            musicControl = 1;
            fliesEaten=0;
            sceneReady=0;
            if(mapRandom == 2)
            {
              this.scene.restart();
            }
            if(mapRandom == 1)
            {
              musicControl = 1;
              game.scene.stop("mainGame2");
              game.scene.start("mainGame");
            }
            if(mapRandom == 3)
            {
                musicControl = 1; 
                game.scene.stop("mainGame2");
                game.scene.start("mainGame3");
            }
            if(mapRandom == 4)
            {
              musicControl = 1;
              game.scene.stop("mainGame2");
              game.scene.start("mainGame4");
              
            }
        }

        }//this represents the game loop and is where all the major code that controls the game is written
        
        collides(sprite1,sprite2)
        {
            return Phaser.Geom.Intersects.RectangleToRectangle(sprite1.getBounds(),sprite2.getBounds());
        }

      }//end of our second game scene/screen
      class mainGame3 extends Phaser.Scene
      {
        constructor (config)
        {
            super({key: "mainGame3"});
            _this=this;
        }
      
        preload ()
        {
          //SPRITES

            this.load.image('frogger','../assets/sprites/frogger.png');
        
            this.load.image('fly','../assets/sprites/fly.png');
        
            this.load.image('snow','../assets/sprites/snowBackground.png');

            this.load.image('road','../assets/sprites/road.jpg');

            this.load.image('water','../assets/sprites/water.png');

            this.load.image('carRight','../assets/sprites/car2.png');

            this.load.image('train','../assets/sprites/train2.png');

            this.load.image('trainTrack','../assets/sprites/trainTrack.png');

            this.load.image('log','../assets/sprites/log.png');

            this.load.image('snowMobile','../assets/sprites/snowMobile.png');

            this.load.image('snowMobileRight','../assets/sprites/snowMobileRight.png');

            this.load.image('victory','../assets/sprites/victoryBox.png');

            this.load.image('blackBox','../assets/sprites/blackBox.png');

            this.load.image('gameOverScreen','../assets/sprites/gameOverScreen.png');

            this.load.image('snowBall','../assets/sprites/snowBall.png');

            //AUDIO

            this.load.audio('sb','../audio/snowBackground.mp3');

            this.load.audio('tm','../audio/titleMusic.m4a');

            this.load.audio('vs','../audio/victorySound.mp3');

            this.load.audio('go','../audio/gameOver.m4a');

        }//in the preload function we will load our game resources
        
        create (data)
        {
          //SPRITES

          snow = this.add.sprite(400, 300, 'snow');

          trainTrack = this.add.sprite(400, 145, 'trainTrack');

          fly = this.add.sprite(parseInt(500+Math.round(Math.random()*200)), parseInt(25+Math.round(Math.random()*50)), 'fly');

          train = this.add.sprite(700, 140, 'train');

          snowBall = this.add.sprite(parseInt(0+Math.round(Math.random()*300)) , 500, 'snowBall');

          snowBall2 = this.add.sprite(parseInt(500+Math.round(Math.random()*400)) , 460, 'snowBall');

          snowBall3 = this.add.sprite(parseInt(-200+Math.round(Math.random()*300)) , 420, 'snowBall');

          snowBall4 = this.add.sprite(parseInt(500+Math.round(Math.random()*600)) , 380, 'snowBall');

          snowMobile = this.add.sprite(parseInt(-200+Math.round(Math.random()*200)) , 250, 'snowMobileRight');

          snowMobile2 = this.add.sprite(parseInt(-500+Math.round(Math.random()*100)) , 250, 'snowMobileRight');

          snowMobile3 = this.add.sprite(parseInt(200+Math.round(Math.random()*700)) , 300, 'snowMobile');

          snowMobile4 = this.add.sprite(parseInt(650+Math.round(Math.random()*800)) , 300, 'snowMobile');

          frogger = this.add.sprite(400, 575, 'frogger');

          frogger.angle=0;

          gameOverScreen = this.add.sprite(-1000, 300, 'gameOverScreen');

          blackBox = this.add.sprite(140, 60, 'blackBox');

          victory = this.add.sprite(-1000, 300, 'victory');

          //SPEED OF SPRITE MOVEMENT

          dxCar=4;

          dxLog=4;
          
          dxCarRight=4;
          
          dxTrain=10;

          dxFly=1;

          dyFly=1;

          //SETTING INPUTS / KEYS
        
          leftArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        
          rightArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        
          upArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        
          downArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

          spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

          enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        
          pauseKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);

          unpauseKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);        
          // SOUNDS
          
          sb = this.sound.add('sb');

          sb.loop = true;

          tm = this.sound.add('tm');

          vs = this.sound.add('vs');
          
          go = this.sound.add('go');

          //
          
          textScore = this.add.text(10, 10, 'Flies Eaten: 0', {fontFamily: 'Verdana', fontSize: 32, color: 'white'});

          victoryTextShadow = this.add.text(-1000, -1000, 'You got the Fly!', {fontFamily: 'Verdana', fontSize: 32, color: '#009EFF'});
          victoryTextShadow2 = this.add.text(-1000, -1000, 'Press Enter to keep playing!', {fontFamily: 'Verdana', fontSize: 32, color: '#009EFF'});

          victoryText = this.add.text(-1000, -1000, 'You got the Fly!', {fontFamily: 'Verdana', fontSize: 32, color: 'black'});
          victoryText2 = this.add.text(-1000, -1000, 'Press Enter to keep playing!', {fontFamily: 'Verdana', fontSize: 32, color: 'black'});

          pauseText = this.add.text(-1000, -1000, 'Paused', {fontFamily: 'Verdana', fontSize: 32, color: 'black'});
          pauseText2 = this.add.text(-1000, -1000, 'Press ESC and P to continue playing!', {fontFamily: 'Verdana', fontSize: 28, color: 'black'});

          pauseTextShadow = this.add.text(-1000, -1000, 'Paused', {fontFamily: 'Verdana', fontSize: 32, color: 'black'});
          pauseTextShadow2 = this.add.text(-1000, -1000, 'Press ESC and P to continue playing!', {fontFamily: 'Verdana', fontSize: 28, color: 'black'});

          gameOverTextShadow = this.add.text(-1000, -1000, 'Press Enter to Play Again!', {fontFamily: 'Verdana', fontSize: 20, color: '#009EFF'});
          gameOverTextShadow2 = this.add.text(-1000, -1000, 'You got: '+fliesEaten+' Flies!', {fontFamily: 'Verdana', fontSize: 30, color: '#009EFF'});

          gameOverText = this.add.text(-1000, -1000, 'Press Enter to Play Again!', {fontFamily: 'Verdana', fontSize: 20, color: 'black'});
          gameOverText2 = this.add.text(-1000, -1000, 'You got: '+fliesEaten+' Flies!', {fontFamily: 'Verdana', fontSize: 30, color: 'black'});
        
        }//create the game resources and assign them to variables
        
        update()
        {
            if(musicControl == 1)
            {
              sb.play();
              musicControl=musicControl+1;
            }
            //moving the NPC sprites
            snowMobile.x=snowMobile.x-dxCar;
            snowMobile2.x=snowMobile2.x-dxCar;
            snowMobile3.x=snowMobile3.x+dxCarRight;
            snowMobile4.x=snowMobile4.x+dxCarRight;
            train.x=train.x-dxTrain;
            snowBall.x=snowBall.x+dxLog;
            snowBall2.x=snowBall2.x-dxLog;
            snowBall3.x=snowBall3.x+dxLog;
            snowBall4.x=snowBall4.x-dxLog;
            fly.angle=fly.angle+1;
            victory.angle=victory.angle+0.1;
            if((snowMobile3.x)>950)//goes off the right screen
            {
                snowMobile3.x=parseInt(-400+Math.round(Math.random()*100));
            }
            if((snowMobile4.x)>950)//goes off the right screen
            {
               snowMobile4.x=parseInt(-500+Math.round(Math.random()*100));
            }
            if((snowMobile.x)<-150)
            {
                snowMobile.x=parseInt(800+Math.round(Math.random()*1000));
            }
            if((snowMobile2.x)<-150)
            {
              snowMobile2.x=parseInt(800+Math.round(Math.random()*1000));
            }
            if((train.x)<-150)
            {
                train.x=parseInt(1000+Math.round(Math.random()*2200));
            }
            if((snowBall.x)>950)//goes off the right screen
            {
                snowBall.x=parseInt(-150+Math.round(Math.random()*0));
            }
            if((snowBall2.x)<-150)
            {
                snowBall2.x=parseInt(800+Math.round(Math.random()*950));
            }
            if((snowBall3.x)>950)//goes off the right screen
            {
                snowBall3.x=parseInt(-150+Math.round(Math.random()*0));
            }
            if((snowBall4.x)<-150)
            {
                snowBall4.x=parseInt(800+Math.round(Math.random()*950));
            }
            //PLAYER MOVEMENT
            if(leftArrow.isDown)
            {
                frogger.x=frogger.x-2.5;
                frogger.angle=270;
            }
            if(rightArrow.isDown)
            {
                frogger.x=frogger.x+2.5;
                frogger.angle=90;
            }
            if(upArrow.isDown)
            {
              frogger.y=frogger.y-2.5;
              frogger.angle=0;
            }
            if(downArrow.isDown)
            {
              frogger.y=frogger.y+2.5;
              frogger.angle=180;
            }
            if(leftArrow.isDown && upArrow.isDown)
            {
              frogger.angle=315;
            }
            if(rightArrow.isDown && upArrow.isDown)
            {
              frogger.angle=45;
            }
            if(leftArrow.isDown && downArrow.isDown)
            {
              frogger.angle=225;
            }
            if(rightArrow.isDown && downArrow.isDown)
            {
              frogger.angle=135;
            }
            if((frogger.x+22)>800)//frogger goes off the right
            {
                frogger.x=frogger.x-2.5;
            }
            if((frogger.x-22)<0)//frogger goes off the left
            {
              frogger.x=frogger.x+2.5;
            }
            if((frogger.y-22)<0)//frogger goes off the top
            {
                frogger.y=frogger.y+2.5;
            }
            if((frogger.y+22)>600)//frogger goes off the bottom
            {
                frogger.y=frogger.y-2.5;
            }
            //TEXT
            if(fliesEaten>0)
            {
                    textScore.text="Flies Eaten: "+fliesEaten;
            }
            //COLLISIONS
            if(_this.collides(frogger,fly)==true)
            {
                sb.stop();
                vs.play();
                pauseTrue = false;
                fly.x=-1000;
                fliesEaten=fliesEaten+1;
                victory.x=400;
                victoryText.x=260;
                victoryText.y=250;
                victoryTextShadow.x=262;
                victoryTextShadow.y=252;
                victoryText2.x=170;
                victoryText2.y=290;
                victoryTextShadow2.x=172;
                victoryTextShadow2.y=292;
                frogger.x=-5000;
                frogger.y=-5000;
                sceneReady=1;                
                //SETTING UP MAP
                mapRandom=parseInt(1+Math.round(Math.random()*3));
            }
            if(enterKey.isDown && sceneReady==1)
            {
              vs.stop();
              //WAY TO SWITCH LEVELS
              if(mapRandom == 1)
              {
                 musicControl = 1;
                 game.scene.stop("mainGame3");
                 game.scene.start("mainGame");
              }
              if(mapRandom == 2)
              {
                musicControl = 1;
                game.scene.stop("mainGame3");
                game.scene.start("mainGame2");
              }
              if(enterKey.isDown && sceneReady==1)
              {
                vs.stop();
                this.scene.restart();//Credits to https://phaser.io/examples/v3/view/scenes/restart-a-scene for the restart scene code.
                sceneReady=0;
                musicControl = 1;
              }
            }

            //PAUSE SCREEN

            if(pauseKey.isDown && pauseTrue==true)
            {
               frogger.x=-1000;
               frogger.y=-5000;
               victory.x=400;
               pauseText.x=335;
               pauseText.y=250;
               pauseTextShadow.x=337;
               pauseTextShadow.y=252;
               pauseText2.x=140;
               pauseText2.y=290;
               pauseTextShadow2.x=142;
               pauseTextShadow2.y=292;
               if(unpauseKey.isDown && pauseTrue==true)
               {
                frogger.x=400;
                frogger.y=575;
                victory.x=-8000;
                pauseText.y=-9999;
                pauseText2.y=-9999;
                pauseTextShadow2.y=-9999;
                pauseTextShadow.y=-9999;
                unpauseReady=1;
              }
            }

            if(_this.collides(snowMobile3,snowMobile4)==true)
              {
                 snowMobile4.x=snowMobile4.x-100;
              }
            if(_this.collides(snowMobile,snowMobile2)==true)
            {
               snowMobile2.x=snowMobile2.x+100;
            }
            if(_this.collides(frogger,snowMobile3)==true)
            {
                sb.stop();
                go.play();
                pauseTrue = false;
                gameOverScreen.x=400;
                gameOverText.x=265;
                gameOverText.y=560;
                gameOverText2.x=275;
                gameOverText2.y=520;
                gameOverTextShadow.x=267;
                gameOverTextShadow.y=562;
                gameOverTextShadow2.x=277;
                gameOverTextShadow2.y=522;
                textScore.x=-1000;
                blackBox.x=-1000;
                victory.y=760;
                victory.x=400;
                fly.x=5000;
                frogger.x=-5000;
                frogger.y=-5000;
                sceneReady=2;
                //SETTING UP MAP
                mapRandom=parseInt(1+Math.round(Math.random()*3));
            }

            if(_this.collides(frogger,snowMobile4)==true)
            {
                sb.stop();
                go.play();
                pauseTrue = false;
                gameOverScreen.x=400;
                gameOverText.x=265;
                gameOverText.y=560;
                gameOverText2.x=275;
                gameOverText2.y=520;
                gameOverTextShadow.x=267;
                gameOverTextShadow.y=562;
                gameOverTextShadow2.x=277;
                gameOverTextShadow2.y=522;
                textScore.x=-1000;
                blackBox.x=-1000;
                victory.y=760;
                victory.x=400;
                fly.x=5000;
                frogger.x=-5000;
                frogger.y=-5000;
                sceneReady=2;
                //SETTING UP MAP
                mapRandom=parseInt(1+Math.round(Math.random()*3));
            }

            if(_this.collides(frogger,snowMobile)==true)
            {
                sb.stop();
                go.play();
                pauseTrue = false;
                gameOverScreen.x=400;
                gameOverText.x=265;
                gameOverText.y=560;
                gameOverText2.x=275;
                gameOverText2.y=520;
                gameOverTextShadow.x=267;
                gameOverTextShadow.y=562;
                gameOverTextShadow2.x=277;
                gameOverTextShadow2.y=522;
                textScore.x=-1000;
                blackBox.x=-1000;
                victory.y=760;
                victory.x=400;
                fly.x=5000;
                frogger.x=-5000;
                frogger.y=-5000;
                sceneReady=2;
                //SETTING UP MAP
                mapRandom=parseInt(1+Math.round(Math.random()*3));
            }
            if(_this.collides(frogger,snowMobile2)==true)
            {
                sb.stop();
                go.play();
                pauseTrue = false;
                gameOverScreen.x=400;
                gameOverText.x=265;
                gameOverText.y=560;
                gameOverText2.x=275;
                gameOverText2.y=520;
                gameOverTextShadow.x=267;
                gameOverTextShadow.y=562;
                gameOverTextShadow2.x=277;
                gameOverTextShadow2.y=522;
                textScore.x=-1000;
                blackBox.x=-1000;
                victory.y=760;
                victory.x=400;
                fly.x=5000;
                frogger.x=-5000;
                frogger.y=-5000;
                sceneReady=2;
                //SETTING UP MAP
                mapRandom=parseInt(1+Math.round(Math.random()*3));
            }
            if(_this.collides(frogger,train)==true)
            {
                sb.stop();
                go.play();
                pauseTrue = false;
                gameOverScreen.x=400;
                gameOverText.x=265;
                gameOverText.y=560;
                gameOverText2.x=275;
                gameOverText2.y=520;
                gameOverTextShadow.x=267;
                gameOverTextShadow.y=562;
                gameOverTextShadow2.x=277;
                gameOverTextShadow2.y=522;
                textScore.x=-1000;
                blackBox.x=-1000;
                victory.y=760;
                victory.x=400;
                fly.x=5000;
                frogger.x=-5000;
                frogger.y=-5000;
                sceneReady=2;
                //SETTING UP MAP
                mapRandom=parseInt(1+Math.round(Math.random()*3));
            }
            if(_this.collides(frogger,snowBall)==true)
            {
                sb.stop();
                go.play();
                pauseTrue = false;
                gameOverScreen.x=400;
                gameOverText.x=265;
                gameOverText.y=560;
                gameOverText2.x=275;
                gameOverText2.y=520;
                gameOverTextShadow.x=267;
                gameOverTextShadow.y=562;
                gameOverTextShadow2.x=277;
                gameOverTextShadow2.y=522;
                textScore.x=-1000;
                blackBox.x=-1000;
                victory.y=760;
                victory.x=400;
                fly.x=5000;
                frogger.x=-5000;
                frogger.y=-5000;
                sceneReady=2;
                //SETTING UP MAP
                 mapRandom=parseInt(1+Math.round(Math.random()*3));
            }
            if(_this.collides(frogger,snowBall2)==true)
            {
                sb.stop();
                go.play();
                pauseTrue = false;
                gameOverScreen.x=400;
                gameOverText.x=265;
                gameOverText.y=560;
                gameOverText2.x=275;
                gameOverText2.y=520;
                gameOverTextShadow.x=267;
                gameOverTextShadow.y=562;
                gameOverTextShadow2.x=277;
                gameOverTextShadow2.y=522;
                textScore.x=-1000;
                blackBox.x=-1000;
                victory.y=760;
                victory.x=400;
                fly.x=5000;
                frogger.x=-5000;
                frogger.y=-5000;
                sceneReady=2;
                //SETTING UP MAP
                mapRandom=parseInt(1+Math.round(Math.random()*3));
            }
            if(_this.collides(frogger,snowBall3)==true)
            {
                sb.stop();
                go.play();
                pauseTrue = false;
                gameOverScreen.x=400;
                gameOverText.x=265;
                gameOverText.y=560;
                gameOverText2.x=275;
                gameOverText2.y=520;
                gameOverTextShadow.x=267;
                gameOverTextShadow.y=562;
                gameOverTextShadow2.x=277;
                gameOverTextShadow2.y=522;
                textScore.x=-1000;
                blackBox.x=-1000;
                victory.y=760;
                victory.x=400;
                fly.x=5000;
                frogger.x=-5000;
                frogger.y=-5000;
                sceneReady=2;
                //SETTING UP MAP
                mapRandom=parseInt(1+Math.round(Math.random()*3));
            }
            if(_this.collides(frogger,snowBall4)==true)
            {
                sb.stop();
                go.play();
                pauseTrue = false;
                gameOverScreen.x=400;
                gameOverText.x=265;
                gameOverText.y=560;
                gameOverText2.x=275;
                gameOverText2.y=520;
                gameOverTextShadow.x=267;
                gameOverTextShadow.y=562;
                gameOverTextShadow2.x=277;
                gameOverTextShadow2.y=522;
                textScore.x=-1000;
                blackBox.x=-1000;
                victory.y=760;
                victory.x=400;
                fly.x=5000;
                frogger.x=-5000;
                frogger.y=-5000;
                sceneReady=2;
                //SETTING UP MAP
                mapRandom=parseInt(1+Math.round(Math.random()*3));
            }
            if(sceneReady==2 && enterKey.isDown)
            {
                go.stop();
                musicControl = 1;
                fliesEaten=0;
                sceneReady=0;
                if(mapRandom == 3)
                {
                  this.scene.restart();
                }
                if(mapRandom == 1)
              {
                musicControl = 1;
                game.scene.stop("mainGame3");
                game.scene.start("mainGame");
              }
              if(mapRandom == 2)
              {
                musicControl = 1;
                game.scene.stop("mainGame3");
                game.scene.start("mainGame2");
              }
              if(mapRandom == 4)
              {
                musicControl = 1;
                game.scene.stop("mainGame3");
                game.scene.start("mainGame4");
                
              }
            }
            if((snowBall.x)>950)//goes off the right screen
            {
                snowBall.x=parseInt(-150+Math.round(Math.random()*0));
            }
            if((snowBall2.x)<-150)
            {
                snowBall2.x=parseInt(800+Math.round(Math.random()*950));
            }
            if((snowBall3.x)>950)//goes off the right screen
            {
                snowBall3.x=parseInt(-150+Math.round(Math.random()*0));
            }
            if((snowBall4.x)<-150)
            {
                snowBall4.x=parseInt(800+Math.round(Math.random()*950));
            }
        }//this represents the game loop and is where all the major code that controls the game is written
        
        collides(sprite1,sprite2)
        {
          return Phaser.Geom.Intersects.RectangleToRectangle(sprite1.getBounds(),sprite2.getBounds());
        }

      }//end of our third game scene/screen

      class mainGame4 extends Phaser.Scene
      {
        constructor (config)
        {
            super({key: "mainGame4"});
            _this=this;
        }
      
        preload ()
        {
          //SPRITES

            this.load.image('frogger','../assets/sprites/frogger.png');

            this.load.image('frogger2','../assets/sprites/froggerPowerUp.png');
        
            this.load.image('fly','../assets/sprites/fly.png');
        
            this.load.image('fire','../assets/sprites/fireBackground.jpg');

            this.load.image('road','../assets/sprites/road.jpg');

            this.load.image('lava','../assets/sprites/lava.png');

            this.load.image('carRight','../assets/sprites/car2.png');

            this.load.image('log','../assets/sprites/log.png');

            this.load.image('snowMobile','../assets/sprites/snowMobile.png');

            this.load.image('snowMobileRight','../assets/sprites/snowMobileRight.png');

            this.load.image('boot','../assets/sprites/boot2.png');

            this.load.image('victory','../assets/sprites/victoryBox.png');

            this.load.image('blackBox','../assets/sprites/blackBox.png');

            this.load.image('gameOverScreen','../assets/sprites/gameOverScreen.png');

            this.load.image('fireBall','../assets/sprites/fireBall.png');

            //AUDIO

            this.load.audio('vb','../audio/volcanoBackground.mp3');

            this.load.audio('tm','../audio/titleMusic.m4a');

            this.load.audio('vs','../audio/victorySound.mp3');

            this.load.audio('go','../audio/gameOver.m4a');

            this.load.audio('pm','../audio/powerupMusic.mp3');

            this.load.audio('pa','../audio/powerupAcquired.mp3');

        }//in the preload function we will load our game resources
        
        create (data)
        {
          //SPRITES

          fire = this.add.sprite(400, 300, 'fire');

          fly = this.add.sprite(parseInt(500+Math.round(Math.random()*200)), parseInt(25+Math.round(Math.random()*50)), 'fly');

          lava = this.add.sprite(400, 463, 'lava');

          lava2 = this.add.sprite(400, 413, 'lava');

          boot = this.add.sprite(parseInt(-500+Math.round(Math.random()*1280)), parseInt(300+Math.round(Math.random()*280)), 'boot');

          fireBall = this.add.sprite(parseInt(0+Math.round(Math.random()*300)) , 237, 'fireBall');

          fireBall2 = this.add.sprite(parseInt(500+Math.round(Math.random()*400)) , 197, 'fireBall');

          fireBall3 = this.add.sprite(parseInt(-200+Math.round(Math.random()*300)) , 157, 'fireBall');

          fireBall4 = this.add.sprite(parseInt(500+Math.round(Math.random()*600)) , 117, 'fireBall');

          log = this.add.sprite(parseInt(-300+Math.round(Math.random()*250)) , 500, 'log');

          log2 = this.add.sprite(parseInt(500+Math.round(Math.random()*900)) , 455, 'log');

          log3 = this.add.sprite(parseInt(-100+Math.round(Math.random()*100)) , 415, 'log');

          log4 = this.add.sprite(parseInt(500+Math.round(Math.random()*900)) , 379, 'log');

          frogger = this.add.sprite(400, 575, 'frogger');

          frogger2 = this.add.sprite(0, 0, 'frogger2');

          frogger.angle=0;

          gameOverScreen = this.add.sprite(-1000, 300, 'gameOverScreen');

          blackBox = this.add.sprite(140, 60, 'blackBox');

          victory = this.add.sprite(-1000, 300, 'victory');

          //SPEED OF SPRITE MOVEMENT

          dxFrogger=2.5;

          dxCar=4;

          dxLog=4;
          
          dxCarRight=4;

          dxFly=1;

          dyFly=1;

          dxFireBall = 6.5;

          //SETTING INPUTS / KEYS
        
          leftArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        
          rightArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        
          upArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        
          downArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

          spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

          enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        
          pauseKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);

          unpauseKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);        

          // SOUNDS
          
          vb = this.sound.add('vb');

          vb.loop = true;
  
          tm = this.sound.add('tm');
  
          vs = this.sound.add('vs');
          
          go = this.sound.add('go');
  
          pm = this.sound.add('pm');

          pa = this.sound.add('pa');

          //
          
          textScore = this.add.text(10, 10, 'Flies Eaten: 0', {fontFamily: 'Verdana', fontSize: 32, color: 'white'});

          victoryTextShadow = this.add.text(-1000, -1000, 'You got the Fly!', {fontFamily: 'Verdana', fontSize: 32, color: '#009EFF'});
          victoryTextShadow2 = this.add.text(-1000, -1000, 'Press Enter to keep playing!', {fontFamily: 'Verdana', fontSize: 32, color: '#009EFF'});

          victoryText = this.add.text(-1000, -1000, 'You got the Fly!', {fontFamily: 'Verdana', fontSize: 32, color: 'black'});
          victoryText2 = this.add.text(-1000, -1000, 'Press Enter to keep playing!', {fontFamily: 'Verdana', fontSize: 32, color: 'black'});

          pauseText = this.add.text(-1000, -1000, 'Paused', {fontFamily: 'Verdana', fontSize: 32, color: 'black'});
          pauseText2 = this.add.text(-1000, -1000, 'Press ESC and P to continue playing!', {fontFamily: 'Verdana', fontSize: 28, color: 'black'});

          pauseTextShadow = this.add.text(-1000, -1000, 'Paused', {fontFamily: 'Verdana', fontSize: 32, color: 'black'});
          pauseTextShadow2 = this.add.text(-1000, -1000, 'Press ESC and P to continue playing!', {fontFamily: 'Verdana', fontSize: 28, color: 'black'});

          gameOverTextShadow = this.add.text(-1000, -1000, 'Press Enter to Play Again!', {fontFamily: 'Verdana', fontSize: 20, color: '#009EFF'});
          gameOverTextShadow2 = this.add.text(-1000, -1000, 'You got: '+fliesEaten+' Flies!', {fontFamily: 'Verdana', fontSize: 30, color: '#009EFF'});

          gameOverText = this.add.text(-1000, -1000, 'Press Enter to Play Again!', {fontFamily: 'Verdana', fontSize: 20, color: 'black'});
          gameOverText2 = this.add.text(-1000, -1000, 'You got: '+fliesEaten+' Flies!', {fontFamily: 'Verdana', fontSize: 30, color: 'black'});
        
        }//create the game resources and assign them to variables
        
        update()
        {
            if (yellowTrue == true)
            {
                frogger2.x = frogger.x - 8000;
                frogger2.y = frogger.y - 8000;
            }
            if(musicControl == 1 && musicTrue == true)
            {
                vb.play();
                musicControl=musicControl+1;
                bootz = 0;
                bootReady = 0;
                pauseTrue = true;
            }
            //moving the NPC sprites
            fireBall.x=fireBall.x+dxFireBall;
            fireBall2.x=fireBall2.x-dxFireBall;
            fireBall3.x=fireBall3.x+dxFireBall;
            fireBall4.x=fireBall4.x-dxFireBall;
            fly.angle=fly.angle+1;
            victory.angle=victory.angle+0.1;
            log.x=log.x+dxLog;
            log2.x=log2.x-dxLog;
            log3.x=log3.x+dxLog;
            log4.x=log4.x-dxLog;
            if((fireBall.x)>950)//goes off the right screen
            {
                fireBall.x=parseInt(-150+Math.round(Math.random()*0));
            }
            if((fireBall2.x)<-150)
            {
                fireBall2.x=parseInt(800+Math.round(Math.random()*950));
            }
            if((fireBall3.x)>950)//goes off the right screen
            {
                fireBall3.x=parseInt(-150+Math.round(Math.random()*0));
            }
            if((fireBall4.x)<-150)
            {
                fireBall4.x=parseInt(800+Math.round(Math.random()*950));
            }
            //PLAYER MOVEMENT
            if(leftArrow.isDown)
            {
              frogger.x=frogger.x-dxFrogger-bootz;
              frogger.angle=270;
            }

            if(rightArrow.isDown)
            {
              frogger.x=frogger.x+dxFrogger+bootz;
              frogger.angle=90;
            }

            if(upArrow.isDown)
            {
               frogger.y=frogger.y-dxFrogger-bootz;
               frogger.angle=0;
            }

            if(downArrow.isDown)
            {
              frogger.y=frogger.y+dxFrogger+bootz;
              frogger.angle=180;
            }

            if(leftArrow.isDown && upArrow.isDown)
            {
               frogger.angle=315;
            }

            if(rightArrow.isDown && upArrow.isDown)
            {
              frogger.angle=45;
            }

            if(leftArrow.isDown && downArrow.isDown)
            {
              frogger.angle=225;
            }

            if(rightArrow.isDown && downArrow.isDown)
            {
              frogger.angle=135;
            }

            if((frogger.x+22)>800)//frogger goes off the right
            {
               frogger.x=frogger.x-dxFrogger;
               if(bootReady == 1)// if frogger has boot powerup
               {
                 frogger.x=frogger.x-dxFrogger;
               }
            }

            if((frogger.x-22)<0)//frogger goes off the left
            {
              frogger.x=frogger.x+dxFrogger;
              if(bootReady == 1)// if frogger has boot powerup
                {
                  frogger.x=frogger.x+dxFrogger;
                }
            }
                 
            if((frogger.y-22)<0)//frogger goes off the top
            {
               frogger.y=frogger.y+dxFrogger;
               if(bootReady == 1)// if frogger has boot powerup
               {
                 frogger.y=frogger.y+dxFrogger;
               }
            }
                  
            if((frogger.y+22)>600)//frogger goes off the bottom
            {
                frogger.y=frogger.y-dxFrogger;
                if(bootReady == 1)// if frogger has boot powerup
                {
                   frogger.y=frogger.y-dxFrogger;
                }
            }
                //PLAYER MOVEMENT FOR POWERED UP FROGGER
            if(leftArrow.isDown)
            {
               frogger2.x=frogger2.x-dxFrogger-bootz;
               frogger2.angle=270;
            }

            if(rightArrow.isDown)
            {
                frogger2.x=frogger2.x+dxFrogger+bootz;
                frogger2.angle=90;
            }

        if(upArrow.isDown)
        {
            frogger2.y=frogger2.y-dxFrogger-bootz;
            frogger2.angle=0;
        }

        if(downArrow.isDown)
        {
            frogger2.y=frogger2.y+dxFrogger+bootz;
            frogger2.angle=180;
        }

        if(leftArrow.isDown && upArrow.isDown)
        {
            frogger2.angle=315;
        }

        if(rightArrow.isDown && upArrow.isDown)
        {
            frogger2.angle=45;
        }

        if(leftArrow.isDown && downArrow.isDown)
        {
            frogger2.angle=225;
        }

        if(rightArrow.isDown && downArrow.isDown)
        {
            frogger2.angle=135;
        }

        if((frogger2.x+22)>800)//frogger goes off the right
        {
            frogger2.x=frogger2.x-dxFrogger;
            if(bootReady == 1)// if frogger has boot powerup
            {
                frogger2.x=frogger2.x-dxFrogger;
            }
        }

        if((frogger2.x-22)<0)//frogger goes off the left
        {
            frogger2.x=frogger2.x+dxFrogger;
            if(bootReady == 1)// if frogger has boot powerup
              {
                frogger2.x=frogger2.x+dxFrogger;
              }
        }
             
        if((frogger2.y-22)<0)//frogger goes off the top
        {
            frogger2.y=frogger2.y+dxFrogger;
            if(bootReady == 1)// if frogger has boot powerup
            {
               frogger2.y=frogger2.y+dxFrogger;
            }
        }
              
        if((frogger2.y+22)>600)//frogger goes off the bottom
        {
            frogger2.y=frogger2.y-dxFrogger;
            if(bootReady == 1)// if frogger has boot powerup
            {
               frogger2.y=frogger2.y-dxFrogger;
            }
        }
        //TEXT
        if(fliesEaten>0)
        {
            textScore.text="Flies Eaten: "+fliesEaten;
        }


        //COLLISIONS
        if(_this.collides(frogger,fly)==true)
        {
            pauseTrue = false;
            pm.stop();
            vb.stop();
            vs.play();
            musicTrue = false;
            fly.x=-1000;
            fliesEaten=fliesEaten+1;
            victory.x=400;
            victoryText.x=260;
            victoryText.y=250;
            victoryTextShadow.x=262;
            victoryTextShadow.y=252;
            victoryText2.x=170;
            victoryText2.y=290;
            victoryTextShadow2.x=172;
            victoryTextShadow2.y=292;
            frogger.x=-5000;
            frogger.y=-5000;
            frogger2.x=-5000;
            frogger2.y=-5000;
            sceneReady=1;                
            //SETTING UP MAP
            mapRandom=parseInt(1+Math.round(Math.random()*3));
            if(pauseKey.isDown && pauseTrue == true)
            {
              vs.stop();
              victoryText.x=-1000;
              victoryText2.x=-1000;
              victoryTextShadow.x=-1000;
              victoryTextShadow2.x=-1000;
              victoryText.y=-1000;
              victoryText2.y=-1000;
              victoryTextShadow.y=-1000;
              victoryTextShadow2.y=-1000;
              victory.y=300;
              pauseText.x=335;
              pauseText.y=250;
              pauseTextShadow.x=337;
              pauseTextShadow.y=252;
              pauseText2.x=140;
              pauseText2.y=290;
              pauseTextShadow2.x=142;
              pauseTextShadow2.y=292;
            }
        }
        if(_this.collides(boot,lava2)==true)
        {
            boot.y=boot.y-30;
        }
        if(_this.collides(boot,lava)==true)
        {
            boot.y=boot.y+30;
        }
        if(_this.collides(boot,lava)==true && _this.collides(boot,lava2)==true)
        {
            boot.y=boot.y+30;
        }
        if((boot.x-22)<0 && boot.x > -25)//frogger goes off the left
        {
            boot.x=boot.x+25;
        }
        if(_this.collides(frogger,boot)==true)
        {
            yellowTrue = false;
            frogger2.x = frogger.x;
            frogger2.y = frogger.y;
            bootReady = 1;
            bootz = 2;
            boot.x=-8000;
            boot.y=-8000;
            setTimeout(bootOver, 5000); //Credit to https://www.w3schools.com/js/js_timing.asp for the code
            vb.stop();
            pa.play();
            pm.play();
        }
        function bootOver()
        {
            yellowTrue = true;
            pm.stop();    
            musicControl = 1;
        }
        if(enterKey.isDown && sceneReady==1)
        {
            musicTrue = true;
          vs.stop();
          //WAY TO SWITCH LEVELS
          if(mapRandom == 1)
          {
             musicControl = 1;
             game.scene.stop("mainGame4");
             game.scene.start("mainGame");
          }
          if(mapRandom == 2)
          {
            musicControl = 1;
            game.scene.stop("mainGame4");
            game.scene.start("mainGame2");
          }
          if(mapRandom == 3)
          {
            musicControl = 1;
            game.scene.stop("mainGame4");
            game.scene.start("mainGame3");
          }
          if(enterKey.isDown && sceneReady==1)
          {
            vs.stop();
            this.scene.restart();//Credits to https://phaser.io/examples/v3/view/scenes/restart-a-scene for the restart scene code.
            sceneReady=0;
            musicControl = 1;
          }
        }

        //PAUSE SCREEN

        if(pauseKey.isDown && pauseTrue == true)
        {
           frogger.x=-1000;
           frogger.y=-5000;
           frogger2.x=-1000;
           frogger2.y=-5000;
           victory.x=400;
           pauseText.x=335;
           pauseText.y=250;
           pauseTextShadow.x=337;
           pauseTextShadow.y=252;
           pauseText2.x=140;
           pauseText2.y=290;
           pauseTextShadow2.x=142;
           pauseTextShadow2.y=292;
           if(unpauseKey.isDown && pauseTrue == true)
           {
            frogger.x=400;
            frogger.y=575;
            frogger2.x=400;
            frogger2.y=575;
            victory.x=-8000;
            pauseText.y=-9999;
            pauseText2.y=-9999;
            pauseTextShadow2.y=-9999;
            pauseTextShadow.y=-9999;
            unpauseReady=1;
          }
        }

        if(_this.collides(frogger,log)==true)
        {
            frogger.x=log.x;
            frogger2.x=log.x;
            if((frogger.x+22)>850)//frogger goes off the right
            {
                pm.stop();
                vb.stop();
                go.play();
                pauseTrue = false;
                musicTrue = false;
                gameOverScreen.x=400;
                gameOverText.x=265;
                gameOverText.y=560;
                gameOverText2.x=275;
                gameOverText2.y=520;
                gameOverTextShadow.x=267;
                gameOverTextShadow.y=562;
                gameOverTextShadow2.x=277;
                gameOverTextShadow2.y=522;
                textScore.x=-1000;
                blackBox.x=-1000;
                victory.y=760;
                victory.x=400;
                fly.x=5000;
                frogger.x=-5000;
                frogger.y=-5000;
                frogger2.x=-5000;
                frogger2.y=-5000;
                sceneReady=2;
                mapRandom=parseInt(1+Math.round(Math.random()*3));
            }
        }
        else if(_this.collides(frogger,log2)==true)
        {
           frogger.x=log2.x;
           frogger2.x=log2.x;
           if((frogger.x-22)<-50)//frogger goes off the left
           {
            pm.stop();
             vb.stop();
             go.play();
             pauseTrue = false;
             musicTrue = false;
             gameOverScreen.x=400;
             gameOverText.x=265;
             gameOverText.y=560;
             gameOverText2.x=275;
             gameOverText2.y=520;
             gameOverTextShadow.x=267;
             gameOverTextShadow.y=562;
             gameOverTextShadow2.x=277;
             gameOverTextShadow2.y=522;
             textScore.x=-1000;
             blackBox.x=-1000;
             victory.y=760;
             victory.x=400;
             fly.x=5000;
             frogger.x=-5000;
             frogger.y=-5000;
             frogger2.x=-5000;
             frogger2.y=-5000;
             sceneReady=2;
             mapRandom=parseInt(1+Math.round(Math.random()*3));
           }
        }
        else if(_this.collides(frogger,log3)==true)
        {
          frogger.x=log3.x;
          frogger2.x=log3.x;
          if((frogger.x+22)>850)//frogger goes off the right
          {
            pm.stop();
            vb.stop();
            go.play();
            pauseTrue = false;
            musicTrue = false;
            gameOverScreen.x=400;
            gameOverText.x=265;
            gameOverText.y=560;
            gameOverText2.x=275;
            gameOverText2.y=520;
            gameOverTextShadow.x=267;
            gameOverTextShadow.y=562;
            gameOverTextShadow2.x=277;
            gameOverTextShadow2.y=522;
            textScore.x=-1000;
            blackBox.x=-1000;
            victory.y=760;
            victory.x=400;
            fly.x=5000;
            frogger.x=-5000;
            frogger.y=-5000;
            frogger2.x=-5000;
            frogger2.y=-5000;
            mapRandom=parseInt(1+Math.round(Math.random()*3));
            sceneReady=2;
          }
        }
        else if(_this.collides(frogger,log4)==true)
        {
          frogger.x=log4.x;
          frogger2.x=log4.x;
          if((frogger.x-22)<-50)//frogger goes off the left
          {
            pm.stop();
            vb.stop();
            go.play();
            pauseTrue = false;
            musicTrue = false;
            gameOverScreen.x=400;
            gameOverText.x=265;
            gameOverText.y=560;
            gameOverText2.x=275;
            gameOverText2.y=520;
            gameOverTextShadow.x=267;
            gameOverTextShadow.y=562;
            gameOverTextShadow2.x=277;
            gameOverTextShadow2.y=522;
            textScore.x=-1000;
            blackBox.x=-1000;
            victory.y=760;
            victory.x=400;
            fly.x=5000;
            frogger.x=-5000;
            frogger.y=-5000;
            frogger2.x=-5000;
            frogger2.y=-5000;
            mapRandom=parseInt(1+Math.round(Math.random()*3));
            sceneReady=2;
          }
        }
        if(_this.collides(frogger,lava)==true && _this.collides(frogger,log)==false && _this.collides(frogger,log2)==false && _this.collides(frogger,log3)==false && _this.collides(frogger,log4)==false)
        {
            pm.stop();
            vb.stop();
            go.play();
            pauseTrue = false;
            musicTrue = false;
            gameOverScreen.x=400;
            gameOverText.x=265;
            gameOverText.y=560;
            gameOverText2.x=275;
            gameOverText2.y=520;
            gameOverTextShadow.x=267;
            gameOverTextShadow.y=562;
            gameOverTextShadow2.x=277;
            gameOverTextShadow2.y=522;
            textScore.x=-1000;
            blackBox.x=-1000;
            victory.y=760;
            victory.x=400;
            fly.x=5000;
            frogger.x=-5000;
            frogger.y=-5000;
            frogger2.x=-5000;
            frogger2.y=-5000;
            sceneReady=2;
            //SETTING UP MAP
            mapRandom=parseInt(1+Math.round(Math.random()*3));
        }
        if(_this.collides(frogger,lava2)==true && _this.collides(frogger,log)==false && _this.collides(frogger,log2)==false && _this.collides(frogger,log3)==false && _this.collides(frogger,log4)==false)
        {
            pm.stop();
            vb.stop();
            go.play();
            pauseTrue = false;
            musicTrue = false;
            gameOverScreen.x=400;
            gameOverText.x=265;
            gameOverText.y=560;
            gameOverText2.x=275;
            gameOverText2.y=520;
            gameOverTextShadow.x=267;
            gameOverTextShadow.y=562;
            gameOverTextShadow2.x=277;
            gameOverTextShadow2.y=522;
            textScore.x=-1000;
            blackBox.x=-1000;
            victory.y=760;
            victory.x=400;
            fly.x=5000;
            frogger.x=-5000;
            frogger.y=-5000;
            frogger2.x=-5000;
            frogger2.y=-5000;
            sceneReady=2;
            //SETTING UP MAP
            mapRandom=parseInt(1+Math.round(Math.random()*3));
        }
        if(_this.collides(frogger,fireBall)==true)
        {
            pm.stop();
            vb.stop();
            go.play();
            pauseTrue = false;
            musicTrue = false;
            gameOverScreen.x=400;
            gameOverText.x=265;
            gameOverText.y=560;
            gameOverText2.x=275;
            gameOverText2.y=520;
            gameOverTextShadow.x=267;
            gameOverTextShadow.y=562;
            gameOverTextShadow2.x=277;
            gameOverTextShadow2.y=522;
            textScore.x=-1000;
            blackBox.x=-1000;
            victory.y=760;
            victory.x=400;
            fly.x=5000;
            frogger.x=-5000;
            frogger.y=-5000;
            frogger2.x=-5000;
            frogger2.y=-5000;
            sceneReady=2;
            //SETTING UP MAP
             mapRandom=parseInt(1+Math.round(Math.random()*3));
        }
        if(_this.collides(frogger,fireBall2)==true)
        {
            pm.stop();
            vb.stop();
            go.play();
            pauseTrue = false;
            musicTrue = false;
            gameOverScreen.x=400;
            gameOverText.x=265;
            gameOverText.y=560;
            gameOverText2.x=275;
            gameOverText2.y=520;
            gameOverTextShadow.x=267;
            gameOverTextShadow.y=562;
            gameOverTextShadow2.x=277;
            gameOverTextShadow2.y=522;
            textScore.x=-1000;
            blackBox.x=-1000;
            victory.y=760;
            victory.x=400;
            fly.x=5000;
            frogger.x=-5000;
            frogger.y=-5000;
            frogger2.x=-5000;
            frogger2.y=-5000;
            sceneReady=2;
            //SETTING UP MAP
            mapRandom=parseInt(1+Math.round(Math.random()*3));
        }
        if(_this.collides(frogger,fireBall3)==true)
        {
            pm.stop();
            vb.stop();
            go.play();
            pauseTrue = false;
            musicTrue = false;
            gameOverScreen.x=400;
            gameOverText.x=265;
            gameOverText.y=560;
            gameOverText2.x=275;
            gameOverText2.y=520;
            gameOverTextShadow.x=267;
            gameOverTextShadow.y=562;
            gameOverTextShadow2.x=277;
            gameOverTextShadow2.y=522;
            textScore.x=-1000;
            blackBox.x=-1000;
            victory.y=760;
            victory.x=400;
            fly.x=5000;
            frogger.x=-5000;
            frogger.y=-5000;
            frogger2.x=-5000;
            frogger2.y=-5000;
            sceneReady=2;
            //SETTING UP MAP
            mapRandom=parseInt(1+Math.round(Math.random()*3));
        }
        if(_this.collides(frogger,fireBall4)==true)
        {
            pm.stop();
            vb.stop();
            go.play();
            pauseTrue = false;
            musicTrue = false;
            gameOverScreen.x=400;
            gameOverText.x=265;
            gameOverText.y=560;
            gameOverText2.x=275;
            gameOverText2.y=520;
            gameOverTextShadow.x=267;
            gameOverTextShadow.y=562;
            gameOverTextShadow2.x=277;
            gameOverTextShadow2.y=522;
            textScore.x=-1000;
            blackBox.x=-1000;
            victory.y=760;
            victory.x=400;
            fly.x=5000;
            frogger.x=-5000;
            frogger.y=-5000;
            frogger2.x=-5000;
            frogger2.y=-5000;
            sceneReady=2;
            //SETTING UP MAP
            mapRandom=parseInt(1+Math.round(Math.random()*3));
        }
        if(sceneReady==2 && enterKey.isDown)
        {
            musicTrue = true;
            go.stop();
            musicControl = 1;
            fliesEaten=0;
            sceneReady=0;
            if(mapRandom == 4)
            {
              this.scene.restart();
            }
            if(mapRandom == 1)
            {
              musicControl = 1;
              game.scene.stop("mainGame4");
              game.scene.start("mainGame");
            }
          if(mapRandom == 2)
          {
            musicControl = 1;
            game.scene.stop("mainGame4");
            game.scene.start("mainGame2");
          }
          if(mapRandom == 3)
          {
            musicControl = 1;
            game.scene.stop("mainGame4");
            game.scene.start("mainGame3");
          }
        }
        if((fireBall.x)>950)//goes off the right screen
        {
            fireBall.x=parseInt(-150+Math.round(Math.random()*0));
        }
        if((fireBall2.x)<-150)
        {
            fireBall2.x=parseInt(800+Math.round(Math.random()*950));
        }
        if((fireBall3.x)>950)//goes off the right screen
        {
            fireBall3.x=parseInt(-150+Math.round(Math.random()*0));
        }
        if((fireBall4.x)<-150)
        {
            fireBall4.x=parseInt(800+Math.round(Math.random()*950));
        }
        if((log.x)>950)//goes off the right screen
        {
            log.x=parseInt(-150+Math.round(Math.random()*150));
        }

        if((log2.x)<-150)
        {
            log2.x=parseInt(800+Math.round(Math.random()*150));
        }

        if((log3.x)>950)//goes off the right screen
        {
            log3.x=parseInt(-150+Math.round(Math.random()*150));
        }

        if((log4.x)<-150)
        {
            log4.x=parseInt(800+Math.round(Math.random()*150));
        }
      }//this represents the game loop and is where all the major code that controls the game is written
        
      collides(sprite1,sprite2)
      {
        return Phaser.Geom.Intersects.RectangleToRectangle(sprite1.getBounds(),sprite2.getBounds());
      }

    }//end of our fourth game scene/screen


    var config = {
        type: Phaser.AUTO,
        parent: 'phaser-example',
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                debug: true
             
                }
        }
    };
      
    var game = new Phaser.Game(config);

    game.scene.add("titleScreen",titleScreen);
    game.scene.add("mainGame",mainGame);
    game.scene.add("mainGame2",mainGame2);
    game.scene.add("mainGame3",mainGame3);
    game.scene.add("mainGame4",mainGame4);
    game.scene.start("titleScreen");