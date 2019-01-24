/**
 * Return the first found match with the `key` of `val`.
 * 
 * @param {object} obj The object to filter through.
 * @param {*} val The value to search for.
 * @returns {string} The first match found.
 * @example
 * 
 * valKey( { 1: 2, 3: 2, 4: 1 }, 2 )
 * // => '1'
 */
module.exports = ( obj, val ) => { return Object.keys( obj ).find( ( k ) => obj[ k ] === val ); };