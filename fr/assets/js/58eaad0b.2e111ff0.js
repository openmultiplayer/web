"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["38335"],{89533:function(e,r,t){t.r(r),t.d(r,{default:()=>p,frontMatter:()=>i,metadata:()=>n,assets:()=>c,toc:()=>o,contentTitle:()=>l});var n=JSON.parse('{"id":"scripting/functions/GetSVarType","title":"GetSVarType","description":"Gets the type (integer, float or string) of a server variable.","source":"@site/docs/scripting/functions/GetSVarType.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetSVarType","permalink":"/fr/docs/scripting/functions/GetSVarType","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetSVarType.md","tags":[{"inline":true,"label":"server variable","permalink":"/fr/docs/tags/server-variable"},{"inline":true,"label":"svar","permalink":"/fr/docs/tags/svar"}],"version":"current","frontMatter":{"title":"GetSVarType","sidebar_label":"GetSVarType","description":"Gets the type (integer, float or string) of a server variable.","tags":["server variable","svar"]},"sidebar":"docsSidebar","previous":{"title":"GetSVarString","permalink":"/fr/docs/scripting/functions/GetSVarString"},"next":{"title":"GetSVarsUpperIndex","permalink":"/fr/docs/scripting/functions/GetSVarsUpperIndex"}}'),a=t("85893"),s=t("50065");let i={title:"GetSVarType",sidebar_label:"GetSVarType",description:"Gets the type (integer, float or string) of a server variable.",tags:["server variable","svar"]},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(r.p,{children:"Gets the type (integer, float or string) of a server variable."}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Name"}),(0,a.jsx)(r.th,{children:"Description"})]})}),(0,a.jsx)(r.tbody,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"const svar[]"}),(0,a.jsx)(r.td,{children:"The name of the server variable to get the type of."})]})})]}),"\n",(0,a.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsxs)(r.p,{children:["Returns the ",(0,a.jsx)(r.a,{href:"../resources/svartypes",children:"type"})," of the SVar."]}),"\n",(0,a.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-c",children:'stock PrintSVar(varname[])\n{\n    switch(GetSVarType(varname))\n    {\n        case SERVER_VARTYPE_NONE:\n        {\n            return 0;\n        }\n        case SERVER_VARTYPE_INT:\n        {\n            printf("Integer SVar \'%s\': %i", varname, GetSVarInt(varname));\n        }\n        case SERVER_VARTYPE_FLOAT:\n        {\n            printf("Float SVar \'%s\': %f", varname, GetSVarFloat(varname));\n        }\n        case SERVER_VARTYPE_STRING:\n        {\n            new varstring[256];\n            GetSVarString(varname, varstring);\n\n            printf("String SVar \'%s\': %s", varname, varstring);\n        }\n    }\n    return 1;\n}\n\npublic OnGameModeInit()\n{\n    SetSVarInt("Version", 37);\n\n    PrintSVar("Version"); // Output: "Integer SVar \'Version\': 37"\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"SetSVarInt",children:"SetSVarInt"}),": Set an integer for a server variable."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"GetSVarInt",children:"GetSVarInt"}),": Get a player server as an integer."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"SetSVarString",children:"SetSVarString"}),": Set a string for a server variable."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"GetSVarString",children:"GetSVarString"}),": Get the previously set string from a server variable."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"SetSVarFloat",children:"SetSVarFloat"}),": Set a float for a server variable."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"GetSVarFloat",children:"GetSVarFloat"}),": Get the previously set float from a server variable."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"DeleteSVar",children:"DeleteSVar"}),": Delete a server variable."]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"../resources/svartypes",children:"Server Variable Types"})}),"\n"]})]})}function p(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return l},a:function(){return i}});var n=t(67294);let a={},s=n.createContext(a);function i(e){let r=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);