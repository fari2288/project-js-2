let h1 = document.querySelector('h1');
let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let reset = document.querySelector('#reset');
const distance=document.querySelector('#distance');
let sec = 0;
let min = 0;
let hrs = 0;
let t;

function tick() {
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        distance.innerHTML=min+'<br>'+'mile';
        if(min >=2){
            distance.innerHTML=min+'<br>'+'miles';
        }
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
}

function add() {
    tick();
    h1.textContent = (hrs > 9 ? hrs : "0" + hrs) +
        ":" + (min > 9 ? min : "0" + min) +
        ":" + (sec > 9 ? sec : "0" + sec);
    timer();
}

function timer() {
    t = setTimeout(add, 1000);
}


timer();
start.onclick = timer;
stop.onclick = function() {
    clearTimeout(t);
}
reset.onclick = function() {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}

const settings=document.querySelector('.fa-solid');
settings.addEventListener('click', setWeight)
function setWeight(){

const container=document.querySelector('#container');
const newElement=document.createElement('div');
newElement.innerHTML='<div id="weight">Введите Ваш вес: <input type="text" id="input" /></div>'
container.append(newElement)


}

const weight=document.querySelector('#weight')
function countCalories(){





}