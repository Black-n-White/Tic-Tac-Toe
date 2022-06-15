export default function doAIMove ( boardMatrix, difficulty )
{
    switch ( difficulty )
    {
        case 'easy':
            // AI move - random cell
            break;
        case 'medium':
            // If the player cna win next turn, AI prevents that
            // Else, AI move is a random cell
            break;
        case 'hard':
            // Maximum difficulty AI moves regarding all scenarios (maybe)
            break;
    }
}

