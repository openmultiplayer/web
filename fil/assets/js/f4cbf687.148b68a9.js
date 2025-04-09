"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["59029"],{70865:function(n,e,t){t.r(e),t.d(e,{default:()=>a,frontMatter:()=>s,metadata:()=>i,assets:()=>l,toc:()=>d,contentTitle:()=>o});var i=JSON.parse('{"id":"scripting/functions/funcidx","title":"funcidx","description":"This function returns the ID of a public function by its name.","source":"@site/docs/scripting/functions/funcidx.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/funcidx","permalink":"/fil/docs/scripting/functions/funcidx","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/funcidx.md","tags":[{"inline":true,"label":"core","permalink":"/fil/docs/tags/core"}],"version":"current","frontMatter":{"title":"funcidx","sidebar_label":"funcidx","description":"This function returns the ID of a public function by its name.","tags":["core"]},"sidebar":"docsSidebar","previous":{"title":"ftemp","permalink":"/fil/docs/scripting/functions/ftemp"},"next":{"title":"fwrite","permalink":"/fil/docs/scripting/functions/fwrite"}}'),r=t("85893"),c=t("50065");let s={title:"funcidx",sidebar_label:"funcidx",description:"This function returns the ID of a public function by its name.",tags:["core"]},o=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function u(n){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...n.components},{LowercaseNote:t}=e;return t||function(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{}),"\n",(0,r.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(e.p,{children:"This function returns the ID of a public function by its name."}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Name"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"const name[]"}),(0,r.jsx)(e.td,{children:"The name of the public function to get the ID of."})]})})]}),"\n",(0,r.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(e.p,{children:["The ID of the function (IDs start at ",(0,r.jsx)(e.strong,{children:"0"}),")."]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"-1"})," if the function doesn't exist."]}),"\n",(0,r.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:'public OnFilterScriptInit()\n{\n    printf("ID of OnFilterScriptInit: %d", funcidx("OnFilterScriptInit"));\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"CallLocalFunction",children:"CallLocalFunction"}),": Call a function in the script."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"CallRemoteFunction",children:"CallRemoteFunction"}),": Call a function in any loaded script."]}),"\n"]})]})}function a(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},50065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return s}});var i=t(67294);let r={},c=i.createContext(r);function s(n){let e=i.useContext(c);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);