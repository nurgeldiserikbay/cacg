(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{288:function(t,e,n){"use strict";n(12),n(23);e.a={methods:{animateFrom:function(t){t.style.transform="translateY(100px)",t.style.opacity="0",gsap.fromTo(t,{y:100,autoAlpha:0},{duration:.8,delay:t.dataset.gsapduration||0,y:0,autoAlpha:1,ease:"sine",overwrite:"auto"})},hide:function(t){gsap.set(t,{autoAlpha:0})},scrollTriggerInit:function(){var t=this;gsap.utils.toArray(".gs_reveal").forEach((function(e){t.hide(e),ScrollTrigger.create({trigger:e,start:"top 90%",once:!0,onEnter:function(){t.animateFrom(e)}})}))}},mounted:function(){this.scrollTriggerInit()}}},346:function(t,e,n){var content=n(372);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("d1642632",content,!0,{sourceMap:!1})},371:function(t,e,n){"use strict";n(346)},372:function(t,e,n){var r=n(31),o=n(38),c=n(39),f=r(!1),d=o(c);f.push([t.i,"body[data-v-f25335ec],html[data-v-f25335ec]{position:relative;z-index:-1;width:100vw;margin:0;padding:0;overflow-x:hidden;background-image:url("+d+');background-size:cover;background-attachment:fixed;font-size:12px}body[data-v-f25335ec]::-webkit-scrollbar{display:none}a[data-v-f25335ec]{text-decoration:none}ol[data-v-f25335ec],ul[data-v-f25335ec]{list-style:none;margin:0;padding:0}button[data-v-f25335ec]{outline:none;border:none;background:transparent;padding:0;cursor:pointer}button a[data-v-f25335ec]{display:block;width:100%;height:100%;display:flex;font-family:inherit;font-size:inherit;font-weight:inherit;color:inherit}.main-btn[data-v-f25335ec],button a[data-v-f25335ec]{justify-content:center;align-items:center}.main-btn[data-v-f25335ec]{min-width:11.4rem;min-height:3.4rem;box-sizing:border-box;padding:1rem 1.6rem;display:flex;background-color:#001aff;color:#fff;text-transform:uppercase;font-family:"Micra",Arial,Helvetica,sans-serif;font-weight:700;font-style:normal;font-size:1.2rem;letter-spacing:.036rem;box-shadow:0 .4rem 1.75rem 0 rgba(41,106,231,.25);text-shadow:0 .2rem .2rem rgba(0,0,0,.25)}p[data-v-f25335ec]{font-weight:300;line-height:1.5;letter-spacing:.105rem;-webkit-text-fill-color:#fff;-webkit-text-stroke:.5px #000}.large_p[data-v-f25335ec]{font-size:12px;line-height:2rem;letter-spacing:.096rem;margin:0 0 3.85rem;-webkit-text-stroke:unset}h1[data-v-f25335ec]{font-size:32px;letter-spacing:.1408rem;text-align:left;color:#fff}h1[data-v-f25335ec],h2[data-v-f25335ec]{width:100%;margin:0 0 3.85rem;font-family:"Micra",Arial,Helvetica,sans-serif;line-height:1.1;font-weight:700;text-transform:uppercase;font-style:normal}h2[data-v-f25335ec]{font-size:18px;letter-spacing:.0528rem}.h3[data-v-f25335ec],h3[data-v-f25335ec]{width:100%;margin:0 0 3.85rem;font-family:"Micra",Arial,Helvetica,sans-serif;font-size:18px;line-height:1.1;letter-spacing:.048rem;text-transform:uppercase}.h3[data-v-f25335ec],.h4[data-v-f25335ec],h3[data-v-f25335ec],h4[data-v-f25335ec]{font-weight:400;font-style:normal}.h4[data-v-f25335ec],h4[data-v-f25335ec]{margin:0;font-size:12px;line-height:1.5;letter-spacing:.096rem}.full-screen[data-v-f25335ec]{width:100vw;min-height:100vh;box-sizing:border-box;border:1px solid transparent}@media screen and (min-width:375px){body[data-v-f25335ec],html[data-v-f25335ec]{font-size:12px;font-size:calc(10.05825px + .5178vw)}.large_p[data-v-f25335ec]{font-size:12px;font-size:calc(9.08738px + .7767vw)}h1[data-v-f25335ec]{font-size:32px;font-size:calc(24.23301px + 2.0712vw)}h2[data-v-f25335ec]{font-size:18px;font-size:calc(10.71845px + 1.94175vw)}h3[data-v-f25335ec]{font-size:18px;font-size:calc(14.60194px + .90615vw)}h4[data-v-f25335ec]{font-size:12px;font-size:calc(9.08738px + .7767vw)}}@media screen and (max-width:374px){.large_p[data-v-f25335ec],body[data-v-f25335ec],html[data-v-f25335ec]{font-size:8px;font-size:calc(7.31915px + .28369vw)}h1[data-v-f25335ec]{font-size:20px;font-size:calc(17.95745px + .85106vw)}h2[data-v-f25335ec],h3[data-v-f25335ec]{font-size:12px;font-size:calc(10.97872px + .42553vw)}h4[data-v-f25335ec]{font-size:8px;font-size:calc(7.31915px + .28369vw)}}@media screen and (min-width:1920px){body[data-v-f25335ec],html[data-v-f25335ec]{font-size:20px}.large_p[data-v-f25335ec]{font-size:24px}h1[data-v-f25335ec]{font-size:64px}h2[data-v-f25335ec]{font-size:48px}h3[data-v-f25335ec]{font-size:32px}h4[data-v-f25335ec]{font-size:24px}}@media(max-width:767.98px){h1[data-v-f25335ec],h2[data-v-f25335ec]{text-align:center}p[data-v-f25335ec]{-webkit-text-fill-color:#fff;-webkit-text-stroke:unset!important}}#demo-detail[data-v-f25335ec]{position:relative;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;padding:11.6rem 16% 20rem}.large_p[data-v-f25335ec]{line-height:2;margin-bottom:6.6rem}.content_elems[data-v-f25335ec]{margin-bottom:2.15rem}h3[data-v-f25335ec]{text-align:center;font-size:1.2rem;line-height:2}img[data-v-f25335ec]{width:100%;margin-bottom:3.85rem}video[data-v-f25335ec]{max-width:100%}@media(min-width:950px){h1[data-v-f25335ec]{white-space:nowrap}}',""]),t.exports=f},385:function(t,e,n){"use strict";n.r(e);n(25),n(24),n(29),n(12),n(34),n(23),n(35);var r=n(14),o=n(10),c=(n(67),n(15));function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={scrollToTop:!0,mixins:[n(288).a],asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=n.slug,e.abrupt("return",{slug:r});case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{}},computed:d(d({},Object(c.c)(["_getDictionary"])),{},{content:function(){return this._getDictionary.demos[this.slug]}}),methods:{},mounted:function(){this.player=new Plyr("#video-demo-"+this.slug)}},v=(n(371),n(13)),component=Object(v.a)(l,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"demo-detail"}},[e("h1",{staticClass:"gs_reveal"},[t._v(t._s(t.content.title))]),t._v(" "),e("p",{staticClass:"large_p gs_reveal",attrs:{"data-gsapduration":"0.5"}},[t._v("\n\t\t"+t._s(t.content.text)+"\n\t")]),t._v(" "),e("div",{staticClass:"content"},[t._l(t.content.content,(function(n,i){return e("div",{key:i,staticClass:"content_elems"},[n.title?e("h3",{staticClass:"gs_reveal",attrs:{"data-gsapduration":"0.8"}},[t._v("\n\t\t\t\t"+t._s(n.title)+"\n\t\t\t")]):t._e(),t._v(" "),t._l(n.media,(function(img,t){return e("img",{key:t,staticClass:"gs_reveal",attrs:{"data-gsapduration":"1",src:img,alt:""}})}))],2)})),t._v(" "),t.content.video?e("h3",[t._v(t._s(t._getDictionary.videoTxt))]):t._e(),t._v(" "),t.content.video?e("video",{staticClass:"gs_reveal",attrs:{id:"video-demo-"+t.slug,src:t.content.video,"data-plyr-config":JSON.stringify()}}):t._e()],2)])}),[],!1,null,"f25335ec",null);e.default=component.exports}}]);