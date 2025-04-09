"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["52070"],{69233:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"scripting/functions/ResetPlayerMoney","title":"ResetPlayerMoney","description":"Reset a player\'s money to $0.","source":"@site/docs/scripting/functions/ResetPlayerMoney.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ResetPlayerMoney","permalink":"/fr/docs/scripting/functions/ResetPlayerMoney","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/ResetPlayerMoney.md","tags":[{"inline":true,"label":"player","permalink":"/fr/docs/tags/player"}],"version":"current","frontMatter":{"title":"ResetPlayerMoney","sidebar_label":"ResetPlayerMoney","description":"Reset a player\'s money to $0.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"RepairVehicle","permalink":"/fr/docs/scripting/functions/RepairVehicle"},"next":{"title":"ResetPlayerWeapons","permalink":"/fr/docs/scripting/functions/ResetPlayerWeapons"}}'),s=t("85893"),i=t("50065");let l={title:"ResetPlayerMoney",sidebar_label:"ResetPlayerMoney",description:"Reset a player's money to $0.",tags:["player"]},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Reset a player's money to $0."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"playerid"}),(0,s.jsx)(n.td,{children:"The ID of the player to reset the money of."})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"1"})," - The function was executed successfully."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"0"})," - The function failed to execute. This means the player is not connected."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    SendClientMessage(playerid, 0xFFFFFFAA, "You died and lost all of your cash!");\n    ResetPlayerMoney(playerid);\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"GetPlayerMoney",children:"GetPlayerMoney"}),": Check how much money a player has."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"GivePlayerMoney",children:"GivePlayerMoney"}),": Give a player money."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var r=t(67294);let s={},i=r.createContext(s);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);