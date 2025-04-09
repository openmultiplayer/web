"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["7375"],{88885:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>l,metadata:()=>t,assets:()=>o,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"scripting/functions/TogglePlayerWidescreen","title":"TogglePlayerWidescreen","description":"Toggle player\'s widescreen.","source":"@site/docs/scripting/functions/TogglePlayerWidescreen.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TogglePlayerWidescreen","permalink":"/es/docs/scripting/functions/TogglePlayerWidescreen","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/TogglePlayerWidescreen.md","tags":[{"inline":true,"label":"player","permalink":"/es/docs/tags/player"}],"version":"current","frontMatter":{"title":"TogglePlayerWidescreen","sidebar_label":"TogglePlayerWidescreen","description":"Toggle player\'s widescreen.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"TogglePlayerSpectating","permalink":"/es/docs/scripting/functions/TogglePlayerSpectating"},"next":{"title":"ToggleVehicleSirenEnabled","permalink":"/es/docs/scripting/functions/ToggleVehicleSirenEnabled"}}'),s=r("85893"),i=r("50065");let l={title:"TogglePlayerWidescreen",sidebar_label:"TogglePlayerWidescreen",description:"Toggle player's widescreen.",tags:["player"]},c=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){let n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarn:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Toggle player's widescreen."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"playerid"}),(0,s.jsx)(n.td,{children:"The ID of the player to toggle the widescreen."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["bool",":wide"]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"true"})," for turn on and ",(0,s.jsx)(n.strong,{children:"false"})," for turn off."]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"false"})," - The function failed to execute. This means the player specified does not exist."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/widescreen", true))\n    {\n        TogglePlayerWidescreen(playerid, true);\n        SendClientMessage(playerid, -1, "SERVER: You turned on the widescreen!");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Widescreen on:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://i.ibb.co/Zcc2qmD/widescreen-on.png",alt:""})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Widescreen off:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://i.ibb.co/jb1YcQS/widescreen-off.png",alt:""})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"IsPlayerWidescreenToggled",children:"IsPlayerWidescreenToggled"}),": Checks if a player widescreen is on or off."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return l}});var t=r(67294);let s={},i=t.createContext(s);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);