"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["7656"],{16553:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>a});var i=JSON.parse('{"id":"scripting/functions/floattan","title":"floattan","description":"Get the tangent from a given angle.","source":"@site/docs/scripting/functions/floattan.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/floattan","permalink":"/fil/docs/scripting/functions/floattan","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/floattan.md","tags":[{"inline":true,"label":"math","permalink":"/fil/docs/tags/math"},{"inline":true,"label":"floating-point","permalink":"/fil/docs/tags/floating-point"}],"version":"current","frontMatter":{"title":"floattan","sidebar_label":"floattan","description":"Get the tangent from a given angle.","tags":["math","floating-point"]},"sidebar":"docsSidebar","previous":{"title":"floatsub","permalink":"/fil/docs/scripting/functions/floatsub"},"next":{"title":"fmatch","permalink":"/fil/docs/scripting/functions/fmatch"}}'),s=t("85893"),l=t("50065");let r={title:"floattan",sidebar_label:"floattan",description:"Get the tangent from a given angle.",tags:["math","floating-point"]},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{LowercaseNote:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Get the tangent from a given angle. The input angle may be in radians, degrees or grades."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Float",":value"]}),(0,s.jsx)(n.td,{children:"The angle from which to get the tangent."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"anglemode"}),(0,s.jsxs)(n.td,{children:["The ",(0,s.jsx)(n.a,{href:"../resources/anglemodes",children:"angle mode"})," to use, depending on the value entered. (default: radian)"]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:"The tangent from the value entered."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    printf("The tangent from 30\xb0 is %.0f", floattan(30.0, degrees));\n    // Output: 1\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["GTA/SA-MP use degrees for angles in most circumstances, for example ",(0,s.jsx)(n.a,{href:"GetPlayerFacingAngle",children:"GetPlayerFacingAngle"}),". Therefore, it is most likely you'll want to use the 'degrees' angle mode, not radians. Also note that angles in GTA are counterclockwise; 270\xb0 is East and 90\xb0 is West. South is still 180\xb0 and North still 0\xb0/360\xb0."]})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"floatsin",children:"floatsin"}),": Get the sine from a specific angle."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"floatcos",children:"floatcos"}),": Get the cosine from a specific angle."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../resources/anglemodes",children:"Angle Modes"}),": SI unit constants for measuring angles."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var i=t(67294);let s={},l=i.createContext(s);function r(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);