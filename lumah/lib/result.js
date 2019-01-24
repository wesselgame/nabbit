module.exports = ( tests ) => {
  process.stdout.write( '\r\n' );

  let totals = { 'fail': 0, 'pass': 0 };

  for( let i = 0; i < tests.length; i++ ) {
    if( tests[ i ].result.success ) totals.pass++;
    else totals.fail++;
  }

  process.stdout.write([
    `\x1b[33mA total of \x1b[32m${totals.pass} \x1b[33m( \x1b[32m${( ( totals.pass / tests.length ) *100 ).toFixed( 2 )}% \x1b[33m) test(s) \x1b[32mpassed \x1b[33mand`,
    `${totals.fail <= 0 ? `\x1b[32m0 \x1b[33m( \x1b[32m0% \x1b[33m)` : `\x1b[31m${totals.fail} \x1b[33m( \x1b[31m${( ( totals.fail / tests.length ) *100 ).toFixed( 2 )}% \x1b[33m)`} test(s) \x1b[31mfailed\x1b\x1b[33m:\x1b[0m\r\n`
  ].join( ' ' ));

  for( let i = 0; i < tests.length; i++ ) {
    if ( tests[ i ].result.success )
      process.stdout.write(` \x1b[32m✓ \x1b[34m${tests[ i ].name} \x1b[32mpassed \x1b[33min \x1b[32m${tests[ i ].extData.timeTaken}ms ${( tests[ i ].result.info ? `\x1b[33m>> \x1b[34m${tests[ i ].result.info}\x1b[0m\x1b[0m` : `\x1b[0m` )}\r\n`);
    else
      process.stdout.write(` \x1b[31m✗ \x1b[34m${tests[ i ].name} \x1b[31mfailed \x1b[33min \x1b[32m${tests[ i ].extData.timeTaken}ms ${( tests[ i ].result.info ? `\x1b[33m>> \x1b[34m${tests[ i ].result.info}\x1b[0m\x1b[0m` : `\x1b[0m` )}\r\n`);
  }
  
  process.stdout.write( '\r\n' );
};