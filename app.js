// variables
const btnLogin = document.querySelector(".btn-login")
const Model = document.querySelector(".loginModal")
const btnClose = document.querySelector(".btn-close")
//Events
btnLogin.addEventListener("click",function(){
    Model.style.display ="block"    
})
btnClose.addEventListener("click",function(){
    Model.style.display = "none"
})
window.addEventListener("click",function(e){
    if(e.target === Model){
        Model.style.display = "none"
    }
})