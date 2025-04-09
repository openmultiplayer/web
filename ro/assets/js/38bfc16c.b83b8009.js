"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["91719"],{67201:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>s,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"scripting/functions/GetPlayerMoney","title":"GetPlayerMoney","description":"Retrieves the amount of money a player has.","source":"@site/docs/scripting/functions/GetPlayerMoney.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerMoney","permalink":"/ro/docs/scripting/functions/GetPlayerMoney","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerMoney.md","tags":[{"inline":true,"label":"player","permalink":"/ro/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerMoney","sidebar_label":"GetPlayerMoney","description":"Retrieves the amount of money a player has.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerMenu","permalink":"/ro/docs/scripting/functions/GetPlayerMenu"},"next":{"title":"GetPlayerName","permalink":"/ro/docs/scripting/functions/GetPlayerName"}}'),i=t("85893"),l=t("50065");let s={title:"GetPlayerMoney",sidebar_label:"GetPlayerMoney",description:"Retrieves the amount of money a player has.",tags:["player"]},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Retrieves the amount of money a player has."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"The ID of the player to get the money of."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"The amount of money the player has."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnPlayerSpawn(playerid)\n{\n    new string[32];\n    format(string, sizeof(string), "Your money: $%i", GetPlayerMoney(playerid));\n    SendClientMessage(playerid, 0x00FF00FF, string);\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GivePlayerMoney",children:"GivePlayerMoney"}),": Give a player money."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"ResetPlayerMoney",children:"ResetPlayerMoney"}),": Set the money of a player to $0."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var r=t(67294);let i={},l=r.createContext(i);function s(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);