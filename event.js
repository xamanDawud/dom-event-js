console.log("Hello Events");

function makeGreen() {
    document.body.style.backgroundColor = "green";
}

// 3rd way
let red = document.getElementById("red");
red.onclick = makeRed;

function makeRed() {
    document.body.style.backgroundColor = "red";
}

// 4th way
let purple = document.getElementById("purple");
purple.onclick = function() {
    document.body.style.backgroundColor = "purple";
};

// Most useful way
let pink = document.getElementById("pink");
pink.addEventListener("click", makePink);

function makePink() {
    document.body.style.backgroundColor = "pink";
}