"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["93132"],{48278:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>l,toc:()=>c,contentTitle:()=>o});var i=JSON.parse('{"id":"scripting/functions/atan2","title":"atan","description":"Get the multi-valued inversed value of a tangent in degrees.","source":"@site/docs/scripting/functions/atan2.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/atan2","permalink":"/fr/docs/scripting/functions/atan2","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/atan2.md","tags":[{"inline":true,"label":"math","permalink":"/fr/docs/tags/math"}],"version":"current","frontMatter":{"title":"atan","sidebar_label":"atan","description":"Get the multi-valued inversed value of a tangent in degrees.","tags":["math"]},"sidebar":"docsSidebar","previous":{"title":"atan","permalink":"/fr/docs/scripting/functions/atan"},"next":{"title":"clamp","permalink":"/fr/docs/scripting/functions/clamp"}}'),r=n("85893"),a=n("50065");let s={title:"atan",sidebar_label:"atan",description:"Get the multi-valued inversed value of a tangent in degrees.",tags:["math"]},o=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components},{LowercaseNote:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"Notice that the y-value is the first parameter and the x-value is the second parameter. This is because the mathematical notation is y/x (i.e. y divided by x) and the convention is to write the operands in the order of the operation that is performed on them."})}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Get the multi-valued inversed value of a tangent in degrees. In trigonometrics, arc tangent is the inverse operation of tangent. To compute the value, the function takes into account the sign of both arguments in order to determine the quadrant."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":y"]}),(0,r.jsx)(t.td,{children:"value representing the proportion of the y-coordinate."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":x"]}),(0,r.jsx)(t.td,{children:"value representing the proportion of the x-coordinate."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"The angle in degrees, in the interval [-180.0,+180.0]."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'//The arc tangent for (x=-10.000000, y=10.000000) is 135.000000 degrees.\n\npublic OnGameModeInit()\n{\n    new Float:x, Float:y, Float:result;\n    x = -10.0;\n    y = 10.0;\n    result = atan2(y, x);\n    printf("The arc tangent for (x=%f, y=%f) is %f degrees.", x, y, result);\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"floatsin",children:"floatsin"}),": Get the sine from a specific angle."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"floatcos",children:"floatcos"}),": Get the cosine from a specific angle."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"floattan",children:"floattan"}),": Get the tangent from a specific angle."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"asin",children:"asin"}),": Get the inversed value of a sine in degrees."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"acos",children:"acos"}),": Get the inversed value of a cosine in degrees."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"atan",children:"atan"}),": Get the inversed value of a tangent in degrees."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return s}});var i=n(67294);let r={},a=i.createContext(r);function s(e){let t=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);