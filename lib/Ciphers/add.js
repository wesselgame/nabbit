const mathOperation = require( '../.internal/mathOperation' );

/**
 * Add two numbers together.
 * 
 * @category Ciphers
 * @param {number} augend The first number in an addition.
 * @param {number} addend The second number in an addition.
 * @returns {number} The total.
 * @example
 * 
 * add( 8, 5 )
 * // => 13
 */
module.exports = mathOperation( ( augend, addend ) => augend + addend, 0 );
