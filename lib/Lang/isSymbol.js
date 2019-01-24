const getTag = ( val ) => {
  if ( val === null ) return val === undefined ? '[object Undefined]' : '[object Null]';
  return toString.call( val );
};

/**
 * Check if `val` is classified as  a `Symbol`
 * 
 * @category Lang
 * @param {*} val The value to check
 * @returns {boolean} `true` if `val` is a symbol, otherwise `false`
 * @example
 * 
 * isSymbol( Symbol.iterator )
 * // => true
 * 
 * isSymbol( 'abcd' )
 * // => false
 */
module.exports = ( val ) => {
  const type = typeof val;
  return type === 'symbol' || ( type === 'object' && val != null && getTag( val ) === '[object Symbol]' );
};