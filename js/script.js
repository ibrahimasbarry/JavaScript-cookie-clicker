let buttonClick = document.getElementById("clickbutton");
let cookieCount = document.getElementById("show");
let multiClick = document.getElementById("multibutton");
let autoClickButt = document.getElementById("autoclickbutton");
let bonusButt = document.getElementById("bonusbutton");
let bonusId = document.querySelector("#bonusid")

let cookieScore = 0;
let multiScore = 1;
let penaltyScore = 5;
let autoClicker;
let autoClickLvl = 20;
let autoClickCost = 25;
let ticket = 1; // will help limit the number of times the button is shown to one
let bonusCost = 10;
let counter = 30;
let countdown;
let ticketBleu = 1;

function clickTheButton() {
    cookieScore += multiScore * bonusMulti;
    cookieCount.innerHTML = cookieScore;
    showHideButton();
    showHideBonus();
}
buttonClick.addEventListener("click", clickTheButton);

function increaseMultiplier() {
    multiScore++;
    if (ticketBleu === 1) {
        document.querySelector("#multiplaceholder").innerHTML = `Multiplicator x ${multiScore} <br />Next multiply click cost = ${penaltyScore*2}`;
    } else if (ticketBleu === 0) {
        document.querySelector("#multiplaceholder").innerHTML = `Multiplicator x ${multiScore} <br />Next multiply click cost = ${penaltyScore*2}`;
    }
}

function penaltyMultiplier() {
    if (cookieScore >= penaltyScore) {
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
    } else {
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

function showHideBonus() {
    if (cookieScore > bonusCost && ticketBleu === 1) {
        bonusButt.disabled = false;
        bonusId.innerHTML = `Bonus +200%`;
    } else if (ticketBleu === 1) {
        bonusButt.disabled = true;
        bonusId.innerHTML = "Bonus not available";
    }
}

bonusButt.addEventListener("click", function () {
    doubleMultiply();
    countdown = setInterval(function () {
        ticketBleu = 0;
        counter -= 1;
        bonusId.innerHTML = `Bonus +200% for ${counter} seconds`;

        if (counter === 0) {
            clearInterval(countdown);
            bonusId.innerHTML = `Bonus +200%`;
            bonusMulti = 1;
            counter = 30;
            ticketBleu = 1;
        }
    }, 1000);

});

let bonusMulti = 1;

function doubleMultiply() {
    bonusMulti = 2;
}