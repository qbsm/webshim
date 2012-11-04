(function(c,d,h){var k=d.audio&&d.video,t=!1,m=h.cfg.mediaelement,l=h.bugs,w="jwplayer"==m.player?"mediaelement-swf":"mediaelement-jaris",z=function(){h.ready(w,function(){if(!h.mediaelement.createSWF)h.mediaelement.loadSwf=!0,h.reTest([w],k)})},p;if(k){var q=document.createElement("video");d.videoBuffered="buffered"in q;t="loop"in q;h.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(","));d.videoBuffered||(h.addPolyfill("mediaelement-native-fix",
{f:"mediaelement",test:d.videoBuffered,d:["dom-support"]}),h.reTest("mediaelement-native-fix"))}if(k&&!m.preferFlash){var v=function(u){var d=u.target.parentNode;!m.preferFlash&&(c(u.target).is("audio, video")||d&&c("source:last",d)[0]==u.target)&&h.ready("DOM mediaelement",function(){p&&z();h.ready("WINDOWLOAD "+w,function(){setTimeout(function(){p&&!m.preferFlash&&h.mediaelement.createSWF&&!c(u.target).closest("audio, video").is(".nonnative-api-active")?(m.preferFlash=!0,document.removeEventListener("error",
v,!0),c("audio, video").mediaLoad(),h.info("switching mediaelements option to 'preferFlash', due to an error with native player: "+u.target.src)):p||document.removeEventListener("error",v,!0)},20)})})};document.addEventListener("error",v,!0);c("audio, video").each(function(){this.error&&v({target:this})})}d.track&&!l.track&&function(){if(!l.track)l.track="number"!=typeof c("<track />")[0].readyState;if(!l.track)try{new TextTrackCue(2,3,"")}catch(u){l.track=!0}var d=h.cfg.track,m=function(d){c(d.target).filter("track").each(n)},
n=function(){if(l.track||!d.override&&3==c.prop(this,"readyState"))d.override=!0,h.reTest("track"),document.removeEventListener("error",m,!0),this&&c.nodeName(this,"track")?h.error("track support was overwritten. Please check your vtt including your vtt mime-type"):h.info("track support was overwritten. due to bad browser support")},k=function(){document.addEventListener("error",m,!0);l.track?n():c("track").each(n)};d.override||(h.isReady("track")?k():c(k))}();h.register("mediaelement-core",function(c,
i,h,n,r){p=swfobject.hasFlashPlayerVersion("9.0.115");var f=i.mediaelement,q=function(g,e){var g=c(g),d={src:g.attr("src")||"",elem:g,srcProp:g.prop("src")};if(!d.src)return d;var j=g.attr("type");if(j)d.type=j,d.container=c.trim(j.split(";")[0]);else if(e||(e=g[0].nodeName.toLowerCase(),"source"==e&&(e=(g.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),j=f.getTypeForSrc(d.src,e))d.type=j,d.container=j;if(j=g.attr("media"))d.media=j;return d},x=!p&&"postMessage"in h&&k,s=
function(){if(!s.loaded)s.loaded=!0,c(function(){i.loader.loadList(["track-ui"])})},o=function(){var g;return function(){!g&&x&&(g=!0,i.loader.loadScript("https://www.youtube.com/player_api"),c(function(){i.polyfill("mediaelement-yt")}))}}(),v=function(){p?z():o()};i.addPolyfill("mediaelement-yt",{test:!x,d:["dom-support"]});f.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),
"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};f.mimeTypes.source=c.extend({},
f.mimeTypes.audio,f.mimeTypes.video);f.getTypeForSrc=function(g,e){if(-1!=g.indexOf("youtube.com/watch?")||-1!=g.indexOf("youtube.com/v/"))return"video/youtube";var g=g.split("?")[0].split("."),g=g[g.length-1],d;c.each(f.mimeTypes[e],function(c,e){if(-1!==e.indexOf(g))return d=c,!1});return d};f.srces=function(g,e){g=c(g);if(e)g.removeAttr("src").removeAttr("type").find("source").remove(),c.isArray(e)||(e=[e]),e.forEach(function(c){var e=n.createElement("source");"string"==typeof c&&(c={src:c});e.setAttribute("src",
c.src);c.type&&e.setAttribute("type",c.type);c.media&&e.setAttribute("media",c.media);g.append(e)});else{var e=[],d=g[0].nodeName.toLowerCase(),f=q(g,d);f.src?e.push(f):c("source",g).each(function(){f=q(this,d);f.src&&e.push(f)});return e}};c.fn.loadMediaSrc=function(g,e){return this.each(function(){e!==r&&(c(this).removeAttr("poster"),e&&c.attr(this,"poster",e));f.srces(this,g);c(this).mediaLoad()})};f.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");
f.canThirdPlaySrces=function(g,e){var d="";if(p||x)g=c(g),e=e||f.srces(g),c.each(e,function(c,g){if(g.container&&g.src&&(p&&-1!=f.swfMimeTypes.indexOf(g.container)||x&&"video/youtube"==g.container))return d=g,!1});return d};var A={};f.canNativePlaySrces=function(g,e){var d="";if(k){var g=c(g),j=(g[0].nodeName||"").toLowerCase();if(!A[j])return d;e=e||f.srces(g);c.each(e,function(c,e){if(e.type&&A[j].prop._supvalue.call(g[0],e.type))return d=e,!1})}return d};f.setError=function(g,e){e||(e="can't play sources");
c(g).pause().data("mediaerror",e);i.warn("mediaelementError: "+e);setTimeout(function(){c(g).data("mediaerror")&&c(g).trigger("mediaerror")},1)};var D=function(){var c;return function(e,d,j){c||s();i.ready(p?w:"mediaelement-yt",function(){f.createSWF?f.createSWF(e,d,j):c||(c=!0,v(),D(e,d,j))});!c&&x&&!f.createSWF&&o()}}(),y=function(c,e,d,j,h){d||!1!==d&&e&&"third"==e.isActive?(d=f.canThirdPlaySrces(c,j))?D(c,d,e):h?f.setError(c,!1):y(c,e,!1,j,!0):(d=f.canNativePlaySrces(c,j))?e&&"third"==e.isActive&&
f.setActive(c,"html5",e):h?(f.setError(c,!1),e&&"third"==e.isActive&&f.setActive(c,"html5",e)):y(c,e,!0,j,!0)},E=/^(?:embed|object|datalist)$/i,F=function(d,e){var h=i.data(d,"mediaelementBase")||i.data(d,"mediaelementBase",{}),j=f.srces(d),l=d.parentNode;clearTimeout(h.loadTimer);c.data(d,"mediaerror",!1);if(j.length&&l&&!(1!=l.nodeType||E.test(l.nodeName||"")))e=e||i.data(d,"mediaelement"),y(d,e,m.preferFlash||r,j)};c(n).on("ended",function(d){var e=i.data(d.target,"mediaelement");(!t||e&&"html5"!=
e.isActive||c.prop(d.target,"loop"))&&setTimeout(function(){!c.prop(d.target,"paused")&&c.prop(d.target,"loop")&&c(d.target).prop("currentTime",0).play()},1)});t||i.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(d){var e=i.defineNodeNameProperty(d,"load",{prop:{value:function(){var c=i.data(this,"mediaelement");F(this,c);k&&(!c||"html5"==c.isActive)&&e.prop._supvalue&&e.prop._supvalue.apply(this,arguments)}}});A[d]=i.defineNodeNameProperty(d,"canPlayType",
{prop:{value:function(e){var h="";k&&A[d].prop._supvalue&&(h=A[d].prop._supvalue.call(this,e),"no"==h&&(h=""));!h&&p&&(e=c.trim((e||"").split(";")[0]),-1!=f.swfMimeTypes.indexOf(e)&&(h="maybe"));return h}}})});i.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var c=this,d=i.data(c,"mediaelementBase")||i.data(c,"mediaelementBase",{});clearTimeout(d.loadTimer);d.loadTimer=setTimeout(function(){F(c);c=null},9)}});h=function(){i.addReady(function(d,e){var f=c("video, audio",
d).add(e.filter("video, audio")).each(function(){c.browser.msie&&8<i.browserVersion&&c.prop(this,"paused")&&!c.prop(this,"readyState")&&c(this).is('audio[preload="none"][controls]:not([autoplay])')?c(this).prop("preload","metadata").mediaLoad():F(this);if(k){var d,e,f=this,g=function(){var d=c.prop(f,"buffered");if(d){for(var a="",b=0,e=d.length;b<e;b++)a+=d.end(b);return a}},h=function(){var d=g();d!=e&&(e=d,c(f).triggerHandler("progress"))};c(this).on({"play loadstart progress":function(c){"progress"==
c.type&&(e=g());clearTimeout(d);d=setTimeout(h,999)},"emptied stalled mediaerror abort suspend":function(c){"emptied"==c.type&&(e=!1);clearTimeout(d)}})}});!s.loaded&&c("track",f).length&&s();f=null})};d.track&&!l.track&&i.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}});k?(i.isReady("mediaelement-core",!0),h(),i.ready("WINDOWLOAD mediaelement",v)):i.ready(w,h);i.ready("WINDOWLOAD mediaelement",s)})})(jQuery,Modernizr,jQuery.webshims);
jQuery.webshims.register("mediaelement-swf",function(c,d,h,k,t,m){var l=d.mediaelement,w=h.swfobject,z=Modernizr.audio&&Modernizr.video,p=w.hasFlashPlayerVersion("9.0.115"),q=0,h={paused:!0,ended:!1,currentSrc:"",duration:h.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(a){if(a)d.error("buffered index size error");else return 0},end:function(a){if(a)d.error("buffered index size error");else return 0},length:0}},v=Object.keys(h),u={currentTime:0,volume:1,
muted:!1};Object.keys(u);var i=c.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,_metadata:!1,_durationCalcs:-1,_callMeta:!1,currentTime:0,_ppFlag:t},h,u),I=/^jwplayer-/,n=function(a){if(a=k.getElementById(a.replace(I,"")))return a=d.data(a,"mediaelement"),"third"==a.isActive?a:null},r=function(a){return(a=d.data(a,"mediaelement"))&&"third"==a.isActive?a:null},f=function(a,b){b=c.Event(b);b.preventDefault();c.event.trigger(b,t,a)},K=m.playerPath||d.cfg.basePath+
"jwplayer/"+(m.playerName||"player.swf"),x=m.pluginPath||d.cfg.basePath+"swf/jwwebshims.swf";d.extendUNDEFProp(m.params,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent"});d.extendUNDEFProp(m.vars,{screencolor:"ffffffff"});d.extendUNDEFProp(m.attrs,{bgcolor:"#000000"});var s=function(a,b){var d=a.duration;if(!(d&&0<a._durationCalcs)){try{if(a.duration=a.jwapi.getPlaylist()[0].duration,!a.duration||0>=a.duration||a.duration===a._lastDuration)a.duration=d}catch(e){}a.duration&&
a.duration!=a._lastDuration?(f(a._elem,"durationchange"),("audio"==a._elemNodeName||a._callMeta)&&l.jwEvents.Model.META(c.extend({duration:a.duration},b),a),a._durationCalcs--):a._durationCalcs++}},o=function(a,b){3>a&&clearTimeout(b._canplaythroughTimer);if(3<=a&&3>b.readyState)b.readyState=a,f(b._elem,"canplay"),clearTimeout(b._canplaythroughTimer),b._canplaythroughTimer=setTimeout(function(){o(4,b)},4E3);if(4<=a&&4>b.readyState)b.readyState=a,f(b._elem,"canplaythrough");b.readyState=a};c.extend(c.event.customEvent,
{updatemediaelementdimensions:!0,flashblocker:!0,swfstageresize:!0,mediaelementapichange:!0});l.jwEvents={View:{PLAY:function(a){var b=n(a.id);if(b&&!b.stopPlayPause&&(b._ppFlag=!0,b.paused==a.state)){b.paused=!a.state;if(b.ended)b.ended=!1;f(b._elem,a.state?"play":"pause")}}},Model:{BUFFER:function(a){var b=n(a.id);if(b&&"percentage"in a&&b._bufferedEnd!=a.percentage){b.networkState=100==a.percentage?1:2;(isNaN(b.duration)||5<a.percentage&&25>a.percentage||100===a.percentage)&&s(b,a);if(b.ended)b.ended=
!1;if(b.duration){2<a.percentage&&20>a.percentage?o(3,b):20<a.percentage&&o(4,b);if(b._bufferedEnd&&b._bufferedEnd>a.percentage)b._bufferedStart=b.currentTime||0;b._bufferedEnd=a.percentage;b.buffered.length=1;if(100==a.percentage)b.networkState=1,o(4,b);c.event.trigger("progress",t,b._elem,!0)}}},META:function(a,b){if(b=b&&b.networkState?b:n(a.id))if("duration"in a){if(!b._metadata||!((!a.height||b.videoHeight==a.height)&&a.duration===b.duration)){b._metadata=!0;var c=b.duration;if(a.duration)b.duration=
a.duration;b._lastDuration=b.duration;if(a.height||a.width)b.videoHeight=a.height||0,b.videoWidth=a.width||0;if(!b.networkState)b.networkState=2;1>b.readyState&&o(1,b);b.duration&&c!==b.duration&&f(b._elem,"durationchange");f(b._elem,"loadedmetadata")}}else b._callMeta=!0},TIME:function(a){var b=n(a.id);if(b&&b.currentTime!==a.position){b.currentTime=a.position;b.duration&&b.duration<b.currentTime&&s(b,a);2>b.readyState&&o(2,b);if(b.ended)b.ended=!1;f(b._elem,"timeupdate")}},STATE:function(a){var b=
n(a.id);if(b)switch(a.newstate){case "BUFFERING":if(b.ended)b.ended=!1;o(1,b);f(b._elem,"waiting");break;case "PLAYING":b.paused=!1;b._ppFlag=!0;b.duration||s(b,a);3>b.readyState&&o(3,b);if(b.ended)b.ended=!1;f(b._elem,"playing");break;case "PAUSED":if(!b.paused&&!b.stopPlayPause)b.paused=!0,b._ppFlag=!0,f(b._elem,"pause");break;case "COMPLETED":4>b.readyState&&o(4,b),b.ended=!0,f(b._elem,"ended")}}},Controller:{ERROR:function(a){var b=n(a.id);b&&l.setError(b._elem,a.message)},SEEK:function(a){var b=
n(a.id);if(b){if(b.ended)b.ended=!1;if(b.paused)try{b.jwapi.sendEvent("play","false")}catch(c){}if(b.currentTime!=a.position)b.currentTime=a.position,f(b._elem,"timeupdate")}},VOLUME:function(a){var b=n(a.id);if(b&&(a=a.percentage/100,b.volume!=a))b.volume=a,f(b._elem,"volumechange")},MUTE:function(a){if(!a.state){var b=n(a.id);if(b&&b.muted!=a.state)b.muted=a.state,f(b._elem,"volumechange")}}}};var L=function(a){var b=!0;c.each(l.jwEvents,function(d,e){c.each(e,function(c){try{a.jwapi["add"+d+"Listener"](c,
"jQuery.webshims.mediaelement.jwEvents."+d+"."+c)}catch(e){return b=!1}})});return b},A=function(a){var b=a.actionQueue.length,c=0,d;if(b&&"third"==a.isActive)for(;a.actionQueue.length&&b>c;)c++,d=a.actionQueue.shift(),a.jwapi[d.fn].apply(a.jwapi,d.args);if(a.actionQueue.length)a.actionQueue=[]},D=function(a){a&&(a._ppFlag===t&&c.prop(a._elem,"autoplay")||!a.paused)&&setTimeout(function(){if("third"==a.isActive&&(a._ppFlag===t||!a.paused))try{c(a._elem).play()}catch(b){}},1)};l.playerResize=function(a){a&&
(a=k.getElementById(a.replace(I,"")))&&c(a).triggerHandler("swfstageresize")};c(k).on("emptied",function(a){a=r(a.target);D(a)});var y;l.jwPlayerReady=function(a){var b=n(a.id),e=0,f=function(){if(!(9<e))if(e++,L(b)){if(b.wasSwfReady)c(b._elem).mediaLoad();else{var g=parseFloat(a.version,10);(5.1>g||6<=g)&&d.warn("mediaelement-swf is only testet with jwplayer 5.6+")}b.wasSwfReady=!0;b.tryedReframeing=0;A(b);D(b)}else clearTimeout(b.reframeTimer),b.reframeTimer=setTimeout(f,9*e),2<e&&9>b.tryedReframeing&&
(b.tryedReframeing++,b.shadowElem.css({overflow:"visible"}),setTimeout(function(){b.shadowElem.css({overflow:"hidden"})},16))};if(b&&b.jwapi){if(!b.tryedReframeing)b.tryedReframeing=0;clearTimeout(y);b.jwData=a;b.shadowElem.removeClass("flashblocker-assumed");c.prop(b._elem,"volume",b.volume);c.prop(b._elem,"muted",b.muted);f()}};var E=c.noop;if(z){var F={play:1,playing:1},g="play,pause,playing,canplay,progress,waiting,ended,loadedmetadata,durationchange,emptied".split(","),e=g.map(function(a){return a+
".webshimspolyfill"}).join(" "),J=function(a){var b=d.data(a.target,"mediaelement");b&&(a.originalEvent&&a.originalEvent.type===a.type)==("third"==b.activating)&&(a.stopImmediatePropagation(),F[a.type]&&b.isActive!=b.activating&&c(a.target).pause())},E=function(a){c(a).off(e).on(e,J);g.forEach(function(b){d.moveToFirstEvent(a,b)})};E(k)}l.setActive=function(a,b,e){e||(e=d.data(a,"mediaelement"));if(e&&e.isActive!=b){"html5"!=b&&"third"!=b&&d.warn("wrong type for mediaelement activating: "+b);var f=
d.data(a,"shadowData");e.activating=b;c(a).pause();e.isActive=b;"third"==b?(f.shadowElement=f.shadowFocusElement=e.shadowElem[0],c(a).addClass("swf-api-active nonnative-api-active").hide().getShadowElement().show()):(c(a).removeClass("swf-api-active nonnative-api-active").show().getShadowElement().hide(),f.shadowElement=f.shadowFocusElement=!1);c(a).trigger("mediaelementapichange")}};var j=function(){var a="_bufferedEnd,_bufferedStart,_metadata,_ppFlag,currentSrc,currentTime,duration,ended,networkState,paused,videoHeight,videoWidth,_callMeta,_durationCalcs".split(","),
b=a.length;return function(c){if(c){var d=b,e=c.networkState;for(o(0,c);--d;)delete c[a[d]];c.actionQueue=[];c.buffered.length=0;e&&f(c._elem,"emptied")}}}(),H=function(a,b){var d=a._elem,e=a.shadowElem;c(d)[b?"addClass":"removeClass"]("webshims-controls");"audio"==a._elemNodeName&&!b?e.css({width:0,height:0}):e.css({width:d.style.width||c(d).width(),height:d.style.height||c(d).height()})};l.createSWF=function(a,b,e){if(p){1>q?q=1:q++;var f=c.extend({},m.vars,{image:c.prop(a,"poster")||"",file:b.srcProp}),
g=c(a).data("vars")||{};e||(e=d.data(a,"mediaelement"));if(e&&e.swfCreated)l.setActive(a,"third",e),j(e),e.currentSrc=b.srcProp,c.extend(f,g),m.changeSWF(f,a,b,e,"load"),B(a,"sendEvent",["LOAD",f]);else{var G=c.prop(a,"controls"),C="jwplayer-"+d.getID(a),h=c.extend({},m.params,c(a).data("params")),k=a.nodeName.toLowerCase(),n=c.extend({},m.attrs,{name:C,id:C},c(a).data("attrs")),o=c('<div class="polyfill-'+k+' polyfill-mediaelement" id="wrapper-'+C+'"><div id="'+C+'"></div>').css({position:"relative",
overflow:"hidden"}),e=d.data(a,"mediaelement",d.objectCreate(i,{actionQueue:{value:[]},shadowElem:{value:o},_elemNodeName:{value:k},_elem:{value:a},currentSrc:{value:b.srcProp},swfCreated:{value:!0},buffered:{value:{start:function(a){if(a>=e.buffered.length)d.error("buffered index size error");else return 0},end:function(a){if(a>=e.buffered.length)d.error("buffered index size error");else return(e.duration-e._bufferedStart)*e._bufferedEnd/100+e._bufferedStart},length:0}}}));H(e,G);o.insertBefore(a);
z&&c.extend(e,{volume:c.prop(a,"volume"),muted:c.prop(a,"muted")});c.extend(f,{id:C,controlbar:G?m.vars.controlbar||("video"==k?"over":"bottom"):"video"==k?"none":"bottom",icons:""+(G&&"video"==k)},g,{playerready:"jQuery.webshims.mediaelement.jwPlayerReady"});f.plugins=f.plugins?f.plugins+(","+x):x;d.addShadowDom(a,o);E(a);l.setActive(a,"third",e);m.changeSWF(f,a,b,e,"embed");c(a).on("updatemediaelementdimensions updateshadowdom",function(){H(e,c.prop(a,"controls"))});w.embedSWF(K,C,"100%","100%",
"9.0.0",!1,f,h,n,function(b){if(b.success)e.jwapi=b.ref,G||c(b.ref).attr("tabindex","-1").css("outline","none"),setTimeout(function(){if(!b.ref.parentNode&&o[0].parentNode||"none"==b.ref.style.display)o.addClass("flashblocker-assumed"),c(a).trigger("flashblocker"),d.warn("flashblocker assumed");c(b.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})},9),y||(clearTimeout(y),y=setTimeout(function(){var a=c(b.ref);1<a[0].offsetWidth&&1<a[0].offsetHeight&&0===location.protocol.indexOf("file:")?
d.error("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):(2>a[0].offsetWidth||2>a[0].offsetHeight)&&d.warn("JS-SWF connection can't be established on hidden or unconnected flash objects")},8E3))})}}else setTimeout(function(){c(a).mediaLoad()},1)};var B=function(a,b,c,d){return(d=d||r(a))?(d.jwapi&&d.jwapi[b]?d.jwapi[b].apply(d.jwapi,c||[]):(d.actionQueue.push({fn:b,args:c}),10<
d.actionQueue.length&&setTimeout(function(){5<d.actionQueue.length&&d.actionQueue.shift()},99)),d):!1};["audio","video"].forEach(function(a){var b={},e,g=function(c){"audio"==a&&("videoHeight"==c||"videoWidth"==c)||(b[c]={get:function(){var a=r(this);return a?a[c]:z&&e[c].prop._supget?e[c].prop._supget.apply(this):i[c]},writeable:!1})},h=function(a,c){g(a);delete b[a].writeable;b[a].set=c};h("volume",function(a){var b=r(this);if(b){if(a*=100,!isNaN(a)){var c=b.muted;(0>a||100<a)&&d.error("volume greater or less than allowed "+
a/100);B(this,"sendEvent",["VOLUME",a],b);if(c)try{b.jwapi.sendEvent("mute","true")}catch(g){}a/=100;if(!(b.volume==a||"third"!=b.isActive))b.volume=a,f(b._elem,"volumechange")}}else if(e.volume.prop._supset)return e.volume.prop._supset.apply(this,arguments)});h("muted",function(a){var b=r(this);if(b){if(a=!!a,B(this,"sendEvent",["mute",""+a],b),!(b.muted==a||"third"!=b.isActive))b.muted=a,f(b._elem,"volumechange")}else if(e.muted.prop._supset)return e.muted.prop._supset.apply(this,arguments)});h("currentTime",
function(a){var b=r(this);if(b){if(a*=1,!isNaN(a)){if(b.paused)clearTimeout(b.stopPlayPause),b.stopPlayPause=setTimeout(function(){b.paused=!0;b.stopPlayPause=!1},50);B(this,"sendEvent",["SEEK",""+a],b);if(b.paused){if(0<b.readyState)b.currentTime=a,f(b._elem,"timeupdate");try{b.jwapi.sendEvent("play","false")}catch(c){}}}}else if(e.currentTime.prop._supset)return e.currentTime.prop._supset.apply(this,arguments)});["play","pause"].forEach(function(a){b[a]={value:function(){var b=r(this);if(b)b.stopPlayPause&&
clearTimeout(b.stopPlayPause),B(this,"sendEvent",["play","play"==a],b),setTimeout(function(){if("third"==b.isActive&&(b._ppFlag=!0,b.paused!=("play"!=a)))b.paused="play"!=a,f(b._elem,a)},1);else if(e[a].prop._supvalue)return e[a].prop._supvalue.apply(this,arguments)}}});v.forEach(g);d.onNodeNamesPropertyModify(a,"controls",function(b,e){var f=r(this);c(this)[e?"addClass":"removeClass"]("webshims-controls");if(f){try{B(this,e?"showControls":"hideControls",[a],f)}catch(g){d.warn("you need to generate a crossdomain.xml")}"audio"==
a&&H(f,e);c(f.jwapi).attr("tabindex",e?"0":"-1")}});e=d.defineNodeNameProperties(a,b,"prop")});if(p){var N=c.cleanData,O=c.browser.msie&&9>d.browserVersion,M={object:1,OBJECT:1};c.cleanData=function(a){var b,c,d;if(a&&(c=a.length)&&q)for(b=0;b<c;b++)if(M[a[b].nodeName]){if("sendEvent"in a[b]){q--;try{a[b].sendEvent("play",!1)}catch(e){}}if(O)try{for(d in a[b])"function"==typeof a[b][d]&&(a[b][d]=null)}catch(f){}}return N.apply(this,arguments)}}z||(["poster","src"].forEach(function(a){d.defineNodeNamesProperty("src"==
a?["audio","video","source"]:["video"],a,{reflect:!0,propType:"src"})}),["autoplay","controls"].forEach(function(a){d.defineNodeNamesBooleanProperty(["audio","video"],a)}),d.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop"))});
