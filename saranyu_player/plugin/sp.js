function checkMobile(){if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)||navigator.userAgent.match(/Mobile Safari/i)){return true}else{return false}}function SupportedMSE(){window.MediaSource=window.MediaSource||window.WebKitMediaSource;return(window.MediaSource&&typeof window.MediaSource.isTypeSupported==="function"&&window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'))}function checkHLS(){if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)){return true}try{var a=document.createElement("video");isSupp=a.canPlayType("application/vnd.apple.mpegURL");if((isSupp==(("probably"))||(isSupp==("maybe")))){sarannyuhasFlash=false;try{sarannyuhasFlash=Boolean(new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))}catch(b){sarannyuhasFlash=("undefined"!=typeof navigator.mimeTypes["application/x-shockwave-flash"])}if(!sarannyuhasFlash){return true}return false}return false}catch(c){return false}}function saranyuplayer(c,b,d){var e=false;a(d);function a(f){if(f.advertising){f.advertising.forEach(function(g){console.log(g.client);if((g.client=="googleima")||(g.client=="openx")){e=true;return}})}}saranyuplayertwo(c,b,d)}var html5js;function saranyuplayertwo(p,a,c){container1=a;object1=c;var o;var k;currentURLType=p;var d=document.getElementsByTagName("script");var h="";for(var e=0;e<d.length-1;e++){if(d[e].src.indexOf("sp.js")){h=d[e].src.split("/sp.js")[0]}}k=[h+"/../external/sp.jquery.hammer.js",h+"/../external/boostrap/bootstrap.min.js",h+"/../external/sp.owl.carousel.js",h+"/../external/hls.min.js",h+"/../external/dash.min.js"];if(checkMobile()){o=[h+"/../skins/sphlsdashmobile.css",h+"/../external/sp.owl.carousel.css"]}else{o=[h+"/../skins/sphlsdash.css",h+"/../external/sp.owl.carousel.css"]}html5js=h+"/../plugin/sphlsdash.js";var f=true;var b=document.createElement("script");b.type="text/javascript";b.src=k[0];document.body.appendChild(b);var n=document.createElement("script");n.type="text/javascript";n.src=k[1];var m=document.createElement("script");m.type="text/javascript";m.src=k[2];var l=document.createElement("script");l.type="text/javascript";l.src=k[3];var j=document.createElement("script");j.type="text/javascript";j.src=k[4];b.addEventListener("load",function(){jss=true;document.body.appendChild(n)});n.addEventListener("load",function(){if(jss){document.body.appendChild(m)}});m.addEventListener("load",function(){document.body.appendChild(l)});l.addEventListener("load",function(){document.body.appendChild(j)});j.addEventListener("load",function(){checkLicence(container1,object1)});for(var e=0;e<o.length;e++){var g=document.createElement("link");g.type="text/css";g.href=o[e];g.rel="stylesheet";document.body.appendChild(g)}}function checkBandwidth(){var a=navigator.connection||navigator.mozConnection||navigator.webkitConnection;var a=window.navigator.connection;if(!a){var b=a.type;var c=a.downlinkMax||a.bandwidth}}function checkMediaType(a){if(a.file[0].content_url==""){currentURLType="hls";return"hls"}if(a.file[0].content_url.indexOf("mpd")!=-1){currentURLType="mpd";return"mpd"}else{if(a.file[0].content_url.indexOf("m3u8")!=-1){currentURLType="hls";return"hls"}else{currentURLType="mp4";return"mp4"}}}function checkMediaURL(a){if(a.content_url==""){return"hls"}if(a.content_url.indexOf("mpd")!=-1){return"mpd"}else{if(a.content_url.indexOf("m3u8")!=-1){return"hls"}else{return"mp4"}}}var hlsPlayer;var htmlPlayer;function checkLicence(a,b){generatePlayer(a,b)}function generatePlayer(a,b){var c=document.createElement("script");c.type="text/javascript";c.src=html5js;document.body.appendChild(c);c.addEventListener("load",function(){if(checkMobile()&&checkMediaType(b)=="mpd"){hlsPlayer=new SaranyuHlsHTML5Player.MediaPlayer(a,b,"mpd")}else{if(checkMobile()&&checkMediaType(b)=="hls"&&SupportedMSE()){hlsPlayer=new SaranyuHlsHTML5Player.MediaPlayer(a,b,"hls")}else{if(checkMediaType(b)=="mpd"){hlsPlayer=new SaranyuHlsHTML5Player.MediaPlayer(a,b,"mpd")}else{if(checkMobile()||checkMediaType(b)=="mp4"){hlsPlayer=new SaranyuHlsHTML5Player.MediaPlayer(a,b,"mp4")}else{hlsPlayer=new SaranyuHlsHTML5Player.MediaPlayer(a,b,"hls")}}}}try{createEventCallBacks()}catch(d){}})};