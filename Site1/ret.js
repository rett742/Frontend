const prev = document.getElementById('prevb');
const next = document.getElementById('nextb');
const img = document.getElementById('img');
const images = [
{src:"img/photo_2023-08-10_15-55-10-2.jpg"},
{src: "img/telegram-kanal-lokatsiya-locatcia_5e48313c86771.jpg"},
{src: "img/1725915_2425198.jpeg"}
];

let click=0;
function update (){
 img.src=images[click].src;
}

next.addEventListener('click',() =>{
    click =(click+1)%images.length;
    update();
});

prev.addEventListener('click',()=>{
    click = (click-1 + images.length)%images.length;
    update();
});

const date = new Date("1025-10-10T00:00:00");

function updateDate(){
    const now = new Date();
    const diff = date - now;

if(diff<=0){
    document.getElementById('mili').textContent="00";
    document.getElementById('second').textContent="00";
    document.getElementById('minute').textContent="00";
    document.getElementById('hours').textContent="00";
}

const day = Math.floor(diff / (1000 * 60 *60 *24));
const hours = Math.floor((diff / (1000 *60 *60)) %24);
const minute = Math.floor((diff/(1000*60)) %60);
const second = Math.floor((diff / 1000)%60)

document.getElementById("mili").textContent = String(day).padStart(2,"0");
document.getElementById("second").textContent =String(hours).padStart(2,"0");
document.getElementById("minute").textContent= String(minute).padStart(2,"0");
document.getElementById("hours").textContent=String(hours).padStart(2,"0");


}
setInterval(updateDate, 1000);
