/**
 * Rerearrange every entry in `array` to a random position
 * 
 * @category Array
 * @param {Array} array The array to scramble
 * @returns {Array} The scrambled array
 * @example
 * 
 * scramble([ 1, 2, 3 ])
 * // => [ 3, 1, 2 ]
 * 
 * scramble( 'Hello'.split( '' ) ).join( '' )
 * // => elHlo
 */
module.exports = ( array ) => {
  if ( !Array.isArray( array ) ) return [];

  let current = array.length;
  let temp, rand;
  while( 0 !== current ) {
    rand = Math.floor( Math.random() * current );
    current--;

    temp             = array[ current ];
    array[ current ] = array[ rand ];
    array[ rand ]    = temp;
  }

  return array;
};