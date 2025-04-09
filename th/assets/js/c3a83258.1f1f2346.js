"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["17886"],{47820:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"scripting/functions/GetConsoleVarAsString","title":"GetConsoleVarAsString","description":"Get the string value of a console variable.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/GetConsoleVarAsString.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetConsoleVarAsString","permalink":"/th/docs/scripting/functions/GetConsoleVarAsString","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetConsoleVarAsString.md","tags":[],"version":"current","frontMatter":{"title":"GetConsoleVarAsString","sidebar_label":"GetConsoleVarAsString","description":"Get the string value of a console variable.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"GetConsoleVarAsInt","permalink":"/th/docs/scripting/functions/GetConsoleVarAsInt"},"next":{"title":"GetCustomModelPath","permalink":"/th/docs/scripting/functions/GetCustomModelPath"}}'),i=t("85893"),r=t("50065");let o={title:"GetConsoleVarAsString",sidebar_label:"GetConsoleVarAsString",description:"Get the string value of a console variable.",tags:[]},l=void 0,a={},c=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,i.jsx)(n.p,{children:"Get the string value of a console variable."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"const varname[]"}),(0,i.jsx)(n.td,{children:"The name of the string variable to get the value of."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"buffer[]"}),(0,i.jsx)(n.td,{children:"An array into which to store the value, passed by reference."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"len"}),(0,i.jsx)(n.td,{children:"The length of the string that should be stored."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,i.jsx)(n.p,{children:"The length of the returned string. 0 if the specified console variable is not a string or doesn't exist."}),"\n",(0,i.jsx)(n.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    new hostname[64];\n    GetConsoleVarAsString("hostname", hostname, sizeof(hostname));\n    printf("Hostname: %s", hostname);\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",children:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"When filterscripts or plugins are specified as the varname, this function only returns the name of the first specified filterscript or plugin."})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Type 'varlist' in the server console to display a list of available console variables and their types."})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Using this function with anything other than a string (integer, boolean or float) will cause your server to crash. Using it with a nonexistent console variable will also cause your server to crash."})}),"\n",(0,i.jsx)(n.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/GetConsoleVarAsInt",children:"GetConsoleVarAsInt"}),": Retreive a server variable as an integer."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/GetConsoleVarAsBool",children:"GetConsoleVarAsBool"}),": Retreive a server variable as a boolean."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var s=t(67294);let i={},r=s.createContext(i);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);