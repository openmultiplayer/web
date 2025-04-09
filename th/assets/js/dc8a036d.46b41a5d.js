"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["64386"],{99644:function(e,t,n){n.r(t),n.d(t,{default:()=>c,frontMatter:()=>s,metadata:()=>r,assets:()=>o,toc:()=>l,contentTitle:()=>p});var r=JSON.parse('{"id":"scripting/functions/GetPVarsUpperIndex","title":"GetPVarsUpperIndex","description":"Each PVar (player-variable) has its own unique identification number for lookup, this function returns the highest ID set for a player.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/GetPVarsUpperIndex.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPVarsUpperIndex","permalink":"/th/docs/scripting/functions/GetPVarsUpperIndex","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPVarsUpperIndex.md","tags":[{"inline":true,"label":"pvar","permalink":"/th/docs/tags/pvar"}],"version":"current","frontMatter":{"title":"GetPVarsUpperIndex","sidebar_label":"GetPVarsUpperIndex","description":"Each PVar (player-variable) has its own unique identification number for lookup, this function returns the highest ID set for a player.","tags":["pvar"]},"sidebar":"docsSidebar","previous":{"title":"GetPVarType","permalink":"/th/docs/scripting/functions/GetPVarType"},"next":{"title":"GetPickupModel","permalink":"/th/docs/scripting/functions/GetPickupModel"}}'),i=n("85893"),a=n("50065");let s={title:"GetPVarsUpperIndex",sidebar_label:"GetPVarsUpperIndex",description:"Each PVar (player-variable) has its own unique identification number for lookup, this function returns the highest ID set for a player.",tags:["pvar"]},p=void 0,o={},l=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function d(e){let t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,i.jsx)(t.p,{children:"Each PVar (player-variable) has its own unique identification number for lookup, this function returns the highest ID set for a player."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player to get the upper PVar index of."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,i.jsx)(t.p,{children:"The highest set PVar ID."}),"\n",(0,i.jsx)(t.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"// Store the upper index in the variable 'PVarUpperIndex' + 1\nnew PVarUpperIndex = GetPVarsUpperIndex(playerid) + 1;\n\n// This pVarCount variable will store how many pVars a player has set as we count them.\nnew pVarCount;\n\nfor(new i=0; i\xa0!= PVarUpperIndex; i++) // Loop through all pVar IDs under the upper index\n{\n    // At first, we need to get PVar name\n    new pVarName[128];\n    GetPVarNameAtIndex(playerid, i, pVarName, sizeof(pVarName));\n    // If the var is set (type not 0), increment pVarCount.\n    if (GetPVarType(playerid, pVarName)\xa0!= 0)\n    {\n        pVarCount++;\n    }\n}\n\nnew szString[66];\nformat(szString, sizeof(szString), \"You have %i player-variables set. Upper index (highest ID): %i.\", pVarCount, PVarUpperIndex-1);\nSendClientMessage(playerid, -1, szString);\n"})}),"\n",(0,i.jsx)(t.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"GetPVarNameAtIndex: Get the player variable's name from its index."}),"\n",(0,i.jsx)(t.li,{children:"GetPVarType: Get the type of the player variable."}),"\n"]})]})}function c(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return p},a:function(){return s}});var r=n(67294);let i={},a=r.createContext(i);function s(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);