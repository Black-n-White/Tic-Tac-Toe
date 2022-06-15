import doPlayerLose from "./playerLose.js";
import doPlayerWin from "./playerWin.js";
import doDraw from "./doDraw.js"

export default function checkForWin ( boardMatrix, difficulty )
{
    // check if the game has ended here
    // if it has not, return
    // if it has, set the result here. 3 options for the result:
    //
    // draw
    // playerWin
    // playerLose
    result = ''
    switch ( result )
    {
        case 'draw':
            doDraw( difficulty );
            break;
        case 'playerWin':
            doPlayerWin( difficulty );
            break;
        case 'playerLose':
            doPlayerLose( difficulty );
            break;
    }
}