const run = require( './runTests' );
let tests = [];

exports.register = ( name, method ) => tests.push({ method, name });
exports.start    = () => run( tests );