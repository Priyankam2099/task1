let totalP1=[]
let totalP2=[]
let winner = document.getElementById("winnerAnnounce")
function randomp1(){
    let total1= document.getElementById('total')
   let num= Math.floor(Math.random()*6+1)
  let ran= document.getElementById('random')
  ran.innerHTML=`${ num}`
  totalP1.push(num)
  let scoreP1 = totalP1.reduce((a,b)=> a+b)
  total1.innerHTML=scoreP1
  if(scoreP1>=50){
    winner.innerHTML = "winner player1"
  }
}

function randomp2(){
    let total1= document.getElementById('TotalP2')
   let num= Math.floor(Math.random()*6+1)
  let ran= document.getElementById('Random')
  ran.innerHTML=`${ num}`
  totalP2.push(num)
  let scoreP2 = totalP2.reduce((a,b)=> a+b)
  total1.innerHTML=scoreP2
  if(scoreP1>=50){
    winner.innerHTML = "winner player2"
  }
}