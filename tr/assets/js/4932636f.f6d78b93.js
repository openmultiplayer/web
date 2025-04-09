"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["45386"],{52004:function(e,t,n){n.r(t),n.d(t,{default:()=>c,frontMatter:()=>s,metadata:()=>r,assets:()=>p,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"scripting/functions/GetPVarsUpperIndex","title":"GetPVarsUpperIndex","description":"Each PVar (player-variable) has its own unique identification number for lookup, this function returns the highest ID set for a player.","source":"@site/docs/scripting/functions/GetPVarsUpperIndex.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPVarsUpperIndex","permalink":"/tr/docs/scripting/functions/GetPVarsUpperIndex","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPVarsUpperIndex.md","tags":[{"inline":true,"label":"player variable","permalink":"/tr/docs/tags/player-variable"},{"inline":true,"label":"pvar","permalink":"/tr/docs/tags/pvar"}],"version":"current","frontMatter":{"title":"GetPVarsUpperIndex","sidebar_label":"GetPVarsUpperIndex","description":"Each PVar (player-variable) has its own unique identification number for lookup, this function returns the highest ID set for a player.","tags":["player variable","pvar"]},"sidebar":"docsSidebar","previous":{"title":"GetPVarType","permalink":"/tr/docs/scripting/functions/GetPVarType"},"next":{"title":"GetPickupModel","permalink":"/tr/docs/scripting/functions/GetPickupModel"}}'),i=n("85893"),a=n("50065");let s={title:"GetPVarsUpperIndex",sidebar_label:"GetPVarsUpperIndex",description:"Each PVar (player-variable) has its own unique identification number for lookup, this function returns the highest ID set for a player.",tags:["player variable","pvar"]},l=void 0,p={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Each PVar (player-variable) has its own unique identification number for lookup, this function returns the highest ID set for a player."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player to get the upper PVar index of."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"The highest set PVar ID."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"// Store the upper index in the variable 'PVarUpperIndex' + 1\nnew PVarUpperIndex = GetPVarsUpperIndex(playerid) + 1;\n\n// This pVarCount variable will store how many pVars a player has set as we count them.\nnew pVarCount;\n\nnew pVarName[128];\n\nfor(new i = 0; i\xa0!= PVarUpperIndex; i++) // Loop through all pVar IDs under the upper index\n{\n    // At first, we need to get PVar name\n    GetPVarNameAtIndex(playerid, i, pVarName, sizeof(pVarName));\n\n    // If the var is set (type not 0), increment pVarCount.\n    if (GetPVarType(playerid, pVarName)\xa0!= 0)\n    {\n        pVarCount++;\n    }\n}\n\nnew szString[128];\nformat(szString, sizeof(szString), \"You have %i player-variables set. Upper index (highest ID): %i.\", pVarCount, PVarUpperIndex-1);\nSendClientMessage(playerid, -1, szString);\n"})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPVarNameAtIndex",children:"GetPVarNameAtIndex"}),": Get the player variable's name from its index."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPVarType",children:"GetPVarType"}),": Get the type of the player variable."]}),"\n"]})]})}function c(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return s}});var r=n(67294);let i={},a=r.createContext(i);function s(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);