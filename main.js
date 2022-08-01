const myApp = document.querySelector('.myApp');
const nameDays = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];
const boxNameDays = document.createElement('div');

boxNameDays.classList.add('boxNameDays');
myApp.classList.add('myApp');
let daysNb=1;
let itemDays = 31;
function renderCalendar(){
    showNameDays();
}
function showNameDays() {
    for (let i = 0; i <= nameDays.length; i++) {
        const el = document.createElement('div');
        el.classList.add('item-name');

        for (let j = 0; j < i; j++) {
             for( let i = 0; i < itemDays; i++) {
                let dlWeek = 7;
                if (itemDays === dlWeek){
                    let btn = document.createElement('button');
                }
             }
            myApp.appendChild(boxNameDays);
            boxNameDays.appendChild(el);
            el.innerHTML = nameDays[j];
        }
    }
    generateSquareMonth();
}

function generateSquareMonth() {
    for( let i = 0; i < itemDays; i++) {
        let btn = document.createElement('button');
        btn.classList.add('backgroundApp');
        for (let counter=1; counter < itemDays; counter++) {
            myApp.appendChild(btn);
        }
        btn.innerHTML = daysNb++;
    } 
}

renderCalendar();



