// document.addEventListerner('DOMContentLoaded', () => {

// })


//variable 
var x=2;
x=8;
var x='s';

//output
console.log(x);
console.log('Hello console');


//function
function printName() {
    console.log('Sam');
}

printName();

const z='const';
//cant be updated
// z='h';
console.log(z);

function find() {
    var y=4;
    {
        let y=6;
        console.log('Inside loop : '+y);
    }
    //without let print 6
    console.log('Outside : '+y);
}

find();

//exercise 
console.log('exercise');
let count=1;
function increment() {
    return count+=1;
}
console.log(increment());

const name='cake';
function sendText() {
    console.log('Hay '+name+ ' you are sweet')
}

sendText();

//if else

if(2>3){
    console.log('true');
}
else {
    console.log('false');

}

//elef 
a=9;
if(a=='sam'){
    console.log(true);
}
else if(a==2){
    console.log('Its is a number');
}
else{
    console.log('wrong input');
}
