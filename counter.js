
let count = 0;

let updateElement = document.querySelector('#count');
let increase = document.querySelector('.increase');
let decrease = document.querySelector('.decrease');
let reset = document.querySelector('.reset');

function updateCount(){
    updateElement.textContent = count;
}

increase.addEventListener('click', ()=>{
    count++
    updateCount()
})
decrease.addEventListener('click', ()=>{
    count--
    updateCount()
})
reset.addEventListener('click', ()=>{
    count = 0;
    updateCount()
})

