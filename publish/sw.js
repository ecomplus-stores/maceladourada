!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=67)}([function(e,t,n){"use strict";try{self["workbox:core:6.1.5"]&&_()}catch(e){}},function(e,t,n){"use strict";try{self["workbox:precaching:6.1.5"]&&_()}catch(e){}},function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n(37))},function(e,t,n){"use strict";try{self["workbox:routing:6.1.5"]&&_()}catch(e){}},function(e,t,n){"use strict";try{self["workbox:strategies:6.1.5"]&&_()}catch(e){}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var r=n(8),s=n(24),a=n(21);e.exports=r?function(e,t,n){return s.f(e,t,a(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var r=n(5);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){var r=n(10);e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},function(e,t,n){"use strict";try{self["workbox:expiration:6.1.5"]&&_()}catch(e){}},function(e,t,n){var r=n(39),s=n(9);e.exports=function(e){return r(s(e))}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var r=n(2),s=n(7);e.exports=function(e,t){try{s(r,e,t)}catch(n){r[e]=t}return t}},function(e,t,n){var r=n(2),s=n(16),a="__core-js_shared__",i=r[a]||s(a,{});e.exports=i},function(e,t,n){var r=n(44),s=n(17);(e.exports=function(e,t){return s[e]||(s[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.10.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(e,t,n){"use strict";try{self["workbox:cacheable-response:6.1.5"]&&_()}catch(e){}},function(e,t,n){var r=n(8),s=n(38),a=n(21),i=n(14),o=n(22),c=n(6),u=n(23),l=Object.getOwnPropertyDescriptor;t.f=r?l:function(e,t){if(e=i(e),t=o(t,!0),u)try{return l(e,t)}catch(e){}if(c(e,t))return a(!s.f.call(e,t),e[t])}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var r=n(10);e.exports=function(e,t){if(!r(e))return e;var n,s;if(t&&"function"==typeof(n=e.toString)&&!r(s=n.call(e)))return s;if("function"==typeof(n=e.valueOf)&&!r(s=n.call(e)))return s;if(!t&&"function"==typeof(n=e.toString)&&!r(s=n.call(e)))return s;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){var r=n(8),s=n(5),a=n(40);e.exports=!r&&!s((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},function(e,t,n){var r=n(8),s=n(23),a=n(11),i=n(22),o=Object.defineProperty;t.f=r?o:function(e,t,n){if(a(e),t=i(t,!0),a(n),s)try{return o(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var r=n(2),s=n(7),a=n(6),i=n(16),o=n(26),c=n(41),u=c.get,l=c.enforce,h=String(String).split("String");(e.exports=function(e,t,n,o){var c,u=!!o&&!!o.unsafe,f=!!o&&!!o.enumerable,p=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof t||a(n,"name")||s(n,"name",t),(c=l(n)).source||(c.source=h.join("string"==typeof t?t:""))),e!==r?(u?!p&&e[t]&&(f=!0):delete e[t],f?e[t]=n:s(e,t,n)):f?e[t]=n:i(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||o(this)}))},function(e,t,n){var r=n(17),s=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return s.call(e)}),e.exports=r.inspectSource},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},function(e,t){e.exports={}},function(e,t,n){var r=n(47),s=n(2),a=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?a(r[e])||a(s[e]):r[e]&&r[e][t]||s[e]&&s[e][t]}},function(e,t,n){var r=n(12),s=Math.min;e.exports=function(e){return e>0?s(r(e),9007199254740991):0}},function(e,t,n){"use strict";var r,s,a=n(55),i=n(56),o=n(18),c=RegExp.prototype.exec,u=o("native-string-replace",String.prototype.replace),l=c,h=(r=/a/,s=/b*/g,c.call(r,"a"),c.call(s,"a"),0!==r.lastIndex||0!==s.lastIndex),f=i.UNSUPPORTED_Y||i.BROKEN_CARET,p=void 0!==/()??/.exec("")[1];(h||p||f)&&(l=function(e){var t,n,r,s,i=this,o=f&&i.sticky,l=a.call(i),d=i.source,g=0,m=e;return o&&(-1===(l=l.replace("y","")).indexOf("g")&&(l+="g"),m=String(e).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&"\n"!==e[i.lastIndex-1])&&(d="(?: "+d+")",m=" "+m,g++),n=new RegExp("^(?:"+d+")",l)),p&&(n=new RegExp("^"+d+"$(?!\\s)",l)),h&&(t=i.lastIndex),r=c.call(o?n:i,m),o?r?(r.input=r.input.slice(g),r[0]=r[0].slice(g),r.index=i.lastIndex,i.lastIndex+=r[0].length):i.lastIndex=0:h&&r&&(i.lastIndex=i.global?r.index+r[0].length:t),p&&r&&r.length>1&&u.call(r[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(r[s]=void 0)})),r}),e.exports=l},function(e,t,n){var r=n(58),s=n(59),a=n(5);e.exports=!!Object.getOwnPropertySymbols&&!a((function(){return!Symbol.sham&&(r?38===s:s>37&&s<41)}))},function(e,t,n){"use strict";var r=n(34),s=n(11),a=n(30),i=n(12),o=n(9),c=n(62),u=n(64),l=n(66),h=Math.max,f=Math.min;r("replace",2,(function(e,t,n,r){var p=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,d=r.REPLACE_KEEPS_$0,g=p?"$":"$0";return[function(n,r){var s=o(this),a=null==n?void 0:n[e];return void 0!==a?a.call(n,s,r):t.call(String(s),n,r)},function(e,r){if(!p&&d||"string"==typeof r&&-1===r.indexOf(g)){var o=n(t,e,this,r);if(o.done)return o.value}var m=s(e),y=String(this),w="function"==typeof r;w||(r=String(r));var v=m.global;if(v){var _=m.unicode;m.lastIndex=0}for(var x=[];;){var b=l(m,y);if(null===b)break;if(x.push(b),!v)break;""===String(b[0])&&(m.lastIndex=c(y,a(m.lastIndex),_))}for(var R,E="",S=0,C=0;C<x.length;C++){b=x[C];for(var T=String(b[0]),U=h(f(i(b.index),y.length),0),P=[],O=1;O<b.length;O++)P.push(void 0===(R=b[O])?R:String(R));var N=b.groups;if(w){var k=[T].concat(P,U,y);void 0!==N&&k.push(N);var q=String(r.apply(void 0,k))}else q=u(T,y,U,P,N,r);U>=S&&(E+=y.slice(S,U)+q,S=U+T.length)}return E+y.slice(S)}]}))},function(e,t,n){"use strict";n(35);var r=n(25),s=n(5),a=n(57),i=n(7),o=a("species"),c=!s((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u="$0"==="a".replace(/./,"$0"),l=a("replace"),h=!!/./[l]&&""===/./[l]("a","$0"),f=!s((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,l){var p=a(e),d=!s((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),g=d&&!s((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[o]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return t=!0,null},n[p](""),!t}));if(!d||!g||"replace"===e&&(!c||!u||h)||"split"===e&&!f){var m=/./[p],y=n(p,""[e],(function(e,t,n,r,s){return t.exec===RegExp.prototype.exec?d&&!s?{done:!0,value:m.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:h}),w=y[0],v=y[1];r(String.prototype,e,w),r(RegExp.prototype,p,2==t?function(e,t){return v.call(e,this,t)}:function(e){return v.call(e,this)})}l&&i(RegExp.prototype[p],"sham",!0)}},function(e,t,n){"use strict";var r=n(36),s=n(31);r({target:"RegExp",proto:!0,forced:/./.exec!==s},{exec:s})},function(e,t,n){var r=n(2),s=n(20).f,a=n(7),i=n(25),o=n(16),c=n(45),u=n(54);e.exports=function(e,t){var n,l,h,f,p,d=e.target,g=e.global,m=e.stat;if(n=g?r:m?r[d]||o(d,{}):(r[d]||{}).prototype)for(l in t){if(f=t[l],h=e.noTargetGet?(p=s(n,l))&&p.value:n[l],!u(g?l:d+(m?".":"#")+l,e.forced)&&void 0!==h){if(typeof f==typeof h)continue;c(f,h)}(e.sham||h&&h.sham)&&a(f,"sham",!0),i(n,l,f,e)}}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";var r={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,a=s&&!r.call({1:2},1);t.f=a?function(e){var t=s(this,e);return!!t&&t.enumerable}:r},function(e,t,n){var r=n(5),s=n(15),a="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a.call(e,""):Object(e)}:Object},function(e,t,n){var r=n(2),s=n(10),a=r.document,i=s(a)&&s(a.createElement);e.exports=function(e){return i?a.createElement(e):{}}},function(e,t,n){var r,s,a,i=n(42),o=n(2),c=n(10),u=n(7),l=n(6),h=n(17),f=n(43),p=n(28),d=o.WeakMap;if(i){var g=h.state||(h.state=new d),m=g.get,y=g.has,w=g.set;r=function(e,t){return t.facade=e,w.call(g,e,t),t},s=function(e){return m.call(g,e)||{}},a=function(e){return y.call(g,e)}}else{var v=f("state");p[v]=!0,r=function(e,t){return t.facade=e,u(e,v,t),t},s=function(e){return l(e,v)?e[v]:{}},a=function(e){return l(e,v)}}e.exports={set:r,get:s,has:a,enforce:function(e){return a(e)?s(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!c(t)||(n=s(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}}},function(e,t,n){var r=n(2),s=n(26),a=r.WeakMap;e.exports="function"==typeof a&&/native code/.test(s(a))},function(e,t,n){var r=n(18),s=n(27),a=r("keys");e.exports=function(e){return a[e]||(a[e]=s(e))}},function(e,t){e.exports=!1},function(e,t,n){var r=n(6),s=n(46),a=n(20),i=n(24);e.exports=function(e,t){for(var n=s(t),o=i.f,c=a.f,u=0;u<n.length;u++){var l=n[u];r(e,l)||o(e,l,c(t,l))}}},function(e,t,n){var r=n(29),s=n(48),a=n(53),i=n(11);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(i(e)),n=a.f;return n?t.concat(n(e)):t}},function(e,t,n){var r=n(2);e.exports=r},function(e,t,n){var r=n(49),s=n(52).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},function(e,t,n){var r=n(6),s=n(14),a=n(50).indexOf,i=n(28);e.exports=function(e,t){var n,o=s(e),c=0,u=[];for(n in o)!r(i,n)&&r(o,n)&&u.push(n);for(;t.length>c;)r(o,n=t[c++])&&(~a(u,n)||u.push(n));return u}},function(e,t,n){var r=n(14),s=n(30),a=n(51),i=function(e){return function(t,n,i){var o,c=r(t),u=s(c.length),l=a(i,u);if(e&&n!=n){for(;u>l;)if((o=c[l++])!=o)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:i(!0),indexOf:i(!1)}},function(e,t,n){var r=n(12),s=Math.max,a=Math.min;e.exports=function(e,t){var n=r(e);return n<0?s(n+t,0):a(n,t)}},function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,n){var r=n(5),s=/#|\.prototype\./,a=function(e,t){var n=o[i(e)];return n==u||n!=c&&("function"==typeof t?r(t):!!t)},i=a.normalize=function(e){return String(e).replace(s,".").toLowerCase()},o=a.data={},c=a.NATIVE="N",u=a.POLYFILL="P";e.exports=a},function(e,t,n){"use strict";var r=n(11);e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},function(e,t,n){"use strict";var r=n(5);function s(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=s("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=s("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},function(e,t,n){var r=n(2),s=n(18),a=n(6),i=n(27),o=n(32),c=n(61),u=s("wks"),l=r.Symbol,h=c?l:l&&l.withoutSetter||i;e.exports=function(e){return a(u,e)&&(o||"string"==typeof u[e])||(o&&a(l,e)?u[e]=l[e]:u[e]=h("Symbol."+e)),u[e]}},function(e,t,n){var r=n(15),s=n(2);e.exports="process"==r(s.process)},function(e,t,n){var r,s,a=n(2),i=n(60),o=a.process,c=o&&o.versions,u=c&&c.v8;u?s=(r=u.split("."))[0]+r[1]:i&&(!(r=i.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=i.match(/Chrome\/(\d+)/))&&(s=r[1]),e.exports=s&&+s},function(e,t,n){var r=n(29);e.exports=r("navigator","userAgent")||""},function(e,t,n){var r=n(32);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(e,t,n){"use strict";var r=n(63).charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},function(e,t,n){var r=n(12),s=n(9),a=function(e){return function(t,n){var a,i,o=String(s(t)),c=r(n),u=o.length;return c<0||c>=u?e?"":void 0:(a=o.charCodeAt(c))<55296||a>56319||c+1===u||(i=o.charCodeAt(c+1))<56320||i>57343?e?o.charAt(c):a:e?o.slice(c,c+2):i-56320+(a-55296<<10)+65536}};e.exports={codeAt:a(!1),charAt:a(!0)}},function(e,t,n){var r=n(65),s=Math.floor,a="".replace,i=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,c,u,l){var h=n+e.length,f=c.length,p=o;return void 0!==u&&(u=r(u),p=i),a.call(l,p,(function(r,a){var i;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(h);case"<":i=u[a.slice(1,-1)];break;default:var o=+a;if(0===o)return r;if(o>f){var l=s(o/10);return 0===l?r:l<=f?void 0===c[l-1]?a.charAt(1):c[l-1]+a.charAt(1):r}i=c[o-1]}return void 0===i?"":i}))}},function(e,t,n){var r=n(9);e.exports=function(e){return Object(r(e))}},function(e,t,n){var r=n(15),s=n(31);e.exports=function(e,t){var n=e.exec;if("function"==typeof n){var a=n.call(e,t);if("object"!=typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return s.call(e,t)}},function(e,t,n){"use strict";n.r(t);n(33),n(0);const r=(e,...t)=>{let n=e;return t.length>0&&(n+=` :: ${JSON.stringify(t)}`),n};class s extends Error{constructor(e,t){super(r(e,t)),this.name=e,this.details=t}}const a=new Set;const i={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},o=e=>[i.prefix,e,i.suffix].filter((e=>e&&e.length>0)).join("-"),c=e=>e||o(i.precache),u=e=>e||o(i.runtime);function l(e,t){const n=new URL(e);for(const e of t)n.searchParams.delete(e);return n.href}let h;function f(e){e.then((()=>{}))}class p{constructor(e,t,{onupgradeneeded:n,onversionchange:r}={}){this._db=null,this._name=e,this._version=t,this._onupgradeneeded=n,this._onversionchange=r||(()=>this.close())}get db(){return this._db}async open(){if(!this._db)return this._db=await new Promise(((e,t)=>{let n=!1;setTimeout((()=>{n=!0,t(new Error("The open request was blocked and timed out"))}),this.OPEN_TIMEOUT);const r=indexedDB.open(this._name,this._version);r.onerror=()=>t(r.error),r.onupgradeneeded=e=>{n?(r.transaction.abort(),r.result.close()):"function"==typeof this._onupgradeneeded&&this._onupgradeneeded(e)},r.onsuccess=()=>{const t=r.result;n?t.close():(t.onversionchange=this._onversionchange.bind(this),e(t))}})),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,n){return await this.getAllMatching(e,{query:t,count:n})}async getAllKeys(e,t,n){return(await this.getAllMatching(e,{query:t,count:n,includeKeys:!0})).map((e=>e.key))}async getAllMatching(e,{index:t,query:n=null,direction:r="next",count:s,includeKeys:a=!1}={}){return await this.transaction([e],"readonly",((i,o)=>{const c=i.objectStore(e),u=t?c.index(t):c,l=[],h=u.openCursor(n,r);h.onsuccess=()=>{const e=h.result;e?(l.push(a?e:e.value),s&&l.length>=s?o(l):e.continue()):o(l)}}))}async transaction(e,t,n){return await this.open(),await new Promise(((r,s)=>{const a=this._db.transaction(e,t);a.onabort=()=>s(a.error),a.oncomplete=()=>r(),n(a,(e=>r(e)))}))}async _call(e,t,n,...r){return await this.transaction([t],n,((n,s)=>{const a=n.objectStore(t),i=a[e].apply(a,r);i.onsuccess=()=>s(i.result)}))}close(){this._db&&(this._db.close(),this._db=null)}}p.prototype.OPEN_TIMEOUT=2e3;const d={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(d))for(const n of t)n in IDBObjectStore.prototype&&(p.prototype[n]=async function(t,...r){return await this._call(n,t,e,...r)});class g{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const m=e=>new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`),"");function y(e){return new Promise((t=>setTimeout(t,e)))}function w(e,t){const n=t();return e.waitUntil(n),n}async function v(e,t){let n=null;if(e.url){n=new URL(e.url).origin}if(n!==self.location.origin)throw new s("cross-origin-copy-response",{origin:n});const r=e.clone(),a={headers:new Headers(r.headers),status:r.status,statusText:r.statusText},i=t?t(a):a,o=function(){if(void 0===h){const e=new Response("");if("body"in e)try{new Response(e.body),h=!0}catch(e){h=!1}h=!1}return h}()?r.body:await r.blob();return new Response(o,i)}n(1);function _(e){if(!e)throw new s("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new s("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const r=new URL(n,location.href),a=new URL(n,location.href);return r.searchParams.set("__WB_REVISION__",t),{cacheKey:r.href,url:a.href}}class x{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:n})=>{if("install"===e.type){const e=t.originalRequest.url;n?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return n}}}class b{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const n=t&&t.cacheKey||this._precacheController.getCacheKeyForURL(e.url);return n?new Request(n):e},this._precacheController=e}}n(4);function R(e){return"string"==typeof e?new Request(e):e}class E{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new g,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let n=R(e);if("navigate"===n.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const r=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:t})}catch(e){throw new s("plugin-error-request-will-fetch",{thrownError:e})}const a=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?void 0:this._strategy.fetchOptions);for(const n of this.iterateCallbacks("fetchDidSucceed"))e=await n({event:t,request:a,response:e});return e}catch(e){throw r&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:r.clone(),request:a.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),n=t.clone();return this.waitUntil(this.cachePut(e,n)),t}async cacheMatch(e){const t=R(e);let n;const{cacheName:r,matchOptions:s}=this._strategy,a=await this.getCacheKey(t,"read"),i={...s,cacheName:r};n=await caches.match(a,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))n=await e({cacheName:r,matchOptions:s,cachedResponse:n,request:a,event:this.event})||void 0;return n}async cachePut(e,t){const n=R(e);await y(0);const r=await this.getCacheKey(n,"write");if(!t)throw new s("cache-put-with-no-response",{url:m(r.url)});const i=await this._ensureResponseSafeToCache(t);if(!i)return!1;const{cacheName:o,matchOptions:c}=this._strategy,u=await self.caches.open(o),h=this.hasCallback("cacheDidUpdate"),f=h?await async function(e,t,n,r){const s=l(t.url,n);if(t.url===s)return e.match(t,r);const a={...r,ignoreSearch:!0},i=await e.keys(t,a);for(const t of i)if(s===l(t.url,n))return e.match(t,r)}(u,r.clone(),["__WB_REVISION__"],c):null;try{await u.put(r,h?i.clone():i)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of a)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:i.clone(),request:r,event:this.event});return!0}async getCacheKey(e,t){if(!this._cacheKeys[t]){let n=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))n=R(await e({mode:t,request:n,event:this.event,params:this.params}));this._cacheKeys[t]=n}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const n of this.iterateCallbacks(e))await n(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const n=this._pluginStateMap.get(t),r=r=>{const s={...r,state:n};return t[e](s)};yield r}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve()}async _ensureResponseSafeToCache(e){let t=e,n=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,n=!0,!t)break;return n||t&&200!==t.status&&(t=void 0),t}}class S{constructor(e={}){this.cacheName=u(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,n="string"==typeof e.request?new Request(e.request):e.request,r="params"in e?e.params:void 0,s=new E(this,{event:t,request:n,params:r}),a=this._getResponse(s,n,t);return[a,this._awaitComplete(a,s,n,t)]}async _getResponse(e,t,n){let r;await e.runCallbacks("handlerWillStart",{event:n,request:t});try{if(r=await this._handle(t,e),!r||"error"===r.type)throw new s("no-response",{url:t.url})}catch(s){for(const a of e.iterateCallbacks("handlerDidError"))if(r=await a({error:s,event:n,request:t}),r)break;if(!r)throw s}for(const s of e.iterateCallbacks("handlerWillRespond"))r=await s({event:n,request:t,response:r});return r}async _awaitComplete(e,t,n,r){let s,a;try{s=await e}catch(a){}try{await t.runCallbacks("handlerDidRespond",{event:r,request:n,response:s}),await t.doneWaiting()}catch(e){a=e}if(await t.runCallbacks("handlerDidComplete",{event:r,request:n,response:s,error:a}),t.destroy(),a)throw a}}class C extends S{constructor(e={}){e.cacheName=c(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(C.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const n=await t.cacheMatch(e);return n||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let n;if(!this._fallbackToNetwork)throw new s("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return n=await t.fetch(e),n}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const n=await t.fetch(e);if(!await t.cachePut(e,n.clone()))throw new s("bad-precaching-response",{url:e.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[n,r]of this.plugins.entries())r!==C.copyRedirectedCacheableResponsesPlugin&&(r===C.defaultPrecacheCacheabilityPlugin&&(e=n),r.cacheWillUpdate&&t++);0===t?this.plugins.push(C.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}C.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},C.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await v(e):e};class T{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:n=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new C({cacheName:c(e),plugins:[...t,new b({precacheController:this})],fallbackToNetwork:n}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const n of e){"string"==typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:r}=_(n),a="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(r)&&this._urlsToCacheKeys.get(r)!==e)throw new s("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(r),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new s("add-to-cache-list-conflicting-integrities",{url:r});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(r,e),this._urlsToCacheModes.set(r,a),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return w(e,(async()=>{const t=new x;this.strategy.plugins.push(t);for(const[t,n]of this._urlsToCacheKeys){const r=this._cacheKeysToIntegrities.get(n),s=this._urlsToCacheModes.get(t),a=new Request(t,{integrity:r,cache:s,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:n},request:a,event:e}))}const{updatedURLs:n,notUpdatedURLs:r}=t;return{updatedURLs:n,notUpdatedURLs:r}}))}activate(e){return w(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),r=[];for(const s of t)n.has(s.url)||(await e.delete(s),r.push(s.url));return{deletedURLs:r}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n){return(await self.caches.open(this.strategy.cacheName)).match(n)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new s("non-precached-url",{url:e});return n=>(n.request=new Request(e),n.params={cacheKey:t,...n.params},this.strategy.handle(n))}}let U;const P=()=>(U||(U=new T),U);n(3);const O=e=>e&&"object"==typeof e?e:{handle:e};class N{constructor(e,t,n="GET"){this.handler=O(t),this.match=e,this.method=n}setCatchHandler(e){this.catchHandler=O(e)}}class k extends N{constructor(e,t,n){super((({url:t})=>{const n=e.exec(t.href);if(n&&(t.origin===location.origin||0===n.index))return n.slice(1)}),t,n)}}class q{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,n=this.handleRequest({request:t,event:e});n&&e.respondWith(n)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const n=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const n=new Request(...t);return this.handleRequest({request:n,event:e})})));e.waitUntil(n),e.ports&&e.ports[0]&&n.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const n=new URL(e.url,location.href);if(!n.protocol.startsWith("http"))return void 0;const r=n.origin===location.origin,{params:s,route:a}=this.findMatchingRoute({event:t,request:e,sameOrigin:r,url:n});let i=a&&a.handler;const o=e.method;if(!i&&this._defaultHandlerMap.has(o)&&(i=this._defaultHandlerMap.get(o)),!i)return void 0;let c;try{c=i.handle({url:n,request:e,event:t,params:s})}catch(e){c=Promise.reject(e)}const u=a&&a.catchHandler;return c instanceof Promise&&(this._catchHandler||u)&&(c=c.catch((async r=>{if(u){0;try{return await u.handle({url:n,request:e,event:t,params:s})}catch(e){r=e}}if(this._catchHandler)return this._catchHandler.handle({url:n,request:e,event:t});throw r}))),c}findMatchingRoute({url:e,sameOrigin:t,request:n,event:r}){const s=this._routes.get(n.method)||[];for(const a of s){let s;const i=a.match({url:e,sameOrigin:t,request:n,event:r});if(i)return s=i,(Array.isArray(i)&&0===i.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(s=void 0),{route:a,params:s}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,O(e))}setCatchHandler(e){this._catchHandler=O(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new s("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new s("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let A;const L=()=>(A||(A=new q,A.addFetchListener(),A.addCacheListener()),A);function M(e,t,n){let r;if("string"==typeof e){const s=new URL(e,location.href);0;r=new N((({url:e})=>e.href===s.href),t,n)}else if(e instanceof RegExp)r=new k(e,t,n);else if("function"==typeof e)r=new N(e,t,n);else{if(!(e instanceof N))throw new s("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});r=e}return L().registerRoute(r),r}class j extends N{constructor(e,t){super((({request:n})=>{const r=e.getURLsToCacheKeys();for(const e of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:n="index.html",cleanURLs:r=!0,urlManipulation:s}={}){const a=new URL(e,location.href);a.hash="",yield a.href;const i=function(e,t=[]){for(const n of[...e.searchParams.keys()])t.some((e=>e.test(n)))&&e.searchParams.delete(n);return e}(a,t);if(yield i.href,n&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=n,yield e.href}if(r){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(s){const e=s({url:a});for(const t of e)yield t.href}}(n.url,t)){const t=r.get(e);if(t)return{cacheKey:t}}}),e.strategy)}}class I extends S{async _handle(e,t){let n,r=await t.cacheMatch(e);if(r)0;else{0;try{r=await t.fetchAndCachePut(e)}catch(e){n=e}0}if(!r)throw new s("no-response",{url:e.url,error:n});return r}}const K={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class D extends S{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(K),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){const n=[];const r=[];let a;if(this._networkTimeoutSeconds){const{id:s,promise:i}=this._getTimeoutPromise({request:e,logs:n,handler:t});a=s,r.push(i)}const i=this._getNetworkPromise({timeoutId:a,request:e,logs:n,handler:t});r.push(i);const o=await t.waitUntil((async()=>await t.waitUntil(Promise.race(r))||await i)());if(!o)throw new s("no-response",{url:e.url});return o}_getTimeoutPromise({request:e,logs:t,handler:n}){let r;return{promise:new Promise((t=>{r=setTimeout((async()=>{t(await n.cacheMatch(e))}),1e3*this._networkTimeoutSeconds)})),id:r}}async _getNetworkPromise({timeoutId:e,request:t,logs:n,handler:r}){let s,a;try{a=await r.fetchAndCachePut(t)}catch(e){s=e}return e&&clearTimeout(e),!s&&a||(a=await r.cacheMatch(t)),a}}class W extends S{constructor(e){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(K)}async _handle(e,t){const n=t.fetchAndCachePut(e).catch((()=>{}));let r,a=await t.cacheMatch(e);if(a)0;else{0;try{a=await n}catch(e){r=e}}if(!a)throw new s("no-response",{url:e.url,error:r});return a}}n(19);class ${constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some((t=>e.headers.get(t)===this._headers[t]))),t}}n(13);const F="cache-entries",H=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class B{constructor(e){this._cacheName=e,this._db=new p("workbox-expiration",1,{onupgradeneeded:e=>this._handleUpgrade(e)})}_handleUpgrade(e){const t=e.target.result.createObjectStore(F,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(async e=>{await new Promise(((t,n)=>{const r=indexedDB.deleteDatabase(e);r.onerror=()=>{n(r.error)},r.onblocked=()=>{n(new Error("Delete blocked"))},r.onsuccess=()=>{t()}}))})(this._cacheName)}async setTimestamp(e,t){const n={url:e=H(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)};await this._db.put(F,n)}async getTimestamp(e){return(await this._db.get(F,this._getId(e))).timestamp}async expireEntries(e,t){const n=await this._db.transaction(F,"readwrite",((n,r)=>{const s=n.objectStore(F).index("timestamp").openCursor(null,"prev"),a=[];let i=0;s.onsuccess=()=>{const n=s.result;if(n){const r=n.value;r.cacheName===this._cacheName&&(e&&r.timestamp<e||t&&i>=t?a.push(n.value):i++),n.continue()}else r(a)}})),r=[];for(const e of n)await this._db.delete(F,e.id),r.push(e.url);return r}_getId(e){return this._cacheName+"|"+H(e)}}class Q{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new B(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),n=await self.caches.open(this._cacheName);for(const e of t)await n.delete(e,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,f(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){return await this._timestampModel.getTimestamp(e)<Date.now()-1e3*this._maxAgeSeconds}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}class G{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:n,cachedResponse:r})=>{if(!r)return null;const s=this._isResponseDateFresh(r),a=this._getCacheExpiration(n);f(a.expireEntries());const i=a.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(e){0}return s?r:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const n=this._getCacheExpiration(e);await n.updateTimestamp(t.url),await n.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),a.add(t))}_getCacheExpiration(e){if(e===u())throw new s("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new Q(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);if(null===t)return!0;return t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),n=new Date(t).getTime();return isNaN(n)?null:n}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}self.skipWaiting(),self.addEventListener("activate",(()=>self.clients.claim()));const z=[{'revision':null,'url':'/storefront.53fd21bbccbd4297a3ef.js'},{'revision':null,'url':'/storefront.be7e35539e572dbe8170.css'}]||[],V=(Math.floor(9999e3*Math.random())+1e3).toString();var Y;async function X({request:e,response:t}){const{url:n}=e;let r;if(t.status>399){const e=/(\w+\.)?(ecoms\d)\.com/i;if(e.test(n))r=n.replace(e,"$2-nyc3.nyc3.digitaloceanspaces.com");else{const e=/(ecoms\d)-\w+\.nyc3\.(cdn\.)?/i;e.test(n)&&(r=n.replace(e,"$1-fra1.fra1."))}}return r?fetch(r):t}["index","404","app/index"].forEach((e=>{const t=`/${e}.html`;for(let e=0;e<z.length;e++)if(z[e]===t||z[e].url===t)return;z.push({url:t,revision:V})})),Y={ignoreURLParametersMatching:[/.*/]},function(e){P().precache(e)}(z),function(e){const t=P();M(new j(t,e))}(Y),M(/^https:\/\/fonts\.googleapis\.com/,new W({cacheName:"google-fonts-stylesheets"})),M(/^https:\/\/fonts\.gstatic\.com/,new I({cacheName:"google-fonts-webfonts",plugins:[new class{constructor(e){this.cacheWillUpdate=async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null,this._cacheableResponse=new $(e)}}({statuses:[0,200]}),new G({maxAgeSeconds:31536e3,maxEntries:30})]})),M(/^https:\/\/cdn\.jsdelivr\.net/,new D({networkTimeoutSeconds:4,cacheName:"cdn-jsdelivr",plugins:[{fetchDidSucceed:async function({request:e,response:t}){if(t.status<300)return t;const n="https://cdn.jsdelivr.net/npm/";return e.url.startsWith(n)?fetch(e.url.replace(n,"https://unpkg.com/")):t}}]})),M(/^https:\/\/io(storefront)?\.ecvol\.com/,new D({networkTimeoutSeconds:3,cacheName:"api-cache",plugins:[new G({maxEntries:20})]})),M(/^https:\/\/ioapi?\.ecvol\.com/,new D({networkTimeoutSeconds:3,cacheName:"store-api-cache",plugins:[new G({maxEntries:50,purgeOnQuotaError:!0})]})),M(/^https:\/\/(?:api|apx-search).e-com\.plus\/(api\/)?v[1-9]+\//,new D({cacheName:"live-api",plugins:[new G({maxEntries:50,maxAgeSeconds:300})]})),M(/^https:\/\/(((\w+\.)?ecoms\d)|(ecom[\w-]+(\.\w+)*\.digitaloceanspaces))\.com.*\/imgs\/normal\//,new I({cacheName:"pictures",plugins:[new G({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),{fetchDidSucceed:X}]})),M(/^https:\/\/(((\w+\.)?ecoms\d)|(ecom[\w-]+(\.\w+)*\.digitaloceanspaces))\.com.*\/imgs\/big\//,new I({cacheName:"pictures-big",plugins:[new G({maxEntries:10,maxAgeSeconds:172800,purgeOnQuotaError:!0}),{fetchDidSucceed:X}]})),M(/\/assets\//,new W({cacheName:"assets"})),M(/\/((?:img|assets).*)?logo\.(?:png|gif|jpg|jpeg|webp|svg)$/,new W({cacheName:"logo"})),M(/\/img\/uploads\/.*\.(?:png|gif|jpg|jpeg|webp|svg)$/,new W({cacheName:"media",plugins:[new G({maxEntries:20,maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),M("/",new D),M(/\/((?!(?:admin|assets|img)(\/|$))[^.]+)(\.(?!js|css|xml|txt|png|gif|jpg|jpeg|webp|svg)[^.]+)*$/,new D({cacheName:"page",plugins:[new G({maxEntries:50,purgeOnQuotaError:!0})]}))}]);
//# sourceMappingURL=sw.js.map