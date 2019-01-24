/**
 * Reverse `str`.
 * 
 * @category String
 * @param {string} str The string to reverse.
 * @returns {string} The reversed string.
 * @example
 * 
 * reverse( 'Hello' )
 * // => olleH
 */
module.exports = ( str ) => {
  if ( typeof str !== 'string' ) return '';
  return str.toString().split( '' ).map( ( a, b ) => b % 2 ? a.toLowerCase() : a.toUpperCase() ).join( '' );
};