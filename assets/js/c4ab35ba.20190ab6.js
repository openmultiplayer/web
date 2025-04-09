"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["54172"],{40276:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>i,assets:()=>c,toc:()=>o,contentTitle:()=>l});var i=JSON.parse('{"id":"scripting/functions/clamp","title":"clamp","description":"Force a value to be inside a range.","source":"@site/docs/scripting/functions/clamp.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/clamp","permalink":"/docs/scripting/functions/clamp","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/clamp.md","tags":[{"inline":true,"label":"core","permalink":"/docs/tags/core"}],"version":"current","frontMatter":{"title":"clamp","sidebar_label":"clamp","description":"Force a value to be inside a range.","tags":["core"]},"sidebar":"docsSidebar","previous":{"title":"atan","permalink":"/docs/scripting/functions/atan2"},"next":{"title":"db_close","permalink":"/docs/scripting/functions/db_close"}}'),r=t("85893"),s=t("50065");let a={title:"clamp",sidebar_label:"clamp",description:"Force a value to be inside a range.",tags:["core"]},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components},{LowercaseNote:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Force a value to be inside a range."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"value"}),(0,r.jsx)(n.td,{children:"The value to force in a range."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"min"}),(0,r.jsxs)(n.td,{children:["The low bound of the range. ",(0,r.jsx)(n.em,{children:"(optional=cellmin)"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"max"}),(0,r.jsxs)(n.td,{children:["The high bound of the range. ",(0,r.jsx)(n.em,{children:"(optional=cellmax)"})]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:"value, if it is in the range min\u2013max, min, if value is lower than min or max, if value is higher than max."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'new\n    valueA = 3,\n    valueB = 7,\n    valueC = 100\n;\nprintf("The value is: %d", clamp(valueA, 5, 10)); // output: "The value is: 5" because 3 is less than 5.\nprintf("The value is: %d", clamp(valueB, 5, 10)); // output: "The value is: 7" because 7 is between 5 and 10.\nprintf("The value is: %d", clamp(valueC, 5, 10)); // output: "The value is: 10" because 100 is more than 10.\n'})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var i=t(67294);let r={},s=i.createContext(r);function a(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);