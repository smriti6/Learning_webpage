const hourH =document.getElementById("hour");
const minM=document.getElementById("min");
const secS=document.getElementById("sec");
const amA=document.getElementById("am");

function upclock() {
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="AM";
    if(h>12){
        h=h-12;
        ampm="PM";
    }

    hourH.innerText=h;
    minM.innerText=m;
    secS.innerText=s;
    amA.innerText=ampm;

    setTimeout(()=> {
        upclock();
    },1000)

}
upclock();