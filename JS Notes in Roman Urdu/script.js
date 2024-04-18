
// hoisting-variables and functions are hoisted that means their declaration is moved on top of the code
// hoisting and hosting are two completely different things

// var a=12 is converted to 

// var a;  moved to top of code
// a=12;

// this means following code will work
// console.log(a);
// var a=12;
// and is giving undefined (any variable which is not assigned a value returns undefined)

// not defined means no existence
// undefined existence hai but value nhi pta
// console.log(b);
// returns not defined


// two types of js:
// primitive=number,string,null,undefined,bool(jisme bracket nahi hain)
// reference={[()]}(jisme bracket ajae)

// aisi koi bhi value jisko copy kne pr real copy nhi hota blke uska reference pass hojata hai use ham reference value kehte hain

// or jiska copy krne pr real copy hojae to wo value primitive hoti hai 

// primitive: a change nhi hua
// var a=12;
// var b=a;
// b=b+2;

// reference: a change hua
// var a=[12,13];
// var b=a;
// b.pop()

// conditionals
// if(1===1){
//     console.log("hello")
// }else{
//     console.log("sss")
// }

// loops:
// for(var i=25;i<50;i++){
//     console.log(i);
// }
// var i=1;
// while(i<12){
//     console.log(i)
//     i++;    
// }

// functions:
// function hellochlao(a){//a parameter hai
//     for(var i=0;i<a;i++){
//         console.log("hello");
//     }
// }
// hellochlao(2);//or2 argument hai

// arrays:
// var array=['a','b','c'];
// console.log(array);
// push pop shift(pop at beginning of array) unshift(push at beginning of array)
// array.unshift('b');
// console.log(array);
// array.shift();
// console.log(array);
// array.splice(2,1);//1st paramenter: index,2nd parameter:no of values you want to be removed
// console.log(array);

// objects{}
// var obj = {
//     name:"saad",
//     age:19,
//     place:"karachi",
//     method:function(a){
//         for(var i=0;i<a;i++){//use this.age to access age 19
//         console.log("hello")
//         }
//     }
// }
// console.log(obj.method(16));
// 16 dfa print hojaye ga 


// let and const braces scoped(in updated) 
// var (parent)function scoped

// function a(b){
//     for(var i=0;i<10;i++){//var chle ga braces ka bahe let nhi chlega
//    }
//     console.log(i);
// }//prints 10

// a(2);//parameters or arguments aise hi add kiye hain

// alert or console aise features hain jo js ka part nahi hai window object me hain jo ke browser ke pass hoti hai tabhi hum use kr paate hain

// var adds itself to the window object 
// let const do not add themselves to the window objet

// var a=12; a and b apne aap ko window object me add kr dete hain
// var b=12;
// let c=12; c apne aap ko window object me add nhi krta
// const d=12; d bhi nhi

// window object ke lie browser ke console me type kro window or enter kro

// browser gives three things
// window
// stack
// heap

// stack is jis order me code ayega wo usi order me chlayega

// heap:
// variable or data ko processing time me store krne ki jagah
// 1+2+3+4
// 3+3+4 //3 is stored in heap
// 6+4  //6 stored in heap
// 10

// execution context:
// jab bhi function chlayenge function apna khud ka aik imaginary container bna le ga jis me uski 3 cheezen hongi
// 1)variales
// 2)functions inside the parent function
// 3)lexical environment of that function
// yeh jo container hai imaginary ise humexecution context kehte hain

// Lexical Enviroment: 

// function executionContext(){
//     var a=12;
//     function func2(a){
//         var b=13;
//         // a=b+1; can be used here
//         //but yeh wala a copy variable hoga jo ke parent wale a ko affect nahi kr rha

