// var h3 = document.querySelector("#h3tag");
// h3.textContent = "i am gonna change this thing ";

// var body = document.querySelector('body');
// body.innerHTML = '<h1> hlow jii h1 bn gya </h1>';

// var para = document.querySelector('p');
// para.style.color = 'green'; 

// var para = document.createElement("p");
// para.textContent ="hey i am creating a para teg using js";
// para.classList.add('makeitred');

// document.querySelector('body').appendChild(para);

// var btn = document.querySelector("button");
// btn.addEventListener("click", function(){
//     btn.textContent = "Starting...";
//     btn.style.backgroundColor = "red";

// })

var para = document.querySelector("p");
var btn = document.querySelector("button");

// btn.addEventListener("click",function(){
//     para.textContent = "Hey i have changed";
//     para.style.backgroundColor = "red";
//     btn.textContent = "Changed";
// })

// btn.addEventListener("mouseenter",function(){
//     para.textContent = "hey i have changed";
//     btn.textContent = "Changed";
// })

// btn.addEventListener("mouseleave",function(){
//     para.textContent = "hey change me ";
     
//     btn.textContent = "Change";
// })

// var img1 = document.querySelector("#img1");
// var img2 = document.querySelector("#img2");

// document.querySelector("button").addEventListener("click",function(){
//     var src1 = img1.src;
//     var src2 = img2.src;

//     img1.src = src2;
//     img2.src = src1;
// })

// var para = document.querySelector("p");
// var inps = document.querySelectorAll('input[type ="text"]');
// var btn = document.querySelector("#submit").addEventListener("click",function(ev){
//     ev.preventDefault();
//     for(var i=0; i<inps.length; i++){
//         if(inps[i].value === ''){
//             para.textContent = "some fields are emptyj";
//             para.style.color = "red";
//             break;
//         }
//     }
// })

// var add = document.querySelector("#add");
// var remove = document.querySelector("#remove");
// var ul = document.querySelector("ul");
// var inp = document.querySelector("input");

// var li ;

// add.addEventListener("click",function(){
//     if(input.value === ''){}
//     else{
//         li = document.createElement("li");
//         li.textContent = inp.value;
//         ul.appendChild(li);
//         inp.value = '';
//     }
     
// })

// remove.addEventListener("click",function(){
//     ul.removeChild(li);
     
// })

var home = document.querySelector("#home");
var hometext = document.querySelector("#hometext");

var about = document.querySelector("#about");
var abouttext = document.querySelector("#abouttext");

var contact = document.querySelector("#contact");
var contacttext = document.querySelector("#contacttext");


home.addEventListener("click",function(){
    saretextnonekro()
    hometext.style.display = "block";
    hometext.style.width = "50%";
})

about.addEventListener("click",function(){
    saretextnonekro()
    abouttext.style.display = "block";
    abouttext.style.width = "50%";
})

contact.addEventListener("click",function(){
    saretextnonekro()
    contacttext.style.display = "block";
    contanttext.style.width = "50%";
})

function saretextnonekro(){
    document.querySelectorAll("h3").forEach(function(h3){
        h3.style.display = "none";
    })
}
