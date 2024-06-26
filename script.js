let button = document.getElementById("button");
let home = document.querySelector(".home");
let video = document.querySelector("#video")
let Close = document.getElementById("close");

button.addEventListener("click",()=>{
    home.style.display="none";
    video.style.display="block"
})

Close.addEventListener("click",()=>{
    home.style.display="block";
    video.style.display="none"
})