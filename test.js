const l = require( './lumah' );
const p = require( 'process' );
const n = require( './lib/nabbit' );

let stop = true;
const sl = () => { if ( !stop ) process.nextTick( sl ); };

l.register( 'Array:List', ( res ) => res( true, n.list( [ 1, 2, 3 ] ) ) );
l.register( 'Array:Typeof', ( res ) => res( true, `${n.type( 'Hello' )} (${n.valKey( n.types, n.type( 'Hello' ) )})` ) );
l.register( 'Array:scramble', ( res ) => res( true, `${n.scramble( 'Hello'.split( '' ) ).join( '' )}\r\n` ) );

l.register( 'Object:valKey', ( res ) => res( true, `valKey { 1: 2, 3: 4 } "2": ${n.valKey( { 1: 2, 3: 4 }, 2 )}\r\n` ) );

l.register( 'String:string', ( res ) => res( true, n.string( 16 ) ) );
l.register( 'String:mock', ( res ) => res( true, n.mock( 'Hello' ) ) );
l.register( 'String:space', ( res ) => res( true, n.space( 'Hello' ) ) );
l.register( 'String:cramp', ( res ) => res( true, n.cramp( 'Hello' ) ) );
l.register( 'String:reverse', ( res ) => res( true, n.reverse( 'Hello' ) ) );
l.register( 'String:replaceCharAt', ( res ) => res( true, `${n.replaceCharAt( 'Hello', 2, 'o' )}\r\n` ) );
l.register( 'Ciphers:add', ( res ) => res( true, n.add( 9, 10 ) ) );
l.register( 'Ciphers:ceil', ( res ) => res( true, n.ceil( 6.004 ) ) );
l.register( 'Ciphers:float', ( res ) => res( true, n.float( 0, 0.5 ) ) );
l.register( 'Ciphers:number', ( res ) => res( true, n.number( 1, 3 ) ) );
l.register( 'Ciphers:divide', ( res ) => res( true, n.divide( 9, 10 ) ) );
l.register( 'Ciphers:meanBy', ( res ) => res( true, n.meanBy( [ { 'a': 1 }, { 'a': 9 }, { 'a': 4 } ], ( { a } ) => a ).toFixed( 2 ) ) );
l.register( 'Ciphers:subtract', ( res ) => res( true, n.subtract( 9, 10 ) ) );
l.register( 'Ciphers:multiply', ( res ) => res( true, `${n.multiply( 9, 10 ) }\r\n` ) );

sl();
l.start();
// n.globalize();

this.nab = {};
n.globalize( false, this.nab, this.nab, this.nab, this.nab, this.nab, this.nab );
