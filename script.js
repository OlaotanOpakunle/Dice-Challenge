var randomNumber1 = Math.floor((Math.random() * 6) + 1);
console.log(randomNumber1);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
console.log(randomNumber2);

function switc(){
    if(randomNumber1 == 1){ 
        var changeImageNow = document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
}
    if(randomNumber1 == 2){
        var changeImageNow = document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
    }
    if(randomNumber1 == 3){
        var changeImageNow = document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
    }
    if(randomNumber1 == 4){
        var changeImageNow = document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
    }
    if(randomNumber1 == 5){
        var changeImageNow = document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
    }

    if(randomNumber1 == 6){
        var changeImageNow = document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
        }    
}

function switc2(){
    if(randomNumber2 == 1){
    var changeImageNow2 = document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
    }
    if(randomNumber2 == 2){
        var changeImageNow2 = document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
        }
    if(randomNumber2 == 3){
        var changeImageNow2 = document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
        }
    if(randomNumber2 == 4){
        var changeImageNow2 = document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
        }    
    if(randomNumber2 == 5){
        var changeImageNow2 = document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
        }    
    if(randomNumber2 == 6){
        var changeImageNow2 = document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
            }    
}

function winner() {
    if(randomNumber1 > randomNumber2){
        var changeText = document.querySelector("h1").textContent = "Player 1 wins!";    
    }
    else if(randomNumber2 > randomNumber1){
        var changeText = document.querySelector("h1").textContent = "Player 2 wins!"; 
    }
    else if(randomNumber1 === randomNumber2){
        var changeText = document.querySelector("h1").textContent = "It's a tie!"; 
    }
    
switc();
switc2();
}


winner();