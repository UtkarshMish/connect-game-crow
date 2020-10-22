var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function a(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function p(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function g(){return f("")}function m(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function v(t){return function(e){return e.preventDefault(),t.call(this,e)}}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e){t.value=null==e?"":e}function b(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}let $;function x(t){$=t}function k(){if(!$)throw new Error("Function called outside component initialization");return $}function E(t){k().$$.on_mount.push(t)}function A(){const t=k();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach((e=>{e.call(t,o)}))}}}const C=[],S=[],I=[],R=[],z=Promise.resolve();let U=!1;function L(t){I.push(t)}function T(t){R.push(t)}let j=!1;const M=new Set;function O(){if(!j){j=!0;do{for(let t=0;t<C.length;t+=1){const e=C[t];x(e),N(e.$$)}for(x(null),C.length=0;S.length;)S.pop()();for(let t=0;t<I.length;t+=1){const e=I[t];M.has(e)||(M.add(e),e())}I.length=0}while(C.length);for(;R.length;)R.pop()();U=!1,j=!1,M.clear()}}function N(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const P=new Set;let q;function H(){q={r:0,c:[],p:q}}function B(){q.r||r(q.c),q=q.p}function W(t,e){t&&t.i&&(P.delete(t),t.i(e))}function D(t,e,n,r){if(t&&t.o){if(P.has(t))return;P.add(t),q.c.push((()=>{P.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function Y(t,e,n){const r=t.$$.props[e];void 0!==r&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function G(t){t&&t.c()}function Z(t,n,i){const{fragment:s,on_mount:a,on_destroy:l,after_update:c}=t.$$;s&&s.m(n,i),L((()=>{const n=a.map(e).filter(o);l?l.push(...n):r(n),t.$$.on_mount=[]})),c.forEach(L)}function F(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function V(t,e){-1===t.$$.dirty[0]&&(C.push(t),U||(U=!0,z.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(e,o,i,s,a,l,u=[-1]){const h=$;x(e);const p=o.props||{},f=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let d=!1;if(f.ctx=i?i(e,p,((t,n,...r)=>{const o=r.length?r[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),d&&V(e,t)),n})):[],f.update(),d=!0,r(f.before_update),f.fragment=!!s&&s(f.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);f.fragment&&f.fragment.l(t),t.forEach(c)}else f.fragment&&f.fragment.c();o.intro&&W(e.$$.fragment),Z(e,o.target,o.anchor),O()}x(h)}class J{$destroy(){F(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var Q,X,tt=(function(t,e){t.exports=function(){var t=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},e=y,n=a,r=l,o=c,i=v,s=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function a(t){for(var e,n=[],r=0,o=0,i="";null!=(e=s.exec(t));){var a=e[0],l=e[1],c=e.index;if(i+=t.slice(o,c),o=c+a.length,l)i+=l[1];else{i&&(n.push(i),i="");var u=e[2],p=e[3],f=e[4],d=e[5],g=e[6],m=e[7],v="+"===g||"*"===g,y="?"===g||"*"===g,_=u||"/",w=f||d||(m?".*":"[^"+_+"]+?");n.push({name:p||r++,prefix:u||"",delimiter:_,optional:y,repeat:v,pattern:h(w)})}}return o<t.length&&(i+=t.substr(o)),i&&n.push(i),n}function l(t){return c(a(t))}function c(e){for(var n=new Array(e.length),r=0;r<e.length;r++)"object"==typeof e[r]&&(n[r]=new RegExp("^"+e[r].pattern+"$"));return function(r){for(var o="",i=r||{},s=0;s<e.length;s++){var a=e[s];if("string"!=typeof a){var l,c=i[a.name];if(null==c){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to be defined')}if(t(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but received "'+c+'"');if(0===c.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var u=0;u<c.length;u++){if(l=encodeURIComponent(c[u]),!n[s].test(l))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but received "'+l+'"');o+=(0===u?a.prefix:a.delimiter)+l}}else{if(l=encodeURIComponent(c),!n[s].test(l))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but received "'+l+'"');o+=a.prefix+l}}else o+=a}return o}}function u(t){return t.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function h(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function p(t,e){return t.keys=e,t}function f(t){return t.sensitive?"":"i"}function d(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return p(t,e)}function g(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(y(t[o],e,n).source);return p(new RegExp("(?:"+r.join("|")+")",f(n)),e)}function m(t,e,n){for(var r=a(t),o=v(r,n),i=0;i<r.length;i++)"string"!=typeof r[i]&&e.push(r[i]);return p(o,e)}function v(t,e){for(var n=(e=e||{}).strict,r=!1!==e.end,o="",i=t[t.length-1],s="string"==typeof i&&/\/$/.test(i),a=0;a<t.length;a++){var l=t[a];if("string"==typeof l)o+=u(l);else{var c=u(l.prefix),h=l.pattern;l.repeat&&(h+="(?:"+c+h+")*"),o+=h=l.optional?c?"(?:"+c+"("+h+"))?":"("+h+")?":c+"("+h+")"}}return n||(o=(s?o.slice(0,-2):o)+"(?:\\/(?=$))?"),o+=r?"$":n&&s?"":"(?=\\/|$)",new RegExp("^"+o,f(e))}function y(e,n,r){return t(n=n||[])?r||(r={}):(r=n,n=[]),e instanceof RegExp?d(e,n):t(e)?g(e,n,r):m(e,n,r)}e.parse=n,e.compile=r,e.tokensToFunction=o,e.tokensToRegExp=i;var _,w="undefined"!=typeof document,b="undefined"!=typeof window,$="undefined"!=typeof history,x="undefined"!=typeof process,k=w&&document.ontouchstart?"touchstart":"click",E=b&&!(!window.history.location&&!window.location);function A(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}function C(){var t=new A;function e(){return S.apply(t,arguments)}return e.callbacks=t.callbacks,e.exits=t.exits,e.base=t.base.bind(t),e.strict=t.strict.bind(t),e.start=t.start.bind(t),e.stop=t.stop.bind(t),e.show=t.show.bind(t),e.back=t.back.bind(t),e.redirect=t.redirect.bind(t),e.replace=t.replace.bind(t),e.dispatch=t.dispatch.bind(t),e.exit=t.exit.bind(t),e.configure=t.configure.bind(t),e.sameOrigin=t.sameOrigin.bind(t),e.clickHandler=t.clickHandler.bind(t),e.create=C,Object.defineProperty(e,"len",{get:function(){return t.len},set:function(e){t.len=e}}),Object.defineProperty(e,"current",{get:function(){return t.current},set:function(e){t.current=e}}),e.Context=z,e.Route=U,e}function S(t,e){if("function"==typeof t)return S.call(this,"*",t);if("function"==typeof e)for(var n=new U(t,null,this),r=1;r<arguments.length;++r)this.callbacks.push(n.middleware(arguments[r]));else"string"==typeof t?this["string"==typeof e?"redirect":"show"](t,e):this.start(t)}function I(t){if(!t.handled){var e=this,n=e._window;(e._hashbang?E&&this._getBase()+n.location.hash.replace("#!",""):E&&n.location.pathname+n.location.search)!==t.canonicalPath&&(e.stop(),t.handled=!1,E&&(n.location.href=t.canonicalPath))}}function R(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function z(t,e,n){var r=this.page=n||S,o=r._window,i=r._hashbang,s=r._getBase();"/"===t[0]&&0!==t.indexOf(s)&&(t=s+(i?"#!":"")+t);var a=t.indexOf("?");this.canonicalPath=t;var l=new RegExp("^"+R(s));if(this.path=t.replace(l,"")||"/",i&&(this.path=this.path.replace("#!","")||"/"),this.title=w&&o.document.title,this.state=e||{},this.state.path=t,this.querystring=~a?r._decodeURLEncodedURIComponent(t.slice(a+1)):"",this.pathname=r._decodeURLEncodedURIComponent(~a?t.slice(0,a):t),this.params={},this.hash="",!i){if(!~this.path.indexOf("#"))return;var c=this.path.split("#");this.path=this.pathname=c[0],this.hash=r._decodeURLEncodedURIComponent(c[1])||"",this.querystring=this.querystring.split("#")[0]}}function U(t,n,r){var o=this.page=r||L,i=n||{};i.strict=i.strict||o._strict,this.path="*"===t?"(.*)":t,this.method="GET",this.regexp=e(this.path,this.keys=[],i)}A.prototype.configure=function(t){var e=t||{};this._window=e.window||b&&window,this._decodeURLComponents=!1!==e.decodeURLComponents,this._popstate=!1!==e.popstate&&b,this._click=!1!==e.click&&w,this._hashbang=!!e.hashbang;var n=this._window;this._popstate?n.addEventListener("popstate",this._onpopstate,!1):b&&n.removeEventListener("popstate",this._onpopstate,!1),this._click?n.document.addEventListener(k,this.clickHandler,!1):w&&n.document.removeEventListener(k,this.clickHandler,!1),this._hashbang&&b&&!$?n.addEventListener("hashchange",this._onpopstate,!1):b&&n.removeEventListener("hashchange",this._onpopstate,!1)},A.prototype.base=function(t){if(0===arguments.length)return this._base;this._base=t},A.prototype._getBase=function(){var t=this._base;if(t)return t;var e=b&&this._window&&this._window.location;return b&&this._hashbang&&e&&"file:"===e.protocol&&(t=e.pathname),t},A.prototype.strict=function(t){if(0===arguments.length)return this._strict;this._strict=t},A.prototype.start=function(t){var e=t||{};if(this.configure(e),!1!==e.dispatch){var n;if(this._running=!0,E){var r=this._window.location;n=this._hashbang&&~r.hash.indexOf("#!")?r.hash.substr(2)+r.search:this._hashbang?r.search+r.hash:r.pathname+r.search+r.hash}this.replace(n,null,!0,e.dispatch)}},A.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var t=this._window;this._click&&t.document.removeEventListener(k,this.clickHandler,!1),b&&t.removeEventListener("popstate",this._onpopstate,!1),b&&t.removeEventListener("hashchange",this._onpopstate,!1)}},A.prototype.show=function(t,e,n,r){var o=new z(t,e,this),i=this.prevContext;return this.prevContext=o,this.current=o.path,!1!==n&&this.dispatch(o,i),!1!==o.handled&&!1!==r&&o.pushState(),o},A.prototype.back=function(t,e){var n=this;if(this.len>0){var r=this._window;$&&r.history.back(),this.len--}else t?setTimeout((function(){n.show(t,e)})):setTimeout((function(){n.show(n._getBase(),e)}))},A.prototype.redirect=function(t,e){var n=this;"string"==typeof t&&"string"==typeof e&&S.call(this,t,(function(t){setTimeout((function(){n.replace(e)}),0)})),"string"==typeof t&&void 0===e&&setTimeout((function(){n.replace(t)}),0)},A.prototype.replace=function(t,e,n,r){var o=new z(t,e,this),i=this.prevContext;return this.prevContext=o,this.current=o.path,o.init=n,o.save(),!1!==r&&this.dispatch(o,i),o},A.prototype.dispatch=function(t,e){var n=0,r=0,o=this;function i(){var t=o.exits[r++];if(!t)return s();t(e,i)}function s(){var e=o.callbacks[n++];if(t.path===o.current)return e?void e(t,s):I.call(o,t);t.handled=!1}e?i():s()},A.prototype.exit=function(t,e){if("function"==typeof t)return this.exit("*",t);for(var n=new U(t,null,this),r=1;r<arguments.length;++r)this.exits.push(n.middleware(arguments[r]))},A.prototype.clickHandler=function(t){if(1===this._which(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){var e=t.target,n=t.path||(t.composedPath?t.composedPath():null);if(n)for(var r=0;r<n.length;r++)if(n[r].nodeName&&"A"===n[r].nodeName.toUpperCase()&&n[r].href){e=n[r];break}for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;if(e&&"A"===e.nodeName.toUpperCase()){var o="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name;if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")){var i=e.getAttribute("href");if((this._hashbang||!this._samePath(e)||!e.hash&&"#"!==i)&&!(i&&i.indexOf("mailto:")>-1)&&!(o?e.target.baseVal:e.target)&&(o||this.sameOrigin(e.href))){var s=o?e.href.baseVal:e.pathname+e.search+(e.hash||"");s="/"!==s[0]?"/"+s:s,x&&s.match(/^\/[a-zA-Z]:\//)&&(s=s.replace(/^\/[a-zA-Z]:\//,"/"));var a=s,l=this._getBase();0===s.indexOf(l)&&(s=s.substr(l.length)),this._hashbang&&(s=s.replace("#!","")),(!l||a!==s||E&&"file:"===this._window.location.protocol)&&(t.preventDefault(),this.show(a))}}}}},A.prototype._onpopstate=(_=!1,b?(w&&"complete"===document.readyState?_=!0:window.addEventListener("load",(function(){setTimeout((function(){_=!0}),0)})),function(t){if(_){var e=this;if(t.state){var n=t.state.path;e.replace(n,t.state)}else if(E){var r=e._window.location;e.show(r.pathname+r.search+r.hash,void 0,void 0,!1)}}}):function(){}),A.prototype._which=function(t){return null==(t=t||b&&this._window.event).which?t.button:t.which},A.prototype._toURL=function(t){var e=this._window;if("function"==typeof URL&&E)return new URL(t,e.location.toString());if(w){var n=e.document.createElement("a");return n.href=t,n}},A.prototype.sameOrigin=function(t){if(!t||!E)return!1;var e=this._toURL(t),n=this._window.location;return n.protocol===e.protocol&&n.hostname===e.hostname&&(n.port===e.port||""===n.port&&(80==e.port||443==e.port))},A.prototype._samePath=function(t){if(!E)return!1;var e=this._window.location;return t.pathname===e.pathname&&t.search===e.search},A.prototype._decodeURLEncodedURIComponent=function(t){return"string"!=typeof t?t:this._decodeURLComponents?decodeURIComponent(t.replace(/\+/g," ")):t},z.prototype.pushState=function(){var t=this.page,e=t._window,n=t._hashbang;t.len++,$&&e.history.pushState(this.state,this.title,n&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},z.prototype.save=function(){var t=this.page;$&&t._window.history.replaceState(this.state,this.title,t._hashbang&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},U.prototype.middleware=function(t){var e=this;return function(n,r){if(e.match(n.path,n.params))return n.routePath=e.path,t(n,r);r()}},U.prototype.match=function(t,e){var n=this.keys,r=t.indexOf("?"),o=~r?t.slice(0,r):t,i=this.regexp.exec(decodeURIComponent(o));if(!i)return!1;delete e[0];for(var s=1,a=i.length;s<a;++s){var l=n[s-1],c=this.page._decodeURLEncodedURIComponent(i[s]);void 0===c&&hasOwnProperty.call(e,l.name)||(e[l.name]=c)}return!0};var L=C(),T=L,j=L;return T.default=j,T}()}(X={path:Q,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&X.path)}},X.exports),X.exports);function et(e){let n;return{c(){n=h("div"),n.innerHTML='<div class="heading"><h3>Page Made Using Svelte</h3></div> \n  <div class="body"><p>The page is made using Svelte by Utkarsh Mishra!</p></div>',y(n,"class","about__section svelte-1ufqwym")},m(t,e){l(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}class nt extends J{constructor(t){super(),K(this,t,null,et,i,{})}}function rt(e){let n,r,o,i,s;return i=new nt({}),{c(){n=h("div"),r=h("h3"),r.textContent="About",o=d(),G(i.$$.fragment),y(r,"class","main__heading svelte-13s36ty"),y(n,"class","main__container svelte-13s36ty")},m(t,e){l(t,n,e),a(n,r),a(n,o),Z(i,n,null),s=!0},p:t,i(t){s||(W(i.$$.fragment,t),s=!0)},o(t){D(i.$$.fragment,t),s=!1},d(t){t&&c(n),F(i)}}}class ot extends J{constructor(t){super(),K(this,t,null,rt,i,{})}}const it=(t,e)=>null!=t&&null!=e&&0!=t.length&&112<e<3&&!isNaN(e);function st(e){let n,r,o;return{c(){n=p("svg"),r=p("polygon"),y(r,"points","5 3 19 12 5 21 5 3"),y(n,"xmlns","http://www.w3.org/2000/svg"),y(n,"width",e[0]),y(n,"height",e[0]),y(n,"fill","none"),y(n,"viewBox","0 0 24 24"),y(n,"stroke","currentColor"),y(n,"stroke-width",e[1]),y(n,"stroke-linecap","round"),y(n,"stroke-linejoin","round"),y(n,"class",o="feather feather-play "+e[2])},m(t,e){l(t,n,e),a(n,r)},p(t,[e]){1&e&&y(n,"width",t[0]),1&e&&y(n,"height",t[0]),2&e&&y(n,"stroke-width",t[1]),4&e&&o!==(o="feather feather-play "+t[2])&&y(n,"class",o)},i:t,o:t,d(t){t&&c(n)}}}function at(t,e,n){let{size:r="100%"}=e,{strokeWidth:o=2}=e,{class:i=""}=e;return"100%"!==r&&(r="x"===r.slice(-1)?r.slice(0,r.length-1)+"em":parseInt(r)+"px"),t.$$set=t=>{"size"in t&&n(0,r=t.size),"strokeWidth"in t&&n(1,o=t.strokeWidth),"class"in t&&n(2,i=t.class)},[r,o,i]}class lt extends J{constructor(t){super(),K(this,t,at,st,i,{size:0,strokeWidth:1,class:2})}}function ct(e){let n,r,o,i;return{c(){n=p("svg"),r=p("polygon"),o=p("path"),y(r,"points","11 5 6 9 2 9 2 15 6 15 11 19 11 5"),y(o,"d","M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"),y(n,"xmlns","http://www.w3.org/2000/svg"),y(n,"width",e[0]),y(n,"height",e[0]),y(n,"fill","none"),y(n,"viewBox","0 0 24 24"),y(n,"stroke","currentColor"),y(n,"stroke-width",e[1]),y(n,"stroke-linecap","round"),y(n,"stroke-linejoin","round"),y(n,"class",i="feather feather-volume-2 "+e[2])},m(t,e){l(t,n,e),a(n,r),a(n,o)},p(t,[e]){1&e&&y(n,"width",t[0]),1&e&&y(n,"height",t[0]),2&e&&y(n,"stroke-width",t[1]),4&e&&i!==(i="feather feather-volume-2 "+t[2])&&y(n,"class",i)},i:t,o:t,d(t){t&&c(n)}}}function ut(t,e,n){let{size:r="100%"}=e,{strokeWidth:o=2}=e,{class:i=""}=e;return"100%"!==r&&(r="x"===r.slice(-1)?r.slice(0,r.length-1)+"em":parseInt(r)+"px"),t.$$set=t=>{"size"in t&&n(0,r=t.size),"strokeWidth"in t&&n(1,o=t.strokeWidth),"class"in t&&n(2,i=t.class)},[r,o,i]}class ht extends J{constructor(t){super(),K(this,t,ut,ct,i,{size:0,strokeWidth:1,class:2})}}function pt(e){let n,r,o,i,s;return{c(){n=p("svg"),r=p("polygon"),o=p("line"),i=p("line"),y(r,"points","11 5 6 9 2 9 2 15 6 15 11 19 11 5"),y(o,"x1","23"),y(o,"y1","9"),y(o,"x2","17"),y(o,"y2","15"),y(i,"x1","17"),y(i,"y1","9"),y(i,"x2","23"),y(i,"y2","15"),y(n,"xmlns","http://www.w3.org/2000/svg"),y(n,"width",e[0]),y(n,"height",e[0]),y(n,"fill","none"),y(n,"viewBox","0 0 24 24"),y(n,"stroke","currentColor"),y(n,"stroke-width",e[1]),y(n,"stroke-linecap","round"),y(n,"stroke-linejoin","round"),y(n,"class",s="feather feather-volume-x "+e[2])},m(t,e){l(t,n,e),a(n,r),a(n,o),a(n,i)},p(t,[e]){1&e&&y(n,"width",t[0]),1&e&&y(n,"height",t[0]),2&e&&y(n,"stroke-width",t[1]),4&e&&s!==(s="feather feather-volume-x "+t[2])&&y(n,"class",s)},i:t,o:t,d(t){t&&c(n)}}}function ft(t,e,n){let{size:r="100%"}=e,{strokeWidth:o=2}=e,{class:i=""}=e;return"100%"!==r&&(r="x"===r.slice(-1)?r.slice(0,r.length-1)+"em":parseInt(r)+"px"),t.$$set=t=>{"size"in t&&n(0,r=t.size),"strokeWidth"in t&&n(1,o=t.strokeWidth),"class"in t&&n(2,i=t.class)},[r,o,i]}class dt extends J{constructor(t){super(),K(this,t,ft,pt,i,{size:0,strokeWidth:1,class:2})}}function gt(t,e,n){const r=t.slice();return r[14]=e[n],r}function mt(t){let e,n,r=t[14].error+"";return{c(){e=h("li"),n=f(r),y(e,"class","svelte-vy3zu3")},m(t,r){l(t,e,r),a(e,n)},p(t,e){8&e&&r!==(r=t[14].error+"")&&_(n,r)},d(t){t&&c(e)}}}function vt(t){let e,n=t[14].error&&mt(t);return{c(){n&&n.c(),e=g()},m(t,r){n&&n.m(t,r),l(t,e,r)},p(t,r){t[14].error?n?n.p(t,r):(n=mt(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&c(e)}}}function yt(t){let e,n,i,s,p,g,_,w,$,x,k,E,A,C,S,I,R,z,U,L,T,j,M,O=t[3],N=[];for(let e=0;e<O.length;e+=1)N[e]=vt(gt(t,O,e));return z=new lt({props:{size:"32"}}),{c(){e=h("form"),n=h("input"),i=d(),s=h("input"),p=d(),g=h("div"),_=h("label"),w=f("Single Player\r\n      "),$=h("input"),x=d(),k=h("label"),E=f("Multi Player\r\n      "),A=h("input"),C=d(),S=h("ul");for(let t=0;t<N.length;t+=1)N[t].c();I=d(),R=h("button"),G(z.$$.fragment),U=d(),L=h("span"),L.textContent="Start Game",y(n,"type","text"),y(n,"maxlength","30"),y(n,"class","form__input-text svelte-vy3zu3"),y(n,"placeholder",t[1]),n.required=!0,y(s,"type","date"),s.required=!0,y(s,"class","svelte-vy3zu3"),y($,"type","radio"),y($,"name","game_type"),$.__value="single-player",$.value=$.__value,y($,"id","single-player"),$.checked=!0,$.required=!0,y($,"class","svelte-vy3zu3"),t[9][0].push($),y(_,"for","single-player"),y(_,"class","svelte-vy3zu3"),y(A,"type","radio"),y(A,"name","game_type"),A.__value="multi-player",A.value=A.__value,y(A,"id","multi-player"),y(A,"class","svelte-vy3zu3"),t[9][0].push(A),y(k,"for","multi-player"),y(k,"class","svelte-vy3zu3"),y(g,"class","game__type svelte-vy3zu3"),b(S,"text-align","left"),y(R,"type","submit"),y(R,"class","submit svelte-vy3zu3"),y(e,"class","svelte-vy3zu3")},m(r,c){l(r,e,c),a(e,n),a(e,i),a(e,s),a(e,p),a(e,g),a(g,_),a(_,w),a(_,$),$.checked=$.__value===t[0],a(g,x),a(g,k),a(k,E),a(k,A),A.checked=A.__value===t[0],a(e,C),a(e,S);for(let t=0;t<N.length;t+=1)N[t].m(S,null);a(e,I),a(e,R),Z(z,R,null),a(R,U),a(R,L),T=!0,j||(M=[m(n,"input",t[5]),m(s,"input",t[4]),m($,"change",t[8]),m(A,"change",t[10]),m(e,"submit",v((function(){o(t[2])&&t[2].apply(this,arguments)})))],j=!0)},p(e,[r]){if(t=e,(!T||2&r)&&y(n,"placeholder",t[1]),1&r&&($.checked=$.__value===t[0]),1&r&&(A.checked=A.__value===t[0]),8&r){let e;for(O=t[3],e=0;e<O.length;e+=1){const n=gt(t,O,e);N[e]?N[e].p(n,r):(N[e]=vt(n),N[e].c(),N[e].m(S,null))}for(;e<N.length;e+=1)N[e].d(1);N.length=O.length}},i(t){T||(W(z.$$.fragment,t),T=!0)},o(t){D(z.$$.fragment,t),T=!1},d(n){n&&c(e),t[9][0].splice(t[9][0].indexOf($),1),t[9][0].splice(t[9][0].indexOf(A),1),u(N,n),F(z),j=!1,r(M)}}}function _t(t,e,n){A();let{valueHolderA:r="Enter: "}=e,{handleSubmit:o=null}=e,{valueA:i=""}=e,{valueB:s=""}=e,{valueC:a=""}=e,l=null,c=null,u=[{error:null},{error:null}];return t.$$set=t=>{"valueHolderA"in t&&n(1,r=t.valueHolderA),"handleSubmit"in t&&n(2,o=t.handleSubmit),"valueA"in t&&n(6,i=t.valueA),"valueB"in t&&n(7,s=t.valueB),"valueC"in t&&n(0,a=t.valueC)},[a,r,o,u,function(t){const e=new Date,r=new Date(t.target.value);c=parseInt(e.getFullYear()-r.getFullYear()),null!=c&&c>3&&c<100?(n(7,s=c),n(3,u[0].error=null,u)):n(3,u[0].error="Enter a valid age (year between 1925 & 2017).",u)},function(t){l=String(t.target.value);const e=new RegExp(/^[A-Za-z]+[A-Za-z ]*$/);null!=l&&e.test(l)?(n(3,u[1].error=null,u),n(6,i=l)):n(3,u[1].error="Enter a Valid Name",u)},i,s,function(){a=this.__value,n(0,a)},[[]],function(){a=this.__value,n(0,a)}]}class wt extends J{constructor(t){super(),K(this,t,_t,yt,i,{valueHolderA:1,handleSubmit:2,valueA:6,valueB:7,valueC:0})}}const bt=[];function $t(e,n=t){let r;const o=[];function s(t){if(i(e,t)&&(e=t,r)){const t=!bt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),bt.push(n,e)}if(t){for(let t=0;t<bt.length;t+=2)bt[t][0](bt[t+1]);bt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,a=t){const l=[i,a];return o.push(l),1===o.length&&(r=n(s)||t),i(e),()=>{const t=o.indexOf(l);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const xt=$t(localStorage.getItem("name")||""),kt=$t(parseInt(localStorage.getItem("age"))||""),Et=$t([]),At=$t(localStorage.getItem("game_type")||"single-player"),Ct=$t(Boolean(localStorage.getItem("sound_on"))||!0);function St(t){let e,n,r,o,i,s,u,p,f;function g(e){t[5].call(null,e)}function m(e){t[6].call(null,e)}function v(e){t[7].call(null,e)}let _={valueHolderA:Rt,handleSubmit:t[4]};return void 0!==t[1]&&(_.valueA=t[1]),void 0!==t[2]&&(_.valueB=t[2]),void 0!==t[3]&&(_.valueC=t[3]),i=new wt({props:_}),S.push((()=>Y(i,"valueA",g))),S.push((()=>Y(i,"valueB",m))),S.push((()=>Y(i,"valueC",v))),{c(){e=h("div"),n=h("div"),n.innerHTML='<h3 class="main__heading svelte-1r1489g">Enter Player Info</h3>',r=d(),o=h("div"),G(i.$$.fragment),y(n,"class","heading svelte-1r1489g"),y(o,"class","body svelte-1r1489g"),y(e,"class","info__container svelte-1r1489g")},m(t,s){l(t,e,s),a(e,n),a(e,r),a(e,o),Z(i,o,null),f=!0},p(t,e){const n={};!s&&2&e&&(s=!0,n.valueA=t[1],T((()=>s=!1))),!u&&4&e&&(u=!0,n.valueB=t[2],T((()=>u=!1))),!p&&8&e&&(p=!0,n.valueC=t[3],T((()=>p=!1))),i.$set(n)},i(t){f||(W(i.$$.fragment,t),f=!0)},o(t){D(i.$$.fragment,t),f=!1},d(t){t&&c(e),F(i)}}}function It(t){let e,n,r=t[0]&&St(t);return{c(){r&&r.c(),e=g()},m(t,o){r&&r.m(t,o),l(t,e,o),n=!0},p(t,[n]){t[0]?r?(r.p(t,n),1&n&&W(r,1)):(r=St(t),r.c(),W(r,1),r.m(e.parentNode,e)):r&&(H(),D(r,1,1,(()=>{r=null})),B())},i(t){n||(W(r),n=!0)},o(t){D(r),n=!1},d(t){r&&r.d(t),t&&c(e)}}}const Rt="Enter your Name: ";function zt(t,e,n){let r,o,i;s(t,xt,(t=>n(1,r=t))),s(t,kt,(t=>n(2,o=t))),s(t,At,(t=>n(3,i=t)));let a=!0;E((()=>{n(0,a=!it(r,o)),a||tt.redirect("/game")}));return[a,r,o,i,t=>{0!==xt.length&&0!==kt.length&&(((t,e,n)=>{localStorage.setItem("name",t),localStorage.setItem("age",e),localStorage.setItem("game_type",n)})(r,o,i),tt.show("/game"))},function(t){r=t,xt.set(r)},function(t){o=t,kt.set(o)},function(t){i=t,At.set(i)}]}class Ut extends J{constructor(t){super(),K(this,t,zt,It,i,{})}}function Lt(t){t&&new Audio("/sound/click_sound.mp3").play()}function Tt(t,e,n){const r=t.slice();return r[31]=e[n],r}function jt(t,e,n){const r=t.slice();return r[28]=e[n],r}function Mt(t){let e,n;return{c(){e=h("h5"),n=f(t[2]),y(e,"id","turn-info"),y(e,"class","svelte-q0ypyp")},m(t,r){l(t,e,r),a(e,n)},p(t,e){4&e[0]&&_(n,t[2])},d(t){t&&c(e)}}}function Ot(t){let e,n,r,o,i,s;return{c(){e=h("h3"),n=f(t[1]),r=d(),o=h("button"),o.textContent="RESET GAME",y(e,"id","game-over"),y(o,"class","reset-button svelte-q0ypyp")},m(c,u){l(c,e,u),a(e,n),l(c,r,u),l(c,o,u),i||(s=m(o,"click",t[6]),i=!0)},p(t,e){2&e[0]&&_(n,t[1])},d(t){t&&c(e),t&&c(r),t&&c(o),i=!1,s()}}}function Nt(t){let e,n,r,o,i,s;return{c(){e=h("td"),n=h("button"),y(n,"type","button"),y(n,"class","options svelte-q0ypyp"),y(n,"name",r=t[28]),y(n,"key",o=t[31]),b(n,"background",Bt),n.disabled=t[0]},m(r,o){l(r,e,o),a(e,n),i||(s=m(n,"click",t[5]),i=!0)},p(t,e){1&e[0]&&(n.disabled=t[0])},d(t){t&&c(e),i=!1,s()}}}function Pt(t){let e,n,r,o=t[3],i=[];for(let e=0;e<o.length;e+=1)i[e]=Nt(Tt(t,o,e));return{c(){e=h("tr");for(let t=0;t<i.length;t+=1)i[t].c();n=d(),y(e,"name",r=t[28])},m(t,r){l(t,e,r);for(let t=0;t<i.length;t+=1)i[t].m(e,null);a(e,n)},p(t,r){if(57&r[0]){let s;for(o=t[3],s=0;s<o.length;s+=1){const a=Tt(t,o,s);i[s]?i[s].p(a,r):(i[s]=Nt(a),i[s].c(),i[s].m(e,n))}for(;s<i.length;s+=1)i[s].d(1);i.length=o.length}},d(t){t&&c(e),u(i,t)}}}function qt(e){let n,r,o,i,s,p,f,g,m,v,_=e[2]&&Mt(e),w=e[1]&&Ot(e),b=e[4],$=[];for(let t=0;t<b.length;t+=1)$[t]=Pt(jt(e,b,t));return{c(){n=h("div"),r=h("div"),o=h("h1"),o.textContent="Welcome to Connect Three!",i=d(),s=h("h4"),s.textContent="The objective of the game is to connect three chips in a row!",p=d(),_&&_.c(),f=d(),g=h("div"),w&&w.c(),m=d(),v=h("table");for(let t=0;t<$.length;t+=1)$[t].c();y(o,"class","svelte-q0ypyp"),y(s,"class","svelte-q0ypyp"),y(r,"class","game-container svelte-q0ypyp"),y(v,"class","svelte-q0ypyp"),y(g,"class","game svelte-q0ypyp"),y(n,"class","game-element svelte-q0ypyp")},m(t,e){l(t,n,e),a(n,r),a(r,o),a(r,i),a(r,s),a(r,p),_&&_.m(r,null),a(n,f),a(n,g),w&&w.m(g,null),a(g,m),a(g,v);for(let t=0;t<$.length;t+=1)$[t].m(v,null)},p(t,e){if(t[2]?_?_.p(t,e):(_=Mt(t),_.c(),_.m(r,null)):_&&(_.d(1),_=null),t[1]?w?w.p(t,e):(w=Ot(t),w.c(),w.m(g,m)):w&&(w.d(1),w=null),57&e[0]){let n;for(b=t[4],n=0;n<b.length;n+=1){const r=jt(t,b,n);$[n]?$[n].p(r,e):($[n]=Pt(r),$[n].c(),$[n].m(v,null))}for(;n<$.length;n+=1)$[n].d(1);$.length=b.length}},i:t,o:t,d(t){t&&c(n),_&&_.d(),w&&w.d(),u($,t)}}}const Ht="CPU";let Bt="rgb(107, 106, 106)";function Wt(t,e,n){let r,o,i;s(t,xt,(t=>n(11,r=t))),s(t,Et,(t=>n(12,o=t))),s(t,Ct,(t=>n(13,i=t)));let a,l=!1,c=[],u=[[]],h=null,p="blue",f=r,d=[...Array(7).keys()],g=[...Array(5).keys()];function m(t,e){var i;n(0,l=!0),n(1,h="GAME OVER ! "+f+" won at "+(t+1)+" "+(e+1)),n(0,l=!0),Et.update((t=>[...o,{name:r,score:f===r?"Won":"Lost"}])),i=o,localStorage.setItem("scores",JSON.stringify(i))}function v(){l&&h?n(2,a="Finished ! Reset to play again !"):(n(9,p=f===Ht?"blue":"red"),n(10,f=f===Ht?r:Ht),n(2,a=f+" : Your Turn pick any  "+p+" chip ."))}function y(t,e,n){3===t&&m(e,n)}function _(t,e,n){let r=0;r=function(t,e,n,r){for(let o=0;o<3;o++){if(!u[t]||!u[t][e])return 0;u[t][e].value===n?(r+=1,t--):(r=0,t--)}return r}(t,e,n,r=0),y(r,t,e),r=function(t,e,n,r){for(let o=0;o<3;o++){if(!u[t]||!u[t][e])return 0;u[t][e].value===n?(r+=1,t++):(r=0,t++)}return r}(t,e,n,r=0),y(r,t,e),r=function(t,e,n,r){for(let o=0;o<3;o++){if(!u[t][e])return 0;u[t][e].value===n?(r+=1,e++):(r=0,e++)}return r}(t,e,n,r=0),y(r,t,e),r=function(t,e,n,r){for(let o=0;o<3;o++){if(!u[t]||!u[t][e])return 0;u[t][e].value===n?(r+=1,e--):(r=0,e++)}return r}(t,e,n,r=0),y(r,t,e),r=function(t,e,n,r){return u[t][e]&&u[t][e].value==n?(u[t][e-1]&&u[t][e+1]&&(r=u[t][e-1].value===n&&u[t][e+1].value===n?3:0),u[t-1]&&u[t+1]&&3!=r&&(3!=(r=u[t-1][e].value===n&&u[t+1][e].value===n?3:0)&&u[t-1][e-1]&&u[t+1][e+1]&&(r=u[t-1][e-1].value===n&&u[t+1][e+1].value===n?3:0),u[t-1][e+1]&&u[t+1][e-1]&&3!=r&&(r=u[t-1][e+1].value===n&&u[t+1][e-1].value===n?3:0)),r):r}(t,e,n,r=0),y(r,t,e),r=function(t,e,n,r){for(let o=0;o<3;o++){if(!u[t]||!u[t][e])return 0;u[t][e].value===n?(r+=1,t++,e--):(r=0,t--)}return r}(t,e,n,r=0),y(r,t,e),r=function(t,e,n,r){for(let o=0;o<3;o++){if(!u[t]||!u[t][e])return 0;u[t][e].value===n?(r+=1,t++,e++):(r=0,t--)}return r}(t,e,n,r=0),y(r,t,e),r=function(t,e,n,r){for(let o=0;o<3;o++){if(!u[t]||!u[t][e])return 0;u[t][e].value===n?(r+=1,t--,e++):(r=0,t--)}return r}(t,e,n,r=0),y(r,t,e),r=function(t,e,n,r){for(let o=0;o<3;o++){if(!u[t]||!u[t][e])return 0;u[t][e].value===n?(r+=1,t--,e--):(r=0,t--)}return r}(t,e,n,r=0),y(r,t,e)}return E((()=>{Et.update((t=>JSON.parse(localStorage.getItem("scores"))||[])),c=document.querySelectorAll("button"),function(){for(let t=0,e=0;t<5;t++){for(let r=0;r<7;r++)n(8,u[t][r]=c[e],u),e++;t+1!=5&&n(8,u[t+1]=[],u)}}()})),t.$$.update=()=>{if(3072&t.$$.dirty[0]&&n(2,a=(f==Ht?Ht:r)+" : Your turn to pick the chip"),1792&t.$$.dirty[0]&&f===Ht){let t,e;do{t=Math.floor(108*Math.random()%4),e=Math.floor(108*Math.random()%6)}while(null!==u[t][e].value&&u[t][e].disabled);Lt(),n(8,u[t][e].value=p,u),n(8,u[t][e].style.background=p,u),n(8,u[t][e].disabled=!0,u),_(t,e,p),v()}},[l,h,a,d,g,function(t){Lt(i),t.target.value=p,t.target.style.background=p,t.target.disabled=!0;const e=parseInt(t.target.getAttribute("key"));_(parseInt(t.target.name),e,p),v()},function(){n(0,l=!1),n(10,f=r),n(1,h=null),n(9,p="blue"),n(2,a=f+" : Your turn to pick the chip");for(let t=0;t<5;t++)for(let e=0;e<7;e++)n(8,u[t][e].style.background=Bt,u),n(8,u[t][e].value="",u)}]}class Dt extends J{constructor(t){super(),K(this,t,Wt,qt,i,{},[-1,-1])}}function Yt(t,e,n){const r=t.slice();return r[2]=e[n].name,r[3]=e[n].score,r}function Gt(t){let e,n,r,o,i,s,p,f,g,v,_,w,b,$=t[0],x=[];for(let e=0;e<$.length;e+=1)x[e]=Zt(Yt(t,$,e));return{c(){e=h("div"),n=h("div"),r=h("h2"),r.textContent="Score Board",o=d(),i=h("button"),i.textContent="Clear Scores",s=d(),p=h("div"),f=h("table"),g=h("thead"),g.innerHTML='<tr><th class="svelte-m71i8c">Name</th> \n            <th class="svelte-m71i8c">Score</th></tr>',v=d(),_=h("tbody");for(let t=0;t<x.length;t+=1)x[t].c();y(n,"class","score-heading"),y(f,"class","svelte-m71i8c"),y(p,"class","scoreboard svelte-m71i8c"),y(e,"class","score-container svelte-m71i8c")},m(c,u){l(c,e,u),a(e,n),a(n,r),a(n,o),a(n,i),a(e,s),a(e,p),a(p,f),a(f,g),a(f,v),a(f,_);for(let t=0;t<x.length;t+=1)x[t].m(_,null);w||(b=m(i,"click",t[1]),w=!0)},p(t,e){if(1&e){let n;for($=t[0],n=0;n<$.length;n+=1){const r=Yt(t,$,n);x[n]?x[n].p(r,e):(x[n]=Zt(r),x[n].c(),x[n].m(_,null))}for(;n<x.length;n+=1)x[n].d(1);x.length=$.length}},d(t){t&&c(e),u(x,t),w=!1,b()}}}function Zt(t){let e,n,r,o,i,s,u,p,g=t[2]+"",m=t[3]+"";return{c(){e=h("tr"),n=h("td"),r=f(g),o=d(),i=h("td"),s=f(m),p=d(),y(n,"class","svelte-m71i8c"),y(i,"name",u=t[3]),y(i,"class","svelte-m71i8c")},m(t,c){l(t,e,c),a(e,n),a(n,r),a(e,o),a(e,i),a(i,s),a(e,p)},p(t,e){1&e&&g!==(g=t[2]+"")&&_(r,g),1&e&&m!==(m=t[3]+"")&&_(s,m),1&e&&u!==(u=t[3])&&y(i,"name",u)},d(t){t&&c(e)}}}function Ft(e){let n,r=null!=e[0]&&0!==e[0].length&&Gt(e);return{c(){r&&r.c(),n=g()},m(t,e){r&&r.m(t,e),l(t,n,e)},p(t,[e]){null!=t[0]&&0!==t[0].length?r?r.p(t,e):(r=Gt(t),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},i:t,o:t,d(t){r&&r.d(t),t&&c(n)}}}function Vt(t,e,n){let r;return s(t,Et,(t=>n(0,r=t))),[r,function(){Et.set([]),localStorage.removeItem("scores")}]}class Kt extends J{constructor(t){super(),K(this,t,Vt,Ft,i,{})}}function Jt(t){let e,n,o,i;return{c(){e=h("input"),y(e,"type","text"),y(e,"pattern","^[A-Za-z ]+$"),y(e,"label","Enter Only Alphabets"),y(e,"maxlength",n=20),e.required=!0},m(n,r){l(n,e,r),w(e,t[0]),o||(i=[m(e,"keyup",t[6]),m(e,"input",t[8])],o=!0)},p(t,n){1&n&&e.value!==t[0]&&w(e,t[0])},d(t){t&&c(e),o=!1,r(i)}}}function Qt(t){let e,n;return e=new dt({props:{size:"32"}}),{c(){G(e.$$.fragment)},m(t,r){Z(e,t,r),n=!0},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}function Xt(t){let e,n;return e=new ht({props:{size:"32"}}),{c(){G(e.$$.fragment)},m(t,r){Z(e,t,r),n=!0},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}function te(t){let e,n,o,i,s,u,p,g,w,b,$,x,k,E,A,C,S,I,R,z,U,L,T,j,M,O,N,P,q,Y,G,Z,F,V=t[5].EASY+"",K=t[5].MEDIUM+"",J=t[5].HARD+"",Q=t[1]?"Set":"Change Name",X=t[1]&&Jt(t);const tt=[Xt,Qt],et=[];function nt(t,e){return t[2]?0:1}return N=nt(t),P=et[N]=tt[N](t),{c(){e=h("div"),n=h("div"),n.innerHTML="<h1>Game Settings</h1>",o=d(),i=h("div"),s=h("label"),s.textContent="Select Difficulty:",u=d(),p=h("select"),g=h("option"),w=f(V),$=h("option"),x=f(K),E=h("option"),A=f(J),S=d(),I=h("form"),X&&X.c(),R=d(),z=h("button"),U=f(Q),L=d(),T=h("div"),j=h("span"),j.textContent="Music",M=d(),O=h("div"),P.c(),q=d(),Y=h("div"),Y.innerHTML='<button class="quit-button svelte-1jcoc3p">QUIT GAME</button>',y(n,"class","heading svelte-1jcoc3p"),y(s,"for","difficulty"),y(s,"id","difficulty"),y(s,"class","svelte-1jcoc3p"),g.__value=b=t[5].EASY,g.value=g.__value,$.__value=k=t[5].MEDIUM,$.value=$.__value,E.__value=C=t[5].HARD,E.value=E.__value,y(p,"name","difficulty"),y(p,"id","difficulty"),y(i,"class","option svelte-1jcoc3p"),y(z,"type","submit"),y(z,"class","svelte-1jcoc3p"),y(I,"class","option svelte-1jcoc3p"),y(j,"class","svelte-1jcoc3p"),y(O,"class","sound_option svelte-1jcoc3p"),y(T,"class","option svelte-1jcoc3p"),y(Y,"class","option svelte-1jcoc3p"),y(e,"class","game__options svelte-1jcoc3p")},m(r,c){l(r,e,c),a(e,n),a(e,o),a(e,i),a(i,s),a(i,u),a(i,p),a(p,g),a(g,w),a(p,$),a($,x),a(p,E),a(E,A),a(e,S),a(e,I),X&&X.m(I,null),a(I,R),a(I,z),a(z,U),a(e,L),a(e,T),a(T,j),a(T,M),a(T,O),et[N].m(O,null),a(e,q),a(e,Y),G=!0,Z||(F=[m(I,"submit",v(t[4])),m(O,"click",t[7]),m(Y,"click",t[3])],Z=!0)},p(t,[e]){t[1]?X?X.p(t,e):(X=Jt(t),X.c(),X.m(I,R)):X&&(X.d(1),X=null),(!G||2&e)&&Q!==(Q=t[1]?"Set":"Change Name")&&_(U,Q);let n=N;N=nt(t),N!==n&&(H(),D(et[n],1,1,(()=>{et[n]=null})),B(),P=et[N],P||(P=et[N]=tt[N](t),P.c()),W(P,1),P.m(O,null))},i(t){G||(W(P),G=!0)},o(t){D(P),G=!1},d(t){t&&c(e),X&&X.d(),et[N].d(),Z=!1,r(F)}}}function ee(t,e,n){let r,o;s(t,xt,(t=>n(9,r=t))),s(t,Ct,(t=>n(2,o=t)));let i=r,a=!1;return[i,a,o,function(){localStorage.removeItem("name"),localStorage.removeItem("age"),localStorage.removeItem("game_type"),xt.set(""),kt.set(""),tt.redirect("/")},function(){1==a&&(t=>{localStorage.setItem("name",t)})(r),n(1,a=!a)},{EASY:"easy",MEDIUM:"medium",HARD:"hard"},function(){const t=(new RegExp).compile("^[A-Za-z]+[A-za-z ]*$");i&&t.test(i)?xt.update((t=>i)):i.length<2&&xt.update((t=>localStorage.getItem("name")))},function(){var t;Ct.update((t=>!t)),t=o,localStorage.setItem("sound_on",t?"true":"")},function(){i=this.value,n(0,i)}]}class ne extends J{constructor(t){super(),K(this,t,ee,te,i,{})}}function re(t){let e,n,r,o,i,s,u,p,g,m,v,w,b,$,x,k,E,A,C,S,I,R,z;return E=new Kt({}),C=new Dt({}),R=new ne({}),{c(){e=h("div"),n=h("div"),r=h("h3"),r.textContent="Player Info",o=d(),i=h("div"),s=h("p"),s.textContent="Player Name: ",u=d(),p=h("p"),g=f(t[1]),m=d(),v=h("div"),w=h("p"),w.textContent="Age: ",b=d(),$=h("p"),x=f(t[2]),k=d(),G(E.$$.fragment),A=d(),G(C.$$.fragment),S=d(),I=h("div"),G(R.$$.fragment),y(r,"class","svelte-1xflogx"),y(i,"class","info svelte-1xflogx"),y(v,"class","info svelte-1xflogx"),y(n,"class","user__info svelte-1xflogx"),y(I,"class","game__settings svelte-1xflogx"),y(e,"class","game__container svelte-1xflogx")},m(t,c){l(t,e,c),a(e,n),a(n,r),a(n,o),a(n,i),a(i,s),a(i,u),a(i,p),a(p,g),a(n,m),a(n,v),a(v,w),a(v,b),a(v,$),a($,x),a(n,k),Z(E,n,null),a(e,A),Z(C,e,null),a(e,S),a(e,I),Z(R,I,null),z=!0},p(t,e){(!z||2&e)&&_(g,t[1]),(!z||4&e)&&_(x,t[2])},i(t){z||(W(E.$$.fragment,t),W(C.$$.fragment,t),W(R.$$.fragment,t),z=!0)},o(t){D(E.$$.fragment,t),D(C.$$.fragment,t),D(R.$$.fragment,t),z=!1},d(t){t&&c(e),F(E),F(C),F(R)}}}function oe(t){let e,n,r=!t[0]&&re(t);return{c(){r&&r.c(),e=g()},m(t,o){r&&r.m(t,o),l(t,e,o),n=!0},p(t,[n]){t[0]?r&&(H(),D(r,1,1,(()=>{r=null})),B()):r?(r.p(t,n),1&n&&W(r,1)):(r=re(t),r.c(),W(r,1),r.m(e.parentNode,e))},i(t){n||(W(r),n=!0)},o(t){D(r),n=!1},d(t){r&&r.d(t),t&&c(e)}}}function ie(t,e,n){let r,o;s(t,xt,(t=>n(1,r=t))),s(t,kt,(t=>n(2,o=t)));let i=!0;return E((async()=>{n(0,i=!it(r,o)),i&&tt.redirect("/")})),[i,r,o]}class se extends J{constructor(t){super(),K(this,t,ie,oe,i,{})}}function ae(t){let e,n,r,o;var i=t[0];return i&&(r=new i({})),{c(){e=h("main"),n=h("div"),r&&G(r.$$.fragment),y(n,"class","App svelte-1vwytca"),y(e,"class","svelte-1vwytca")},m(t,i){l(t,e,i),a(e,n),r&&Z(r,n,null),o=!0},p(t,[e]){if(i!==(i=t[0])){if(r){H();const t=r;D(t.$$.fragment,1,0,(()=>{F(t,1)})),B()}i?(r=new i({}),G(r.$$.fragment),W(r.$$.fragment,1),Z(r,n,null)):r=null}},i(t){o||(r&&W(r.$$.fragment,t),o=!0)},o(t){r&&D(r.$$.fragment,t),o=!1},d(t){t&&c(e),r&&F(r)}}}function le(t,e,n){let r;return tt("/",(()=>n(0,r=Ut))),tt("/about",(()=>n(0,r=ot))),tt("/game",(()=>n(0,r=se))),tt.start(),[r]}return new class extends J{constructor(t){super(),K(this,t,le,ae,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map