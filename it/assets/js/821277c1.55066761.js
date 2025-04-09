"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["6084"],{14326:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>a,metadata:()=>r,assets:()=>d,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"scripting/functions/GetPlayerRawIp","title":"GetPlayerRawIp","description":"Get the specified player\'s Raw IP address (v4).","source":"@site/docs/scripting/functions/GetPlayerRawIp.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerRawIp","permalink":"/it/docs/scripting/functions/GetPlayerRawIp","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerRawIp.md","tags":[{"inline":true,"label":"player","permalink":"/it/docs/tags/player"},{"inline":true,"label":"ip address","permalink":"/it/docs/tags/ip-address"}],"version":"current","frontMatter":{"title":"GetPlayerRawIp","sidebar_label":"GetPlayerRawIp","description":"Get the specified player\'s Raw IP address (v4).","tags":["player","ip address"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerRaceCheckpoint","permalink":"/it/docs/scripting/functions/GetPlayerRaceCheckpoint"},"next":{"title":"GetPlayerRotationQuat","permalink":"/it/docs/scripting/functions/GetPlayerRotationQuat"}}'),i=n("85893"),s=n("50065");let a={title:"GetPlayerRawIp",sidebar_label:"GetPlayerRawIp",description:"Get the specified player's Raw IP address (v4).",tags:["player","ip address"]},l=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Get the specified player's Raw IP address (v4)."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player to get the Raw IP address of."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"Returns the player's Raw IP address as integer."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    new rawIp = GetPlayerRawIp(playerid);\n    SendClientMessage(playerid, 0xFFFF00FF, "SERVER: Your Raw IP address: %d", rawIp);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"PAWN is case-sensitive. GetPlayerRawIP will not work."})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayerIp",children:"GetPlayerIp"}),": Get a player's IP."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"NetStats_GetIpPort",children:"NetStats_GetIpPort"}),": Get a player's IP and port."]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return a}});var r=n(67294);let i={},s=r.createContext(i);function a(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);