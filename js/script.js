let buttonClick = document.getElementById("clickbutton");
let cookieCount = document.getElementById("show");
let multiClick = document.getElementById("multibutton");
let autoClickButt = document.getElementById("autoclickbutton");

let cookieScore = 0;
let multiScore = 1;
let penaltyScore = 5;
let autoClicker;
let autoClickLvl = 20;
let autoClickCost = 25;
let ticket = 1; // will help limit the number of times the button is shown to one

function clickTheButton() {
    cookieScore += multiScore;
    cookieCount.innerHTML = cookieScore;
    showHideButton();
}
buttonClick.addEventListener("click", clickTheButton);

function increaseMultiplier() {
    multiScore++;
    document.querySelector("#multiplaceholder").innerHTML = `Multiplicator x ${multiScore} <br />Next multiply click cost = ${penaltyScore*2}`;
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

function showHideButton() {
    if (cookieScore >= autoClickLvl && ticket === 1) {
        autoClickButt.style.visibility = "visible";
        document.querySelector("#autoclickph").innerHTML = `Buy Autoclicker <br />Cost = ${autoClickCost}`;
    } 
    else {
        autoClickButt.style.visibility = "hidden";
    }
}

function autoClick() {
    if (cookieScore > autoClickCost) {
        cookieScore -= autoClickCost;
        ticket = 0;

        autoClicker = setInterval(clickTheButton, 1000);
    }
}

autoClickButt.addEventListener("click", autoClick);