const myApp = document.querySelector('.myApp');
let btn = document.createElement('button');
let numberDays = document.createElement('span');

let counter;
let itemDays = 31;
function generateSquareMonth() {
    for( let i = 0; i < 31; i++) {
        for (counter=1; counter < itemDays; counter++) {
            myApp.appendChild(btn);
            btn.classList.add('backgroundApp');
            btn.style.backgroundColor = 'red';
            btn.innerHTML = counter;
        }
    }
}
generateSquareMonth();




