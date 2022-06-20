// timeouts left to add

import createBoard from "./createBoard.js";
import updateBoard from "./updateBoard.js";
import checkForWin from "./winCheck.js";
import doAIMove from "./AI.js";

export default function startGame ()
{
    const difficultySelect = document.getElementById( 'difficulty-select' );
    const startGameWrapper = document.getElementById( 'start-game-wrapper' );
    const gameWrapper = document.getElementById( 'game-wrapper' );
    const moveIndicator = document.getElementById( 'move-indicator' )

    // boardMatrix legend:
    // 0 - free cell
    // 1 - AI cell
    // 2 - player cell

    let boardMatrix = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0,
    ];

    let difficulty = difficultySelect.value;

    createBoard();

    startGameWrapper.classList.remove( 'active-wrapper' );
    gameWrapper.classList.add( 'active-wrapper' );

    const cells = document.querySelectorAll( '.cell' );

    cells.forEach( cell =>
    {
        cell.addEventListener( 'click', function doGameProcess ()
        {
            if ( cell.classList.contains( 'player-cell' ) || cell.classList.contains( 'AI-cell' ) || cell.classList.contains( 'active-cell' ) )
            {
                return;
            };
            cells.forEach( cell =>
            {
                cell.classList.add( 'active-cell' );
            } );
            moveIndicator.innerHTML = 'AI is thinking';
            setTimeout( () =>
            {
                moveIndicator.innerHTML = 'AI is thinking.';
            }, 200 );
            setTimeout( () =>
            {
                moveIndicator.innerHTML = 'AI is thinking..';
            }, 400 );
            setTimeout( () =>
            {
                moveIndicator.innerHTML = 'AI is thinking...';
            }, 600 );
            boardMatrix[ cell.id ] = 2;
            updateBoard( boardMatrix, cells );
            if ( !checkForWin( boardMatrix, difficulty ) )
            {
                setTimeout( () =>
                {
                    doAIMove( boardMatrix, difficulty );
                    updateBoard( boardMatrix, cells );
                    if ( !checkForWin( boardMatrix, difficulty ) )
                    {
                        moveIndicator.innerHTML = 'Your Move!';
                        cells.forEach( cell =>
                        {
                            cell.classList.remove( 'active-cell' );
                        } );
                    } else
                    {
                        moveIndicator.innerHTML = 'The game has ended!';
                        setTimeout( () =>
                        {
                            cells.forEach( cell =>
                            {
                                cell.classList.remove( 'active-cell' );
                            } );
                        }, 1000 );
                    };
                }, 800 );
            };
        } );
    } );
};
