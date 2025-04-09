"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["46453"],{10375:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>i,assets:()=>c,toc:()=>o,contentTitle:()=>l});var i=JSON.parse('{"id":"scripting/functions/clamp","title":"clamp","description":"Force a value to be inside a range.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/clamp.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/clamp","permalink":"/th/docs/scripting/functions/clamp","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/clamp.md","tags":[],"version":"current","frontMatter":{"title":"clamp","sidebar_label":"clamp","description":"Force a value to be inside a range.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"atan2","permalink":"/th/docs/scripting/functions/atan2"},"next":{"title":"db_close","permalink":"/th/docs/scripting/functions/db_close"}}'),a=t("85893"),s=t("50065");let r={title:"clamp",sidebar_label:"clamp",description:"Force a value to be inside a range.",tags:[]},l=void 0,c={},o=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function d(e){let n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"This function starts with lowercase letter."})}),"\n",(0,a.jsx)(n.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,a.jsx)(n.p,{children:"Force a value to be inside a range."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"value"}),(0,a.jsx)(n.td,{children:"The value to force in a range."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"min"}),(0,a.jsx)(n.td,{children:"The low bound of the range."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"max"}),(0,a.jsx)(n.td,{children:"The high bound of the range."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,a.jsx)(n.p,{children:"value, if it is in the range min\u2013max, min, if value is lower than min or max, if value is higher than max."}),"\n",(0,a.jsx)(n.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'new\n    valueA = 3,\n    valueB = 7,\n    valueC = 100\n;\nprintf("The value is: %d", clamp(valueA, 5, 10)); // output: "The value is: 5" because 3 is less than 5.\nprintf("The value is: %d", clamp(valueB, 5, 10)); // output: "The value is: 7" because 7 is between 5 and 10.\nprintf("The value is: %d", clamp(valueC, 5, 10)); // output: "The value is: 10" because 100 is more than 10.\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var i=t(67294);let a={},s=i.createContext(a);function r(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);