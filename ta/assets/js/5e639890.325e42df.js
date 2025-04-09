"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["47858"],{65062:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>l,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"scripting/functions/GetPlayerCustomSkin","title":"GetPlayerCustomSkin","description":"Returns the class of the players custom skin downloaded from the server.","source":"@site/docs/scripting/functions/GetPlayerCustomSkin.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerCustomSkin","permalink":"/ta/docs/scripting/functions/GetPlayerCustomSkin","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerCustomSkin.md","tags":[{"inline":true,"label":"player","permalink":"/ta/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerCustomSkin","sidebar_label":"GetPlayerCustomSkin","description":"Returns the class of the players custom skin downloaded from the server.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerColor","permalink":"/ta/docs/scripting/functions/GetPlayerColor"},"next":{"title":"GetPlayerDialog","permalink":"/ta/docs/scripting/functions/GetPlayerDialog"}}'),s=n("85893"),i=n("50065");let l={title:"GetPlayerCustomSkin",sidebar_label:"GetPlayerCustomSkin",description:"Returns the class of the players custom skin downloaded from the server.",tags:["player"]},o=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{version:"SA-MP 0.3.DL R1"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Returns the class of the players custom skin downloaded from the server."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"playerid"}),(0,s.jsx)(t.td,{children:"The player you want to get the skin from"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:["The custom skin id that was specified in ",(0,s.jsx)(t.a,{href:"AddCharModel",children:"AddCharModel"})," newid."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/customskin", true))\n    {\n        new string[32];\n        new customSkin = GetPlayerCustomSkin(playerid);\n\n        format(string, sizeof(string), "Your custom skin id: %d", customSkin);\n        SendClientMessage(playerid, -1, string);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetPlayerSkin",children:"GetPlayerSkin"}),": Get a player's current skin."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"SetPlayerSkin",children:"SetPlayerSkin"}),": Set a player's skin."]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return l}});var r=n(67294);let s={},i=r.createContext(s);function l(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);