const navbar=document.querySelector(".nav-bar");
const burger=document.querySelector(".burger");
const items=document.querySelectorAll(".nav-items");
const getstart=document.querySelector(".getstart");
items.forEach(function all(itm){
    navbar.classList.remove("active");
})
getstart.addEventListener("click",()=>{
    navbar.classList.toggle("active");
})
burger.addEventListener("click",()=>{
    navbar.classList.toggle("active");
})
