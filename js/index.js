// variables
const btnLogin = document.querySelector(".btn-login")
const Model = document.querySelector(".Modal")
const btnClose = document.querySelector(".btn-close")
const btnCloseArea = document.querySelector(".btnClose")
const btnArea = document.querySelector(".btn-check-area")
const channelModel = document.querySelector(".channel-modal")
//Events
btnLogin.addEventListener("click",function(){
    Model.style.display ="block"    
})
btnClose.addEventListener("click",function(){
    Model.style.display = "none"
    channelModel.style.display = "none"
})
btnCloseArea.addEventListener("click",function(){
    
    channelModel.style.display = "none"
})
btnArea.addEventListener("click",function(){
    channelModel.style.display = "block"
})
window.addEventListener("click",function(e){
    if(e.target === Model){
        Model.style.display = "none"
    }
    else if(e.target === channelModel){
        channelModel.style.display = "none"
    }
})
