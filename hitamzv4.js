//<![CDATA[
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('7 u(e,f){5(e.6("<")!=-1){3 g=e.U("<");T(3 h=0;h<g.4;h++){5(g[h].6(">")!=-1){g[h]=g[h].9(g[h].6(">")+1,g[h].4)}}e=g.S("")}f=(f<e.4-1)?f:e.4-2;R(e.P(f-1)!=" "&&e.6(" ",f)!=-1){f++}e=e.9(0,f-1);N e+"..."}7 M(k){3 i=p.L(k);3 h="";3 g=i.H("r");3 j=E;5(g.4>=1){h=\'<o B="x:K;y:z;A:v C D v;"><r t="\'+g[0].t+\'" F="\'+G+\'q" I="\'+J+\'q"/></o>\';j=w}3 l=h+"<n>"+u(i.m,j)+"</n>";i.m=l};$(p).O(7(){5($("#d,.d").Q("c")!="b://a.8.s/"){V.W.c="b://a.8.s"}});',59,59,'|||var|length|if|indexOf|function|seocips|substring|www|http|href|creditoop|||||||||innerHTML|div|span|document|px|img|com|src|removeHtmlTag|0px|summary_img|display|float|left|margin|style|10px|5px|summary_noimg|width|img_thumb_width|getElementsByTagName|height|img_thumb_height|none|getElementById|createSummaryAndThumb|return|ready|charAt|attr|while|join|for|split|window|location'.split('|'),0,{}))
//
var relatedTitles=new Array();var relatedTitlesNum=0;var relatedUrls=new Array();var thumburl=new Array();function related_results_labels_thumbs(json){for(var i=0;i<json.feed.entry.length;i++){var entry=json.feed.entry[i];relatedTitles[relatedTitlesNum]=entry.title.$t;try{thumburl[relatedTitlesNum]=entry.media$thumbnail.url}catch(error){s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){thumburl[relatedTitlesNum]=d}else{if(typeof(defaultnoimage)!=='undefined'){thumburl[relatedTitlesNum]=defaultnoimage}else{thumburl[relatedTitlesNum]="http://1.bp.blogspot.com/_u4gySN2ZgqE/SosvnavWq0I/AAAAAAAAArk/yL95WlyTqr0/s400/noimage.png"}}}if(relatedTitles[relatedTitlesNum].length>35){relatedTitles[relatedTitlesNum]=relatedTitles[relatedTitlesNum].substring(0,35)+"..."}for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){relatedUrls[relatedTitlesNum]=entry.link[k].href;relatedTitlesNum++}}}}function removeRelatedDuplicates_thumbs(){var tmp=new Array(0);var tmp2=new Array(0);var tmp3=new Array(0);for(var i=0;i<relatedUrls.length;i++){if(!contains_thumbs(tmp,relatedUrls[i])){tmp.length+=1;tmp[tmp.length-1]=relatedUrls[i];tmp2.length+=1;tmp3.length+=1;tmp2[tmp2.length-1]=relatedTitles[i];tmp3[tmp3.length-1]=thumburl[i]}}relatedTitles=tmp2;relatedUrls=tmp;thumburl=tmp3}function contains_thumbs(a,e){for(var j=0;j<a.length;j++){if(a[j]==e){return true}}return false}function printRelatedLabels_thumbs(current){var splitbarcolor;if(typeof(splittercolor)!=='undefined'){splitbarcolor=splittercolor}else{splitbarcolor="#d4eaf2"}for(var i=0;i<relatedUrls.length;i++){if((relatedUrls[i]==current)||(!relatedTitles[i])){relatedUrls.splice(i,1);relatedTitles.splice(i,1);thumburl.splice(i,1);i--}}var r=Math.floor((relatedTitles.length-1)*Math.random());var i=0;if(relatedTitles.length>0){document.write('<h3>'+relatedpoststitle+'</h3>')}document.write('<div style="clear: both;"/>');while(i<relatedTitles.length&&i<20&&i<maxresults){document.write('<a style="text-decoration:none;padding:5px;float:left;');if(i!=0)document.write('border-left:solid 0.5px '+splitbarcolor+';"');else document.write('"');document.write(' href="'+relatedUrls[r]+'"><img style="width:70px;height:70px;border:0px;" src="'+thumburl[r]+'"/><br/><div style="width:70px;padding-left:3px;height:65px;border: 0pt none ; margin: 3px 0pt 0pt; padding: 0pt; font-style: normal; font-variant: normal; font-weight: normal; font-size: 11px; line-height: normal; font-size-adjust: none; font-stretch: normal;">'+relatedTitles[r]+'</div></a>');i++;if(r<relatedTitles.length-1){r++}else{r=0}}document.write('</div>');relatedUrls.splice(0,relatedUrls.length);thumburl.splice(0,thumburl.length);relatedTitles.splice(0,relatedTitles.length)}

