function countNeighbouringCoins(board){
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] === '$') {
                let selections = [
                    [i, j-1],
                    [i, j+1],
                    [i-1, j],
                    [i+1, j],
                    [i-1, j-1],
                    [i+1, j-1],
                    [i-1, j+1],
                    [i+1, j+1],
                ];
                selections.forEach(([row, col]) => {
                    if (board[row] !== undefined) {
                        if(board[row][col] !== undefined) {
                            if(board[row][col] !== "$"){
                                board[row][col] = board[row][col] === " " ? 1 : board[row][col]+1;
                            }
                        }
                    }
                });
            }
        }
    }
    return board;
}
console.log(countNeighbouringCoins([
        [' ',' ','$'],
        [' ','$',' '],
        ['$',' ','$'],
    ],)
);