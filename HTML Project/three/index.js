const bobo=document.querySelector('.face');
// console.log(bobo);
let count=0;

// const f=document.getElementById('face');
function moveBobo() {
    // document.getElementById(".face").style.position=5px;
    count+=50;
    bobo.style.left=count+'px';
    
    // f.style.left=count+'px';
    // console.log('hi');
}

bobo.addEventListener('click',moveBobo);

// while loop
let c=0;
while(c<10) {
    console.log(c+' Wow ');
    c++;
}

//
const bob='sam uncle';

console.log(' " '+bob+' " '+' varible length : '+bob.length);