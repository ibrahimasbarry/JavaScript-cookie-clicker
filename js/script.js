let buttonClick = document.getElementById("clickbutton");
let cookieCount = document.getElementById("show");
let multiClick = document.getElementById("multibutton");
let multiValue = document.getElementById("multiplyvalue");

let cookieScore = 0;
let multiScore = 1;
let penaltyScore = 5;


function clickTheButton() {
    cookieScore += multiScore;
    cookieCount.innerHTML = cookieScore;
}
buttonClick.addEventListener("click", clickTheButton);

function increaseMultiplier() {
    multiScore++;
    document.querySelector("#multiplaceholder").innerHTML = `Multiplicator x ${multiScore} <br />On the next click the multiplier will cost you x ${penaltyScore*2}`;
}

function penaltyMultiplier() {
    if (cookieScore > penaltyScore) {
        cookieScore -= penaltyScore;
        cookieCount.innerHTML = cookieScore;
        increaseMultiplier();
        doublePenalty();
    }
}
multiClick.addEventListener("click", penaltyMultiplier);

function doublePenalty() {
    penaltyScore *= 2;
}