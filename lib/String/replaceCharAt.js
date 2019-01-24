/**
 * Replace the character from `str` at `index` with `char`.
 * 
 * @category String
 * @param {string} str The original string.
 * @param {number} [index=0] The index of the character to replace.
 * @param {string} char The replacement character.
 * @returns {string} The modified string.
 * @example
 * 
 * replaceCharAt( 'Hello', 2, 'o' )
 * // => Heolo
 */
module.exports = ( str, index = 0, char ) => {
  if ( typeof str !== 'string' ) return '';
  if ( index > str.length - 1 ) return str;

  return str.substr( 0, index ) + char + str.substr( index + 1 );
};