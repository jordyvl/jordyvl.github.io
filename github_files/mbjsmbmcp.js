EBMMEval=function(code){eval(code)};var EBMMMenu=function(a){var ac=0;var K=true;var v=0;var Q=0;var d="mbmcp";var i=1;var c=false;var ad=false;var C;var T;var q;var r=false;var o=false;var W;var R;var l;var p;function t(){for(var af=0;af<arguments.length;++af){if(typeof(arguments[af])=="undefined"){return false}}return true}function x(af){return parseInt(af,10)||0}function H(){var ag=0;var af=0;if((!document.compatMode||document.compatMode=="CSS1Compat")&&document.documentElement){af=document.documentElement}else{if(document.body){af=document.body}}if(af&&af.clientHeight){ag=af.clientHeight}else{if(t(window.innerWidth,window.innerHeight,document.width)){ag=window.innerHeight;if(document.width>window.innerWidth){ag=ag-15}}}return ag}function w(){var af=0;var ag=0;if((!document.compatMode||document.compatMode=="CSS1Compat")&&document.documentElement){ag=document.documentElement}else{if(document.body){ag=document.body}}if(ag&&ag.clientWidth){af=ag.clientWidth}else{if(t(window.innerWidth,window.innerHeight,document.height)){af=window.innerWidth;
if(document.height>window.innerHeight){af=af-15}}}return af}function A(aj){var af=0;var al=0;var ak=aj;var ah=false;while(aj&&aj!=null){if(aj.style&&aj.style.position=="fixed"){ah=true}af+=x(R?aj.pageX:aj.offsetLeft);al+=x(R?aj.pageY:aj.offsetTop);if(R){if(aj.style&&(aj.style.position=="absolute"||aj.style.position=="relative")){break}}aj=aj.offsetParent}aj=ak;var ag=0;var ai=0;if(T&&!l){ag=aj.style.pixelWidth}else{if(R){ag=aj.clip.width}else{ag=aj.offsetWidth}}if(T&&!l){ai=aj.style.pixelHeight}else{if(R){ai=aj.clip.height}else{ai=aj.offsetHeight}}return{x:af,y:al,w:ag,h:ai,in_fixed:ah}}function h(){var ah=document.getElementById;C=ah&&(navigator.appName=="Netscape");T=ah&&window.opera;q=document.all&&document.all.item&&!T;r=false;o=false;if(q){var af=navigator.userAgent;var ag=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");if(ag.exec(af)!=null){var ai=parseFloat(RegExp.$1);r=(ai<=6);o=(ai<=8)}}W=q&&document.documentMode>=9;R=document.layers;l=T&&document.readyState;p=("ontouchstart" in document.documentElement||navigator.msMaxTouchPoints)
}function D(){var ah=0;var af=0;if(R||C||T){af=window.pageXOffset;ah=window.pageYOffset}else{var ag=(document.compatMode=="CSS1Compat"&&!C)?document.documentElement:document.body;af=ag.scrollLeft;ah=ag.scrollTop}return{x:af,y:ah,w:w(),h:H()}}function O(af,ag){if(af&&af.style){if(ag==1){af.style.opacity=((navigator.userAgent.indexOf("Gecko")>-1)&&!/Konqueror|Safari|KHTML/.test(navigator.userAgent))?0.999999:1;if(q&&!W){if(af.style.filter){af.style.filter=af.style.filter.replace(/alpha\([^\)]*\)/gi,"")}}}else{if(ag<0.00001){ag=0}af.style.opacity=ag;if(q&&!W){af.style.filter=(af.style.filter?af.style.filter.replace(/alpha\([^\)]*\)/gi,""):"")+"alpha(opacity="+ag*100+")"}}}}function Y(ai,ap,ao){if(ai&&ai.style){try{if(ap>1){ap=1}if(ao>1){ao=1}if(q&&!W){if(ap==1&&ao==1){ai.style.filter=ai.style.filter.replace(/progid:DXImageTransform.Microsoft.Matrix\([^\)]*\);?/gi,"")}else{var ah=0;var ag=0;if(ai.cbnDirectionX==-1&&ai.cbnMenuRect){ah=ai.cbnMenuRect.w-ai.cbnMenuRect.w*ap}if(ai.cbnDirectionY==-1&&ai.cbnMenuRect){ag=ai.cbnMenuRect.h-ai.cbnMenuRect.h*ao
}ap=Math.round(ap*100)/100;ao=Math.round(ao*100)/100;ai.style.filter=(ai.style.filter?ai.style.filter.replace(/progid\:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/gi,""):"")+"progid:DXImageTransform.Microsoft.Matrix(sizingMethod='clip to original', M11="+ap+", M12=0, M21=0, M22="+ao+" Dx="+ah+" Dy="+ag+")"}}else{var an="0";var al="0";if(ai.cbnDirectionX==-1){an="100%"}if(ai.cbnDirectionY==-1){al="100%"}if(ai.ebnStyleScaleProperty){af=ai.ebnStyleScaleProperty}else{var af=null;var am=["transform","MozTransform","WebkitTransform","OTransform","msTransform"];for(var aj=0;aj<am.length;aj++){if(ai.style[am[aj]]!=null){af=am[aj];break}}ai.ebnStyleScaleProperty=af}if(af!=null){if(ap==1&&ao==1){ai.style[af]=""}else{ai.style[af]="scale("+ap+","+ao+")";ai.style[af+"Origin"]=an+" "+al}}}}catch(ak){}}}function u(af){Y(af,1,1)}function U(ag,af){if(ag.ebmScaleEffect==1){Y(ag,1,af)}else{if(ag.ebmScaleEffect==2){Y(ag,af,af)}else{if(ag.ebmScaleEffect==3){Y(ag,af,1)}}}}function Z(af){var ag=setTimeout(function(){X(af)
},550);return ag}function V(ag){var ah;for(var af=ag;af;af=af.openSubmenuDiv){ah=af;if(!af.ticker){af.ticker=Z(ah)}}}function aa(ag){for(var af=ag;af;af=af.upperTR?af.upperTR.menuDiv:0){if(af.ticker){clearTimeout(af.ticker);af.ticker=0}}}function I(ag,ap,ao,ai,an,am,aj){var af=5;var ak=ao;var aq=an;var ah=am;if(aq>ap-2*af&&ap>0){ak=af+ag;aq=ap-2*af}else{if(ah==-1){ak=ao+ai-aq+aj}else{ak=ao}if(ak<ag+af){ak=ag+af;ah=1}if(ak+an>ap+ag-af&&ap>0){ak-=ak+aq-(ap+ag-af);ah=-1}}return{y:ak,direction:ah,size:aq}}function J(ah,ai,ao,aq,ag,an,ak){var af=5;var am=ao;var ap=ag;var aj=an;if(((aj>=0)&&(ao+aq+ag>ai+ah-af))||((aj<0)&&(ao-ag<af))){if(ao-ah>ai+ah-(ao+aq)&&ai>0){aj=-1}else{aj=1}}if(aj>=0){am=ao+aq;if(ai+ah-af-am<ap&&ai>0){ap=ai+ah-af-am}}else{am=ao-ap+ak;if(am-ah<af){am=ah+af;ap=ao-(ah+af)}}return{x:am,direction:aj,size:ap}}function S(ag){if(ag){var af=new Date().getTime();var ai=af-ag.cbnLastAnimTime;var ah=ai/200;if(ah<0.05||ag.cbnTransitionProgress==0){ah=0.05}ag.cbnTransitionProgress=ah;
if(ag.cbnTransitionProgress>1){ag.cbnTransitionProgress=1}if(ag.ebmFadeEffect){var aj=ag.cbnTransitionProgress;if(ag.cbnMenuAlpha&&aj>ag.cbnMenuAlpha){aj=ag.cbnMenuAlpha}O(ag,aj)}if(ag.ebmScaleEffect>0){U(ag,ag.cbnTransitionProgress)}if(ag.cbnTransitionProgress>=1){clearInterval(ag.ebmFadeTimer);ag.ebmFadeTimer=null}}}var ab=function(){c=false;ad=false;if(m){X(m)}};function n(){if(EditMode){if(DMenuEditor&&DMenuEditor.itemClicked){DMenuEditor.itemClicked(null,false,false,false)}if(EBMMMenu.setSelection){EBMMMenu.setSelection([],[])}}else{document.onclick=e;document.ontouchstart=ae;if(j){j.onclick=null;j.ontouchstart=null}}ab();return false}function y(af){if(!af){var af=window.event}af.cancelBubble=true;if(af.stopPropagation){af.stopPropagation()}}function g(){if(p||EditMode){if(document.onclick!=n){e=document.onclick;ae=document.ontouchstart;document.onclick=n;document.ontouchstart=n;j.onclick=y;j.ontouchstart=y}}}function z(af){if(!EditMode||!EBMMMenu.CanCloseSubmenu){return true}return EBMMMenu.CanCloseSubmenu(af)
}function E(ag){var af=1;if(ag.assocmenu){if(!ag.assocmenu.depth){af=ag.ebmMenuDirection}G(ag.assocmenu,ag,af,true)}}function G(am,ah,ak,ao){var aj=am;if(aj&&aj.style){if(!aj.depth&&(m!=aj)){X(m);if(m){return false}}if(ah&&ah.menuDiv&&ah.menuDiv.openSubmenuDiv&&ah.menuDiv.openSubmenuDiv!=aj){X(ah.menuDiv.openSubmenuDiv);if(ah.menuDiv.openSubmenuDiv.isOpen){return false}}if(EditMode&&EBMMMenu.movinghandle_resizer_handle){return false}g();if(aj.style.display=="block"){aa(aj);return}aj.style.display="block";aj.style.left="0px";aj.style.top="0px";aj.style.height="auto";aj.style.width="auto";aj.isOpen=true;aa(aj);if(ah.makeExpanded){ah.makeExpanded()}if(aj.depth>0){aj.cbnDirectionX=aj.upperTR.menuDiv.cbnDirectionX;aj.cbnDirectionY=aj.upperTR.menuDiv.cbnDirectionY}else{aj.cbnDirectionX=aj.cbnDefaultDirectionX;aj.cbnDirectionY=1}aj.style.overflow="visible";var ag=ah;if(ag.tagName&&ag.tagName.toLowerCase()=="a"){ag=ag.parentNode}var af=A(ag);var an=0;var ap=A(aj);var al=D();if(ap.in_fixed){al.x=0;
al.y=0}var ai;if(ak){ai=I(al.y,al.h,af.y,af.h,ap.h,aj.cbnDirectionY,0)}else{ai=J(al.y,al.h,af.y,af.h,ap.h,aj.cbnDirectionY,0);ai.y=ai.x}aj.cbnDirectionY=ai.direction;aj.style.top=ai.y-ap.y+"px";ap=A(aj);if(ak){ai=J(al.x,al.w,af.x,af.w,ap.w,aj.cbnDirectionX,an)}else{ai=I(al.x,al.w,af.x,af.w,ap.w,aj.cbnDirectionX,an);ai.x=ai.y}aj.cbnDirectionX=ai.direction;if((ai.size<ap.w)&&(aj.cbnDirectionX>0)){ai.x=ai.x-(ap.w-ai.size)}aj.style.left=ai.x-ap.x+"px";aj.cbnMenuRect={w:ap.w,h:ap.h,x:ai.x-ap.x,y:ai.y-ap.y};if((aj.ebmFadeEffect||v>0)&&!ao){if(!aj.ebmFadeTimer){if(aj.ebmFadeEffect){O(aj,0.05)}if(aj.ebmScaleEffect>0){U(aj,0.05)}aj.cbnTransitionProgress=0;aj.cbnLastAnimTime=new Date().getTime();aj.ebmFadeTimer=setInterval(function(){S(aj)},20)}}else{if(ao){if(ac){O(aj,ac)}else{O(aj,1)}}}if(!aj.depth){m=aj}else{ah.menuDiv.openSubmenuDiv=aj}if(EditMode){if(DMenuEditor&&DMenuEditor.submenuOpen){DMenuEditor.submenuOpen(ah.id)}}aj.style.display="block"}}function X(ah){var ag=ah;if(ag&&(ag.style.display=="block")){if(!z(ag.upperTR)){return false
}if(EditMode){if(DMenuEditor&&DMenuEditor.submenuClose&&ag.upperTR&&ag.upperTR.id){DMenuEditor.submenuClose(ag.upperTR.id)}}if(ag==m){m=null}if(ag.openSubmenuDiv){X(ag.openSubmenuDiv)}if(ag.upperTR&&ag.upperTR.className){ag.upperTR.makeNormal()}ag.style.display="none";ag.openSubmenuDiv=0;ag.isOpen=false;var af=ag.firstChild;while(af){if(af.unHighlight){af.unHighlight()}af=af.nextSibling}if(ag.ticker){clearTimeout(ag.ticker);ag.ticker=null}if(ag.ebmFadeEffect||ag.ebmScaleEffect){if(ag.ebmFadeEffect){O(ag,0)}if(v>0){u(ag)}if(ag.ebmFadeTimer){clearTimeout(ag.ebmFadeTimer);ag.ebmFadeTimer=null}}}}function k(ai,ak,aj,ah){if(ah){ai.className=ai.className.replace(" "+aj,"")}else{if(ai.className.indexOf(aj)==-1){ai.className+=" "+aj}}for(var ag=0;ag<ak.length;ag++){var af=ai.firstChild;while(ak[ag]&&af){if(af.nodeName.toLowerCase()==ak[ag]){k(af,ak,aj,ah)}af=af.nextSibling}}}function L(af,aj,ax,ag,av){var at=/^([a-zA-Z]*?\:\/\/)?[^\(\)\:]*?(\?.*)?$/;var an=/^(javascript\:)/;var ap=af.firstChild;
var aq=0;while(ap){if(ap.nodeName.toLowerCase()=="li"){aq++;if(EditMode){if(ax!=0){ap.id=aj.id+"_"+aq}else{ap.id="item_"+aq}}if(ax!=0){if(EditMode){function aw(az,aA){if(!aA){var aA=window.event}aA.cancelBubble=true;if(aA.stopPropagation){aA.stopPropagation()}if(DMenuEditor&&DMenuEditor.itemClicked){DMenuEditor.itemClicked(az,aA.shiftKey,aA.ctrlKey,aA.altKey)}return aA}ap.onclick=function(az){az=aw(this,az);return false};ap.oncontextmenu=function(az){az=aw(this,az)}}var ah=ap.firstChild;while(ah){if(ah.nodeName.toLowerCase()=="a"){if(ah.href&&(!ah.target||ah.target.toLowerCase()=="_self")){if(EditMode){ah.href="javascript:;"}else{ah.onclick=function(az){if(!az){var az=window.event}az.cancelBubble=true;if(az.stopPropagation){az.stopPropagation()}if(c){if(ad){ad=false;return false}}}}if(ah.href.match(at)&&!EditMode){ap.rowClickLink=ah.href;ap.onclick=function(){if(c){if(ad){ad=false;return false}}window.location.href=this.rowClickLink;return false}}else{if(ah.href.match(an)&&!EditMode){ap.rowClickLink=ah.href;
ap.onclick=function(){if(c){if(ad){ad=false;return false}}c=false;ad=false;EBMMEval(this.rowClickLink)}}}}else{if(!ah.href&&!EditMode){ap.onclick=function(az){if(!az){var az=window.event}az.cancelBubble=true;if(az.stopPropagation){az.stopPropagation()}if(c){if(ad){ad=false;return false}}}}}}ah=ah.nextSibling}}else{k(ap,["a","div"],"topitem",false)}if(ax!=0){var ai=function(){if(this.parentNode){var az=this.parentNode.firstChild;while(az){if(az.unHighlight){az.unHighlight()}az=az.nextSibling}}k(this,["a"],"subitemhot",false);if(this.assocmenu){if(this.assocmenu.style&&this.assocmenu.style.display!="block"){ad=true}G(this.assocmenu,this,1,false);if(this.assocmenu.isOpen){this.makeExpanded()}}else{if(EditMode){if(this.menuDiv&&this.menuDiv.openSubmenuDiv){X(this.menuDiv.openSubmenuDiv)}}}};if(p&&"ontouchstart" in window){ap.ontouchstart=ai}ap.onmouseover=ai;ap.onmouseout=function(){this.unHighlight();if(this.assocmenu&&!c&&!EditMode){B(this.assocmenu)}};ap.unHighlight=function(){k(this,["a"],"subitemhot",true)
};ap.makeExpanded=function(){k(this,["a"],"subexpanded",false)};ap.makeNormal=function(){k(this,["a"],"subexpanded",true)}}else{var am=null;var ah=ap.firstChild;while(ah){if(ah.nodeName.toLowerCase()=="a"){am=ah}ah=ah.nextSibling}if(am){am.parentli=ap;var au=false;var al=false;var ay=am.firstChild;while(ay){if(ay.nodeName.toLowerCase()=="img"){if(ay.className=="normalbutton"){am.imgNormal=ay;am.imgNormalSrc=ay.src}if(ay.className=="hoverbutton"){am.imgOverSrc=ay.src;au=ay}if(ay.className=="downbutton"){am.imgDownSrc=ay.src;al=ay}}ay=ay.nextSibling}if(au){am.removeChild(au)}if(al){am.removeChild(al)}am.makehot=function(){k(this.parentli,["a","div"],"itemhot",false);if(this.imgNormal&&this.imgOverSrc){var az=this.imgOverSrc;if(q&&(window.location.protocol!="file:")){az+="#"}this.imgNormal.src=az}};am.makenormal=function(){k(this.parentli,["a","div"],"itemhot",true);k(this,["a","div"],"itemdown",true);if(this.imgNormal&&this.imgNormalSrc){this.imgNormal.src=this.imgNormalSrc}};am.makedown=function(){k(this,["a","div"],"itemdown",false);
if(this.imgNormal&&this.imgDownSrc){this.imgNormal.src=this.imgDownSrc}};am.makeup=function(){k(this,["a","div"],"itemdown",true);if(this.imgNormal&&this.imgOverSrc){this.imgNormal.src=this.imgOverSrc}else{if(this.imgNormal&&this.imgNormalSrc){this.imgNormal.src=this.imgNormalSrc}}};if(p&&"ontouchstart" in window){am.ontouchstart=am.makedown;am.ontouchend=am.makeup}am.onmouseover=am.makehot;am.onmouseout=am.makenormal;am.onmousedown=am.makedown;am.onmouseup=am.makeup}else{am=F(ap)}if(EditMode){if(am.href){am.href="javascript:;"}ap.onclick=function(az){if(!az){var az=window.event}if(DMenuEditor&&DMenuEditor.itemClicked){DMenuEditor.itemClicked(this,az.shiftKey,az.ctrlKey,az.altKey)}};ap.oncontextmenu=ap.onclick}if(am){if(p){am.onclick=function(){if(ad){ad=false;return false}};var ak=function(az){c=true};if(window.navigator.msPointerEnabled){am.addEventListener("MSPointerDown",ak)}am.addEventListener("touchstart",ak)}}var ar=function(){if(this.assocmenu){if(this.assocmenu.style&&this.assocmenu.style.display!="block"){ad=true
}b(this.assocmenu,this.ebmMenuDirection,this)}else{if(!p){this.makeExpanded();if(EditMode){ab()}}}};if(p&&"ontouchstart" in window){ap.ontouchstart=ar}ap.onmouseover=ar;ap.onmouseout=function(){if(this.assocmenu&&!c&&!EditMode){B(this.assocmenu)}else{if((EditMode&&!this.assocmenu)||(EditMode&&this.assocmenu&&!this.assocmenu.isOpen)||(!p&&!EditMode)){this.makeNormal()}}};ap.makeExpanded=function(){k(this,["a","div"],"expanded",false)};ap.makeNormal=function(){k(this,["a","div"],"expanded",true)}}ap.menuDiv=af;var ao=ap.firstChild;while(ao){if(ao.nodeName.toLowerCase()=="ul"){ao.onmouseout=function(){if(!c&&!EditMode){B(this)}};ao.onmouseover=function(){N(this)};ao.ebmFadeEffect=K;if(ax==0){ao.cbnMenuAlpha=ac}if(K){O(ao,0)}else{if(ac){O(ao,ao.cbnMenuAlpha)}}ao.ebmScaleEffect=v;if(v>0){u(ao)}ao.cbnDefaultDirectionX=i;ao.upperTR=ap;ao.depth=ax;ao.openSubmenuDiv=0;ap.assocmenu=ao;ap.ebmMenuDirection=Q;L(ao,ap,ax+1,ag,av);break}ao=ao.nextSibling}}ap=ap.nextSibling}}function b(ai,ag,ah){var af=ai;
if(af&&af.style){ah.makeExpanded();aa(m);G(af,ah,ag)}}function B(af){if(af){V(m)}}function N(af){if(af){aa(af)}}function F(af){if(!af){return null}if(af.nodeName&&af.nodeName.toLowerCase()=="a"){return af}else{return F(af.firstChild)}}var s=function(ah){ac=ah.MenuAlpha;K=ah.FadeEffect;v=ah.ScaleEffect;Q=ah.MenuDirection;d=ah.MenuName;i=ah.DefaultDirectionX;EditMode=ah.em;m=null;h();if(C&&!ac&&!K){ac=1}if(o){ac=0}var ai=document.getElementById(d+"ebul_wrapper");if(ai){k(ai,[],"scripted",false);if(q){if(document.compatMode=="BackCompat"||document.compatMode=="Quirks"){k(ai,[],"quirks",false)}}}var af=document.getElementsByTagName("ul");for(var ag=0;ag<af.length;ag++){if(af[ag].id&&af[ag].id==d+"ebul_table"&&af[ag].className.substr(0,d.length+13)==d+"ebul_menulist"){if(r){af[ag].style.overflow="hidden"}j=af[ag];L(af[ag],0,0,d+"ebul_menulist","ebul_"+d+"_mdiv");af[ag].className=af[ag].className.replace("css_menu","")}}var aj=function(){P=null;var am=document.getElementById(d+"ebul_table");var ao=document.getElementById(d+"ebul_wrapper");
var al=true;var an=-99;if(am&&ao){var ak=am.firstChild;while(ak){if(ak.nodeName.toLowerCase()=="li"){if(an!=-99&&an!=ak.offsetTop){al=false}an=ak.offsetTop}ak=ak.nextSibling}if(al){k(ao,[],"centeritems",true)}else{k(ao,[],"centeritems",false)}}};f=window.onresize;aj();window.onresize=function(){if(f!=null&&typeof(f)=="function"&&!EditMode){f()}if(P==null){P=setTimeout(aj,50)}if(EditMode&&EBMMMenu.onEditResize){EBMMMenu.onEditResize()}};if(EditMode){g()}if(EditMode){this.openSubmenuInstantly=E}};var j=null;var m=0;var e=null;var ae=null;var P=null;var f=null;var M={init:s,hide:ab};return M}();EBMMMenu.init({
 MenuAlpha: 0,
 FadeEffect: true,
 ScaleEffect: 0,
 MenuDirection: 0,
 MenuName: "mbmcp",
 DefaultDirectionX: 1
});
// Created with Easy Button & Menu Maker
