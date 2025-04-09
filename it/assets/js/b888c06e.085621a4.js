"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["6803"],{86802:function(e,t,r){r.r(t),r.d(t,{default:()=>v,frontMatter:()=>a,metadata:()=>n,assets:()=>o,toc:()=>c,contentTitle:()=>l});var n=JSON.parse('{"id":"scripting/functions/GetServerVarAsInt","title":"GetServerVarAsInt","description":"Get the integer value of a server variable.","source":"@site/docs/scripting/functions/GetServerVarAsInt.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetServerVarAsInt","permalink":"/it/docs/scripting/functions/GetServerVarAsInt","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetServerVarAsInt.md","tags":[],"version":"current","frontMatter":{"title":"GetServerVarAsInt","sidebar_label":"GetServerVarAsInt","description":"Get the integer value of a server variable.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"GetServerVarAsBool","permalink":"/it/docs/scripting/functions/GetServerVarAsBool"},"next":{"title":"GetServerVarAsString","permalink":"/it/docs/scripting/functions/GetServerVarAsString"}}'),i=r("85893"),s=r("50065");let a={title:"GetServerVarAsInt",sidebar_label:"GetServerVarAsInt",description:"Get the integer value of a server variable.",tags:[]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"This function, as of 0.3.7 R2, is deprecated. Please see GetConsoleVarAsInt"})}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Get the integer value of a server variable."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"const varname[]"}),(0,i.jsx)(t.td,{children:"The name of the integer variable to get the value of."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"The value of the specified server variable. 0 if the specified server variable is not an integer or doesn't exist."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'new serverPort = GetServerVarAsInt("port");\nprintf("Server Port: %i", serverPort);\n'})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"Type 'varlist' in the server console to display a list of available server variables and their types."})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetServerVarAsString",children:"GetServerVarAsString"}),": Retreive a server variable as a string."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetServerVarAsBool",children:"GetServerVarAsBool"}),": Retreive a server variable as a boolean."]}),"\n"]})]})}function v(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return a}});var n=r(67294);let i={},s=n.createContext(i);function a(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);