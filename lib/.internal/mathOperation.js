const baseToNumber = require( './baseToNumber' );
const baseToString = require( './baseToString' );

module.exports = ( operator, defaultVal ) => {
  return ( val, other ) => {
    if ( !val && !other ) return defaultVal;
    if ( val && !other ) return val;
    if ( !val && other ) return other;
    if ( typeof val === 'string' || typeof other === 'string' ) {
      val   = baseToString( val );
      other = baseToString( other );
    } else {
      val   = baseToNumber( val );
      other = baseToNumber( other );
    }
    return operator( val, other );
  }
};