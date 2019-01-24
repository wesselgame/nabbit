/**
 * Space out all characters from `str`.
 * 
 * @category String
 * @param {string} str The string to space out.
 * @returns {string} The spaced out string.
 * @example
 * 
 * space( 'Hello' )
 * // => H e l l o
 */
module.exports = ( str ) => {
  if ( typeof str !== 'string' ) return '';
  return str.toString().split( '' ).join( ' ' );
};