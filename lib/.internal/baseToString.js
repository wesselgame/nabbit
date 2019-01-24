const isSymbol = require( '../Lang/isSymbol' );

/** Used as references for various `Number` constants. */
const INFINITY = 1 / 0

/** Used to convert symbols to primitives and strings. */
const symbolToString = Symbol.prototype.toString;

const baseToString = ( val ) => {
  if ( typeof val === 'string'  ) return val;
  if ( Array.isArray( val ) ) return `${val.map( baseToString )}`;
  if ( isSymbol( val ) )  return symbolToString ? symbolToString.call( val ) : '';

  const result = `${val}`;
  return ( result === '0' && ( 1 / val ) === -INFINITY ) ? '-0' : result;
}

module.exports = baseToString;