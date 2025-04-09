"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["17982"],{47645:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>d,toc:()=>a,contentTitle:()=>l});var r=JSON.parse('{"id":"scripting/functions/GetPlayerGhostMode","title":"GetPlayerGhostMode","description":"Get player\'s ghost mode.","source":"@site/docs/scripting/functions/GetPlayerGhostMode.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerGhostMode","permalink":"/fil/docs/scripting/functions/GetPlayerGhostMode","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerGhostMode.md","tags":[{"inline":true,"label":"player","permalink":"/fil/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerGhostMode","sidebar_label":"GetPlayerGhostMode","description":"Get player\'s ghost mode.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerFightingStyle","permalink":"/fil/docs/scripting/functions/GetPlayerFightingStyle"},"next":{"title":"GetPlayerGravity","permalink":"/fil/docs/scripting/functions/GetPlayerGravity"}}'),s=n("85893"),i=n("50065");let o={title:"GetPlayerGhostMode",sidebar_label:"GetPlayerGhostMode",description:"Get player's ghost mode.",tags:["player"]},l=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Get player's ghost mode."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"playerid"}),(0,s.jsx)(t.td,{children:"The ID of the player to get the ghost mode of."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"true"})," - Ghost mode is enable."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"false"})," - Ghost mode is disable."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'new string[64];\nformat(string, sizeof(string), "Your ghost mode is %s", GetPlayerGhostMode(playerid) == true ? "enable" : "disable");\nSendClientMessage(playerid, -1, string);\n'})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"TogglePlayerGhostMode",children:"TogglePlayerGhostMode"}),": Toggle player's ghost mode."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return o}});var r=n(67294);let s={},i=r.createContext(s);function o(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);