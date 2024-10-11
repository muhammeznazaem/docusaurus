"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["59548"],{79753:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>u,frontMatter:()=>l});var r=JSON.parse('{"id":"api/misc/eslint-plugin/no-html-links","title":"no-html-links","description":"Ensure that the Docusaurus ` component is used instead of ` tags.","source":"@site/docs/api/misc/eslint-plugin/no-html-links.mdx","sourceDirName":"api/misc/eslint-plugin","slug":"/api/misc/@docusaurus/eslint-plugin/no-html-links","permalink":"/docs/api/misc/@docusaurus/eslint-plugin/no-html-links","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/misc/eslint-plugin/no-html-links.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1728636624000,"frontMatter":{"slug":"/api/misc/@docusaurus/eslint-plugin/no-html-links"},"sidebar":"api","previous":{"title":"\uD83D\uDCE6 eslint-plugin","permalink":"/docs/api/misc/@docusaurus/eslint-plugin"},"next":{"title":"no-untranslated-text","permalink":"/docs/api/misc/@docusaurus/eslint-plugin/no-untranslated-text"}}'),i=t("24246"),o=t("80980"),s=t("32240");let l={slug:"/api/misc/@docusaurus/eslint-plugin/no-html-links"},a="no-html-links",c={},u=[{value:"Rule Details",id:"details",level:2},{value:"Rule Configuration",id:"configuration",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"no-html-links",children:"no-html-links"})}),"\n","\n",(0,i.jsxs)(n.p,{children:["Ensure that the Docusaurus ",(0,i.jsx)(n.a,{href:"/docs/docusaurus-core#link",children:(0,i.jsx)(n.code,{children:"<Link>"})})," component is used instead of ",(0,i.jsx)(n.code,{children:"<a>"})," tags."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"<Link>"})," component has prefetching and preloading built-in. It also does build-time broken link detection, and helps Docusaurus understand your site's structure better."]}),"\n",(0,i.jsx)(n.h2,{id:"details",children:"Rule Details"}),"\n",(0,i.jsxs)(n.p,{children:["Examples of ",(0,i.jsx)(n.strong,{children:"incorrect"})," code for this rule:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<a href="/page">go to page!</a>\n\n<a href="https://x.com/docusaurus" target="_blank">X</a>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Examples of ",(0,i.jsx)(n.strong,{children:"correct"})," code for this rule:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import Link from \'@docusaurus/Link\'\n\n<Link to="/page">go to page!</Link>\n\n<Link to="https://x.com/docusaurus">X</Link>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Rule Configuration"}),"\n",(0,i.jsx)(n.p,{children:"Accepted fields:"}),"\n",(0,i.jsx)(s.Z,{children:(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Option"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ignoreFullyResolved"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsxs)(n.td,{children:["Set to true will not report any ",(0,i.jsx)(n.code,{children:"<a>"})," tags with absolute URLs including a protocol."]})]})})]})})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},32240:function(e,n,t){t.d(n,{Z:()=>d});var r=t("24246"),i=t("27378"),o=t("96700"),s=t("3620");let l="apiTable_e8hp";function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function c(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,r,i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var o=[],s=!0,l=!1;try{for(i=i.call(e);!(s=(t=i.next()).done)&&(o.push(t.value),!n||o.length!==n);s=!0);}catch(e){l=!0,r=e}finally{try{!s&&null!=i.return&&i.return()}finally{if(l)throw r}}return o}}(e,n)||function(e,n){if(e){if("string"==typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=i.forwardRef(function(e,n){var t=e.name,l=e.children,a=function(e){for(var n=e;(0,i.isValidElement)(n);)n=c(i.Children.toArray(n.props.children),1)[0];if("string"!=typeof n)throw Error("Could not extract APITable row name from JSX tree:\n".concat(JSON.stringify(e,null,2)));return n}(l),u=t?"".concat(t,"-").concat(a):a,d="#".concat(u),h=(0,s.k6)();return(0,o.Z)().collectAnchor(u),(0,r.jsx)("tr",{id:u,tabIndex:0,ref:h.location.hash===d?n:void 0,onClick:function(e){var n,t="TD"===e.target.tagName.toUpperCase(),r=!!(null===(n=window.getSelection())||void 0===n?void 0:n.toString());t&&!r&&h.push(d)},onKeyDown:function(e){"Enter"===e.key&&h.push(d)},children:l.props.children})});function d(e){var n=e.children,t=e.name;if("table"!==n.type)throw Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");var o=c(i.Children.toArray(n.props.children),2),s=o[0],a=o[1],d=(0,i.useRef)(null);(0,i.useEffect)(function(){var e;null===(e=d.current)||void 0===e||e.focus()},[d]);var h=i.Children.map(a.props.children,function(e){return(0,r.jsx)(u,{name:t,ref:d,children:e})});return(0,r.jsxs)("table",{className:l,children:[s,(0,r.jsx)("tbody",{children:h})]})}},80980:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var r=t(27378);let i={},o=r.createContext(i);function s(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);