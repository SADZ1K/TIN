function addDiv() {
    var newDiv = document.createElement("div");
    newDiv.className = "myDiv";
    document.body.appendChild(newDiv);
}

function removeDiv() {
    var divs = document.getElementsByClassName("myDiv");
    if (divs.length > 0) {
        divs[0].remove();
    }
}

function changeColor() {
    var divs = document.getElementsByClassName("myDiv");
    if (divs.length >= 3) {
        divs[2].style.backgroundColor = "green";
    }
}

function changeText() {
    var divs = document.getElementsByClassName("myDiv");
    for (var i = 0; i < divs.length; i++) {
        divs[i].innerText = "nowy tekst";
    }
}