//     // console.log(b);
//     // this console b will also output error because
//     // The console.log(b) statement is within the scope of func2, and once the function completes execution, the variable b is no longer available.
//     // to solve this:
//         return b;
//     }
//         // console.log(b); :
//         // b yhan use nhi hosakhta kiun ke b function me hai or variable (parent) function scoped hota hai isi lie.
//         //error b not defined and prgram stopped i.e did'nt proceed to next step

    
//     console.log(a);// will print a
//     console.log(func2());//now this works fine and prints b
// }

//  executionContext();


// how to copy reference values:

// problem:
// var a=[1,2,3,4,5];
// var b=a;
// b.pop();
// a and b dono ki akhri value pop hogyi

// solution:(all values are COPIED to b)
// var a=[1,2,3,4,5];
// var b=[...a];
// b.pop();
// sirf b ki akhri value pop hogyi

// same for objects:
// var obj1={name:"saad",age:18};
// var obj2={...obj1};
// obj2.name="asad";

// if we did obj2=obj1 it would change both the values
// the two outputs are different now


//  for array of objects objects:
// problem:whi aik jgah change kro toh sab jgah change

// var obj=[{name:"saad",age:18},{name:"asad",age:20}]
// var obj2=obj;
// obj2[1].name="harsh";

// shallow copy:
// var obj=[{name:"saad",age:18},{name:"asad",age:20}]
// var obj2={...obj};
// obj2[1].name="harsh";
// both are same again

// deep copy:(do not change the parents of the element)
// var obj1=[{name:"saad",age:18},{name:"asad",age:20}]
// var obj2 = JSON.parse(JSON.stringify(obj1));
// obj2[1].name="harsh";


// truthy or falsy:
// everything in js is either truthy or falsy
// falsy:
// 0 false undefined null NaN document.all
// apart from these values all are truthy

// test case 1:
// if("saad"){
//     console.log(44);// prints 44
// }else{
//     console.log(22);
// }

// test case 2:..in case of all falsy values will print 22
// if(document.all){
//     console.log(44);
// }else{
//     console.log(22);//prints 22
// }

// for Each:
// sirf array pe chlta hai

// a=[1,2,3,4,5];
// a.forEach(function(val){
//     console.log(val+2);
// });//output is ok now and it prints each number after adding two

// a=[1,2,3,4,5];
// a.forEach(function(val){
//     val+2;
// });
// console.log(a[0]);
// outputs 1 not 3 

// for each kabhi bhi default array me changes nhi krta blke temprary array me krta hai iski wjah  se default array same rehta hai 

// For in:
// objects par loop krne ke lie hota hai for in loop
// var obj={
//     name:"saad",
//     age:23,
//     city:'karachi'
// }
// for(var key in obj){//(var val in obj) val and key are variablename
//     console.log(key,obj[key]);//key is the i of loop in c++
// }
// key arr[key]
// name saad
// age 18
// city karachi

// do while:
// var i=1;
// do{
//     console.log("hekki")
//     i++;
// }while(i<3);


// callback functions:
// jab bhi koi aisa code jo baad me chlta hai aap likhoge
// khunke wo code baad me chlta hai to js ko pta nhi chlta ke woh complete hua ya nhi to isi liye code ki completion pe uss ko btaya jaata hai ke code complete hpgya bhai usse chalado
// yeh btane ka kaam call back ka hai
// code:
// setTimeout(function(){//this is a callack function
//     console.log("hello");
// },3000)
// 3 second baad print horaha hai

// function dedia usko ke jab complete hojae to chla do
// that is callback

// first class functions:
// js ka concept hai aap functions ko use kr skhte hai as a value

// function abcd(a){
//     a();
// }
// abcd(function(){
//     console.log("hey");
// });
//the above case is also a higher order function

// OR

// function abcd(a){
//     var b=function(){
//         console.log(a);
//     };
//     b();
// }
// abcd(12);

//(b)=>function is treated as a variable is called first class functions


// how we can make negative index arrays in js:
// var a=[1,2,3,4,22];//this is an object iska check krlo console pr type of krke
// js isko aise parhti hai:
// a={
//     0:1,
//     1:2,
//     2:3,
//     3:4,
//     4:22
// }

