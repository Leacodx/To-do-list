
//decalre&&array

const AddBtn = document.querySelector('#BtnClick');
const theList = document.querySelector("#listBorn");
const input = document.querySelector("#inputt1");
const alertt = document.querySelector("#showalert");
const Questdone = document.querySelector("#DoneQuest");
const NotDone = document.querySelector("#TotalToDo");
let counter = 0;
let counterUndone = 0;
const text = input.value;
const Questlist = []


AddBtn.addEventListener("click", AddQuest);
// first function
function AddQuest() {
  

//list and how everything started, declare text and put value&& trigger for alert
 const text = input.value;
  if(text.length === 0) { alertt.textContent = "put your quest pls";
           return;

          }
          alertt.textContent="";
   const lista = document.createElement('li');
    theList.appendChild(lista);
   
     const mark = document.createElement("span");
       mark.textContent = text;
          lista.appendChild(mark);

      const trash = document.createElement("button");
      trash.innerHTML = "&#128465;";
      trash.classList.add("trashme");
       lista.appendChild(trash);
         const objectlist = {};
         //array going to be here
            objectlist.quest = text;
           objectlist.klar = false;
        Questlist.push(objectlist);
       counterUndone++;
        //uppdate the counter
        NotDone.textContent= `${counterUndone}  Total Quest`;
      input.value =("");
        
   //for the trash&event&click
    trash.addEventListener("click",
       function(){theList.removeChild(lista); resetcounters();
        //Uppdate for total Quest 
       counterUndone--; NotDone.textContent= `${counterUndone}  Total Quest`; let index =  Questlist.indexOf(text); Questlist.splice(index, 1)
       
       }
        ) 

//second function for add and remove style include counting&&false o true= objectlist counts
    mark.addEventListener(
      "click", function (){
        if(mark.classList.contains("Style")){mark.classList.remove("Style"); 
        counter--; objectlist.klar =false} 
        
       else
        {mark.classList.toggle("Style"); counter++; objectlist.klar = true; }
       
         Questdone.textContent = `${counter}  Completed Quest`;  NotDone.textContent= `${counterUndone}  Total Quest`; 
    
         
         
} ) 
      
      //reset count after trigger trashfunction for uppdate >)
    function resetcounters(){if(mark.classList.contains("Style")){counter--; return  Questdone.textContent = `${counter}  Completed Quest`}}
//third function to check

     
       
        
       
    
  
    

    }