const gameContainer = document.getElementById("game-container");
const boardContainer = document.querySelector(".board-container");
const keyArray = ["ա","բ","գ","դ","է","ը","թ","ժ","ի","լ","խ","ծ","կ","del","հ","ձ","ղ","Ճ","մ","յ","ն","շ","ո","չ","enter","պ","ջ","ռ","ս","վ","տ","ր","ց","ի","փ","ք","օ","ֆ"]
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
    keyCell.setAttribute('id',val);
    keyCell.innerText = val.toUpperCase();
    keyCell.addEventListener('click',(event)=>{
    if(event.target.id === "del"){
           if (i>0){ 
                    i--;
                    boardContainer.children[i].innerText=" ";  
             }
            }else if(event.target.id === "enter"){
                if(i < max){
                    document.getElementById("game-over").style.display ="inline-block"
                        document.getElementById("game-over").textContent="Տառերի քանակը 5ից քիչ չի կարող լինել"
                    setInterval(()=>{
                        document.getElementById("game-over").style.display ="none"
                    }, 2000)
                   
               
                }
                max+=5;
                update();
                gameOver();
                
            }else{
                if(i<max){
                    boardContainer.children[i].innerText = event.target.id;
                    boardContainer.children[i].classList.add("k");
                    i++;
                    checkkey(event.target);
                }
            
            }       
        })
           
       keyBoardContainer.appendChild(keyCell);
    })

function update() {
   
   let counter = 0;
   document.querySelectorAll(".k").forEach((cell,j)=>{
        let letter = cell.innerText;
        if(i<max){
            if(letter === currentWord[j]){
                cell.classList.add("board-cell-green");
                cell.classList.remove("k");  
                counter ++;
            }else if(currentWord.includes(letter)){
                cell.classList.add("board-cell-yellow");
                cell.classList.remove("k");
             
            }else{
                cell.classList.add("board-cell-grey");
                cell.classList.remove("k")
            } 
        if(counter === currentWord.length){
            isWin=true;
        }
    }
  
    })
}
function checkkey(event){
    let letter = event.id.toUpperCase();
  
    for(let j = 0; j < 5; j++ ){
        if(letter === currentWord[j]){
            event.classList.add("board-cell-green");
          
        }else if(currentWord.includes(letter)){
            event.classList.add("board-cell-yellow");
        }else{
            event.classList.add("board-cell-grey");
     
        } 
    }
   

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




