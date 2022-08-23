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

const fruit =['apple','banana','mango'];

if(fruit.includes('apple')){
    console.log('Apple is included');
}
else if(fruit.includes('mango') && fruit.includes('banana')){
    console.log('fruit contain more then 2 element');
}
else {
    console.log('what ?');
}

//ternary operater

let isGame=false;

isGame ?console.log('Sorry you lost'):console.log('Carry on playing ');

//Fizz Buzz chalange

console.log('FIZZ BUZZ Challange');
let number=1;

for(let i=number;i<=20;i++){
    if(i%15==0){
        console.log('fizz buzz');
    }
    else if(i%5==0){
        console.log('buzz');
    }
    else if(i%3==0){
        console.log('fizz');
    }
    else{
        console.log(i);
    }
}

let book =['table','books','cat','dog','man'];
for(let i=0;i<book.length;i++){
    console.log(book[i]);
}
