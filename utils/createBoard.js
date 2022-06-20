export default function createBoard ()
{
    const boardDiv = document.getElementById( 'board' );
    for ( let i = 0; i < 9; i++ )
    {
        const cell = document.createElement( 'div' );
        boardDiv.append( cell );
        cell.classList.add( 'cell' );
        cell.id = i;
    };
};
