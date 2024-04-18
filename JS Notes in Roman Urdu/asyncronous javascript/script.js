// sync or aync kya hota hai?

// sync matlab aik ke bad dusra hoga,jab tak ek kaam complete na ho tab tak dusra shuru nhi hoga

//async matlab saare kaam aik sath shuru krdo,jiska answer pehle ajae uska jwab dedena

// task a-5
// task b-2
// task c-15
// task d-1

// 23 sec synchronous time
// 15 sec Asynchronous time

// kaise pta chlta hai sync code likh rhe hai ya async

// setTimeout
// setInterval
// promises
// fetch
// axios
// XMLHttpRequest


//jahan bhi yeh dikh jaen wo asynchronous code hai

// async js kya hai?
// kai baar apka final code dependent hota hai kisi or ke server pe,iss case me humen nhi pta hota ke answer uske server se kab laut kr ayega,toh hum kya nhi krskhte is writing sync code,toh isse nioatne ke lie hum log async code likh dete hain take bloking na ho and jab bhi answer aye hmara snswer ke respect me chlne wala code chal jae

// normal code
// normal code
// sync code(fb ke server se photo le kr ao)
//phir yeh chlao(photo display kro)

//akhri line me error ajaye ga kiun ke phot ane me time lagega or agli line form chl jaegi

// Async:(solution):
// normal code
// normal code
// asyn code(fb ke server se photo le kr ao)
//    ->phir yeh chlao(photo display kro)
//normal code

// Example 1:
//syntax:callback function hota hai
// setTimeout(callback,time in ms)

// console.log("hey1");
// setTimeout(function(){
//     console.log("hey2");
    //toh function me likh dia  take baad me chle
// },2000)
// console.log("hey3");//pehle yeh print hoga

// output:
// hey1
// hey3
// hey2

//callback function in this case time khtm hone pr chla hai but
//callback function hmesha async code me answer ane pr chlta hai

// js async nhi hai single thread hai multi thread nhi hai
//matlab aik time pr aik code chlta hai

//jo bhi main stack pr hota hai woh output krta hai or jo bhi side stack pr hota hai wo behind the scenes processing kr skhta hai or jab bhi uski processing complete ho usse main stack me laa kr chlaya jaa sakhta hai
// ..main stack-> execution
//side stack->processing

//1 sync code
//2 async code (random time of completion:4s)
//2 sync code
//4 async code (random time of completion:6s)

//1 and 3 moved to main stack and 2 and 4 moved to side stack
//1 executed
//3 executed
//side stack ki baari ayi
//event loop side stack se puchta rhe ga ke koi task complete hua hai ya nhi
//phir 2 jab data le aye ga toh woh main stack me jayega or execute hojayega
//uske baad 4 jese hu event loop ko signal milega ke 4 data le aya hai toh wo usko bhi main stack me move krake execute kradega

// Example:
// console.log("hey1");
// setTimeout(function(){
//     console.log("hey2");//toh function me likh dia take baad me chle
// },0)
// console.log("hey3");//pehle yeh print hoga

// output:
// hey1
// hey3
// hey2


// setTimeout
// setInterval
// promises
// fetch
// axios
// XMLHttpRequest

// uper wale
// complete hojane ke baad inka answer chlane ke lie yeh use hote hain neeche wale:

// then catch
// callbacks
// async await

// kiun?:
// var profile.name=fetch('www.faceboook.com');
// console.log(profile.name);
// because this code will cause an error jab name aya hi nhi toh woh output kaise kre


// callback -> hmesha ek function hota hai jo sirf tab chlta hai jab async code ka completion hojata hai

// setTimeout(callback,2000);
// setTimeout(function(){},2000);



// Promises: is a constructor function
// promise can be in either
// 1-pending state(ans nahi aya hai time hai abhi ane me)
// 2-rejected state(promise pura nhi hua)
// 3-resolved state(promise pura hogya)

//resolve State me (then) chlta hai
//rejected State me (Catch) chlta hai

// // Example 1:
// var ans=new Promise((res,rej)=>{
//     if(true){//change to false to test catch
//         return res();
//     }else{
//         return rej();
//     }
// })

