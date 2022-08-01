const myApp = document.querySelector('.myApp');
// let numberDays = document.createElement('span');
const nameDays = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];


// za zadanie muszę wyświetlić  nazwy dni tygodnia w DOM
//Podziału na tygodnie. Najlepiej gdyby dni renderowaly się po 7 dni na tydzień. 1 tydzień = 1 rząd
const boxNameDays = document.createElement('div');
const el = document.createElement('span');
myApp.appendChild(boxNameDays);
boxNameDays.appendChild(el);

for (let i = 0; i < nameDays.length; i++) {
    for (let j = 0; j < i; j++) {

        myApp.appendChild(boxNameDays);
        
        boxNameDays.appendChild(el);
        
        el.innerHTML = nameDays[j];
    }
    
}




myApp.style.width = '600px';
myApp.style.height = '600px';
let daysNb=1;
let itemDays = 31;
function generateSquareMonth() {
    //if ((itemDays >= 1) && (itemDays<=7)) {
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
    //}
    
}



generateSquareMonth();




