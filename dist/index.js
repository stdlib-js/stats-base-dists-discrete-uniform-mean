/** @license Apache-2.0 */

'use strict';

/**
* Discrete uniform distribution expected value.
*
* @module @stdlib/stats-base-dists-discrete-uniform-mean
*
* @example
* var mean = require( '@stdlib/stats-base-dists-discrete-uniform-mean' );
*
* var v = mean( 0, 1 );
* // returns 0.5
*
* v = mean( 2, 10 );
* // returns 6.0
*
* v = mean( -10, 10 );
* // returns 0.0
*/

// MODULES //

var mean = require( './main.js' );


// EXPORTS //

module.exports = mean;
