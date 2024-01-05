/*
  Jeremy Thummel, David Cacorovski, Sohail Meghani
  1/11/2021
  Game Page
  This is the code for our game
*/

//GLOBAL GENERAL VARIABLES

// Global: skipTrue is a global variable because it is being used in: skipButton click, and setTimeout in doc ready.
let skipTrue=false;
// Global: waves is a global variable because it is being used in: attacking(); battle(); and yescontinue click.
let waves=1;
// Global: enemy is a global variable because it is being used in: attacking(); enemyAttack(); battle(); run click, and yesContinue click.
let enemy="";
// Global: enemyHealth is a global variable because it is being used in: attacking(); enemyAttack(); battle(); run click, and yesContinue click.
let enemyHealth=0;
// Global: enemyLeft is a global variable because it is being used in: enemyAttack(); battle();
let enemyLeft=5;
// Global: damageOutput is a global variable because it is being used in: attacking(); and moveOne click, and moveTwo click.
let damageOutput;
// Global: gold is a global variable because it is being used in: shopping(); attacking();
let gold=0;
// Global: currentgold is a global variable because it is being used in: skipVid(); attacking(); bag click, buy click, and yescontinue click.
let currentGold=0;
// Global: name is a global variable because it is being used in: nameGet(); and submitBTN click.
let name="";
// Global: nameDeclared is a global variable because it is being used in: nameGet(); and submitBTN click, and bag click.
let nameDeclared=false;
// Global: enemySPD is a global variable as it is being used in: attacking(); and enemyAttack();
let enemySPD=0;
// Global: wave1True is a global variable as it is being used in: attacking(); battle(); run click, and yesContinue click.
let wave1True=true;
// Global: wave2True is a global variable as it is being used in: attacking(); battle(); run click, and yesContinue click.
let wave2True=false;
// Global: wave3True is a global variable as it is being used in: attacking(); battle(); run click, and yesContinue click.
let wave3True=false;
// Global: neoWaves is a global variable as it is being used in: attacking(); enemyAttack(); battle(); playvid(); skipvid(); run click, and yescontinue click
let neoWaves=false;
// Global: bossWave is a global variable as it is being used in: attacking(); battle(); run click, and yesContinue click.
let bossWave=false;
// Global: bossPhased is a global variable as it is being used in: attacking(); battle(); run click, and yesContinue click.
let bossPhased=false;
// Global: bossFirst is a global variable as it is being used in: attacking(); battle(); run click, and yesContinue click.
let bossFirst=true;
// Global: finalWave is a global variable as it is being used in: attacking(); battle(); run click, and yesContinue click.
let finalWave=false;
// Global: neoCutsceneFirst is a global variable as it is being used in: playVid(); The reason it is global is because we dont want to make neoCutsceneFirst = true everytime we go into that function.
let neoCutsceneFirst=true;
// Global: bossCutsceneFirst is a global variable as it is being used in: playVid();
let bossCutsceneFirst=true;
// Global: phaseCutsceneFirst is a global variable as it is being used in: playVid();
let phaseCutsceneFirst=true;
// Global: neoEndless is a global variable as it is being used in: attacking(); battle(); skipVid(); run click, yescontinue click, and walking();
let neoEndless=false;
// Global: neoEndlessCheck is a global variable as it is being used in: attacking(); battle(); run click, and yescontinue click.
let neoEndlessCheck=false;
// Global: shopKeeperChange is a global variable as it is being used in: battle(); The reason it is global is because we dont want to make shopKeeperChange = false everytime we go into that function.
let shopKeeperChange=false;

//MOVE VARIABLES (Needed so that you can use this in mutiple functions.)

// Global: woodSpearMove is a global variable because it is being used in: shopping(); and attack click.
let woodSpearMove=false;
// Global: spearStrikeCounter is a global variable because it is being used in: bubbleSort(); and and moveOne click, and moveTwo click.
let spearStrikeCounter=0;
// Global: newDamage is a global variable/array because it is being used in: bubbleSort(); and and moveOne click, and moveTwo click.
let newDamage=[];

//STAT VARIABLES, (Needs to be used globally so the numbers can function properly.)

// Global: experience is a global variable because it is being used in: attacking(); levelUp(); and bag click.
let experience=0;
// Global: experienceCap is a global variable because it is being used in: levelUp(); and bag click.
let experienceCap=15;
// Global: level1 is a global variable because it is being used in: levelUp(); and atkButton, and defButton, and spdButton, and hpButton,
let level1=true;
// Global: level2 is a global variable as it is being used in: levelUp(); levelCheck(); and experienceCheck();
let level2=true;
// Global: level3 is a global variable as it is being used in: levelUp(); levelCheck(); and experienceCheck();
let level3=true;
// Global: level4 is a global variable as it is being used in: levelUp(); levelCheck(); and experienceCheck();
let level4=true;
// Global: level5 is a global variable as it is being used in: levelUp(); levelCheck(); and experienceCheck();
let level5=true;
// Global: level6 is a global variable as it is being used in: levelUp(); levelCheck(); and experienceCheck();
let level6=true;
// Global: level7 is a global variable as it is being used in: levelUp(); levelCheck(); and experienceCheck();
let level7=true;
// Global: level8 is a global variable as it is being used in:levelUp(); levelCheck(); and experienceCheck();
let level8=true;
// Global: level9 is a global variable as it is being used in: levelUp(); levelCheck(); and experienceCheck();
let level9=true;
// Global: level10 is a global variable as it is being used in: levelUp(); levelCheck(); and experienceCheck();
let level10=true;
// Global: maxLevel is a global variable as it is being used in: levelUp(); levelCheck(); and experienceCheck();
let maxLevel=false;
// Global: atkStat is a global variable because it is being used in: levelup(); bubbleSort(); atkButton click, and bag click, and moveOne.
let atkStat=10;
// Global: defStat is a global variable because it is being used in: levelUp(); enemyAttack(); defButton click, and bag click.
let defStat=8;
// Global: spdStat is a global variable because it is being used in: levelUp(); attacking(); enemyAttack(); spdButton click, and bag click.
let spdStat=15;
// Global: playerHealth is a global variable because it is being used in: enemyAttack(); battle(); levelUp(); run click, bag click, yesContinue click, and hpButton click.
let playerHealth=25;
// Global: hpStat is a global variable because it is being used in: levelUp(); yesContinue click, run click, bag click, hpButton click.
let hpStat=25;
// Global: spdTrue is a global variable because it is being used in: attacking(); enemyAttack(); levelUp(); gameOver(); atkButton(); defButton(); hpButton(); spdButton();
let spdTrue=false;
// Global: firstMove is a global variable because it is being used in: attacking(); enemyAttack();
let firstMove=true;
// Global: atkLevel is a global variable because it is being used in: levelUp(); atkButton click.
let atkLevel=0;
// Global: defLevel is a global variable because it is being used in: levelUp(); defButton click.
let defLevel=0;
// Global: hpLevel is a global variable because it is being used in: levelUp(); hpButton click.
let hpLevel=0;
// Global: spdLevel is a global variable because it is being used in: levelUp(); spdButton click.
let spdLevel=0;

//GLOBAL ITEM VARIABLES (Needs to be used globally since the item variables are used in multiple functions.)

// Global: woodSpear is a global variable because it is being used in: walking(); woodSpearBuy click, shopping(); and attack click.
let woodSpear=false;
// Global: potion is a global variable because it is being used in: potion2 click, and potion3 click
let potion=0;

//MUSIC GLOBAL VARIABLES

// Global: firstWaves is a global variable because it is being used in: battle(); run click, and yesContinue.
var firstWaves=new Audio("../audio/firstWaves.mp3");
// Global: secondWaves is a global variable as it is being used in: battle(); run click, and yesContinue.
var secondWaves=new Audio("../audio/secondWaves.mp3");
// Global: thirdWaves is a global variable as it is being used in: battle(); run click, and yesContinue.
var thirdWaves=new Audio("../audio/thirdWaves.mp3");
// Global: neoWavesMusic is a global variable as it is being used in: battle(); run click, and yesContinue.
var neoWavesMusic=new Audio("../audio/neoWaves.mp3");
// Global: bossWavesMusic is a global variable as it is being used in: battle(); run click, and yesContinue.
var bossWavesMusic=new Audio("../audio/bossWaves.mp3");
// Global: finalBossPhase is a global variable as it is being used in: battle(); run click, and yesContinue.
var finalBossPhase=new Audio("../audio/finalBossPhase.mp3");
// Global: transition is a global variable because it is being used in: battle(); run click, and yesContinue.
var transition=new Audio("../audio/transition.mp3");
// Global:  levelUpSound is a global variable because it is being used in: enterBattle click, and run click, and yesContinue.
var levelUpSound=new Audio("../audio/levelUp.mp3");

/*************** JEREMY THUMMEL 1/8/21 11:54 AM Made the attacking(); function ***************/
/*************************************************************************************************************
          ******************FUNCTION WITHOUT PARAMETER WITHOUT RETURN**************************/
function attacking()
{
  var attackSound=new Audio("../audio/slash.mp3");
  // randomCrit is a variable that randomizes a number between 1-20 and if it rolls a 1 it activates a critical hit.
  let randomCrit=(Math.round(Math.random()*19)+1);
  if(enemy=="Strawburry")
  {
    if(neoWaves==true)
    {
      if(neoEndless==true)
      {
        enemySPD=50;
      }
      else
      {
        enemySPD=35;
      }
    }
    else
    {
      enemySPD=10;
    }
  }

  else if(enemy=="Frosty")
  {
    if(neoWaves==true)
    {
      if(neoEndless==true)
      {
        enemySPD=50;
      }
      else
      {
        enemySPD=10;
      }
    }
    else
    {
      enemySPD=20;
    }
  }

  else if(enemy=="Hiveo")
  {
    if(neoWaves==true)
    {
      if(neoEndless==true)
      {
        enemySPD=50;
      }
      else
      {
        enemySPD=12.5;
      }
    }
    else
    {
      enemySPD=25;
    }
  }

  else if(enemy=="Boulder Snake")
  {
    if(neoWaves==true)
    {
      if(neoEndless==true)
      {
        enemySPD=50;
      }
      else
      {
        enemySPD=35;
      }
    }
    else
    {
      enemySPD=15;
    }
  }

  else if(enemy=="Covered King")
  {
    if(neoWaves==true)
    {
      if(neoEndless==true)
      {
        enemySPD=49;
      }
      else
      {
        enemySPD=50;
      }
    }
    else
    {
      enemySPD=15;
    }
  }

  else if(enemy=="Buff Pengu")
  {
    if(neoWaves==true)
    {
      if(neoEndless==true)
      {
        enemySPD=49;
      }
      else
      {
        enemySPD=50;
      }
    }
    else
    {
      enemySPD=30;
    }
  }

  else if(enemy=="Zyborgus")
  {
    if(neoWaves==true)
    {
      enemySPD=5000;
    }
    else
    {
      if(finalWave==true)
      {
        enemySPD=500;
      }
      else
      {
        enemySPD=50;
      }
    }
  }

  if(spdTrue==true)
  {
    enemySPD=0;
  }

  if(enemySPD==spdStat)
  {
    // coinFlip is a variable that does a 50/50 chance the the enemy and player speed happens to be the same.
    let coinFlip=0;
    coinFlip=(Math.round(Math.random()*1)+1);
    if(coinFlip==1)
    {
      enemySPD+=1;
    }
    else
    {
      enemySPD-=1;
    }
  }

  if(enemySPD>spdStat)
  {
    $("#greyBackground").css('opacity', '0');
    $("#greyBackground").hide();
    $("#exitButton").hide();
    $("#moveOne").hide();
    $("#moveTwo").hide();
    $("#attack").hide();
    $("#run").hide();
    $("#bag").hide();
    enemyAttack();
  }
  else
  {
    // Lexical: Used here to make a attack sound when the attacking gif shows up.
    attackSound.play();
    $("#attackHit").show();
    $("#greyBackground").css('opacity', '0');
    $("#greyBackground").hide();
    $("#exitButton").hide();
    $("#moveOne").hide();
    $("#moveTwo").hide();
    $("#attack").hide();
    $("#run").hide();
    $("#bag").hide();
    setTimeout(function(){
      // Used here because we want a hit sound to activate after this setTimeout has happened.
      var hitSound=new Audio("../audio/hit.mp3");
      hitSound.play();
      $("#attackHit").hide();
      // Lexical: randomCrit is used here if the randomCrit lands a 1 to execute the critical strike code.
      if(randomCrit==1)
      {
        damageOutput*=2;
        $("#lblEncounter").text("You dealt a CRITICAL STRIKE OF " + damageOutput + " DAMAGE!");
        enemyHealth-=damageOutput;
        if(enemyHealth<1)
        {
          enemyHealth=0;
        }
        $("#lblEnemyHealth").text('Enemy HP: ' + enemyHealth);
      }
      else
      {
        $("#lblEncounter").text("You dealt a strike of " + damageOutput + " damage!");
        enemyHealth-=damageOutput;
        if(enemyHealth<1)
        {
          enemyHealth=0;
        }
        $("#lblEnemyHealth").text('Enemy HP: ' + enemyHealth);
      }
      if(enemyHealth<1)
      {
        setTimeout(function(){
          $("#lblEncounter").text("The enemy has been defeated!");

          if(enemy=="Strawburry")
          {
            currentGold+=(Math.round(Math.random()*4)+2);
            experience+=(Math.round(Math.random()*1)+5);
            $("#enemyStraw").css('animation', 'fadeOut 1s');
            $("#enemyStraw").css('opacity', '0');
            waves+=1;
            experienceCheck();
          }

          else if(enemy=="Frosty")
          {
            currentGold+=(Math.round(Math.random()*5)+5);
            experience+=(Math.round(Math.random()*2)+4);
            $("#enemyFrosty").css('animation', 'fadeOut 1s');
            $("#enemyFrosty").css('opacity', '0');
            waves+=1;
            experienceCheck();
          }

          else if(enemy=="Hiveo")
          {
            currentGold+=(Math.round(Math.random()*6)+4);
            experience+=(Math.round(Math.random()*1)+4);
            $("#enemyHiveo").css('animation', 'fadeOut 1s');
            $("#enemyHiveo").css('opacity', '0');
            waves+=1;
            experienceCheck();
          }

          else if(enemy=="Covered King")
          {
            currentGold+=(Math.round(Math.random()*5)+10);
            experience+=(Math.round(Math.random()*5)+5);
            $("#enemyCovered").css('animation', 'fadeOut 1s');
            $("#enemyCovered").css('opacity', '0');
            waves+=1;
            experienceCheck();
          }

          else if(enemy=="Buff Pengu")
          {
            currentGold+=(Math.round(Math.random()*5)+12);
            experience+=(Math.round(Math.random()*5)+5);
            $("#enemyPengu").css('animation', 'fadeOut 1s');
            $("#enemyPengu").css('opacity', '0');
            waves+=1;
            experienceCheck();
          }

          else if(enemy=="Boulder Snake")
          {
            currentGold+=(Math.round(Math.random()*3)+2);
            experience+=(Math.round(Math.random()*2)+3);
            $("#enemySnake").css('animation', 'fadeOut 1s');
            $("#enemySnake").css('opacity', '0');
            waves+=1;
            experienceCheck();
          }

          else if(enemy=="Zyborgus")
          {
            if(bossFirst==true)
            {
              bossPhased=true;
              bossFirst=false;
            }
            if(finalWave==true)
            {
              wave3True=false;
              wave2True=false;
              wave1True=false
              bossWave=false;
              finalWave=false;
              neoEndless=true;
              neoEndlessCheck=true;
              $("#avatarInGame").attr('src', '../images/neoDonCloseUp.png');
            }
            currentGold+=(Math.round(Math.random()*0)+50);
            experience+=(Math.round(Math.random()*0)+0);
            $("#enemyZyborgus").css('animation', 'fadeOut 1s');
            $("#enemyZyborgus").css('opacity', '0');
            waves+=1;
            experienceCheck();
          }
        }, 1500);
      }
      else
      {
        if(firstMove==true)
        {
          setTimeout(function(){
            enemyAttack();
          }, 1000);
        }
        else
        {
            enemyAttack();
        }
      }
    }, 750);
  }
}

