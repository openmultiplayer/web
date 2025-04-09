"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["84796"],{67141:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>l,metadata:()=>i,assets:()=>a,toc:()=>o,contentTitle:()=>c});var i=JSON.parse('{"id":"scripting/functions/SetPlayerSpecialAction","title":"SetPlayerSpecialAction","description":"This function allows to set players special action.","source":"@site/docs/scripting/functions/SetPlayerSpecialAction.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerSpecialAction","permalink":"/es/docs/scripting/functions/SetPlayerSpecialAction","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerSpecialAction.md","tags":[{"inline":true,"label":"player","permalink":"/es/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerSpecialAction","sidebar_label":"SetPlayerSpecialAction","description":"This function allows to set players special action.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerSkin","permalink":"/es/docs/scripting/functions/SetPlayerSkin"},"next":{"title":"SetPlayerTeam","permalink":"/es/docs/scripting/functions/SetPlayerTeam"}}'),s=n("85893"),r=n("50065");let l={title:"SetPlayerSpecialAction",sidebar_label:"SetPlayerSpecialAction",description:"This function allows to set players special action.",tags:["player"]},c=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"This function allows to set players special action."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"playerid"}),(0,s.jsx)(t.td,{children:"The player that should perform the action"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["SPECIAL_ACTION",":actionid"]}),(0,s.jsxs)(t.td,{children:["The ",(0,s.jsx)(t.a,{href:"../resources/specialactions",children:"action"})," that should be performed."]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"false"})," - The function failed to execute. This means the player is not connected."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/handsup", true) == 0)\n    {\n        SetPlayerSpecialAction(playerid, SPECIAL_ACTION_HANDSUP);\n        return 1;\n    }\n    if (strcmp(cmdtext, "/drink", true) == 0)\n    {\n        SetPlayerSpecialAction(playerid, SPECIAL_ACTION_DRINK_WINE);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Removing jetpacks from players by setting their special action to ",(0,s.jsx)(t.code,{children:"SPECIAL_ACTION_NONE"})," (0) causes the sound to stay until death. There is a solution for this, Just apply a random animation to the player and their jetpack will be removed."]})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetPlayerSpecialAction",children:"GetPlayerSpecialAction"}),": Get a player's current special action."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"ApplyAnimation",children:"ApplyAnimation"}),": Apply an animation to a player."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"../resources/specialactions",children:"Special Action IDs"})}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return l}});var i=n(67294);let s={},r=i.createContext(s);function l(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);