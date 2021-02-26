//  RESTART GAME BUTTON

var restart = document.querySelector('#b') 

//GRAB ALL THE SQUARES

var squares = document.querySelectorAll('td')

//CLEAR ALL THE SQUARES

function clearBoard() {
    for (let i = 0; i< squares.length; i++) {
      squares[i].textContent = '';
    }
}

restart.addEventListener('click', clearBoard);

//CHECK THE SQUARE MARKER

function changeMarker(){
    if (this.textContent === ''){
        this.textContent = 'X';
    }
    else if(this.textContent === 'X'){
        this.textContent = 'O';
    }
    else {
        this.textContent = ''
    }
}

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click',changeMarker);
    
}

//FOR LOOP TO ADD EVENT LISTENER TO ALL SQUARES