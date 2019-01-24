const type = require( '../type' );

/**
 * Join an array together with a custom `splitter` and a `conjoin` at the end
 * 
 * @category Array
 * @param {Array} array The array to join
 * @param {string} splitter The splitter inbetween ever entry
 * @param {string} conj The last splitter
 * @returns {string} The joined list
 * @example
 * 
 * list( [ 1, 2, 3 ], ', ', 'and' )
 * // => 1, 2 and 3
 */
module.exports = ( array, splitter = ', ', conj = 'and' ) => {
  const l = array === null ? 0 : array.length;
  
  if ( !l || type( splitter ) !== 0 || type( conj ) !== 0 ) return '';
  return `${array.slice( 0, -1 ).join( splitter )}${l > 1 ? ` ${conj} ` : ''}${array.slice( -1 )}`;
};