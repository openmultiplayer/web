"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["39261"],{38513:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>r,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"scripting/functions/GetCustomModelPath","title":"GetCustomModelPath","description":"Get a custom model path.","source":"@site/docs/scripting/functions/GetCustomModelPath.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetCustomModelPath","permalink":"/fa/docs/scripting/functions/GetCustomModelPath","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetCustomModelPath.md","tags":[{"inline":true,"label":"custom model","permalink":"/fa/docs/tags/custom-model"},{"inline":true,"label":"custom skin","permalink":"/fa/docs/tags/custom-skin"},{"inline":true,"label":"simple model","permalink":"/fa/docs/tags/simple-model"}],"version":"current","frontMatter":{"title":"GetCustomModelPath","sidebar_label":"GetCustomModelPath","description":"Get a custom model path.","tags":["custom model","custom skin","simple model"]},"sidebar":"docsSidebar","previous":{"title":"GetConsoleVarAsString","permalink":"/fa/docs/scripting/functions/GetConsoleVarAsString"},"next":{"title":"GetDefaultPlayerColour","permalink":"/fa/docs/scripting/functions/GetDefaultPlayerColour"}}'),d=n("85893"),o=n("50065");let i={title:"GetCustomModelPath",sidebar_label:"GetCustomModelPath",description:"Get a custom model path.",tags:["custom model","custom skin","simple model"]},l=void 0,r={},a=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,d.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,d.jsx)(t.p,{children:"Get a custom model path."}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"modelid"}),(0,d.jsx)(t.td,{children:"The custom model id to get path from."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"dffPath[]"}),(0,d.jsx)(t.td,{children:"An array in which to store the dffPath in, passed by reference."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"dffSize"}),(0,d.jsx)(t.td,{children:"The length of the dffPath that should be stored."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"txdPath[]"}),(0,d.jsx)(t.td,{children:"An array in which to store the txdPath in, passed by reference."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"txdSize"}),(0,d.jsx)(t.td,{children:"The length of the txdPath that should be stored."})]})]})]}),"\n",(0,d.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-c",children:'new\n    modelid = -2000,\n    dffPath[64],\n    txdPath[64];\n\nGetCustomModelPath(modelid, dffPath, sizeof(dffPath), txdPath, sizeof(txdPath));\n\nprintf("[Custom model id %d path]\\n\\\n    dff: %s\\n\\\n    txd: %s", \n    modelid, dffPath, txdPath);\n'})}),"\n",(0,d.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.a,{href:"AddSimpleModel",children:"AddSimpleModel"}),": Adds a new custom simple object model."]}),"\n",(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.a,{href:"AddSimpleModelTimed",children:"AddSimpleModelTimed"}),": Adds a new custom simple object model."]}),"\n",(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.a,{href:"IsValidCustomModel",children:"IsValidCustomModel"}),": Checks if a custom model ID is valid."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return i}});var s=n(67294);let d={},o=s.createContext(d);function i(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);