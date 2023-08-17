"use strict";var l=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var g=l(function(I,p){
var d=require('@stdlib/array-base-assert-is-accessor-array/dist'),q=require('@stdlib/random-base-weibull/dist');function x(n,e,u,i,c,a,f,t){var r,v,s;if(r={arity:0,fcn:null},f){if(e===0&&c===0)return d(n)?v=n.get(u):v=n[u],d(i)?s=i.get(a):s=i[a],r.fcn=q.factory(v,s,t),r;r.fcn=q.factory(t)}else r.fcn=q;return r.arity+=2,r}p.exports=x
});var h=l(function(J,b){
var O=require('@stdlib/strided-base-nullary/dist'),R=require('@stdlib/strided-base-binary/dist'),j=g();function z(n,e,u,i,c,a,f,t){var r=j(e,u,0,i,c,0,arguments.length>7,t);return r.arity===0?(O([a],[n],[f],r.fcn),a):(R([e,i,a],[n],[u,c,f],r.fcn),a)}b.exports=z
});var w=l(function(K,m){
var B=require('@stdlib/strided-base-nullary/dist').ndarray,C=require('@stdlib/strided-base-binary/dist').ndarray,D=g();function E(n,e,u,i,c,a,f,t,r,v,s){var y=D(e,u,i,c,a,f,arguments.length>10,s);return y.arity===0?(B([t],[n],[r],[v],y.fcn),t):(C([e,c,t],[n],[u,a,r],[i,f,v],y.fcn),t)}m.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),A=h(),G=w();F(A,"ndarray",G);module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
