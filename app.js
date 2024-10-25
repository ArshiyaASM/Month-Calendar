const month = document.querySelector("#month")
const fullDate = document.querySelector(".fullDate")
const days = document.querySelector(".days")



const months = [
    "Junuary",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]


const currentDate = new Date();
const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
const firstDay = new Date(currentDate.getFullYear() , currentDate.getMonth(), 1).getDay() - 1;

month.innerHTML = months[currentDate.getMonth()];
fullDate.innerHTML = currentDate.toDateString();


let day = "";

for(let i = firstDay; i > 0; i--){
    day += `<div class='empty'></div>`;
}
for(let i = 1 ; i <= lastDay ; i++){
    if(i === currentDate.getDate()){
        day += `<div class='today'>${i}</div>`;
    }else {
        day += `<div>${i}</div>`
    }
}

days.innerHTML = day;