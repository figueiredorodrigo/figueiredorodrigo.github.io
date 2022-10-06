let square = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: '',
}; 

let warning = '';
let player = '';
let playing = false;

reset();

document.querySelector('.reset').addEventListener('click', reset);
document.querySelectorAll('.item').forEach((item)=> {
    item.addEventListener('click', itemClick);
});

function checkWin() {
    if(winner('x')) {
        warning = '"X" ganhou!';
        playing = false;
    } else if (winner('o')) {
        warning = '"O" ganhou!';
        playing = false;
    } else if(isDraw()) {
        warning = 'EMPATOU';
        playing = false;
    }    
};

function winner(player) {
    let win = [
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',

        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',

        'a1,b2,c3',
        'c1,b2,a3'
    ];

    for(let i in win) {
        let pArray = win[i].split(',');
        let won = pArray.every(option => square[option] === player);
        if (won) {
            return true;
        }
    }
    return false;
}

function isDraw() {
    for (let i in square) {
        if(square[i] === '') {
            return false
        }

    }
    return true;
}

function itemClick(e) {
    let item = e.target.getAttribute('data-item');
    if (playing && square[item] === '') {
        square[item] = player;
        squareRender();
    }
    playerToogle();
}

function playerToogle() {
    player = (player === 'x') ? 'o' : 'x';
    squareInfo();
}


function reset() {
    warning = '';
    
    let random = Math.floor(Math.random() * 2);
    player = (random === 0) ? 'x' : 'o';
    
    playing = true;

    for (let i in square) {
        square[i] = ''; 
    }
    squareRender();
    squareInfo();
}

function squareInfo() {
    document.querySelector('.vez').innerHTML = player;
    document.querySelector('.resultado').innerHTML = warning;
}

function squareRender() {
    for(let i in square) {
        let item = document.querySelector(`div[data-item=${i}]`);
        item.innerHTML = square[i];
    }
    checkWin();
}


