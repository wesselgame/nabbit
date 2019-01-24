process.nabbit = {};
const nabbit = exports;

// Checks
nabbit.type  = require( './type' );
// Arrays
nabbit.scramble = require( './Array/scramble' );
nabbit.chunk	  = require( './Array/chunk' );
nabbit.list     = require( './Array/list' );
// Objects
nabbit.valKey = require( './Object/valKey' );
// Lang
nabbit.isSymbol = require( './Lang/isSymbol' );
// Ciphers
nabbit.add      = require( './Ciphers/add' );
nabbit.ceil     = require( './Ciphers/ceil' );
nabbit.float    = require( './Ciphers/float' );
nabbit.number   = require( './Ciphers/number' );
nabbit.divide   = require( './Ciphers/divide' ); 
nabbit.meanBy   = require( './Ciphers/meanBy' );
nabbit.subtract = require( './Ciphers/subtract' );
nabbit.multiply = require( './Ciphers/multiply' );
// String
nabbit.mock          = require( './String/mock' );
nabbit.cramp         = require( './String/cramp' );
nabbit.space         = require( './String/space' );
nabbit.string        = require( './String/string' );
nabbit.reverse	     = require( './String/reverse' );
nabbit.replaceCharAt = require( './String/replaceCharAt' );
// Constants
nabbit.types = {
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
 * Globalize most of nabbit's functions.
 * 
 * @param {boolean} [specific=true] Put every function inside of a object called `nabbit`.
 * @param {object} [string=String] The object to globalize all nabbit's string functions with.
 * @param {object} [array=Array] The object to globalize all nabbit's array functions with.
 * @param {object} [object=Object] The object to globalize all nabbit's object functions with.
 * @param {object} [ciphers=Number] The object to globalize all nabbit's cipher functions with.
 * @param {object} [lang=process] The object to globalize all nabbit's lang functions with.
 * @param {object} [utils=process] The object to globalize all nabbit's utility functions with.
 * @param {object} consts The object to globalize all nabbit's constants with.
 * @returns {void}
 * @example
 * 
 * this.nab = {};
 * globalize( true, this.nab, this.nab, this.nab, this.nab, this.nab, this.nab )
 * // => Globalize all functions to `this.nab`
 */
nabbit.globalize = ( specific = true, string = String, array = Array, object = Object, ciphers = Number, lang = process, utils = process, consts ) => {
  if ( string && string !== false && string !== null ) {
    if ( typeof string.nabbit === 'object' && specific ) string = string.nabbit = {};    
    string.mock          = this.mock;
    string.cramp         = this.cramp;
    string.space         = this.space;
    string.string        = this.string;
    string.reverse       = this.reverse;
    string.replaceCharAt = this.replaceCharAt;
  }

  if ( array && array !== false && array !== null ) {
    if ( typeof array.nabbit === 'object' && specific ) array = array.nabbit = {};
    array.chunk    = this.chunk;
    array.list     = this.list;
    array.scramble = this.scramble;
  }

  if ( object && object !== false && object !== null ) {
    if ( typeof object.nabbit === 'object' && specific ) object = object.nabbit = {};
    object.valKey = this.valKey;
  }

  if ( ciphers && ciphers !== false && ciphers !== null ) {
    if ( typeof ciphers.nabbit === 'object' && specific ) ciphers = ciphers.nabbit = {};
    ciphers.add      = this.add;
    ciphers.ceil     = this.ceil;
    ciphers.float    = this.float;
    ciphers.number   = this.number;
    ciphers.divide   = this.divide;
    ciphers.meanBy   = this.meanBy;
    ciphers.subtract = this.subtract;
    ciphers.multiply = this.multiply;
  }

  if ( lang && lang !== false && lang !== null ) {    
    if ( typeof lang.nabbit === 'object' && specific ) lang = lang.nabbit = {};
    lang.isSymbol = this.isSymbol;
  }

  if ( utils && utils !== false && utils !== null ) {
    if ( typeof lang.nabbit === 'object' && specific ) utils = utils.nabbit = {};
    utils.type = this.type;    
  }

  if ( consts && consts !== false && consts !== null ) {
    if ( typeof consts.nabbit === 'object' && specific ) consts = consts.nabbit = {};
    consts.types = this.types;
  }
};