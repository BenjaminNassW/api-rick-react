import Box from './box';
import React, { useEffect } from 'react';

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
                boxes[i][j] = (<Box id='ship' key={[i, j]} />)
            }
            else {
                boxes[i][j] = (<Box id="water" key={[i, j]} />)
            }
        }
    }
    var result = document.getElementById("boxes");
    useEffect(() => { console.log(result) }, [result])
    return boxes
}

export default Grid;