let images = document.querySelectorAll("img")

for(var i=0;i<images.length;i++){
    images[i].addEventListener('click',function(){
        
        playSong(this.id)
        this.classList.add("pressed");
        var that = this;
        setTimeout(function(){
            that.classList.remove("pressed");
        },100);
    })
}

function playSong(sound_num){
    var sound=new Audio("sounds/sound_"+sound_num+".mp3");
    sound.play();
}