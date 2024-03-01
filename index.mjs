// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t,{ndarray as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-nullary@v0.2.1-esm/index.mjs";import n,{ndarray as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-binary@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-weibull@v0.2.1-esm/index.mjs";function d(r,t,e,n,s,d,l,f){var m,o,c;if(m={arity:0,fcn:null},l){if(0===t&&0===s)return o=i(r)?r.get(e):r[e],c=i(n)?n.get(d):n[d],m.fcn=a.factory(o,c,f),m;m.fcn=a.factory(f)}else m.fcn=a;return m.arity+=2,m}function l(r,e,s,i,a,l,f,m){var o=d(e,s,0,i,a,0,arguments.length>7,m);return 0===o.arity?(t([l],[r],[f],o.fcn),l):(n([e,i,l],[r],[s,a,f],o.fcn),l)}function f(r,t,n,i,a,l,f,m,o,c,j){var y=d(t,n,i,a,l,f,arguments.length>10,j);return 0===y.arity?(e([m],[r],[o],[c],y.fcn),m):(s([t,a,m],[r],[n,l,o],[i,f,c],y.fcn),m)}r(l,"ndarray",f);export{l as default,f as ndarray};
//# sourceMappingURL=index.mjs.map
