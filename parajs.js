document.getElementById("click").addEventListener("click", flip);

function flip() {
    document.getElementById("dafuq").style.visibility = "visible"
}

document.getElementById("not").addEventListener("click", flap);

function flap() {
    document.getElementById("dafuq").style.visibility = "hidden"
}