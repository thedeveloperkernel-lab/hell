const text =
"Você entrou em um portal de fantasia sombria. Explore e descubra mais.";

let i = 0;

function typeWriter(){
if(i < text.length){
document.getElementById("typed").innerHTML += text.charAt(i);
i++;
setTimeout(typeWriter,40);
}
}

typeWriter();

for(let i=0;i<120;i++){

const p=document.createElement("div");

p.classList.add("particle");

p.style.left=Math.random()*100+"vw";

p.style.animationDuration=
(Math.random()*8+4)+"s";

p.style.animationDelay=
Math.random()*5+"s";

document.getElementById("particles")
.appendChild(p);
}

const music =
document.getElementById("music");

document
.getElementById("musicBtn")
.addEventListener("click",()=>{

if(music.paused){
music.play();
}else{
music.pause();
}

});
