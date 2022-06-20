export default function doRestart ()
{
    const wrappers = document.querySelectorAll( '.wrapper' );
    const startGameWrapper = document.getElementById( 'start-game-wrapper' );
    wrappers.forEach( wrapper =>
    {
        wrapper.classList.remove( 'active-wrapper' );
    } );

    startGameWrapper.classList.add( 'active-wrapper' );
};
