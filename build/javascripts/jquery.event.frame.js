// jquery.events.frame.js
// 1.1 - lite
// Stephen Band
// 
// Project home:
// webdev.stephband.info/events/frame/
//
// Source:
// http://github.com/stephband/jquery.event.frame
(function(a,b){function d(a,b){function e(){c.frameCount++,a.call(c)}var c=this,d;this.frameDuration=b||25,this.frameCount=-1,this.start=function(){e(),d=setInterval(e,this.frameDuration)},this.stop=function(){clearInterval(d),d=null}}function e(){var b=a.event.special.frame.handler,c=a.Event("frame"),d=this.array,e=d.length;c.frameCount=this.frameCount;while(e--)b.call(d[e],c)}var c;a.event.special.frame||(a.event.special.frame={setup:function(a,b){if(c)c.array.push(this);else{c=new d(e,a&&a.frameDuration),c.array=[this];var f=setTimeout(function(){c.start(),clearTimeout(f),f=null},0)}return},teardown:function(a){var d=c.array,e=d.length;while(e--)if(d[e]===this){d.splice(e,1);break}d.length===0&&(c.stop(),c=b);return},handler:function(b){a.event.handle.apply(this,arguments)}})})(jQuery);