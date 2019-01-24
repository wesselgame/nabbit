/**
 * Remove all spaces from `str`.
 * 
 * @category String
 * @param {string} str The string to cramp together.
 * @returns {string} The cramped string.
 * @example
 * 
 * cramp( 'H e l l o' )
 * // => Hello
 */
module.exports = ( str ) => {
  if ( typeof str !== 'string' ) return '';
  return str.toString().replace( /\s/g, '' );
};