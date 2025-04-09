"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["19965"],{7496:function(n,e,o){o.r(e),o.d(e,{default:()=>g,frontMatter:()=>t,metadata:()=>a,assets:()=>i,toc:()=>c,contentTitle:()=>s});var a=JSON.parse('{"id":"scripting/functions/GangZoneStopFlashForAll","title":"GangZoneStopFlashForAll","description":"Stops a gangzone flashing for all players.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/GangZoneStopFlashForAll.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GangZoneStopFlashForAll","permalink":"/th/docs/scripting/functions/GangZoneStopFlashForAll","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GangZoneStopFlashForAll.md","tags":[{"inline":true,"label":"gangzone","permalink":"/th/docs/tags/gangzone"}],"version":"current","frontMatter":{"title":"GangZoneStopFlashForAll","sidebar_label":"GangZoneStopFlashForAll","description":"Stops a gangzone flashing for all players.","tags":["gangzone"]},"sidebar":"docsSidebar","previous":{"title":"GangZoneShowForPlayer","permalink":"/th/docs/scripting/functions/GangZoneShowForPlayer"},"next":{"title":"GangZoneStopFlashForPlayer","permalink":"/th/docs/scripting/functions/GangZoneStopFlashForPlayer"}}'),l=o("85893"),r=o("50065");let t={title:"GangZoneStopFlashForAll",sidebar_label:"GangZoneStopFlashForAll",description:"Stops a gangzone flashing for all players.",tags:["gangzone"]},s=void 0,i={},c=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function h(n){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,l.jsx)(e.p,{children:"Stops a gangzone flashing for all players."}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"Name"}),(0,l.jsx)(e.th,{children:"Description"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"zone"}),(0,l.jsx)(e.td,{children:"The ID of the zone to stop flashing. Returned by GangZoneCreate."})]})})]}),"\n",(0,l.jsx)(e.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,l.jsx)(e.p,{children:"1: The function executed successfully. Success is reported even if the gang zone wasn't flashing to begin with."}),"\n",(0,l.jsx)(e.p,{children:"0: The function failed to execute. The gangzone specified does not exist."}),"\n",(0,l.jsx)(e.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-c",children:"new gangzone;\n\npublic OnGameModeInit()\n{\n    gangzone = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);\n    return 1;\n}\n\npublic OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    GangZoneFlashForAll(gangzone, COLOR_RED);\n    return 1;\n}\n\npublic OnPlayerSpawn(playerid)\n{\n    GangZoneStopFlashForAll(gangzone);\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"../functions/GangZoneCreate",children:"GangZoneCreate"}),": Create a gangzone."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"../functions/GangZoneDestroy",children:"GangZoneDestroy"}),": Destroy a gangzone."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"../functions/GangZoneShowForPlayer",children:"GangZoneShowForPlayer"}),": Show a gangzone for a player."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"../functions/GangZoneShowForAll",children:"GangZoneShowForAll"}),": Show a gangzone for all players."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"../functions/GangZoneHideForPlayer",children:"GangZoneHideForPlayer"}),": Hide a gangzone for a player."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"../functions/GangZoneHideForAll",children:"GangZoneHideForAll"}),": Hide a gangzone for all players."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"../functions/GangZoneFlashForPlayer",children:"GangZoneFlashForPlayer"}),": Make a gangzone flash for a player."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"../functions/GangZoneFlashForAll",children:"GangZoneFlashForAll"}),": Make a gangzone flash for all players."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"../functions/GangZoneStopFlashForPlayer",children:"GangZoneStopFlashForPlayer"}),": Stop a gangzone flashing for a player."]}),"\n"]})]})}function g(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(h,{...n})}):h(n)}},50065:function(n,e,o){o.d(e,{Z:function(){return s},a:function(){return t}});var a=o(67294);let l={},r=a.createContext(l);function t(n){let e=a.useContext(r);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:t(n.components),a.createElement(r.Provider,{value:e},n.children)}}}]);