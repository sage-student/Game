let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const genComputerchoice=()=>{
const options=["rock", "paper", "scissors"];
const randIdx=Math.floor(Math.random()*3);
return options[randIdx];
};
const drawGame=()=>{
    msg.innerText="Game is drawn ! Please play again";
    msg.style.backgroundColor="black";
    
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        userScorePara.style.color="#a83232";
        msg.innerText=`You win! your ${userChoice} beats computer ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        compScorePara.style.color="#5b0580";
        msg.innerText=`You Lose! computer ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
const playGame=(userChoice)=>{
    console.log("user choice is=", userChoice);
    //Generate computer choice->modular approach
    const compChoice=genComputerchoice();
    console.log("computer choice is=",compChoice);
    if(userChoice===compChoice){
        //Draw Game
        drawGame();
    }else{
        let userWin=true;
        if(userWin==="rock"){
            //scissors ,paper
            userWin=compChoice==="paper" ?false:true;
        }else if(userChoice==="paper"){
            //rock, scissors
            userWin=compChoice==="scissors" ?false:true;

        }else {
            //rock, paper
            userWin=compChoice==="rock" ?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    });

});
