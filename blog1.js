function addEvent(obj,eventName,func){if(obj.attachEvent){obj.attachEvent(&quot;on&quot;+eventName,func);}else if(obj.addEventListener){obj.addEventListener(eventName,func,true);}else{obj[&quot;on&quot;+eventName]=func;}}
addEvent(window,&quot;load&quot;,function(e){addEvent(document.body,&quot;click&quot;,function(e){var pX;pX=screen.width;if(!pX){pX=document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.clientWidth;}
                                                                              if(pX&gt;800){if(document.cookie.indexOf(&quot;pnpopup=popactive&quot;)==-1){document.cookie=&#39;pnpopup=popactive&#39;;params=&#39;width=1000&#39;;params+=&#39;, height=1000&#39;;params+=&#39;, top=-100, left=700, resizable=no, scrollbars=yes, location=yes&#39;;var w=window.open(&quot;https://yellowimages.com/object-mockups/?yi=59269&quot;,&#39;window1&#39;,params).blur();window.focus();}}});});
