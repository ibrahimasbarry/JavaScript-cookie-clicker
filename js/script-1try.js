let buttonClick = document.getElementById("clickbutton");
let showScore = document.getElementById("show");
let multiClick = document.getElementById("multi");
let multiValue = document.getElementById("multivalue"); // can be removed ?????? not used atm

let score = 0;
let multiScore = 1;
let decreaseScore = 5; // pentalty for clicking multiplicator

// NORMAL COOKIE COUNTER

function addScore() {
    score += multiScore; //// add multiplication to cookie score
    showScore.innerHTML = score;
}

buttonClick.addEventListener("click", addScore);

// MULTIPLICATOR + CLICKING IS NOT FREE + add value to multiplicator button

function clickNotFree() {

    if (score > decreaseScore) { 
        // putting increaseMulti inside the if prevents the multi counter from increasing when you click on it before it disappears and IF loop makes sure you can only use the multiplicator when enough credits (not negative)
        
        function increaseMulti() { 
            multiScore++;   // increment the multiplicator value
            document.querySelector(".multiplaceholder").innerHTML = "Multiplicator x" + multiScore; /// put multiplicator value in the multiplicator button
        }
        increaseMulti();
        
        score -= decreaseScore*2; // substract penalty from cookie score (minus)
        showScore.innerHTML = score; // the updated score linked to the span with id show on html page
        }
    }

multiClick.addEventListener("click", clickNotFree);

// increase cost of multiplicator =>    decreaseScore = decreaseScore*2 repeat   ... 

// for (let i = 0; i < decreaseScore.length; i++) {
//     decreaseScore = decreaseScore*2;
// }


