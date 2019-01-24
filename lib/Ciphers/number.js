const type = require( '../type' );

/**
 * Generate a random number within the randge of `min` and `max`.
 * 
 * @category Ciphers
 * @param {number} [min=0] The minimum number.
 * @param {number} [max=0] The maximum possible number.
 * @returns {number} The randomly generated number.
 * @example
 * 
 * number( 0, 10 )
 * // => 7
 */
module.exports = ( min = 0, max = 10 ) => {
  if ( type( min ) !== 8 ) min = 0;
  if ( type( max ) !== 8 ) max = min > max ? min : 10;

  return ( Math.floor( Math.random() * ( max +1 - min ) ) + min );
};