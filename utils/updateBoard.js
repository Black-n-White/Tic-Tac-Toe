export default function updateBoard ( boardMatrix, cells )
{
    for ( let i = 0; i < 9; i++ )
    {
        const cell = cells[ i ];
        const cellValue = boardMatrix[ i ];
        if ( cellValue === 0 )
        {
            cell.innerHTML = '';
        } else if ( cellValue === 1 )
        {
            cell.innerHTML = '<img src="./images/circle.png" alt="o">'
            cell.classList.add( 'AI-cell' );
        } else
        {
            cell.innerHTML = '<img src="./images/cross.png" alt="x">'
            cell.classList.add( 'player-cell' );
        };
    };
};
