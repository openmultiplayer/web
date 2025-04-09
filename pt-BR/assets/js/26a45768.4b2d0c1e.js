"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["11809"],{24475:function(e,r,t){t.r(r),t.d(r,{default:()=>d,frontMatter:()=>l,metadata:()=>n,assets:()=>c,toc:()=>o,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/GetPVarType","title":"GetPVarType","description":"Gets the type (integer, float or string) of a player variable.","source":"@site/docs/scripting/functions/GetPVarType.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPVarType","permalink":"/pt-BR/docs/scripting/functions/GetPVarType","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPVarType.md","tags":[{"inline":true,"label":"player variable","permalink":"/pt-BR/docs/tags/player-variable"},{"inline":true,"label":"pvar","permalink":"/pt-BR/docs/tags/pvar"}],"version":"current","frontMatter":{"title":"GetPVarType","sidebar_label":"GetPVarType","description":"Gets the type (integer, float or string) of a player variable.","tags":["player variable","pvar"]},"sidebar":"docsSidebar","previous":{"title":"GetPVarString","permalink":"/pt-BR/docs/scripting/functions/GetPVarString"},"next":{"title":"GetPVarsUpperIndex","permalink":"/pt-BR/docs/scripting/functions/GetPVarsUpperIndex"}}'),a=t("85893"),i=t("50065");let l={title:"GetPVarType",sidebar_label:"GetPVarType",description:"Gets the type (integer, float or string) of a player variable.",tags:["player variable","pvar"]},s=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function p(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(r.p,{children:"Gets the type (integer, float or string) of a player variable."}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Name"}),(0,a.jsx)(r.th,{children:"Description"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"playerid"}),(0,a.jsx)(r.td,{children:"The ID of the player whose player variable to get the type of."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"const pvar[]"}),(0,a.jsx)(r.td,{children:"The name of the player variable to get the type of."})]})]})]}),"\n",(0,a.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(r.p,{children:"Returns the type of the PVar. See table below."}),"\n",(0,a.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-c",children:'stock PrintPVar(playerid, varname[])\n{\n    switch(GetPVarType(playerid, varname))\n    {\n        case PLAYER_VARTYPE_NONE:\n        {\n            return 0;\n        }\n        case PLAYER_VARTYPE_INT:\n        {\n            printf("Integer PVar \'%s\': %i", varname, GetPVarInt(playerid, varname));\n        }\n        case PLAYER_VARTYPE_FLOAT:\n        {\n            printf("Float PVar \'%s\': %f", varname, GetPVarFloat(playerid, varname));\n        }\n        case PLAYER_VARTYPE_STRING:\n        {\n            new varstring[256];\n            GetPVarString(playerid, varname, varstring);\n\n            printf("String PVar \'%s\': %s", varname, varstring);\n        }\n    }\n    return 1;\n}\n\npublic OnPlayerConnect(playerid)\n{\n    SetPVarInt(playerid, "Level", 20);\n\n    PrintPVar(playerid, "Level"); // Output: "Integer PVar \'Level\': 20"\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"SetPVarInt",children:"SetPVarInt"}),": Set an integer for a player variable."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"GetPVarInt",children:"GetPVarInt"}),": Get the previously set integer from a player variable."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"SetPVarString",children:"SetPVarString"}),": Set a string for a player variable."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"GetPVarString",children:"GetPVarString"}),": Get the previously set string from a player variable."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"SetPVarFloat",children:"SetPVarFloat"}),": Set a float for a player variable."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"GetPVarFloat",children:"GetPVarFloat"}),": Get the previously set float from a player variable."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"DeletePVar",children:"DeletePVar"}),": Delete a player variable."]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"../resources/pvartypes",children:"Player Variable Types"})}),"\n"]})]})}function d(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return s},a:function(){return l}});var n=t(67294);let a={},i=n.createContext(a);function l(e){let r=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);