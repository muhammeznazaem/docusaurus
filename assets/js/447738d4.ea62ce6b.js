"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["21463"],{8334:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>m,assets:()=>c,toc:()=>u,frontMatter:()=>d});var r=JSON.parse('{"id":"guides/docs/sidebar/autogenerated","title":"Autogenerated","description":"Docusaurus can create a sidebar automatically from your filesystem structure: each folder creates a sidebar category, and each file creates a doc link.","source":"@site/docs/guides/docs/sidebar/autogenerated.mdx","sourceDirName":"guides/docs/sidebar","slug":"/sidebar/autogenerated","permalink":"/docs/sidebar/autogenerated","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/docs/sidebar/autogenerated.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1728636624000,"frontMatter":{"slug":"/sidebar/autogenerated"},"sidebar":"docs","previous":{"title":"Sidebar items","permalink":"/docs/sidebar/items"},"next":{"title":"Using multiple sidebars","permalink":"/docs/sidebar/multiple-sidebars"}}'),a=t("24246"),i=t("80980"),s=t("15398"),o=t("58636");let d={slug:"/sidebar/autogenerated"},l="Autogenerated",c={},u=[{value:"Category index convention",id:"category-index-convention",level:2},{value:"Autogenerated sidebar metadata",id:"autogenerated-sidebar-metadata",level:2},{value:"Doc item metadata",id:"doc-item-metadata",level:3},{value:"Category item metadata",id:"category-item-metadata",level:3},{value:"Using number prefixes",id:"using-number-prefixes",level:2},{value:"Customize the sidebar items generator",id:"customize-the-sidebar-items-generator",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Details:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"autogenerated",children:"Autogenerated"})}),"\n","\n",(0,a.jsxs)(n.p,{children:["Docusaurus can ",(0,a.jsx)(n.strong,{children:"create a sidebar automatically"})," from your ",(0,a.jsx)(n.strong,{children:"filesystem structure"}),": each folder creates a sidebar category, and each file creates a doc link."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type SidebarItemAutogenerated = {\n  type: 'autogenerated';\n  dirName: string; // Source folder to generate the sidebar slice from (relative to docs)\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"Docusaurus can generate a full sidebar from your docs folder:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  myAutogeneratedSidebar: [\n    // highlight-start\n    {\n      type: 'autogenerated',\n      dirName: '.', // '.' means the current docs folder\n    },\n    // highlight-end\n  ],\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["An ",(0,a.jsx)(n.code,{children:"autogenerated"})," item is converted by Docusaurus to a ",(0,a.jsx)(n.strong,{children:"sidebar slice"})," (also discussed in ",(0,a.jsx)(n.a,{href:"/docs/sidebar/items#category-shorthand",children:"category shorthands"}),"): a list of items of type ",(0,a.jsx)(n.code,{children:"doc"})," or ",(0,a.jsx)(n.code,{children:"category"}),", so you can splice ",(0,a.jsxs)(n.strong,{children:["multiple ",(0,a.jsx)(n.code,{children:"autogenerated"})," items"]})," from multiple directories, interleaving them with regular sidebar items, in one sidebar level."]}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"A real-world example"}),(0,a.jsx)(n.p,{children:"Consider this file structure:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docs\n\u251C\u2500\u2500 api\n\u2502   \u251C\u2500\u2500 product1-api\n\u2502   \u2502   \u2514\u2500\u2500 api.md\n\u2502   \u2514\u2500\u2500 product2-api\n\u2502       \u251C\u2500\u2500 basic-api.md\n\u2502       \u2514\u2500\u2500 pro-api.md\n\u251C\u2500\u2500 intro.md\n\u2514\u2500\u2500 tutorials\n    \u251C\u2500\u2500 advanced\n    \u2502   \u251C\u2500\u2500 advanced1.md\n    \u2502   \u251C\u2500\u2500 advanced2.md\n    \u2502   \u2514\u2500\u2500 read-more\n    \u2502       \u251C\u2500\u2500 resource1.md\n    \u2502       \u2514\u2500\u2500 resource2.md\n    \u251C\u2500\u2500 easy\n    \u2502   \u251C\u2500\u2500 easy1.md\n    \u2502   \u2514\u2500\u2500 easy2.md\n    \u251C\u2500\u2500 tutorial-end.md\n    \u251C\u2500\u2500 tutorial-intro.md\n    \u2514\u2500\u2500 tutorial-medium.md\n"})}),(0,a.jsx)(n.p,{children:"And assume every doc's ID is just its file name. If you define an autogenerated sidebar like this:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  mySidebar: [\n    'intro',\n    {\n      type: 'category',\n      label: 'Tutorials',\n      items: [\n        'tutorial-intro',\n        // highlight-start\n        {\n          type: 'autogenerated',\n          dirName: 'tutorials/easy', // Generate sidebar slice from docs/tutorials/easy\n        },\n        // highlight-end\n        'tutorial-medium',\n        // highlight-start\n        {\n          type: 'autogenerated',\n          dirName: 'tutorials/advanced', // Generate sidebar slice from docs/tutorials/advanced\n        },\n        // highlight-end\n        'tutorial-end',\n      ],\n    },\n    // highlight-start\n    {\n      type: 'autogenerated',\n      dirName: 'api', // Generate sidebar slice from docs/api\n    },\n    // highlight-end\n    {\n      type: 'category',\n      label: 'Community',\n      items: ['team', 'chat'],\n    },\n  ],\n};\n"})}),(0,a.jsx)(n.p,{children:"It would be resolved as:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  mySidebar: [\n    'intro',\n    {\n      type: 'category',\n      label: 'Tutorials',\n      items: [\n        'tutorial-intro',\n        // highlight-start\n        // Two files in docs/tutorials/easy\n        'easy1',\n        'easy2',\n        // highlight-end\n        'tutorial-medium',\n        // highlight-start\n        // Two files and a folder in docs/tutorials/advanced\n        'advanced1',\n        'advanced2',\n        {\n          type: 'category',\n          label: 'read-more',\n          items: ['resource1', 'resource2'],\n        },\n        // highlight-end\n        'tutorial-end',\n      ],\n    },\n    // highlight-start\n    // Two folders in docs/api\n    {\n      type: 'category',\n      label: 'product1-api',\n      items: ['api'],\n    },\n    {\n      type: 'category',\n      label: 'product2-api',\n      items: ['basic-api', 'pro-api'],\n    },\n    // highlight-end\n    {\n      type: 'category',\n      label: 'Community',\n      items: ['team', 'chat'],\n    },\n  ],\n};\n"})}),(0,a.jsx)(n.p,{children:'Note how the autogenerate source directories themselves don\'t become categories: only the items they contain do. This is what we mean by "sidebar slice".'})]}),"\n",(0,a.jsx)(n.h2,{id:"category-index-convention",children:"Category index convention"}),"\n",(0,a.jsx)(n.p,{children:"Docusaurus can automatically link a category to its index document."}),"\n",(0,a.jsx)(n.p,{children:"A category index document is a document following one of those filename conventions:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Named as ",(0,a.jsx)(n.code,{children:"index"})," (case-insensitive): ",(0,a.jsx)(n.code,{children:"docs/Guides/index.md"})]}),"\n",(0,a.jsxs)(n.li,{children:["Named as ",(0,a.jsx)(n.code,{children:"README"})," (case-insensitive): ",(0,a.jsx)(n.code,{children:"docs/Guides/README.mdx"})]}),"\n",(0,a.jsxs)(n.li,{children:["Same name as parent folder: ",(0,a.jsx)(n.code,{children:"docs/Guides/Guides.md"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["This is equivalent to using a category with a ",(0,a.jsx)(n.a,{href:"/docs/sidebar/items#category-doc-link",children:"doc link"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  docs: [\n    // highlight-start\n    {\n      type: 'category',\n      label: 'Guides',\n      link: {type: 'doc', id: 'Guides/index'},\n      items: [],\n    },\n    // highlight-end\n  ],\n};\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Naming your introductory document ",(0,a.jsx)(n.code,{children:"README.md"})," makes it show up when browsing the folder using the GitHub interface, while using ",(0,a.jsx)(n.code,{children:"index.md"})," makes the behavior more in line with how HTML files are served."]})}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["If a folder only has one index page, it will be turned into a link instead of a category. This is useful for ",(0,a.jsx)(n.strong,{children:"asset collocation"}),":"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"some-doc\n\u251C\u2500\u2500 index.md\n\u251C\u2500\u2500 img1.png\n\u2514\u2500\u2500 img2.png\n"})})]}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Customizing category index matching"}),(0,a.jsxs)(n.p,{children:["It is possible to opt out any of the category index conventions, or define even more conventions. You can inject your own ",(0,a.jsx)(n.code,{children:"isCategoryIndex"})," matcher through the ",(0,a.jsx)(n.a,{href:"#customize-the-sidebar-items-generator",children:(0,a.jsx)(n.code,{children:"sidebarItemsGenerator"})})," callback. For example, you can also pick ",(0,a.jsx)(n.code,{children:"intro"})," as another file name eligible for automatically becoming the category index."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        async sidebarItemsGenerator({\n          ...args,\n          isCategoryIndex: defaultCategoryIndexMatcher, // The default matcher implementation, given below\n          defaultSidebarItemsGenerator,\n        }) {\n          return defaultSidebarItemsGenerator({\n            ...args,\n            // highlight-start\n            isCategoryIndex(doc) {\n              return (\n                // Also pick intro.md in addition to the default ones\n                doc.fileName.toLowerCase() === 'intro' ||\n                defaultCategoryIndexMatcher(doc)\n              );\n            },\n            // highlight-end\n          });\n        },\n      },\n    ],\n  ],\n};\n"})}),(0,a.jsx)(n.p,{children:"Or choose to not have any category index convention."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        async sidebarItemsGenerator({\n          ...args,\n          isCategoryIndex: defaultCategoryIndexMatcher, // The default matcher implementation, given below\n          defaultSidebarItemsGenerator,\n        }) {\n          return defaultSidebarItemsGenerator({\n            ...args,\n            // highlight-start\n            isCategoryIndex() {\n              // No doc will be automatically picked as category index\n              return false;\n            },\n            // highlight-end\n          });\n        },\n      },\n    ],\n  ],\n};\n"})}),(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"isCategoryIndex"})," matcher will be provided with three fields:"]}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"fileName"}),", the file's name without extension and with casing preserved"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"directories"}),", the list of directory names ",(0,a.jsx)(n.em,{children:"from the lowest level to the highest level"}),", relative to the docs root directory"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"extension"}),", the file's extension, with a leading dot."]}),"\n"]}),(0,a.jsxs)(n.p,{children:["For example, for a doc file at ",(0,a.jsx)(n.code,{children:"guides/sidebar/autogenerated.md"}),", the props the matcher receives are"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const props = {\n  fileName: 'autogenerated',\n  directories: ['sidebar', 'guides'],\n  extension: '.md',\n};\n"})}),(0,a.jsx)(n.p,{children:"The default implementation is:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"function isCategoryIndex({fileName, directories}) {\n  const eligibleDocIndexNames = [\n    'index',\n    'readme',\n    directories[0].toLowerCase(),\n  ];\n  return eligibleDocIndexNames.includes(fileName.toLowerCase());\n}\n"})})]}),"\n",(0,a.jsx)(n.h2,{id:"autogenerated-sidebar-metadata",children:"Autogenerated sidebar metadata"}),"\n",(0,a.jsxs)(n.p,{children:["For handwritten sidebar definitions, you would provide metadata to sidebar items through ",(0,a.jsx)(n.code,{children:"sidebars.js"}),"; for autogenerated, Docusaurus would read them from the item's respective file. In addition, you may want to adjust the relative position of each item because, by default, items within a sidebar slice will be generated in ",(0,a.jsx)(n.strong,{children:"alphabetical order"})," (using file and folder names)."]}),"\n",(0,a.jsx)(n.h3,{id:"doc-item-metadata",children:"Doc item metadata"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"label"}),", ",(0,a.jsx)(n.code,{children:"className"}),", and ",(0,a.jsx)(n.code,{children:"customProps"})," attributes are declared in front matter as ",(0,a.jsx)(n.code,{children:"sidebar_label"}),", ",(0,a.jsx)(n.code,{children:"sidebar_class_name"}),", and ",(0,a.jsx)(n.code,{children:"sidebar_custom_props"}),", respectively. Position can be specified in the same way, via ",(0,a.jsx)(n.code,{children:"sidebar_position"})," front matter."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-md",metastring:'title="docs/tutorials/tutorial-easy.md"',children:"---\n# highlight-start\nsidebar_position: 2\nsidebar_label: Easy\nsidebar_class_name: green\n# highlight-end\n---\n\n# Easy Tutorial\n\nThis is the easy tutorial!\n"})}),"\n",(0,a.jsx)(n.h3,{id:"category-item-metadata",children:"Category item metadata"}),"\n",(0,a.jsxs)(n.p,{children:["Add a ",(0,a.jsx)(n.code,{children:"_category_.json"})," or ",(0,a.jsx)(n.code,{children:"_category_.yml"})," file in the respective folder. You can specify any category metadata and also the ",(0,a.jsx)(n.code,{children:"position"})," metadata. ",(0,a.jsx)(n.code,{children:"label"}),", ",(0,a.jsx)(n.code,{children:"className"}),", ",(0,a.jsx)(n.code,{children:"position"}),", and ",(0,a.jsx)(n.code,{children:"customProps"})," will default to the respective values of the category's linked doc, if there is one."]}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(o.Z,{value:"JSON",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",metastring:'title="docs/tutorials/_category_.json"',children:'{\n  "position": 2.5,\n  "label": "Tutorial",\n  "collapsible": true,\n  "collapsed": false,\n  "className": "red",\n  "link": {\n    "type": "generated-index",\n    "title": "Tutorial overview"\n  },\n  "customProps": {\n    "description": "This description can be used in the swizzled DocCard"\n  }\n}\n'})})}),(0,a.jsx)(o.Z,{value:"YAML",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",metastring:'title="docs/tutorials/_category_.yml"',children:"position: 2.5 # float position is supported\nlabel: 'Tutorial'\ncollapsible: true # make the category collapsible\ncollapsed: false # keep the category open by default\nclassName: red\nlink:\n  type: generated-index\n  title: Tutorial overview\ncustomProps:\n  description: This description can be used in the swizzled DocCard\n"})})})]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.p,{children:["If the ",(0,a.jsx)(n.code,{children:"link"})," is explicitly specified, Docusaurus will not apply any ",(0,a.jsx)(n.a,{href:"#category-index-convention",children:"default conventions"}),"."]}),(0,a.jsxs)(n.p,{children:["The doc links can be specified relatively, e.g. if the category is generated with the ",(0,a.jsx)(n.code,{children:"guides"})," directory, ",(0,a.jsx)(n.code,{children:'"link": {"type": "doc", "id": "intro"}'})," will be resolved to the ID ",(0,a.jsx)(n.code,{children:"guides/intro"}),", only falling back to ",(0,a.jsx)(n.code,{children:"intro"})," if a doc with the former ID doesn't exist."]}),(0,a.jsxs)(n.p,{children:["You can also use ",(0,a.jsx)(n.code,{children:"link: null"})," to opt out of default conventions and not generate any category index page."]})]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["The position metadata is only used ",(0,a.jsx)(n.strong,{children:"within a sidebar slice"}),": Docusaurus does not re-order other items of your sidebar."]})}),"\n",(0,a.jsx)(n.h2,{id:"using-number-prefixes",children:"Using number prefixes"}),"\n",(0,a.jsx)(n.p,{children:"A simple way to order an autogenerated sidebar is to prefix docs and folders by number prefixes, which also makes them appear in the file system in the same order when sorted by file name:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docs\n\u251C\u2500\u2500 01-Intro.md\n\u251C\u2500\u2500 02-Tutorial Easy\n\u2502   \u251C\u2500\u2500 01-First Part.md\n\u2502   \u251C\u2500\u2500 02-Second Part.md\n\u2502   \u2514\u2500\u2500 03-End.md\n\u251C\u2500\u2500 03-Tutorial Advanced\n\u2502   \u251C\u2500\u2500 01-First Part.md\n\u2502   \u251C\u2500\u2500 02-Second Part.md\n\u2502   \u251C\u2500\u2500 03-Third Part.md\n\u2502   \u2514\u2500\u2500 04-End.md\n\u2514\u2500\u2500 04-End.md\n"})}),"\n",(0,a.jsxs)(n.p,{children:["To make it ",(0,a.jsx)(n.strong,{children:"easier to adopt"}),", Docusaurus supports ",(0,a.jsx)(n.strong,{children:"multiple number prefix patterns"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["By default, Docusaurus will ",(0,a.jsx)(n.strong,{children:"remove the number prefix"})," from the doc id, title, label, and URL paths."]}),"\n",(0,a.jsxs)(n.admonition,{type:"warning",children:[(0,a.jsxs)(n.p,{children:[(0,a.jsxs)(n.strong,{children:["Prefer using ",(0,a.jsx)(n.a,{href:"#autogenerated-sidebar-metadata",children:"additional metadata"})]}),"."]}),(0,a.jsxs)(n.p,{children:["Updating a number prefix can be annoying, as it can require ",(0,a.jsx)(n.strong,{children:"updating multiple existing Markdown links"}),":"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",metastring:'title="docs/02-Tutorial Easy/01-First Part.md"',children:"- Check the [Tutorial End](../04-End.mdx);\n+ Check the [Tutorial End](../05-End.mdx);\n"})})]}),"\n",(0,a.jsx)(n.h2,{id:"customize-the-sidebar-items-generator",children:"Customize the sidebar items generator"}),"\n",(0,a.jsxs)(n.p,{children:["You can provide a custom ",(0,a.jsx)(n.code,{children:"sidebarItemsGenerator"})," function in the docs plugin (or preset) config:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        async sidebarItemsGenerator({\n          defaultSidebarItemsGenerator,\n          numberPrefixParser,\n          item,\n          version,\n          docs,\n          categoriesMetadata,\n          isCategoryIndex,\n        }) {\n          // Example: return an hardcoded list of static sidebar items\n          return [\n            {type: 'doc', id: 'doc1'},\n            {type: 'doc', id: 'doc2'},\n          ];\n        },\n        // highlight-end\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Re-use and enhance the default generator"})," instead of writing a generator from scratch: ",(0,a.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-plugin-content-docs/src/sidebars/generator.ts",children:"the default generator we provide"})," is 250 lines long."]}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Add, update, filter, re-order"})," the sidebar items according to your use case:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"// highlight-start\n// Reverse the sidebar items ordering (including nested category items)\nfunction reverseSidebarItems(items) {\n  // Reverse items in categories\n  const result = items.map((item) => {\n    if (item.type === 'category') {\n      return {...item, items: reverseSidebarItems(item.items)};\n    }\n    return item;\n  });\n  // Reverse items at current level\n  result.reverse();\n  return result;\n}\n// highlight-end\n\nexport default {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        async sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}) {\n          const sidebarItems = await defaultSidebarItemsGenerator(args);\n          return reverseSidebarItems(sidebarItems);\n        },\n        // highlight-end\n      },\n    ],\n  ],\n};\n"})})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},58636:function(e,n,t){t.d(n,{Z:()=>s});var r=t("24246");t("27378");var a=t("90496");let i="tabItem_pnkT";function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i,s),hidden:t,children:n})}},15398:function(e,n,t){t.d(n,{Z:()=>I});var r=t("24246"),a=t("27378"),i=t("90496"),s=t("54947"),o=t("3620"),d=t("844"),l=t("97486"),c=t("32263"),u=t("16971");function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function m(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,r,a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var i=[],s=!0,o=!1;try{for(a=a.call(e);!(s=(t=a.next()).done)&&(i.push(t.value),!n||i.length!==n);s=!0);}catch(e){o=!0,r=e}finally{try{!s&&null!=a.return&&a.return()}finally{if(o)throw r}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return h(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return h(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e){var n,t;return null!==(t=null===(n=a.Children.toArray(e).filter(function(e){return"\n"!==e}).map(function(e){var n,t;if(!e||(0,a.isValidElement)(e)&&(n=e.props)&&(void 0===n?"undefined":(t=n)&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t)=="object"&&"value"in n)return e;throw Error("Docusaurus error: Bad <Tabs> child <".concat("string"==typeof e.type?e.type:e.type.name,'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.'))}))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function p(e){var n=e.value;return e.tabValues.some(function(e){return e.value===n})}var f=t("71607");let b="tabList_Qoir",x="tabItem_AQgk";function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){var r,a,i;r=e,a=n,i=t[n],a in r?Object.defineProperty(r,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[a]=i})}return e}function j(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}function v(e){var n=e.className,t=e.block,a=e.selectedValue,o=e.selectValue,d=e.tabValues,l=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=d[l.indexOf(n)].value;t!==a&&(c(n),o(t))},h=function(e){var n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var t,r=l.indexOf(e.currentTarget)+1;n=null!==(t=l[r])&&void 0!==t?t:l[0];break;case"ArrowLeft":var a,i=l.indexOf(e.currentTarget)-1;n=null!==(a=l[i])&&void 0!==a?a:l[l.length-1]}null==n||n.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:d.map(function(e){var n=e.value,t=e.label,s=e.attributes;return(0,r.jsx)("li",j(y({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return l.push(e)},onKeyDown:h,onClick:u},s),{className:(0,i.Z)("tabs__item",x,null==s?void 0:s.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)})})}function w(e){var n=e.lazy,t=e.children,s=e.selectedValue,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var d=o.find(function(e){return e.props.value===s});return d?(0,a.cloneElement)(d,{className:(0,i.Z)("margin-top--md",d.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:o.map(function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})})})}function k(e){var n=function(e){var n,t,r,i,s,h,f,b,x,y,j,v,w,k,I=e.defaultValue,N=e.queryString,O=e.groupId;var S=(t=(n=e).values,r=n.children,(0,a.useMemo)(function(){var e=null!=t?t:g(r).map(function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}});return!function(e){var n=(0,c.lx)(e,function(e,n){return e.value===n.value});if(n.length>0)throw Error('Docusaurus error: Duplicate values "'.concat(n.map(function(e){return e.value}).join(", "),'" found in <Tabs>. Every value needs to be unique.'))}(e),e},[t,r])),T=m((0,a.useState)(function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw Error('Docusaurus error: The <Tabs> has a defaultValue "'.concat(t,'" but none of its children has the corresponding value. Available values are: ').concat(r.map(function(e){return e.value}).join(", "),". If you intend to show no default tab, use defaultValue={null} instead."));return t}var a=null!==(n=r.find(function(e){return e.default}))&&void 0!==n?n:r[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:I,tabValues:S})}),2),C=T[0],P=T[1];var D=m((s=(i={queryString:void 0!==N&&N,groupId:O}).queryString,h=i.groupId,f=(0,o.k6)(),b=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:void 0!==s&&s,groupId:h}),[(0,l._X)(b),(0,a.useCallback)(function(e){if(!!b){var n,t,r=new URLSearchParams(f.location.search);r.set(b,e),f.replace((n=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){var r,a,i;r=e,a=n,i=t[n],a in r?Object.defineProperty(r,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[a]=i})}return e}({},f.location),t=(t={search:r.toString()},t),Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t})(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}),n))}},[b,f])]),2),E=D[0],A=D[1];var _=m((y=(x=({groupId:O}).groupId)?"docusaurus.tab.".concat(x):null,v=(j=m((0,u.Nk)(y),2))[0],w=j[1],[v,(0,a.useCallback)(function(e){if(!!y)w.set(e)},[y,w])]),2),G=_[0],V=_[1];var M=p({value:k=null!=E?E:G,tabValues:S})?k:null;return(0,d.Z)(function(){M&&P(M)},[M]),{selectedValue:C,selectValue:(0,a.useCallback)(function(e){if(!p({value:e,tabValues:S}))throw Error("Can't select invalid tab value=".concat(e));P(e),A(e),V(e)},[A,V,S]),tabValues:S}}(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container",b),children:[(0,r.jsx)(v,y({},n,e)),(0,r.jsx)(w,y({},n,e))]})}function I(e){var n=(0,f.Z)();return(0,r.jsx)(k,j(y({},e),{children:g(e.children)}),String(n))}},80980:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return s}});var r=t(27378);let a={},i=r.createContext(a);function s(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);