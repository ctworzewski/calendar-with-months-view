const myApp = document.querySelector('.myApp');
// let numberDays = document.createElement('span');
const nameDays = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];


// za zadanie muszę wyświetlić  nazwy dni tygodnia w DOM
const boxNameDays = document.createElement('div');
for (let i = 0; i < nameDays; i++) {
    boxNameDays[i].innerHTML = nameDays[i];
    
}
myApp.appendChild(boxNameDays);
myApp.style.width = '600px';
myApp.style.height = '600px';
let daysNb=1;
let itemDays = 31;
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
        // console.log(i)
    btn.addEventListener('click', function() {
        console.log(btn.value);
    });
    }
    
}



generateSquareMonth();




