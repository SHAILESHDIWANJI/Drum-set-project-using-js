// console.log("A".charCodeAt());
let key=document.querySelectorAll(".key")
console.log(key); 


function playSound(keyCode){
let audio=document.querySelector(`audio[data-key="${keyCode}"]`)
console.log(audio);

let key=document.querySelector(`div[data-key="${keyCode}"]`)
console.log(key);

if(keyCode==65||
    keyCode==83||
    keyCode==68||
    keyCode==70||
    keyCode==71||
    keyCode==72||
    keyCode==74

){
    audio.play();
    audio.currentTime=0; //rewind
    key.classList.add("key-animation")

}else{
    console.log("please enter valid keys");
}
} 

key.forEach((e)=>{
    e.addEventListener("transitionend",function(){
        this.classList.remove("key-animation")
    })
})

key.forEach((e)=>{
        e.addEventListener("click",function(){
        let keyCode=e.getAttribute("data-key")
        console.log(keyCode);
        playSound(keyCode)
    })
})

window.addEventListener("keydown",function(e){
    console.log(e.keyCode);
    playSound(e.keyCode)
});