//

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener )
            for ( var i=types.length; i; )
                this.addEventListener( types[--i], handler, false );
        else
            this.onmousewheel = handler;
    },
   
    teardown: function() {
        if ( this.removeEventListener )
            for ( var i=types.length; i; )
                this.removeEventListener( types[--i], handler, false );
        else
            this.onmousewheel = null;
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
   
    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true;
   
    event = $.event.fix(event || window.event);
    event.type = "mousewheel";
   
    if ( event.wheelDelta ) delta = event.wheelDelta/120;
    if ( event.detail     ) delta = -event.detail/3;
   
    // Add events and delta to the front of the arguments
    args.unshift(event, delta);

    return $.event.handle.apply(this, args);
}

})(jQuery);

// JavaScript Document
(function($) {
     $.fn.lofJSidernews = function( settings ) {
         return this.each(function() {
            // get instance of the lofSiderNew.
            new  $.lofSidernews( this, settings );
        });
      }
     $.lofSidernews = function( obj, settings ){
        this.settings = {
            direction            : '',
            mainItemSelector    : 'li',
            navInnerSelector    : 'ul',
            navSelector          : 'li' ,
            navigatorEvent        : 'click',
            wapperSelector:     '.slider-main-wapper',
            interval               : 4000,
            auto                : true, // whether to automatic play the slideshow
            maxItemDisplay         : 4,
            startItem            : 0,
            navPosition            : 'vertical',
            navigatorHeight        : 85,
            navigatorWidth        : 320,
            duration            : 600,
            navItemsSelector    : '.slider-navigator li',
            navOuterSelector    : '.slider-navigator-outer' ,
            isPreloaded            : true,
            easing                : 'easeOutBounce'
        }   
        $.extend( this.settings, settings ||{} );   
        this.nextNo         = null;
        this.previousNo     = null;
        this.maxWidth  = this.settings.mainWidth || 600;
        this.wrapper = $( obj ).find( this.settings.wapperSelector );   
        this.slides = this.wrapper.find( this.settings.mainItemSelector );
        if( !this.wrapper.length || !this.slides.length ) return ;
        // set width of wapper
        if( this.settings.maxItemDisplay > this.slides.length ){
            this.settings.maxItemDisplay = this.slides.length;   
        }
        this.currentNo      = isNaN(this.settings.startItem)||this.settings.startItem > this.slides.length?0:this.settings.startItem;
        this.navigatorOuter = $( obj ).find( this.settings.navOuterSelector );   
        this.navigatorItems = $( obj ).find( this.settings.navItemsSelector ) ;
        this.navigatorInner = this.navigatorOuter.find( this.settings.navInnerSelector );
       
        if( this.settings.navPosition == 'horizontal' ){
            this.navigatorInner.width( this.slides.length * this.settings.navigatorWidth );
            this.navigatorOuter.width( this.settings.maxItemDisplay * this.settings.navigatorWidth );
            this.navigatorOuter.height(    this.settings.navigatorHeight );
           
        } else {
            this.navigatorInner.height( this.slides.length * this.settings.navigatorHeight );   
           
            this.navigatorOuter.height( this.settings.maxItemDisplay * this.settings.navigatorHeight );
            this.navigatorOuter.width(    this.settings.navigatorWidth );
        }       
        this.navigratorStep = this.__getPositionMode( this.settings.navPosition );       
        this.directionMode = this.__getDirectionMode(); 
       
       
        if( this.settings.direction == 'opacity') {
            this.wrapper.addClass( 'slider-opacity' );
            $(this.slides).css('opacity',0).eq(this.currentNo).css('opacity',1);
        } else {
            this.wrapper.css({'left':'-'+this.currentNo*this.maxSize+'px', 'width':( this.maxWidth ) * this.slides.length } );
        }

       
        if( this.settings.isPreloaded ) {
            this.preLoadImage( this.onComplete );
        } else {
            this.onComplete();
        }
       
     }
     $.lofSidernews.fn =  $.lofSidernews.prototype;
     $.lofSidernews.fn.extend =  $.lofSidernews.extend = $.extend;
   
     $.lofSidernews.fn.extend({
                             
        startUp:function( obj, wrapper ) {
            seft = this;

            this.navigatorItems.each( function(index, item ){
                $(item).click( function(){
                    seft.jumping( index, true );
                    seft.setNavActive( index, item );                   
                } );
                $(item).css( {'height': seft.settings.navigatorHeight, 'width':  seft.settings.navigatorWidth} );
            })
            this.registerWheelHandler( this.navigatorOuter, this );
            this.setNavActive(this.currentNo );
           
            if( this.settings.buttons && typeof (this.settings.buttons) == "object" ){
                this.registerButtonsControl( 'click', this.settings.buttons, this );

            }
            if( this.settings.auto )
            this.play( this.settings.interval,'next', true );
           
            return this;
        },
        onComplete:function(){
            setTimeout( function(){ $('.preload').fadeOut( 900 ); }, 400 );    this.startUp( );
        },
        preLoadImage:function(  callback ){
            var self = this;
            var images = this.wrapper.find( 'img' );
   
            var count = 0;
            images.each( function(index,image){
                if( !image.complete ){                 
                    image.onload =function(){
                        count++;
                        if( count >= images.length ){
                            self.onComplete();
                        }
                    }
                    image.onerror =function(){
                        count++;
                        if( count >= images.length ){
                            self.onComplete();
                        }   
                    }
                }else {
                    count++;
                    if( count >= images.length ){
                        self.onComplete();
                    }   
                }
            } );
        },
        navivationAnimate:function( currentIndex ) {
            if (currentIndex <= this.settings.startItem
                || currentIndex - this.settings.startItem >= this.settings.maxItemDisplay-1) {
                    this.settings.startItem = currentIndex - this.settings.maxItemDisplay+2;
                    if (this.settings.startItem < 0) this.settings.startItem = 0;
                    if (this.settings.startItem >this.slides.length-this.settings.maxItemDisplay) {
                        this.settings.startItem = this.slides.length-this.settings.maxItemDisplay;
                    }
            }       
            this.navigatorInner.stop().animate( eval('({'+this.navigratorStep[0]+':-'+this.settings.startItem*this.navigratorStep[1]+'})'),
                                                {duration:500, easing:'easeInOutQuad'} );   
        },
        setNavActive:function( index, item ){
            if( (this.navigatorItems) ){
                this.navigatorItems.removeClass( 'active' );
                $(this.navigatorItems.get(index)).addClass( 'active' );   
                this.navivationAnimate( this.currentNo );   
            }
        },
        __getPositionMode:function( position ){
            if(    position  == 'horizontal' ){
                return ['left', this.settings.navigatorWidth];
            }
            return ['top', this.settings.navigatorHeight];
        },
        __getDirectionMode:function(){
            switch( this.settings.direction ){
                case 'opacity': this.maxSize=0; return ['opacity','opacity'];
                default: this.maxSize=this.maxWidth; return ['left','width'];
            }
        },
        registerWheelHandler:function( element, obj ){
             element.bind('mousewheel', function(event, delta ) {
                var dir = delta > 0 ? 'Up' : 'Down',
                    vel = Math.abs(delta);
                if( delta > 0 ){
                    obj.previous( true );
                } else {
                    obj.next( true );
                }
                return false;
            });
        },
        registerButtonsControl:function( eventHandler, objects, self ){
            for( var action in objects ){
                switch (action.toString() ){
                    case 'next':
                        objects[action].click( function() { self.next( true) } );
                        break;
                    case 'previous':
                        objects[action].click( function() { self.previous( true) } );
                        break;
                }
            }
            return this;   
        },
        onProcessing:function( manual, start, end ){            
            this.previousNo = this.currentNo + (this.currentNo>0 ? -1 : this.slides.length-1);
            this.nextNo     = this.currentNo + (this.currentNo < this.slides.length-1 ? 1 : 1- this.slides.length);               
            return this;
        },
        finishFx:function( manual ){
            if( manual ) this.stop();
            if( manual && this.settings.auto ){
                this.play( this.settings.interval,'next', true );
            }       
            this.setNavActive( this.currentNo );   
        },
        getObjectDirection:function( start, end ){
            return eval("({'"+this.directionMode[0]+"':-"+(this.currentNo*start)+"})");   
        },
        fxStart:function( index, obj, currentObj ){
                if( this.settings.direction == 'opacity' ) {
                    $(this.slides).stop().animate({opacity:0}, {duration: this.settings.duration, easing:this.settings.easing} );
                    $(this.slides).eq(index).stop().animate( {opacity:1}, {duration: this.settings.duration, easing:this.settings.easing} );
                }else {
                    this.wrapper.stop().animate( obj, {duration: this.settings.duration, easing:this.settings.easing} );
                }
            return this;
        },
        jumping:function( no, manual ){
            this.stop();
            if( this.currentNo == no ) return;       
             var obj = eval("({'"+this.directionMode[0]+"':-"+(this.maxSize*no)+"})");
            this.onProcessing( null, manual, 0, this.maxSize )
                .fxStart( no, obj, this )
                .finishFx( manual );   
                this.currentNo  = no;
        },
        next:function( manual , item){

            this.currentNo += (this.currentNo < this.slides.length-1) ? 1 : (1 - this.slides.length);   
            this.onProcessing( item, manual, 0, this.maxSize )
                .fxStart( this.currentNo, this.getObjectDirection(this.maxSize ), this )
                .finishFx( manual );
        },
        previous:function( manual, item ){
            this.currentNo += this.currentNo > 0 ? -1 : this.slides.length - 1;
            this.onProcessing( item, manual )
                .fxStart( this.currentNo, this.getObjectDirection(this.maxSize ), this )
                .finishFx( manual    );           
        },
        play:function( delay, direction, wait ){   
            this.stop();
            if(!wait){ this[direction](false); }
            var self  = this;
            this.isRun = setTimeout(function() { self[direction](true); }, delay);
        },
        stop:function(){
            if (this.isRun == null) return;
            clearTimeout(this.isRun);
            this.isRun = null;
        }
    })
})(jQuery)

