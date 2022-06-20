export default function doDraw ()
{
    const drawWrapper = document.getElementById( 'draw-wrapper' );
    const wrappers = document.querySelectorAll( '.wrapper' );
    const drawSuggestion = document.getElementById( 'suggestion-draw' );

    drawSuggestion.innerText = "You couldn't beat the algorythm, but it couldn't beat you either. Try again ig";

    wrappers.forEach( wrapper =>
    {
        wrapper.classList.remove( 'active-wrapper' );
    } );

    drawWrapper.classList.add( 'active-wrapper' );
};
