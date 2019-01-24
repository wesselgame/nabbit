const ui = require( './result' );

module.exports = ( testData ) => {
  let tests     = testData;
  let completed = 0;

  process.stdout.write( '\x1B[2J\x1B[0f\u001b[0;0H\r\n' );
  process.stdout.write( `\x1b[33mExecuting \x1b[32m${tests.length} \x1b[33mtest(s)...\x1b[0m\r\n` );
  
  for ( let i = 0; i < tests.length; i++ ) {
    tests[ i ].extData = { startTime : new Date().getTime() };

    const testCompleted = ( success, info ) => {
      tests[ i ].result          = { executed: true, success: success, info: info };
      tests[ i ].extData.endTime = new Date().getTime();

      tests[ i ].extData.timeTaken = tests[ i ].extData.endTime - tests[ i ].extData.startTime;
      process.stdout.write( ` \x1b[33mTask \x1b[34m${tests[ i ].name} ${( success ? `\x1b[32mpassed` : `\x1b[31mfailed` )}\x1b[0m\r\n` );
      completed++;

      if ( completed >= tests.length ) ui( tests );
    };

    try { tests[ i ].method( testCompleted ); }
    catch( ex ) { testCompleted( false, ex.toString() ); }
  }
};