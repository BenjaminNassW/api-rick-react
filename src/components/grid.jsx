import Box from './box';


function Grid() {

    let gameBoard = [
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
    ];
    let boxes = gameBoard

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (gameBoard[i][j] === 1) {
                boxes[i][j] = (<Box id='ship' key={`${i},${j}`} />)
            }
            else {
                boxes[i][j] = (<Box id="water" key={`${i},${j}`} />)
            }
        }
    }
    return boxes
}

export default Grid;