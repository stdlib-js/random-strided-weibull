"use strict";var l=function(n,e){return function(){try{return e||n((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var g=l(function(I,p){
var d=require('@stdlib/array-base-assert-is-accessor-array/dist'),q=require('@stdlib/random-base-weibull/dist');function x(n,e,a,t,c,i,f,u){var r,v,s;if(r={arity:0,fcn:null},f){if(e===0&&c===0)return d(n)?v=n.get(a):v=n[a],d(t)?s=t.get(i):s=t[i],r.fcn=q.factory(v,s,u),r;r.fcn=q.factory(u)}else r.fcn=q;return r.arity+=2,r}p.exports=x
});var h=l(function(J,b){
var O=require('@stdlib/strided-base-nullary/dist'),R=require('@stdlib/strided-base-binary/dist'),j=g();function z(n,e,a,t,c,i,f,u){var r=j(e,a,0,t,c,0,arguments.length>7,u);return r.arity===0?(O([i],[n],[f],r.fcn),i):(R([e,t,i],[n],[a,c,f],r.fcn),i)}b.exports=z
});var w=l(function(K,m){
var B=require('@stdlib/strided-base-nullary/dist').ndarray,C=require('@stdlib/strided-base-binary/dist').ndarray,D=g();function E(n,e,a,t,c,i,f,u,r,v,s){var y=D(e,a,t,c,i,f,arguments.length>10,s);return y.arity===0?(B([u],[n],[r],[v],y.fcn),u):(C([e,c,u],[n],[a,i,r],[t,f,v],y.fcn),u)}m.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),A=h(),G=w();F(A,"ndarray",G);module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
