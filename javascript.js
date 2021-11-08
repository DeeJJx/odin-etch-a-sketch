const container = document.querySelector('#container');
const gridSize = 16*16;

const createDivs = () => {
    let gridBox = document.createElement('div');
    gridBox.classList.add('gridBox');
    return gridBox;
}

const createAndModifyDivs = () => {
    const board = document.getElementById('board');
    let gridBoxes = [];


    for(i=0; i<gridSize; i++){
        gridBoxes.push(createDivs());
        gridBoxes[i].textContent = `${i}`;
        board.appendChild(gridBoxes[i]);
    }

    const gridBox = document.querySelectorAll('.gridBox');

    gridBox.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add("hover")
        })
      })


    const clear = document.getElementById("clear");

    function clearBoard() {
        gridBox.forEach(item => {
                item.classList.remove("hover")
        })
        squaresPerSide = prompt("Enter number of squares per side for grid");
        console.log(squaresPerSide);
    }

    clear.addEventListener('click', clearBoard);
}


createAndModifyDivs();