// toh if we want to add value to a negative index we can do that
// var a=[1,3];
// a[-2]=223;
// output:
// [1, 3, -2: 223]

// to check if its array or not type:
// Array.isArray ({});
// on console

// delete object prop:
// var a={
//     name:"saad",
//     age:18
// }
// delete a.age;
// delete a.name;
// array khali hogya

// // Higher Order Functions:
// aisa function jo accept krle (as argument) aik aur function ya phir wo return krde aik aur function wo higher order function hai
// // Example 1:
// function abcd(a){
//     a();
// }
// abcd(function(){
//     console.log("hey");
// });

// // Example 2:
// function abcd(val){
//     return function(){}
// }
// abcd();


// Constructor Function:
// aik jesi properties wale bht saare elements bnane hain toh uske lie constructor function use hota hai

//1)aik aesa function jis me (this) ka istemaal ho
//2)aik aesa function jise call krte wqt ap (new) keyword istemal kren

// code:
// function factoryBiscuit(){
//     this.width=12;
//     this.height=24;
//     this.name="biscuit";
// }
// var bis1=new factoryBiscuit();
// var bis2=new factoryBiscuit();
// var bis3=new factoryBiscuit();

// //all three are same

// problem:
// 3 button bnao with same shape and different color
// function buttonMaker(color){
//     this.radius =50;
//     this.width =33;
//     this.color=color;       
//     //iss case me yeh color wghera sab variable name hain
// }
// var b1=new buttonMaker("blue");
// var b2=new buttonMaker("red");
// var b3=new buttonMaker("green");

// inshort constructor:
// new keywork aik khali object bnata hai or var ko return krta    hai,
// this keyword return krta hai saari (this) vali values ko 

// new keyword:
// function abcd(){
//     this.age=12;
// }
// var a=new abcd();
// interpret it as
// new abcd(){
//     age:12;
// }


// iife:
// (immediately invoked(called) function expression)
// iife hai function ko turant chalane ki kala,is tariqe se hum log koi private variable bana pae

// fuunction bnao 
// 3 steps follow kro:
// 1)()in brackets me function ko paste kro
// 2)()end me yeh brackets lagado
// 3)nam remove kro function ka
// wo private variable banjayega hojaega

// not private:(can easily be acessed in console)
// function abcd(){
//     notprivatevar =12000;
// }
// abcd();

// var ans = (function(){
//     privatevar =12000;
//     return{
//         getter:()=>{
//         //return privatevar;  wrong 1 return already a chuka hai
//         console.log(privatevar)
//         },
//         setter :(val)=>{
//         privatevar=val;
//         }
//     }
// })()
// ans.getter();//12000
// ans.setter(13);
// ans.getter();//13
// now we cannot access private var
//akri ke do bracket run kr rhe hai function ko
//wo nhi lagai he to run nhi hoga

// // Prototype:
// whenever object/array is created it contains a prototype object
// which has helper properties and methods in it to help us
// prototype wala object open kro ge to usme properties hongi

// for example obj.hasOwnProperty('age')
// will return true if your object contain a variable called age and vice versa
//these helping properties accessed in the browser and some are acessed here as well

//array.length will give length

// var arr=[1,3,4,4,4];
// console.log(arr.length);


// PROTOTYPAL INHERITENCE:
// var human={
//     canfly:false,
//     canWalk:true,
//     canTalk:true
// }
// var engineer={
//     canSolveProblems:true,
//     canFindQueries:false
// }
// now inherit the humans class to engineering class:
// engineer.__proto__=human;

// now check prototype has two parts
// one the previous one and another one that contains human details

// this keyword:

// Gloobal:
// in function,in oject or in scope are not global
//in short jab bhi koi cheez {} in bracket me nahi hai toh wo global hai
// for example
// var a=12;//global Scope

// Local:
// function abcd(){
//     var a=12;//belongs to local scope of abcd
// }

// console.log(this);
   // global scope me this ki value window hoti hai


