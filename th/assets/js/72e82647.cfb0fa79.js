"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["22411"],{49:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>c,toc:()=>d,contentTitle:()=>a});var i=JSON.parse('{"id":"scripting/functions/SetPlayerFightingStyle","title":"SetPlayerFightingStyle","description":"Set a player\'s special fighting style.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/SetPlayerFightingStyle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerFightingStyle","permalink":"/th/docs/scripting/functions/SetPlayerFightingStyle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerFightingStyle.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerFightingStyle","sidebar_label":"SetPlayerFightingStyle","description":"Set a player\'s special fighting style.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerFacingAngle","permalink":"/th/docs/scripting/functions/SetPlayerFacingAngle"},"next":{"title":"SetPlayerGravity","permalink":"/th/docs/scripting/functions/SetPlayerGravity"}}'),l=n("85893"),r=n("50065");let s={title:"SetPlayerFightingStyle",sidebar_label:"SetPlayerFightingStyle",description:"Set a player's special fighting style.",tags:["player"]},a=void 0,c={},d=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function o(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,l.jsx)(t.p,{children:"Set a player's special fighting style. To use in-game, aim and press the 'secondary attack' key (ENTER by default)."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"The ID of player to set the fighting style of."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"style"}),(0,l.jsxs)(t.td,{children:["The fighting ",(0,l.jsx)(t.a,{href:"/th/docs/scripting/resources/fightingstyles",children:"style"})," that should be set."]})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,l.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,l.jsx)(t.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'if (strcmp(cmdtext, "/boxing", true) == 0)\n{\n    SetPlayerFightingStyle (playerid, FIGHT_STYLE_BOXING);\n    SendClientMessage(playerid, 0xFFFFFFAA, "You have changed your fighting style to boxing!");\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",children:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"}),"\n",(0,l.jsx)(t.admonition,{type:"tip",children:(0,l.jsx)(t.p,{children:"This does not affect normal fist attacks - only special/secondary attacks (aim + press 'secondary attack' key)."})}),"\n",(0,l.jsx)(t.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"GetPlayerFightingStyle: Get a player's fighting style."}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return s}});var i=n(67294);let l={},r=i.createContext(l);function s(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);