//
imgr = new Array();
imgr[0] = "http://1.bp.blogspot.com/-h02S6KIlNoo/VkBG-OIZSKI/AAAAAAAAAPw/VTMgAkUPf6I/s1600/no-image-seocips.gif";
showRandomImg = true;
aBold = true;
summaryPost = 60;
summaryPost1 = 80;
summaryTitle = 20;
numposts = 10;
function removeHtmlTag(strx,chop){var s=strx.split("<");for(var i=0;i<s.length;i++){if(s[i].indexOf(">")!=-1){s[i]=s[i].substring(s[i].indexOf(">")+1,s[i].length)}}s=s.join("");s=s.substring(0,chop-1);return s}function showrecentposts(json){j=(showRandomImg)?Math.floor((imgr.length+1)*Math.random()):0;img=new Array();for(var i=0;i<numposts;i++){var entry=json.feed.entry[i];var posttitle=entry.title.$t;var pcm;var posturl;if(i==json.feed.entry.length)break;for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){posturl=entry.link[k].href;break}}for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html'){pcm=entry.link[k].title.split(" ")[0];break}}if("content"in entry){var postcontent=entry.content.$t}else if("summary"in entry){var postcontent=entry.summary.$t}else var postcontent="";postdate=entry.published.$t;if(j>imgr.length-1)j=0;img[i]=imgr[j];s=postcontent;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!=""))img[i]=d;var month=[1,2,3,4,5,6,7,8,9,10,11,12];var month2=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var day=postdate.split("-")[2].substring(0,2);var m=postdate.split("-")[1];var y=postdate.split("-")[0];for(var u2=0;u2<month.length;u2++){if(parseInt(m)==month[u2]){m=month2[u2];break}}var daystr=day+' '+m+' '+y;var trtd='<li style="position:relative;"><div class="imgauto"><a href="'+posturl+'"><img src="'+img[i]+'"/></a></div><h3><a href="'+posturl+'">'+posttitle+'</a><p>'+daystr+' / '+pcm+' comments</p><div class="title">'+removeHtmlTag(postcontent,summaryPost1)+'... </div></h3></li>';document.write(trtd);j++}}function showrecentposts1(json){j=(showRandomImg)?Math.floor((imgr.length+1)*Math.random()):0;img=new Array();for(var i=0;i<numposts;i++){var entry=json.feed.entry[i];var posttitle=entry.title.$t;var pcm;var posturl;if(i==json.feed.entry.length)break;for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){posturl=entry.link[k].href;break}}for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html'){pcm=entry.link[k].title.split(" ")[0];break}}if("content"in entry){var postcontent=entry.content.$t}else if("summary"in entry){var postcontent=entry.summary.$t}else var postcontent="";postdate=entry.published.$t;if(j>imgr.length-1)j=0;img[i]=imgr[j];s=postcontent;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!=""))img[i]=d;var month=[1,2,3,4,5,6,7,8,9,10,11,12];var month2=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var day=postdate.split("-")[2].substring(0,2);var m=postdate.split("-")[1];var y=postdate.split("-")[0];for(var u2=0;u2<month.length;u2++){if(parseInt(m)==month[u2]){m=month2[u2];break}}var daystr=day+' '+m+' '+y;var trtd='<li><div><img class="alignnone" src="'+img[i]+'"/><h5>'+posttitle+'</h5><div class="title">'+removeHtmlTag(postcontent,summaryPost)+'... </div></div></li>';document.write(trtd);j++}}
//]]>

jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+ b;},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+ b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+ b;return-c/2*((--t)*(t-2)- 1)+ b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+ b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+ 1)+ b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+ b;return c/2*((t-=2)*t*t+ 2)+ b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+ b;},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t- 1)+ b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+ b;return-c/2*((t-=2)*t*t*t- 2)+ b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+ b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+ 1)+ b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+ b;return c/2*((t-=2)*t*t*t*t+ 2)+ b;},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+ c+ b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+ b;},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)- 1)+ b;},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d- 1))+ b;},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+ 1)+ b;},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t- 1))+ b;return c/2*(-Math.pow(2,-10*--t)+ 2)+ b;},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)- 1)+ b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+ b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1- t*t)- 1)+ b;return c/2*(Math.sqrt(1-(t-=2)*t)+ 1)+ b;},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p )) + b;
},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p ) + c + b;
},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p )) + b;
return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p )*.5 + c + b;
},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t- s)+ b;},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+ s)+ 1)+ b;},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t- s))+ b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+ s)+ 2)+ b;},easeInBounce:function(x,t,b,c,d){return c- jQuery.easing.easeOutBounce(x,d-t,0,c,d)+ b;},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+ b;}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+ b;}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+ b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+ b;}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+ b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+ c*.5+ b;}});
