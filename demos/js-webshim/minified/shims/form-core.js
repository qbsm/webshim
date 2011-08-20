jQuery.webshims.gcEval=function(b,g){with(g&&g.form||window)with(g||window)return function(b){eval(b)}.call(g||window,b)};
jQuery.webshims.register("form-core",function(b,g,l,i,u,m){var v={radio:1},r={checkbox:1,radio:1},w=b([]),n=function(a){var a=b(a),d=a[0].name;return v[a[0].type]&&d?b(a[0].form&&a[0].form[d]||i.getElementsByName(d)).not(a[0]):w},o,s={number:1,range:1,date:1,time:1,"datetime-local":1,datetime:1,month:1,week:1};b.extend(b.expr.filters,{"valid-element":function(a){return!(!b.prop(a,"willValidate")||!(b.prop(a,"validity")||{valid:1}).valid)},"invalid-element":function(a){return!(!b.prop(a,"willValidate")||
p(a))},"required-element":function(a){return!(!b.prop(a,"willValidate")||!b.prop(a,"required"))},"optional-element":function(a){return!!(b.prop(a,"willValidate")&&b.prop(a,"required")===!1)},"in-range":function(a){if(!s[b.prop(a,"type")]||!b.prop(a,"willValidate"))return!1;a=b.prop(a,"validity");return!(!a||a.rangeOverflow||a.rangeUnderflow)},"out-of-range":function(a){if(!s[b.prop(a,"type")]||!b.prop(a,"willValidate"))return!1;a=b.prop(a,"validity");return!(!a||!a.rangeOverflow&&!a.rangeUnderflow)}});
["valid","invalid","required","optional"].forEach(function(a){b.expr.filters[a]=b.expr.filters[a+"-element"]});var p=function(a){return(b.prop(a,"validity")||{valid:1}).valid},x=b.prop,y={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1},q;b.prop=function(a,d,e){var f=x.apply(this,arguments);a&&"form"in a&&y[d]&&e!==u&&b(a).hasClass("form-ui-invalid")&&p(a)&&(b(a).getShadowElement().removeClass("form-ui-invalid"),d=="checked"&&e&&n(a).removeClass("form-ui-invalid").removeAttr("aria-invalid"));
return f};b(i).bind("focusout change refreshvalidityui",function(a){if(!q&&a.target&&a.target.type!="submit"&&b.prop(a.target,"willValidate")){var d=b(a.target).getNativeElement()[0],e=b(d).getShadowElement(),f,h,c;p(d)?e.hasClass("form-ui-valid")||(f="form-ui-valid",h="form-ui-invalid",c="changedvalid",r[d.type]&&d.checked&&n(d).removeClass(h).addClass(f).removeAttr("aria-invalid")):e.hasClass("form-ui-invalid")||(f="form-ui-invalid",h="form-ui-valid",r[d.type]&&!d.checked&&n(d).removeClass(h).addClass(f),
c="changedinvalid");f&&(e.addClass(f).removeClass(h),setTimeout(function(){b(d).trigger(c)},0));q=!0;setTimeout(function(){q=!1;d=e=null},9)}});g.triggerInlineForm=function(a,d){a.jquery&&(a=a[0]);var e="on"+d,f=a[e]||a.getAttribute(e)||"",h,c,d=b.Event({type:d,target:a,currentTarget:a});f&&typeof f=="string"&&(c=g.gcEval(f,a),a[e]&&(h=!0,a[e]=!1));c===!1&&(d.stopPropagation(),d.preventDefault());b(a).trigger(d);h&&(a[e]=f);return c};l=function(){g.scrollRoot=b.browser.webkit||i.compatMode=="BackCompat"?
b(i.body):b(i.documentElement)};l();g.ready("DOM",l);g.validityAlert=function(){var a=!b.browser.msie||parseInt(b.browser.version,10)>7?"span":"label",d={top:0,left:0},e={hideDelay:5E3,getBodyOffset:function(){d=f.offset()},showFor:function(a,c,d){var a=b(a),g=b(a).getShadowElement(),j=e.getOffsetFromBody(g);k();e.clear();this.getMessage(a,c);this.position(g,j);f.css({fontSize:a.css("fontSize"),fontFamily:a.css("fontFamily")});this.show();this.hideDelay&&(h=setTimeout(t,this.hideDelay));d||this.setFocus(g,
j)},getOffsetFromBody:function(a){a=b(a).offset();b.swap(f[0],{visibility:"hidden",display:"inline-block",left:0,top:0},e.getBodyOffset);a.top-=d.top;a.left-=d.left;return a},setFocus:function(c,d){var h=b(c).getShadowFocusElement(),e=g.scrollRoot.scrollTop(),j=(d||h.offset()).top-30,k;g.getID&&a=="label"&&f.attr("for",g.getID(h));e>j&&(g.scrollRoot.animate({scrollTop:j-5},{queue:!1,duration:Math.max(Math.min(600,(e-j)*1.5),80)}),k=!0);try{h[0].focus()}catch(l){}k&&(g.scrollRoot.scrollTop(e),setTimeout(function(){g.scrollRoot.scrollTop(e)},
0));setTimeout(function(){b(i).bind("focusout.validityalert",t)},10)},getMessage:function(a,c){b("> span.va-box",f).text(c||o(a[0])||a.prop("validationMessage"))},position:function(a,c){c=c?b.extend({},c):e.getOffsetFromBody(a);c.top+=a.outerHeight();f.css(c)},show:function(){f.css("display")==="none"&&f.css({opacity:0}).show();f.fadeTo(400,1)},hide:function(){e.clear();f.fadeOut()},clear:function(){clearTimeout(c);clearTimeout(h);b(i).unbind("focusout.validityalert");f.stop().removeAttr("for")},
errorBubble:b("<"+a+' class="validity-alert" role="alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></'+a+">").css({position:"absolute",display:"none"})},f=e.errorBubble,h=!1,c=!1,t=b.proxy(e,"hide"),j=!1,k=function(){j||(j=!0,g.ready("DOM",function(){f.appendTo("body");b.fn.bgIframe&&b.browser.msie&&parseInt(b.browser.version,10)<7&&f.bgIframe()}))};k();return e}();(function(){var a,d=[],e;b(i).bind("invalid",function(f){if(!f.wrongWebkitInvalid){var h=
b(f.target),c=h.getShadowElement();c.hasClass("form-ui-invalid")||(c.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){b(f.target).trigger("changedinvalid")},0));if(!a)a=b.Event("firstinvalid"),a.isInvalidUIPrevented=f.isDefaultPrevented,c=b.Event("firstinvalidsystem"),b(i).triggerHandler(c,{element:f.target,form:f.target.form,isInvalidUIPrevented:f.isDefaultPrevented}),h.trigger(a);a&&a.isDefaultPrevented()&&f.preventDefault();d.push(f.target);f.extraData="fix";clearTimeout(e);
e=setTimeout(function(){var c={type:"lastinvalid",cancelable:!1,invalidlist:b(d)};a=!1;d=[];b(f.target).trigger(c,c)},9);c=h=null}})})();m.replaceValidationUI&&g.ready("DOM",function(){b(i).bind("firstinvalid",function(a){a.isInvalidUIPrevented()||(a.preventDefault(),b.webshims.validityAlert.showFor(a.target,b(a.target).prop("customValidationMessage")))})});(function(){var a=g.validityMessages,d=m.overrideMessages||m.customMessages?["customValidationMessage"]:[];a.en=a.en||a["en-US"]||{typeMismatch:{email:"Please enter an email address.",
url:"Please enter a URL."},tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}};["select","radio"].forEach(function(b){a.en.valueMissing[b]="Please select an option."});a["en-US"]=a["en-US"]||a.en;a[""]=a[""]||a["en-US"];a.de=a.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse"},
tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Buchstaben eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}};["select","radio"].forEach(function(b){a.de.valueMissing[b]="Bitte w\u00e4hlen Sie eine Option aus"});var e=a[""];b(i).bind("webshimLocalizationReady",function(){g.activeLang(a,
"form-core",function(a){e=a})});g.createValidationMessage=function(a,d){var c=e[d];c&&typeof c!=="string"&&(c=c[b.prop(a,"type")]||c[(a.nodeName||"").toLowerCase()]||c.defaultMessage);c&&["value","min","max","title","maxlength","label"].forEach(function(d){if(c.indexOf("{%"+d)!==-1){var e=(d=="label"?b.trim(b('label[for="'+a.id+'"]',a.form).text()).replace(/\*$|:$/,""):b.attr(a,d))||"";c=c.replace("{%"+d+"}",e);"value"==d&&(c=c.replace("{%valueLen}",e.length))}});return c||""};(!Modernizr.validationmessage||
!Modernizr.formvalidation)&&d.push("validationMessage");g.getContentValidationMessage=function(a,d){var c=a.getAttribute("x-moz-errormessage")||a.getAttribute("data-errormessage")||"";if(c&&c.indexOf("{")!=-1){try{c=jQuery.parseJSON(c)}catch(e){return c}typeof c=="object"&&(d=d||b.prop(a,"validity")||{valid:1},d.valid||b.each(d,function(a,b){if(b&&a!="valid"&&c[a])return c=c[a],!1}));g.data(a,"contentErrorMessage",c);if(typeof c=="object")c=c.defaultMessage}return c||""};o=g.getContentValidationMessage;
g.ready("dom-support",function(a,b){d.forEach(function(c){b.defineNodeNamesProperty(["fieldset","output","button"],c,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(d){var e=b.defineNodeNameProperty(d,c,{prop:{get:function(){var c=this,d="";if(!a.prop(c,"willValidate"))return d;var g=a.prop(c,"validity")||{valid:1};if(g.valid)return d;if(d=o(c,g))return d;if(g.customError&&c.nodeName&&(d=Modernizr.validationmessage&&e.prop._supget?e.prop._supget.call(c):b.data(c,"customvalidationMessage")))return d;
a.each(g,function(a,e){if(a!="valid"&&e&&(d=b.createValidationMessage(c,a)))return!1});return d||""},writeable:!1}})})});b.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return b.inputTypes[a]?a:this.type}}})})})()});
