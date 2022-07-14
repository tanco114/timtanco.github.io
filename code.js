//function for countdowntimer V1 for wk1-2
function blastoffTimerV1(){
    console.log("start() function started");
    // created variable currTime set it equal to 10 seconds on the countdown
    var currTime = 10;
    console.log(currTime);
    document.getElementById("countdownStatus").innerHTML = currTime;
    //9 seconds left before blastoff
    setTimeout(function(){
        currTime = currTime -1;
        //what we do after delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 1000)// 1000 equals to miliseconds to the next second
    //8 secinds left before blastoff
    setTimeout(function(){
        currTime = currTime -1;
        //what we do after delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 2000)
    //7 seconds left before blastoff
    setTimeout(function(){
        currTime = currTime -1;
        //what we do after delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 3000)
    //6 seconds left before blastoff
    setTimeout(function(){
        currTime = currTime -1;
        //what we do after delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 4000)
    //5 seconds left before blastoff
    setTimeout(function(){
        currTime = currTime -1;
        //what we do after delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 5000)
    //4 seconds left before blastoff
    setTimeout(function(){
        currTime = currTime -1;
        //what we do after delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 6000)
    //3 seconds left before blastoff
    setTimeout(function(){
        currTime = currTime -1;
        //what we do after delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 7000)
    //2 seconds left before blastoff
    setTimeout(function(){
        currTime = currTime -1;
        //what we do after delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 8000)
    //1 second left before blastoff
    setTimeout(function(){
        currTime = currTime -1;
        //what we do after delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 9000)
    //blastoff! timer has ran out of time
    setTimeout(function(){
        currTime = currTime -1;
        //what we do after delay
        document.getElementById("countdownStatus").innerHTML = "BLASTOFF!!!";
        console.log(currTime);
    }, 10000)
}
//every line of code commented on...
function playCraps(){
    console.log("playCraps() started");
        //generate variables: die1, die2, sum
        var die1;
        var die2;
        var sum;

        //roll the dice
        die1 = Math.floor(Math.random() *6)+1;
        console.log(die1);
        die2 = Math.floor(Math.random() *6)+1;
        console.log(die2);
        //determine the sum of the two dice and save it in sum 
        sum = die1 + die2;
        console.log("sum is equal to " + sum);
       
        //follow the rules of craps and tell the status in crapsStatus
        //first lose if sum of dice roll a 7 or(||) 11
        if(sum == 7 || sum == 11){
            document.getElementById("crapsStatus").innerHTML = "Craps!! You Lose!"
        } else if(die1 == die2 && die1%2 == 0){
    //this line shows that you won with even numbers that were doubled     
            document.getElementById("crapStatus").innerHTML = "Huzzah! You Win!!!"
        } else{
    // this line does not work and shows a typeError
            document.getElementById("crapStatus").innerHTML = "You did not win or lose. Please play again."
         }
}
// switched out the blastoffTimer V1 to a shorter V2 using less lines to make it neater
function blastoffTimerV3(){
    console.log("blastoffTimerV2() started");
//want a loop that runs 11 times, 10-1 and then blastoff
    // steptime means how much time per step   
    // i = 0; is do (i < 10); is while 
    var countdownTimer = 10;
    // need to make i <= for countdowntimer to reach blastoff. Putting  "< countdownTimer;" wont reach Blastoff!!
    for(var i = 0; i <= countdownTimer; i = i + 1){
        setTimeout(function(){
            console.log(countdownTimer);
            // this line makes Blastoff appear once timer reaches 0
            if(countdownTimer <= 0){
                document.getElementById("countdownStatus").innerHTML = "Blastoff!!!";
                console.log("Blastoff!");
            } else if( countdownTimer < 5){
                //a warning message will pop up when it gets to the midpoint
                document.getElementById("countdownStatus").innerHTML = "Warning Less than 1/2 way to launch, time left = " + countdownTimer;
                countdownTimer = countdownTimer - 1;
            } else {
                //this line makes the timer countdown by 1 sec
                document.getElementById("countdownStatus").innerHTML = countdownTimer;
                countdownTimer = countdownTimer - 1;
            }
           
        }, 1000 * i)
    }
    // * means times 
setTimeout(function(){    
    
    }, 10000)
}

function startFun(){
    console.log("startFun() started");
    document.getElementById("data").rows["seconds"].innerHTML = "reading data";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disable = true;
    document.getElementById("stopButton").disable = false;
}

function stopFun(){
    console.log("stopFun() started");
    clearInterval(timer);
    document.getElementById("stopButton").disable = true;
    document.getElementById("startButton").disable = false;
}

function playStation(){
    console.log("playStation() started");
    //play playstation sounds here
    mySound = new sound("us-lab-background.mp3");
    mysound.play();
//mysound.play plays the sound
//mySound = new sound is the file 
}

function playMyLeg(){
    console.log("playStation() started");
    mySound = new sound("myleg.mp3");
    mysound.play();
// second sound to second button
}

//srcFile will know what file to play 
class sound {
    constructor(srcFile) {
        console.log("sound function started");
        this.sound = document.createElement("audio");
        this.sound.src = srcFile;
        this.sound.setAttribute("preload", "audio");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.play = function () {
            this.sound.play();
        };
        this.stop = function () {
            this.sound.pause();
        };



    }
}function spin(){
    console.log ()
}