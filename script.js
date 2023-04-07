let cells = document.querySelectorAll('#field td');
let winner = document.querySelector('#winner');
let close = document.querySelector('#close');
let text = document.querySelector('#text');


console.log(cells);

let i = 0;
function start(cells) {
    for (let cell of cells) {
        cell.addEventListener('click', function step() {
            if (i % 2 == 0) {
                this.textContent = 'X';
            } else {
                this.textContent = '0';
            }

            this.removeEventListener('click', step);
            if (isWinner(cells) == true) {
                winner.style.display = 'flex';
                text.textContent = `Победитель ${this.textContent}`;
            } else if (i == 8) {
                winner.style.display = 'flex';
                text.textContent = `Ничья`;
            };

            i++;
        })
    }
}
start(cells);

text.addEventListener('click', ()=> {
    winner.style.display = 'block';
})

close.onclick = function () {
    winner.style.display = 'none';
  };


  window.onclick = function (event) {
    if (event.target == winner) {
      winner.style.display = 'none';
      location.reload();
    }
}

function isWinner(cells) {
    let combs = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6]  
    ]

    for (let comb of combs) {
        if (cells[comb[0]].textContent == cells[comb[1]].textContent && cells[comb[1]].textContent ==
            cells[comb[2]].textContent && cells[comb[0]].textContent != '') {
            return true;
        }
    }
    return false;
}

