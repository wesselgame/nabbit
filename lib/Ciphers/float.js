const type = require( '../type' );

/**
 * Generate a random float within a specific range.
 * 
 * @category Ciphers
 * @param {number} [min=0] The minimum float.
 * @param {number} [max=0] The maximum possible float.
 * @returns {number} The randomly generated float.
 * @example
 * 
 * float( 0, 0.5 ).toFixed( 2 )
 * // => 0.31
 */

module.exports = ( min = 0, max = 10 ) => {
  if ( typeof min !== 'number' ) min = 0;
  if ( typeof max !== 'number' ) max = min > max ? min : 10;

  return ( Math.random() * ( max - min ) + min );
};