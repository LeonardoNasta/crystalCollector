$(document).ready(function() {

    var wins= 0
    var losses= 0
    var userScore=0
    
    var computerNumber=Math.floor(Math.random()*101+19)
    console.log()
    //number between 19 and 120

    $('#computerNumber').text("Score Goal: " +computerNumber)
    //print random number to (#computerNumber)
    
    console.log(computerNumber)

    //I originally attempted this using arrays but found myself constantly
    var diamondNum= Math.floor(Math.random()*11+1)
    var emeraldNum= Math.floor(Math.random()*11+1)
    var goldNum= Math.floor(Math.random()*11+1)
    var lapisNum= Math.floor(Math.random()*11+1)
    console.log(diamondNum,emeraldNum,goldNum,lapisNum);
    //number between 1 and 12

    $('#wins').text("Wins: " + wins);
    $('#losses').text("Losses: " + losses);


    function newGame() {

        computerNumber= Math.floor(Math.random()*101+19);
        diamondNum= Math.floor(Math.random()*11+1);
        emeraldNum= Math.floor(Math.random()*11+1);
        goldNum= Math.floor(Math.random()*11+1);
        lapisNum= Math.floor(Math.random()*11+1);
        userScore = 0;
        $('#computerNumber').text("Score Goal: " +computerNumber)
        console.log(computerNumber);
        console.log(diamondNum,emeraldNum,goldNum,lapisNum);
        
    }
    //  resets the random numbers while maintaining wins and losses.



// Button Diamond

    $('#diamondButton').on ('click', function(){

        userScore = userScore + diamondNum;  
        $('#playerPoints').text("Your Score: " + userScore);

        if 
            (userScore === computerNumber) {
                    wins++;
                    $('#wins').text("Wins: " + wins);
                    newGame();
            }
        else if
            (userScore > computerNumber) {
                    losses++;
                    $('#losses').text("Losses: " +losses);
                    newGame();
                }
            })


//Button Emerald

    $('#emeraldButton').on ('click', function(){

        userScore = userScore + emeraldNum;  
        $('#playerPoints').text("Your Score: " + userScore);

        if 
            (userScore === computerNumber) {
                    newGame();
                    wins++;
                    $('#wins').text("Wins: " + wins);
            }
        else if
            (userScore > computerNumber) {
                    newGame();
                    losses++;
                    $('#losses').text("Losses: " +losses);
                }
            })

//Button Gold

    $('#goldButton').on ('click', function(){

        userScore = userScore + goldNum;  
        $('#playerPoints').text("Your Score: " + userScore);

        if 
            (userScore === computerNumber) {
                    newGame();
                    wins++;
                    $('#wins').text("Wins: " + wins);
            }
        else if
            (userScore > computerNumber) {
                    newGame();
                    losses++;
                    $('#losses').text("Losses: " +losses);
                }
            })


//Button Lapis Lazuli

    $('#lapisButton').on ('click', function(){

        userScore = userScore + lapisNum;  
        $('#playerPoints').text("Your Score: " + userScore);

        if 
            (userScore === computerNumber) {
                    newGame();
                    wins++;
                    $('#wins').text("Wins: " + wins);
            }
        else if
            (userScore > computerNumber) {
                    newGame();
                    losses++;
                    $('#losses').text("Losses: " +losses);
                }
            })
        
}) 
