"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["83679"],{91033:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>n,assets:()=>o,toc:()=>c,contentTitle:()=>l});var n=JSON.parse('{"id":"scripting/functions/GetPlayers","title":"GetPlayers","description":"Gets an array variable of the IDs of the current players on the server.","source":"@site/docs/scripting/functions/GetPlayers.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayers","permalink":"/bs/docs/scripting/functions/GetPlayers","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayers.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayers","sidebar_label":"GetPlayers","description":"Gets an array variable of the IDs of the current players on the server.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerZAim","permalink":"/bs/docs/scripting/functions/GetPlayerZAim"},"next":{"title":"GetRandomVehicleColourPair","permalink":"/bs/docs/scripting/functions/GetRandomVehicleColourPair"}}'),s=r("85893"),i=r("50065");let a={title:"GetPlayers",sidebar_label:"GetPlayers",description:"Gets an array variable of the IDs of the current players on the server.",tags:["player"]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Gets an array variable of the IDs of the current players on the server."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"players[]"}),(0,s.jsx)(t.td,{children:"An array into which to store the player IDs, passed by reference."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"size"}),(0,s.jsx)(t.td,{children:"The size of the array."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"The function returns the number of players stored in the array."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.p,{children:"Suppose there are 5 players on the server:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:"new players[MAX_PLAYERS];\nnew length;\n\nlength = GetPlayers(players, sizeof(players));\n// The `players` array now contains online player IDs. { 0, 1, 2, 3, 4 }\n// The value of the `length` variable is 5\n"})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetVehicles",children:"GetVehicles"}),": Gets an array variable of the IDs of the created vehicles on the server."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetActors",children:"GetActors"}),": Gets an array variable of the IDs of the created actors on the server."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return a}});var n=r(67294);let s={},i=n.createContext(s);function a(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);