const mathOperation = require( '../.internal/mathOperation' );

/**
 * Divide two numbers.
 * 
 * @category Ciphers
 * @param {number} dividend The first number in a division.
 * @param {number} divisor The second number in a division.
 * @returns {number} The quotient.
 * @example
 * 
 * divide( 8, 4 )
 * // => 2
 */
module.exports = mathOperation( ( dividend, divisor ) => dividend / divisor, 1 );