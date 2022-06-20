export default function indexOfAll ( array, value )
{
    let newArray = [];
    for ( let i = 0; i < array.length; i++ )
    {
        const element = array[ i ];
        if ( element === value )
        {
            newArray[ newArray.length ] = i;
        }
    }
    return newArray;
};