/*************** JEREMY THUMMEL 1/9/21 5:43 PM Made the enemyAttack(); function ***************/
/*************** DAVID CACOROVSKI 1/9/21 5:49 PM Added more stats to different enemies to enemyAttack(); functions***************/
/*************** SOHAIL MEGHANI 1/9/21 6:17 PM Added labels to enemyAttack(); function***************/
/*************************************************************************************************************
          ******************FUNCTION WITHOUT PARAMETER WITHOUT RETURN**************************/
function enemyAttack()
{
  // enemyCrit is a variable that is the same as randomCrit execpt for the enemy.
  let enemyCrit=(Math.round(Math.random()*19)+1);
  // enemyDamage is a variable that the enemy uses as their source of damage.
  let enemyDamage=0;
  if(enemy=="Strawburry")
  {
    if(neoWaves==true)
    {
      enemyDamage=(Math.round(Math.random()*6)+8);
    }
    else
    {
      // Lexical: used here if enemy is Strawburry will roll that randomized amount of damage that a Strawburry can do.
      enemyDamage=(Math.round(Math.random()*3)+4);
    }
    defStat/=4;
    enemyDamage-=defStat;
    defStat*=4;
  }

  else if(enemy=="Frosty")
  {
    if(neoWaves==true)
    {
      enemyDamage=(Math.round(Math.random()*2)+16);
    }
    else
    {
      enemyDamage=(Math.round(Math.random()*5)+8);
    }
    defStat/=4;
    enemyDamage-=defStat;
    defStat*=4;
  }

  else if(enemy=="Zyborgus")
  {
    if(neoWaves==true)
    {
      enemyDamage=(Math.round(Math.random()*10)+15);
    }
    else
    {
      if(finalWave==true)
      {
        enemyDamage=(Math.round(Math.random()*5)+30);
      }
      else
      {
        enemyDamage=(Math.round(Math.random()*10)+15);
      }
    }
    defStat/=4;
    enemyDamage-=defStat;
    defStat*=4;
  }

  else if(enemy=="Hiveo")
  {
    if(neoWaves==true)
    {
      enemyDamage=(Math.round(Math.random()*4)+12);
    }
    else
    {
      enemyDamage=(Math.round(Math.random()*8)+5);
    }
    defStat/=4;
    enemyDamage-=defStat;
    defStat*=4;
  }

  else if(enemy=="Covered King")
  {
    if(neoWaves==true)
    {
      enemyDamage=(Math.round(Math.random()*10)+20);
    }
    else
    {
      enemyDamage=(Math.round(Math.random()*10)+10);
    }
    defStat/=4;
    enemyDamage-=defStat;
    defStat*=4;
  }

  else if(enemy=="Buff Pengu")
  {
    if(neoWaves==true)
    {
      enemyDamage=(Math.round(Math.random()*6)+24);
    }
    else
    {
      enemyDamage=(Math.round(Math.random()*3)+12);
    }
    defStat/=4;
    enemyDamage-=defStat;
    defStat*=4;
  }

  else if(enemy=="Boulder Snake")
  {
    if(neoWaves==true)
    {
      enemyDamage=(Math.round(Math.random()*8)+8);
    }
    else
    {
      enemyDamage=(Math.round(Math.random()*4)+4);
    }
    defStat/=4;
    enemyDamage-=defStat;
    defStat*=4;
  }
  if(spdTrue==false)
  {
    $("#lblEncounter").text("The " + enemy + " Attacks!");
    setTimeout(function(){
      $("#lblEncounter").text("The " + enemy + " Attacks!");
      var attackSound=new Audio("../audio/slash.mp3");
      attackSound.play();
      setTimeout(function(){
        var hitSound=new Audio("../audio/hit.mp3");
        hitSound.play();
        // Lexical: enemyCrit is used here if the enemyCrit lands a 1 to execute the critical strike code. Basically does same thing as randomCrit
        if(enemyCrit==1)
        {
          enemyDamage*=2;
          enemyDamage=(Math.round(enemyDamage));
          $("#lblEncounter").text("The " + enemy + " dealt a CRITICAL STRIKE OF " + enemyDamage + " DAMAGE!");
          playerHealth-=enemyDamage;
          if(playerHealth < 1)
          {
            playerHealth=0;
            $("#lblPlayerHealth").text('Player HP: ' + playerHealth);
            gameOver();
          }
          $("#lblPlayerHealth").text('Player HP: ' + playerHealth);
        }
        else
        {
          enemyDamage=(Math.round(enemyDamage));
          $("#lblEncounter").text("The " + enemy + " dealt a strike of " + enemyDamage + " damage!");
          playerHealth-=enemyDamage;
          if(playerHealth < 1)
          {
            playerHealth=0;
            $("#lblPlayerHealth").text('Player HP: ' + playerHealth);
            gameOver();
          }
          $("#lblPlayerHealth").text('Player HP: ' + playerHealth);
        }
        if(playerHealth>0)
        {
          if(enemySPD < spdStat)
          {
            setTimeout(function(){
              spdTrue=false;
              $("#lblEncounter").text('What will you do?');
              $("#lblEnemyHealth").show();
              $("#lblEnemyHealth").text('Enemy HP: ' + enemyHealth);
              $("#lblEnemyLeft").show();
              $("#lblEnemyLeft").text('Enemies Left: ' + enemyLeft);
              $("#lblPlayerHealth").show();
              $("#lblPlayerHealth").text('Player HP: ' + playerHealth);
              $("#bag").show();
              $("#attack").show();
              $("#attack").css('opacity', '1');
              $("#run").show();
              $("#run").css('opacity', '1');
            }, 1500);
          }
          else
          {
            setTimeout(function(){
              spdTrue=true;
              firstMove=false;
              attacking();
            }, 1000);
          }
        }
      }, 750);
    }, 750);
  }
  else
  {
    setTimeout(function(){
      spdTrue=false;
      firstMove=true;
      $("#lblEncounter").text('What will you do?');
      $("#lblEnemyHealth").show();
      $("#lblEnemyHealth").text('Enemy HP: ' + enemyHealth);
      $("#lblEnemyLeft").show();
      $("#lblEnemyLeft").text('Enemies Left: ' + enemyLeft);
      $("#lblPlayerHealth").show();
      $("#lblPlayerHealth").text('Player HP: ' + playerHealth);
      $("#bag").show();
      $("#attack").show();
      $("#attack").css('opacity', '1');
      $("#run").show();
      $("#run").css('opacity', '1');
    }, 1250);
  }
}

/*************** JEREMY THUMMEL 1/12/21 10:27 PM Made the walking(); function ***************/
/*************** DAVID CACOROVSKI 1/12/21 10:59 PM Added wood spear to the walking(); function ***************/
/*************** SOHAIL MEGHANI 1/13/21 12:11 AM Added background animation to the walking(); function ***************/
/*************************************************************************************************************
          ******************FUNCTION WITH PARAMETER WITHOUT RETURN**************************/
function walking(seconds)
{
  if(neoEndless==true)
  {
    $("#gameBackground").css('animation', 'towardsCave ease 4.25s');
  }
  else if(waves<5)
  {
    $("#gameBackground").css('animation', 'towardsCave ease 4.25s');
  }
  else if(waves>4 && waves<10)
  {
    $("#gameBackground").css('animation', 'towardsCave2 ease 4.25s');
  }
  else if(waves>9 && waves<16)
  {
    $("#gameBackground").css('animation', 'towardsCave3 ease 4.25s');
  }
  else if(waves>15 && waves<21)
  {
    $("#gameBackground").css('animation', 'towardsCave4 ease 4.25s');
  }
  // time is a variable that convert miliseconds to seconds so in other lines of code when you call the walking function you just have to put a number with the amount of seconds instead of miliseconds.
  let time=+(seconds*1000);
  if(woodSpear==true)
  {
    $("#movingHands").hide();
    $("#staticHands").hide();
    $("#movingHandsSpear").show();
    $("#staticHandsSpear").hide();
  }
  else
  {
    $("#movingHands").show();
    $("#staticHands").hide();
    $("#movingHandsSpear").hide();
    $("#staticHandsSpear").hide();
  }
  $("#enterBattle").hide();
  $("#lblArea").hide();
  $("#bag").hide();
  $("#shop").hide();
  $("#mines").hide();
  setTimeout(function(){ //Start of setTimeout

    $("#gameBackground").css('animation', 'none');
    $("#staticHands").css('animation', 'none');

    if(woodSpear==true)
    {
      $("#staticHandsSpear").show();
      $("#movingHandsSpear").hide();
    }
    else
    {
      $("#staticHands").show();
      $("#movingHands").hide();
    }

    titleScreenMusic.pause();

    setTimeout(function(){
      if(waves>15 && waves<21)
      {
        playVid();
      }
      else if(waves>20 && waves<22)
      {
        playVid();
      }
      else if(neoEndlessCheck==true)
      {
        neoEndlessCheck=false;
        $("#gameBackground").css('background-image', 'url(../images/hideoutBackground2.png)');
        $("#gameBackground").css('background-size', '200%');
        skipVid();
      }
      else
      {
        battle();
      }
    }, 1000);

  }, time);// End of setTimeout

}

/*************** DAVID CACOROVSKI 1/13/21 4:23 PM Added the battle(); function ***************/
/*************** JEREMY THUMMEL 1/13/21 4:29 PM Added labels to the battle(); function ***************/
/*************** JEREMY THUMMEL 1/13/21 5:00 PM Added waves to the battle(); function ***************/
/*************** SOHAIL MEGHANI 1/13/21 5:19 PM Added fade in animations to the battle(); function ***************/
/*************************************************************************************************************
          ******************FUNCTION WITHOUT PARAMETER WITHOUT RETURN*************************
                                            WITH ARRAY*/
