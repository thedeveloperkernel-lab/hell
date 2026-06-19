const text =
"Você atravessou um portal esquecido. As sombras se movem ao longe. Não há garantias do que encontrará adiante.";

let i = 0;

function typeWriter(){
    if(i < text.length){
        document.getElementById("typed").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

typeWriter();

for(let i = 0; i < 150; i++){

    const rain = document.createElement("div");

    rain.classList.add("rain");

    rain.style.left =
        Math.random() * 100 + "vw";

    rain.style.animationDuration =
        (Math.random() * 2 + 1) + "s";

    rain.style.animationDelay =
        Math.random() * 5 + "s";

    document.body.appendChild(rain);
}

setInterval(() => {

    const flash =
        document.getElementById("flash");

    flash.style.opacity = "0.8";

    setTimeout(() => {
        flash.style.opacity = "0";
    }, 100);

}, 7000);

document
.getElementById("enterBtn")
.addEventListener("click", () => {

    const audio =
        document.getElementById("ambient");

    audio.play();

    alert(
        "A jornada começou..."
    );
});
