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