function battle()
{
  // enemyNumber is a variable that we use if it rolls that number you encounter that enemy.
  let enemyNumber=0;
  // enemyID is a array that we use to store all of the enemyID's for the game.
  let enemyID=[];
  enemyID.unshift("Strawburry", "Boulder Snake", "Frosty", "Hiveo", "Covered King", "Buff Pengu", "Zyborgus");
  if(waves<5 && wave1True == true)
  {
    enemyLeft=5;
    firstWaves.pause();
    firstWaves.play();
    if(waves==1)
    {
      firstWaves.currentTime = 0;
    }
    firstWaves.setAttribute('loop', 'true');
    $("#gameBackground").css('background-image', 'url(../images/firstWavesNew.png)');
    $("#gameBackground").css('background-size', '200%');
    $("#whiteBackground").css('animation', 'fadeOut ease 1s');
    $("#whiteBackground").css('opacity', '0');
    setTimeout(function(){
      $("#whiteBackground").hide();
    }, 1000);
    // Lexical: enemyNumber used here to determine if they are in a low wave to only make the Strawburry and Snake pop up.
    enemyNumber=(Math.round(Math.random()*1)+1);
  }
  else if(waves>4 && waves<10 && wave2True == true)
  {
    firstWaves.pause();
    enemyLeft=10;
    secondWaves.pause();
    secondWaves.play();
    if(waves==5)
    {
      secondWaves.currentTime = 0;
    }
    secondWaves.setAttribute('loop', 'true');
    $("#gameBackground").css('background-image', 'url(../images/secondWaves.png)');
    $("#gameBackground").css('background-size', '200%');
    $("#whiteBackground").css('animation', 'fadeOut ease 1s');
    $("#whiteBackground").css('opacity', '0');
    setTimeout(function(){
      $("#whiteBackground").hide();
    }, 1000);
    // Lexical: enemyNumber used here to determine if they are in the 2nd wave to only make Frosty and Hiveo pop up.
    enemyNumber=(Math.round(Math.random()*1)+3);
  }
  else if(waves>9 && waves<16 && wave3True == true)
  {
    secondWaves.pause();
    enemyLeft=16;
    thirdWaves.pause();
    thirdWaves.play();
    if(waves==10)
    {
      thirdWaves.currentTime = 0;
    }
    thirdWaves.setAttribute('loop', 'true');
    $("#gameBackground").css('background-image', 'url(../images/thirdWaves.png)');
    $("#gameBackground").css('background-size', '200%');
    $("#whiteBackground").css('animation', 'fadeOut ease 1s');
    $("#whiteBackground").css('opacity', '0');
    setTimeout(function(){
      $("#whiteBackground").hide();
    }, 1000);
    // Lexical: enemyNumber used here to determine if they are in the 3rd wave to only make the King and Pengu pop up.
    enemyNumber=(Math.round(Math.random()*1)+5);
  }
  else if(waves>15 && waves<21 && neoWaves == true && neoEndless == false)
  {
    $("#skipButton").css('animation', 'fadeOut ease 1s');
    $("#skipButton").css('opacity', '0');
    $("#skipButton").hide();
    thirdWaves.pause();
    enemyLeft=21;
    neoWavesMusic.pause();
    neoWavesMusic.play();
    if(waves==16)
    {
      neoWavesMusic.currentTime = 0;
    }
    neoWavesMusic.setAttribute('loop', 'true');
    $("#gameBackground").css('background-image', 'url(../images/neoDimension.gif)');
    $("#gameBackground").css('background-size', '100.01%');
    $("#neo").css('animation', 'fadeOut ease 1s');
    $("#neo").css('opacity', '0');
    setTimeout(function(){
      $("#neo").hide();
    }, 1000);
    // Lexical: enemyNumber used here to determine if they are in the 3rd wave to only make the King and Pengu pop up.
    enemyNumber=(Math.round(Math.random()*5)+1);
  }
  else if(waves>20 && waves<22 && bossWave == true)
  {
    $("#skipButton").css('animation', 'fadeOut ease 1s');
    $("#skipButton").css('opacity', '0');
    $("#skipButton").hide();
    neoWavesMusic.pause();
    enemyLeft=22;
    bossWavesMusic.pause();
    bossWavesMusic.play();
    if(waves==21)
    {
      bossWavesMusic.currentTime = 0;
    }
    bossWavesMusic.setAttribute('loop', 'true');
    $("#gameBackground").css('background-image', 'url(../images/finalBackground.gif)');
    $("#gameBackground").css('background-size', '140%');
    $("#bossIntro").css('animation', 'fadeOut ease 1s');
    $("#bossIntro").css('opacity', '0');
    setTimeout(function(){
      $("#bossIntro").hide();
    }, 1000);
    // Lexical: enemyNumber used here to determine if they are in the 3rd wave to only make the King and Pengu pop up.
    enemyNumber=(Math.round(Math.random()*0)+7);
  }
  else if(waves>21 && waves<23 && finalWave == true)
  {
    $("#skipButton").css('animation', 'fadeOut ease 1s');
    $("#skipButton").css('opacity', '0');
    $("#skipButton").hide();
    bossWavesMusic.pause();
    enemyLeft=23;
    finalBossPhase.pause();
    finalBossPhase.play();
    if(waves==22)
    {
      finalBossPhase.currentTime = 0;
    }
    finalBossPhase.setAttribute('loop', 'true');
    $("#gameBackground").css('background-image', 'url(../images/finalBackground.gif)');
    $("#gameBackground").css('background-size', '140%');
    $("#bossPhase").css('animation', 'fadeOut ease 1s');
    $("#bossPhase").css('opacity', '0');
    setTimeout(function(){
      $("#bossPhase").hide();
    }, 1000);
    // Lexical: enemyNumber used here to determine if they are in the 3rd wave to only make the King and Pengu pop up.
    enemyNumber=(Math.round(Math.random()*0)+7);
  }
  else if(neoEndless == true && neoWaves == true)
  {
    $("#whiteBackground").css('animation', 'fadeOut ease 1s');
    $("#whiteBackground").css('opacity', '0');
    if(neoEndlessCheck==false)
    {
      enemyLeft=0;
      neoEndlessCheck=true;
    }
    neoWavesMusic.pause();
    neoWavesMusic.play();
    if(enemyLeft==0)
    {
      neoWavesMusic.currentTime = 0;
    }
    neoWavesMusic.setAttribute('loop', 'true');
    if(enemyLeft==24 || enemyLeft==49 || enemyLeft==74 || enemyLeft==99)
    {
      $("#gameBackground").css('background-image', 'url(../images/neoFinalBackground.gif)');
      $("#gameBackground").css('background-size', '140%');
      enemyNumber=(Math.round(Math.random()*0)+7);
    }
    else
    {
      $("#gameBackground").css('background-image', 'url(../images/neoDimension.gif)');
      $("#gameBackground").css('background-size', '100.01%');
      enemyNumber=(Math.round(Math.random()*5)+1);
    }
    setTimeout(function(){
      $("#whiteBackground").hide();
    }, 1000);
  }

  if(neoEndless==true && neoWaves==true)
  {
    enemyLeft++;
  }
  else
  {
    enemyLeft-=waves;
  }

  if(enemyNumber==1)
  {
    // Lexical: enemyID used here because to we need to assign the position from the array to each enemy.
    enemy=enemyID[0];
  }

  else if(enemyNumber==2)
  {
    enemy=enemyID[1];
  }

  else if(enemyNumber==3)
  {
    enemy=enemyID[2];
  }

  else if(enemyNumber==4)
  {
    enemy=enemyID[3];
  }

  else if(enemyNumber==5)
  {
    enemy=enemyID[4];
  }

  else if(enemyNumber==6)
  {
    enemy=enemyID[5];
  }

  else if(enemyNumber==7)
  {
    enemy=enemyID[6];
  }

  if(enemyLeft > 0)
  {
    if(neoWaves==true)
    {
      // https://stackoverflow.com/questions/554273/changing-the-image-source-using-jquery - I got this code from this website. - David Cacorovski
      $("#staticHands").attr("src","../images/neoHands.png");
      $("#staticHandsSpear").attr("src","../images/neoHandsSpear.png");
      $("#movingHands").attr("src","../images/neoHands.gif");
      $("#movingHandsSpear").attr("src","../images/neoHandsSpear.gif");
      $("#enemyStraw").attr("src","../images/neoStrawburry.gif");
      $("#enemyFrosty").attr("src","../images/neo_frosty_the_ice_man2.gif");
      $("#enemyZyborgus").attr("src","../images/neoShopKeeperBoss.gif");
      $("#enemyHiveo").attr("src","../images/neoHiveo.gif");
      $("#enemyCovered").attr("src","../images/neoCoveredKing.gif");
      $("#enemyPengu").attr("src","../images/neoBuffPengu.gif");
      $("#enemySnake").attr("src","../images/neoBoulderSnake.gif");
    }
    else
    {
      $("#staticHands").attr("src","../images/hands.png");
      $("#staticHandsSpear").attr("src","../images/handsSpear.png");
      $("#movingHands").attr("src","../images/hands.gif");
      $("#movingHandsSpear").attr("src","../images/handsSpear.gif");
      $("#enemyStraw").attr("src","../images/strawburry.gif");
      $("#enemyFrosty").attr("src","../images/frosty_the_ice_man.gif");
      $("#enemyHiveo").attr("src","../images/hiveo.gif");
      $("#enemyCovered").attr("src","../images/theCoveredKing.gif");
      $("#enemyPengu").attr("src","../images/buffPengu.gif");
      $("#enemySnake").attr("src","../images/boulderSnake.gif");
      if(finalWave==true)
      {
        $("#enemyZyborgus").attr("src", "../images/shopKeeperBoss.gif");
      }
      else
      {
        $("#enemyZyborgus").attr("src","../images/boss.gif");
      }
    }

    if(enemy=="Strawburry")
    {
      if(neoWaves==true)
      {
        if(neoEndless==true)
        {
          enemyHealth=50;
        }
        else
        {
          enemyHealth=40;
        }
      }
      else
      {
        enemyHealth=40;
      }
      $("#enemyStraw").show();
      $("#enemyStraw").css('animation', 'fadeIn 1s');
      $("#enemyStraw").css('opacity', '1');
      $("#lblEncounter").text("You encountered\nStrawburry!");
    }

    else if(enemy=="Frosty")
    {
      if(neoWaves==true)
      {
        enemyHealth=60;
      }
      else
      {
        enemyHealth=30;
      }
      $("#enemyFrosty").show();
      $("#enemyFrosty").css('animation', 'fadeIn 1s');
      $("#enemyFrosty").css('opacity', '1');
      $("#lblEncounter").text("You encountered\nFrosty the Ice Man!");
    }

    else if(enemy=="Hiveo")
    {
      if(neoWaves==true)
      {
        if(neoEndless==true)
        {
          enemyHealth=50;
        }
        else
        {
          enemyHealth=40;
        }
      }
      else
      {
        enemyHealth=20;
      }
      $("#enemyHiveo").show();
      $("#enemyHiveo").css('animation', 'fadeIn 1s');
      $("#enemyHiveo").css('opacity', '1');
      $("#lblEncounter").text("You encountered\nHiveo!");
    }

    else if(enemy=="Covered King")
    {
      if(neoWaves==true)
      {
        if(neoEndless==true)
        {
          enemyHealth=50;
        }
        else
        {
          enemyHealth=30;
        }
      }
      else
      {
        enemyHealth=60;
      }
      $("#enemyCovered").show();
      $("#enemyCovered").css('animation', 'fadeIn 1s');
      $("#enemyCovered").css('opacity', '1');
      $("#lblEncounter").text("You encountered\nThe Covered King!");
    }

    else if(enemy=="Buff Pengu")
    {
      if(neoWaves==true)
      {
        if(neoEndless==true)
        {
          enemyHealth=50;
        }
        else
        {
          enemyHealth=25;
        }
      }
      else
      {
        enemyHealth=50;
      }
      $("#enemyPengu").show();
      $("#enemyPengu").css('animation', 'fadeIn 1s');
      $("#enemyPengu").css('opacity', '1');
      $("#lblEncounter").text("You encountered\nBuff Pengu!");
    }

    else if(enemy=="Boulder Snake")
    {
      if(neoWaves==true)
      {
        if(neoEndless==true)
        {
          enemyHealth=50;
        }
        else
        {
          enemyHealth=25;
        }
      }
      else
      {
        enemyHealth=25;
      }
      $("#enemySnake").show();
      $("#enemySnake").css('animation', 'fadeIn 1s');
      $("#enemySnake").css('opacity', '1');
      $("#lblEncounter").text("You encountered\nBoulder Snake!");
    }

    else if(enemy=="Zyborgus")
    {
      if(neoWaves==true)
      {
        enemyHealth=500;
      }
      else
      {
        if(finalWave==true)
        {
          enemyHealth=250;
        }
        else
        {
          enemyHealth=100;
        }
      }
      $("#enemyZyborgus").show();
      $("#enemyZyborgus").css('animation', 'fadeIn 1s');
      $("#enemyZyborgus").css('opacity', '1');
      $("#lblEncounter").text("You encountered\nZyborgus!");
      if(finalWave==true)
      {
        setTimeout(function(){
          $("#lblEncounter").text("Wait,\nZyborgus is the Shop Keeper?!?");
        }, 2000);
      }
    }

    $("#lblEncounter").show();

    setTimeout(function(){
      if(finalWave==true)
      {
        setTimeout(function(){
          $("#lblEncounter").text('What will you do?');
          $("#lblEnemyHealth").show();
          $("#lblEnemyHealth").text('Enemy HP: ' + enemyHealth);
          $("#lblEnemyLeft").show();
          $("#lblEnemyLeft").text('Enemies Left: ' + enemyLeft);
          $("#lblPlayerHealth").show();
          $("#lblPlayerHealth").text('Player HP: ' + playerHealth);
          $("#bag").show();
          $("#attack").show();
          $("#attack").css('opacity', '1');
          if(bossWave==false)
          {
            $("#run").show();
            $("#run").css('opacity', '1');
          }
        }, 1500);
      }
      else
      {
        $("#lblEncounter").text('What will you do?');
        $("#lblEnemyHealth").show();
        $("#lblEnemyHealth").text('Enemy HP: ' + enemyHealth);
        $("#lblEnemyLeft").show();
        if(neoEndless==true)
        {
          $("#lblEnemyLeft").text('Enemies Encountered: ' + enemyLeft);
        }
        else
        {
          $("#lblEnemyLeft").text('Enemies Left: ' + enemyLeft);
        }
        $("#lblPlayerHealth").show();
        $("#lblPlayerHealth").text('Player HP: ' + playerHealth);
        $("#bag").show();
        $("#attack").show();
        $("#attack").css('opacity', '1');
        if(bossWave==false)
        {
          $("#run").show();
          $("#run").css('opacity', '1');
        }
      }
    }, 2500);
  }
  else
  {
    if(bossPhased==true)
    {
      if(phaseCutsceneFirst==true)
      {
        phaseCutsceneFirst=false;
        bossPhased=false;
        finalWave=true;
        $("#blackBackground").show();
        $("#blackBackground").css('animation', 'fadeIn ease 1s');
        $("#blackBackground").css('opacity', '1');
        setTimeout(function(){
          bossWavesMusic.pause();
          setTimeout(function(){
            skipTrue=false;
            $("#blackBackground").css('animation', 'fadeOut 1s');
            $("#blackBackground").css('opacity', '0');
            $("#bossPhase").show();
            $("#bossPhase").css('opacity', '1');
            $("#skipButton").show();
            $("#skipButton").css('animation', 'fadeIn ease 1s');
            $("#skipButton").css('opacity', '1');
            shopKeeperChange=true;
            bossPhase.play();
            setTimeout(function(){
              $("#blackBackground").hide();
              setTimeout(function(){
                if(skipTrue==false)
                {
                  battle();
                }
              }, 21000);
            }, 2000);
          }, 1000);
        }, 1000);
      }
      else
      {
        bossPhased=false;
        finalWave=true;
        $("#blackBackground").show();
        $("#blackBackground").css('animation', 'fadeIn ease 1s');
        $("#blackBackground").css('opacity', '1');
        setTimeout(function(){
          bossWavesMusic.pause();
          setTimeout(function(){
            $("#blackBackground").css('animation', 'fadeOut 1s');
            $("#blackBackground").css('opacity', '0');
            $("#blackBackground").hide();
            battle();
          }, 1000);
        }, 1000);
      }
    }
    else
    {
      // Lexical: Being used here as It only needs to be used here. This is to make the win music play when you defeat all enemies in a wave.
      var winWave=new Audio("../audio/win.mp3");
      firstWaves.pause();
      secondWaves.pause();
      thirdWaves.pause();
      neoWavesMusic.pause();
      bossWavesMusic.pause();
      finalBossPhase.pause();
      winWave.play();
      enemyLeft=0;
      $("#lblEnemyLeft").text('Enemies Left: ' + enemyLeft);
      $("#lblEncounter").text("You have defeated the last remaining enemies in this area!");
      if(waves>4 && waves<10)
      {
        wave2True=true;
        setTimeout(function(){
          $("#lblPlayerHealth").hide();
          $("#lblEnemyHealth").hide();
          $("#lblEnemyLeft").hide();
          $("#lblEncounter").hide();
          var footstepsMedium=new Audio("../audio/footstepsMedium.mp3");
          footstepsMedium.play();
          enemiesLeft=10;
          walking(4);
          setTimeout(function(){ //Start of setTimeout
            transition.play();
            $("#whiteBackground").show();
            $("#whiteBackground").css('animation', 'fadeIn ease 1s');
            $("#whiteBackground").css('opacity', '1');
          }, 2500);
        }, 4000);
      }
      else if(waves>9 && waves<16)
      {
        wave3True=true;
        setTimeout(function(){
          $("#lblPlayerHealth").hide();
          $("#lblEnemyHealth").hide();
          $("#lblEnemyLeft").hide();
          $("#lblEncounter").hide();
          var footstepsMedium=new Audio("../audio/footstepsMedium.mp3");
          footstepsMedium.play();
          enemiesLeft=17;
          walking(4);
          setTimeout(function(){ //Start of setTimeout
            transition.play();
            $("#whiteBackground").show();
            $("#whiteBackground").css('animation', 'fadeIn ease 1s');
            $("#whiteBackground").css('opacity', '1');
          }, 2500);
        }, 4000);
      }
      else if(waves>15 && waves<21)
      {
        neoWaves=true;
        setTimeout(function(){
          $("#lblPlayerHealth").hide();
          $("#lblEnemyHealth").hide();
          $("#lblEnemyLeft").hide();
          $("#lblEncounter").hide();
          var footstepsMedium=new Audio("../audio/footstepsMedium.mp3");
          footstepsMedium.play();
          enemiesLeft=21;
          walking(4);
          setTimeout(function(){ //Start of setTimeout
            transition.play();
            $("#whiteBackground").show();
            $("#whiteBackground").css('animation', 'fadeIn ease 1s');
            $("#whiteBackground").css('opacity', '1');
          }, 2500);
        }, 4000);
      }
      else if(waves>20 && waves<22)
      {
        neoWaves=false;
        bossWave=true;
        setTimeout(function(){
          $("#lblPlayerHealth").hide();
          $("#lblEnemyHealth").hide();
          $("#lblEnemyLeft").hide();
          $("#lblEncounter").hide();
          transition.play();
          $("#whiteBackground").show();
          $("#whiteBackground").css('animation', 'fadeIn ease 1s');
          $("#whiteBackground").css('opacity', '1');
          enemiesLeft=22;
          walking(2);
        }, 4000);
      }
      if(neoEndless==true)
      {
        setTimeout(function(){
          neoWaves=true;
          waves=0;
          $("#lblPlayerHealth").hide();
          $("#lblEnemyHealth").hide();
          $("#lblEnemyLeft").hide();
          $("#lblEncounter").hide();
          transition.play();
          $("#whiteBackground").show();
          $("#whiteBackground").css('animation', 'fadeIn ease 1s');
          $("#whiteBackground").css('opacity', '1');
          walking(2);
        }, 4000);
      }
    }
  }
}

