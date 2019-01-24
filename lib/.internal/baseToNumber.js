const isSymbol = require( '../Lang/isSymbol' );

/** Used as refrence for various `Number`constants */
const NAN = 0 / 0;

module.exports = ( val ) => {
  if ( typeof val === 'number' ) return val;
  if ( isSymbol( val ) ) return NAN;
  
  return +val;
};