const symbol = require( './Lang/isSymbol' );
const types  = {
  'string'   : 0,
  'symbol'   : 1,
  'object'   : 2,
  'boolean'  : 3,
  'function' : 4,
  'array'    : 5,
  'float'    : 6,
  'symbol'   : 7,
  'integer'  : 8,
  'NULL'     : 9,
  'undefined': 10
};

/**
 * Return the type of `val` in an integer
 * 
 * @category Checks
 * @param {*} v The value to check for
 * @returns {number} The value's type
 * @example
 * 
 * type( [ 1, 2 ] )
 * // => 5
 */
module.exports = ( v ) => {
  if ( Array.isArray( v ) ) return types[ 'array' ];
  else if ( symbol( v ) ) return types[ 'symbol' ];
  else if ( Number( v ) === v && v % 1 !== 0 ) return types[ 'float' ];
  else if ( Number( v ) === v && v % 1 === 0 ) return types[ 'integer' ];
  else if ( types.hasOwnProperty( typeof v ) ) return types[ typeof v ];
  else if ( v === null ) return types[ 'NULL' ];
  else return types[ 'undefined' ];
};