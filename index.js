let taskbar= document.getElementsByClassName("taskbar")[0]
let startmenu= document.getElementsByClassName("startmenu")[0]
console.log(taskbar,startmenu)

taskbar.addEventListener("click",()=>{
    console.log("hi")
    if(startmenu.style.bottom=="60px"){
        startmenu.style.bottom="-1000px";
    }else{
        startmenu.style.bottom="60px";
    }
})