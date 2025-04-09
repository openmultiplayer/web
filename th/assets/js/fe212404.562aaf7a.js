"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["1235"],{19562:function(e,t,i){i.r(t),i.d(t,{default:()=>c,frontMatter:()=>s,metadata:()=>n,assets:()=>o,toc:()=>d,contentTitle:()=>a});var n=JSON.parse('{"id":"scripting/functions/GetPlayerLastShotVectors","title":"GetPlayerLastShotVectors","description":"Retrieves the start and end (hit) position of the last bullet a player fired.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayerLastShotVectors.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerLastShotVectors","permalink":"/th/docs/scripting/functions/GetPlayerLastShotVectors","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerLastShotVectors.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerLastShotVectors","sidebar_label":"GetPlayerLastShotVectors","description":"Retrieves the start and end (hit) position of the last bullet a player fired.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerLandingGearState","permalink":"/th/docs/scripting/functions/GetPlayerLandingGearState"},"next":{"title":"GetPlayerLastSyncedTrailerID","permalink":"/th/docs/scripting/functions/GetPlayerLastSyncedTrailerID"}}'),r=i("85893"),l=i("50065");let s={title:"GetPlayerLastShotVectors",sidebar_label:"GetPlayerLastShotVectors",description:"Retrieves the start and end (hit) position of the last bullet a player fired.",tags:["player"]},a=void 0,o={},d=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function h(e){let t={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,r.jsx)(t.p,{children:"Retrieves the start and end (hit) position of the last bullet a player fired."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player to get the last bullet shot information of."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":fOriginX"]}),(0,r.jsx)(t.td,{children:"A float variable in which to save the X coordinate of where the bullet originated from."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":fOriginY"]}),(0,r.jsx)(t.td,{children:"A float variable in which to save the Y coordinate of where the bullet originated from."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":fOriginZ"]}),(0,r.jsx)(t.td,{children:"A float variable in which to save the Z coordinate of where the bullet originated from."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":fHitPosX"]}),(0,r.jsx)(t.td,{children:"A float variable in which to save the X coordinate of where the bullet hit."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":fHitPosY"]}),(0,r.jsx)(t.td,{children:"A float variable in which to save the Y coordinate of where the bullet hit."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":fHitPosY"]}),(0,r.jsx)(t.td,{children:"A float variable in which to save the Z coordinate of where the bullet hit."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,r.jsx)(t.p,{children:"1: The function executed successfully."}),"\n",(0,r.jsx)(t.p,{children:"0: The function failed to execute. The player specified does not exist."}),"\n",(0,r.jsx)(t.p,{children:"The position of the last bullet is stored in the specified variables."}),"\n",(0,r.jsx)(t.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/lastshot", true) == 0)\n    {\n        new lsString[128],\n            Float:fOriginX, Float:fOriginY, Float:fOriginZ,\n            Float:fHitPosX, Float:fHitPosY, Float:fHitPosZ;\n\n        GetPlayerLastShotVectors(playerid, fOriginX, fOriginY, fOriginZ, fHitPosX, fHitPosY, fHitPosZ);\n        format(lsString, 128, "Last Shot Information: Origin: %f, %f, %f. Hit position: %f, %f, %f", fOriginX, fOriginY, fOriginZ, fHitPosX, fHitPosY, fHitPosZ);\n        SendClientMessage(playerid, -1, lsString);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",children:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"This function will only work when lag compensation is enabled. If the player hit nothing, the hit positions will be 0. This means you can't currently calculate how far a bullet travels through open air."})}),"\n",(0,r.jsx)(t.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"GetPlayerWeaponData: Find out information about weapons a player has."}),"\n",(0,r.jsx)(t.li,{children:"GetPlayerWeapon: Check what weapon a player is currently holding."}),"\n",(0,r.jsx)(t.li,{children:"VectorSize: Get the length (norm) of a vector."}),"\n",(0,r.jsx)(t.li,{children:"OnPlayerWeaponShot: Called when a player fires a weapon."}),"\n"]})]})}function c(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return a},a:function(){return s}});var n=i(67294);let r={},l=n.createContext(r);function s(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);