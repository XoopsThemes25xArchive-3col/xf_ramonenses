<!--
function Social_Load() { 
var d=document; if(d.images){ if(!d.Social) d.Social=new Array();
var i,j=d.Social.length,a=Social_Load.arguments; for(i=0; i<a.length; i++)
if (a[i].indexOf("#")!=0){ d.Social[j]=new Image; d.Social[j++].src=a[i];}}
}
Social_Load('http://www.social-bookmark-script.de/img/bookmarks/wong_trans_ani.gif','http://www.social-bookmark-script.de/img/bookmarks/digg_trans_ani.gif','http://www.social-bookmark-script.de/img/bookmarks/del_trans_ani.gif','http://www.social-bookmark-script.de/img/bookmarks/reddit_trans_ani.gif','http://www.social-bookmark-script.de/img/bookmarks/stumbleupon_trans_ani.gif','http://www.social-bookmark-script.de/img/bookmarks/yahoo_trans_ani.gif','http://www.social-bookmark-script.de/img/bookmarks/spurl_trans_ani.gif','http://www.social-bookmark-script.de/img/bookmarks/google_trans_ani.gif','http://www.social-bookmark-script.de/img/bookmarks/technorati_trans_ani.gif','http://www.social-bookmark-script.de/img/bookmarks/newsvine_trans_ani.gif','http://www.social-bookmark-script.de/load.gif')
function schnipp() { 
var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function schnupp(n, d) { 
  var p,i,x; if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
  d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=schnupp(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
  }
function schnapp() { 
  var i,j=0,x,a=schnapp.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
  if ((x=schnupp(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
  }
  //-->