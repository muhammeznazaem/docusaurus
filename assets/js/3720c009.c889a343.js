"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["62898"],{61873:function(t,e,r){r.r(e),r.d(e,{default:function(){return j}});var n=r(24246);r(27378);var a=r(90496),i=r(57335),o=r(55951),l=r(88715),c=r(69086),u=r(69879),s=r(57922);function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){var n,a,i;n=t,a=e,i=r[e],a in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i})}return t}function g(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):(function(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r.push.apply(r,n)}return r})(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}),t}function p(t){var e=t.title;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.d,{title:e}),(0,n.jsx)(u.Z,{tag:"doc_tags_list"})]})}function b(t){var e=t.tags,r=t.title;return(0,n.jsx)(i.FG,{className:(0,a.Z)(o.k.page.docsTagsListPage),children:(0,n.jsx)("div",{className:"container margin-vert--lg",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,n.jsx)(s.Z,{as:"h1",children:r}),(0,n.jsx)(c.Z,{tags:e})]})})})})}function j(t){var e=(0,l.M)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p,g(f({},t),{title:e})),(0,n.jsx)(b,g(f({},t),{title:e}))]})}},63479:function(t,e,r){r.d(e,{Z:()=>l});var n=r("24246");r("27378");var a=r("90496"),i=r("35363");let o={tag:"tag_Nd8t",tagRegular:"tagRegular_TiLs",tagWithCount:"tagWithCount_AQg7"};function l(t){var e=t.permalink,r=t.label,l=t.count,c=t.description;return(0,n.jsxs)(i.Z,{href:e,title:c,className:(0,a.Z)(o.tag,l?o.tagWithCount:o.tagRegular),children:[r,l&&(0,n.jsx)("span",{children:l})]})}},69086:function(t,e,r){r.d(e,{Z:()=>u});var n=r("24246");r("27378");var a=r("88715"),i=r("63479"),o=r("57922");let l="tag_SyQ5";function c(t){var e=t.letterEntry;return(0,n.jsxs)("article",{children:[(0,n.jsx)(o.Z,{as:"h2",id:e.letter,children:e.letter}),(0,n.jsx)("ul",{className:"padding--none",children:e.tags.map(function(t){return(0,n.jsx)("li",{className:l,children:(0,n.jsx)(i.Z,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){var n,a,i;n=t,a=e,i=r[e],a in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i})}return t}({},t))},t.permalink)})}),(0,n.jsx)("hr",{})]})}function u(t){var e=t.tags,r=(0,a.P)(e);return(0,n.jsx)("section",{className:"margin-vert--lg",children:r.map(function(t){return(0,n.jsx)(c,{letterEntry:t},t.letter)})})}},88715:function(t,e,r){r.d(e,{M:function(){return o},P:function(){return l}});var n=r(77827);function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r,n,a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var i=[],o=!0,l=!1;try{for(a=a.call(t);!(o=(r=a.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(t){l=!0,n=t}finally{try{!o&&null!=a.return&&a.return()}finally{if(l)throw n}}return i}}(t,e)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,e)}}(t,e)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=function(){return(0,n.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function l(t){var e={};return Object.values(t).forEach(function(t){var r,n=t.label[0].toUpperCase();null!==(r=e[n])&&void 0!==r||(e[n]=[]),e[n].push(t)}),Object.entries(e).sort(function(t,e){var r=i(t,1)[0],n=i(e,1)[0];return r.localeCompare(n)}).map(function(t){var e=i(t,2);return{letter:e[0],tags:e[1].sort(function(t,e){return t.label.localeCompare(e.label)})}})}}}]);