const countDown = document.createElement("h1");
countDown.innerHTML = 4;
document.body.appendChild(countDown);

var weekday = ["Tuesday","Wednesday","Thursday"];
let d = new Date();
const date = weekday[d.getDay()];

if(weekday[d.getDay()] === weekday[1]){
    countDown.innerHTML = 4 - 1;
}
else if(weekday[d.getDay()] === weekday[2]){
    countDown.innerHTML = 3 - 1;
}
else if(weekday[d.getDay()] === weekday[3]){
    countDown.innerHTML = 2 - 1;
}
else{
    countDown.innerHTML = "bro when!";
}