// ans
//     .then(()=>{
//         console.log("resolve hogya tha");
//     })
//     .catch(()=>{
//         console.log("reject hogya tha");    
//     })

// console.log(Math.floor(3.5))  // Outputs: 3
// console.log(Math.floor(-3.5)) // Outputs: -4
// //round to nearest lower integer

// Q-user will ask for a number and if the number is below 9 then resolve else reject

// var ans=new Promise((res,rej)=>{
//     var n=Math.floor(Math.random()*10);//return integer b/w 1-9
    
//     if(n<5){
//         return res(n);//passing n to res to output it
//     }
//     else{
//         return rej(n);//passing n to rej     to output it
//     }
// })

// ans
//     .then(function(n){
//         console.log(n);
//         console.log("below");
//     })
//     .catch(function(n){
//         console.log(n);
//         console.log("above");
//     });

//async code toh jese jese task complete hote jate hain execute krta rehta hai
//toh agr asyn code ko order me chlana hai phir kia kren
//matlab me chahta hun ke aik promise jab chl jae toh uske BAAD dusra promise chle

//used in loading images text etc when building websites

// Q-
// 4 tasks
// 1)go home
// 2)take a bath
// 3)drink water
// 4) sleep
//in async all these donot depend on each other jese hi aik complete hota hai wo execute hojata hai
// matlab aisa bhi hoskhta hai ke pehle me sojao phir ghr aun [hir khana khaun or phir nahaun

//toh in kaamon ko agr order me krna hai toh me aik promise ke then state me dusra promise dal dun ga

// var p1=new Promise(function(res,rej){
//     return res("1)go home");
// })
// var p2=p1.then((data)=>{
//     console.log(data);
//     return new Promise(function(res,rej){
//         return res("2)take a bath");
//     })
// })
// var p3=p2.then((data)=>{
//     console.log(data);
//     return new Promise((res,rej)=>{
//         return res("3)Drink Water");
//     })
// })

// var p4=p3.then((data)=>{
//     console.log(data);
//     return new Promise((res,rej)=>{
//         return res("4)sleep");
//     })
// })

// p4.then(data => {
//     console.log(data);
// }).catch(error => {//error(is variable) is taken as data
//     console.error("An error occurred:", error);
// });


// ASYNC AWAIT:
//koi bhi aisa function jisme aap asyc code likhenge,kyun kai woh async code hai toh aap promises ka istemaal kr skhte hain,jab uska answer ayega aap then lagana prega,us then ko lagane se bachne ke lie ap async await ka istemaal kr skhte hain

// function abcd(){
//     fetch('https://randomuser.me/api')
//     .then(function(raw){
//         console.log(raw);
//         return raw.json();//json fuction converts data into readable form
//     })
//      //.then jo hai usme pichle return wala data hai 
//     .then((data)=>{
//         console.log(data);
//     })
// }
// abcd();

// async function abcd(){
//     let raw = await fetch('https://randomuser.me/api')//yhan sw await hato ge toh error ayega
//     let ans=   await raw.json();//yhan se await hata dp ge toh pendin g state mile gi. kiun neeche likha hai
//     console.log(ans);
// }
// abcd();

//this will also give same output
//bs code kaafi chota hojata hai
//async code ke lie wait krna prta hai kiun ke hmen nahi pta ke uska answer kab ayega



// CONCURRENCY:
// js me sync or async code aik sath process horahai tha yeh hai concurrency
//parallelism:focus ziadah krta hai processors or unke cores par kaam ko chlane par

// // Throttling:
// kisi code ke number of executions ko cotrol krna

// Master javascript syntax & asynchronous nature of javascript.
// String, array, objects - methods, destructuring. Arrow function, This keyword (good to know),
// In react learn, router, two hooks - useState, useEffect & learn a statemanagement library like zustand or jotai or redux if you understand it. learn anynone from above
// try a project yourself with fakestoreapi & then start learning backend api development and data modelling. Once thats done
// try making large, scaleable projects atleast 5, then apply for any job & you will be picked in the uk








