// jquery.jparallax.js
// 1.0
// Stephen Band
//
// Project and documentation site:
// webdev.stephband.info/jparallax/
//
// Repository:
// github.com/stephband/jparallax
//
// Dependencies:
// jquery.event.frame
// webdev.stephband.info/events/frame/
(function(a,b){function j(a){return this.lib[a]}function k(a){return typeof a=="boolean"?a:!!parseFloat(a)}function l(a){return f.percent.exec(a)?parseFloat(a)/100:a}function m(a,b,c,d){var e=[a,b];this.ontarget=!1,this.decay=c,this.pointer=d||[.5,.5],this.update=function(a,b){var c,d;if(this.ontarget)this.pointer=a;else if((!e[0]||h(a[0]-this.pointer[0])<b[0])&&(!e[1]||h(a[1]-this.pointer[1])<b[1]))this.ontarget=!0,this.pointer=a;else{c=[],d=2;while(d--)e[d]&&(c[d]=a[d]+this.decay*(this.pointer[d]-a[d]));this.pointer=c}}}function n(b,d){var e=this,f=b instanceof a?b:a(b),g=[k(d.xparallax),k(d.yparallax)],h=0,i;this.pointer=[0,0],this.active=!1,this.activeOutside=d&&d.activeOutside||!1,this.update=function(a){var b=this.pos,c=this.size,d=[],e=2;if(h>0){h===2&&(h=0,i&&(a=i));while(e--)g[e]&&(d[e]=(a[e]-b[e])/c[e],d[e]=d[e]<0?0:d[e]>1?1:d[e]);this.active=!0,this.pointer=d}else this.active=!1},this.updateSize=function(){var a=f.width(),b=f.height();e.size=[a,b],e.threshold=[1/a,1/b]},this.updatePos=function(){var a=f.offset()||{left:0,top:0},b=parseInt(f.css("borderLeftWidth"))+parseInt(f.css("paddingLeft")),c=parseInt(f.css("borderTopWidth"))+parseInt(f.css("paddingTop"));e.pos=[a.left+b,a.top+c]},a(window).bind("resize."+c,e.updateSize).bind("resize."+c,e.updatePos),f.bind("mouseenter."+c,function(a){h=1}).bind("mouseleave."+c,function(a){h=2,i=[a.pageX,a.pageY]}),this.updateSize(),this.updatePos()}function o(a,c){var d=[],g=[],h=[],i=[];this.update=function(b){var c=[],e,f,j=2,k={};while(j--)g[j]&&(c[j]=g[j]*b[j]+h[j],d[j]?(e=i[j],f=c[j]*-1):(e=c[j]*100+"%",f=c[j]*this.size[j]*-1),j===0?(k.left=e,k.marginLeft=f):(k.top=e,k.marginTop=f));a.css(k)},this.setParallax=function(a,j,k,m){var n=[a||c.xparallax,j||c.yparallax],o=[k||c.xorigin,m||c.yorigin],p=2,q={};while(p--)d[p]=f.px.test(n[p]),typeof o[p]=="string"&&(o[p]=o[p]===b?1:e[o[p]]||l(o[p])),d[p]?(g[p]=parseInt(n[p]),h[p]=o[p]*(this.size[p]-g[p]),i[p]=o[p]*100+"%"):(g[p]=n[p]===!0?1:l(n[p]),h[p]=g[p]?o[p]*(1-g[p]):0)},this.getPointer=function(){var b=a.offsetParent(),c=a.position(),e=[],f=[],i=2;while(i--)d[i]?e[i]=0:e[i]=c[i===0?"left":"top"]/(b[i===0?"outerWidth":"outerHeight"]()-this.size[i]),f[i]=(e[i]-h[i])/g[i];return f},this.setSize=function(b,c){this.size=[b||a.outerWidth(),c||a.outerHeight()]},this.setSize(c.width,c.height),this.setParallax(c.xparallax,c.yparallax,c.xorigin,c.yorigin)}function p(b){var c=a(this),d=b.data.global,e=b.data.local,f=d.port,h=d.mouse,j=e.mouse,k=d.timeStamp!==b.timeStamp;k&&(d.timeStamp=b.timeStamp,f.update(i),(f.active||!h.ontarget)&&h.update(f.pointer,f.threshold)),j?(j.update(e.freeze?e.freeze.pointer:f.pointer,f.threshold),j.ontarget&&(delete e.mouse,e.freeze&&c.unbind(g).addClass(d.freezeClass)),h=j):h.ontarget&&!f.active&&c.unbind(g),e.layer.update(h.pointer)}var c="parallax",d={mouseport:"body",xparallax:!0,yparallax:!0,xorigin:.5,yorigin:.5,decay:.66,frameDuration:30,freezeClass:"freeze"},e={left:0,top:0,middle:.5,center:.5,right:1,bottom:1},f={px:/^\d+\s?px$/,percent:/^\d+\s?%$/},g="frame."+c,h=Math.abs,i=[0,0];j.lib=e,a.fn[c]=function(e){var f=a.extend({},a.fn[c].options,e),h=arguments,i=this,j=[];if(b===a.event.special.frame)throw"jquery.parallax requires jquery.event.frame.";return f.mouseport instanceof a||(f.mouseport=a(f.mouseport)),f.port=new n(f.mouseport,f),f.mouse=new m(k(f.xparallax),k(f.yparallax),f.decay),f.mouseport.bind("mouseenter",function(b){var d=i.length,e;f.mouse.ontarget=!1;while(d--)e=i[d],a.data(e,c).freeze||a.event.add(this,g,p,{global:f,local:j[d]})}),i.each(function(e){var i=a(this),n=h[e+1]?a.extend({},f,h[e+1]):f,q=new o(i,n),r={layer:q,mouse:new m(k(n.xparallax),k(n.yparallax),n.decay,q.getPointer())};i.data(c,r),j.push(r),a.event.add(this,"freeze",function(c){var d=a(this),e=c.data.global,f=c.data.local,h=f.mouse||f.freeze||e.mouse,i=i=[c.x===b?h.pointer[0]:l(c.x),c.y===b?h.pointer[1]:l(c.y)],j=c.decay;f.freeze={pointer:i},f.mouse=new m(k(e.xparallax),k(e.yparallax),e.decay,h.pointer),j!==b&&(f.mouse.decay=j),a.event.add(this,g,p,c.data)},{global:f,local:r}),a.event.add(this,"unfreeze",function(c){var e=a(this),f=c.data.global,h=c.data.local,i=c.decay,j;if(!h.freeze)return;j=h.mouse?h.mouse.pointer:h.freeze.pointer,h.mouse=new m(k(f.xparallax),k(f.yparallax),f),h.mouse.pointer=j,i!==b&&(h.mouse.decay=i),delete h.freeze,e.removeClass(d.freezeClass),a.event.add(this,g,p,c.data)},{global:f,local:r})})},a.fn[c].options=d,a(document).ready(function(){a(document).mousemove(function(a){i=[a.pageX,a.pageY]})})})(jQuery);