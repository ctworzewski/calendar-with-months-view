const myApp = document.querySelector('.myApp');
// let numberDays = document.createElement('span');
const nameDays = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];
const boxNameDays = document.createElement('div');

boxNameDays.classList.add('boxNameDays');
boxNameDays.style.width = '600px';
boxNameDays.style.fontSize = '25px';
// boxNameDays.style.display = 'inline-block';
// boxNameDays.style.marginRight = '40px';


// za zadanie muszę wyświetlić  nazwy dni tygodnia w DOM
//Podziału na tygodnie. Najlepiej gdyby dni renderowaly się po 7 dni na tydzień. 1 tydzień = 1 rząd
// const el = document.createElement('span');
// myApp.appendChild(boxNameDays);
// boxNameDays.appendChild(el);

myApp.style.width = '600px';
myApp.style.height = '600px';
let daysNb=1;
let itemDays = 31;
function renderCalendar(){
    showNameDays();
    generateSquareMonth();
}
function showNameDays() {
    for (let i = 0; i <= nameDays.length; i++) {
        const el = document.createElement('span');
        for (let j = 0; j < i; j++) {
            myApp.appendChild(boxNameDays);
            boxNameDays.appendChild(el);
            boxNameDays.style.marginRight = '40px';
            el.innerHTML = nameDays[j];
        }
    }
}




function generateSquareMonth() {
    for( let i = 0; i < itemDays; i++) {
        let btn = document.createElement('button');
        for (let counter=1; counter < itemDays; counter++) {
            myApp.appendChild(btn);
            btn.classList.add('backgroundApp');
            btn.style.backgroundColor = 'red';
            btn.style.width = '90px';
            btn.style.height = '90px';
            btn.style.fontSize = '50px';
        }
        btn.innerHTML = daysNb++;
    } 
}

renderCalendar();