// function abcd(){
//     console.log(this);
// }
// abcd();
    // function scope me bhi this ki value window hoti hai


// ek function jo object me ho use method bolte hain


// var obj ={
//     baatkro:function(){
//         console.log(this);//normal function in this case this will return obj because its a method
//     },

//     baatmatkro: ()=>{
//         console.log(this)//arrow function inherits their this value from outer scope so it has window as its this
//     }
// };

// obj.baatmatkro();//returns window onject
// obj.baatkro();//returns object obj jisme seare data members and functions honge i,e in this case it rederss to obj which will output baat kro and baat mat as its props(object ke andarki cheez)

//in any method this keyword refers to the parent object

// var btn=document.querySelector("btn");
// btn.addEventListener("click",()=>{
//     this.style.color="red";
// });
//does not work //arrow function used

// var buttton=document.querySelector("button");
// buttton.addEventListener("click",function(){
//     console.log(this.style.color="blue");
// });
// works fine
//in this case this-> add event listener se pehle jo bhi likha hai

// global->window
// function->winndow
// method->object



// // Call Apply Bind:
// agar tumhare paas koi function hai ya koi object hai and tumhen function chalana hai or by default jo this ki value hai usse (window ya aik obj) naa rkh kr point krana hai kisi dusre object ki taraf

// call:
// function abcd(){
//     console.log(this);   //this.age will output 19
// }
// obj={
//     name:"saad",age:19
// };
// abcd.call(obj);

// call:
// function abcd(){
//     obj={
//         name:"saad",
//         sample: function(){
//             console.log(this);//this contain parent obj by default
//         }
//     };
// }
// obj2={
//     name:"saad",age:19
// };
// abcd();
// obj.sample.call(obj2);//after adding this statement obj2 is printed
// // else obj1 was printed by default



//prints object now instead of window (just .call(obj) is added)

// Example2:containing arguments
// function abcd(val1, val2, val3){
//     console.log(this,val1,val2,val3);   //this.age will output 19
// }
// obj={
//     name:"saad",age:19
// };
// abcd.call(obj,11,21,34);//this ki value ke baad arguments pass honge


// Apply:

// function abcd(val1, val2, val3){
//  console.log(this,val1,val2,val3);   //this.age will output 19
// }
// obj={
//     name:"saad",age:19
// };
// abcd.apply(obj,[11,21,34]);//same output as before

//bht chota sa farq hai call or apply me
// bs apply jo hai do hi arguments ho skhte hain isliye as an array pass krte hain mgr isse yeh array nhi ban jata 
// saari values alag alag hi pass hoti hai hain or 
// output same ata hai



//Bind used in react:
//tab use hoga jab foran nhi chlana baad me chlana hai
//event listener case:fnc tb chlao jab click/hover kia jae
//saves in a variable then run through it when needed

// function abcd(val1, val2, val3){
//     console.log(this,val1,val2,val3);   //this.age will output 19
// }
// obj={
//     name:"saad",age:19
// };
// var binded_function = abcd.bind(obj,11,21,34);
// binded_function();


// Pure Impure Functions:
// pure:2 features
//1)it should always return same output for same input
// 2)it will never change the value of a global variable

// function abcd(val){
//     return Math.random()*val;
// }
// var ans1=abcd(2);
// var ans2=abcd(2);
//both answers are different hence not a pur function

// function abcd(val1,val2){
//     return val1*val2;
// }
// var ans1=abcd(2,1);
// var ans2=abcd(2,1);
//now both answers are same hence is a pure function

// var global_variable=22;
// function abcd(val1,val2){
//     global_variable=44;
//     //its value is updated you can check in console
//     //so not a pure function
    
//     return val1*val2;
// }
// var ans1=abcd(2,1);
// var ans2=abcd(2,1);





//advance js topics for react:
//es5 vs es6
//array object functions
//arrow function,normal function
//array method (map filter reduce find findindex)
//destructuring
//rest spread
//try catch
//async await
//promises
