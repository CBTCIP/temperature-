
let level=0;
let gameseq=[];
let userseq=[];
let start=false;
let submit=document.querySelector(".submit");
let btnn=["btnr","btng","btnb","btny"];

let h2=document.querySelector(".h2");
let audio=document.querySelector(".audio");
let clik=document.querySelector(".clik");
let over=document.querySelector(".over");
over.muted="true";
let score=document.querySelector(".score");
let scorec =0;
let go=document.querySelector(".go");
document.addEventListener("keypress",()=>{
    
    if(start==false){
        start=true;
        levelup();
        if(audio.muted==" "){
            ;
        }
        else{
            audio.muted="false";}
    }
});

function flash(btnf){
  btnf.classList.add("flashh");
  setTimeout(() => {
    btnf.classList.remove("flashh");
  }, 800);  
  console.log(gameseq);
  console.log(userseq);
}

function btnflash(btnf){
    btnf.classList.add("flashh");
    setTimeout(() => {
      btnf.classList.remove("flashh");
    }, 100);
    sound();
}

function levelup(){
    level++;
    h2.innerText=`Level ${level}`;
    rand=Math.floor(Math.random()*4);
    randc=btnn[rand];
    btnf= document.querySelector(`.${randc}`);
   console.log(btnf);
   gameseq.push(randc);
    flash(btnf);
    userseq=[];
    let all=document.querySelectorAll(".btn");
for(btn of all){
    btn.addEventListener("click",pres);
}
}

submit.addEventListener("click",check);

function pres(){
    sound();
    btn=this;
    btnflash(btn);
    colo=btn.getAttribute("id");
    userseq.push(colo);
   
}

function check(){
    console.log("check");
    let i=0;let c=1;
    for(elemen of userseq){
        
        if(elemen==gameseq[i]){
            ;
        }
        else{
            console.log("fail");
            gameover();
            c=0;
            break;
        }
        i++;
    }
    let j=0;
    for(ele of gameseq){
        
        if(ele==gameseq[j]){
           ;
        }
        else{
            c=0;
            gameover();
            break;
        }
        j++;
    }
    if(c==1){
        scorec+=10;
        score.innerText=`Score is : ${scorec}`;
        levelup();
    }else{
        reset();
    }
}

let h1=document.querySelector("h1");


function gameover(){
    audio.muted="true";
    over.muted="false";
    go.style.visibility="visible";
    reset();
}

function sound(){
    clik.muted="false";
    setTimeout(() => {
        clik.muted="true";
    }, 2000);
}

function reset(){
    start="false";
    gameseq=[];
    userseq=[];
    level=0;
}
