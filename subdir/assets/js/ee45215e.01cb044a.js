(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[99857],{46514:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});const i=s.p+"assets/images/social-card-736cfe55fc7bba07204176852d67c0d5.png"},46768:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});var i=s(24246),a=(s(27378),s(66222)),r=s(36712);function A(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function n(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},i=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),i.forEach((function(t){A(e,t,s[t])}))}return e}function g(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})),e}function p(e,t){if(null==e)return{};var s,i,a=function(e,t){if(null==e)return{};var s,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)s=r[i],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)s=r[i],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}function o(e,t){switch(e){case"noicon":case"loaded":return null;case"loading":return(0,r.I)({id:"theme.IdealImageMessage.loading",message:"Loading...",description:"When the full-scale image is loading"});case"load":{const{pickedSrc:e}=t,{size:s}=e,i=s?` (${function(e){const t=["B","KB","MB","GB","TB"];if(0===e)return"n/a";const s=Math.floor(Math.log(e)/Math.log(1024));return 0===s?`${e} ${t[s]}`:`${(e/1024**s).toFixed(1)} ${t[s]}`}(s)})`:"";return(0,r.I)({id:"theme.IdealImageMessage.load",message:"Click to load{sizeMessage}",description:"To prompt users to load the full image. sizeMessage is a parenthesized size figure."},{sizeMessage:i})}case"offline":return(0,r.I)({id:"theme.IdealImageMessage.offline",message:"Your browser is offline. Image not loaded",description:"When the user is viewing an offline document"});case"error":{const{loadInfo:e}=t;return 404===e?(0,r.I)({id:"theme.IdealImageMessage.404error",message:"404. Image not found",description:"When the image is not found"}):(0,r.I)({id:"theme.IdealImageMessage.error",message:"Error. Click to reload",description:"When the image fails to load for unknown error"})}default:throw new Error(`Wrong icon: ${e}`)}}function c(e){const{img:t}=e,s=p(e,["img"]);return"string"==typeof t||"default"in t?(0,i.jsx)("img",n({src:"string"==typeof t?t:t.default},s)):(0,i.jsx)(a.Z,g(n({},s),{height:null!==(r=t.src.height)&&void 0!==r?r:100,width:null!==(A=t.src.width)&&void 0!==A?A:100,placeholder:{lqip:t.preSrc},src:t.src.src,srcSet:t.src.images.map((e=>g(n({},e),{src:e.path}))),getMessage:o}));var r,A}},96076:(e,t,s)=>{"use strict";s.d(t,{Gl:()=>o,qg:()=>c,cQ:()=>d});var i=s(24246),a=(s(27378),s(14088)),r=s(41428),A=s(46768);const n={carousel:"carousel_raHC",navButton:"navButton_qSul",dotGroup:"dotGroup_n_95",siteSlide:"siteSlide_AwQk",siteLink:"siteLink_IglZ"};function g({index:e,site:t}){return(0,i.jsxs)(a.Mi,{index:e,className:n.siteSlide,children:[(0,i.jsx)(A.Z,{img:t.image,alt:t.name,loading:0===e?"eager":"lazy"}),(0,i.jsxs)(r.Z,{to:t.url,className:n.siteLink,target:"_blank",children:["\ud83d\udd17 ",t.name]})]})}function p({sites:e,aspectRatio:t}){return(0,i.jsxs)(a.sj,{naturalSlideWidth:1,naturalSlideHeight:1/t,totalSlides:e.length,infinite:!0,className:n.carousel,children:[(0,i.jsx)(a.iR,{children:e.map(((e,t)=>(0,i.jsx)(g,{index:t,site:e},t)))}),(0,i.jsx)(a.P1,{className:n.navButton,style:{right:-20},children:">"}),(0,i.jsx)(a.jp,{className:n.navButton,style:{left:-20},children:"<"}),(0,i.jsx)(a.I5,{className:n.dotGroup})]})}function o(){return(0,i.jsx)(p,{aspectRatio:1072/584,sites:[{name:"Prettier",image:s(49911),url:"https://prettier.io/"},{name:"Babel",image:s(759),url:"https://babeljs.io/"},{name:"React-Native",image:s(45058),url:"https://archive.reactnative.dev/"},{name:"Katex",image:s(91551),url:"https://katex.org/docs/"},{name:"Docusaurus",image:s(92037),url:"https://v1.docusaurus.io/"}]})}function c(){return(0,i.jsx)(p,{aspectRatio:2148/1194,sites:[{name:"Tauri",image:s(11384),url:"https://tauri.app/"},{name:"Figma",image:s(58155),url:"https://www.figma.com/plugin-docs/"},{name:"Snapchat",image:s(11937),url:"https://docs.snap.com/"},{name:"Iota",image:s(44827),url:"https://wiki.iota.org/"},{name:"SAP Cloud",image:s(42444),url:"https://sap.github.io/cloud-sdk/"},{name:"Supabase",image:s(45785),url:"https://supabase.com/docs"},{name:"StackBlitz",image:s(33339),url:"https://developer.stackblitz.com/"},{name:"Lacework",image:s(11342),url:"https://docs.lacework.com/"},{name:"React-Navigation",image:s(70054),url:"https://reactnavigation.org/"},{name:"Solana",image:s(44102),url:"https://docs.solana.com/"},{name:"Gulp",image:s(9258),url:"https://gulpjs.com/"}]})}function d(){return(0,i.jsx)(p,{aspectRatio:2148/1194,sites:[{name:"Ionic",image:s(31256),url:"https://ionicframework.com/docs/"},{name:"Outerbounds",image:s(10712),url:"https://outerbounds.com/docs/"},{name:"Courier",image:s(97814),url:"https://www.courier.com/docs/"},{name:"Quickwit",image:s(13296),url:"https://quickwit.io/docs/"},{name:"Dyte",image:s(42431),url:"https://docs.dyte.io/"},{name:"React-Native",image:s(48426),url:"https://reactnative.dev/"},{name:"Hasura",image:s(97314),url:"https://hasura.io/docs/"},{name:"Datagit",image:s(29743),url:"https://www.datagit.ir/"}]})}},6698:(e,t,s)=>{"use strict";s.d(t,{Z:()=>p});var i=s(24246),a=(s(27378),s(40624));const r={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function A(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function n(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},i=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),i.forEach((function(t){A(e,t,s[t])}))}return e}function g(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})),e}function p({children:e,minHeight:t,url:s="http://localhost:3000",style:A,bodyStyle:p}){return(0,i.jsxs)("div",{className:r.browserWindow,style:g(n({},A),{minHeight:t}),children:[(0,i.jsxs)("div",{className:r.browserWindowHeader,children:[(0,i.jsxs)("div",{className:r.buttons,children:[(0,i.jsx)("span",{className:r.dot,style:{background:"#f25f58"}}),(0,i.jsx)("span",{className:r.dot,style:{background:"#fbbe3c"}}),(0,i.jsx)("span",{className:r.dot,style:{background:"#58cb42"}})]}),(0,i.jsx)("div",{className:(0,a.Z)(r.browserWindowAddressBar,"text--truncate"),children:s}),(0,i.jsx)("div",{className:r.browserWindowMenuIcon,children:(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:r.bar}),(0,i.jsx)("span",{className:r.bar}),(0,i.jsx)("span",{className:r.bar})]})})]}),(0,i.jsx)("div",{className:r.browserWindowBody,style:p,children:e})]})}},80566:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var i=s(24246),a=(s(27378),s(41428));function r({size:e=54}){return(0,i.jsx)(a.Z,{to:"https://news.ycombinator.com/item?id=32303052",style:{display:"block",width:e,height:e},children:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:e,height:e,children:[(0,i.jsx)("path",{fill:"#FF6D00",d:"M42 42H6V6h36v36z"}),(0,i.jsx)("path",{fill:"#FFF",d:"M8 8v32h32V8H8zm30 30H10V10h28v28z"}),(0,i.jsx)("path",{fill:"#FFF",d:"M23 32h2v-6l5.5-10h-2.1L24 24.1 19.6 16h-2.1L23 26z"})]})})}},58562:(e,t,s)=>{"use strict";s.d(t,{Z:()=>g});var i=s(24246),a=(s(27378),s(40624)),r=s(41428);function A(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function n(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},i=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),i.forEach((function(t){A(e,t,s[t])}))}return e}function g({className:e,style:t}){return(0,i.jsx)(r.Z,{to:"https://www.producthunt.com/posts/docusaurus-2-0?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-docusaurus-2-0",className:(0,a.Z)("producthunt-badge-widget",e),style:n({display:"block",width:250,height:54},t),children:(0,i.jsx)("img",{className:"producthunt-badge-widget",src:"https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=353916&theme=light",alt:"Docusaurus 2.0 - Build optimized websites quickly, focus on your content. | Product Hunt",style:{width:250,height:54,maxWidth:"initial"},width:250,height:54})})}},18266:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});const i=s.p+"assets/images/social-card-736cfe55fc7bba07204176852d67c0d5.png"},44604:(e,t,s)=>{"use strict";s.r(t),s.d(t,{assets:()=>g,contentTitle:()=>A,default:()=>c,frontMatter:()=>r,metadata:()=>n,toc:()=>p});var i=s(24246),a=s(71670);s(28475),s(6698),s(58562),s(80566),s(64257),s(66448),s(97360),s(96076);const r={title:"Announcing Docusaurus 2.0",authors:["slorber","Josh-Cena","yangshun","lex111","zpao",{key:"JMarcey",title:"Co-creator of Docusaurus 1"}],tags:["release"],image:"./img/social-card.png"},A=void 0,n={permalink:"/blog/2022/08/01/announcing-docusaurus-2.0",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/2022/08-01-announcing-docusaurus-2.0/index.mdx",source:"@site/blog/2022/08-01-announcing-docusaurus-2.0/index.mdx",title:"Announcing Docusaurus 2.0",description:"Today we are extremely happy to finally announce Docusaurus 2.0! \ud83e\udd73\ufe0f",date:"2022-08-01T00:00:00.000Z",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:12.075,hasTruncateMarker:!0,authors:[{name:"S\xe9bastien Lorber",title:"Docusaurus maintainer, This Week In React editor",url:"https://thisweekinreact.com",twitter:"sebastienlorber",email:"sebastien@thisweekinreact.com",imageURL:"https://github.com/slorber.png",key:"slorber"},{name:"Joshua Chen",title:"Working hard on Docusaurus",url:"https://joshcena.com/",email:"sidachen2003@gmail.com",imageURL:"https://github.com/josh-cena.png",key:"Josh-Cena"},{name:"Yangshun Tay",title:"Front End Engineer at Meta",url:"https://github.com/yangshun",twitter:"yangshunz",email:"tay.yang.shun@gmail.com",imageURL:"https://github.com/yangshun.png",key:"yangshun"},{name:"Alexey Pyltsyn",title:"Open-source enthusiast",url:"https://github.com/lex111",email:"lex@php.net",imageURL:"https://github.com/lex111.png",key:"lex111"},{name:"Paul O\u2019Shannessy",title:"Engineering Manager at Meta",url:"https://twitter.com/zpao",email:"jimarcey@gmail.com",twitter:"zpao",imageURL:"https://github.com/zpao.png",key:"zpao"},{name:"Joel Marcey",title:"Co-creator of Docusaurus 1",url:"https://twitter.com/JoelMarcey",email:"jimarcey@gmail.com",twitter:"JoelMarcey",imageURL:"https://github.com/JoelMarcey.png",key:"JMarcey"}],frontMatter:{title:"Announcing Docusaurus 2.0",authors:["slorber","Josh-Cena","yangshun","lex111","zpao",{key:"JMarcey",title:"Co-creator of Docusaurus 1"}],tags:["release"],image:"./img/social-card.png"},unlisted:!1,lastUpdatedAt:1710954485e3,lastUpdatedBy:"Zed Spencer-Milnes",prevItem:{title:"Docusaurus 2.1",permalink:"/blog/2022/09/01/docusaurus-2.1"},nextItem:{title:"Docusaurus 2021 Recap",permalink:"/blog/2022/01/24/docusaurus-2021-recap"}},g={image:s(46514).Z,authorsImageUrls:[void 0,void 0,void 0,void 0,void 0,void 0]},p=[];function o(e){const t={a:"a",img:"img",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Today we are extremely happy to finally ",(0,i.jsx)(t.strong,{children:"announce Docusaurus 2.0"}),"! \ud83e\udd73\ufe0f"]}),"\n",(0,i.jsxs)(t.p,{children:["At ",(0,i.jsx)(t.a,{href:"https://opensource.fb.com/",children:(0,i.jsx)(t.strong,{children:"Meta Open Source"})}),", we believe Docusaurus will help you build the ",(0,i.jsx)(t.strong,{children:"best documentation websites"})," with ",(0,i.jsx)(t.strong,{children:"minimal effort"}),", letting you ",(0,i.jsx)(t.strong,{children:"focus on what really matters"}),": writing the content."]}),"\n",(0,i.jsxs)(t.p,{children:["After ",(0,i.jsxs)(t.strong,{children:["4 years of work, ",(0,i.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/releases/tag/v2.0.0-alpha.75",children:"75 alphas"})," and ",(0,i.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/releases/tag/v2.0.0-beta.22",children:"22 betas"})]}),", the next generation of Docusaurus is ",(0,i.jsx)(t.strong,{children:"ready for prime time"}),". From now on, we now plan to ",(0,i.jsxs)(t.strong,{children:["respect ",(0,i.jsx)(t.a,{href:"https://semver.org/",children:"Semantic Versioning"})]})," and will release ",(0,i.jsx)(t.strong,{children:"major versions more frequently"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"social-card image",src:s(18266).Z+"",width:"1200",height:"600"})})]})}function c(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},759:(e,t,s)=>{e.exports={src:{srcSet:s.p+"assets/ideal-img/babel.d0da959.640.png 640w,"+s.p+"assets/ideal-img/babel.eb46763.1030.png 1030w",images:[{path:s.p+"assets/ideal-img/babel.d0da959.640.png",width:640,height:355},{path:s.p+"assets/ideal-img/babel.eb46763.1030.png",width:1030,height:571}],src:s.p+"assets/ideal-img/babel.d0da959.640.png",toString:function(){return s.p+"assets/ideal-img/babel.d0da959.640.png"},placeholder:void 0,width:640,height:355},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxUlEQVR4nAG6AEX/AHW2yo+ptZWouJOjuZCTupCGuouDuoKCtnuGsnCOwQDJ2OD17uvk4+Hd3Nnt7Ojz9O7z9O7s7en28urD1OUA1OHq/v378vP06+zu8PHz9fX49PT3+Pj5////0dbpANjg6f/+/fj38fDt4fbz6P778P767/369f///+TH1wDa3ej4+/v19/Pv8eX2+Oz19+v1+Ov4+vX9///uwMwA1ZzJ1Jmj2JKO1YR5035y03lv1nZt23Zu23lv5mpy0pmUlPGKpNkAAAAASUVORK5CYII="}},92037:(e,t,s)=>{e.exports={src:{srcSet:s.p+"assets/ideal-img/docusaurus.74e09a0.640.png 640w,"+s.p+"assets/ideal-img/docusaurus.6c04a2e.1030.png 1030w",images:[{path:s.p+"assets/ideal-img/docusaurus.74e09a0.640.png",width:640,height:355},{path:s.p+"assets/ideal-img/docusaurus.6c04a2e.1030.png",width:1030,height:571}],src:s.p+"assets/ideal-img/docusaurus.74e09a0.640.png",toString:function(){return s.p+"assets/ideal-img/docusaurus.74e09a0.640.png"},placeholder:void 0,width:640,height:355},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxUlEQVR4nAG6AEX/AHTH0pLHxZTBxY+7w4yrxY2dxYqbxYOcxHmdvG+cxwDI3eL29vDm6+Pi59vu9eft9Obx9uft9er09+zB1+YA1uLr////9/by7+3k+fbv+/fw/vvz/fz6////0dXoAN3k7v////j49Ozq4e/u5PDu5ff06v779////+TH1wDf4+3////2+PLq69vq69zs7d7z9OP6+/T8///uwMwA157J1Zqj2ZON14Z31X5w13xw2npu23Zt23lx5mpzxQKV2C9YjUoAAAAASUVORK5CYII="}},91551:(e,t,s)=>{e.exports={src:{srcSet:s.p+"assets/ideal-img/katex.681e845.640.png 640w,"+s.p+"assets/ideal-img/katex.68c9ce0.1030.png 1030w",images:[{path:s.p+"assets/ideal-img/katex.681e845.640.png",width:640,height:355},{path:s.p+"assets/ideal-img/katex.68c9ce0.1030.png",width:1030,height:571}],src:s.p+"assets/ideal-img/katex.681e845.640.png",toString:function(){return s.p+"assets/ideal-img/katex.681e845.640.png"},placeholder:void 0,width:640,height:355},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwElEQVR4nA3JzQqCMAAA4D1vFBaRVIdOnTpIRHToEP09QU8QEQgSEZFOKyIohgutTTedmq6+6wdU4943rJEOh1tHW9nawu7NYHduted7ZXoExg0lWYzpx317VDCacl4IkjCWkA3EwLy/ZP7lUfRycUgIC8KYx6lIpZQHEwPn37JgnCOEPr5PKQ2DIBHi308dgssN57IgIX+4GHu+R2gQC5FluZTv9Q7AiWGNl/ZAM7vNU6dmthRLLZ8blWurikr1H7J/l16e6unZAAAAAElFTkSuQmCC"}},49911:(e,t,s)=>{e.exports={src:{srcSet:s.p+"assets/ideal-img/prettier.56bd537.640.png 640w,"+s.p+"assets/ideal-img/prettier.c38f582.1030.png 1030w",images:[{path:s.p+"assets/ideal-img/prettier.56bd537.640.png",width:640,height:355},{path:s.p+"assets/ideal-img/prettier.c38f582.1030.png",width:1030,height:571}],src:s.p+"assets/ideal-img/prettier.56bd537.640.png",toString:function(){return s.p+"assets/ideal-img/prettier.56bd537.640.png"},placeholder:void 0,width:640,height:355},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAvUlEQVR4nDWJyQqCQABA539bKISECEqSItqgU4cgCLp0DAL1lKc8dImyLOnQJi24j2Y54yRCj3d48EButmxOhPaYbwy5WpevMzzLCKUKR1Wn6ZYIJOXs28blelHV/eOpOdCMNW09+rri+gbk04uQyAs+IY7IH5z0avsA+3hj5HgeDN4YoQgnhCje18UOHI73Dw4t6N91w3ShBT3nHQQhwoQY8yWQB9KmP1J6HZml5TK1LeUVOnsoZNRiTktRPxknlZhReJzeAAAAAElFTkSuQmCC"}},45058:(e,t,s)=>{e.exports={src:{srcSet:s.p+"assets/ideal-img/react-native.efc41e0.640.png 640w,"+s.p+"assets/ideal-img/react-native.07364de.1030.png 1030w",images:[{path:s.p+"assets/ideal-img/react-native.efc41e0.640.png",width:640,height:355},{path:s.p+"assets/ideal-img/react-native.07364de.1030.png",width:1030,height:571}],src:s.p+"assets/ideal-img/react-native.efc41e0.640.png",toString:function(){return s.p+"assets/ideal-img/react-native.efc41e0.640.png"},placeholder:void 0,width:640,height:355},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxUlEQVR4nAG6AEX/AGisw32bq4aZrICSq32Drn91rX11r5eXzYCLumOBtwC9ztfn4+Ha2trLy8rQ0c/j5ODr7Oj5+vX//PS8zd8Az9zl+/n48/T14+Xo6urr7u7v7ezu9vb4////0NXoANHY4vb08vLy8ujn5+zr6/Tz8/Tz8/r5+f///+TH1wDY2+b3+/ni5+rO1dfY3N7c4ePa3+Ht8PH+///uwMwA1pzJ1pqkzIaDvGtfumVZumBWuVlRzWlh3nty5mlz7TWO83oUmccAAAAASUVORK5CYII="}},97814:(e,t,s)=>{e.exports={src:{srcSet:s.p+"assets/ideal-img/courier.e09893c.640.png 640w,"+s.p+"assets/ideal-img/courier.129992f.1030.png 1030w",images:[{path:s.p+"assets/ideal-img/courier.e09893c.640.png",width:640,height:356},{path:s.p+"assets/ideal-img/courier.129992f.1030.png",width:1030,height:573}],src:s.p+"assets/ideal-img/courier.e09893c.640.png",toString:function(){return s.p+"assets/ideal-img/courier.e09893c.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVR4nAG6AEX/AIyt2rSXz7uc17eW2bGD269z3qhu3p1w3JJv2H192QDIyeD52+/XwdTEq8LRu8/SvdLRvNHn2On/9f/EzewAz9vo/Pn+3dzizczR1dTY2NbbxcLJxb3I5OHivb/YANPW5/jv+Pv4+//+/v39/f///8O9xT8hRy0WOoZdfgDW1eb39f3y8/ju8PPy9ff///+4t8EoFTggEziUVXkA1pvJ1Jej2JGO2IZ61n9z2oB1zGpjrkRDrUVF1lVl9EeDFNRMBPsAAAAASUVORK5CYII="}},29743:(e,t,s)=>{e.exports={src:{srcSet:s.p+"assets/ideal-img/datagit.52152e6.640.png 640w,"+s.p+"assets/ideal-img/datagit.8ff0610.1030.png 1030w",images:[{path:s.p+"assets/ideal-img/datagit.52152e6.640.png",width:640,height:356},{path:s.p+"assets/ideal-img/datagit.8ff0610.1030.png",width:1030,height:573}],src:s.p+"assets/ideal-img/datagit.52152e6.640.png",toString:function(){return s.p+"assets/ideal-img/datagit.52152e6.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAtUlEQVR4nB2MSwtBQRzF5/NaIEUUGysrC2UhWfkIlkpdRd0QyWO8UlxN6rpkrjvP/4yhTqfTOf0Oap/o/M7WRCwvYroQ0yH3Pe55rD+mzR5BK/Ky1oJxZrkCKvUjTpQGa+UIhwgHkRuEAuk6DU6MCc6l1nq2JOh0e7rZmB/+4eadQPQW8KNtMNqg8/XhElPglEiIJYSU8f97NJigbcdft7q4Ud/Xyriax5Xcrpg5FNLHUpakcl/Tt57UbDm38AAAAABJRU5ErkJggg=="}},42431:(e,t,s)=>{e.exports={src:{srcSet:s.p+"assets/ideal-img/dyte.73c64e7.640.png 640w,"+s.p+"assets/ideal-img/dyte.fc5d80d.1030.png 1030w",images:[{path:s.p+"assets/ideal-img/dyte.73c64e7.640.png",width:640,height:356},{path:s.p+"assets/ideal-img/dyte.fc5d80d.1030.png",width:1030,height:573}],src:s.p+"assets/ideal-img/dyte.73c64e7.640.png",toString:function(){return s.p+"assets/ideal-img/dyte.73c64e7.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAwElEQVR4nBWKPQ/BQACG7/cakA6SSsTIRGIzSCQGGzExYCEkGq3Ptj4qImh9XLWH0+pdz3mmJ+/zguz4Vp9AaYfk3Uue+krfH3Zxp+1WW89c7QLKrVmjqc/1g2WdPj6mjIYsJDRgjPU0G8hbixBqIryH7tl93/EXegR5lGdlYQLVMLnBh2M7TkA4lNA/fDwOVLA2LMpC3s7X2wXa0EUIY48fGbO7EtBKI7VYWRXyeia5TAtaSliJsU0iuhHjZkT4AbKqmp/l23uuAAAAAElFTkSuQmCC"}},97314:(e,t,s)=>{e.exports={src:{srcSet:s.p+"assets/ideal-img/hasura.bc785e1.640.png 640w,"+s.p+"assets/ideal-img/hasura.137e254.1030.png 1030w",images:[{path:s.p+"assets/ideal-img/hasura.bc785e1.640.png",width:640,height:356},{path:s.p+"assets/ideal-img/hasura.137e254.1030.png",width:1030,height:573}],src:s.p+"assets/ideal-img/hasura.bc785e1.640.png",toString:function(){return s.p+"assets/ideal-img/hasura.bc785e1.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVR4nAG6AEX/AFmgumOEmGyEm2R6ll9plmBbl1pWkldblU1kmlN6tQBFXm0VGiEmLTQgKCwcJCcdJygbJSUWHiARGxwsSGEASl1sGSIqJS81KzI4KDA1JCswJCwyISkvGiAiOUJZAFJgbhskKyUuNSQtNR4nLiIqMh4mLiMqMhooLk42SwBOWWkQHiUcKjQhM0EdLjwkNUIeMT4iMT4ZNEFYMUUAt36soWhzqmZjqVpPplJIqFBHqElCq0lCpkhAxUpUcrgya3rIEDYAAAAASUVORK5CYII="}},31256:(e,t,s)=>{e.exports={src:{srcSet:s.p+"assets/ideal-img/ionic.fa7100c.640.png 640w,"+s.p+"assets/ideal-img/ionic.b257f51.1030.png 1030w",images:[{path:s.p+"assets/ideal-img/ionic.fa7100c.640.png",width:640,height:356},{path:s.p+"assets/ideal-img/ionic.b257f51.1030.png",width:1030,height:573}],src:s.p+"assets/ideal-img/ionic.fa7100c.640.png",toString:function(){return s.p+"assets/ideal-img/ionic.fa7100c.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVR4nAG6AEX/AJbY7s7o9tXo+tPk+8HK/MbA+ci/9sLB98HM+Zi26gDK3ej//Pzy8vLt6+rn6+34+/n////x8u/w7OXD1uoA0d7p////7u/w4uPm6Ojr7e7z9PT309TW19fWub7UANTd6P///vj4+Pf4+fr6/Pr7/fb3+tre6P3//tGzxADZ3ej8///z9/n0+fn1+vr2+vrz+PvO2Of2///crLoA1pzI1Zmj2ZOP2Yh814B02Hxy13du03Bp2nlv42ZvKW6aTYAYkXMAAAAASUVORK5CYII="}},10712:(e,t,s)=>{e.exports={src:{srcSet:s.p+"assets/ideal-img/outerbounds.1551bd2.640.png 640w,"+s.p+"assets/ideal-img/outerbounds.8f237b6.1030.png 1030w",images:[{path:s.p+"assets/ideal-img/outerbounds.1551bd2.640.png",width:640,height:356},{path:s.p+"assets/ideal-img/outerbounds.8f237b6.1030.png",width:1030,height:573}],src:s.p+"assets/ideal-img/outerbounds.1551bd2.640.png",toString:function(){return s.p+"assets/ideal-img/outerbounds.1551bd2.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAwUlEQVR4nAXBPU+DQBgA4Pu7Gk0kMbjUybWLkwmDkz/BiYQmNpVBUglqAMVobK0VA3cc930HvD4PCiqa1irbiuS9T1K5Xuo4YouIhitydbtHT98NwIRxS9o/1uNhMDDJ0XEAHRc1yj5+B2cZF9pYZZwxTnOmWA+DSh6/0HO1c0YLITHhdSO5sIJ2pCUT2M1dhqrPegTgUlHGmJTaWkJpizsNUxPeo/L6IQ9uyst5fuG/nJ8UM6/0j15PD9/Ojn8OvH/UO5wdIdW5swAAAABJRU5ErkJggg=="}},13296:(e,t,s)=>{e.exports={src:{srcSet:s.p+"assets/ideal-img/quickwit.0d2bdce.640.png 640w,"+s.p+"assets/ideal-img/quickwit.9fe97e2.1030.png 1030w",images:[{path:s.p+"assets/ideal-img/quickwit.0d2bdce.640.png",width:640,height:356},{path:s.p+"assets/ideal-img/quickwit.9fe97e2.1030.png",width:1030,height:573}],src:s.p+"assets/ideal-img/quickwit.0d2bdce.640.png",toString:function(){return s.p+"assets/ideal-img/quickwit.0d2bdce.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVR4nAG6AEX/AFuft2aClbfL3djp/8zP+MvA9se99L/C97yt3Zmd1ABKX2wiIie6u77w7+3t7On///v+/fr7//z/9/PGy+EAVWRzKCoyvb/C6uvr4ODi7+7w8vLz8vP1////ztToAFxmdCkrM7/Bw/Py8ufo6Ons6/T19P78/P///+TF1gBYXm0cIyu3vMDj6+rZ3t/b4ODn7O31+fr8///uvssAuYCtpGl0zYeD14l70X1w13xx13dt2XRr23lw52pzTXWFbIJJ0W4AAAAASUVORK5CYII="}},48426:(e,t,s)=>{e.exports={src:{srcSet:s.p+"assets/ideal-img/react-native.a3415f1.640.png 640w,"+s.p+"assets/ideal-img/react-native.7fdb38b.1030.png 1030w",images:[{path:s.p+"assets/ideal-img/react-native.a3415f1.640.png",width:640,height:356},{path:s.p+"assets/ideal-img/react-native.7fdb38b.1030.png",width:1030,height:573}],src:s.p+"assets/ideal-img/react-native.a3415f1.640.png",toString:function(){return s.p+"assets/ideal-img/react-native.a3415f1.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVR4nAG6AEX/AGapwnuXp4WWqYKSqoKErYN1rYF2rXRzqn2Jt26MwAC/0drp4uDG0dSpvsS+0dTI3d691NnR3N79+PC/0eQA0+Dp///90+rystnmt9vnud7rp8bh1Obx////ztPoANXc5vz6+vTz8+nl5O3q6vn29vv39v36+v///+PG1gDY3Ofz9/Xv8/Xq7vDz9/nz+frz+fv5/Pz8///uvssA1ZzJ05eh1Y+K04J12YJ22X502npw23Zu23lv5mpyzQSO+/+AUU4AAAAASUVORK5CYII="}},58155:(e,t,s)=>{e.exports={src:{srcSet:s.p+"assets/ideal-img/figma.15dd2d7.640.png 640w,"+s.p+"assets/ideal-img/figma.d0ffd9c.1030.png 1030w",images:[{path:s.p+"assets/ideal-img/figma.15dd2d7.640.png",width:640,height:356},{path:s.p+"assets/ideal-img/figma.d0ffd9c.1030.png",width:1030,height:573}],src:s.p+"assets/ideal-img/figma.15dd2d7.640.png",toString:function(){return s.p+"assets/ideal-img/figma.15dd2d7.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVR4nAG6AEX/AHCswX6aqIearIOUq36BqoF3rX93rnZ2q254pWeFuQDD09zv6ebo6Ofl5OTp6eXv8Orx8u3s7ej07+e9z+EA0t/o////+fr66Ojp9fX2+fn5+fn6/P39////0NToANbe5/37+fj4+OXk5OPj5+Tj5+vq6/z6+////+TF1gDe4ez////z9/jf4+rg5O3m6vDr8PL5/Pz9///uvssA153J1pqj2ZKO1YN40nxy1Xtw13dt3HZu23lv5mpymEqSTZvMMPsAAAAASUVORK5CYII="}},9258:(e,t,s)=>{e.exports={src:{srcSet:s.p+"assets/ideal-img/gulp.d4c3fc5.640.png 640w,"+s.p+"assets/ideal-img/gulp.6ea1e58.1030.png 1030w",images:[{path:s.p+"assets/ideal-img/gulp.d4c3fc5.640.png",width:640,height:356},{path:s.p+"assets/ideal-img/gulp.6ea1e58.1030.png",width:1030,height:573}],src:s.p+"assets/ideal-img/gulp.d4c3fc5.640.png",toString:function(){return s.p+"assets/ideal-img/gulp.d4c3fc5.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVR4nAG6AEX/AJK2zL6lssOmt8GiubuLs7x+s7d7srF+tKV/q4eFugDU3eb/8/D97+//8u/97un45N/76uX57en/7OPByNoA0N/o8vTz7fHx7fHx8fT1/P7/+fX29ODj////ztLmANHY4u/t6/Dv8PDu7vX19f////rv7/Xa2////+TF1QDg4+7////9/v7+///8/f319vf3+vv2+Pn4///ruscA153J1Zmi2pOP2oh714F02H5z2Xlv3HZu23lw52py3gmWbSlfuv8AAAAASUVORK5CYII="}},44827:(e,t,s)=>{e.exports={src:{srcSet:s.p+"assets/ideal-img/iota.925442f.640.png 640w,"+s.p+"assets/ideal-img/iota.7ed609f.1030.png 1030w",images:[{path:s.p+"assets/ideal-img/iota.925442f.640.png",width:640,height:356},{path:s.p+"assets/ideal-img/iota.7ed609f.1030.png",width:1030,height:573}],src:s.p+"assets/ideal-img/iota.925442f.640.png",toString:function(){return s.p+"assets/ideal-img/iota.925442f.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVR4nAG6AEX/AFKYtFV1jl11kVxzlFlilFpVlk9LjUdLi0JSik5uqQA1TGYSFy4lLUMSGTAKFywIFCgmN0koOU0FDB8mQWQAOlBoGiU7NURYHDJHEh83DBQsZJGpbJeuBQ8lSUZpAD9PZwYRJxApPRRCUgsWLR0sQUlvkkhoiw8gNFIxUAA9R2AACB4FEigCDSUEEigOHjQSJkEVJ0IAGCxJITwAtHuqnWNypmNjpVZOplJKo0tFokI7pEE8okI/xEhVe5wyRQKh1/EAAAAASUVORK5CYII="}},11342:(e,t,s)=>{e.exports={src:{srcSet:s.p+"assets/ideal-img/lacework.c68d75b.640.png 640w,"+s.p+"assets/ideal-img/lacework.d175372.1030.png 1030w",images:[{path:s.p+"assets/ideal-img/lacework.c68d75b.640.png",width:640,height:356},{path:s.p+"assets/ideal-img/lacework.d175372.1030.png",width:1030,height:573}],src:s.p+"assets/ideal-img/lacework.c68d75b.640.png",toString:function(){return s.p+"assets/ideal-img/lacework.c68d75b.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVR4nAG6AEX/AI3U7rnd78Te8cLa8b7I87+69ri29ayy8qGy7oeo5gCc1eWy3OK94OTI5eXM6/K43/+bw/6BqfxjivxSgOoAt93p1/b63PX65fr83/T8zeT9vdT8rMT6nrj/hpzmAN3k7fTx8PLw8fv6+vHv8P/+/Pj39fTw7P///+TH1gDe4ezx9vbx9ff2+vvw9ff3/P3x9vjp7vLy///pu8kA153Jz5Se1ZCM2IZ60Xtv1Xtw13Zt1G5m1nRr5mpyezCTnExaW/kAAAAASUVORK5CYII="}},70054:(e,t,s)=>{e.exports={src:{srcSet:s.p+"assets/ideal-img/react-navigation.934c9f1.640.png 640w,"+s.p+"assets/ideal-img/react-navigation.b259138.1030.png 1030w",images:[{path:s.p+"assets/ideal-img/react-navigation.934c9f1.640.png",width:640,height:356},{path:s.p+"assets/ideal-img/react-navigation.b259138.1030.png",width:1030,height:573}],src:s.p+"assets/ideal-img/react-navigation.934c9f1.640.png",toString:function(){return s.p+"assets/ideal-img/react-navigation.934c9f1.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVR4nAG6AEX/AJna8c3n9tLl99Hh+c3Q+s3C+cnA+L+/9bfC75Wz6ADO3u728Pjw7/j19Pv19fv19vr29/vz9Pj79/jD1O4Aydfr3dzv2Nrp19fkzc7gzs7g29vmxMbjtbbfvsTiAMzU6c/O7NDR6OTk7c/O3aSluObl7bOy2ayx29W20wDJzejQ1fDR1fDb3/TZ3vHS1+za3/PQ0+/R4PnZq8cA0pjHz5Oj1I2P1YN71H501Xtz03Nu1XBt1HNu4WRx/7mSxfcad4sAAAAASUVORK5CYII="}},42444:(e,t,s)=>{e.exports={src:{srcSet:s.p+"assets/ideal-img/sap-cloud.2ba4181.640.png 640w,"+s.p+"assets/ideal-img/sap-cloud.87fd77f.1030.png 1030w",images:[{path:s.p+"assets/ideal-img/sap-cloud.2ba4181.640.png",width:640,height:356},{path:s.p+"assets/ideal-img/sap-cloud.87fd77f.1030.png",width:1030,height:573}],src:s.p+"assets/ideal-img/sap-cloud.2ba4181.640.png",toString:function(){return s.p+"assets/ideal-img/sap-cloud.2ba4181.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVR4nAG6AEX/AJnT3M3c1dLa1tDW187G2M6318m12MK217q50Zas1ADUrEz/pQD9pwn/qw//ty3/uS7/rw/9rQv/rADGoUsA2bNh/7Ic/bgv/7Yo9rxR9rtR/7Ur/bQv/7Mcz6JaANzk7f///8XHyN3g4f//+v///tHPyNzZzv///+TG1QDf4u7////O19vX4+T7///4/f/U3NLW2cj5///uvssA1p3Jz5Sd14+J14N1031w03ht1HNr1XFq1XRp5mlyjnGEL7XZrpAAAAAASUVORK5CYII="}},11937:(e,t,s)=>{e.exports={src:{srcSet:s.p+"assets/ideal-img/snapchat.e815a99.640.png 640w,"+s.p+"assets/ideal-img/snapchat.ea1f1e4.1030.png 1030w",images:[{path:s.p+"assets/ideal-img/snapchat.e815a99.640.png",width:640,height:356},{path:s.p+"assets/ideal-img/snapchat.ea1f1e4.1030.png",width:1030,height:573}],src:s.p+"assets/ideal-img/snapchat.e815a99.640.png",toString:function(){return s.p+"assets/ideal-img/snapchat.e815a99.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVR4nAG6AEX/AHGys4iijpCilIuck4mMkIp/koV9lX9/lHJ8h2iFpADR2Ur+6wD05wP36gDw5RHy6BD67gD37AP/8ADBy0cAsLhQwbgEv7gRwbcMvbQWu7QWwLkQwLgQxbwEp6ZKAD5IY19XEFpVHBQhNywoLzM0LS8+PxsYIhgdI1E0SQBJTVw3OB84OikiLS8oLioxLSwpLismKiwdLCpbLTkAuH6po2l3q2Zlr1xPq1RJqE9Fq0tCsk1Er01Dx0pT24NMwfdnnlIAAAAASUVORK5CYII="}},44102:(e,t,s)=>{e.exports={src:{srcSet:s.p+"assets/ideal-img/solana.11c06b5.640.png 640w,"+s.p+"assets/ideal-img/solana.59b8299.1030.png 1030w",images:[{path:s.p+"assets/ideal-img/solana.11c06b5.640.png",width:640,height:356},{path:s.p+"assets/ideal-img/solana.59b8299.1030.png",width:1030,height:573}],src:s.p+"assets/ideal-img/solana.11c06b5.640.png",toString:function(){return s.p+"assets/ideal-img/solana.11c06b5.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVR4nAG6AEX/AJfa783n9dXo+c/g9szP98zB98i/98C/9LjD7pe06ADS5O3//Pj7/Pr8/Pr3+/X7/vn8/fr2+/b///vG2e4A1uPs9Pf08fT19fX27PHw9vb38/T07PHy/f78zNHlAN3l7v////z+/v7///z+/f////7+/v38/f///+TG1gCcoKuWmZiVmZqWm5yXm5yVmZmWm5yXmZuRnp2qfIgAsHail1xmn1hToU9CnUc6nEE2nz81oTw0nToxv0NLGxWM/uT7PyYAAAAASUVORK5CYII="}},33339:(e,t,s)=>{e.exports={src:{srcSet:s.p+"assets/ideal-img/stackblitz.8e72b20.640.png 640w,"+s.p+"assets/ideal-img/stackblitz.b6d2350.1030.png 1030w",images:[{path:s.p+"assets/ideal-img/stackblitz.8e72b20.640.png",width:640,height:356},{path:s.p+"assets/ideal-img/stackblitz.b6d2350.1030.png",width:1030,height:573}],src:s.p+"assets/ideal-img/stackblitz.8e72b20.640.png",toString:function(){return s.p+"assets/ideal-img/stackblitz.8e72b20.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVR4nAG6AEX/AGmswn6Zp4iarIOUq3+Dq35zqXpxqXJyp2l1omaEuADL2+Tx7Ons6urw7evs7Oj6+vX6+/b09fH//va+0OIA2ebv/v79+vv8+P//8/f5y8vOwcLFvL/D09fYzdLmAN3m7////fj6+fj//9bv9iEmLAUJDgYOFhwtM9W4yQDLz9ne4eDZ3d7a4OLE1ttze39mbXFmbHBqenrSpLAAv4Wyr3R+t3Fut2ZZuGBTwmhcxWRbx2JaxGJZz1Rc5p58VGKBM6kAAAAASUVORK5CYII="}},45785:(e,t,s)=>{e.exports={src:{srcSet:s.p+"assets/ideal-img/supabase.c682b42.640.png 640w,"+s.p+"assets/ideal-img/supabase.a1c0e2c.1030.png 1030w",images:[{path:s.p+"assets/ideal-img/supabase.c682b42.640.png",width:640,height:356},{path:s.p+"assets/ideal-img/supabase.a1c0e2c.1030.png",width:1030,height:573}],src:s.p+"assets/ideal-img/supabase.c682b42.640.png",toString:function(){return s.p+"assets/ideal-img/supabase.c682b42.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAwUlEQVR4nGOImL0hoboju64/rbw3MaUnIbQ7Jrg7PLzHN6IlpHApg1t4vLggr5KigpqqsrS0uKSUCBBJy0pIiPAYuYQxBMaly8vKaGlr6+rqampqqatpaGpoaWhoycnJ2DuHM4THZcjLSutoaxsZGgBJDXV1A319Az09JVXlUHMPhrDIZBEJUWU1dQ0dXSU1dTklZTVtHVUNTVElhRhdK4ad9WsWpxeuTk1YFemzPNB1ha/TSk/7Ne52K91sj3kFAQBKoS+8hI/oXQAAAABJRU5ErkJggg=="}},11384:(e,t,s)=>{e.exports={src:{srcSet:s.p+"assets/ideal-img/tauri.b9dc5c1.640.png 640w,"+s.p+"assets/ideal-img/tauri.0e2fd42.1030.png 1030w",images:[{path:s.p+"assets/ideal-img/tauri.b9dc5c1.640.png",width:640,height:356},{path:s.p+"assets/ideal-img/tauri.0e2fd42.1030.png",width:1030,height:573}],src:s.p+"assets/ideal-img/tauri.b9dc5c1.640.png",toString:function(){return s.p+"assets/ideal-img/tauri.b9dc5c1.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVR4nAG6AEX/AFucsWR/jG+Ckmd3j2BkjWFWjV9YkltbkVBbiFV0qQBFWWITEREXGRsuLiM4NzI0NjIuKhkxNTYyMzE4SFYAQ1lmSkM2UExELTk4SkpKR0lKPzcnP0lYPUpaR0dSAEhWY0VDN0xHPR4gJDc4PDM0NyEkKCknIyUmG1w9SwBNUl0QHB8ZIycbHyExNjk2Oz0ZHiAlJycbJyJcLTkAtXypqGt1rmZirVxPpk9DqE1CrExCrUlAqEc/xUlSoFE1BbONC+UAAAAASUVORK5CYII="}}}]);