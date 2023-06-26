// console.log("sosiska ne sosiska bez mikrovolnovki AYF");
// console.log(number)
// let logic = (5 + 6 != 11)||(5 + 6 != 12) 
// console.log(logic)
let button = document.querySelector("#muxa");
button.addEventListener("click",function(){
    // alert("Вы достигли рая и вы муха овер хевен!!!")
    button.style.background="#fefe22";
    button.style.color="#d71868";
})

let button2 = document.querySelector("#shrek");
button2.addEventListener("click",function(){
    alert("Подтвердите, что вы старше 18");
})


let text = document.querySelector("#shrek2");
text.addEventListener("mouseover",function(){
    text.style.border="#834d18 4px solid";
    text.style.color="#834d18";
})


text.addEventListener("mouseout",function(){
    
    text.style.color="#000000";
    text.style.border="#000000 4px solid";
})


let day = document.querySelector("#babki");
day.addEventListener("mouseover",function(){

    day.style.color="#ff0000";
})


day.addEventListener("mouseout",function(){
    
    day.style.color="#000000";
})


let text2 = document.querySelector("#babki2");
text2.addEventListener("mouseover",function(){

    text2.style.color="#ff0000";
})


text2.addEventListener("mouseout",function(){
    
    text2.style.color="#000000";
})

let text3 = document.querySelector("#babki3");
text3.addEventListener("mouseover",function(){

    text3.style.color="#ff0000";
})


text3.addEventListener("mouseout",function(){
    
    text3.style.color="#000000";
})


let text4 = document.querySelector("#babki4");
text4.addEventListener("mouseover",function(){

    text4.style.color="#ff0000";
})


text4.addEventListener("mouseout",function(){
    
    text4.style.color="#000000";
})
// let like = 1;
// let waterdiv = document.querySelector("#water");
// let likebtn = document.querySelector("#money");
// likebtn.addEventListener("click",function(){
//     like = like + 1;
//     // console.log("Спасибо за оценку!")
//     waterdiv.innerHTML = like;
// })




// let dislike = 1;
// let water2div = document.querySelector("#water2");
// let dislikebtn = document.querySelector("#broke");
// dislikebtn.addEventListener("click",function(){
//     dislike = dislike + 1;
//     // console.log("Спасибо за оценку!")
//     water2div.innerHTML = dislike;
// })


// for (let i=1; i<11; i++){
//     console.log(i*i*i)
// }


//  let belka = {"name": "skrat", "age":94000000}
//  console.log(belka['age'])
//  belka['place'] = 'forest'
//  console.log(belka)
//  belka['place'] = 'antarktida'
//  console.log(belka)
// let likes = {'cs:go':9,'Apex legends':9,'Minecraft':10,'Roblox':10,'My Singing Monsters':10,'Call of Duty':9}
// likes['War thunder'] = 10
// likes['cs:go'] = 9.5
// console.log(likes)
//  console.log(likes['age'])
//  likes['place'] = 'forest'
//  console.log(belka)                                  
//  belka['place'] = 'antarktida'
//  console.log(belka)
let dislikes = {'dislike0':0,'dislike1':0,'dislike2':0,'dislike3':0,'dislike4':0,'dislike5':0}
let likes = {'like0':0,'like1':0,'like2':0,'like3':0,'like4':0,'like5':0}                          
let germany = document.querySelectorAll(".nigereiya");
let unicorn2 = document.querySelectorAll(".unicorn");
for (let oak = 0; oak<6; oak++){
    germany[oak].addEventListener("click",function(){
        likes['like' + oak] = likes['like' + oak] + 1;
        unicorn2[oak].innerHTML = likes['like' + oak];
    })   
}


let germany2 = document.querySelectorAll(".nigereiya2");
let unicorn3 = document.querySelectorAll(".unicorn2");
for (let oak = 0; oak<6; oak++){
    germany2[oak].addEventListener("click",function(){
        dislikes['dislike' + oak] = dislikes['dislike' + oak] + 1;
        unicorn3[oak].innerHTML = dislikes['dislike' + oak];
    })   
}

let pepe1 = document.querySelector("#pepe");
let pepe = document.querySelector("#pepe2");
pepe.addEventListener("click",function(){
 if (pepe1.style.display == "none")
    pepe1.style.display = "block";
 else pepe1.style.display = "none";
})


// let sea = 73
// let okean = 5
// if (sea > okean){
//     alert ("Морей больше, чем океанов");
// }
// else {   alert ("Океанов больше, чем морей");
// }

// let squid = prompt ("Введите свой возраст");
// if (18 > squid){
//     alert ("Ты хто такой я вас не знаю идите нафиг!!!"); 
// }
// else {alert ("Новый год будет!!! Дед Мороз принял Ислам");}

// let year = -200000;
// if (year % 4 == 0){
// alert("Високосный год")
// }

// else {alert("Невисокосный год")}

let cart = 1;
if (0 == cart){
    alert ("Корзина пуста"); 
}
else {alert ("в корзине есть товары");}

let funnyballs = prompt ("Сколько смешариков в мультильме?");
let funnyballs2 = prompt ("Во сколько лет вы начали смотреть смешариков");
if (funnyballs == funnyballs2){
    alert ("Вы олд"); 
}
else if (funnyballs > funnyballs2){
    alert ("Вы столбец!!!");
}
else {alert ("Фуууууууууу вы позер!!!");} 

 let trankvilizator = document.querySelector ("#gubernator");
 trankvilizator.addEventListener("click",function(){
    let pupsik = document.querySelector ("input[name='palezator']").value;
    console.log (pupsik);
})






    




// ((({{({({({({([[[[Поздравляем вы дошли до 200 строк!!!]]]])})})})})}})))






















































// ((({{({({({({([[[[Поздравляем вы дошли до 250 строк!!!]]]])})})})})}})))
















































































