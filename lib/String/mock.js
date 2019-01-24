/**
 * Transform `str` to have random capital letters.
 * 
 * @category String
 * @param {string} str The string to mock.
 * @returns {string} The mocked string.
 * @example
 * 
 * mock( 'Hello' )
 * // => HeLlO
 */
module.exports = ( str ) => {
  if ( typeof str !== 'string' ) return '';
  return str.toString().split( '' ).map( ( a, b ) => b % 2 ? a.toLowerCase() : a.toUpperCase() ).join( '' );
};