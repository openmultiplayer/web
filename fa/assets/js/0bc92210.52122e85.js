"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["47913"],{40028:function(e,n,l){l.r(n),l.d(n,{default:()=>p,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>s});var t=JSON.parse('{"id":"scripting/functions/IsPlayerControllable","title":"IsPlayerControllable","description":"Check if the player is controllable.","source":"@site/docs/scripting/functions/IsPlayerControllable.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerControllable","permalink":"/fa/docs/scripting/functions/IsPlayerControllable","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsPlayerControllable.md","tags":[{"inline":true,"label":"player","permalink":"/fa/docs/tags/player"}],"version":"current","frontMatter":{"title":"IsPlayerControllable","sidebar_label":"IsPlayerControllable","description":"Check if the player is controllable.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerConnected","permalink":"/fa/docs/scripting/functions/IsPlayerConnected"},"next":{"title":"IsPlayerCuffed","permalink":"/fa/docs/scripting/functions/IsPlayerCuffed"}}'),r=l("85893"),o=l("50065");let i={title:"IsPlayerControllable",sidebar_label:"IsPlayerControllable",description:"Check if the player is controllable.",tags:["player"]},s=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components},{VersionWarn:l}=n;return l||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Check if the player is controllable."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"The ID of the player."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"true"})," - Controllable"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"false"})," - Uncontrollable"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"public OnPlayerSpawn(playerid)\n{\n    // Unfreeze the player if it is freezed\n    if (IsPlayerControllable(playerid) == false)\n    {\n        TogglePlayerControllable(playerid, true);\n    }\n\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"TogglePlayerControllable",children:"TogglePlayerControllable"}),": Toggles whether a player can control their character or not. The player will also be unable to move their camera."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,l){l.d(n,{Z:function(){return s},a:function(){return i}});var t=l(67294);let r={},o=t.createContext(r);function i(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);