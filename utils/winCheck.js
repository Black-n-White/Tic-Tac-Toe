import doPlayerLose from "./playerLose.js";
import doPlayerWin from "./playerWin.js";
import doDraw from "./doDraw.js";

export default function checkForWin ( boardMatrix, difficulty )
{

    // check if the game has ended here

    let result;
    if ( ( ( boardMatrix[ 0 ] === boardMatrix[ 4 ] ) && ( boardMatrix[ 4 ] === boardMatrix[ 8 ] ) && ( boardMatrix[ 4 ] === 1 ) ) || ( ( boardMatrix[ 1 ] === boardMatrix[ 4 ] ) && ( boardMatrix[ 4 ] === boardMatrix[ 7 ] ) && ( boardMatrix[ 4 ] === 1 ) ) || ( ( boardMatrix[ 2 ] === boardMatrix[ 4 ] ) && ( boardMatrix[ 4 ] === boardMatrix[ 6 ] ) && ( boardMatrix[ 4 ] === 1 ) ) || ( ( boardMatrix[ 3 ] === boardMatrix[ 4 ] ) && ( boardMatrix[ 4 ] === boardMatrix[ 5 ] ) && ( boardMatrix[ 4 ] === 1 ) ) || ( ( boardMatrix[ 0 ] === boardMatrix[ 1 ] ) && ( boardMatrix[ 2 ] === boardMatrix[ 1 ] ) && ( boardMatrix[ 1 ] === 1 ) ) || ( ( boardMatrix[ 0 ] === boardMatrix[ 3 ] ) && ( boardMatrix[ 3 ] === boardMatrix[ 6 ] ) && ( boardMatrix[ 0 ] === 1 ) ) || ( ( boardMatrix[ 6 ] === boardMatrix[ 7 ] ) && ( boardMatrix[ 6 ] === boardMatrix[ 8 ] ) && ( boardMatrix[ 7 ] === 1 ) ) || ( ( boardMatrix[ 2 ] === boardMatrix[ 5 ] ) && ( boardMatrix[ 2 ] === boardMatrix[ 8 ] ) && ( boardMatrix[ 2 ] === 1 ) ) )
    {
        result = 'playerLose';
    }
    else if ( ( ( boardMatrix[ 0 ] === boardMatrix[ 4 ] ) && ( boardMatrix[ 4 ] === boardMatrix[ 8 ] ) && ( boardMatrix[ 4 ] === 2 ) ) || ( ( boardMatrix[ 1 ] === boardMatrix[ 4 ] ) && ( boardMatrix[ 4 ] === boardMatrix[ 7 ] ) && ( boardMatrix[ 4 ] === 2 ) ) || ( ( boardMatrix[ 2 ] === boardMatrix[ 4 ] ) && ( boardMatrix[ 4 ] === boardMatrix[ 6 ] ) && ( boardMatrix[ 4 ] === 2 ) ) || ( ( boardMatrix[ 3 ] === boardMatrix[ 4 ] ) && ( boardMatrix[ 4 ] === boardMatrix[ 5 ] ) && ( boardMatrix[ 4 ] === 2 ) ) || ( ( boardMatrix[ 0 ] === boardMatrix[ 1 ] ) && ( boardMatrix[ 2 ] === boardMatrix[ 1 ] ) && ( boardMatrix[ 1 ] === 2 ) ) || ( ( boardMatrix[ 0 ] === boardMatrix[ 3 ] ) && ( boardMatrix[ 3 ] === boardMatrix[ 6 ] ) && ( boardMatrix[ 0 ] === 2 ) ) || ( ( boardMatrix[ 6 ] === boardMatrix[ 7 ] ) && ( boardMatrix[ 6 ] === boardMatrix[ 8 ] ) && ( boardMatrix[ 7 ] === 2 ) ) || ( ( boardMatrix[ 2 ] === boardMatrix[ 5 ] ) && ( boardMatrix[ 2 ] === boardMatrix[ 8 ] ) && ( boardMatrix[ 2 ] === 2 ) ) )
    {
        result = 'playerWin';
    }
    else if ( !( boardMatrix.includes( 0 ) ) )
    {
        result = 'draw';
    } else
    {
        return;
    }
    setTimeout( () =>
    {

        // reset the board

        const board = document.getElementById( 'board' );
        const moveIndicator = document.getElementById( 'move-indicator' )
        board.innerHTML = '';
        moveIndicator.innerHTML = 'Your Move!';

        // tell the player the result here

        switch ( result )
        {
            case 'draw':
                doDraw();
                break;
            case 'playerWin':
                doPlayerWin( difficulty );
                break;
            case 'playerLose':
                doPlayerLose( difficulty );
                break;
        }

    }, 1000 );

    return true;
};