/*************** SOHAIL MEGHANI 1/13/21 7:53 PM Added the playVid(); function ***************/
/*************************************************************************************************************
          ******************FUNCTION WITHOUT PARAMETER WITHOUT RETURN**************************/
function playVid()
{
  if(waves>15 && waves<21)
  {
    if(neoCutsceneFirst==true)
    {
      neoCutsceneFirst=false;
      skipTrue=false;
      $("#whiteBackground").hide();
      $("#neo").show();
      $("#neo").css('opacity', '1');
      $("#skipButton").show();
      $("#skipButton").css('animation', 'fadeIn ease 1s');
      $("#skipButton").css('opacity', '1');
      neo.play();
      setTimeout(function(){ //Start of setTimeout
        if(skipTrue==false)
        {
          battle();
        }
      }, 17010);
    }
    else
    {
      $("#whiteBackground").hide();
      battle();
    }
  }
  else if(waves>20 && waves<22)
  {
    if(bossCutsceneFirst==true)
    {
      bossCutsceneFirst=false;
      skipTrue=false;
      $("#whiteBackground").css('animation', 'fadeOut 1s');
      $("#whiteBackground").css('opacity', '0');
      $("#bossIntro").show();
      $("#bossIntro").css('opacity', '1');
      $("#skipButton").show();
      $("#skipButton").css('animation', 'fadeIn ease 1s');
      $("#skipButton").css('opacity', '1');
      bossIntro.play();
      setTimeout(function(){
        $("#whiteBackground").hide();
        setTimeout(function(){
          if(skipTrue==false)
          {
            $("#skipButton").css('animation', 'fadeOut ease 1s');
            $("#skipButton").css('opacity', '0');
            $("#skipButton").hide();
            setTimeout(function(){
              if(skipTrue==false)
              {
                battle();
              }
            }, 10000);
          }
        }, 21000);
      }, 2000);
    }
    else
    {
      bossPhased=false;
      neoWaves=false;
      bossWave=true;
      $("#whiteBackground").hide();
      battle();
    }
  }
  else
  {
    intro.play();
    titleScreenMusic.pause();
  }
}

/*************** JEREMY THUMMEL 1/13/21 8:14 PM Added the skipVid(); function ***************/
/*************** DAVID CACOROVSKI 1/13/21 8:56 AM Edited the skipVid(); function ***************/
/*************************************************************************************************************
          ******************FUNCTION WITHOUT PARAMETER WITHOUT RETURN**************************/
function skipVid()
{
  if(neoWaves==true && neoEndless!=true)
  {
    skipTrue=true;
    neo.pause();
    battle();
  }
  else if(waves>20 && waves<22)
  {
    skipTrue=true;
    bossIntro.pause();
    battle();
  }
  else if(waves>21 && waves<23)
  {
    skipTrue=true;
    bossPhase.pause();
    battle();
  }
  else
  {
    if(neoEndless==true)
    {
      $("#staticHands").attr("src","../images/neoHands.png");
      $("#staticHandsSpear").attr("src","../images/neoHandsSpear.png");
      $("#movingHands").attr("src","../images/neoHands.gif");
      $("#movingHandsSpear").attr("src","../images/neoHandsSpear.gif");
      $("#enemyStraw").attr("src","../images/neoStrawburry.gif");
      $("#enemyFrosty").attr("src","../images/neo_frosty_the_ice_man2.gif");
      $("#enemyZyborgus").attr("src","../images/neoShopKeeperBoss.gif");
      $("#enemyHiveo").attr("src","../images/neoHiveo.gif");
      $("#enemyCovered").attr("src","../images/neoCoveredKing.gif");
      $("#enemyPengu").attr("src","../images/neoBuffPengu.gif");
      $("#enemySnake").attr("src","../images/neoBoulderSnake.gif");
    }
    if(shopKeeperChange==true)
    {
      $("#shopKeeper").attr("src","../images/newShopKeeper.gif");
    }
    $("#whiteBackground").css('animation', 'fadeOut ease 1s');
    $("#whiteBackground").css('opacity', '0');
    $("#whiteBackground").hide();
    titleScreenMusic.play();
    $("#intro").css('animation', 'fadeOut ease 4s');
    $("#intro").css('opacity', '0');
    intro.pause();
    $("#intro").hide();
    $("#lblArea").show();
    $("#lblArea").css('opacity', '1');
    $("#shop").show();
    $("#shop").css('opacity', '1');
    $("#mines").show();
    $("#mines").css('opacity', '1');
    $("#bag").show();
    $("#bag").css('opacity', '1');
    $("#enterBattle").show();
    $("#enterBattle").css('opacity', '1');
    gold+=currentGold;
    currentGold=0;
    if(woodSpear==true)
    {
      $("#staticHandsSpear").show();
      $("#staticHandsSpear").css('opacity', '1');
      $("#staticHands").hide();
    }
    else
    {
      $("#staticHands").show();
      $("#staticHands").css('opacity', '1');
    }
    $("#skipButton").css('opacity', '0');
    $("#skipButton").hide();
    $("#lblArea").text("Hideout Entrance");
  }
}
/*************** SOHAIL MEGHANI 1/14/21 11:09 AM Added the levelUp(); function ***************/
/*************** DAVID CACOROVSKI 1/14/21 11:16 AM Added experience points to the levelUp(); function ***************/
/*************** JEREMY THUMMEL 1/14/21 7:24 PM Added the ability to change stats in the levelUp(); function ***************/
/*************** SOHAIL MEGHANI 1/14/21 7:25 PM Added animation to the levelUp(); function ***************/
/*************** JEREMY THUMMEL 1/14/21 7:47 PM Positioned the levelUp(); function ***************/
/*************************************************************************************************************
          ******************FUNCTION WITHOUT PARAMETER WITHOUT RETURN**************************/
function levelUp()
{
  if(level1==true)
  {
    setTimeout(function(){
      experienceCap=30;
      atkLevel=2;
      hpLevel=3;
      defLevel=2;
      spdLevel=2.5;
      atkStat+=atkLevel;
      hpStat+=hpLevel;
      defStat+=defLevel;
      spdStat+=spdLevel;
      playerHealth=hpStat;
      levelUpShowUp();
    }, 1000);
  }
  else if(level2==true)
  {
    setTimeout(function(){
      experienceCap=45;
      atkLevel=3;
      hpLevel=4;
      defLevel=3;
      spdLevel=5;
      atkStat+=atkLevel;
      hpStat+=hpLevel;
      defStat+=defLevel;
      spdStat+=spdLevel;
      playerHealth=hpStat;
      levelUpShowUp();
    }, 1000);
  }
  else if(level3==true)
  {
    setTimeout(function(){
      experienceCap=90;
      atkLevel=3;
      hpLevel=5;
      defLevel=3;
      spdLevel=1.5;
      atkStat+=atkLevel;
      hpStat+=hpLevel;
      defStat+=defLevel;
      spdStat+=spdLevel;
      playerHealth=hpStat;
      levelUpShowUp();
    }, 1000);
  }
  else if(level4==true)
  {
    setTimeout(function(){
      experienceCap=135;
      level4AndUp();
    }, 1000);
  }
  else if(level5==true)
  {
    setTimeout(function(){
      experienceCap=180;
      level4AndUp();
    }, 1000);
  }
  else if(level6==true)
  {
    setTimeout(function(){
      experienceCap=225;
      level4AndUp();
    }, 1000);
  }
  else if(level7==true)
  {
    setTimeout(function(){
      experienceCap=270;
      level4AndUp();
    }, 1000);
  }
  else if(level8==true)
  {
    setTimeout(function(){
      experienceCap=315;
      level4AndUp();
    }, 1000);
  }
  else if(level9==true)
  {
    setTimeout(function(){
      experienceCap=350;
      level4AndUp();
    }, 1000);
  }
  else if(level10==true)
  {
    setTimeout(function(){
      level4AndUp();
    }, 1000);
  }

  function levelUpShowUp()
  {
    $("#lblEncounter").hide();
    $("#greyBackground").show();
    $("#greyBackground").css('animation', 'fadeIn-2 1s');
    $("#greyBackground").css('opacity', '0.95');
    levelUpSound.play();
    $("#lblLevelUp").show();
    $("#lblLevelUp").css('animation', 'fadeIn 1s');
    $("#lblLevelUp").css('opacity', '1');
    setTimeout(function(){
      $("#lblEncounter").hide();
      $("#lblDouble").show();
      $("#lblDouble").css('animation', 'fadeIn 1s');
      $("#lblDouble").css('opacity', '1');
      setTimeout(function(){
        $("#lblEncounter").hide();
        $("#atkButton").show();
        $("#atkButton").css('animation', 'fadeIn 1s');
        $("#atkButton").css('opacity', '1');
        $("#defButton").show();
        $("#defButton").css('animation', 'fadeIn 1s');
        $("#defButton").css('opacity', '1');
        $("#hpButton").show();
        $("#hpButton").css('animation', 'fadeIn 1s');
        $("#hpButton").css('opacity', '1');
        $("#spdButton").show();
        $("#spdButton").css('animation', 'fadeIn 1s');
        $("#spdButton").css('opacity', '1');
        return;
      }, 1500);
    }, 1500);
  }
  //This function is also here to prevent copy and paste spam - David Cacorovski 1/27/2021 4:01 PM
  function level4AndUp()
  {
    atkLevel=1.5;
    hpLevel=2;
    defLevel=1.5;
    spdLevel=1.5;
    atkStat+=atkLevel;
    hpStat+=hpLevel;
    defStat+=defLevel;
    spdStat+=spdLevel;
    playerHealth=hpStat;
    if(maxLevel==true)
    {
      if(atkStat<30)
      {
        atkStat=(Math.round(atkStat));
        atkStat=30;
      }
      if(defStat<30)
      {
        defStat=(Math.round(defStat));
        defStat=30;
      }
      if(hpStat<60)
      {
        hpStat=(Math.round(hpStat));
        hpStat=60;
      }
      if(spdStat<50)
      {
        spdStat=(Math.round(spdStat));
        spdStat=50;
      }
    }
    levelUpShowUp();
  }
}

