"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["68157"],{71421:function(e,r,t){t.r(r),t.d(r,{default:()=>u,frontMatter:()=>a,metadata:()=>n,assets:()=>l,toc:()=>c,contentTitle:()=>o});var n=JSON.parse('{"id":"scripting/functions/GetServerVarAsBool","title":"GetServerVarAsBool","description":"Get the boolean value of a server variable.","source":"@site/docs/scripting/functions/GetServerVarAsBool.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetServerVarAsBool","permalink":"/tr/docs/scripting/functions/GetServerVarAsBool","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetServerVarAsBool.md","tags":[],"version":"current","frontMatter":{"title":"GetServerVarAsBool","sidebar_label":"GetServerVarAsBool","description":"Get the boolean value of a server variable.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"GetServerTickRate","permalink":"/tr/docs/scripting/functions/GetServerTickRate"},"next":{"title":"GetServerVarAsInt","permalink":"/tr/docs/scripting/functions/GetServerVarAsInt"}}'),i=t("85893"),s=t("50065");let a={title:"GetServerVarAsBool",sidebar_label:"GetServerVarAsBool",description:"Get the boolean value of a server variable.",tags:[]},o=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.admonition,{type:"warning",children:(0,i.jsx)(r.p,{children:"This function, as of 0.3.7 R2, is deprecated. Please see GetConsoleVarAsBool"})}),"\n",(0,i.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(r.p,{children:"Get the boolean value of a server variable."}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Name"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"const varname[]"}),(0,i.jsx)(r.td,{children:"The name of the boolean variable to get the value of."})]})})]}),"\n",(0,i.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(r.p,{children:"The value of the specified server variable. 0 if the specified server variable is not a boolean or doesn't exist."}),"\n",(0,i.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    new queryEnabled = GetServerVarAsBool("query");\n    if (!queryEnabled)\n    {\n        print("WARNING: Querying is disabled. The server will appear offline in the server browser.");\n    }\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(r.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsx)(r.p,{children:"Type 'varlist' in the server console to display a list of available server variables and their types."})}),"\n",(0,i.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"GetServerVarAsString",children:"GetServerVarAsString"}),": Retreive a server variable as a string."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"GetServerVarAsInt",children:"GetServerVarAsInt"}),": Retreive a server variable as an integer."]}),"\n"]})]})}function u(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return o},a:function(){return a}});var n=t(67294);let i={},s=n.createContext(i);function a(e){let r=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);