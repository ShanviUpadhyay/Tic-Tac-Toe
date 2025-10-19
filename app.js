  let boxes = document.querySelectorAll(".box");
  let msgContainer = document.querySelector(".msgContainer");
  let msg = document.querySelector("#msg");
  let resetBtn = document.querySelector("#resetBtn");
  let newBtn = document.querySelector("#newBtn");
  



  let turnO = true;
  let count = 0;

  let winPatterns = [[0, 1, 2],
                     [3, 4, 5],
                     [6, 7, 8],
                     [0, 3, 6],
                     [1, 4, 7],
                     [2, 5, 8],
                     [0, 4, 8],
                     [2, 4, 6]];
                

    boxes.forEach((box)=>{
        box.addEventListener("click", ()=>{
            if(turnO){
                box.classList.add("color");
                box.innerText="O";
                turnO = false;
            }
            else{
                box.classList.remove("color");
                box.innerText="X";
                turnO = true;
            }
                count++;
                box.disabled = true;
                checkWinner(count);
        })
    });

    const drawGame = ()=>{
            msg.innerText = "Game was draw. Play Again";
            msgContainer.classList.remove("hide");
        
    }

    const checkWinner =(count)=>{
        for(let pattern of winPatterns){
            let postn1Val = boxes[pattern[0]].innerText;
            let postn2Val = boxes[pattern[1]].innerText;
            let postn3Val = boxes[pattern[2]].innerText;

            if(count === 9){
                if(postn1Val != postn2Val && postn2Val != postn3Val){
                    drawGame();
                    count = 0;
                }
            }
            else if(postn1Val !="" && postn2Val !="" && postn3Val != ""){
                if(postn1Val == postn2Val  && postn2Val == postn3Val){
                    showWinner(postn1Val);
                    count = 0;
                }
            }
        }
       
    };


    const showWinner = (Winner)=>{
        msg.innerText=`Congratulations! Winner is ${Winner} `;
        msgContainer.classList.remove("hide");
        disableButtons();
       
    };

    const disableButtons = () =>{
        for(box of boxes){
            box.disabled = true;
        }
    };

    const EnableButtons = ()=>{
        for(box of boxes){
            box.disabled = false;
            box.innerText= "";
        }
    };

    const resetGame = ()=>{
        turnO = true;
        count = 0;
        EnableButtons();
        msgContainer.classList.add("hide");
        
    };

    resetBtn.addEventListener("click", resetGame);
    newBtn.addEventListener("click", resetGame);

    


