"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["89362"],{84159:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>d,toc:()=>o,contentTitle:()=>r});var t=JSON.parse('{"id":"scripting/functions/SendDeathMessage","title":"SendDeathMessage","description":"Adds a death to the \'killfeed\' on the right-hand side of the screen for all players.","source":"@site/docs/scripting/functions/SendDeathMessage.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SendDeathMessage","permalink":"/ru/docs/scripting/functions/SendDeathMessage","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SendDeathMessage.md","tags":[],"version":"current","frontMatter":{"title":"SendDeathMessage","sidebar_label":"SendDeathMessage","description":"Adds a death to the \'killfeed\' on the right-hand side of the screen for all players.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"SendCommand","permalink":"/ru/docs/scripting/functions/SendCommand"},"next":{"title":"SendDeathMessageToPlayer","permalink":"/ru/docs/scripting/functions/SendDeathMessageToPlayer"}}'),a=s("85893"),i=s("50065");let l={title:"SendDeathMessage",sidebar_label:"SendDeathMessage",description:"Adds a death to the 'killfeed' on the right-hand side of the screen for all players.",tags:[]},r=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Resources",id:"related-resources",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Adds a death to the 'killfeed' on the right-hand side of the screen for all players."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"killer"}),(0,a.jsx)(n.td,{children:"The ID of the killer (can be INVALID_PLAYER_ID)."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"killee"}),(0,a.jsx)(n.td,{children:"The ID of the player that died."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"weapon"}),(0,a.jsx)(n.td,{children:"The reason (not always a weapon) for the victim's death. Special icons can also be used (ICON_CONNECT and ICON_DISCONNECT)."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsxs)(n.p,{children:["This function always returns ",(0,a.jsx)(n.strong,{children:"true"}),", even if the function fails to execute."]}),"\n",(0,a.jsx)(n.p,{children:"The function fails to execute (no death message shown) if 'playerid' is invalid."}),"\n",(0,a.jsx)(n.p,{children:"If 'reason' is invalid, a generic skull-and-crossbones icon is shown."}),"\n",(0,a.jsxs)(n.p,{children:["'killerid' being invalid (",(0,a.jsx)(n.code,{children:"INVALID_PLAYER_ID"}),") is valid."]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"public OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    SendDeathMessage(killerid, playerid, reason);\n    return 1;\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Death messages can be cleared by using a valid player ID for 'playerid' that is not connected. To show a death message for just a single player, use ",(0,a.jsx)(n.a,{href:"SendDeathMessageToPlayer",children:"SendDeathMessageToPlayer"}),". You can use NPCs to create your own custom death reasons."]})}),"\n",(0,a.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"SendDeathMessageToPlayer",children:"SendDeathMessageToPlayer"}),": Add a kill to the death list for a player."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../callbacks/OnPlayerDeath",children:"OnPlayerDeath"}),": Called when a player dies."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"../resources/weaponids",children:"Weapon IDs and Death Reasons"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return l}});var t=s(67294);let a={},i=t.createContext(a);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);