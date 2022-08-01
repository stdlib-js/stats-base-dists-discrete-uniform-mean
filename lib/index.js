/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

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

var mean = require( './mean.js' );


// EXPORTS //

module.exports = mean;