/*************** DAVID CACOROVSKI 1/15/21 10:32AM Added the gamerOver(); function ***************/
/*************** SOHAIL MEGHANI 1/15/21 10:32 AM Added animation to the gamerOver(); function ***************/
/*************************************************************************************************************
          ******************FUNCTION WITHOUT PARAMETER WITHOUT RETURN**************************/
function gameOver()
{
  setTimeout(function()
  {
     spdTrue=false;
     $("#lblEncounter").hide();
     $("#greyBackground").show();
     $("#greyBackground").css('animation', 'fadeIn-2 1s');
     $("#greyBackground").css('opacity', '0.95');
     $("#lblLost").show();
     $("#lblLost").css('animation', 'fadeIn 1s');
     $("#lblLost").css('opacity', '1');
     setTimeout(function(){
       $("#greyBackground").show();
       $("#lblContinue").show();
       $("#lblContinue").css('animation', 'fadeIn 1s');
       $("#lblContinue").css('opacity', '1');
       setTimeout(function(){
         $("#greyBackground").show();
         $("#yesContinue").show();
         $("#yesContinue").css('animation', 'fadeIn 1s');
         $("#yesContinue").css('opacity', '1');
         $("#noContinue").show();
         $("#noContinue").css('animation', 'fadeIn 1s');
         $("#noContinue").css('opacity', '1');
       }, 1000);
     }, 1000);
   }, 1000);
}

/*************** SOHAIL MEGHANI 1/16/21 1:27 PM Added the nameGet(); function ***************/
/*************************************************************************************************************
          ******************FUNCTION WITHOUT PARAMETER WITH RETURN**************************/
function nameGet()

{
 name=$("#namePlayer").val();
 nameDeclared=true;
 name=name.trim().charAt(0).toUpperCase()+name.trim().slice(1);
 name=upperCaseName(name);
 return name;
}

/*************** JEREMY THUMMEL 1/6/21 4:16 PM Added the upperCaseName(); function ***************/
/*************************************************************************************************************
          ******************FUNCTION WITH PARAMETER WITH RETURN**************************/
function upperCaseName(nameOfPlayer)
{
  let currentLetter="";
  let nextLetter="";
 for(let x=0;x<nameOfPlayer.length;x++)
 {
   // Lexical: currentLetter is a variable that is used to take the current letter of the players name and compares it to the next letter.
   currentLetter=nameOfPlayer.charAt(x);
   // Lexical: nextLetter is a variable that takes the position of the next letter in the string.
   nextLetter=nameOfPlayer.charAt(x+1);
   if(currentLetter==" ")
   {
     nextLetter=nextLetter.toUpperCase();
     nameOfPlayer=nameOfPlayer.substr(0,x)+" "+nextLetter+nameOfPlayer.substr(x+2);
   }
 }
 return nameOfPlayer;
}

/*************** DAVID CACOROVSKI 1/17/21 4:39 PM Added the bubbleSort(); function ***************/
/*************************************************************************************************************
          ******************FUNCTION WITHOUT PARAMETER WITH RETURN NULL*************************
                            WITH BUBBLE SORTING AND ARRAY*/
function bubbleSort()
{
  if(spearStrikeCounter==5)
  {
    spearStrikeCounter=0;
  }
  if(spearStrikeCounter==0)
  {
    newDamage=[];
    for(let x=0;x<5;x++)
    {
      newDamage.unshift(Math.floor(Math.random()*40)+atkStat);
    }
    //BUBBLE SORTING CODE BELOW
    // temporaryNumber is a variable that is used as a temporary variable in our bubblesorting part of this function.
    let temporaryNumber=0;
    for (let x=0;x<newDamage.length;x++)
    {
      for (let y=0;y<newDamage.length-1;y++)
      {
        if (newDamage[y]>newDamage[y+1])
        {
          // Lexical: temporaryNumber is used here to act like a temporaryNumber used only for this function.
          temporaryNumber=newDamage[y+1];
          newDamage[y+1]=newDamage[y];
          newDamage[y]=temporaryNumber;
        }
      }
    }
  }
  return;
}

//This fuction is here to prevent copy and paste spam - David Cacorovski 1/27/2021 4:00 PM
function levelCheck()
{
  if(level9==false)
  {
    level10=false;
  }
  if(level8==false)
  {
    level9=false;
  }
  if(level7==false)
  {
    level8=false;
  }
  if(level6==false)
  {
    level7=false;
  }
  if(level5==false)
  {
    level6=false;
  }
  if(level4==false)
  {
    level5=false;
  }
  if(level3==false)
  {
    level4=false;
  }
  if(level2==false)
  {
    level3=false;
  }
  if(level1==false)
  {
    level2=false;
  }
  level1=false;
  $("#lblDouble").hide();
  $("#lblLevelUp").hide();
  $("#lblEncounter").show();
  $("#atkButton").hide();
  $("#defButton").hide();
  $("#spdButton").hide();
  $("#hpButton").hide();
  $("#greyBackground").css('animation', 'fadeOut 1s');
  $("#greyBackground").css('opacity', '0');
  $("#greyBackground").hide();
  spdTrue=false;
  $("#enemyStraw").hide();
  $("#enemySnake").hide();
  $("#enemyFrosty").hide();
  return;
}

//Also to prevent copy and paste spam - David Cacorovski 1/27/2021 4:12 PM
function experienceCheck()
{
  if(experience>349)
  {
    experience=350;
    maxLevel=true;
    if(level10==true)
    {
      levelUp();
    }
    else
    {
      noLevelUp();
    }
  }
  else if(experience>314)
  {
    if(level9==true)
    {
      levelUp();
    }
    else
    {
      noLevelUp();
    }
  }
  else if(experience>269)
  {
    if(level8==true)
    {
      levelUp();
    }
    else
    {
      noLevelUp();
    }
  }
  else if(experience>224)
  {
    if(level7==true)
    {
      levelUp();
    }
    else
    {
      noLevelUp();
    }
  }
  else if(experience>179)
  {
    if(level6==true)
    {
      levelUp();
    }
    else
    {
      noLevelUp();
    }
  }
  else if(experience>134)
  {
    if(level5==true)
    {
      levelUp();
    }
    else
    {
      noLevelUp();
    }
  }
  else if(experience>89)
  {
    if(level4==true)
    {
      levelUp();
    }
    else
    {
      noLevelUp();
    }
  }
  else if(experience>44)
  {
    if(level3==true)
    {
      levelUp();
    }
    else
    {
      noLevelUp();
    }
  }
  else if(experience>29)
  {
    if(level2==true)
    {
      levelUp();
    }
    else
    {
      noLevelUp();
    }
  }
  else if(experience>14)
  {
    if(level1==true)
    {
      levelUp();
    }
    else
    {
      noLevelUp();
    }
  }
  else
  {
    setTimeout(function(){
      spdTrue=false;
      $("#enemyStraw").hide();
      battle();
    }, 1000);
  }
  function noLevelUp()
  {
    setTimeout(function(){
      spdTrue=false;
      $("#enemyStraw").hide();
      $("#enemySnake").hide();
      $("#enemyFrosty").hide();
      $("#enemyHiveo").hide();
      $("#enemyPengu").hide();
      $("#enemyCovered").hide();
      $("#enemyZyborgus").hide();
      battle();
    }, 1000);
  }
}

