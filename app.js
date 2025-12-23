let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let msgcontainer = document.querySelector(".msgcontainer");
let newBtn = document.querySelector(".newbtn");
let msg = document.querySelector(".msg");
let container = document.querySelector(".container");


let turn0 = true;

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turn0){
            box.innerText="O";
            turn0 = false;
        }
        else{
            box.innerText="X";
            turn0 = true;
        }

        box.disabled = true;

        checkWinner();
    });
});

const showWinner = (Winner) =>{
    msg.innerText = ` Congratulations!! Winner is ${Winner}`;
    msgcontainer.classList.remove("hide");
    container.classList.add("hide");
    resetBtn.classList.add("hide");
}

const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if( pos1Val !="" && pos2Val !="" && pos3Val !="")
        {
            if(pos1Val === pos2Val && pos2Val === pos3Val)
            {
                console.log("Win");
               showWinner(pos1Val);
            }
        }
    }
};

newBtn.addEventListener("click",() =>{
    for(box of boxes){
        box.innerText="";
        box.disabled = false;
    }
    turn0 = true;
    msg.innerText="";
    msgcontainer.classList.add("hide");
    container.classList.remove("hide");
    resetBtn.classList.remove("hide");
})

resetBtn.addEventListener("click",() =>{
    for(box of boxes){
        box.innerText="";
        box.disabled = false;
    }
    turn0 = true;
})