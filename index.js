import doRestart from "./utils/restartGame.js";
import startGame from "./utils/startGame.js";

const startGameButton = document.getElementById( 'start-game-btn' );
const playAgainButtons = document.querySelectorAll( '.play-again' );
const openModalButton = document.getElementById( 'modal-open-btn' );
const modalContainer = document.getElementById( 'modal-container' );
const modalHeading1 = document.getElementById( 'modal-heading-1' );
const modalHeading2 = document.getElementById( 'modal-heading-2' );
const modalText1 = document.getElementById( 'modal-text-1' );
const modalText2 = document.getElementById( 'modal-text-2' );

startGameButton.addEventListener( 'click', startGame );

playAgainButtons.forEach( button =>
{
    button.addEventListener( 'click', doRestart );
} );

openModalButton.addEventListener( 'click', () =>
{
    modalContainer.style.display = 'block';
    setTimeout( () =>
    {
        modalContainer.style.opacity = '1';
    }, 10 );
} );

modalContainer.addEventListener( 'click', ( event ) =>
{
    if ( event.target.id == 'modal-container' )
    {
        modalContainer.style.opacity = '0';
        setTimeout( () =>
        {
            modalContainer.style.display = 'none';
        }, 300 );
    };
} );

modalHeading1.addEventListener( 'click', () =>
{
    modalHeading1.classList.add( 'modal-heading-active' );
    modalHeading2.classList.remove( 'modal-heading-active' );
    modalText1.classList.add( 'modal-text-active' );
    modalText2.classList.remove( 'modal-text-active' );
} );

modalHeading2.addEventListener( 'click', () =>
{
    modalHeading2.classList.add( 'modal-heading-active' );
    modalHeading1.classList.remove( 'modal-heading-active' );
    modalText2.classList.add( 'modal-text-active' );
    modalText1.classList.remove( 'modal-text-active' );
} );

