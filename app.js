const squares=document.querySelectorAll('.square');
const mole= document.querySelector('.mole');
const timeLeft= document.querySelector('#time-left');
const score=document.querySelector('#score');

let result=0;
let hitPosition;
let currentTime=60;
let timeId= null;

function randomSqaure(){
  squares.forEach(square=>{
    square.classList.remove('mole');
  });
  let randomSqaure= squares[Math.floor(Math.random()*9)];
  randomSqaure.classList.add('mole');
  hitPosition= randomSqaure.id;
}

squares.forEach(square=>{
  square.addEventListener('mousedown', ()=>{
    if(square.id===hitPosition){
      result++;
      score.textContent=result;
      hitPosition= null;
    }
  })
})

function moveMole(){
  timeId=setInterval(randomSqaure, 700);
}

moveMole()

function countDown(){
  currentTime--;
  timeLeft.textContent = currentTime;

  if(currentTime===0){
    clearInterval(countDownTimer);
    clearInterval(timeId);
    alert('Game Over! Your final result is:'+ result);
  }
}
let countDownTimer= setInterval(countDown, 1000)