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

let time =myDate.getDate();
function days() {
    for (let i = 1; i <= 1; i++) {
      let divMain = document.createElement("div");
      divMain.classList.add("divMain");
      myApp.style.backgroundColor = "yellow";
      myApp.appendChild(divMain);
      for (let i = 1; i <= iloscDni; i++) {
        let btn = document.createElement("button");
        btn.classList.add("btn");
        divMain.appendChild(btn);
        btn.innerHTML = myDate.getDay();
        btn.addEventListener('click', function() {
            console.log('kliknięta wartość to: ', btn);
            console.log(time);
        })
        // console.log('kliknięta wartość to: ', btn.value);
      }
    }
}
days();

function nextMonthButton() {
  // klasa ?  
  // klasa ?  
  // klasa ?  
  // klasa ?  
  // klasa ?  
  // klasa ?  
  // console.log('testtt: ', time);

    days();
}
function prevMonthButton() {
}

nextMonth.addEventListener('click', nextMonthButton);
prevMonth.addEventListener('click', prevMonthButton);