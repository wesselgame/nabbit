const mathOperation = require( '../.internal/mathOperation' );

/**
 * Multiply two numbers.
 * 
 * @category Ciphers
 * @param {number} multiplier The first number in a multiplication.
 * @param {number} multiplicand The second number in a multiplication.
 * @returns {number} The product.
 * @example
 * 
 * multiply( 8, 5 )
 * // => 40
 */
module.exports = mathOperation( ( multiplier, multiplicand ) => multiplier * multiplicand, 1 );