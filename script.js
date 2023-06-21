// function abc(){
//     let time = new Date();

//     let hr= time.toLocaleTimeString();
//     console.log(hr);

//     setTimeout(()=>{
//         abc();
//     },1000)
// }
// abc();

// let a= true;

// var mypro= new Promise((res,rej)=>{
//     if(a===true){
//         res("resolved")
//     }
//     else{
//         rej("rejected")
//     }
// })

// mypro.then((a)=>console.log(a)).catch((b)=>console.log(b))


// let pro1= new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res('1st resolved')
//     },1000)
// })
// let pro2= new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res('2nd resolved')
//     },2000)
// })
// let pro3= new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res('3rd resolved')
//     },3000)
// })

// Promise.all([pro1,pro2,pro3])
// .then((a)=>{
//     console.log("all done",a)
// })


// let a=true;

// let pro1= new Promise((res,rej)=>{
//     if(a===true){
//         res ("1st resolved")
//     }
//     else{
//         rej("rejected")
//     }
// })
// let pro2= new Promise((res,rej)=>{
//     if(a===true){
//         res ("2nd resolved")
//     }
//     else{
//         rej("rejected")
//     }
// })
// let pro3= new Promise((res,rej)=>{
//     if(a===true){
//         res ("3rd resolved")
//     }
//     else{
//         rej("rejected")
//     }
// })

// Promise.all([pro1,pro2,pro3]).then((b)=>{
//     console.log(...b)
// })


// let pro1= new Promise((res,rej)=>{
//     setTimeout(()=>{
//      console.log("1")   
//     },1000)
// })
// let pro2= new Promise((res,rej)=>{
//     setTimeout(()=>{
//      console.log("2")   
//     },2000)
// })
// let pro3= new Promise((res,rej)=>{
//     setTimeout(()=>{
//      console.log("3")   
//     },3000)
// })
// let pro4= new Promise((res,rej)=>{
//     setTimeout(()=>{
//      console.log("4")   
//     },4000)
// })
// let pro5= new Promise((res,rej)=>{
//     setTimeout(()=>{
//      console.log("5")   
//     },5000)
// })

// Promise.all([pro1,pro2,pro3,pro4,pro5])
// .then((b)=>{
//     console.log(b)
// })


function display(num,timeout){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
        console.log(num);
        res('promise Resolved')
        },timeout);
    })
}

display(1,1000)
.then(()=>display(2,2000))
.then(()=>display(3,3000))
.then(()=>display(4,4000))
.then(()=>display(5,5000))