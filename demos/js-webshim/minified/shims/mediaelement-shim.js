jQuery.webshims.ready("dom-support",function(d,c,g,f){var e=f.createElement("a");["poster","src"].forEach(function(a){c.defineNodeNamesProperty(a=="src"?["audio","video","source"]:["video"],a,{prop:{get:function(){var b=d.attr(this,a);if(b==null)return"";e.setAttribute("href",b);return e.href},set:function(b){d.attr(this,a,b)}}})});["loop","autoplay","controls"].forEach(function(a){c.defineNodeNamesBooleanProperty(["audio","video"],a)});c.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},
HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop")});
