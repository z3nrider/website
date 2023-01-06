
const player1 = document.createElement('button');
const buttons = document.querySelector('#buttons')
const score1 = document.querySelector('#score1');
const score2 = document.querySelector('#score2');
const resetButton = document.createElement('button');
const h2 = document.querySelector('h2');
const h4 = document.querySelector('h4');
const result = document.createElement('p');


let scoreStyle1 = document.getElementById("score1");
let scoreStyle2 = document.getElementById("score2");

let p1 = 0;
let p2 = 0;
scoreColor()

const input = document.querySelector('select');
let scoreLimit = 5;

input.addEventListener('change', function (e) {
    scoreLimit = input.value;

})

player1.innerText = '+1 Player1';
player1.style.backgroundColor = "green";
buttons.insertAdjacentElement('beforeend', player1);
player1.addEventListener('click', function () {
    if (p1 === parseInt(scoreLimit) - 1) {
        p1++;
        score1.innerText = p1;
        winner("Player 1 Wins!!!");
    }
    else {
        p1++;
        score1.innerText = p1;
        scoreColor();
    }
})

const player2 = document.createElement('button');
player2.innerText = '+1 Player2';
player2.style.backgroundColor = "yellow";
buttons.insertAdjacentElement('beforeend', player2);
player2.addEventListener('click', function () {
    if (p2 === parseInt(scoreLimit) - 1) {
        p2++;
        score2.innerText = p2;
        winner("Player 2 Wins!!!");
    }
    else {
        p2++;
        score2.innerText = p2;
        scoreColor();
    }
})


resetButton.innerText = 'Reset';
resetButton.style.backgroundColor = "red";
buttons.insertAdjacentElement('beforeend', resetButton);

resetButton.addEventListener('click', function () {
    scoreStyle1.innerHTML = 0;
    scoreStyle2.innerHTML = 0;
    p1 = 0, p2 = 0;
    scoreColor()
    player1.disabled = false;
    player2.disabled = false;
    result.innerText = '';
})

// changes the color of players scores as they change
function scoreColor() {

    if (p1 === p2) {
        scoreStyle1.style.color = 'black';
        scoreStyle2.style.color = 'black';
    }

    else if (p1 > p2) {
        scoreStyle1.style.color = 'green';
        scoreStyle2.style.color = 'red';
    }

    else {
        scoreStyle1.style.color = 'red';
        scoreStyle2.style.color = 'green';
    }
}


// announces the winner of the game
function winner(player) {
    player1.disabled = true;
    player2.disabled = true;
    result.innerText = player;
    h4.insertAdjacentElement('beforeend', result);
}

