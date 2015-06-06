var ss={fixAllLinks:function(){
var _1=document.getElementsByTagName("a");
for(var i=0;i<_1.length;i++){
var _3=_1[i];
if((_3.href&&_3.href.indexOf("#")!=-1)&&((_3.pathname==location.pathname)||("/"+_3.pathname==location.pathname))&&(_3.search==location.search)){
ss.addEvent(_3,"click",ss.smoothScroll);
}
}
},smoothScroll:function(e){
if(window.event){
target=window.event.srcElement;
}else{
if(e){
target=e.target;
}else{
return;
}
}
if(target.nodeName.toLowerCase()!="a"){
target=target.parentNode;
}
if(target.nodeName.toLowerCase()!="a"){
return;
}
anchor=target.hash.substr(1);
var _5=document.getElementsByTagName("a");
var _6=null;
for(var i=0;i<_5.length;i++){
var _8=_5[i];
if(_8.name&&(_8.name==anchor)){
_6=_8;
break;
}
}
if(!_6){
return true;
}
var _9=_6.offsetLeft;
var _a=_6.offsetTop;
var _b=_6;
while(_b.offsetParent&&(_b.offsetParent!=document.body)){
_b=_b.offsetParent;
_9+=_b.offsetLeft;
_a+=_b.offsetTop;
}
clearInterval(ss.INTERVAL);
cypos=ss.getCurrentYPos();
ss_stepsize=parseInt((_a-cypos)/ss.STEPS);
ss.INTERVAL=setInterval("ss.scrollWindow("+ss_stepsize+","+_a+",\""+anchor+"\")",10);
if(window.event){
window.event.cancelBubble=true;
window.event.returnValue=false;
}
if(e&&e.preventDefault&&e.stopPropagation){
e.preventDefault();
e.stopPropagation();
}
},scrollWindow:function(_c,_d,_e){
wascypos=ss.getCurrentYPos();
isAbove=(wascypos<_d);
window.scrollTo(0,wascypos+_c);
iscypos=ss.getCurrentYPos();
isAboveNow=(iscypos<_d);
if((isAbove!=isAboveNow)||(wascypos==iscypos)){
window.scrollTo(0,_d);
clearInterval(ss.INTERVAL);
location.hash=_e;
}
},getCurrentYPos:function(){
if(document.body&&document.body.scrollTop){
return document.body.scrollTop;
}
if(document.documentElement&&document.documentElement.scrollTop){
return document.documentElement.scrollTop;
}
if(window.pageYOffset){
return window.pageYOffset;
}
return 0;
},addEvent:function(_f,_10,fn,_12){
if(_f.addEventListener){
_f.addEventListener(_10,fn,_12);
return true;
}else{
if(_f.attachEvent){
var r=_f.attachEvent("on"+_10,fn);
return r;
}else{
alert("Handler could not be removed");
}
}
}};
ss.STEPS=25;
ss.addEvent(window,"load",ss.fixAllLinks);

