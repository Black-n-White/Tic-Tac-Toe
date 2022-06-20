// hard difficulty left to do

import indexOfAll from "./indexOfAll.js";

export default function doAIMove ( boardMatrix, difficulty )
{
    switch ( difficulty )
    {
        case 'Easy':

            // AI move - random cell

            let freeCells = indexOfAll( boardMatrix, 0 );
            let move = freeCells[ Math.floor( Math.random() * freeCells.length ) ];
            boardMatrix[ move ] = 1;
            return boardMatrix;
        case 'Medium':

            // If the AI can win this turn, AI does so
            // Else If the player can win next turn, AI prevents that
            // Else, AI move is a random cell

            if ( ( ( boardMatrix[ 1 ] === boardMatrix[ 2 ] && boardMatrix[ 1 ] === 1 ) || ( boardMatrix[ 3 ] === boardMatrix[ 6 ] && boardMatrix[ 3 ] === 1 ) || ( boardMatrix[ 4 ] === boardMatrix[ 8 ] && boardMatrix[ 4 ] === 1 ) ) && ( boardMatrix[ 0 ] === 0 ) )
            {
                boardMatrix[ 0 ] = 1;
            } else if ( ( ( boardMatrix[ 0 ] === boardMatrix[ 2 ] && boardMatrix[ 0 ] === 1 ) || ( boardMatrix[ 4 ] === boardMatrix[ 7 ] && boardMatrix[ 7 ] === 1 ) ) && ( boardMatrix[ 1 ] === 0 ) )
            {
                boardMatrix[ 1 ] = 1;
            } else if ( ( ( boardMatrix[ 0 ] === boardMatrix[ 1 ] && boardMatrix[ 0 ] === 1 ) || ( boardMatrix[ 5 ] === boardMatrix[ 8 ] && boardMatrix[ 5 ] === 1 ) || ( boardMatrix[ 4 ] === boardMatrix[ 6 ] && boardMatrix[ 4 ] === 1 ) ) && ( boardMatrix[ 2 ] === 0 ) )
            {
                boardMatrix[ 2 ] = 1;
            } else if ( ( ( boardMatrix[ 4 ] === boardMatrix[ 5 ] && boardMatrix[ 4 ] === 1 ) || ( boardMatrix[ 0 ] === boardMatrix[ 6 ] && boardMatrix[ 0 ] === 1 ) ) && ( boardMatrix[ 3 ] === 0 ) )
            {
                boardMatrix[ 3 ] = 1;
            } else if ( ( ( boardMatrix[ 0 ] === boardMatrix[ 8 ] && boardMatrix[ 0 ] === 1 ) || ( boardMatrix[ 1 ] === boardMatrix[ 7 ] && boardMatrix[ 1 ] === 1 ) || ( boardMatrix[ 2 ] === boardMatrix[ 6 ] && boardMatrix[ 2 ] === 1 ) || ( boardMatrix[ 3 ] == boardMatrix[ 5 ] && boardMatrix[ 3 ] === 1 ) ) && ( boardMatrix[ 4 ] === 0 ) )
            {
                boardMatrix[ 4 ] = 1;
            } else if ( ( ( boardMatrix[ 3 ] === boardMatrix[ 4 ] && boardMatrix[ 3 ] === 1 ) || ( boardMatrix[ 2 ] === boardMatrix[ 8 ] && boardMatrix[ 2 ] === 1 ) ) && ( boardMatrix[ 5 ] === 0 ) )
            {
                boardMatrix[ 5 ] = 1;
            } else if ( ( ( boardMatrix[ 0 ] === boardMatrix[ 3 ] && boardMatrix[ 0 ] === 1 ) || ( boardMatrix[ 7 ] === boardMatrix[ 8 ] && boardMatrix[ 7 ] === 1 ) || ( boardMatrix[ 4 ] === boardMatrix[ 2 ] && boardMatrix[ 4 ] === 1 ) ) && ( boardMatrix[ 6 ] === 0 ) )
            {
                boardMatrix[ 6 ] = 1;
            } else if ( ( ( boardMatrix[ 6 ] === boardMatrix[ 8 ] && boardMatrix[ 6 ] === 1 ) || ( boardMatrix[ 4 ] === boardMatrix[ 1 ] && boardMatrix[ 4 ] === 1 ) ) && ( boardMatrix[ 7 ] === 0 ) )
            {
                boardMatrix[ 7 ] = 1;
            } else if ( ( ( boardMatrix[ 6 ] === boardMatrix[ 7 ] && boardMatrix[ 6 ] === 1 ) || ( boardMatrix[ 2 ] === boardMatrix[ 5 ] && boardMatrix[ 2 ] === 1 ) || ( boardMatrix[ 4 ] === boardMatrix[ 0 ] && boardMatrix[ 4 ] === 1 ) ) && ( boardMatrix[ 8 ] === 0 ) )
            {
                boardMatrix[ 8 ] = 1;
            } else if ( ( ( boardMatrix[ 1 ] === boardMatrix[ 2 ] && boardMatrix[ 1 ] === 2 ) || ( boardMatrix[ 3 ] === boardMatrix[ 6 ] && boardMatrix[ 3 ] === 2 ) || ( boardMatrix[ 4 ] === boardMatrix[ 8 ] && boardMatrix[ 4 ] === 2 ) ) && ( boardMatrix[ 0 ] === 0 ) )
            {
                boardMatrix[ 0 ] = 1;
            } else if ( ( ( boardMatrix[ 0 ] === boardMatrix[ 2 ] && boardMatrix[ 0 ] === 2 ) || ( boardMatrix[ 4 ] === boardMatrix[ 7 ] && boardMatrix[ 4 ] === 2 ) ) && ( boardMatrix[ 1 ] === 0 ) )
            {
                boardMatrix[ 1 ] = 1;
            } else if ( ( ( boardMatrix[ 0 ] === boardMatrix[ 1 ] && boardMatrix[ 0 ] === 2 ) || ( boardMatrix[ 5 ] === boardMatrix[ 8 ] && boardMatrix[ 5 ] === 2 ) || ( boardMatrix[ 4 ] === boardMatrix[ 6 ] && boardMatrix[ 4 ] === 2 ) ) && ( boardMatrix[ 2 ] === 0 ) )
            {
                boardMatrix[ 2 ] = 1;
            } else if ( ( ( boardMatrix[ 4 ] === boardMatrix[ 5 ] && boardMatrix[ 4 ] === 2 ) || ( boardMatrix[ 0 ] === boardMatrix[ 6 ] && boardMatrix[ 0 ] === 2 ) ) && ( boardMatrix[ 3 ] === 0 ) )
            {
                boardMatrix[ 3 ] = 1;
            } else if ( ( ( boardMatrix[ 0 ] === boardMatrix[ 8 ] && boardMatrix[ 0 ] === 2 ) || ( boardMatrix[ 1 ] === boardMatrix[ 7 ] && boardMatrix[ 1 ] === 2 ) || ( boardMatrix[ 2 ] === boardMatrix[ 6 ] && boardMatrix[ 2 ] === 2 ) || ( boardMatrix[ 3 ] === boardMatrix[ 5 ] && boardMatrix[ 3 ] === 2 ) ) && ( boardMatrix[ 4 ] === 0 ) )
            {
                boardMatrix[ 4 ] = 1;
            } else if ( ( ( boardMatrix[ 3 ] === boardMatrix[ 4 ] && boardMatrix[ 3 ] === 2 ) || ( boardMatrix[ 2 ] === boardMatrix[ 8 ] && boardMatrix[ 2 ] === 2 ) ) && ( boardMatrix[ 5 ] === 0 ) )
            {
                boardMatrix[ 5 ] = 1;
            } else if ( ( ( boardMatrix[ 0 ] === boardMatrix[ 3 ] && boardMatrix[ 0 ] === 2 ) || ( boardMatrix[ 7 ] === boardMatrix[ 8 ] && boardMatrix[ 7 ] === 2 ) || ( boardMatrix[ 4 ] === boardMatrix[ 2 ] && boardMatrix[ 4 ] === 2 ) ) && ( boardMatrix[ 6 ] === 0 ) )
            {
                boardMatrix[ 6 ] = 1;
            } else if ( ( ( boardMatrix[ 6 ] === boardMatrix[ 8 ] && boardMatrix[ 6 ] === 2 ) || ( boardMatrix[ 4 ] === boardMatrix[ 1 ] && boardMatrix[ 4 ] === 2 ) ) && ( boardMatrix[ 7 ] === 0 ) )
            {
                boardMatrix[ 7 ] = 1;
            } else if ( ( ( boardMatrix[ 6 ] === boardMatrix[ 7 ] && boardMatrix[ 7 ] === 2 ) || ( boardMatrix[ 2 ] === boardMatrix[ 5 ] && boardMatrix[ 2 ] === 2 ) || ( boardMatrix[ 4 ] === boardMatrix[ 0 ] && boardMatrix[ 4 ] === 2 ) ) && ( boardMatrix[ 8 ] === 0 ) )
            {
                boardMatrix[ 8 ] = 1;
            }
            else
            {
                return ( doAIMove( boardMatrix, 'Easy' ) );
            };
            return ( boardMatrix );
        case 'Hard':

            // corner / side first move - AI takes center so that player can almost never win

            if ( ( ( boardMatrix[ 0 ] == 2 ) || ( boardMatrix[ 2 ] == 2 ) || ( boardMatrix[ 6 ] == 2 ) || ( boardMatrix[ 8 ] == 2 ) ) && ( boardMatrix[ 4 ] == 0 ) )
            {
                boardMatrix[ 4 ] = 1;
            }

            // prevent forks of type:
            //
            // x   x
            //   o
            // o   x

            else if ( ( ( ( boardMatrix[ 0 ] == 2 ) && ( boardMatrix[ 8 ] == 2 ) && ( boardMatrix[ 4 ] == 1 ) && ( boardMatrix[ 1 ] == 0 ) && ( boardMatrix[ 2 ] == 0 ) && ( boardMatrix[ 3 ] == 0 ) && ( boardMatrix[ 5 ] == 0 ) && ( boardMatrix[ 6 ] == 0 ) && ( boardMatrix[ 7 ] == 0 ) ) || ( ( boardMatrix[ 2 ] == 2 ) && ( boardMatrix[ 6 ] == 2 ) && ( boardMatrix[ 4 ] == 1 ) && ( boardMatrix[ 0 ] == 0 ) && ( boardMatrix[ 1 ] == 0 ) && ( boardMatrix[ 3 ] == 0 ) && ( boardMatrix[ 5 ] == 0 ) && ( boardMatrix[ 7 ] == 0 ) && ( boardMatrix[ 8 ] == 0 ) ) ) && ( boardMatrix[ 1 ] == 0 ) )
            {
                boardMatrix[ 1 ] = 1;
            }

            // prevent forks of type:
            //
            //   x x
            //   o x
            // o

            else if ( ( boardMatrix[ 1 ] == 2 ) && ( boardMatrix[ 3 ] == 2 ) && ( boardMatrix[ 4 ] == 1 ) && ( boardMatrix[ 0 ] == 0 ) )
            {
                boardMatrix[ 0 ] = 1;
            } else if ( ( boardMatrix[ 1 ] == 2 ) && ( boardMatrix[ 5 ] == 2 ) && ( boardMatrix[ 4 ] == 1 ) && ( boardMatrix[ 2 ] == 0 ) )
            {
                boardMatrix[ 2 ] = 1;
            } else if ( ( boardMatrix[ 5 ] == 2 ) && ( boardMatrix[ 7 ] == 2 ) && ( boardMatrix[ 4 ] == 1 ) && ( boardMatrix[ 8 ] == 0 ) )
            {
                boardMatrix[ 8 ] = 1;
            } else if ( ( boardMatrix[ 3 ] == 2 ) && ( boardMatrix[ 7 ] == 2 ) && ( boardMatrix[ 4 ] == 1 ) && ( boardMatrix[ 6 ] == 0 ) )
            {
                boardMatrix[ 6 ] = 1;
            }

            // prevent forks of type:
            // 
            //   x x
            //   o
            //   o x

            else if ( ( boardMatrix[ 4 ] == 1 ) && ( boardMatrix[ 1 ] == 2 ) && ( boardMatrix[ 8 ] == 2 ) && ( boardMatrix[ 2 ] == 0 ) && ( boardMatrix[ 0 ] == 0 ) && ( boardMatrix[ 3 ] == 0 ) && ( boardMatrix[ 5 ] == 0 ) && ( boardMatrix[ 6 ] == 0 ) && ( boardMatrix[ 7 ] == 0 ) )
            {
                boardMatrix[ 2 ] = 1;
            } else if ( ( boardMatrix[ 4 ] == 1 ) && ( boardMatrix[ 1 ] == 2 ) && ( boardMatrix[ 6 ] == 2 ) && ( boardMatrix[ 0 ] == 0 ) && ( boardMatrix[ 2 ] == 0 ) && ( boardMatrix[ 3 ] == 0 ) && ( boardMatrix[ 5 ] == 0 ) && ( boardMatrix[ 7 ] == 0 ) && ( boardMatrix[ 8 ] == 0 ) )
            {
                boardMatrix[ 0 ] = 1;
            } else if ( ( boardMatrix[ 4 ] == 1 ) && ( boardMatrix[ 0 ] == 2 ) && ( boardMatrix[ 5 ] == 2 ) && ( boardMatrix[ 2 ] == 0 ) && ( boardMatrix[ 1 ] == 0 ) && ( boardMatrix[ 3 ] == 0 ) && ( boardMatrix[ 6 ] == 0 ) && ( boardMatrix[ 7 ] == 0 ) && ( boardMatrix[ 8 ] == 0 ) )
            {
                boardMatrix[ 2 ] = 1;
            } else if ( ( boardMatrix[ 4 ] == 1 ) && ( boardMatrix[ 6 ] == 2 ) && ( boardMatrix[ 5 ] == 2 ) && ( boardMatrix[ 8 ] == 0 ) && ( boardMatrix[ 0 ] == 0 ) && ( boardMatrix[ 1 ] == 0 ) && ( boardMatrix[ 2 ] == 0 ) && ( boardMatrix[ 3 ] == 0 ) && ( boardMatrix[ 7 ] == 0 ) )
            {
                boardMatrix[ 8 ] = 1;
            } else if ( ( boardMatrix[ 4 ] == 1 ) && ( boardMatrix[ 7 ] == 2 ) && ( boardMatrix[ 0 ] == 2 ) && ( boardMatrix[ 6 ] == 0 ) && ( boardMatrix[ 1 ] == 0 ) && ( boardMatrix[ 2 ] == 0 ) && ( boardMatrix[ 3 ] == 0 ) && ( boardMatrix[ 5 ] == 0 ) && ( boardMatrix[ 8 ] == 0 ) )
            {
                boardMatrix[ 6 ] = 1;
            } else if ( ( boardMatrix[ 4 ] == 1 ) && ( boardMatrix[ 7 ] == 2 ) && ( boardMatrix[ 2 ] == 2 ) && ( boardMatrix[ 8 ] == 0 ) && ( boardMatrix[ 0 ] == 0 ) && ( boardMatrix[ 1 ] == 0 ) && ( boardMatrix[ 3 ] == 0 ) && ( boardMatrix[ 5 ] == 0 ) && ( boardMatrix[ 6 ] == 0 ) )
            {
                boardMatrix[ 8 ] = 1;
            } else if ( ( boardMatrix[ 4 ] == 1 ) && ( boardMatrix[ 3 ] == 2 ) && ( boardMatrix[ 8 ] == 2 ) && ( boardMatrix[ 6 ] == 0 ) && ( boardMatrix[ 0 ] == 0 ) && ( boardMatrix[ 1 ] == 0 ) && ( boardMatrix[ 2 ] == 0 ) && ( boardMatrix[ 5 ] == 0 ) && ( boardMatrix[ 7 ] == 0 ) )
            {
                boardMatrix[ 6 ] = 1;
            } else if ( ( boardMatrix[ 4 ] == 1 ) && ( boardMatrix[ 3 ] == 2 ) && ( boardMatrix[ 2 ] == 2 ) && ( boardMatrix[ 0 ] == 0 ) && ( boardMatrix[ 1 ] == 0 ) && ( boardMatrix[ 5 ] == 0 ) && ( boardMatrix[ 6 ] == 0 ) && ( boardMatrix[ 7 ] == 0 ) && ( boardMatrix[ 8 ] == 0 ) )
            {
                boardMatrix[ 0 ] = 1;
            }

            // if the center position isn't taken, take it. This makes the game way harder for the player

            else if ( boardMatrix[ 4 ] == 0 )
            {
                boardMatrix[ 4 ] = 1;
            }

            // if the player took the center position on the first move, take a corner cell

            else if ( ( boardMatrix[ 4 ] == 2 ) && ( boardMatrix[ 0 ] === 0 ) && ( boardMatrix[ 1 ] === 0 ) && ( boardMatrix[ 2 ] === 0 ) && ( boardMatrix[ 3 ] === 0 ) && ( boardMatrix[ 5 ] === 0 ) && ( boardMatrix[ 6 ] === 0 ) && ( boardMatrix[ 7 ] === 0 ) && ( boardMatrix[ 8 ] === 0 ) )
            {
                switch ( Math.floor( Math.random() * 4 ) )
                {
                    case 0:
                        boardMatrix[ 0 ] = 1;
                        break;
                    case 1:
                        boardMatrix[ 2 ] = 1;
                        break;
                    case 2:
                        boardMatrix[ 6 ] = 1;
                        break;
                    case 3:
                        boardMatrix[ 8 ] = 1;
                        break;
                }
            }

            // else, use the medium difficulty algorythm

            else
            {
                return ( doAIMove( boardMatrix, 'Medium' ) );
            };
    };
};
