(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(t,r,n){t.exports=function(){"use strict";var t=new Function("return this")(),r=t.FileReader,n=t.Promise,e=Array.prototype.slice,i=["ArrayBuffer","Text","DataURL","BinaryString"];function o(t){var i=e.call(arguments,1);return new n(function(n,e){var o=new r;o.addEventListener("load",function(){return n(o.result)}),o.addEventListener("error",function(){return e(o.error)}),t.apply(o,i)})}function a(){}for(var u=0;u<i.length;u++){var c="readAs".concat(i[u]),f=o.bind(null,r.prototype[c]);a.prototype[c]=f,a[c]=f}return a}()},function(t,r,n){(function(t){function n(t,r){for(var n=0,e=t.length-1;e>=0;e--){var i=t[e];"."===i?t.splice(e,1):".."===i?(t.splice(e,1),n++):n&&(t.splice(e,1),n--)}if(r)for(;n--;n)t.unshift("..");return t}var e=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(t){return e.exec(t).slice(1)};function o(t,r){if(t.filter)return t.filter(r);for(var n=[],e=0;e<t.length;e++)r(t[e],e,t)&&n.push(t[e]);return n}r.resolve=function(){for(var r="",e=!1,i=arguments.length-1;i>=-1&&!e;i--){var a=i>=0?arguments[i]:t.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(r=a+"/"+r,e="/"===a.charAt(0))}return(e?"/":"")+(r=n(o(r.split("/"),function(t){return!!t}),!e).join("/"))||"."},r.normalize=function(t){var e=r.isAbsolute(t),i="/"===a(t,-1);return(t=n(o(t.split("/"),function(t){return!!t}),!e).join("/"))||e||(t="."),t&&i&&(t+="/"),(e?"/":"")+t},r.isAbsolute=function(t){return"/"===t.charAt(0)},r.join=function(){var t=Array.prototype.slice.call(arguments,0);return r.normalize(o(t,function(t,r){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},r.relative=function(t,n){function e(t){for(var r=0;r<t.length&&""===t[r];r++);for(var n=t.length-1;n>=0&&""===t[n];n--);return r>n?[]:t.slice(r,n-r+1)}t=r.resolve(t).substr(1),n=r.resolve(n).substr(1);for(var i=e(t.split("/")),o=e(n.split("/")),a=Math.min(i.length,o.length),u=a,c=0;c<a;c++)if(i[c]!==o[c]){u=c;break}var f=[];for(c=u;c<i.length;c++)f.push("..");return(f=f.concat(o.slice(u))).join("/")},r.sep="/",r.delimiter=":",r.dirname=function(t){var r=i(t),n=r[0],e=r[1];return n||e?(e&&(e=e.substr(0,e.length-1)),n+e):"."},r.basename=function(t,r){var n=i(t)[2];return r&&n.substr(-1*r.length)===r&&(n=n.substr(0,n.length-r.length)),n},r.extname=function(t){return i(t)[3]};var a="b"==="ab".substr(-1)?function(t,r,n){return t.substr(r,n)}:function(t,r,n){return r<0&&(r=t.length+r),t.substr(r,n)}}).call(this,n(4))},function(t,r,n){"use strict";(function(t){var e=n(1);function i(t,r,n){return r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}var o,a=Object(e.join)(t,"../fixture/"),u=[].concat((o=Array.from({length:8},function(t,r){return{name:"image_".concat(r+1,".jpg"),orientation:r+1,type:"image/jpeg"}}),function(t){if(Array.isArray(t)){for(var r=0,n=new Array(t.length);r<t.length;r++)n[r]=t[r];return n}}(o)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()),[{name:"image_no_orientation.jpg",orientation:null,type:"image/jpeg"},{name:"image_unknown_orientation.jpg",orientation:null,type:"image/jpeg"},{name:"image_png.png",orientation:null,type:"image/png"}]).map(function(t){return function(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},e=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.forEach(function(r){i(t,r,n[r])})}return t}({},t,{file:Object(e.join)(a,t.name)})});r.a=u}).call(this,"/")},function(t,r,n){t.exports=n(5)},function(t,r){var n,e,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(r){try{return n.call(null,t,0)}catch(r){return n.call(this,t,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(t){n=o}try{e="function"===typeof clearTimeout?clearTimeout:a}catch(t){e=a}}();var c,f=[],l=!1,s=-1;function v(){l&&c&&(l=!1,c.length?f=c.concat(f):s=-1,f.length&&h())}function h(){if(!l){var t=u(v);l=!0;for(var r=f.length;r;){for(c=f,f=[];++s<r;)c&&c[s].run();s=-1,r=f.length}c=null,l=!1,function(t){if(e===clearTimeout)return clearTimeout(t);if((e===a||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{e(t)}catch(r){try{return e.call(null,t)}catch(r){return e.call(this,t)}}}(t)}}function p(t,r){this.fun=t,this.array=r}function d(){}i.nextTick=function(t){var r=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)r[n-1]=arguments[n];f.push(new p(t,r)),1!==f.length||l||u(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=d,i.addListener=d,i.once=d,i.off=d,i.removeListener=d,i.removeAllListeners=d,i.emit=d,i.prependListener=d,i.prependOnceListener=d,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,r,n){"use strict";n.r(r);var e=/^image\//;var i=function(t){return e.test(t)},o="image/jpeg";var a=function(t){return t===o},u=n(0),c=n.n(u),f=c.a.readAsDataURL,l=c.a.readAsArrayBuffer,s=new Function("return this")(),v=s.Uint8Array,h=s.atob,p=s.Blob,d=s.document,m=s.DataView,g=s.Image,y=s.isFinite,w=s.Promise,b=s.createImageBitmap,j=s.OffscreenCanvas,O=s.URL||s.webkitURL,x=65496,A=65505,T=1165519206,E=18761,P=19789,L=42,U=8,S=274,C=[[!1,!1,0],[!0,!1,0],[!1,!1,180],[!1,!0,0],[!0,!1,90],[!1,!1,90],[!0,!1,-90],[!1,!1,-90]],I=C[0];var R=function(t){return t.getUint16(0)===x};var k=function(t){for(var r=t.byteLength,n=2;n<r;){if(255!==t.getUint8(n))return null;if(t.getUint16(n)===A)return n+4;n+=2,n+=t.getUint16(n)}return null};var B=function(t,r){var n=t.getUint16(r);return n!==P&&(n===E||null)};var D=function(t){return!0===t||!1===t};var F=function(t,r){if(t.getUint32(r)!==T)return!1;var n=r+6,e=B(t,n);if(!D(e))return!1;if(t.getUint16(n+2,e)!==L)return!1;var i=t.getUint32(n+4,e);return!(i<U)&&{tiffOffset:n,littleEndian:e,firstIFDOffset:i}};var M=function(t,r){var n=F(t,r);if(!n)return null;for(var e=n.tiffOffset,i=n.littleEndian,o=n.firstIFDOffset,a=t.getUint16(o,i),u=e+o,c=0;c<a;c++){var f=u+12*c+2;if(t.getUint16(f,i)===S){var l=t.getUint16(f+8,i);return l<1||l>8?null:l}}return null};var q=function(t){var r=new m(t);if(!R(r))return null;var n=k(r);return n?M(r,n):null};var H,_=(H=function(t){return r=l(t),n=q,e?n?n(r):r:(r&&r.then||(r=Promise.resolve(r)),n?r.then(n):r);var r,n,e},function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];try{return Promise.resolve(H.apply(this,t))}catch(n){return Promise.reject(n)}});var z=function(t){return"function"===typeof t};var W=function(t){return null===t};var X=function(t){return!W(t)&&(z(t)||"object"===typeof t)},Y=z(O),J=Y&&z(O.createObjectURL),V=Y&&z(O.revokeObjectURL),$=z(b),G=function(t){if(!z(t))return!1;var r=new t(1,1);if(!X(r)||!z(r.convertToBlob))return!1;var n=r.getContext("2d");return!(!X(n)||!z(n.drawImage))}(j),K=J?O.createObjectURL:f;var N=V?function(t){try{O.revokeObjectURL(t)}catch(r){}}:function(){};var Q=function(t){return new w(function(r,n){var e=new g;e.src=t,e.addEventListener("load",function(){N(t),r(e)}),e.addEventListener("error",n)})},Z=b;function tt(t,r,n){return n?r?r(t):t:(t&&t.then||(t=Promise.resolve(t)),r?t.then(r):t)}var rt=function(t){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];try{return Promise.resolve(t.apply(this,r))}catch(e){return Promise.reject(e)}}}(function(t){return tt(K(t),function(t){return tt(Q(t))})}),nt=$?Z:rt;var et=function(t){var r=t.width,n=t.height;return{width:t.naturalWidth||r,height:t.naturalHeight||n}};function it(t,r){return!r||t<r?1:r/t}var ot=function(t,r){var n=r.maxWidth,e=r.maxHeight,i=r.rotate,o=et(t),a=o.width,u=o.height;if(i){var c=[u,a];a=c[0],u=c[1]}var f=it(a,n),l=it(u,e);return Math.min(f,l,1)},at=Math.isFinite||y;var ut=function(t){return"number"===typeof t&&at(t)&&t>0};function ct(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=[],e=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(e=(a=u.next()).done)&&(n.push(a.value),!r||n.length!==r);e=!0);}catch(c){i=!0,o=c}finally{try{e||null==u.return||u.return()}finally{if(i)throw o}}return n}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ft=function(t){var r=ct(Array.isArray(t)?t:[t,t],2),n=r[0],e=r[1];return{maxWidth:ut(n)?n:void 0,maxHeight:ut(e)?e:void 0}};function lt(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=[],e=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(e=(a=u.next()).done)&&(n.push(a.value),!r||n.length!==r);e=!0);}catch(c){i=!0,o=c}finally{try{e||null==u.return||u.return()}finally{if(i)throw o}}return n}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var st=function(t,r,n){var e=lt(C[r-1]||I,3),i=e[0],o=e[1],a=e[2],u=ft(n),c=u.maxWidth,f=u.maxHeight,l=90===Math.abs(a),s=ot(t,{maxWidth:c,maxHeight:f,rotate:l});return i||o||a||1!==s?{flipX:i,flipY:o,degree:a,rotate:l,scale:s}:null};var vt=function(t,r){var n=r.width,e=r.height,i=r.flipX,o=r.flipY,a=i?n:0,u=o?e:0,c=i?-1:1,f=o?-1:1;t.translate(a,u),t.scale(c,f)},ht=Math.PI/180;var pt=function(t){return t*ht};var dt=function(t,r){var n=r.width,e=r.height,i=r.degree,o=r.rotate;t.translate(n/2,e/2),t.rotate(pt(i)),t.translate(-n/2,-e/2),o&&t.translate((n-e)/2,-(n-e)/2)};var mt=G?function(t,r){return new j(t,r)}:function(t,r){var n=d.createElement("canvas");return n.width=t,n.height=r,n};function gt(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=[],e=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(e=(a=u.next()).done)&&(n.push(a.value),!r||n.length!==r);e=!0);}catch(c){i=!0,o=c}finally{try{e||null==u.return||u.return()}finally{if(i)throw o}}return n}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var yt=function(t,r){var n=r.flipX,e=r.flipY,i=r.scale,o=r.rotate,a=r.degree,u=et(t),c=u.width,f=u.height,l=gt([c,f].map(function(t){return Math.floor(Math.max(1,t*i))}),2),s=l[0],v=l[1];if(o){var h=[v,s];s=h[0],v=h[1]}var p=mt(s,v),d=p.getContext("2d");return(n||e)&&vt(d,{width:s,height:v,flipX:n,flipY:e}),a&&dt(d,{width:s,height:v,degree:a,rotate:o}),d.drawImage(t,0,0,c*i,f*i),p};var wt=function(t,r){var n=h(t.split(",")[1]),e=v.from(n,function(t){return t.charCodeAt(0)});return new p([e],{type:r})};var bt=function(t,r){return z(t.toBlob)?function(t,r){var n=r.type,e=r.quality;return new Promise(function(r){return t.toBlob(r,n,e)})}(t,r):G&&z(t.convertToBlob)?function(t,r){var n=r.type,e=r.quality;return t.convertToBlob(n,e)}(t,r):function(t,r){var n=r.type,e=r.quality,i=t.toDataURL(n,e);return wt(i,n)}(t,r)},jt={always:!1,quiet:!0,maxSize:1500,quality:void 0,fixOrientation:!0};var Ot=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign(jt,t)};function xt(t,r,n){return r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function At(t,r,n){return n?r?r(t):t:(t&&t.then||(t=Promise.resolve(t)),r?t.then(r):t)}var Tt=function(t){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];try{return Promise.resolve(t.apply(this,r))}catch(e){return Promise.reject(e)}}}(function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r=function(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},e=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.forEach(function(r){xt(t,r,n[r])})}return t}({},jt,r);var n=(t||{}).type,e=void 0===n?"application/octet-stream":n;if(!i(e))return t;var o=r,u=o.fixOrientation,c=o.quality,f=o.maxSize,l=u&&a(e);return At(l?_(t):0,function(r){return At(nt(t),function(n){var i=et(n),o=i.width,a=i.height;if(!o||!a)return t;var u=st(n,r,f);if(!u)return t;var l=yt(n,u);return At(bt(l,{type:e,quality:c}))})},!l)});Tt.setDefaults=Ot;var Et=Tt,Pt=n(2);function Lt(t,r,n){return n?r?r(t):t:(t&&t.then||(t=Promise.resolve(t)),r?t.then(r):t)}function Ut(t){return new Promise(function(r){var n=new window.Image;n.addEventListener("load",function(){return r(n)}),n.src=t})}var St=window.document.createElement("table");window.document.body.appendChild(St),St.innerHTML="<thead><tr><th>orignal</th><th>processed</th><th>time</th></tr></thead>";var Ct=window.document.createElement("tbody");St.appendChild(Ct);var It=!0,Rt=!1,kt=void 0;try{for(var Bt,Dt=function(){var t,r=Bt.value;(t=function(){r.name;var t=r.file,n=window.document.createElement("tr");Ct.appendChild(n);var e=window.document.createElement("td");n.appendChild(e);var i=window.document.createElement("td");n.appendChild(i);var o=window.document.createElement("td");return n.appendChild(o),Lt(Ut(t),function(r){return e.appendChild(r),Lt(window.fetch(t),function(t){return Lt(t.blob(),function(t){var r=window.performance.now();return Lt(Et(t,{maxSize:200,fixOrientation:!0}),function(t){return o.textContent="".concat((window.performance.now()-r).toFixed(2),"ms"),Lt(Ut(window.URL.createObjectURL(t)),function(t){i.appendChild(t)})})})})})},function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];try{return Promise.resolve(t.apply(this,r))}catch(e){return Promise.reject(e)}})()},Ft=Pt.a[Symbol.iterator]();!(It=(Bt=Ft.next()).done);It=!0)Dt()}catch(Mt){Rt=!0,kt=Mt}finally{try{It||null==Ft.return||Ft.return()}finally{if(Rt)throw kt}}}],[[3,1]]]);