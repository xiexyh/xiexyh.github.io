// build time:Sun Oct 04 2020 15:43:20 GMT+0800 (GMT+08:00)
var e={version:"0.1.8",hostname:"www.xieyihui.top",root:"/",statics:"/",favicon:{normal:"images/favicon.ico",hidden:"images/failure.ico"},js:{valine:"js/valine.js",chart:"npm/frappe-charts@1.5.0/dist/frappe-charts.min.iife.min.js",copy_tex:"npm/katex@0/dist/contrib/copy-tex.min.js",mediumzoom:"npm/medium-zoom@1.0.5/dist/medium-zoom.min.js"},css:{valine:"css/comment.css",katex:"npm/katex@0/dist/katex.min.css",mermaid:"css/mermaid.css"},search:{appID:"PWLYK4UQNS",apiKey:"33f90be7dfa34c02cb4b0df7ac885598",indexName:"index",hits:{per_page:10}},valine:{appId:"Rz1ovWlG9E3TJd18o28XkNAh-MdYXbMMI",appKey:"OfvjUx9Hc33Rn2VAKhPcjoSy",placeholder:"ヽ(○´∀`)ﾉ♪",avatar:"mp",pageSize:10,lang:"zh-CN",visitor:true,recordIP:true,serverURLs:null,requiredFields:["nick"],enableQQ:true,notify:true,masters:["主人email的MD5值","另一个email的MD5值"],masterTag:"主人",tips:"昵称框中填入QQ号，将自动获取QQ昵称&邮箱&头像；其他邮箱由Gavatar提供头像。"},quicklink:{timeout:3e3,priority:true},audio:["https://music.163.com/#/playlist?id=2031842656","https://music.163.com/song?id=1387098940","https://music.163.com/#/playlist?id=2088001742","https://www.xiami.com/collect/250830668","https://y.qq.com/n/yqq/playsquare/3535982902.html"]};const t=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};const i=function(){return u("main > .inner").offsetHeight};const n=function(e,t,i){if(i){t()}else{var n=document.createElement("script");n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState)){n.onload=n.onreadystatechange=null;n=undefined;if(!i&&t)setTimeout(t,0)}};n.src=e;document.head.appendChild(n)}};const a=function(t,i){return(e[t][i].indexOf("npm")>-1?"//cdn.jsdelivr.net/":m)+e[t][i]};const s=function(e,t,i){if(LOCAL[e]){n(a("js",e),t||function(){window[e]=true},i||window[e])}};const r=function(e,t){if(window["css"+e])return;if(LOCAL[e]){document.head.createChild("link",{rel:"stylesheet",href:a("css",e)});window["css"+e]=true}};const c=function(e){var t=e.text||e.textContent||e.innerHTML||"";var i=e.parentNode;i.removeChild(e);var n=document.createElement("script");if(e.id){n.id=e.id}if(e.className){n.className=e.className}if(e.type){n.type=e.type}if(e.src){n.src=e.src;n.async=false}if(e.dataset.pjax!==undefined){n.dataset.pjax=""}if(t!==""){n.appendChild(document.createTextNode(t))}i.appendChild(n)};const o=function(e,t,i){e&&Velocity(e,"scroll",{duration:500,easing:"easeOutQuart",offset:t||-q,complete:i||function(){}})};const l=function(e,t){var i=e.toString();while(i.length<t){i="0"+i}return i};const d=function(e){var t=l(e.getDate(),2);var i=l(e.getMonth()+1,2);var n=l(e.getFullYear(),2);var a=l(e.getHours(),2);var s=l(e.getMinutes(),2);var r=l(e.getSeconds(),2);return n+"-"+i+"-"+t+" "+a+":"+s+":"+r};const u=function(e,t){t=t||document;if(e.indexOf("#")===0){return t.getElementById(e.replace("#",""))}return t.querySelector(e)};u.all=function(e,t){t=t||document;return t.querySelectorAll(e)};u.each=function(e,t,i){return u.all(e,i).forEach(t)};Object.assign(HTMLElement.prototype,{createChild:function(e,t){var i=document.createElement(e);Object.assign(i,t);this.appendChild(i);return i},wrap:function(e){var t=document.createElement("div");Object.assign(t,e);this.parentNode.insertBefore(t,this);this.parentNode.removeChild(this);t.appendChild(this)},height:function(e){if(e){this.style.height=typeof e=="number"?e+"rem":e}return this.getBoundingClientRect().height},width:function(e){if(e){this.style.width=typeof e=="number"?e+"rem":e}return this.getBoundingClientRect().width},top:function(){return this.getBoundingClientRect().top},left:function(){return this.getBoundingClientRect().left},attr:function(e,t){if(t===null){return this.removeAttribute(e)}if(t){return this.setAttribute(e,t)}else{return this.getAttribute(e)}},insertAfter:function(e){var t=this.parentNode;if(t.lastChild==this){t.appendChild(e)}else{t.insertBefore(e,this.nextSibling)}},display:function(e){if(e==null){return this.style.display}else{this.style.display=e}},child:function(e){return u(e,this)},find:function(e){return u.all(e,this)},_class:function(e,t,i){var n=t.indexOf(" ")?t.split(" "):[t];var a=this;n.forEach(function(t){if(e=="toggle"){a.classList.toggle(t,i)}else{a.classList[e](t)}})},addClass:function(e){this._class("add",e);return this},removeClass:function(e){this._class("remove",e);return this},toggleClass:function(e,t){this._class("toggle",e,t);return this},hasClass:function(e){return this.classList.contains(e)}});const f={get:function(e){return localStorage.getItem(e)},set:function(e,t){localStorage.setItem(e,t);return t},del:function(e){localStorage.removeItem(e)}};const h=function(e){var t=this,i={type:"audio",mode:"random",btns:["play-pause","music"],events:{"play-pause":function(e){if(t.media.source.paused){t.media.play()}else{t.media.pause()}},music:function(e){if(t.media.list.hasClass("show")){t.media.hideList()}else{t.media.list.addClass("show");t.media.scroll();t.media.changeTitle()}}}};var n={random:function(e){return Math.floor(Math.random()*e)},parse:function(e){var t=[];[["music.163.com.*song.*id=(\\d+)","netease","song"],["music.163.com.*album.*id=(\\d+)","netease","album"],["music.163.com.*artist.*id=(\\d+)","netease","artist"],["music.163.com.*playlist.*id=(\\d+)","netease","playlist"],["music.163.com.*discover/toplist.*id=(\\d+)","netease","playlist"],["y.qq.com.*song/(\\w+).html","tencent","song"],["y.qq.com.*album/(\\w+).html","tencent","album"],["y.qq.com.*singer/(\\w+).html","tencent","artist"],["y.qq.com.*playsquare/(\\w+).html","tencent","playlist"],["y.qq.com.*playlist/(\\w+).html","tencent","playlist"],["xiami.com.*song/(\\w+)","xiami","song"],["xiami.com.*album/(\\w+)","xiami","album"],["xiami.com.*artist/(\\w+)","xiami","artist"],["xiami.com.*collect/(\\w+)","xiami","playlist"]].forEach(function(i){var n=new RegExp(i[0]);var a=n.exec(e);if(a!==null){t=[i[1],i[2],a[1]]}});return t},fetch:function(e,t){var i=[];return new Promise(function(t,a){e.forEach(function(e){var a=n.parse(e);var s=JSON.stringify(a);var r=f.get(s);if(r){i.push.apply(i,JSON.parse(r));t(i)}else{fetch("https://api.i-meto.com/meting/api?server="+a[0]+"&type="+a[1]+"&id="+a[2]+"&r="+Math.random()).then(function(e){return e.json()}).then(function(e){f.set(s,JSON.stringify(e));i.push.apply(i,e);t(i)}).catch(function(e){})}})})},lrc:function(e){if(e){e=e.replace(/([^\]^\n])\[/g,function(e,t){return t+"\n["});const t=e.split("\n");var i=[];const n=t.length;for(var a=0;a<n;a++){const s=t[a].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g);const r=t[a].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g,"").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g,"").replace(/^\s+|\s+$/g,"");if(s){const c=s.length;for(var o=0;o<c;o++){const l=/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(s[o]);const d=l[1]*60;const u=parseInt(l[2]);const f=l[4]?parseInt(l[4])/((l[4]+"").length===2?100:1e3):0;const h=d+u+f;i.push([h,r])}}}i=i.filter(function(e){return e[1]});i.sort(function(e,t){return e[0]-t[0]});return i}else{return[]}}};t.media={pointer:-1,loaded:false,source:null,buttons:{},playlist:[],lrc:{},fetch:function(e){var i=this;e=e||function(){};if(!this.loaded){n.fetch(this.options.rawList).then(function(n){i.playlist=n;a.list();i.setMode(t.media.options.mode);i.loaded=true;e()})}else{e()}},load:function(e){if(e){if(this.options.rawList!==e){this.options.rawList=e;if(this.loaded){this.loaded=false;this.fetch()}}}},setMode:function(e){var i=this.playlist.length;if(!i)return;var a=function(e){if(e+1==i){e=-1}t.media.pointer=++e};switch(e){case"random":var s=n.random(i);if(this.pointer!==s){this.pointer=s}else{a(this.pointer)}break;case"next":a(this.pointer);break}this.setSource()},setCurrent:function(e){if(typeof e=="number"&&e!=this.pointer&&this.playlist[e]&&!this.playlist[e]["error"]){this.pointer=e;this.setSource()}},setSource:function(){var e=this.playlist[this.pointer];if(e["error"]){this.setMode("next");return}var t=false;if(!this.source.paused){t=true;this.stop()}this.source.attr("src",e.url);this.source.attr("title",e.title+" - "+e.author);a.progress();a.preview();if(t==true){this.play()}},play:function(){if(this.playlist[this.pointer]["error"]){this.setMode("next");return}var e=this;this.source.play().then(function(){e.changeTitle()}).catch(function(e){})},pause:function(){this.source.pause();document.title=g},stop:function(){this.source.pause();this.source.currentTime=0;document.title=g},scroll:function(){var e=this.list.find("li")[this.pointer];Velocity(e,"scroll",{container:e.parentNode})},scrollLrc:function(e){var t=this;if(!this.lrc.data)return;if(this.lrc.index>this.lrc.data.length-1||e<this.lrc.data[this.lrc.index][0]||(!this.lrc.data[this.lrc.index+1]||e>=this.lrc.data[this.lrc.index+1][0])){for(var i=0;i<this.lrc.data.length;i++){if(e>=this.lrc.data[i][0]&&(!this.lrc.data[i+1]||e<this.lrc.data[i+1][0])){t.lrc.index=i;var n=-(t.lrc.index-1);t.lrc.el.style.transform="translateY("+n+"rem)";t.lrc.el.style.webkitTransform="translateY("+n+"rem)";t.lrc.el.getElementsByClassName("current")[0].removeClass("current");t.lrc.el.getElementsByTagName("p")[i].addClass("current")}}}},hideList:function(){var e=this.list;e.addClass("hide");window.setTimeout(function(){e.removeClass("show hide")},300)},changeTitle:function(){if(!this.source.paused)document.title="Now Playing..."+this.playlist[this.pointer]["title"]+" - "+this.playlist[this.pointer]["author"]+" | "+g}};var a={button:function(e){if(!t.media.buttons[e]){var i=document.createElement("div");i.addClass(e+" btn");i.addEventListener("click",function(){t.media.fetch(t.media.options.events[e])});t.appendChild(i);t.media.buttons[e]=i}},audio:function(){if(!t.media.source){var e=document.createElement("audio");e.addEventListener("error",function(){t.media.list.find("li")[t.media.pointer].addClass("error");t.media.playlist[t.media.pointer]["error"]=true;t.media.setMode("next")});e.addEventListener("play",function(){t.addClass("playing");t.media.list.addClass("playing");_(e.attr("title"))});e.addEventListener("pause",function(){t.removeClass("playing");t.media.list.removeClass("playing")});e.addEventListener("timeupdate",function(){var i=Math.floor(e.currentTime/e.duration*100);t.media.progress.width(i+"%");if(t.media.lrc){t.media.scrollLrc(e.currentTime)}if(i==100){t.media.setMode("next");t.media.play()}});t.appendChild(e);t.media.source=e}},info:function(){if(!t.media.list){var e=document.createElement("div");e.addClass("play-list");e.innerHTML='<div class="preview"></div><ol></ol>';t.media.list=e;t.insertAfter(e);u("#main").addEventListener("click",function(){t.media.hideList()})}},list:function(){var e=t.media.list.child("ol");e.innerHTML="";t.media.playlist.forEach(function(i,n){var a=document.createElement("li");a.innerHTML='<span class="info"><span>'+i.title+"</span><span>"+i.author+"</span></span>";a.title=i.title+" - "+i.author;a.addEventListener("click",function(e){var i=e.currentTarget;if(t.media.pointer===n&&t.media.progress){if(t.media.source.paused){t.media.play()}else{t.media.source.currentTime=t.media.source.duration*Math.floor(e.clientX-i.left())/i.width()}return}t.media.setCurrent(n);t.media.play()});e.appendChild(a)})},progress:function(){if(t.media.progress){t.media.progress.parentNode.removeClass("current");t.media.progress.remove()}var e=t.media.list.find("li")[t.media.pointer];if(e){var i=document.createElement("div");i.addClass("progress");e.appendChild(i);t.media.progress=i;e.addClass("current");t.media.scroll()}},preview:function(){var e=t.media.list.child(".preview");var i=t.media.playlist[t.media.pointer];e.innerHTML='<div class="cover"><div class="disc"><img src="'+i.pic+'" class="blur" /></div></div>'+'<div class="info"><h4 class="title">'+i.title+"</h4><span>"+i.author+'</span><div class="lrc"></div></div>';var a="";fetch(i.lrc).then(function(e){return e.text()}).then(function(s){if(i!==t.media.playlist[t.media.pointer])return;t.media.lrc.data=n.lrc(s);var r="";t.media.lrc.data.forEach(function(e,t){a+="<p"+(t===0?' class="current"':"")+">"+e[1]+"</p>"});var c=document.createElement("div");c.addClass("inner");c.innerHTML=a;e.child(".lrc").innerHTML="";e.child(".lrc").appendChild(c);t.media.lrc.el=c;t.media.lrc.index=0}).catch(function(e){});e.child(".cover").addEventListener("click",t.media.options.events["play-pause"])}},s=function(e){if(t.media.created)return;t.media.options=Object.assign(i,e);t.media.options.btns.forEach(a.button);a[t.media.options.type]();a.info();t.media.created=true};s(e)};Object.assign(HTMLElement.prototype,{player:h});var m=e.statics.indexOf("//")>0?e.statics:e.root;var p={x:"undefined",y:"undefined"};var v=0;var g,y;const C=document.getElementsByTagName("body")[0];const w=document.documentElement;const b=u("#container");const L=u("#loading");const x=u("#nav");const k=u("#header");const E=x.child(".toggle");const T=u("#quick");const N=u("#sidebar");const M=u("#brand");var O=u("#tool"),I,A,H,S;var j=u("#search");var q,R,V;var D=0;const B={timer:null,lock:false,show:function(){clearTimeout(this.timer);document.body.removeClass("loaded");Velocity(L,"fadeIn",{complete:function(){B.lock=false}})},hide:function(e){this.timer=setTimeout(this.vanish,e||3e3)},vanish:function(){if(B.lock)return;Velocity(L,"fadeOut");document.body.addClass("loaded");B.lock=true}};const Y=function(e){var t=u(".theme .ic");if(e){w.attr("data-theme",e);t.removeClass("i-sun");t.addClass("i-moon")}else{w.attr("data-theme",null);t.removeClass("i-moon");t.addClass("i-sun")}};const z=function(e){if(w.attr("data-theme")=="dark")e="#222";u('meta[name="theme-color"]').attr("content",e)};const U=function(){window.matchMedia("(prefers-color-scheme: dark)").addListener(function(e){if(e.matches){Y("dark")}else{Y()}});var e=f.get("theme");if(e){Y(e)}u(".theme").addEventListener("click",function(e){var t=e.currentTarget.child(".ic");var i=C.createChild("div",{id:"neko",innerHTML:'<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'});var n=function(){setTimeout(function(){Velocity(i,"fadeOut",{complete:function(){C.removeChild(i)}})},2500)};if(t.hasClass("i-sun")){Velocity(i,"fadeIn",{complete:function(){i.addClass("dark");Y("dark");f.set("theme","dark");n()}})}else{i.addClass("dark");Velocity(i,"fadeIn",{complete:function(){i.removeClass("dark");Y();f.del("theme");n()}})}})};const Q=function(){document.addEventListener("visibilitychange",function(){switch(document.visibilityState){case"hidden":u('[rel="icon"]').attr("href",m+e.favicon.hidden);document.title=LOCAL.favicon.hide;B.show();clearTimeout(y);break;case"visible":u('[rel="icon"]').attr("href",m+e.favicon.normal);document.title=LOCAL.favicon.show;B.hide(1e3);y=setTimeout(function(){document.title=g},2e3);break}})};const _=function(e){if(!e)return;var t=C.createChild("div",{innerHTML:e,className:"tip"});setTimeout(function(){t.addClass("hide");setTimeout(function(){C.removeChild(t)},300)},3e3)};const P=function(e){q=x.height();R=k.height();V=R+u("#waves").height();X(null,1);N.style=""};const F=function(e){var t=window.innerHeight;var n=i();var a=n>t?n-t:document.body.scrollHeight-t;var s=window.pageYOffset>R;var r=window.pageYOffset>0;if(s){z("#FFF")}else{z("#222")}x.toggleClass("show",s);O.toggleClass("affix",r);M.toggleClass("affix",r);N.toggleClass("affix",window.pageYOffset>V&&document.body.offsetWidth>991);if(typeof p.y=="undefined"){p.y=window.pageYOffset}v=p.y-window.pageYOffset;if(v<0){x.removeClass("up");x.toggleClass("down",s)}else if(v>0){x.removeClass("down");x.toggleClass("up",s)}else{}p.y=window.pageYOffset;var c=Math.round(Math.min(100*window.pageYOffset/a,100))+"%";A.child("span").innerText=c;u(".percent").width(c)};const K=function(e){f.set(e,p.y)};const W=function(){var e=window.location.hash;if(D==0&&e){var t=u(decodeURI(e));if(t){o(t);D=1}else{D=0}}else{var i=f.get(window.location.href);if(i){o(C,i);f.del(window.location.href)}D=-1}};const $=function(e,t){var i=C.createChild("textarea",{style:{top:window.scrollY+"px",position:"absolute",opacity:"0"},readOnly:true,value:e});const n=document.getSelection();const a=n.rangeCount>0?n.getRangeAt(0):false;i.select();i.setSelectionRange(0,e.length);i.readOnly=false;var s=document.execCommand("copy");t&&t(s);i.blur();if(a){n.removeAllRanges();n.addRange(a)}C.removeChild(i)};const J=function(t){var i=e.valine;var n=u("#rcomment");if(!i.appId||!n)return;var a="https://";var s="";if(!i.serverURLs){switch(i.appId.slice(-9)){case"-9Nh9j0Va":a+="tab.leancloud.cn";break;case"-MdYXbMMI":a+="us.avoscloud.com";break;default:a+="avoscloud.com";break}}s=i.serverURLs||a;try{AV.init({appId:i.appId,appKey:i.appKey,serverURLs:s});AV.Query.doCloudQuery("select nick, mail, comment, url from Comment where (rid='' or rid is not exists) order by -createdAt limit 0,10").then(function(i){i=i&&i.results||[];const a=i.length;if(a){var s="";for(var r=0;r<a;r++){s+='<li class="item">'+'<a href="'+e.root+i[r].get("url")+"#"+i[r].id+'">'+'<span class="breadcrumb">'+i[r].get("nick")+" @ "+d(i[r].createdAt)+"</span>"+"<span>"+i[r].get("comment").replace(/<[^>]+>/gi,"").substr(0,100)+"</span></a>"+"</li>"}n.createChild("ul",{innerHTML:s});t.refresh(n)}}).catch(function(e){})}catch(r){}};const X=function(e,t){if(N.hasClass("on")){N.removeClass("on");E.removeClass("close");Velocity(N,"transition.slideRightOut",{duration:200})}else{if(t)return;Velocity(N,"transition.slideRightIn",{duration:200,complete:function(){N.addClass("on");E.addClass("close")}})}};const G=function(){var e=N.child(".inner");var t=N.find(".panel");if(N.child(".tab")){e.removeChild(N.child(".tab"))}var i=document.createElement("ul"),n="active";i.className="tab";["contents","related","overview"].forEach(function(e){var t=N.child(".panel."+e);if(t.innerHTML.replace(/(^\s*)|(\s*$)/g,"").length<1){if(e=="contents"){S.display("none")}return}if(e=="contents"){S.display("")}var a=document.createElement("li");var s=document.createElement("span");var r=document.createTextNode(t.attr("data-title"));s.appendChild(r);a.appendChild(s);a.addClass(e+" item");if(n){t.addClass(n);a.addClass(n)}else{t.removeClass("active")}a.addEventListener("click",function(e){var t=event.currentTarget;if(t.hasClass("active"))return;N.find(".tab .item").forEach(function(e){e.removeClass("active")});N.find(".panel").forEach(function(e){e.removeClass("active")});N.child(".panel."+t.className.replace(" item","")).addClass("active");t.addClass("active")});i.appendChild(a);n=""});if(i.childNodes.length>1){e.insertBefore(i,e.childNodes[0]);N.child(".panels").style.paddingTop=""}else{N.child(".panels").style.paddingTop=".625rem"}};const Z=function(){var e=u.all(".contents li");if(e.length<1){return}var t=Array.prototype.slice.call(e)||[];var i=null;t=t.map(function(e,t){var n=e.child("a.toc-link");var s=u(decodeURI(n.attr("href")));if(!s)return;var r=s.child("a.anchor");var c=function(e){e.preventDefault();var n=u(decodeURI(e.currentTarget.attr("href")));i=t;o(n,-q,function(){a(t);i=null})};n.addEventListener("click",c);r&&r.addEventListener("click",function(e){c(e);$(LOCAL.path+e.currentTarget.attr("href"))});return s});var n=N.child(".panels .inner");var a=function(i,a){var s=e[i];if(!s)return;if(s.hasClass("current")){return}u.each(".toc .active",function(e){e&&e.removeClass("active current")});t.forEach(function(e){e&&e.removeClass("active")});s.addClass("active current");t[i]&&t[i].addClass("active");var r=s.parentNode;while(!r.matches(".contents")){if(r.matches("li")){r.addClass("active");var c=u(r.child("a.toc-link").attr("href"));if(c){c.addClass("active")}}r=r.parentNode}Velocity(s,"scroll",{container:n,offset:-(n.offsetHeight/2)})};var s=function(e){var i=0;var n=e[i];if(n.boundingClientRect.top>0){i=t.indexOf(n.target);return i===0?0:i-1}for(;i<e.length;i++){if(e[i].boundingClientRect.top<=0){n=e[i]}else{return t.indexOf(n.target)}}return t.indexOf(n.target)};var r=function(){var e=new IntersectionObserver(function(e,t){var n=s(e)+(v<0?1:0);if(i===null){a(n)}},{rootMargin:"0px 0px -100% 0px",threshold:0});t.forEach(function(t){t&&e.observe(t)})};r()};const ee=function(){o(C)};const te=function(){o(C,b.height())};const ie=function(){o(u("#comments"))};const ne=function(){u.each(".menu .item:not(.title)",function(t){var i=t.child("a[href]");if(!i)return;var n=i.pathname===location.pathname||i.pathname===location.pathname.replace("index.html","");var a=!e.root.startsWith(i.pathname)&&location.pathname.startsWith(i.pathname);var s=i.hostname===location.hostname&&(n||a);t.toggleClass("active",s);t.parentNode.parentNode.toggleClass("expand",t.parentNode.hasClass("submenu")&&t.parentNode.child(".active"))})};const ae=function(){if(!u(".index.wrap"))return;var e=new IntersectionObserver(function(t){t.forEach(function(t){if(!window.IntersectionObserver){if(t.target.hasClass("show")===false){t.target.addClass("show")}}else{if(t.target.hasClass("show")){e.unobserve(t.target)}else{if(t.isIntersecting){t.target.addClass("show");e.unobserve(t.target)}}}})},{root:null,threshold:[.3]});u.each(".index.wrap article.item, .index.wrap section.item",function(t){e.observe(t)});u(".index.wrap .item:first-child").addClass("show");u.each(".cards .item",function(e,t){["mouseenter","touchstart"].forEach(function(t){e.addEventListener(t,function(t){if(u(".cards .item.active")){u(".cards .item.active").removeClass("active")}e.addClass("active")})});["mouseleave"].forEach(function(t){e.addEventListener(t,function(t){e.removeClass("active")})})})};const se=function(){u.each("span.exturl",function(e){var t=document.createElement("a");t.href=decodeURIComponent(atob(e.dataset.url).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));t.rel="noopener external nofollow noreferrer";t.target="_blank";t.className=e.className;t.title=e.title||e.innerText;t.innerHTML=e.innerHTML;if(e.dataset.backgroundImage){t.dataset.backgroundImage=e.dataset.backgroundImage}e.parentNode.replaceChild(t,e)})};const re=function(){ce();if(!u(".md"))return;u(".post.block").oncopy=function(e){_(LOCAL.copyright);var t=u("#copyright");if(window.getSelection().toString().length>30&&t){e.preventDefault();var i="# "+t.child(".author").innerText;var n="# "+t.child(".link").innerText;var a="# "+t.child(".license").innerText;var s=i+"<br>"+n+"<br>"+a+"<br><br>"+window.getSelection().toString().replace(/\r\n/g,"<br>");var r=i+"\n"+n+"\n"+a+"\n\n"+window.getSelection().toString().replace(/\r\n/g,"\n");if(e.clipboardData){e.clipboardData.setData("text/html",s);e.clipboardData.setData("text/plain",r)}else if(window.clipboardData){return window.clipboardData.setData("text",r)}}};u.each(".md img",function(e){var t;if(t=e.attr("title")){var i=document.createElement("span");var n=document.createTextNode(t);i.appendChild(n);i.addClass("image-info");e.insertAfter(i)}});if(u(".md :not(a) > img, .md > img")){LOCAL["mediumzoom"]=true;s("mediumzoom",function(){window.mediumZoom(".md :not(a) > img, .md > img",{background:"rgba(0, 0, 0, 0.6)"})},window.mediumZoom)}u.each("li ruby",function(e){var t=e.parentNode;if(e.parentNode.tagName!="LI"){t=e.parentNode.parentNode}t.addClass("ruby")});u.each(".md table",function(e){e.wrap({className:"table-container"})});u.each(".highlight > .table-container",function(e){e.className="code-container"});u.each("figure.highlight",function(e){var t=e.child(".code-container");var i=e.child("figcaption");e.insertAdjacentHTML("beforeend",'<div class="operation"><span class="breakline-btn"><i class="ic i-align-left"></i></span><span class="copy-btn"><i class="ic i-clipboard"></i></span><span class="fullscreen-btn"><i class="ic i-expand"></i></span></div>');var n=e.child(".copy-btn");n.addEventListener("click",function(e){var i=e.currentTarget;var n="",a="";t.find("pre").forEach(function(e){a+=n+e.innerText;n="\n"});$(a,function(e){i.child(".ic").className=e?"ic i-check":"ic i-times";i.blur();_(LOCAL.copyright)})});n.addEventListener("mouseleave",function(e){setTimeout(function(){e.target.child(".ic").className="ic i-clipboard"},1e3)});var a=e.child(".breakline-btn");a.addEventListener("click",function(t){var i=t.currentTarget;if(e.hasClass("breakline")){e.removeClass("breakline");i.child(".ic").className="ic i-align-left"}else{e.addClass("breakline");i.child(".ic").className="ic i-align-justify"}});var s=e.child(".fullscreen-btn");var r=function(){e.removeClass("fullscreen");e.scrollTop=0;C.removeClass("fullscreen");s.child(".ic").className="ic i-expand"};var c=function(t){var i=t.currentTarget;if(e.hasClass("fullscreen")){r();f&&f();o(e)}else{e.addClass("fullscreen");C.addClass("fullscreen");s.child(".ic").className="ic i-compress";u&&u()}};s.addEventListener("click",c);i&&i.addEventListener("click",c);if(t&&t.height()>300){t.style.maxHeight="300px";t.insertAdjacentHTML("beforeend",'<div class="show-btn"><i class="ic i-angle-down"></i></div>');var l=t.child(".show-btn");var d=l.child("i");var u=function(){t.style.maxHeight="";l.addClass("open")};var f=function(){t.style.maxHeight="300px";l.removeClass("open")};l.addEventListener("click",function(e){if(l.hasClass("open")){r();f();o(t.parentNode)}else{u()}})}});u.each("pre.mermaid > svg",function(e){e.style.maxWidth=""});u.each(".reward button",function(e){e.addEventListener("click",function(e){e.preventDefault();var t=u("#qr");if(t.display()==="inline-flex"){Velocity(t,"fadeOut")}else{Velocity(t,"transition.slideUpBigIn",{display:"inline-flex"})}})});u.each(".quiz > ul.options li",function(e){e.addEventListener("click",function(t){if(e.hasClass("correct")){e.toggleClass("right");e.parentNode.parentNode.addClass("show")}else{e.toggleClass("wrong")}})});u.each(".quiz > p",function(e){e.addEventListener("click",function(t){e.parentNode.toggleClass("show")})});u.each("div.tab",function(e,t){var i=e.attr("data-id");var n=e.attr("data-title");var a=u("#"+i);if(!a){a=document.createElement("div");a.className="tabs";a.id=i;e.parentNode.insertBefore(a,e)}var s=a.child(".nav");if(!s){s=a.createChild("ul",{className:"nav"})}var r=s.createChild("li",{innerHTML:n});if(t==0){r.addClass("active");e.addClass("active")}r.addEventListener("click",function(t){var i=t.currentTarget;a.find(".active").forEach(function(e){e.removeClass("active")});e.addClass("active");i.addClass("active")});a.appendChild(e)})};const ce=function(){var t=u("#comments");if(!t){H.display("none");return}else{H.display("");s("valine",function(){var i=e.valine;i.el="#comments";i.path=t.attr("data-id");new Valine(i);setTimeout(W,1e3)},window.Valine)}var i=new IntersectionObserver(function(e,t){var i=e[0];r("valine");if(i.isIntersecting){Velocity(u("#comments"),"transition.bounceUpIn");t.disconnect()}});i.observe(t)};const oe=function(t){if(e.search===null)return;if(!j){j=C.createChild("div",{id:"search",innerHTML:'<div class="inner"><div class="header"><span class="icon"><i class="ic i-search"></i></span><div class="search-input-container"></div><span class="close-btn"><i class="ic i-times-circle"></i></span></div><div class="results"><div class="inner"><div id="search-stats"></div><div id="search-hits"></div><div id="search-pagination"></div></div></div></div>'})}var i=instantsearch({indexName:e.search.indexName,searchClient:algoliasearch(e.search.appID,e.search.apiKey),searchFunction:function(e){var t=u(".search-input");if(t.value){e.search()}}});i.on("render",function(){t.refresh(u("#search-hits"))});i.addWidgets([instantsearch.widgets.configure({hitsPerPage:e.search.hits.per_page||10}),instantsearch.widgets.searchBox({container:".search-input-container",placeholder:LOCAL.search.placeholder,showReset:false,showSubmit:false,showLoadingIndicator:false,cssClasses:{input:"search-input"}}),instantsearch.widgets.stats({container:"#search-stats",templates:{text:function(e){var t=LOCAL.search.stats.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS);return t+'<span class="algolia-powered"></span><hr>'}}}),instantsearch.widgets.hits({container:"#search-hits",templates:{item:function(t){var i=t.categories?"<span>"+t.categories.join('<i class="ic i-angle-right"></i>')+"</span>":"";return'<a href="'+e.root+t.path+'">'+i+t._highlightResult.title.value+"</a>"},empty:function(e){return'<div id="hits-empty">'+LOCAL.search.empty.replace(/\$\{query}/,e.query)+"</div>"}},cssClasses:{item:"item"}}),instantsearch.widgets.pagination({container:"#search-pagination",scrollTo:false,showFirst:false,showLast:false,templates:{first:'<i class="ic i-angle-double-left"></i>',last:'<i class="ic i-angle-double-right"></i>',previous:'<i class="ic i-angle-left"></i>',next:'<i class="ic i-angle-right"></i>'},cssClasses:{root:"pagination",item:"pagination-item",link:"page-number",selectedItem:"current",disabledItem:"disabled-item"}})]);i.start();u.each(".search",function(e){e.addEventListener("click",function(){document.body.style.overflow="hidden";Velocity(j,"transition.shrinkIn",{duration:200,complete:function(){u(".search-input").focus()}})})});const n=function(){document.body.style.overflow="";Velocity(j,"transition.shrinkOut")};j.addEventListener("click",function(e){if(e.target===j){n()}});u(".close-btn").addEventListener("click",n);window.addEventListener("pjax:success",n);window.addEventListener("keyup",function(e){if(e.key==="Escape"){n()}})};const le=function(){u.each(".overview .menu > .item",function(e){x.child(".menu").appendChild(e.cloneNode(true))});L.addEventListener("click",B.vanish);E.addEventListener("click",X);u(".dimmer").addEventListener("click",X);T.child(".down").addEventListener("click",te);T.child(".up").addEventListener("click",ee);if(!O){O=k.createChild("div",{id:"tool",innerHTML:'<div class="item player"></div><div class="item contents"><i class="ic i-list-ol"></i></div><div class="item chat"><i class="ic i-comments"></i></div><div class="item back-to-top"><i class="ic i-arrow-up"></i><span>0%</span></div>'})}I=O.child(".player");A=O.child(".back-to-top");H=O.child(".chat");S=O.child(".contents");A.addEventListener("click",ee);H.addEventListener("click",ie);S.addEventListener("click",X);I.player()};const de=function(){K(window.location.href);if(N.hasClass("on")){Velocity(N,"transition.slideRightOut",{duration:200,complete:function(){N.removeClass("on");E.removeClass("close")}})}u("#content").innerHTML="";u("#content").appendChild(L.lastChild.cloneNode(true));o(C)};const ue=function(t){r("katex");s("copy_tex");r("mermaid");s("chart");if(!t){u.each("script[data-pjax]",c)}g=document.title;P();ne();G();Z();se();re();I.media.load(LOCAL.audio||e.audio||{});lozad(u.all("img, [data-background-image]"),{loaded:function(e){e.addClass("lozaded")}}).observe();B.hide();D=0;W();ae()};const fe=function(){le();var t=new Pjax({selectors:["head title",".languages",".pjax","script[data-config]"],analytics:false,cacheBust:false});e.quicklink.ignores=LOCAL.ignores;quicklink.listen(e.quicklink);Q();U();oe(t);J(t);window.addEventListener("scroll",F);window.addEventListener("resize",P);window.addEventListener("pjax:send",de);window.addEventListener("pjax:success",ue);window.addEventListener("beforeunload",function(){K(window.location.href)});ue(1)};window.addEventListener("DOMContentLoaded",fe);
//rebuild by hrmmi 