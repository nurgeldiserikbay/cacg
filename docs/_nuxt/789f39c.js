(window.webpackJsonp=window.webpackJsonp||[]).push([[19,11],{288:function(t,e,n){"use strict";n(12),n(23);e.a={methods:{animateFrom:function(t){t.style.transform="translateY(100px)",t.style.opacity="0",gsap.fromTo(t,{y:100,autoAlpha:0},{duration:.8,delay:t.dataset.gsapduration||0,y:0,autoAlpha:1,ease:"sine",overwrite:"auto"})},hide:function(t){gsap.set(t,{autoAlpha:0})},scrollTriggerInit:function(){var t=this;gsap.utils.toArray(".gs_reveal").forEach((function(e){t.hide(e),ScrollTrigger.create({trigger:e,start:"top 90%",once:!0,onEnter:function(){t.animateFrom(e)}})}))}},mounted:function(){this.scrollTriggerInit()}}},290:function(t,e,n){"use strict";var r=n(11),o=n(5),c=n(3),d=n(111),l=n(20),f=n(16),m=n(201),h=n(47),v=n(84),x=n(200),w=n(4),y=n(85).f,_=n(41).f,z=n(19).f,k=n(300),j=n(301).trim,O="Number",A=o.Number,N=A.prototype,I=o.TypeError,C=c("".slice),E=c("".charCodeAt),M=function(t){var e=x(t,"number");return"bigint"==typeof e?e:P(e)},P=function(t){var e,n,r,o,c,d,l,code,f=x(t,"number");if(v(f))throw I("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=j(f),43===(e=E(f,0))||45===e){if(88===(n=E(f,2))||120===n)return NaN}else if(48===e){switch(E(f,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(d=(c=C(f,2)).length,l=0;l<d;l++)if((code=E(c,l))<48||code>o)return NaN;return parseInt(c,r)}return+f};if(d(O,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var T,S=function(t){var e=arguments.length<1?0:A(M(t)),n=this;return h(N,n)&&w((function(){k(n)}))?m(Object(e),n,S):e},F=r?y(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),D=0;F.length>D;D++)f(A,T=F[D])&&!f(S,T)&&z(S,T,_(A,T));S.prototype=N,N.constructor=S,l(o,O,S,{constructor:!0})}},292:function(t,e,n){var content=n(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("66b921d2",content,!0,{sourceMap:!1})},297:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(113);var o=n(140),c=n(88);function d(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||Object(o.a)(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},300:function(t,e,n){var r=n(3);t.exports=r(1..valueOf)},301:function(t,e,n){var r=n(3),o=n(30),c=n(17),d=n(302),l=r("".replace),f="["+d+"]",m=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),v=function(t){return function(e){var n=c(o(e));return 1&t&&(n=l(n,m,"")),2&t&&(n=l(n,h,"")),n}};t.exports={start:v(1),end:v(2),trim:v(3)}},302:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},303:function(t,e,n){"use strict";n(292)},304:function(t,e,n){var r=n(31),o=n(38),c=n(39),d=r(!1),l=o(c);d.push([t.i,"body[data-v-1b7a51fc],html[data-v-1b7a51fc]{position:relative;z-index:-1;width:100vw;margin:0;padding:0;overflow-x:hidden;background-image:url("+l+');background-size:cover;background-attachment:fixed;font-size:12px}body[data-v-1b7a51fc]::-webkit-scrollbar{display:none}a[data-v-1b7a51fc]{text-decoration:none}ol[data-v-1b7a51fc],ul[data-v-1b7a51fc]{list-style:none;margin:0;padding:0}button[data-v-1b7a51fc]{outline:none;border:none;background:transparent;padding:0;cursor:pointer}button a[data-v-1b7a51fc]{display:block;width:100%;height:100%;display:flex;font-family:inherit;font-size:inherit;font-weight:inherit;color:inherit}.main-btn[data-v-1b7a51fc],button a[data-v-1b7a51fc]{justify-content:center;align-items:center}.main-btn[data-v-1b7a51fc]{min-width:11.4rem;min-height:3.4rem;box-sizing:border-box;padding:1rem 1.6rem;display:flex;background-color:#001aff;color:#fff;text-transform:uppercase;font-family:"Micra",Arial,Helvetica,sans-serif;font-weight:700;font-style:normal;font-size:1.2rem;letter-spacing:.036rem;box-shadow:0 .4rem 1.75rem 0 rgba(41,106,231,.25);text-shadow:0 .2rem .2rem rgba(0,0,0,.25)}p[data-v-1b7a51fc]{font-weight:300;line-height:1.5;letter-spacing:.105rem;-webkit-text-fill-color:#fff;-webkit-text-stroke:.5px #000}.large_p[data-v-1b7a51fc]{font-size:12px;line-height:2rem;letter-spacing:.096rem;margin:0 0 3.85rem;-webkit-text-stroke:unset}h1[data-v-1b7a51fc]{font-size:32px;letter-spacing:.1408rem;text-align:left;color:#fff}h1[data-v-1b7a51fc],h2[data-v-1b7a51fc]{width:100%;margin:0 0 3.85rem;font-family:"Micra",Arial,Helvetica,sans-serif;line-height:1.1;font-weight:700;text-transform:uppercase;font-style:normal}h2[data-v-1b7a51fc]{font-size:18px;letter-spacing:.0528rem}.h3[data-v-1b7a51fc],h3[data-v-1b7a51fc]{width:100%;margin:0 0 3.85rem;font-family:"Micra",Arial,Helvetica,sans-serif;font-size:18px;line-height:1.1;letter-spacing:.048rem;text-transform:uppercase}.h3[data-v-1b7a51fc],.h4[data-v-1b7a51fc],h3[data-v-1b7a51fc],h4[data-v-1b7a51fc]{font-weight:400;font-style:normal}.h4[data-v-1b7a51fc],h4[data-v-1b7a51fc]{margin:0;font-size:12px;line-height:1.5;letter-spacing:.096rem}.full-screen[data-v-1b7a51fc]{width:100vw;min-height:100vh;box-sizing:border-box;border:1px solid transparent}@media screen and (min-width:375px){body[data-v-1b7a51fc],html[data-v-1b7a51fc]{font-size:12px;font-size:calc(10.05825px + .5178vw)}.large_p[data-v-1b7a51fc]{font-size:12px;font-size:calc(9.08738px + .7767vw)}h1[data-v-1b7a51fc]{font-size:32px;font-size:calc(24.23301px + 2.0712vw)}h2[data-v-1b7a51fc]{font-size:18px;font-size:calc(10.71845px + 1.94175vw)}h3[data-v-1b7a51fc]{font-size:18px;font-size:calc(14.60194px + .90615vw)}h4[data-v-1b7a51fc]{font-size:12px;font-size:calc(9.08738px + .7767vw)}}@media screen and (max-width:374px){.large_p[data-v-1b7a51fc],body[data-v-1b7a51fc],html[data-v-1b7a51fc]{font-size:8px;font-size:calc(7.31915px + .28369vw)}h1[data-v-1b7a51fc]{font-size:20px;font-size:calc(17.95745px + .85106vw)}h2[data-v-1b7a51fc],h3[data-v-1b7a51fc]{font-size:12px;font-size:calc(10.97872px + .42553vw)}h4[data-v-1b7a51fc]{font-size:8px;font-size:calc(7.31915px + .28369vw)}}@media screen and (min-width:1920px){body[data-v-1b7a51fc],html[data-v-1b7a51fc]{font-size:20px}.large_p[data-v-1b7a51fc]{font-size:24px}h1[data-v-1b7a51fc]{font-size:64px}h2[data-v-1b7a51fc]{font-size:48px}h3[data-v-1b7a51fc]{font-size:32px}h4[data-v-1b7a51fc]{font-size:24px}}@media(max-width:767.98px){h1[data-v-1b7a51fc],h2[data-v-1b7a51fc]{text-align:center}p[data-v-1b7a51fc]{-webkit-text-fill-color:#fff;-webkit-text-stroke:unset!important}}.pagination[data-v-1b7a51fc]{width:100%;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;flex-wrap:wrap}.pagination-more[data-v-1b7a51fc],button[data-v-1b7a51fc]{min-width:2.7rem;box-sizing:border-box;padding:0 .5rem;height:2.7rem;cursor:pointer;background-color:hsla(0,0%,100%,.05);display:flex;justify-content:center;align-items:center;font-family:"Micra",Arial,Helvetica,sans-serif;font-size:1.2rem;font-weight:400;color:#fff;margin-right:1.5rem;margin-bottom:1rem;transition:all .3s linear}.pagination-more[data-v-1b7a51fc]{cursor:unset}.active[data-v-1b7a51fc],button[data-v-1b7a51fc]:hover{background-color:#001aff}',""]),t.exports=d},319:function(t,e,n){"use strict";n.r(e);n(290);var r=n(297),o=(n(83),{name:"app-pagination",props:{length:{type:Number,default:0,validator:function(t){return t%1==0}},totalVisible:Number,disabled:Boolean,value:{type:[Number,String],default:1}},model:{event:"click"},data:function(){return{maxButtons:10}},computed:{items:function(){var t=this.totalVisible>this.maxButtons?this.maxButtons:this.totalVisible||this.maxButtons;if(this.length<=t||t<1)return this.getRange(1,this.length);var e=t%2==0?1:0,n=Math.floor(t/2),o=this.length-n+1+e;if(this.value>n&&this.value<o){var c=this.value-n+2,d=this.value+n-2-e;return[1,"..."].concat(Object(r.a)(this.getRange(c,d)),["...",this.length])}if(this.value===n){var l=this.value+n-1-e;return[].concat(Object(r.a)(this.getRange(1,l)),["...",this.length])}if(this.value===o){var f=this.value-n+1;return[1,"..."].concat(Object(r.a)(this.getRange(f,this.length)))}return[].concat(Object(r.a)(this.getRange(1,n)),["..."],Object(r.a)(this.getRange(o,this.length)))}},methods:{setCurrent:function(t){this.$emit("click",t)},getRange:function(t,e){for(var n=[],i=t=t>0?t:1;i<=e;i++)n.push(i);return n}}}),c=(n(303),n(13)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("ul",{staticClass:"pagination",class:["pagination",{disabled:t.disabled}]},t._l(t.items,(function(n,r){return e("li",{key:"paging_"+r},[isNaN(Number(n))?e("span",{staticClass:"pagination-more"},[t._v(t._s(n))]):e("button",{class:[{active:n===t.value}],attrs:{type:"button"},on:{click:function(e){return t.setCurrent(n)}}},[t._v("\n\t\t\t"+t._s(n)+"\n\t\t")])])})),0)}),[],!1,null,"1b7a51fc",null);e.default=component.exports},343:function(t,e,n){var content=n(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("23b3d548",content,!0,{sourceMap:!1})},362:function(t,e,n){"use strict";var r=n(2),o=n(363);r({target:"String",proto:!0,forced:n(364)("link")},{link:function(t){return o(this,"a","href",t)}})},363:function(t,e,n){var r=n(3),o=n(30),c=n(17),d=/"/g,l=r("".replace);t.exports=function(t,e,n,r){var f=c(o(t)),m="<"+e;return""!==n&&(m+=" "+n+'="'+l(c(r),d,"&quot;")+'"'),m+">"+f+"</"+e+">"}},364:function(t,e,n){var r=n(4);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},365:function(t,e,n){"use strict";n(343)},366:function(t,e,n){var r=n(31),o=n(38),c=n(39),d=r(!1),l=o(c);d.push([t.i,"body[data-v-41756428],html[data-v-41756428]{position:relative;z-index:-1;width:100vw;margin:0;padding:0;overflow-x:hidden;background-image:url("+l+');background-size:cover;background-attachment:fixed;font-size:12px}body[data-v-41756428]::-webkit-scrollbar{display:none}a[data-v-41756428]{text-decoration:none}ol[data-v-41756428],ul[data-v-41756428]{list-style:none;margin:0;padding:0}button[data-v-41756428]{outline:none;border:none;background:transparent;padding:0;cursor:pointer}button a[data-v-41756428]{display:block;width:100%;height:100%;display:flex;font-family:inherit;font-size:inherit;font-weight:inherit;color:inherit}.main-btn[data-v-41756428],button a[data-v-41756428]{justify-content:center;align-items:center}.main-btn[data-v-41756428]{min-width:11.4rem;min-height:3.4rem;box-sizing:border-box;padding:1rem 1.6rem;display:flex;background-color:#001aff;color:#fff;text-transform:uppercase;font-family:"Micra",Arial,Helvetica,sans-serif;font-weight:700;font-style:normal;font-size:1.2rem;letter-spacing:.036rem;box-shadow:0 .4rem 1.75rem 0 rgba(41,106,231,.25);text-shadow:0 .2rem .2rem rgba(0,0,0,.25)}p[data-v-41756428]{font-weight:300;line-height:1.5;letter-spacing:.105rem;-webkit-text-fill-color:#fff;-webkit-text-stroke:.5px #000}.large_p[data-v-41756428]{font-size:12px;line-height:2rem;letter-spacing:.096rem;margin:0 0 3.85rem;-webkit-text-stroke:unset}h1[data-v-41756428]{font-size:32px;letter-spacing:.1408rem;text-align:left;color:#fff}h1[data-v-41756428],h2[data-v-41756428]{width:100%;margin:0 0 3.85rem;font-family:"Micra",Arial,Helvetica,sans-serif;line-height:1.1;font-weight:700;text-transform:uppercase;font-style:normal}h2[data-v-41756428]{font-size:18px;letter-spacing:.0528rem}.h3[data-v-41756428],h3[data-v-41756428]{width:100%;margin:0 0 3.85rem;font-family:"Micra",Arial,Helvetica,sans-serif;font-size:18px;line-height:1.1;letter-spacing:.048rem;text-transform:uppercase}.h3[data-v-41756428],.h4[data-v-41756428],h3[data-v-41756428],h4[data-v-41756428]{font-weight:400;font-style:normal}.h4[data-v-41756428],h4[data-v-41756428]{margin:0;font-size:12px;line-height:1.5;letter-spacing:.096rem}.full-screen[data-v-41756428]{width:100vw;min-height:100vh;box-sizing:border-box;border:1px solid transparent}@media screen and (min-width:375px){body[data-v-41756428],html[data-v-41756428]{font-size:12px;font-size:calc(10.05825px + .5178vw)}.large_p[data-v-41756428]{font-size:12px;font-size:calc(9.08738px + .7767vw)}h1[data-v-41756428]{font-size:32px;font-size:calc(24.23301px + 2.0712vw)}h2[data-v-41756428]{font-size:18px;font-size:calc(10.71845px + 1.94175vw)}h3[data-v-41756428]{font-size:18px;font-size:calc(14.60194px + .90615vw)}h4[data-v-41756428]{font-size:12px;font-size:calc(9.08738px + .7767vw)}}@media screen and (max-width:374px){.large_p[data-v-41756428],body[data-v-41756428],html[data-v-41756428]{font-size:8px;font-size:calc(7.31915px + .28369vw)}h1[data-v-41756428]{font-size:20px;font-size:calc(17.95745px + .85106vw)}h2[data-v-41756428],h3[data-v-41756428]{font-size:12px;font-size:calc(10.97872px + .42553vw)}h4[data-v-41756428]{font-size:8px;font-size:calc(7.31915px + .28369vw)}}@media screen and (min-width:1920px){body[data-v-41756428],html[data-v-41756428]{font-size:20px}.large_p[data-v-41756428]{font-size:24px}h1[data-v-41756428]{font-size:64px}h2[data-v-41756428]{font-size:48px}h3[data-v-41756428]{font-size:32px}h4[data-v-41756428]{font-size:24px}}@media(max-width:767.98px){h1[data-v-41756428],h2[data-v-41756428]{text-align:center}p[data-v-41756428]{-webkit-text-fill-color:#fff;-webkit-text-stroke:unset!important}}#demo[data-v-41756428]{position:relative;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;padding:11.6rem 16% 20rem}.large_p[data-v-41756428]{margin-bottom:9rem}.demos_wrapper[data-v-41756428]{width:100%}.demos_list[data-v-41756428]{flex-direction:row;justify-content:space-between;flex-wrap:wrap}.demos[data-v-41756428],.demos_list[data-v-41756428]{display:flex;align-items:stretch}.demos[data-v-41756428]{max-width:46%;margin-bottom:3.85rem;flex-direction:column;justify-content:flex-start;box-shadow:0 0 3.2965rem .397rem rgba(41,106,231,.18)}.img[data-v-41756428]{width:100%;max-height:17.6rem}.img img[data-v-41756428]{display:block;margin:0 auto;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;box-shadow:0 0 3.2965rem .397rem rgba(41,106,231,.18)}.demos_text[data-v-41756428]{box-sizing:border-box;padding:2rem 2.5rem}.demos_text_header[data-v-41756428]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;flex-wrap:wrap;margin-bottom:1rem}.demos_text_header h4[data-v-41756428]{margin:0;overflow:hidden;text-overflow:ellipsis}.demos_text_data[data-v-41756428]{-webkit-text-stroke:.5px #000;line-height:1.1rem;max-height:5.5rem;overflow:hidden;text-overflow:ellipsis;margin-bottom:2rem}.demos_text_bottom button.main-btn[data-v-41756428]{text-transform:none;float:right;min-width:8.45rem;min-height:2.3rem;padding:0;font-size:1rem;line-height:1.5;font-weight:400;font-family:"Montserrat",Arial,Helvetica,sans-serif}@media(max-width:1650px){#demo[data-v-41756428]{padding:11.6rem 12% 16rem}}@media(max-width:1199.98px){#demo[data-v-41756428]{padding:11.6rem 10% 14rem}}@media(max-width:991.98px){#demo[data-v-41756428]{padding:11.6rem 10% 14rem}}@media(max-width:767.98px){#demo[data-v-41756428]{padding:11.6rem 7% 10rem}.demos_wrapper[data-v-41756428]{width:80%}.large_p[data-v-41756428]{text-align:center;-webkit-mask-position:4rem;mask-position:4rem;padding:0 1rem}.demos_list[data-v-41756428]{justify-content:center}.demos[data-v-41756428]{max-width:100%}}@media(max-width:575.98px){#media[data-v-41756428]{padding:11.6rem 0 10rem}.demos_text_data[data-v-41756428]{-webkit-text-stroke:unset!important}}',""]),t.exports=d},382:function(t,e,n){"use strict";n.r(e);n(362),n(25),n(24),n(29),n(12),n(34),n(23),n(35);var r=n(14),o=(n(68),n(40),n(202),n(138),n(15));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={scrollToTop:!0,mixins:[n(288).a],data:function(){return{currentPage:1,max:6}},computed:d(d({},Object(o.c)(["_getDictionary"])),{},{getDemos:function(){var t=(this.currentPage-1)*this.max;return this.demos.slice(t,t+this.max)}}),methods:{linkTo:function(link){this.$router.push("/demo/"+link)},ellipsis:function(text){var t=text.split(" ");return t.length>22?t.slice(0,22).join(" ")+"...":text}}},f=(n(365),n(13)),component=Object(f.a)(l,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"demo"}},[e("AnimFigure",{attrs:{src:"/images/figure-2.png",x:"60",y:"2",scale:"1.2"}}),t._v(" "),e("AnimFigure",{attrs:{src:"/images/figure-3.png",x:"2",y:"40",scale:"1.2"}}),t._v(" "),e("AnimFigure",{attrs:{src:"/images/figure-4.png",x:"88",y:"60",scale:"1.2"}}),t._v(" "),e("h1",{staticClass:"gs_reveal"},[t._v(t._s(t._getDictionary.demoPageTitle))]),t._v(" "),e("p",{staticClass:"large_p gs_reveal",attrs:{"data-gsapduration":"0.3"}},[t._v("\n\t\t"+t._s(t._getDictionary.demoMainText)+"\n\t")]),t._v(" "),e("div",{staticClass:"demos_wrapper"},[e("div",{staticClass:"demos_list"},t._l(t._getDictionary.demos,(function(n,i){return e("div",{key:i,staticClass:"demos gs_reveal",attrs:{"data-gsapduration":"0.3"}},[e("div",{staticClass:"img"},[e("img",{attrs:{src:n.src,alt:""}})]),t._v(" "),e("div",{staticClass:"demos_text"},[e("div",{staticClass:"demos_text_header"},[e("h4",{staticClass:"demos_title"},[t._v(t._s(n.title))])]),t._v(" "),e("div",{staticClass:"demos_text_data"},[t._v("\n\t\t\t\t\t\t"+t._s(t.ellipsis(n.text))+"\n\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"demos_text_bottom"},[e("button",{staticClass:"main-btn",on:{click:function(e){return t.linkTo(i)}}},[e("a",{attrs:{href:n.link,target:"_blank"}},[t._v(t._s(t._getDictionary.btnMore))])])])])])})),0),t._v(" "),e("Pagination",{staticClass:"gs_reveal",attrs:{length:Math.floor(t._getDictionary.demos.length/t.max),totalVisible:7},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)}),[],!1,null,"41756428",null);e.default=component.exports;installComponents(component,{AnimFigure:n(199).default,Pagination:n(319).default})}}]);