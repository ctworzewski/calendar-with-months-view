
let myApp = document.querySelector('.myApp');
let iloscDniwMiesiacu = 31;

const nameDays = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];
const boxNameDays = document.createElement('div');
// boxNameDays.classList.add('boxNameDays');
// const weekBox = document.createElement('div');
boxNameDays.classList.add('boxNameDays');

let divMain = document.createElement('div');
divMain.style.backgroundColor = 'green';
divMain.style.width = '300px';
divMain.style.height = '300px';
let divSeven = document.createElement('div');
let testDiv = document.createElement('div');

let iloscDni = 31;
let oneDay = 1;
let weekBox;

function showNameDays() {
    for (let i = 0; i <= nameDays.length; i++) {
        const el = document.createElement('div');
        el.classList.add('item-name');
            for (let j = 0; j < i; j++) {
                myApp.appendChild(boxNameDays);
                boxNameDays.appendChild(el);
                el.innerHTML = nameDays[j];
            }
     }
}

showNameDays();
// let counter = 1;
for (let i = 1; i <=1; i++) {
    let divMain = document.createElement('div');
    divMain.classList.add('divMain');
    myApp.style.backgroundColor = 'yellow';
    myApp.appendChild(divMain);

    for (let i =1; i <= iloscDni; i++) {
        let btn = document.createElement('button');
        btn.classList.add('btn');        
        divMain.appendChild(btn);
        btn.innerHTML = oneDay++;
    }
}


