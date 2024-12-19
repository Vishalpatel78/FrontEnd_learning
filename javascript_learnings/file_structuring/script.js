console.log(15);
console.log("hell0");

// function abcd(){
//     var a = 12;
//     return function (){
//         console.log(a+3);
//     }
// }
// const b = abcd();
// b();

// query selector 

// var parent = document.querySelector("#parent");

// parent.addEventListener("click",function(event){
//      if(event.target.id === "play"){
//         console.log("play music");
//      }
//      else if(event.target.id === "pause"){
//         console.log("music pause");
//      }
// })

// Create custom Events

const evt = new Event("MyEvent");
document.querySelector("button").addEventListener("MyEvent",function(){
   alert("bhai tera event chal gya");
})

document.querySelector("button").dispatchEvent(evt);