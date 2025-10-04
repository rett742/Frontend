
const butt = document.getElementById('prevbutt');
const but = document.getElementById('nexbut');
const ret = document.querySelector('.imgw');

const images = [
"https://slidemodel.com/wp-content/uploads/FF0332-01-artificial-intelligence-powerpoint-template-6.jpg",
"https://static5.tgcnt.ru/posts/_0/51/5112e15c74fbf290ce70243f99932770.jpg",
"https://i.pinimg.com/originals/fe/b9/ed/feb9edfdf170d9eaad31101e31b746b7.jpg",
];
let click = 0;

function uppdate() {
    ret.src = images[click];
}

but.addEventListener('click', () => {
    click = (click - 1 + images.length) % images.length;
    uppdate();
});

butt.addEventListener('click', () => {
    click = (click + 1) % images.length;
    uppdate();
});

const bt = document.getElementById('bt');
const link =document.querySelectorAll("a");

let clik=0;

bt.addEventListener('click',() =>{
clik++;
if(clik%2==1){
 document.body.style.background="black";
 document.body.style.color="white";
 bt.style.background="white";
 link.forEach(el =>el.style.color="black");
}else{
    document.body.style.background="rgba(67, 32, 100, 0.541)";
     bt.style.background="black";
      link.forEach(el =>el.style.color="white");

}
})