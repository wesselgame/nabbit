/**
 * Splits an array into multiple array specified with the `size` argument
 * If `array` can't be split evenly, the final chunk will be the remaining elements
 * 
 * @category Array
 * @param {Array} array The array to chunk
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns a new array of all the chunks
 * @example
 * 
 * chunk([ 'a', 'b', 'c', 'd' ], 2)
 * // => [[ 'a', 'b' ], [ 'c', 'd' ]]
 * 
 * chunk([ 'a', 'b', 'c', 'd' ], 3)
 * // => [[ 'a', 'b', 'c' ], [ 'd' ]]
 */
module.exports = ( array, size = 1 ) => {
  size  = Math.max( size, 0 );
  let i = 0;
  let c = [];  
  
  if ( !Array.isArray( array ) || size < 1 ) return [];
  while ( i < array.length ) c.push( array.slice( i, i += size ) );

  return c;
};