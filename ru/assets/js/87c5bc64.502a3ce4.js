"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["17841"],{25061:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"scripting/functions/asin","title":"asin","description":"Get the inversed value of a sine in degrees.","source":"@site/docs/scripting/functions/asin.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/asin","permalink":"/ru/docs/scripting/functions/asin","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/asin.md","tags":[{"inline":true,"label":"math","permalink":"/ru/docs/tags/math"}],"version":"current","frontMatter":{"title":"asin","sidebar_label":"asin","description":"Get the inversed value of a sine in degrees.","tags":["math"]},"sidebar":"docsSidebar","previous":{"title":"argvalue","permalink":"/ru/docs/scripting/functions/argvalue"},"next":{"title":"atan","permalink":"/ru/docs/scripting/functions/atan"}}'),s=t("85893"),r=t("50065");let a={title:"asin",sidebar_label:"asin",description:"Get the inversed value of a sine in degrees.",tags:["math"]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{LowercaseNote:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Get the inversed value of a sine in degrees. In trigonometrics, arc sine is the inverse operation of sine."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Float",":value"]}),(0,s.jsx)(n.td,{children:"value whose arc sine is computed, in the interval [-1,+1]."})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:"The angle in degrees, in the interval [-90.0,+90.0]."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'//The arc sine of 0.500000 is 30.000000 degrees.\n\npublic OnGameModeInit()\n{\n    new Float:param, Float:result;\n    param = 0.5;\n    result = asin(param);\n    printf("The arc sine of %f is %f degrees.", param, result);\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"floatsin",children:"floatsin"}),": Get the sine from a specific angle."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"floatcos",children:"floatcos"}),": Get the cosine from a specific angle."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"floattan",children:"floattan"}),": Get the tangent from a specific angle."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"acos",children:"acos"}),": Get the inversed value of a cosine in degrees."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"atan",children:"atan"}),": Get the inversed value of a tangent in degrees."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"atan2",children:"atan2"}),": Get the multi-valued inversed value of a tangent in degrees."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var i=t(67294);let s={},r=i.createContext(s);function a(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);