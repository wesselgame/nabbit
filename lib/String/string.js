const type = require( '../type' );

/**
 * Generate a random string using a specified `length` and `seed`.
 * 
 * @category String
 * @param {number} [length=1] The length of the string.
 * @param {string} seed The seed to use.
 * @returns {string} The generated string.
 * @example
 * 
 * string( 8 )
 * // => NtJcuDzA
 * 
 * string( 4, 'ab' )
 * // => abba
 */
module.exports = ( length = 1, seed = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' ) => {
  let text = '';
  
  if ( type( seed ) !== 0 || seed.length <= 0 || type( length ) !== 8 ) return text;
  for( let i = 0; i < length; i++ ) text += seed.charAt( Math.floor( Math.random() * seed.length ) );

  return text;
};