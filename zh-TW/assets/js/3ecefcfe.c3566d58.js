"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["88616"],{6061:function(e,t,r){r.r(t),r.d(t,{default:()=>p,frontMatter:()=>s,metadata:()=>n,assets:()=>a,toc:()=>c,contentTitle:()=>o});var n=JSON.parse('{"id":"scripting/functions/GetPlayerInterior","title":"GetPlayerInterior","description":"Retrieves the player\'s current interior.","source":"@site/docs/scripting/functions/GetPlayerInterior.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerInterior","permalink":"/zh-TW/docs/scripting/functions/GetPlayerInterior","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerInterior.md","tags":[{"inline":true,"label":"player","permalink":"/zh-TW/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerInterior","sidebar_label":"GetPlayerInterior","description":"Retrieves the player\'s current interior.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerHydraReactorAngle","permalink":"/zh-TW/docs/scripting/functions/GetPlayerHydraReactorAngle"},"next":{"title":"GetPlayerIp","permalink":"/zh-TW/docs/scripting/functions/GetPlayerIp"}}'),i=r("85893"),l=r("50065");let s={title:"GetPlayerInterior",sidebar_label:"GetPlayerInterior",description:"Retrieves the player's current interior.",tags:["player"]},o=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Retrieves the player's current interior. A list of currently known interiors with their positions can be found on this page."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The player to get the interior ID of."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"The interior ID the player is currently in."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid,text[])\n{\n    if (strcmp(cmdtext, "/int", true) == 0)\n    {\n        new string[64];\n        format(string, sizeof(string), "You are in interior %i", GetPlayerInterior(playerid));\n        SendClientMessage(playerid, 0xFF8000FF, string);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"Always returns interior 0 for NPCs."})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPlayerInterior",children:"SetPlayerInterior"}),": Set a player's interior."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayerVirtualWorld",children:"GetPlayerVirtualWorld"}),": Check what virtual world a player is in."]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return o},a:function(){return s}});var n=r(67294);let i={},l=n.createContext(i);function s(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);