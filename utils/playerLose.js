export default function doPlayerLose ( difficulty = 'Easy' )
{
    const loseWrapper = document.getElementById( 'lose-wrapper' );
    const wrappers = document.querySelectorAll( '.wrapper' );
    const loseSuggestion = document.getElementById( 'suggestion-lose' );

    wrappers.forEach( wrapper =>
    {
        wrapper.classList.remove( 'active-wrapper' )
    } );

    if ( difficulty === 'Easy' )
    {
        loseSuggestion.innerText = 'Tbh idk how you managed to lose on easy difficulty, try again ig';
    } else if ( difficulty === 'Medium' )
    {
        loseSuggestion.innerText = "So you're not so great at tic tac toe, are you? Maybe you should try easy difficulty instead";
    } else
    {
        loseSuggestion.innerText = "Hard is hard, I don't blame you for losing. Maybe you should try medium difficulty instead";
    };

    loseWrapper.classList.add( 'active-wrapper' );
};
