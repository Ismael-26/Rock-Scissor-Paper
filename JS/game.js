

function clean() {
    player1.value = "";
    player2.value = "";
    document.getElementById('ins').innerHTML = "";

    document.getElementById('reset').style.display = "none";
    document.getElementById("selected_choice1").src = "PIC/random_pic.gif";
    document.getElementById("selected_choice2").src = "PIC/random_pic.gif";
    //changing the color of the background
    document.getElementById('selected_choice1').style.backgroundColor = "white";
    document.getElementById('selected_choice2').style.backgroundColor = "white";
    var anim_t = 8;
    anim = setInterval(function () { 
        
        if(anim_t !=0){
            anim_t = anim_t-1;
        }
        else {
        }
       
    }, 1000);
    myvar = setInterval(function () { 
        
        if(t!=-1){
            document.getElementById('timer').innerHTML = t + "";
            t=t-1;
        }
       
    }, 500);
    document.onkeydown = function (e) 
    {
        return true;
    }
}

window.onload = function () { 
    
    var ad = t + 8;
    var player1 = document.getElementById('p1');
    var player2 = document.getElementById('p2'); 
    var letter_a = 97;
    var letter_s = 115;
    var letter_d = 100;
    var number_1 = 49;
    var number_2 = 50;
    var number_3 = 51; 
    var fight = 13;
    var reset = 114;
    var health_bar_player1 = 5;
    var health_bar_player2 = 5;
    var p1_choice_pic = "";
    var p2_choice_pic = "";
    var time = 0;
    var time2 = 0;
    document.getElementById('attack_p1').style.visibility = "hidden";
    document.getElementById('attack_p2').style.visibility = "hidden";
    //hide game over display
    document.getElementById('game_over').style.visibility = "hidden";
    //hide reset button
    document.getElementById('reset').style.display = "none";
    document.getElementById('p1').style.display = "none";
    document.getElementById('p2').style.display = "none";
    
    var t = 60;
    var myvar = setInterval(function(){ 
        if(t!=-1){
            
            document.getElementById('timer').innerHTML = t + "";
            t=t-1;
        }
        else {

            clearInterval(myvar);
            alert('TIMES UP!');
            if (health_bar_player1 > health_bar_player2) {
                //alert('PLAYER 1 WIN!');
                document.getElementById('winner').innerHTML = "PLAYER 1 WINS!";
                document.getElementById('winner_pic').src = "PIC/p1.gif";
            }
            if (health_bar_player1 < health_bar_player2) {
               // alert('PLAYER 2 WIN!');
                document.getElementById('winner').innerHTML = "PLAYER 2 WINS!";
                document.getElementById('winner_pic').src = "PIC/p2.gif";
            }
            else if (health_bar_player1 == health_bar_player2){
               // alert('DRAW!');
                document.getElementById('winner').innerHTML = "DRAW!";
            }
            document.getElementById('game_over').style.visibility = "visible";
            //disable the keyboard
            window.onkeypress = function onKeyPress(event) {   
                event.preventDefault();
            }
            
        }
    
    }, 500);
    //to load the random pic of rock, scissor and paper
    document.getElementById('selected_choice1').src = "PIC/random_pic.gif";
    document.getElementById('selected_choice2').src = "PIC/random_pic.gif";

    
    window.onkeypress = function (gfg) {
        if (gfg.keyCode == letter_a) {
            player1.value = "rock";
            p1_choice_pic = "PIC/rock.png";
            document.getElementById('selected_choice1').src = "PIC/thinking.gif";
        }
        else if (gfg.keyCode == letter_s) {
            player1.value = "scissor";
            p1_choice_pic = "PIC/scissor.png";
            document.getElementById('selected_choice1').src = "PIC/thinking.gif";
        }
        else if (gfg.keyCode == letter_d) {
            player1.value = "paper";
            p1_choice_pic = "PIC/paper.png";
            document.getElementById('selected_choice1').src = "PIC/thinking.gif";
        }
        else if (gfg.keyCode == number_1) {
            player2.value = "rock";
            p2_choice_pic = "PIC/rock.png";
            document.getElementById('selected_choice2').src = "PIC/thinking.gif";
        }
        else if (gfg.keyCode == number_2) {
            player2.value = "scissor";
            p2_choice_pic = "PIC/scissor.png";
            document.getElementById('selected_choice2').src = "PIC/thinking.gif";
        }
        else if (gfg.keyCode == number_3) {
            player2.value = "paper";
            p2_choice_pic = "PIC/paper.png";
            document.getElementById('selected_choice2').src = "PIC/thinking.gif";
        }
        /*else if (gfg.keyCode == reset) {
            player1.value = "";
            player2.value = "";
            document.getElementById('ins').style.display = "none";
            document.getElementById('reset').style.display = "none";
            document.getElementById("selected_choice1").src = "PIC/random_pic.gif";
            document.getElementById("selected_choice2").src = "PIC/random_pic.gif";
            var ad = 60 - t;
            t = t + ad;

            
        }*/
        
        
        //to check the input of player1 and player2
        if (player1.value === "" || player1.value === undefined) {
        }
        else {
            if (player2.value === "" || player2.value === undefined) {
            }
            else {
                   
                document.getElementById('reset').style.display = "none";
                document.getElementById('ins').style.display = "block";
                if (player1.value != "" || player1.value != undefined && player2.value != "" || player2.value != undefined) {
                    document.getElementById('ins').innerHTML = "PRESS 'ENTER' TO FIGHT!";
                }
                if (gfg.keyCode === fight) {
                    //player1.innerHTML = player1.value;
                    //player2.innerHTML = player2.value;
        
                    var player = player1.value + player2.value;
                    var rock_rock = "rockrock";
                    var rock_scissor = "rockscissor";
                    var rock_paper = "rockpaper";
                    var scissor_rock = "scissorrock";
                    var scissor_scissor = "scissorscissor";
                    var scissor_paper = "scissorpaper";
                    var paper_rock = "paperrock";
                    var paper_scissor = "paperscissor";
                    var paper_paper = "paperpaper";
                    
                    if (player == rock_rock || player == scissor_scissor || player == paper_paper) {
                        player1.value = "";
                        player2.value = "";
                        alert('draw');
                        document.getElementById('selected_choice1').src = p1_choice_pic;
                        document.getElementById('selected_choice2').src = p2_choice_pic;
                        //changing the color of the background
                        document.getElementById('selected_choice1').style.backgroundColor = "black";
                        document.getElementById('selected_choice2').style.backgroundColor = "black";
                        
                    }
                    else if (player == rock_scissor || player == scissor_paper || player == paper_rock) {
                        player1.value = "";
                        player2.value = "";
                        alert('player1 win!');
                        health_bar_player2--;
                        
                        time = 2;
                        setInterval(function myAttack1() {
                            if (time != -1) {
                                document.getElementById('attack_p2').style.visibility = "visible";
                                //document.getElementById('character2').style.visibility = "hidden";    
                                time=time-1;
                            }
                            else {
                                document.getElementById('attack_p2').style.visibility = "hidden";
                                //document.getElementById('character2').style.visibility = "visible";
                            }
                        }, 750);

                        document.getElementById('selected_choice1').src = p1_choice_pic;
                        document.getElementById('selected_choice2').src = p2_choice_pic;
                        //changing the color of the background
                        document.getElementById('selected_choice1').style.backgroundColor = "black";
                        document.getElementById('selected_choice2').style.backgroundColor = "black";

                        if (health_bar_player2 == 4) {
                            document.getElementById('box-6').style.backgroundColor = "white";
                        }
                        else if (health_bar_player2 == 3) {
                            document.getElementById('box-7').style.backgroundColor = "white";
                        }
                        else if (health_bar_player2 == 2) {
                            document.getElementById('box-8').style.backgroundColor = "white";
                            document.getElementById('box-9').style.backgroundColor = "orange";
                            document.getElementById('box-10').style.backgroundColor = "orange";
                        }
                        else if (health_bar_player2 == 1) {
                            document.getElementById('box-9').style.backgroundColor = "white";
                            document.getElementById('box-10').style.backgroundColor = "red";
                        }
                        else if (health_bar_player2 == 0) {
                            document.getElementById('box-10').style.backgroundColor = "white";
                            clearInterval(myvar);
                            //to show the game winner and play again question
                            document.getElementById('game_over').style.visibility = "visible";
                            document.getElementById('winner').innerHTML = "PLAYER 1 WINS!";
                            //winner gif pic
                            document.getElementById('winner_pic').src = "PIC/p1.gif";
                            //disable the keyboard
                            window.onkeypress = function onKeyPress(event) {   
                                event.preventDefault();
                            }
                        }
                        
                    }
                    if (player == rock_paper || player == scissor_rock || player == paper_scissor) {
                        player1.value = "";
                        player2.value = "";
                        alert('player2 win!');
                        health_bar_player1--;
                        
                        time2 = 2;
                        setInterval(function myAttack2() {
                            if (time2 != -1) {
                                document.getElementById('attack_p1').style.visibility = "visible";
                                document.getElementById('character1').style.visibility = "hidden";    
                                time2=time2-1;
                            }
                            else {
                                document.getElementById('attack_p1').style.visibility = "hidden";
                                document.getElementById('character1').style.visibility = "visible";
                            }
                        }, 750);
                        document.getElementById('selected_choice1').src = p1_choice_pic;
                        document.getElementById('selected_choice2').src = p2_choice_pic;
                        //changing the color of the background
                        document.getElementById('selected_choice1').style.backgroundColor = "black";
                        document.getElementById('selected_choice2').style.backgroundColor = "black";
                        if (health_bar_player1 == 0) {
                            document.getElementById('box-1').style.backgroundColor = "white";
                            t = 0;
                            clearInterval(myvar);
                            //to show the game winner and play again question
                            document.getElementById('game_over').style.visibility = "visible";
                            document.getElementById('winner').innerHTML = "PLAYER 2 WINS!";
                            //winner gif pic
                            document.getElementById('winner_pic').src = "PIC/p2.gif";
                            //disable the keyboard
                            window.onkeypress = function onKeyPress(event) {   
                                event.preventDefault();
                            }
                        }
                        else if (health_bar_player1 == 1) {
                            document.getElementById('box-2').style.backgroundColor = "white";
                            document.getElementById('box-1').style.backgroundColor = "red";
                        }
                        else if (health_bar_player1 == 2) {
                            document.getElementById('box-3').style.backgroundColor = "white";
                            document.getElementById('box-2').style.backgroundColor = "orange";
                            document.getElementById('box-1').style.backgroundColor = "orange";
                        }
                        else if (health_bar_player1 == 3) {
                            document.getElementById('box-4').style.backgroundColor = "white";
                        }
                        else if (health_bar_player1 == 4) {
                            document.getElementById('box-5').style.backgroundColor = "white";
                            
                        }
                        
                    }
                    else {
                        player1.value = "";
                        player2.value = "";
                   
                    }
                    document.getElementById('ins').style.display = "none";
                    document.getElementById('reset').style.display = "block";

                    document.onkeydown = function (e) 
                    {
                        return false;
                    }
                }//end of fight condition
               
            }
        }
        
        
        
        
    }
    
    
};



