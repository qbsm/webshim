(function(h){typeof define=="function"?define(function(){h()}):h()})(function(){if(!Function.prototype.bind)Function.prototype.bind=function(a){var e=this;if(typeof e.apply!="function"||typeof e.call!="function")return new TypeError;var c=h.call(arguments,1),b=function(){if(this instanceof b){var d=Object.create(e.prototype),f=e.apply(d,c.concat(h.call(arguments)));return f!==null&&Object(f)===f?f:d}else return e.apply(a,c.concat(h.call(arguments)))};return b};var h=Array.prototype.slice,i=Function.prototype.call.bind(Object.prototype.hasOwnProperty);
if(!Array.isArray)Array.isArray=function(a){return Object.prototype.toString.call(a)=="[object Array]"};if(!Array.prototype.forEach)Array.prototype.forEach=function(a,e){var c=Object(this),b=0,d=c.length>>>0;if(!a||!a.call)throw new TypeError;for(;b<d;)b in c&&a.call(e,c[b],b,c),b++};if(!Array.prototype.map)Array.prototype.map=function(a,e){var c=Object(this),b=c.length>>>0;if(typeof a!="function")throw new TypeError;for(var d=Array(b),f=0;f<b;f++)f in c&&(d[f]=a.call(e,c[f],f,c));return d};if(!Array.prototype.filter)Array.prototype.filter=
function(a,e){var c=Object(this),b=c.length>>>0;if(typeof a!="function")throw new TypeError;for(var d=[],f=0;f<b;f++)f in c&&a.call(e,c[f],f,c)&&d.push(c[f]);return d};if(!Array.prototype.every)Array.prototype.every=function(a,e){if(this===void 0||this===null)throw new TypeError;if(typeof a!=="function")throw new TypeError;for(var c=Object(this),b=c.length>>>0,d=0;d<b;d++)if(d in c&&!a.call(e,c[d],d,c))return!1;return!0};if(!Array.prototype.some)Array.prototype.some=function(a,e){if(this===void 0||
this===null)throw new TypeError;if(typeof a!=="function")throw new TypeError;for(var c=Object(this),b=c.length>>>0,d=0;d<b;d++)if(d in c&&a.call(e,c[d],d,c))return!0;return!1};if(!Array.prototype.reduce)Array.prototype.reduce=function(d){var e=Object(this),c=e.length>>>0;if(Object.prototype.toString.call(d)!="[object Function]")throw new TypeError;if(!c&&arguments.length==1)throw new TypeError;var b=0,a;if(arguments.length>=2)a=arguments[1];else{do{if(b in e){a=e[b++];break}if(++b>=c)throw new TypeError;
}while(1)}for(;b<c;b++)b in e&&(a=d.call(null,a,e[b],b,e));return a};if(!Array.prototype.reduceRight)Array.prototype.reduceRight=function(a){var e=Object(this),c=e.length>>>0;if(Object.prototype.toString.call(a)!="[object Function]")throw new TypeError;if(!c&&arguments.length==1)throw new TypeError;var b;c-=1;if(arguments.length>=2)b=arguments[1];else{do{if(c in e){b=e[c--];break}if(--c<0)throw new TypeError;}while(1)}do c in this&&(b=a.call(null,b,e[c],c,e));while(c--);return b};if(!Array.prototype.indexOf)Array.prototype.indexOf=
function(a){if(this===void 0||this===null)throw new TypeError;var e=Object(this),c=e.length>>>0;if(!c)return-1;var b=0;arguments.length>1&&(b=k(arguments[1]));for(b=b>=0?b:c-Math.abs(b);b<c;b++)if(b in e&&e[b]===a)return b;return-1};if(!Array.prototype.lastIndexOf)Array.prototype.lastIndexOf=function(a){if(this===void 0||this===null)throw new TypeError;var e=Object(this),c=e.length>>>0;if(!c)return-1;var b=c-1;arguments.length>1&&(b=k(arguments[1]));for(b=b>=0?b:c-Math.abs(b);b>=0;b--)if(b in e&&
a===e[b])return b;return-1};if(!Object.keys){var j=!0,a=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],g=a.length,d;for(d in{toString:null})j=!1;Object.keys=function e(c){if(typeof c!="object"&&typeof c!="function"||c===null)throw new TypeError("Object.keys called on a non-object");var e=[],b;for(b in c)i(c,b)&&e.push(b);if(j)for(b=0;b<g;b++){var d=a[b];i(c,d)&&e.push(d)}return e}}if(!Date.prototype.toISOString)Date.prototype.toISOString=
function(){var a,c,b;if(!isFinite(this))throw new RangeError;a=[this.getUTCFullYear(),this.getUTCMonth()+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()];for(c=a.length;c--;)b=a[c],b<10&&(a[c]="0"+b);return a.slice(0,3).join("-")+"T"+a.slice(3).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"};if(!Date.now)Date.now=function(){return(new Date).getTime()};if(!Date.prototype.toJSON)Date.prototype.toJSON=function(){if(typeof this.toISOString.call!="function")throw new TypeError;
return this.toISOString.call(this)};if(!String.prototype.trim){var l=RegExp("^[\t\n-\r \u00a0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\u2028\u2029\ufeff][\t\n-\r \u00a0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\u2028\u2029\ufeff]*"),f=RegExp("[\t\n-\r \u00a0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\u2028\u2029\ufeff][\t\n-\r \u00a0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\u2028\u2029\ufeff]*$");String.prototype.trim=function(){return String(this).replace(l,"").replace(f,"")}}var k=function(a){a=
+a;a!==a?a=-1:a!==0&&a!==1/0&&a!==-(1/0)&&(a=(a>0||-1)*Math.floor(Math.abs(a)));return a}});
(function(h,i){if((!Modernizr.advancedObjectProperties||!Object.create||!Object.defineProperties||!Object.getOwnPropertyDescriptor||!Object.defineProperty)&&window.jQuery&&jQuery.webshims){var j=Function.prototype.call.bind(Object.prototype.hasOwnProperty);i.objectCreate=function(a,g,d,h){var f;f=function(){};f.prototype=a;f=new f;if(!h&&!("__proto__"in f)&&!Modernizr.objectAccessor)f.__proto__=a;g&&i.defineProperties(f,g);if(d)f.options=jQuery.extend(!0,{},f.options||{},d),d=f.options;f._create&&
jQuery.isFunction(f._create)&&f._create(d);return f};i.defineProperties=function(a,g){for(var d in g)j(g,d)&&i.defineProperty(a,d,g[d]);return a};i.defineProperty=function(a,g,d){if(typeof d!="object"||d===null)return a;if(j(d,"value"))return a[g]=d.value,a;a.__defineGetter__&&(typeof d.get=="function"&&a.__defineGetter__(g,d.get),typeof d.set=="function"&&a.__defineSetter__(g,d.set));return a};i.getPrototypeOf=function(a){return Object.getPrototypeOf&&Object.getPrototypeOf(a)||a.__proto__||a.constructor&&
a.constructor.prototype};i.getOwnPropertyDescriptor=function(a,g){if(typeof a!=="object"&&typeof a!=="function"||a===null)throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object");var d;if(Object.defineProperty&&Object.getOwnPropertyDescriptor)try{return d=Object.getOwnPropertyDescriptor(a,g)}catch(i){}d={configurable:!0,enumerable:!0,writable:!0,value:void 0};var f=a.__lookupGetter__&&a.__lookupGetter__(g),h=a.__lookupSetter__&&a.__lookupSetter__(g);if(!f&&!h){if(!j(a,g))return;
d.value=a[g];return d}delete d.writable;delete d.value;d.get=d.set=void 0;if(f)d.get=f;if(h)d.set=h;return d}}})(jQuery,jQuery.webshims);