/*************** DAVID CACOROVSKI 1/17/21 6:16 PM Hid elements ***************/
/*************** SOHAIL MEGHANI 1/1/21 6:21 PM Hid more elements ***************/
/*************** SOHAIL MEGHANI 1/1/21 6:41 PM Hid more elements ***************/
$(document).ready(function(){
  $("#intro").css('opacity', '0');
  $("#neo").css('opacity', '0');
  $("#neo").hide();
  $("#bossIntro").css('opacity', '0');
  $("#bossIntro").hide();
  $("#bossPhase").css('opacity', '0');
  $("#bossPhase").hide();
  $("#lblLevelUp").css('opacity', '0');
  $("#lblLevelUp").hide();
  $("#lblDouble").css('opacity', '0');
  $("#lblDouble").hide();
  $("#lblLost").css('opacity', '0');
  $("#lblLost").hide();
  $("#submitBTN").css('opacity', '0');
  $("#submitBTN").hide();
  $("#namePlayer").css('opacity', '0');
  $("#namePlayer").hide();
  $("#yesContinue").css('opacity', '0');
  $("#yesContinue").hide();
  $("#noContinue").css('opacity', '0');
  $("#noContinue").hide();
  $("#lblContinue").css('opacity', '0');
  $("#lblContinue").hide();
  $("#lblArea").css('opacity', '0');
  $("#lblArea").hide();
  $("#shop").css('opacity', '0');
  $("#shop").hide();
  $("#exitButton2").css('opacity', '0');
  $("#exitButton2").hide();
  $("#run").css('opacity', '0');
  $("#run").hide();
  $("#weapons").css('opacity', '0');
  $("#weapons").hide();
  $("#moveTwo").hide();
  $("#whiteBackground").css('opacity', '0');
  $("#whiteBackground").hide();
  $("#blackBackground").css('opacity', '0');
  $("#blackBackground").hide();
  $("#shopBackground").css('opacity', '0');
  $("#shopBackground").hide();
  $("#greyBackground").css('opacity', '0');
  $("#greyBackground").hide();
  $("#enterBattle").css('opacity', '0');
  $("#enterBattle").hide();
  $("#gameTwo").hide();
  $("#enemyStraw").hide();
  $("#enemySnake").hide();
  $("#enemyFrosty").hide();
  $("#enemyZyborgus").hide();
  $("#enemyHiveo").hide();
  $("#enemyCovered").hide();
  $("#enemyPengu").hide();
  $("#lblEncounter").hide();
  $("#lblEnemyHealth").hide();
  $("#lblPlayerHealth").hide();
  $("#lblAmountOfGold").hide();
  $("#lblCurrent").hide();
  $("#lblEnemyLeft").hide();
  $("#items").css('opacity', '0');
  $("#items").hide();
  $("#atkButton").css('opacity', '0');
  $("#atkButton").hide();
  $("#defButton").css('opacity', '0');
  $("#defButton").hide();
  $("#spdButton").css('opacity', '0');
  $("#spdButton").hide();
  $("#hpButton").css('opacity', '0');
  $("#hpButton").hide();
  $("#stats").css('opacity', '0');
  $("#stats").hide();
  $("#avatarInGame").hide();
  $("#lblDon").hide();
  $("#lblATK").hide();
  $("#lblDEF").hide();
  $("#lblHP").hide();
  $("#lblSPD").hide();
  $("#lblXP").hide();
  $("#lblWoodSpear").hide();
  $("#lblPotion").hide();
  $("#lbl5Potions").hide();
  $("#lblMultipleAmount1").hide();
  $("#bag").css('opacity', '0');
  $("#bag").hide();
  $("#buy").css('opacity', '0');
  $("#buy").hide();
  $("#woodSpear").css('opacity', '0');
  $("#woodSpear").hide();
  $("#attack").css('opacity', '0');
  $("#attack").hide();
  $("#lblGoldCounter").hide();
  $("#staticHands").css('opacity', '0');
  $("#staticHands").hide();
  $("#movingHands").hide();
  $("#staticHandsSpear").hide();
  $("#movingHandsSpear").hide();
  $("#potion1").hide();
  $("#potion2").hide();
  $("#potion3").hide();
  $("#lblPotionHP").hide();
  $("#shopKeeper").hide();
  $("#woodSpearBuy").hide();
  $("#skipButton").css('opacity', '0');
  $("#skipButton").hide();
  $("#exitButton").hide();
  $("#moveOne").hide();
  $("#mines").css('opacity', '0');
  $("#mines").hide();
  $("#attackHit").hide();

  $("#playButton").click(function(){
    $("#intro").css('opacity', '1');
    $("#gameBackground").css('background-image', 'url(../images/hideoutBackground2.png)');
    $("#gameBackground").css('background-size', '200%');
    $("#skipButton").show();
    $("#skipButton").css('animation', 'fadeIn ease 1s');
    $("#skipButton").css('opacity', '1');
    playVid();
    $("#playButton").hide();
    $("#gameLogo").hide();
    $("#gameTwo").show();

    /*************** JEREMY THUMMEL 1/18/21 11:17 AM Added skipVid(); functionality ***************/

    $("#skipButton").click(function(){
      skipTrue=true;
      skipVid();
    });//end of skipButton Click

    setTimeout(function(){ //Start of setTimeout
      if(skipTrue==false)
      {
        skipVid();
      }
    }, 16000);// End of setTimeout

  });//End of playButton click

  /*************** DAVID CACOROVSKI 1/18/21 11:31 AM Added shop(); functionality ***************/
  $("#shop").click(function(){
    $("#mines").hide();
    $("#enterBattle").hide();
    $("#exitButton2").show();
    $("#exitButton2").css('opacity', '1');
    $("#shopKeeper").show();
    $("#shop").hide();
    $("#bag").hide();
    $("#buy").show();
    $("#buy").css('opacity', '1');
    $("#shopKeeper").css('opacity', '1');
    $("#lblShop").show();
    $("#lblArea").hide();

    $("#gameBackground").css('background-image', 'url(../images/shopBackground.png)');
    $("#gameBackground").css('background-size','100%');

    $("#lblShop").text("Welcome to the Shop!");
  });//end of shop click

  /*************** JEREMY THUMMEL 1/18/21 11:42 AM Added Hideout transition functionality ***************/
  $("#enterBattle").click(function(){
    var footstepsMedium=new Audio("../audio/footstepsMedium.mp3");
    footstepsMedium.play();
    walking(4);
    setTimeout(function(){ //Start of setTimeout
      transition.play();
      $("#whiteBackground").show();
      $("#whiteBackground").css('animation', 'fadeIn ease 1s');
      $("#whiteBackground").css('opacity', '1');
    }, 3250);// End of setTimeout
  });//end of enterBattle click

  /*************** SOHAIL MEGHANI 1/19/21 5:49 PM Added functionality to buying in the shop ***************/
  $("#buy").click(function(){
    $("#greyBackground").show();
    $("#greyBackground").css('animation', 'none');
    $("#greyBackground").css('opacity', '0.75');
    $("#items").show();
    $("#items").css('opacity', '1');
    $("#exitButton").show();
    $("#weapons").show();
    $("#weapons").css('opacity', '1');
    $("#potion2").show();
    $("#potion2").css('opacity', '1');
    $("#potion3").show();
    $("#potion3").css('opacity', '1');
    $("#woodSpearBuy").show();
    $("#woodSpearBuy").css('opacity', '1');
    $("#lblWoodSpear").show();
    $("#lblPotion").show();
    $("#lbl5Potions").show();
    $("#lblAmountOfGold").show();
    $("#lblAmountOfGold").text("Gold Amount: " + gold);
    $("#lblCurrent").show();
    $("#lblCurrent").text("Current Amount: " + currentGold);
  });//end of bagClick

  $("#potion2").click(function()
  {
    if(gold>=10)
    {
      potion+=1;
      $("#lblShop").text("You bought 1 potion!");
      gold-=10;
      $("#lblAmountOfGold").text("Gold Amount: " + gold);
      setTimeout(function(){ //Start of setTimeout
        $("#lblShop").text("Welcome to the Shop!");
      }, 3000);// End of setTimeout
    }
    else
    {
      $("#lblShop").text("You don't have enough money!");
      setTimeout(function(){ //Start of setTimeout
        $("#lblShop").text("Welcome to the Shop!");
      }, 3000);// End of setTimeout
    }
  });//end of potion2 click

  $("#potion3").click(function()
  {
    if(gold>=40)
    {
      potion+=5;
      $("#lblShop").text("You bought 5 potions!");
      gold-=40;
      $("#lblAmountOfGold").text("Gold Amount: " + gold);
      setTimeout(function(){ //Start of setTimeout
        $("#lblShop").text("Welcome to the Shop!");
      }, 3000);// End of setTimeout
    }
    else
    {
      $("#lblShop").text("You don't have enough money!");
      setTimeout(function(){ //Start of setTimeout
        $("#lblShop").text("Welcome to the Shop!");
      }, 3000);// End of setTimeout
    }
  });//end of potion3 click

  $("#woodSpearBuy").click(function()
  {
    if(gold>=60)
    {
      if(woodSpear==false)
      {
        woodSpear=true;
        $("#lblShop").text("You bought the Wood Spear!");
        $("#woodSpearBuy").hide();
        $("#lblWoodSpear").hide();
        woodSpearMove=true;
        gold-=60;
        $("#lblAmountOfGold").text("Gold Amount: " + gold);

        setTimeout(function(){ //Start of setTimeout
          $("#lblShop").text("Welcome to the Shop!");
        }, 3000);// End of setTimeout
      }
      else
      {
        $("#lblShop").text("You already have the Wood Spear.");

        setTimeout(function(){ //Start of setTimeout
          $("#lblShop").text("Welcome to the Shop!");
        }, 3000);// End of setTimeout
      }
    }
    else
    {
      $("#lblShop").text("You don't have enough money!");
      setTimeout(function(){ //Start of setTimeout
        $("#lblShop").text("Welcome to the Shop!");
      }, 3000);// End of setTimeout
    }
  });//end of woodSpearBuy click

  $("#exitButton2").click(function()
  {
    $("#shop").show();
    $('#mines').show();
    $("#bag").show();
    $("#enterBattle").show();
    $("#gameBackground").css('background-image', 'url(../images/hideoutBackground2.png)');
    $("#gameBackground").css('background-size','200%');
    $("#shopKeeper").hide();
    $("#lblShop").hide();
    $("#buy").hide();
    $("#lblArea").text("Hideout Entrance");
    $("#lblArea").show();
    $("#exitButton2").hide();
    skipVid();
  });// end of exitButton2 click

  /*************** DAVID CACOROVSKI 1/18/21 11:53 AM Added Mines functionality ***************/
  $("#mines").click(function(){
    $("#gameBackground").css('animation', 'towardsMine ease 4.25s');
    if(woodSpear==false){
      $("#movingHands").show();
      $("#staticHands").hide();
    } else{
      $("#movingHands").hide();
      $("#staticHands").hide();
      $("#movingHandsSpear").show();
      $("#staticHandsSpear").hide();
    }

    $("#enterBattle").hide();
    $("#lblArea").hide();
    $("#bag").hide();
    $("#shop").hide();
    $("#mines").hide();
    setTimeout(function(){
      if(woodSpear==false){
        $("#movingHands").hide();
        $("#staticHands").show();
      } else{
        $("#movingHands").hide();
        $("#staticHands").hide();
        $("#movingHandsSpear").hide();
        $("#staticHandsSpear").show();
      }
      //STARTS PHASER PART OF THE GAME
      //all game variables go here

      /*************** SOHAIL MEGHANI 1/18/21 4:02 PM Added phaser variables ***************/
      // PHASER VARIABLES (No more information due to the phaser part not being done yet)
      titleScreenMusic.pause();
      let brick=null;
      let bricks=[];

      let rock1=null;
      let rocks1=[];
      let rock2=null;
      let rocks2=[];
      let rock3=null;
      let rocks3=[];
      let rock4=null;
      let rocks4=[];
      let rock5=null;
      let rocks5=[];
      let rock6=null;
      let rocks6=[];
      let rock7=null;
      let rocks7=[];
      let rock7_2=null;
      let rocks7_2=[];
      let rock7_3=null;
      let rocks7_3=[];
      let rock7_4=null;
      let rocks7_4=[];
      let rock7_5=null;
      let rocks7_5=[];
      let rock8=null;
      let rocks8=[];
      let rock9=null;
      let rocks9=[];
      let rock10=null;
      let rocks10=[];
      let purpRock=null;
      let purpRocks=[];
      let purpRock3=null;
      let purpRocks3=[];

      let dxRock=2;
      let dyRock=2;
      let rock7Counter=0;
      let rock7Counter2=0;
      let rock7Counter3=0;
      let rock7Counter4=0;
      let doneAgain=false;

      let goSound;
      let goScreen;
      let returnHideout;
      let returnSound;

      let man;
      let coin;
      let door;
      let invisMan;
      let background;
      let returnTo;
      let jump=false;
      let onBrick=false;
      let jumpTick=0;

      //variables for our input keys
      let leftKey;
      let rightKey;
      let upKey;
      let slideKey;

      let goldRandomP=0;
      let goldCounter=0;
      let oldGold=0;

      let playable=false;

      let _this=null;

      //Music Variable
      let minigameMusic;
      let minigameMusicControl = 1;

      class mainGame extends Phaser.Scene {

        constructor (config)
        {
            super(config);
            _this=this;
        }

        //preload loads all assets in to memory
        preload ()
        {
          this.load.image('brick','assets/element_grey_rectangle_glossy.png');

          this.load.image('rock1','assets/blue1.png');

          this.load.image('invisDon', 'assets/don.png');

          this.load.image('rock2','assets/blue2.png');

          this.load.image('rock3','assets/blue3.png');

          this.load.image('rock4','assets/blue4.png');

          this.load.image('rock5','assets/blue5.png');

          this.load.image('rock6','assets/blue6.png');

          this.load.image('rock7','assets/blue7.png');

          this.load.image('rock7_2','assets/blue7.png');

          this.load.image('rock8','assets/blue8.png');

          this.load.image('rock9','assets/blue9.png');

          this.load.image('rock10','assets/blue10.png');

          this.load.image('pRock','assets/pRock.png');

          this.load.image('background', 'assets/caveBackground.png');

          this.load.image('return', 'assets/goBack.png')

          this.load.atlas('don', 'assets/animations/sheet.png', 'assets/animations/sprites.json');

          this.load.audio('returnOver', 'assets/audio/returnOver.mp3');

          this.load.audio('goSound', 'assets/audio/gapFall.mp3');

          this.load.audio('minigameMusic', 'assets/audio/minigameMusic.mp3');

          this.load.image('gameScreen', 'assets/gameOverReturn.png');

          this.load.atlas('coin', 'assets/animations/coinSpriteVar.png', 'assets/animations/coinSpriteVar.json');

          this.load.image('door', 'assets/door.png');

          this.load.image('returnHideout', 'assets/returnHideout.png');
        }//in the preload function we will load our game resources

          /*************** SOHAIL MEGHANI 1/18/21 4:56 PM Added phaser create ***************/
          create (data)
          {
            //

            background=this.add.sprite(640, 360, 'background');

            //middle column left
            _this.createRocks1(1);
            _this.createRocks1_2(1);
            _this.createRocks1_3(1);

            //middle column right
            _this.createRocks3(1);
            _this.createRocks3_2(1);
            _this.createRocks3_3(1);

            //platform middle
            _this.createRocks2(1);
            _this.createRocks5(1);
            _this.createRocks6(1);

            //

            //left column left
            _this.createRocks1_4(1);
            _this.createRocks1_5(1);
            _this.createRocks1_6(1);

            //left column right
            _this.createRocks3_4(1);
            _this.createRocks3_5(1);
            _this.createRocks3_6(1);

            //platform left
            _this.createRocks5_2(1);
            _this.createRocks6_2(1);
            _this.createRocks2_2(1);

            //movingBlock1
            _this.createMoveBlock(1);

            //movingBlock2
            _this.createPurpRock(2);
            _this.createMoveBlock_2(1);

            //middle top platform
            _this.createRocks10(1);
            _this.createRocks9(1);
            _this.createRocks8(1);
            _this.createRocks2_3(1);
            _this.createRocks5_3(1);
            _this.createRocks6_3(1);

            //side block
            _this.createRockBlock(1);

            //purple rocks
            _this.createPurpRock_3(1);
            _this.createPurpRock_4(1);
            _this.createPurpRock_5(1);
            _this.createPurpRock_6(1);
            _this.createPurpRock_7(1);
            _this.createPurpRock_8(1);

            //

            _this.createRocks7_4(1);
            _this.createRocks7_5(1);


            invisMan=this.physics.add.sprite(300, 210, 'invisDon').setVisible(false);

            //

            /*************** SOHAIL MEGHANI 1/26/21 5:01 PM Created animations and events ***************/

            //Create all animations for the game

            this.anims.create({
              key: 'run',
              frames: this.anims.generateFrameNames('don', {prefix: 'run', end: 9}),
              repeat: -1
            });

            this.anims.create({
              key: 'stand',
              frames: this.anims.generateFrameNames('don', {prefix: 'stand', end: 4}),
              repeat: -1
            });

            this.anims.create({
              key: 'jump',
              frames: this.anims.generateFrameNames('don', {prefix: 'jump', end: 13}),
              repeat: 0
            });

            this.anims.create({
              key: 'slide',
              frames: this.anims.generateFrameNames('don', {prefix: 'slide', end: 8}),
              repeat: -1
            });

            this.anims.create({
              key: 'coinSpin',
              frames: this.anims.generateFrameNames('coin', {prefix: 'coin', end: 5}),
              repeat: -1
            });


            man = this.add.sprite(300, 200, 'don');

            door = this.add.sprite(188, 424, 'door');


            coin = this.add.sprite(100, 100, 'coin');

            invisMan.setBounce(0.2);
            invisMan.setCollideWorldBounds(true);

            this.physics.world.enable(invisMan);

            returnSound = this.sound.add('returnOver');

            goSound = this.sound.add('goSound');

            returnHideout = this.add.sprite(9999, 9999, 'returnHideout');

            goScreen = this.add.sprite(9999, 9999,"gameScreen");

            //

            leftKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

            rightKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

            upKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

            slideKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

            /*************** JEREMY THUMMEL 1/26/21 10:32 AM Added Rock Physics ***************/

            this.physics.add.collider(invisMan, rocks1);

            this.physics.add.collider(invisMan, rocks2);

            this.physics.add.collider(invisMan, rocks3);

            this.physics.add.collider(invisMan, rocks4);

            this.physics.add.collider(invisMan, rocks5);

            this.physics.add.collider(invisMan, rocks6);

            this.physics.add.collider(invisMan, rocks7);

            this.physics.add.collider(invisMan, rocks7_2);

            this.physics.add.collider(invisMan, rocks7_3);

            this.physics.add.collider(invisMan, rocks7_4);

            this.physics.add.collider(invisMan, rocks7_5);

            this.physics.add.collider(invisMan, rocks8);

            this.physics.add.collider(invisMan, rocks9);

            this.physics.add.collider(invisMan, rocks10);

            minigameMusic=this.sound.add('minigameMusic');

            minigameMusic.loop=true;

            $("#lblGoldCounter").show();
            $("#lblGoldCounter").css('opacity', '1');
            $("#lblGoldCounter").css('z-index', '10');
            $("#lblGoldCounter").text("Gold Amount: " + currentGold);

          }//create the game resources and assign them to variables

          //update function is your game loop function
          //it iterates for every frame of your game
          update()
          {
            if(minigameMusicControl == 1)
            {
              minigameMusic.play();
              minigameMusicControl++;
            }
            coin.anims.play('coinSpin', true);

            console.log(man.x);
            console.log(man.y);

            man.x=invisMan.x;
            man.y=invisMan.y;

            if(_this.collides(rocks2, invisMan)==true){
                man.y=invisMan.y+5;
            }


            if(leftKey.isDown){
              invisMan.setVelocityX(-200);
              man.flipX=true;
              if(invisMan.body.touching.down){
                man.anims.play('run', true);
              }
            } else if(rightKey.isDown){
              invisMan.setVelocityX(200);
              man.flipX=false;
              if(invisMan.body.touching.down){
                man.anims.play('run', true);
              }
            } else if(slideKey.isDown){
              invisMan.setVelocityX(50);
              man.flipX=false;
              if(invisMan.body.touching.down){
                man.anims.play('slide', true);
              }
              if(_this.collides(rocks2, invisMan)==true){
                  man.y=invisMan.y+30;
              }
            } else{
              if(invisMan.body.touching.down){
                invisMan.setVelocityX(0);
                man.play('stand');
              }
            }

            if(invisMan.body.touching.down && upKey.isDown){
              invisMan.setVelocityY(-300);
              man.play('jump', true);
            }

            if(man.x > 195 && man.x < 200 && playable==false){
              $("#lblGoldCounter").hide();
              returnSound.play();
              minigameMusic.stop();
              playable=true;
              man.x=9999;
              man.y=9999;
              invisMan.x=9999;
              invisMan.y=9999;
              returnHideout.x=640;
              returnHideout.y=360;
              setTimeout(function(){
                $("canvas").hide();
                game.destroy();
                $("#lblGoldCounter").hide();
                $("#whiteBackground").hide();
                $("#movingHands").hide();
                $("#staticHands").show();
                $("#enterBattle").show();
                $("#lblArea").show();
                $("#bag").show();
                $("#shop").show();
                $("#mines").show();
                titleScreenMusic.play();
                $("#gameBackground").css('background-image', 'url(../images/hideoutBackground2.png)');
                $("#gameBackground").css('background-size', '200%');
                $("#gameBackground").css('animation', 'none');
                gold+=currentGold;
                currentGold=0;
                man.destroy();
                invisMan.destroy();
              }, 4000);
            }


            if(man.y == 677 && playable==false){
              $("#lblGoldCounter").hide();
              minigameMusic.stop();
              currentGold=0;
              goSound.play();
              playable=true;
              man.x=9999;
              man.y=9999;
              invisMan.x=9999;
              invisMan.y=9999;
              goScreen.x=640;
              goScreen.y=360;
              setTimeout(function(){
                $("canvas").hide();
                game.destroy();
                $("#whiteBackground").hide();
                $("#movingHands").hide();
                $("#staticHands").show();
                $("#enterBattle").show();
                $("#lblArea").show();
                $("#bag").show();
                $("#shop").show();
                $("#mines").show();
                titleScreenMusic.play();
                $("#gameBackground").css('background-image', 'url(../images/hideoutBackground2.png)');
                $("#gameBackground").css('background-size', '200%');
                $("#gameBackground").css('animation', 'none');
                man.destroy();
                invisMan.destroy();
              }, 4000);
            }

            if(man.x > coin.x - 25 && man.x < coin.x + 25 && man.y > coin.y - 25 && man.y < coin.y + 25){
              currentGold++;
              $("#lblGoldCounter").text("Gold Amount: " + currentGold);
              oldGold=goldRandomP;
              goldCounter=0;
            }

            // currentGold++;

            if(goldCounter==0)
            {
              goldRandomP=(Math.round(Math.random()*1)+1);
              while(oldGold==goldRandomP)
              {
                goldRandomP=(Math.round(Math.random()*1)+1);
              }
              goldCounter++;
            }

            if(goldRandomP==1)
            {
              coin.x=636;
              coin.y=420;
            }

            if(goldRandomP==2)
            {
              coin.x=636;
              coin.y=150;
            }

            if(man.x==coin.x && man.y==coin.y)
            {
              oldGold=goldRandomP;
              goldCounter=0;
            }

            //

            if(rock7Counter>=150)
            {
              rock7Counter=0;
              rock7Counter2++;
            }
            if(rock7Counter<150 && rock7Counter2%2==1)
            {
              rock7.y-=dyRock;
            }
            else if(rock7Counter<150 && rock7Counter2%2==0)
            {
              rock7.y+=dyRock;
            }
            rock7Counter++;

            if(rock7Counter3>=80)
            {
              rock7Counter3=0;
              rock7Counter4++;
            }
            if(rock7Counter3<80 && rock7Counter4%2==0)
            {
              rock7_2.x-=dxRock;
              purpRock.x-=dxRock;
            }
            else if(rock7Counter3<80 && rock7Counter4%2==1)
            {
              rock7_2.x+=dxRock;
              purpRock.x+=dxRock;
            }
            rock7Counter3++;




            /*************** JEREMY THUMMEL & SOHAIL MEGHANI 1/26/21 6:36 PM Created rock7 movement ***************/
            //Moving platform code

            //end of Moving platform code

          }//this represents the game loop and is where all the major code that controls the game is written





          collides(sprite1,sprite2)
          {
              return Phaser.Geom.Intersects.RectangleToRectangle(sprite1,sprite2);
          }

          /*************** JEREMY THUMMEL 1/26/21 11:02 AM Created Rock Functions ***************/

          //middle column right
          createRocks1(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              rock1=this.physics.add.image(572+(64*x),564,"rock1");
              rock1.setImmovable(true);
              rock1.body.allowGravity = false;
              rocks1.push(rock1);

            }
          }

          createRocks1_2(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              rock1=this.physics.add.image(572+(64*x),628,"rock1");
              rock1.setImmovable(true);
              rock1.body.allowGravity = false;
              rocks1.push(rock1);

            }
          }

          createRocks1_3(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              rock1=this.physics.add.image(572+(64*x),692,"rock1");
              rock1.setImmovable(true);
              rock1.body.allowGravity = false;
              rocks1.push(rock1);

            }
          }

          //left column left
          createRocks1_4(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              rock1=this.physics.add.image(172+(64*x),564,"rock1");
              rock1.setImmovable(true);
              rock1.body.allowGravity = false;
              rocks1.push(rock1);

            }
          }

          createRocks1_5(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              rock1=this.physics.add.image(172+(64*x),628,"rock1");
              rock1.setImmovable(true);
              rock1.body.allowGravity = false;
              rocks1.push(rock1);

            }
          }

          createRocks1_6(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              rock1=this.physics.add.image(172+(64*x),692,"rock1");
              rock1.setImmovable(true);
              rock1.body.allowGravity = false;
              rocks1.push(rock1);

            }
          }

          createRocks2_2(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              rock2=this.physics.add.image(236+(64*x),500,"rock2");
              rock2.setImmovable(true);
              rock2.body.allowGravity = false;
              rocks2.push(rock2);

            }
          }

          createPurpRock_3(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              purpRock3=this.add.image(236+(64*x),564,"pRock");
              purpRocks3.push(purpRock3);
            }
          }

          createPurpRock_4(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              purpRock3=this.add.image(236+(64*x),628,"pRock");
              purpRocks3.push(purpRock3);
            }
          }

          createPurpRock_5(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              purpRock3=this.add.image(236+(64*x),692,"pRock");
              purpRocks3.push(purpRock3);
            }
          }

          createPurpRock_6(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              purpRock3=this.add.image(636+(64*x),564,"pRock");
              purpRocks3.push(purpRock3);
            }
          }

          createPurpRock_7(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              purpRock3=this.add.image(636+(64*x),628,"pRock");
              purpRocks3.push(purpRock3);
            }
          }

          createPurpRock_8(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              purpRock3=this.add.image(636+(64*x),692,"pRock");
              purpRocks3.push(purpRock3);
            }
          }

          createRocks2(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              rock2=this.physics.add.image(636+(64*x),500,"rock2");
              rock2.setImmovable(true);
              rock2.body.allowGravity = false;
              rocks2.push(rock2);

            }
          }

          //top middle platform

          createRocks10(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              rock10=this.physics.add.image(636+(64*x),308,"rock10");
              rock10.setImmovable(true);
              rock10.body.allowGravity = false;
              rocks10.push(rock10);

            }
          }

          createRocks2_3(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              rock2=this.physics.add.image(636+(64*x),244,"rock2");
              rock2.setImmovable(true);
              rock2.body.allowGravity = false;
              rocks2.push(rock2);

            }
          }

          createRocks9(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              rock9=this.physics.add.image(572+(64*x),308,"rock9");
              rock9.setImmovable(true);
              rock9.body.allowGravity = false;
              rocks9.push(rock9);

            }
          }

          createRocks5_3(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              rock5=this.physics.add.image(572+(64*x),244,"rock5");
              rock5.setImmovable(true);
              rock5.body.allowGravity = false;
              rocks5.push(rock5);

            }
          }

          createRocks8(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              rock8=this.physics.add.image(700+(64*x),308,"rock8");
              rock8.setImmovable(true);
              rock8.body.allowGravity = false;
              rocks8.push(rock8);

            }
          }

          createRocks6_3(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              rock6=this.physics.add.image(700+(64*x),244,"rock6");
              rock6.setImmovable(true);
              rock6.body.allowGravity = false;
              rocks6.push(rock6);

            }
          }

          //end of middle top platform

          //middle column left

          createRocks3(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              rock3=this.physics.add.image(700+(64*x),564,"rock3");
              rock3.setImmovable(true);
              rock3.body.allowGravity = false;
              rocks3.push(rock3);

            }
          }

          createRocks3_2(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              rock3=this.physics.add.image(700+(64*x),628,"rock3");
              rock3.setImmovable(true);
              rock3.body.allowGravity = false;
              rocks3.push(rock3);

            }
          }

          createRocks3_3(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              rock3=this.physics.add.image(700+(64*x),692,"rock3");
              rock3.setImmovable(true);
              rock3.body.allowGravity = false;
              rocks3.push(rock3);

            }
          }

          //left column right

          createRocks3_4(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              rock3=this.physics.add.image(300+(64*x),564,"rock3");
              rock3.setImmovable(true);
              rock3.body.allowGravity = false;
              rocks3.push(rock3);

            }
          }

          createRocks3_5(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              rock3=this.physics.add.image(300+(64*x),628,"rock3");
              rock3.setImmovable(true);
              rock3.body.allowGravity = false;
              rocks3.push(rock3);

            }
          }

          createRocks3_6(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              rock3=this.physics.add.image(300+(64*x),692,"rock3");
              rock3.setImmovable(true);
              rock3.body.allowGravity = false;
              rocks3.push(rock3);

            }
          }

          createRocks4(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              rock4=this.physics.add.image(350+(64*x),500,"rock4");
              rock4.setImmovable(true);
              rock4.body.allowGravity = false;
              rocks4.push(rock4);

            }
          }

          createRocks5(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              rock5=this.physics.add.image(572+(64*x),500,"rock5");
              rock5.setImmovable(true);
              rock5.body.allowGravity = false;
              rocks5.push(rock5);

            }
          }

          createRocks5_2(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              rock5=this.physics.add.image(172+(64*x),500,"rock5");
              rock5.setImmovable(true);
              rock5.body.allowGravity = false;
              rocks5.push(rock5);

            }
          }

          createRocks6(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              rock6=this.physics.add.image(700+(64*x),500,"rock6");
              rock6.setImmovable(true);
              rock6.body.allowGravity = false;
              rocks6.push(rock6);

            }
          }

          createRocks7_4(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              rock7_4=this.physics.add.image(964+(64*x),436,"rock7");
              rock7_4.setImmovable(true);
              rock7_4.body.allowGravity = false;
              rocks7_4.push(rock7_4);

            }
          }

          createRocks7_5(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              rock7_5=this.physics.add.image(900+(64*x),500,"rock7");
              rock7_5.setImmovable(true);
              rock7_5.body.allowGravity = false;
              rocks7_5.push(rock7_5);

            }
          }

          createRocks6_2(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              rock6=this.physics.add.image(300+(64*x),500,"rock6");
              rock6.setImmovable(true);
              rock6.body.allowGravity = false;
              rocks6.push(rock6);

            }
          }

          createRockBlock(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              rock7_3=this.physics.add.image(1028+(64*x),372,"rock7");
              rock7_3.setImmovable(true);
              rock7_3.body.allowGravity = false;
              rocks7_3.push(rock7_3);

            }
          }

          createMoveBlock(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              rock7=this.physics.add.image(508+(64*x),308,"rock7");
              rock7.setImmovable(true);
              rock7.body.allowGravity = false;
              rocks7.push(rock7);

            }
          }

          createMoveBlock_2(numberOfCols)
          {
            for(let x=0;x<numberOfCols;x++)
            {

              rock7_2=this.physics.add.image(856+(64*x),308,"rock7_2");
              rock7_2.setImmovable(true);
              rock7_2.body.allowGravity = false;
              rocks7_2.push(rock7_2);

            }
          }

          createPurpRock(numberOfCols)
          {
            numberOfCols = 3;
            for(let x=0;x<numberOfCols;x++)
            {
              purpRock=this.add.image(728+(64*x),308,"pRock");
              purpRocks.push(purpRock);
            }
          }

          /*************** DAVID CACOROVSKI 1/19/21 9:54 AM Created more bricks ***************/


      }//end of our first game scene/screen

      var scenes=[];
      scenes.push(mainGame);


      var config={
          type: Phaser.AUTO,
          parent: 'phaser-example',
          width: 1280,
          height: 720,
          physics: {
              default: 'arcade',
              arcade: {
                gravity: { y: 500 },

                  debug: false

                },
              audio: {
                disableWebAudio: true,
                noAudio: false
                }
          }
      };

      var game=new Phaser.Game(config);

      game.scene.add("screenOne",mainGame);
      game.scene.start("screenOne");
   }, 2500);
  });//end of mines click

  /*************** SOHAIL MEGHANI 1/19/21 10:01 AM Created ability to run in a battle ***************/
  /*************** DAVID CACOROVSKI 1/19/21 10:15 AM Added not being able to run in a battle ***************/
  /*************** JEREMY THUMMEL 1/19/21 11:13 AM Added animation to running from a battle ***************/
  $("#run").click(function(){
    // runChance is a variable that does a 50/50 and if you roll a 1, you cant run from the battle. But if you get a 2 you get to run away from the battle.
    let runChance=(Math.round(Math.random()*1)+1);
    if(runChance==1)
    {
      $("#lblEncounter").text("It seems you cannot run...");
      $("#run").hide();
      $("#attack").hide();
      $("#bag").hide();
      setTimeout(function(){
        enemyAttack();
      }, 1500);
    }
    else
    {
      $("#lblEncounter").text("It seems you have run from battle!!!");
      $("#run").hide();
      $("#attack").hide();
      $("#bag").hide();
      waves=1;
      if(neoEndless == false)
      {
        wave1True=true;
        neoWaves=false;
      }
      wave2True=false;
      wave3True=false;
      neoEndlessCheck=false;
      bossWave=false;
      bossPhased=false;
      bossFirst=true;
      finalWave=false;
      playerHealth=hpStat
      var footstepsMedium=new Audio("../audio/footstepsMedium.mp3");
      footstepsMedium.play();
      setTimeout(function(){ //Start of setTimeout
        transition.play();
        $("#whiteBackground").show();
        $("#whiteBackground").css('animation', 'fadeIn ease 1s');
        $("#whiteBackground").css('opacity', '1');
        setTimeout(function(){
          $("#greyBackground").css('opacity', '0');
          $("#greyBackground").hide();
          $("#gameBackground").css('background-image', 'url(../images/hideoutBackground2.png)');
          $("#gameBackground").css('background-size', '200%');
          firstWaves.pause();
          secondWaves.pause();
          thirdWaves.pause();
          neoWavesMusic.pause();
          bossWavesMusic.pause();
          finalBossPhase.pause();
          $("#attack").hide();
          $("#run").hide();
          $("#lblEncounter").hide();
          $("#lblEnemyHealth").hide();
          $("#lblPlayerHealth").hide();
          $("#lblEnemyLeft").hide();
          if(enemy=="Strawburry")
          {
            $("#enemyStraw").hide();
          }

          else if(enemy=="Frosty")
          {
            $("#enemyFrosty").hide();
          }

          else if(enemy=="Hiveo")
          {
            $("#enemyHiveo").hide();
          }

          else if(enemy=="Covered King")
          {
            $("#enemyCovered").hide();
          }

          else if(enemy=="Buff Pengu")
          {
            $("#enemyPengu").hide();
          }

          else if(enemy=="Boulder Snake")
          {
            $("#enemySnake").hide();
          }

          else if(enemy=="Zyborgus")
          {
            $("#enemyZyborgus").hide();
          }
          setTimeout(function(){
            $("#whiteBackground").css('animation', 'fadeOut 1s');
            $("#whiteBackground").css('opacity', '0');
            $("#whiteBackground").hide();
            skipVid();
          }, 1500);
        }, 1500);
      }, 2000);// End of setTimeout
    }
  });//end of runClick

  /*************** JEREMY THUMMEL 1/19/21 5:48 PM Added bag functionality ***************/
  /*************** SOHAIL MEGHANI 1/19/21 5:49 PM Added labels ***************/
  /*************** DAVID CACOROVSKI 1/19/21 5:51 PM Added name changing functionality ***************/
  $("#bag").click(function(){
    $("#greyBackground").show();
    $("#greyBackground").css('animation', 'none');
    $("#items").show();
    $("#items").css('opacity', '1');
    $("#stats").show();
    $("#stats").css('opacity', '1');
    $("#avatarInGame").show();
    if(maxLevel==true)
    {
      $("#avatarInGame").attr('src', '../images/neoDonCloseUp.png');
    }
    $("#lblDon").show();
    $("#lblATK").show();
    $("#lblATK").text("ATK: " + atkStat);
    $("#lblDEF").show();
    $("#lblDEF").text("DEF: " + defStat);
    $("#lblHP").show();
    $("#lblHP").text("HP: " + playerHealth + "/" + hpStat);
    $("#lblSPD").show();
    $("#lblSPD").text("SPD: " + spdStat);
    $("#lblXP").show();
    $("#lblXP").text("XP: " + experience + "/" + experienceCap);
    $("#lblAmountOfGold").show();
    $("#lblAmountOfGold").text("Gold Amount: " + gold);
    $("#lblCurrent").show();
    $("#lblCurrent").text("Current Amount: " + currentGold);
    $("#exitButton").show();
    $("#submitBTN").show();
    $("#submitBTN").css('opacity', '1');
    $("#namePlayer").show();
    $("#namePlayer").css('opacity', '1');
    $("#greyBackground").css('opacity', '0.75');
    if(potion>0)
    {
      $("#potion1").show();
      $("#potion1").css('opacity', '1');
      $("#lblMultipleAmount1").show();
      $("#lblMultipleAmount1").text("Potion: x" + potion);
    }
    if(nameDeclared==true){
      $("#submitBTN").css('opacity', '0');
      $("#submitBTN").hide();
      $("#namePlayer").css('opacity', '0');
      $("#namePlayer").hide();
    }
  });//end of bagClick

  /*************** DAVID CACOROVSKI 1/19/21 6:02 PM Added attack functionality ***************/
  /*************** JEREMY THUMMEL 1/19/21 6:04 PM Edited attack functionality ***************/
  $("#attack").click(function(){
    $("#greyBackground").show();
    $("#greyBackground").css('animation', 'none');
    $("#exitButton").show();
    $("#moveOne").show();
    if(woodSpearMove==true)
    {
      $("#moveTwo").show();
    }
    $("#greyBackground").css('opacity', '0.75');
  });//end of attack click

  /*************** DAVID CACOROVSKI 1/20/21 10:43 AM Added not continuing after dying ***************/
  /*************** DAVID CACOROVSKI 1/20/21 11:03 AM Added yes continuing after dying ***************/
  $("#noContinue").click(function(){
    /* Act on the event */
    window.location="../index.html";
  });//end of noContinue click

  $("#yesContinue").click(function(){
    /* Act on the event */
    $("#staticHands").attr("src","../images/hands.png");
    $("#staticHandsSpear").attr("src","../images/handsSpear.png");
    $("#movingHands").attr("src","../images/hands.gif");
    $("#movingHandsSpear").attr("src","../images/handsSpear.gif");
    waves=1;
    if(neoEndless == false)
    {
      wave1True=true;
      neoWaves=false;
    }
    neoEndlessCheck=false;
    wave2True=false;
    wave3True=false;
    bossPhased=false;
    bossFirst=true;
    bossWave=false;
    finalWave=false;
    playerHealth=hpStat;
    transition.play();
    $("#whiteBackground").show();
    $("#whiteBackground").css('animation', 'fadeIn 1s');
    $("#whiteBackground").css('opacity', '1');
    $("#lblLost").css('opacity', '0');
    $("#lblLost").hide();
    $("#lblContinue").css('opacity', '0');
    $("#lblContinue").hide();
    $("#yesContinue").css('opacity', '0');
    $("#yesContinue").hide();
    $("#noContinue").css('opacity', '0');
    $("#noContinue").hide();
    setTimeout(function(){
      $("#greyBackground").css('opacity', '0');
      $("#greyBackground").hide();
      $("#gameBackground").css('background-image', 'url(../images/hideoutBackground2.png)');
      $("#gameBackground").css('background-size', '200%');
      firstWaves.pause();
      secondWaves.pause();
      thirdWaves.pause();
      neoWavesMusic.pause();
      bossWavesMusic.pause();
      finalBossPhase.pause();
      $("#attack").hide();
      $("#run").hide();
      $("#lblEncounter").hide();
      $("#lblEnemyHealth").hide();
      $("#lblPlayerHealth").hide();
      $("#lblEnemyLeft").hide();
      if(enemy=="Strawburry")
      {
        $("#enemyStraw").hide();
      }

      else if(enemy=="Frosty")
      {
        $("#enemyFrosty").hide();
      }

      else if(enemy=="Zyborgus")
      {
        $("#enemyZyborgus").hide();
      }

      else if(enemy=="Covered King")
      {
        $("#enemyCovered").hide();
      }

      else if(enemy=="Buff Pengu")
      {
        $("#enemyPengu").hide();
      }

      else if(enemy=="Hiveo")
      {
        $("#enemyHiveo").hide();
      }

      else if(enemy=="Boulder Snake")
      {
        $("#enemySnake").hide();
      }
      setTimeout(function(){
        $("#whiteBackground").css('animation', 'fadeOut 1s');
        $("#whiteBackground").css('opacity', '0');
        $("#whiteBackground").hide();
        currentGold=0;
        skipVid();
      }, 1000);
    }, 1000);

  });//end of yesContinue click

  /*************** SOHAIL MEGHANI 1/20/21 10:45 AM Added attack button ***************/
  $("#atkButton").click(function() {
    /* Act on the event */
    levelUpSound.play();
    atkStat+=atkLevel;
    levelCheck();
    battle();
  });

  /*************** JEREMY THUMMEL 1/20/21 10:49 AM Added defence button ***************/
  $("#defButton").click(function() {
    /* Act on the event */
    levelUpSound.play();
    defStat+=defLevel;
    levelCheck();
    battle();
  });

  /*************** DAVID CACOROVSKI 1/20/21 4:09 PM Added health button ***************/
  $("#hpButton").click(function() {
    /* Act on the event */
    levelUpSound.play();
    hpStat+=hpLevel;
    playerHealth=hpStat;
    levelCheck();
    battle();
  });

  /*************** SOHAIL MEGHANI 1/21/21 9:33 AM Added speed button ***************/
  $("#spdButton").click(function() {
    /* Act on the event */
    levelUpSound.play();
    spdStat+=spdLevel;
    levelCheck();
    battle();
  });

  /*************** JEREMY THUMMEL 1/21/21 9:53 AM Added exit button ***************/
  $("#exitButton").click(function(){
    $("#greyBackground").css('opacity', '0');
    $("#greyBackground").hide();
    $("#exitButton").hide();
    $("#moveTwo").hide();
    $("#moveOne").hide();
    $("#items").hide();
    $("#avatarInGame").hide();
    $("#lblDon").hide();
    $("#lblATK").hide();
    $("#lblDEF").hide();
    $("#lblHP").hide();
    $("#lblSPD").hide();
    $("#lblXP").hide();
    $("#lblAmountOfGold").hide();
    $("#lblCurrent").hide();
    $("#lblMultipleAmount1").hide();
    $("#stats").hide();
    $("#potion2").hide();
    $("#potion3").hide();
    $("#weapons").hide();
    $("#submitBTN").css('opacity', '0');
    $("#submitBTN").hide();
    $("#namePlayer").css('opacity', '0');
    $("#namePlayer").hide();
    $("#lblWoodSpear").hide();
    $("#lblPotion").hide();
    $("#lbl5Potions").hide();
    $("#potion1").hide();
    $("#woodSpearBuy").hide();
  });//end of exitButton click

  /*************** DAVID CACOROVSKI 1/24/21 5:22 PM Added potion functionaliy. ***************/
  $("#potion1").click(function(){
    // Lexical - Used here because it is only used here. restoreAmount is the number that restores the amount of hp with.
    let restoreAmount=20;
    if(playerHealth==hpStat)
    {
      $("#lblPotionHP").show();
      $("#lblPotionHP").text("You can't use potion at full HP!");
      setTimeout(function(){
        $("#lblPotionHP").hide();
      }, 1000);
    }
    else
    {
      playerHealth+=20;
      if(playerHealth>hpStat)
      {
        restoreAmount=playerHealth-hpStat;
        restoreAmount=20-restoreAmount;
        playerHealth=hpStat;
      }
      $("#lblPotionHP").show();
      $("#lblPotionHP").text("You have restored your HP by: " + restoreAmount + "HP!");
      potion-=1;
      $("#lblHP").text("HP: " + playerHealth + "/" + hpStat);
      $("#lblMultipleAmount1").text("Potion: x" + potion);
      $("#lblPlayerHealth").text('Player HP: ' + playerHealth);
      if(potion<1)
      {
        potion=0;
        $("#potion1").hide();
        $("#lblMultipleAmount1").hide();
      }
      setTimeout(function(){
        $("#lblPotionHP").hide();
      }, 1000);
    }
  });//end of potion1 click

  /*************** JEREMY THUMMEL 1/21/21 9:59 AM Added move buttons ***************/
  /*************** SOHAIL MEGHANI 1/21/21 10:03 AM Added submit text functionality ***************/
  $("#moveOne").click(function(){
    damageOutput=(Math.round(Math.random()*5)+ atkStat);
    damageOutput=(Math.round(damageOutput));
    spearStrikeCounter=0;
    attacking();
  });//end of moveOne click

  $("#moveTwo").click(function(){
    bubbleSort();
    damageOutput=newDamage[spearStrikeCounter];
    damageOutput=(Math.round(damageOutput));
    spearStrikeCounter+=1;
    attacking();
  });//end of moveOne click

  $("#submitBTN").click(function(){
    nameGet();
    if(name == ""){
      $("#lblDon").text("Name: Don");
    }
    nameDeclared=true;
    $("#lblDon").text("Name: " + name);
    $("#submitBTN").css('opacity', '0');
    $("#submitBTN").hide();
    $("#namePlayer").css('opacity', '0');
    $("#namePlayer").hide();
  });//end of submit click

});//end of docReady
