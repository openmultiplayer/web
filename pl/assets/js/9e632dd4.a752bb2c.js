"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["68549"],{7184:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>a});var r=JSON.parse('{"id":"scripting/functions/IsPlayerCuffed","title":"IsPlayerCuffed","description":"Checks if the player special action is cuffed.","source":"@site/docs/scripting/functions/IsPlayerCuffed.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerCuffed","permalink":"/pl/docs/scripting/functions/IsPlayerCuffed","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsPlayerCuffed.md","tags":[{"inline":true,"label":"player","permalink":"/pl/docs/tags/player"}],"version":"current","frontMatter":{"title":"IsPlayerCuffed","sidebar_label":"IsPlayerCuffed","description":"Checks if the player special action is cuffed.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerControllable","permalink":"/pl/docs/scripting/functions/IsPlayerControllable"},"next":{"title":"IsPlayerGangZoneFlashing","permalink":"/pl/docs/scripting/functions/IsPlayerGangZoneFlashing"}}'),i=n("85893"),s=n("50065");let l={title:"IsPlayerCuffed",sidebar_label:"IsPlayerCuffed",description:"Checks if the player special action is cuffed.",tags:["player"]},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Checks if the player special action is cuffed."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player to check."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"Returns true if the player is cuffed, otherwise false."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"SetPlayerSpecialAction(playerid, SPECIAL_ACTION_CUFFED);\n\nif (IsPlayerCuffed(playerid))\n{\n    // do something\n}\n"})})]})}function p(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return l}});var r=n(67294);let i={},s=r.createContext(i);function l(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);