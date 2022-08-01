const myApp = document.querySelector('.myApp');
const nameDays = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];

const boxNameDays = document.createElement('div');
const weekBox = document.createElement('div');
boxNameDays.classList.add('boxNameDays');
myApp.classList.add('myApp');
weekBox.classList.add('weekBox');
let daysNb=1;
let itemDays = 31;

if (itemDays % 7){
    let btn = document.createElement('div');
    btn.classList.add('backgroundApp');
    for (let i = 1; i <= btn; i++ ){

            myApp.appendChild(btn);
            btn.innerHTML = daysNb++;
    }
        // for (let counter=1; counter < itemDays; counter++) {
        // }
        // btn.appendChild(weekBox);
} else {
    console.log('not work');
}

function renderCalendar(){
    // showNameDays();
}
// function showNameDays() {
//     for (let i = 0; i <= nameDays.length; i++) {
//         const el = document.createElement('div');
//         el.classList.add('item-name');
//          for (let j = 0; j < i; j++) {
//                 myApp.appendChild(boxNameDays);
//                 boxNameDays.appendChild(el);
//                 // el.innerHTML = nameDays[j];
//             }
//         }
//         generateSquareMonth();
// }

// function generateSquareMonth() {
//     for( let i = 0; i < itemDays; i++) {
//         let btn = document.createElement('button');
//         btn.classList.add('backgroundApp');
//         for (let counter=1; counter < itemDays; counter++) {
//             myApp.appendChild(btn);
//         }
//         btn.innerHTML = daysNb++;
//     } 
// }
// generateSquareMonth();

renderCalendar();



///////////////////////////
//////////////////////////
//////////////////////////
let myApp = document.querySelector(".myApp");
let iloscDniwMiesiacu = 31;

let nextMonth = document.createElement('button');
let prevMonth = document.createElement('button');

prevMonth.innerHTML = 'Poprzedni miesiąc';
nextMonth.innerHTML = 'Następny miesiąc';

myApp.appendChild(prevMonth);
myApp.appendChild(nextMonth);

const nameDays = [
  "Poniedziałek",
  "Wtorek",
  "Środa",
  "Czwartek",
  "Piątek",
  "Sobota",
  "Niedziela",
];

const myDate = new Date();
const boxNameDays = document.createElement("div");
boxNameDays.classList.add("boxNameDays");

let divMain = document.createElement("div");
divMain.style.backgroundColor = "green";
divMain.style.width = "300px";
divMain.style.height = "300px";
let divSeven = document.createElement("div");
let testDiv = document.createElement("div");

let iloscDni = 31;
let oneDay = 1;
let weekBox;

function showNameDays() {
  for (let i = 0; i <= nameDays.length; i++) {
    const el = document.createElement("div");
    el.classList.add("item-name");
    for (let j = 0; j < i; j++) {
      myApp.appendChild(boxNameDays);
      boxNameDays.appendChild(el);
      el.innerHTML = nameDays[j];
    }
  }
}
showNameDays();

function getOneDay(dayNumber) {
    let btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerHTML = dayNumber;
    btn.setAttribute('value', dayNumber);
    btn.addEventListener('click', function(event) {
            console.log('kliknięta1 wartość to: ', event.target.value);
            console.log(dayNumber);
        });
        return btn;
}
function showCurrentMonthDays() {
      let divMain = document.createElement("div");
      divMain.classList.add("divMain");
      myApp.style.backgroundColor = "yellow";
      myApp.appendChild(divMain);
    
      for (let i = 1; i <= iloscDni; i++) {
        divMain.appendChild(getOneDay(i));
       
        // console.log('kliknięta wartość to: ', btn.value);
      }
}
showCurrentMonthDays();

function nextMonthButton() {
    // console.log('testtt: ', time);
    days();
}
function prevMonthButton() {
}

nextMonth.addEventListener('click', nextMonthButton);
prevMonth.addEventListener('click', prevMonthButton);
