document.addEventListener("mousemove",function(event){
    document.querySelector("#cursor").style.left=(event.x - 250)+"px";
    document.querySelector("#cursor").style.top=(event.y - 250)+"px";
})