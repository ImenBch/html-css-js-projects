let textarea= document.querySelector("textarea");

textarea.addEventListener('input',function(){
    var typed_character= document.querySelector("#typed-character");
    var remaining_character= document.querySelector("#remaining-character");
    typed_character.textContent="You have written "+textarea.value.length+" letters";
    remaining_character.textContent=(textarea.maxLength - textarea.value.length) +" left!"
})