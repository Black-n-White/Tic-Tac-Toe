import createBoard from "./createBoard.js";

export default function startGame ( board, boardMatrix, difficulty )
{
    console.log( difficulty );
    createBoard( board, boardMatrix );
}