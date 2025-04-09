"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["5106"],{22144:function(e,t,r){r.r(t),r.d(t,{default:()=>a,frontMatter:()=>o,metadata:()=>n,assets:()=>p,toc:()=>c,contentTitle:()=>l});var n=JSON.parse('{"id":"scripting/functions/existproperty","title":"existproperty","description":"Check if a property exist.","source":"@site/docs/scripting/functions/existproperty.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/existproperty","permalink":"/docs/scripting/functions/existproperty","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/existproperty.md","tags":[{"inline":true,"label":"core","permalink":"/docs/tags/core"},{"inline":true,"label":"property","permalink":"/docs/tags/property"}],"version":"current","frontMatter":{"title":"existproperty","sidebar_label":"existproperty","description":"Check if a property exist.","tags":["core","property"]},"sidebar":"docsSidebar","previous":{"title":"diskfree","permalink":"/docs/scripting/functions/diskfree"},"next":{"title":"existpubvar","permalink":"/docs/scripting/functions/existpubvar"}}'),i=r("85893"),s=r("50065");let o={title:"existproperty",sidebar_label:"existproperty",description:"Check if a property exist.",tags:["core","property"]},l=void 0,p={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{LowercaseNote:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Check if a property exist."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"id"}),(0,i.jsxs)(t.td,{children:["The virtual machine to use, you should keep this zero. ",(0,i.jsx)(t.em,{children:"(optional=0)"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"name[]"}),(0,i.jsx)(t.td,{children:'The property\'s name, you should keep this "".'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"value"}),(0,i.jsxs)(t.td,{children:["The property's unique ID. Use the hash-function to calculate it from a string. ",(0,i.jsx)(t.em,{children:"(optional=cellmin)"})]})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"True if the property exists and false otherwise."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'if (existproperty(0, "", 123984334))\n{\n    //the property exists, do something\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"It is recommended to use the PVars/SVars or GVar plugin instead of these natives for being very slow."})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"setproperty",children:"setproperty"}),": Set a property."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"getproperty",children:"getproperty"}),": Get the value of a property."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"deleteproperty",children:"deleteproperty"}),": Delete a property."]}),"\n"]})]})}function a(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return o}});var n=r(67294);let i={},s=n.createContext(i);function o(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);