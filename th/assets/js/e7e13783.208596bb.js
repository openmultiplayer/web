"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["55697"],{89741:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>s});var t=JSON.parse('{"id":"scripting/callbacks/OnPlayerInteriorChange","title":"OnPlayerInteriorChange","description":"Called when a player changes interior.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerInteriorChange.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerInteriorChange","permalink":"/th/docs/scripting/callbacks/OnPlayerInteriorChange","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerInteriorChange.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerInteriorChange","sidebar_label":"OnPlayerInteriorChange","description":"Called when a player changes interior.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerGiveDamageActor","permalink":"/th/docs/scripting/callbacks/OnPlayerGiveDamageActor"},"next":{"title":"OnPlayerKeyStateChange","permalink":"/th/docs/scripting/callbacks/OnPlayerKeyStateChange"}}'),i=r("85893"),l=r("50065");let a={title:"OnPlayerInteriorChange",sidebar_label:"OnPlayerInteriorChange",description:"Called when a player changes interior.",tags:["player"]},s=void 0,c={},o=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,i.jsx)(n.p,{children:"Called when a player changes interior. Can be triggered by SetPlayerInterior or when a player enter/exits a building."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"The playerid who changed interior."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"newinteriorid"}),(0,i.jsx)(n.td,{children:"The interior the player is now in."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"oldinteriorid"}),(0,i.jsx)(n.td,{children:"The interior the player was in before."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,i.jsx)(n.p,{children:"\u0E21\u0E31\u0E19\u0E16\u0E39\u0E01\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E19\u0E40\u0E01\u0E21\u0E42\u0E2B\u0E21\u0E14\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E2A\u0E21\u0E2D"}),"\n",(0,i.jsx)(n.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnPlayerInteriorChange(playerid, newinteriorid, oldinteriorid)\n{\n    new string[42];\n    format(string, sizeof(string), "You went from interior %d to interior %d!", oldinteriorid, newinteriorid);\n    SendClientMessage(playerid, COLOR_ORANGE, string);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/th/docs/scripting/functions/SetPlayerInterior",children:"SetPlayerInterior"}),": Set a player's interior."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/th/docs/scripting/functions/GetPlayerInterior",children:"GetPlayerInterior"}),": Get the current interior of a player."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/th/docs/scripting/functions/LinkVehicleToInterior",children:"LinkVehicleToInterior"}),": Change the interior that a vehicle is seen in."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/th/docs/scripting/callbacks/OnPlayerStateChange",children:"OnPlayerStateChange"}),": Called when a player changes state."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return a}});var t=r(67294);let i={},l=t.createContext(i);function a(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);