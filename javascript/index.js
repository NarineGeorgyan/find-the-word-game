const gameContainer = document.getElementById("game-container");
const boardContainer = document.querySelector(".board-container");
const keyArray = ["ա","բ","գ","դ","ե","զ","է","ը","թ","ժ","ի","լ","խ","ծ","կ","del","հ","ձ","ղ","Ճ","մ","յ","ն","շ","ո","չ","enter","պ","ջ","ռ","ս","վ","տ","ր","ց","ի","փ","ք","օ","ֆ"]
const keyBoardContainer = document.querySelector(".keyboard-container");
const boardContainerArray = [];
let guessArray = [];
let wordArray =["կարագ", "կապիկ", "մատիտ","նամակ","արծիվ"]
let currentWord = wordArray[Math.floor(Math.random() * wordArray.length)].toUpperCase();
const guessWordArray = currentWord.split('');
console.log(currentWord);
let isWin = false;
 function createBoard(){    
     for (let i=0; i<25; i++){ 
        const boardCell = document.createElement('div');
        boardCell.setAttribute('id',i);
        boardCell.classList.add("board-cell");
        boardContainer.appendChild(boardCell);
        boardContainerArray.push(boardCell);   
    }
 }
 createBoard();

 let i=0;
 let max=5;
 keyArray.forEach((val)=>{
    const keyCell = document.createElement('button');
    keyCell.classList.add("btn-key");
    keyCell.innerText = val;
    keyCell.setAttribute('id',val.toUpperCase());
    keyCell.innerText = val.toUpperCase();
    keyCell.addEventListener('click',(event)=>{
    if(event.target.id === "DEL"){
           if (i>0){ 
                    i--;
                    boardContainer.children[i].innerText=" ";
            
            }
            }else if(event.target.id === "ENTER"){
                if(i < max){
                    
                    document.getElementById("game-over").style.display ="inline-block"
                        document.getElementById("game-over").textContent="Տառերի քանակը 5ից քիչ չի կարող լինել"
                    setInterval(()=>{
                        document.getElementById("game-over").style.display ="none"
                    }, 2000)
                   
               
                }else if(i===max){
                    max+=5;
                    update();
                    gameOver();
                }
            
            }else{
                if(i<max){
                    boardContainer.children[i].innerText = event.target.id;
                    boardContainer.children[i].classList.add("k");
                    i++;
                  
                  
                }
            
            }       
        })
           
       keyBoardContainer.appendChild(keyCell);
    })

function update() { 
   let counter = 0;
   document.querySelectorAll(".k").forEach((cell,j)=>{
        let letter = cell.innerText;
        let key = document.getElementById(letter);
        if(i<max){
            if(letter === currentWord[j]){
                if(key.classList.contains("board-cell-yellow")){
                    key.classList.remove("board-cell-yellow")
                    key.classList.add("board-cell-green")
                }else{
                    key.classList.add("board-cell-green");
                }
                cell.classList.add("board-cell-green");
                cell.classList.remove("k");
                counter ++;
            }else if(currentWord.includes(letter)){
                           
                if(key.classList.contains("board-cell-green")){
                    key.classList.add("board-cell-green");
                }else{
                    key.classList.add("board-cell-yellow");
                }
                cell.classList.add("board-cell-yellow");
                cell.classList.remove("k");
                          
            }else{
                cell.classList.add("board-cell-grey");
                key.classList.add("board-cell-grey");
                cell.classList.remove("k")
            } 
        if(counter === currentWord.length){
            isWin=true;
        }
    }
  
    })
}
function gameOver(){
    if(isWin){
         document.getElementById("game-over").style.display ="inline-block"
         document.getElementById("game-over").textContent="Congradulation!!! you are win"
    }
   if(!isWin && max>25){
    document.getElementById("game-over").style.display ="inline-block"
    document.getElementById("game-over").textContent=currentWord
   }

}




