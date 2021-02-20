/*! For license information please see 60.e1235436470257e7d797.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{907:function(module,__webpack_exports__,__webpack_require__){"use strict";function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(iter))return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function getUrls(urls){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},settings={mimeType:options.mimeType||null,onBeforeSend:options.onBeforeSend||Function.prototype,onSuccess:options.onSuccess||Function.prototype,onError:options.onError||Function.prototype,onComplete:options.onComplete||Function.prototype},urlArray=Array.isArray(urls)?urls:[urls],urlQueue=Array.apply(null,Array(urlArray.length)).map((function(x){return null}));function isValidCss(){var cssText=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",isHTML="<"===cssText.trim().charAt(0);return!isHTML}function onError(xhr,urlIndex){settings.onError(xhr,urlArray[urlIndex],urlIndex)}function onSuccess(responseText,urlIndex){var returnVal=settings.onSuccess(responseText,urlArray[urlIndex],urlIndex);responseText=!1===returnVal?"":returnVal||responseText,urlQueue[urlIndex]=responseText,-1===urlQueue.indexOf(null)&&settings.onComplete(urlQueue)}var parser=document.createElement("a");urlArray.forEach((function(url,i){if(parser.setAttribute("href",url),parser.href=String(parser.href),Boolean(document.all&&!window.atob)&&parser.host.split(":")[0]!==location.host.split(":")[0]){if(parser.protocol===location.protocol){var xdr=new XDomainRequest;xdr.open("GET",url),xdr.timeout=0,xdr.onprogress=Function.prototype,xdr.ontimeout=Function.prototype,xdr.onload=function(){isValidCss(xdr.responseText)?onSuccess(xdr.responseText,i):onError(xdr,i)},xdr.onerror=function(err){onError(xdr,i)},setTimeout((function(){xdr.send()}),0)}else console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(url,")")),onError(null,i)}else{var xhr=new XMLHttpRequest;xhr.open("GET",url),settings.mimeType&&xhr.overrideMimeType&&xhr.overrideMimeType(settings.mimeType),settings.onBeforeSend(xhr,url,i),xhr.onreadystatechange=function(){4===xhr.readyState&&(200===xhr.status&&isValidCss(xhr.responseText)?onSuccess(xhr.responseText,i):onError(xhr,i))},xhr.send()}}))}function getCssData(options){var regex_cssComments=/\/\*[\s\S]+?\*\//g,regex_cssImports=/(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g,settings={rootElement:options.rootElement||document,include:options.include||'style,link[rel="stylesheet"]',exclude:options.exclude||null,filter:options.filter||null,skipDisabled:!1!==options.skipDisabled,useCSSOM:options.useCSSOM||!1,onBeforeSend:options.onBeforeSend||Function.prototype,onSuccess:options.onSuccess||Function.prototype,onError:options.onError||Function.prototype,onComplete:options.onComplete||Function.prototype},sourceNodes=Array.apply(null,settings.rootElement.querySelectorAll(settings.include)).filter((function(node){return!function matchesSelector(elm,selector){return(elm.matches||elm.matchesSelector||elm.webkitMatchesSelector||elm.mozMatchesSelector||elm.msMatchesSelector||elm.oMatchesSelector).call(elm,selector)}(node,settings.exclude)})),cssArray=Array.apply(null,Array(sourceNodes.length)).map((function(x){return null}));function handleComplete(){if(-1===cssArray.indexOf(null)){var cssText=cssArray.join("");settings.onComplete(cssText,cssArray,sourceNodes)}}function handleSuccess(cssText,cssIndex,node,sourceUrl){var returnVal=settings.onSuccess(cssText,node,sourceUrl);(function resolveImports(cssText,node,baseUrl,callbackFn){var __errorData=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],__errorRules=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],importData=parseImportData(cssText,baseUrl,__errorRules);importData.rules.length?getUrls(importData.absoluteUrls,{onBeforeSend:function onBeforeSend(xhr,url,urlIndex){settings.onBeforeSend(xhr,node,url)},onSuccess:function onSuccess(cssText,url,urlIndex){var returnVal=settings.onSuccess(cssText,node,url),responseImportData=parseImportData(cssText=!1===returnVal?"":returnVal||cssText,url,__errorRules);return responseImportData.rules.forEach((function(rule,i){cssText=cssText.replace(rule,responseImportData.absoluteRules[i])})),cssText},onError:function onError(xhr,url,urlIndex){__errorData.push({xhr:xhr,url:url}),__errorRules.push(importData.rules[urlIndex]),resolveImports(cssText,node,baseUrl,callbackFn,__errorData,__errorRules)},onComplete:function onComplete(responseArray){responseArray.forEach((function(importText,i){cssText=cssText.replace(importData.rules[i],importText)})),resolveImports(cssText,node,baseUrl,callbackFn,__errorData,__errorRules)}}):callbackFn(cssText,__errorData)})(cssText=void 0!==returnVal&&!1===Boolean(returnVal)?"":returnVal||cssText,node,sourceUrl,(function(resolvedCssText,errorData){null===cssArray[cssIndex]&&(errorData.forEach((function(data){return settings.onError(data.xhr,node,data.url)})),!settings.filter||settings.filter.test(resolvedCssText)?cssArray[cssIndex]=resolvedCssText:cssArray[cssIndex]="",handleComplete())}))}function parseImportData(cssText,baseUrl){var ignoreRules=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],importData={};return importData.rules=(cssText.replace(regex_cssComments,"").match(regex_cssImports)||[]).filter((function(rule){return-1===ignoreRules.indexOf(rule)})),importData.urls=importData.rules.map((function(rule){return rule.replace(regex_cssImports,"$1")})),importData.absoluteUrls=importData.urls.map((function(url){return getFullUrl(url,baseUrl)})),importData.absoluteRules=importData.rules.map((function(rule,i){var oldUrl=importData.urls[i],newUrl=getFullUrl(importData.absoluteUrls[i],baseUrl);return rule.replace(oldUrl,newUrl)})),importData}sourceNodes.length?sourceNodes.forEach((function(node,i){var linkHref=node.getAttribute("href"),linkRel=node.getAttribute("rel"),isLink="LINK"===node.nodeName&&linkHref&&linkRel&&-1!==linkRel.toLowerCase().indexOf("stylesheet"),isSkip=!1!==settings.skipDisabled&&node.disabled,isStyle="STYLE"===node.nodeName;if(isLink&&!isSkip)getUrls(linkHref,{mimeType:"text/css",onBeforeSend:function onBeforeSend(xhr,url,urlIndex){settings.onBeforeSend(xhr,node,url)},onSuccess:function onSuccess(cssText,url,urlIndex){var sourceUrl=getFullUrl(linkHref);handleSuccess(cssText,i,node,sourceUrl)},onError:function onError(xhr,url,urlIndex){cssArray[i]="",settings.onError(xhr,node,url),handleComplete()}});else if(isStyle&&!isSkip){var cssText=node.textContent;settings.useCSSOM&&(cssText=Array.apply(null,node.sheet.cssRules).map((function(rule){return rule.cssText})).join("")),handleSuccess(cssText,i,node,location.href)}else cssArray[i]="",handleComplete()})):settings.onComplete("",[])}function getFullUrl(url,base){var d=document.implementation.createHTMLDocument(""),b=d.createElement("base"),a=d.createElement("a");return d.head.appendChild(b),d.body.appendChild(a),b.href=base||document.baseURI||(document.querySelector("base")||{}).href||location.href,a.href=url,a.href}__webpack_require__.r(__webpack_exports__);var balancedMatch=balanced;function balanced(a,b,str){a instanceof RegExp&&(a=maybeMatch(a,str)),b instanceof RegExp&&(b=maybeMatch(b,str));var r=range(a,b,str);return r&&{start:r[0],end:r[1],pre:str.slice(0,r[0]),body:str.slice(r[0]+a.length,r[1]),post:str.slice(r[1]+b.length)}}function maybeMatch(reg,str){var m=str.match(reg);return m?m[0]:null}function range(a,b,str){var begs,beg,left,right,result,ai=str.indexOf(a),bi=str.indexOf(b,ai+1),i=ai;if(ai>=0&&bi>0){for(begs=[],left=str.length;i>=0&&!result;)i==ai?(begs.push(i),ai=str.indexOf(a,i+1)):1==begs.length?result=[begs.pop(),bi]:((beg=begs.pop())<left&&(left=beg,right=bi),bi=str.indexOf(b,i+1)),i=ai<bi&&ai>=0?ai:bi;begs.length&&(result=[left,right])}return result}function parseCss(css){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},defaults={preserveStatic:!0,removeComments:!1},settings=_extends({},defaults,options),errors=[];function error(msg){throw new Error("CSS parse error: ".concat(msg))}function match(re){var m=re.exec(css);if(m)return css=css.slice(m[0].length),m}function open(){return match(/^{\s*/)}function close(){return match(/^}/)}function whitespace(){match(/^\s*/)}function comment(){if(whitespace(),"/"===css[0]&&"*"===css[1]){for(var i=2;css[i]&&("*"!==css[i]||"/"!==css[i+1]);)i++;if(!css[i])return error("end of comment is missing");var str=css.slice(2,i);return css=css.slice(i+2),{type:"comment",comment:str}}}function comments(){for(var c,cmnts=[];c=comment();)cmnts.push(c);return settings.removeComments?[]:cmnts}function selector(){for(whitespace();"}"===css[0];)error("extra closing bracket");var m=match(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);if(m)return m[0].trim().replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g,"").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g,(function(m){return m.replace(/,/g,"‌")})).split(/\s*(?![^(]*\)),\s*/).map((function(s){return s.replace(/\u200C/g,",")}))}function declaration(){if("@"===css[0])return at_rule();match(/^([;\s]*)+/);var comment_regexp=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,prop=match(/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);if(prop){if(prop=prop[0].trim(),!match(/^:\s*/))return error("property missing ':'");var val=match(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/),ret={type:"declaration",property:prop.replace(comment_regexp,""),value:val?val[0].replace(comment_regexp,"").trim():""};return match(/^[;\s]*/),ret}}function declarations(){if(!open())return error("missing '{'");for(var d,decls=comments();d=declaration();)decls.push(d),decls=decls.concat(comments());return close()?decls:error("missing '}'")}function keyframe(){whitespace();for(var m,vals=[];m=match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/);)vals.push(m[1]),match(/^,\s*/);if(vals.length)return{type:"keyframe",values:vals,declarations:declarations()}}function at_keyframes(){var m=match(/^@([-\w]+)?keyframes\s*/);if(m){var vendor=m[1];if(!(m=match(/^([-\w]+)\s*/)))return error("@keyframes missing name");var frame,name=m[1];if(!open())return error("@keyframes missing '{'");for(var frames=comments();frame=keyframe();)frames.push(frame),frames=frames.concat(comments());return close()?{type:"keyframes",name:name,vendor:vendor,keyframes:frames}:error("@keyframes missing '}'")}}function at_page(){if(match(/^@page */))return{type:"page",selectors:selector()||[],declarations:declarations()}}function at_page_margin_box(){var m=match(/@(top|bottom|left|right)-(left|center|right|top|middle|bottom)-?(corner)?\s*/);if(m)return{type:"page-margin-box",name:"".concat(m[1],"-").concat(m[2])+(m[3]?"-".concat(m[3]):""),declarations:declarations()}}function at_fontface(){if(match(/^@font-face\s*/))return{type:"font-face",declarations:declarations()}}function at_supports(){var m=match(/^@supports *([^{]+)/);if(m)return{type:"supports",supports:m[1].trim(),rules:rules()}}function at_host(){if(match(/^@host\s*/))return{type:"host",rules:rules()}}function at_media(){var m=match(/^@media([^{]+)*/);if(m)return{type:"media",media:(m[1]||"").trim(),rules:rules()}}function at_custom_m(){var m=match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);if(m)return{type:"custom-media",name:m[1].trim(),media:m[2].trim()}}function at_document(){var m=match(/^@([-\w]+)?document *([^{]+)/);if(m)return{type:"document",document:m[2].trim(),vendor:m[1]?m[1].trim():null,rules:rules()}}function at_x(){var m=match(/^@(import|charset|namespace)\s*([^;]+);/);if(m)return{type:m[1],name:m[2].trim()}}function at_rule(){if(whitespace(),"@"===css[0]){var ret=at_x()||at_fontface()||at_media()||at_keyframes()||at_supports()||at_document()||at_custom_m()||at_host()||at_page()||at_page_margin_box();if(ret&&!settings.preserveStatic){var hasVarFunc=!1;if(ret.declarations)hasVarFunc=ret.declarations.some((function(decl){return/var\(/.test(decl.value)}));else hasVarFunc=(ret.keyframes||ret.rules||[]).some((function(obj){return(obj.declarations||[]).some((function(decl){return/var\(/.test(decl.value)}))}));return hasVarFunc?ret:{}}return ret}}function rule(){if(!settings.preserveStatic){var balancedMatch$1=balancedMatch("{","}",css);if(balancedMatch$1){var hasVarDecl=/:(?:root|host)(?![.:#(])/.test(balancedMatch$1.pre)&&/--\S*\s*:/.test(balancedMatch$1.body),hasVarFunc=/var\(/.test(balancedMatch$1.body);if(!hasVarDecl&&!hasVarFunc)return css=css.slice(balancedMatch$1.end+1),{}}}var sel=selector()||[],decls=settings.preserveStatic?declarations():declarations().filter((function(decl){var hasVarDecl=sel.some((function(s){return/:(?:root|host)(?![.:#(])/.test(s)}))&&/^--\S/.test(decl.property),hasVarFunc=/var\(/.test(decl.value);return hasVarDecl||hasVarFunc}));return sel.length||error("selector missing"),{type:"rule",selectors:sel,declarations:decls}}function rules(core){if(!core&&!open())return error("missing '{'");for(var node,rules=comments();css.length&&(core||"}"!==css[0])&&(node=at_rule()||rule());)node.type&&rules.push(node),rules=rules.concat(comments());return core||close()?rules:error("missing '}'")}return{type:"stylesheet",stylesheet:{rules:rules(!0),errors:errors}}}function parseVars(cssData){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},defaults={parseHost:!1,store:{},onWarning:function onWarning(){}},settings=_extends({},defaults,options),reVarDeclSelectors=new RegExp(":".concat(settings.parseHost?"host":"root","$"));return"string"==typeof cssData&&(cssData=parseCss(cssData,settings)),cssData.stylesheet.rules.forEach((function(rule){"rule"===rule.type&&rule.selectors.some((function(s){return reVarDeclSelectors.test(s)}))&&rule.declarations.forEach((function(decl,i){var prop=decl.property,value=decl.value;prop&&0===prop.indexOf("--")&&(settings.store[prop]=value)}))})),settings.store}function stringifyCss(tree){var delim=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",cb=arguments.length>2?arguments[2]:void 0,renderMethods={charset:function charset(node){return"@charset "+node.name+";"},comment:function comment(node){return 0===node.comment.indexOf("__CSSVARSPONYFILL")?"/*"+node.comment+"*/":""},"custom-media":function customMedia(node){return"@custom-media "+node.name+" "+node.media+";"},declaration:function declaration(node){return node.property+":"+node.value+";"},document:function document(node){return"@"+(node.vendor||"")+"document "+node.document+"{"+visit(node.rules)+"}"},"font-face":function fontFace(node){return"@font-face{"+visit(node.declarations)+"}"},host:function host(node){return"@host{"+visit(node.rules)+"}"},import:function _import(node){return"@import "+node.name+";"},keyframe:function keyframe(node){return node.values.join(",")+"{"+visit(node.declarations)+"}"},keyframes:function keyframes(node){return"@"+(node.vendor||"")+"keyframes "+node.name+"{"+visit(node.keyframes)+"}"},media:function media(node){return"@media "+node.media+"{"+visit(node.rules)+"}"},namespace:function namespace(node){return"@namespace "+node.name+";"},page:function page(node){return"@page "+(node.selectors.length?node.selectors.join(", "):"")+"{"+visit(node.declarations)+"}"},"page-margin-box":function pageMarginBox(node){return"@"+node.name+"{"+visit(node.declarations)+"}"},rule:function rule(node){var decls=node.declarations;if(decls.length)return node.selectors.join(",")+"{"+visit(decls)+"}"},supports:function supports(node){return"@supports "+node.supports+"{"+visit(node.rules)+"}"}};function visit(nodes){for(var buf="",i=0;i<nodes.length;i++){var n=nodes[i];cb&&cb(n);var txt=renderMethods[n.type](n);txt&&(buf+=txt,txt.length&&n.selectors&&(buf+=delim))}return buf}return visit(tree.stylesheet.rules)}function walkCss(node,fn){node.rules.forEach((function(rule){rule.rules?walkCss(rule,fn):rule.keyframes?rule.keyframes.forEach((function(keyframe){"keyframe"===keyframe.type&&fn(keyframe.declarations,rule)})):rule.declarations&&fn(rule.declarations,node)}))}balanced.range=range;function transformCss(cssData){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},defaults={preserveStatic:!0,preserveVars:!1,variables:{},onWarning:function onWarning(){}},settings=_extends({},defaults,options);return"string"==typeof cssData&&(cssData=parseCss(cssData,settings)),walkCss(cssData.stylesheet,(function(declarations,node){for(var i=0;i<declarations.length;i++){var decl=declarations[i],type=decl.type,prop=decl.property,value=decl.value;if("declaration"===type)if(settings.preserveVars||!prop||0!==prop.indexOf("--")){if(-1!==value.indexOf("var(")){var resolvedValue=resolveValue(value,settings);resolvedValue!==decl.value&&(resolvedValue=fixNestedCalc(resolvedValue),settings.preserveVars?(declarations.splice(i,0,{type:type,property:prop,value:resolvedValue}),i++):decl.value=resolvedValue)}}else declarations.splice(i,1),i--}})),stringifyCss(cssData)}function fixNestedCalc(value){return(value.match(/calc\(([^)]+)\)/g)||[]).forEach((function(match){var newVal="calc".concat(match.split("calc").join(""));value=value.replace(match,newVal)})),value}function resolveValue(value){var settings=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},__recursiveFallback=arguments.length>2?arguments[2]:void 0;if(-1===value.indexOf("var("))return value;var valueData=balancedMatch("(",")",value);function resolveFunc(value){var name=value.split(",")[0].replace(/[\s\n\t]/g,""),fallback=(value.match(/(?:\s*,\s*){1}(.*)?/)||[])[1],match=Object.prototype.hasOwnProperty.call(settings.variables,name)?String(settings.variables[name]):void 0,replacement=match||(fallback?String(fallback):void 0),unresolvedFallback=__recursiveFallback||value;return match||settings.onWarning('variable "'.concat(name,'" is undefined')),replacement&&"undefined"!==replacement&&replacement.length>0?resolveValue(replacement,settings,unresolvedFallback):"var(".concat(unresolvedFallback,")")}if(valueData){if("var"===valueData.pre.slice(-3)){var isEmptyVarFunc=0===valueData.body.trim().length;return isEmptyVarFunc?(settings.onWarning("var() must contain a non-whitespace string"),value):valueData.pre.slice(0,-3)+resolveFunc(valueData.body)+resolveValue(valueData.post,settings)}return valueData.pre+"(".concat(resolveValue(valueData.body,settings),")")+resolveValue(valueData.post,settings)}return-1!==value.indexOf("var(")&&settings.onWarning('missing closing ")" in the value "'.concat(value,'"')),value}var isBrowser="undefined"!=typeof window,isNativeSupport=isBrowser&&window.CSS&&window.CSS.supports&&window.CSS.supports("(--a: 0)"),counters={group:0,job:0},defaults={rootElement:isBrowser?document:null,shadowDOM:!1,include:"style,link[rel=stylesheet]",exclude:"",variables:{},onlyLegacy:!0,preserveStatic:!0,preserveVars:!1,silent:!1,updateDOM:!0,updateURLs:!0,watch:null,onBeforeSend:function onBeforeSend(){},onError:function onError(){},onWarning:function onWarning(){},onSuccess:function onSuccess(){},onComplete:function onComplete(){},onFinally:function onFinally(){}},regex={cssComments:/\/\*[\s\S]+?\*\//g,cssKeyframes:/@(?:-\w*-)?keyframes/,cssMediaQueries:/@media[^{]+\{([\s\S]+?})\s*}/g,cssUrls:/url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,cssVarDeclRules:/(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^}]*})/g,cssVarDecls:/(?:[\s;]*)(-{2}\w[\w-]*)(?:\s*:\s*)([^;]*);/g,cssVarFunc:/var\(\s*--[\w-]/,cssVars:/(?:(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/},variableStore={dom:{},job:{},user:{}},cssVarsIsRunning=!1,cssVarsObserver=null,cssVarsSrcNodeCount=0,debounceTimer=null,isShadowDOMReady=!1;function cssVars(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},msgPrefix="cssVars(): ",settings=_extends({},defaults,options);function handleError(message,sourceNode,xhr,url){!settings.silent&&window.console&&console.error("".concat(msgPrefix).concat(message,"\n"),sourceNode),settings.onError(message,sourceNode,xhr,url)}function handleWarning(message){!settings.silent&&window.console&&console.warn("".concat(msgPrefix).concat(message)),settings.onWarning(message)}function handleFinally(hasChanged){settings.onFinally(Boolean(hasChanged),isNativeSupport,getTimeStamp()-settings.__benchmark)}if(isBrowser){if(settings.watch)return settings.watch=defaults.watch,addMutationObserver(settings),void cssVars(settings);if(!1===settings.watch&&cssVarsObserver&&(cssVarsObserver.disconnect(),cssVarsObserver=null),!settings.__benchmark){if(cssVarsIsRunning===settings.rootElement)return void cssVarsDebounced(options);if(settings.__benchmark=getTimeStamp(),settings.exclude=[cssVarsObserver?'[data-cssvars]:not([data-cssvars=""])':'[data-cssvars="out"]',settings.exclude].filter((function(selector){return selector})).join(","),settings.variables=fixVarNames(settings.variables),!cssVarsObserver){var outNodes=Array.apply(null,settings.rootElement.querySelectorAll('[data-cssvars="out"]'));if(outNodes.forEach((function(outNode){var dataGroup=outNode.getAttribute("data-cssvars-group");(dataGroup?settings.rootElement.querySelector('[data-cssvars="src"][data-cssvars-group="'.concat(dataGroup,'"]')):null)||outNode.parentNode.removeChild(outNode)})),cssVarsSrcNodeCount){var srcNodes=settings.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])');srcNodes.length<cssVarsSrcNodeCount&&(cssVarsSrcNodeCount=srcNodes.length,variableStore.dom={})}}}if("loading"!==document.readyState)if(isNativeSupport&&settings.onlyLegacy){var hasVarChange=!1;if(settings.updateDOM){var targetElm=settings.rootElement.host||(settings.rootElement===document?document.documentElement:settings.rootElement);Object.keys(settings.variables).forEach((function(key){var varValue=settings.variables[key];hasVarChange=hasVarChange||varValue!==getComputedStyle(targetElm).getPropertyValue(key),targetElm.style.setProperty(key,varValue)}))}handleFinally(hasVarChange)}else!isShadowDOMReady&&(settings.shadowDOM||settings.rootElement.shadowRoot||settings.rootElement.host)?getCssData({rootElement:defaults.rootElement,include:defaults.include,exclude:settings.exclude,skipDisabled:!1,onSuccess:function onSuccess(cssText,node,url){return(cssText=((cssText=cssText.replace(regex.cssComments,"").replace(regex.cssMediaQueries,"")).match(regex.cssVarDeclRules)||[]).join(""))||!1},onComplete:function onComplete(cssText,cssArray,nodeArray){parseVars(cssText,{store:variableStore.dom,onWarning:handleWarning}),isShadowDOMReady=!0,cssVars(settings)}}):(cssVarsIsRunning=settings.rootElement,getCssData({rootElement:settings.rootElement,include:settings.include,exclude:settings.exclude,skipDisabled:!1,onBeforeSend:settings.onBeforeSend,onError:function onError(xhr,node,url){var responseUrl=xhr.responseURL||getFullUrl$1(url,location.href),statusText=xhr.statusText?"(".concat(xhr.statusText,")"):"Unspecified Error"+(0===xhr.status?" (possibly CORS related)":"");handleError("CSS XHR Error: ".concat(responseUrl," ").concat(xhr.status," ").concat(statusText),node,xhr,responseUrl)},onSuccess:function onSuccess(cssText,node,url){var isLink="LINK"===node.tagName,isStyleImport="STYLE"===node.tagName&&cssText!==node.textContent,returnVal=settings.onSuccess(cssText,node,url);return cssText=void 0!==returnVal&&!1===Boolean(returnVal)?"":returnVal||cssText,settings.updateURLs&&(isLink||isStyleImport)&&(cssText=fixRelativeCssUrls(cssText,url)),cssText},onComplete:function onComplete(cssText,cssArray){var nodeArray=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],currentVars=_extends({},variableStore.dom,variableStore.user);if(variableStore.job={},nodeArray.forEach((function(node,i){var nodeCSS=cssArray[i];if(regex.cssVars.test(nodeCSS))try{var cssTree=parseCss(nodeCSS,{preserveStatic:settings.preserveStatic,removeComments:!0});parseVars(cssTree,{parseHost:Boolean(settings.rootElement.host),store:variableStore.dom,onWarning:handleWarning}),node.__cssVars={tree:cssTree}}catch(err){handleError(err.message,node)}})),_extends(variableStore.job,variableStore.dom),settings.updateDOM?(_extends(variableStore.user,settings.variables),_extends(variableStore.job,variableStore.user)):(_extends(variableStore.job,variableStore.user,settings.variables),_extends(currentVars,settings.variables)),counters.job>0&&Boolean(Object.keys(variableStore.job).length>Object.keys(currentVars).length||Boolean(Object.keys(currentVars).length&&Object.keys(variableStore.job).some((function(key){return variableStore.job[key]!==currentVars[key]})))))resetCssNodes(settings.rootElement),cssVars(settings);else{var outCssArray=[],outNodeArray=[],hasKeyframesWithVars=!1;if(settings.updateDOM&&counters.job++,nodeArray.forEach((function(node,i){var isSkip=!node.__cssVars;if(node.__cssVars)try{transformCss(node.__cssVars.tree,_extends({},settings,{variables:variableStore.job,onWarning:handleWarning}));var outCss=stringifyCss(node.__cssVars.tree);if(settings.updateDOM){var nodeCSS=cssArray[i],hasCSSVarFunc=regex.cssVarFunc.test(nodeCSS);if(node.getAttribute("data-cssvars")||node.setAttribute("data-cssvars","src"),outCss.length&&hasCSSVarFunc){var dataGroup=node.getAttribute("data-cssvars-group")||++counters.group,outCssNoSpaces=outCss.replace(/\s/g,""),outNode=settings.rootElement.querySelector('[data-cssvars="out"][data-cssvars-group="'.concat(dataGroup,'"]'))||document.createElement("style");hasKeyframesWithVars=hasKeyframesWithVars||regex.cssKeyframes.test(outCss),settings.preserveStatic&&(node.sheet.disabled=!0),outNode.hasAttribute("data-cssvars")||outNode.setAttribute("data-cssvars","out"),outCssNoSpaces===node.textContent.replace(/\s/g,"")?(isSkip=!0,outNode&&outNode.parentNode&&(node.removeAttribute("data-cssvars-group"),outNode.parentNode.removeChild(outNode))):outCssNoSpaces!==outNode.textContent.replace(/\s/g,"")&&([node,outNode].forEach((function(n){n.setAttribute("data-cssvars-job",counters.job),n.setAttribute("data-cssvars-group",dataGroup)})),outNode.textContent=outCss,outCssArray.push(outCss),outNodeArray.push(outNode),outNode.parentNode||node.parentNode.insertBefore(outNode,node.nextSibling))}}else node.textContent.replace(/\s/g,"")!==outCss&&outCssArray.push(outCss)}catch(err){handleError(err.message,node)}isSkip&&node.setAttribute("data-cssvars","skip"),node.hasAttribute("data-cssvars-job")||node.setAttribute("data-cssvars-job",counters.job)})),cssVarsSrcNodeCount=settings.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])').length,settings.shadowDOM)for(var elm,elms=[settings.rootElement].concat(_toConsumableArray(settings.rootElement.querySelectorAll("*"))),i=0;elm=elms[i];++i)if(elm.shadowRoot&&elm.shadowRoot.querySelector("style")){var shadowSettings=_extends({},settings,{rootElement:elm.shadowRoot});cssVars(shadowSettings)}settings.updateDOM&&hasKeyframesWithVars&&fixKeyframes(settings.rootElement),cssVarsIsRunning=!1,settings.onComplete(outCssArray.join(""),outNodeArray,JSON.parse(JSON.stringify(variableStore.job)),getTimeStamp()-settings.__benchmark),handleFinally(outNodeArray.length)}}}));else document.addEventListener("DOMContentLoaded",(function init(evt){cssVars(options),document.removeEventListener("DOMContentLoaded",init)}))}}function addMutationObserver(settings){function isDisabled(node){var isDisabledAttr=node.hasAttribute("disabled"),isDisabledSheet=(node.sheet||{}).disabled;return isDisabledAttr||isDisabledSheet}function isLink(node){return"LINK"===node.tagName&&-1!==(node.getAttribute("rel")||"").indexOf("stylesheet")&&!isDisabled(node)}function isValidAddMutation(mutationNodes){return Array.apply(null,mutationNodes).some((function(node){var hasAttr=1===node.nodeType&&node.hasAttribute("data-cssvars"),isStyleWithVars=function isStyle(node){return"STYLE"===node.tagName&&!isDisabled(node)}(node)&&regex.cssVars.test(node.textContent);return!hasAttr&&(isLink(node)||isStyleWithVars)}))}window.MutationObserver&&(cssVarsObserver&&(cssVarsObserver.disconnect(),cssVarsObserver=null),(cssVarsObserver=new MutationObserver((function(mutations){mutations.some((function(mutation){var isValid=!1;return"attributes"===mutation.type?isValid=isLink(mutation.target):"childList"===mutation.type&&(isValid=isValidAddMutation(mutation.addedNodes)||function isValidRemoveMutation(mutationNodes){return Array.apply(null,mutationNodes).some((function(node){var isElm=1===node.nodeType,isOutNode=isElm&&"out"===node.getAttribute("data-cssvars"),isSrcNode=isElm&&"src"===node.getAttribute("data-cssvars"),isValid=isSrcNode;if(isSrcNode||isOutNode){var dataGroup=node.getAttribute("data-cssvars-group"),orphanNode=settings.rootElement.querySelector('[data-cssvars-group="'.concat(dataGroup,'"]'));isSrcNode&&(resetCssNodes(settings.rootElement),variableStore.dom={}),orphanNode&&orphanNode.parentNode.removeChild(orphanNode)}return isValid}))}(mutation.removedNodes)),isValid}))&&cssVars(settings)}))).observe(document.documentElement,{attributes:!0,attributeFilter:["disabled","href"],childList:!0,subtree:!0}))}function cssVarsDebounced(settings){var delay=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;clearTimeout(debounceTimer),debounceTimer=setTimeout((function(){settings.__benchmark=null,cssVars(settings)}),delay)}function fixKeyframes(rootElement){var animationNameProp=["animation-name","-moz-animation-name","-webkit-animation-name"].filter((function(prop){return getComputedStyle(document.body)[prop]}))[0];if(animationNameProp){for(var allNodes=rootElement.getElementsByTagName("*"),keyframeNodes=[],i=0,len=allNodes.length;i<len;i++){var node=allNodes[i];"none"!==getComputedStyle(node)[animationNameProp]&&(node.style[animationNameProp]+="__CSSVARSPONYFILL-KEYFRAMES__",keyframeNodes.push(node))}document.body.offsetHeight;for(var _i=0,_len=keyframeNodes.length;_i<_len;_i++){var nodeStyle=keyframeNodes[_i].style;nodeStyle[animationNameProp]=nodeStyle[animationNameProp].replace("__CSSVARSPONYFILL-KEYFRAMES__","")}}}function fixRelativeCssUrls(cssText,baseUrl){return(cssText.replace(regex.cssComments,"").match(regex.cssUrls)||[]).forEach((function(cssUrl){var oldUrl=cssUrl.replace(regex.cssUrls,"$1"),newUrl=getFullUrl$1(oldUrl,baseUrl);cssText=cssText.replace(cssUrl,cssUrl.replace(oldUrl,newUrl))})),cssText}function fixVarNames(){var varObj=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},reLeadingHyphens=/^-{2}/;return Object.keys(varObj).reduce((function(obj,value){return obj[reLeadingHyphens.test(value)?value:"--".concat(value.replace(/^-+/,""))]=varObj[value],obj}),{})}function getFullUrl$1(url){var base=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.href,d=document.implementation.createHTMLDocument(""),b=d.createElement("base"),a=d.createElement("a");return d.head.appendChild(b),d.body.appendChild(a),b.href=base,a.href=url,a.href}function getTimeStamp(){return isBrowser&&(window.performance||{}).now?window.performance.now():(new Date).getTime()}function resetCssNodes(rootElement){Array.apply(null,rootElement.querySelectorAll('[data-cssvars="skip"],[data-cssvars="src"]')).forEach((function(node){return node.setAttribute("data-cssvars","")}))}cssVars.reset=function(){for(var prop in counters.job=0,counters.group=0,cssVarsIsRunning=!1,cssVarsObserver&&(cssVarsObserver.disconnect(),cssVarsObserver=null),cssVarsSrcNodeCount=0,debounceTimer=null,isShadowDOMReady=!1,variableStore)variableStore[prop]={}},__webpack_exports__.default=cssVars}}]);
//# sourceMappingURL=60.e1235436470257e7d797.bundle.js.map