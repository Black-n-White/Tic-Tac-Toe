export default function doPlayerWin ( difficulty = 'Easy' )
{
    const winWrapper = document.getElementById( 'win-wrapper' );
    const wrappers = document.querySelectorAll( '.wrapper' );
    const winSuggestion = document.getElementById( 'suggestion-win' );

    wrappers.forEach( wrapper =>
    {
        wrapper.classList.remove( 'active-wrapper' );
    } );

    if ( difficulty === 'Easy' )
    {
        winSuggestion.innerText = 'Well that was easy. Maybe you should try Medium difficulty now';
    } else if ( difficulty === 'Medium' )
    {
        winSuggestion.innerText = 'Not bad, not bad. Maybe you should try Hard difficulty now';
    } else
    {
        winSuggestion.innerText = 'Impressive. You have managed to win against hard difficulty, congratulations on beating the algorythm!';
    };

    winWrapper.classList.add( 'active-wrapper' );
};
