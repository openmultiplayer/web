"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["61847"],{44082:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>r,assets:()=>o,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/functions/SetPlayerMapIcon","title":"SetPlayerMapIcon","description":"Place an icon/marker on a player\'s map.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/SetPlayerMapIcon.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerMapIcon","permalink":"/th/docs/scripting/functions/SetPlayerMapIcon","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerMapIcon.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerMapIcon","sidebar_label":"SetPlayerMapIcon","description":"Place an icon/marker on a player\'s map.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerInterior","permalink":"/th/docs/scripting/functions/SetPlayerInterior"},"next":{"title":"SetPlayerMarkerForPlayer","permalink":"/th/docs/scripting/functions/SetPlayerMarkerForPlayer"}}'),s=t("85893"),i=t("50065");let a={title:"SetPlayerMapIcon",sidebar_label:"SetPlayerMapIcon",description:"Place an icon/marker on a player's map.",tags:["player"]},c=void 0,o={},l=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,s.jsx)(n.p,{children:"Place an icon/marker on a player's map. Can be used to mark locations such as banks and hospitals to players."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"playerid"}),(0,s.jsx)(n.td,{children:"The ID of the player to set the map icon for."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"iconid"}),(0,s.jsxs)(n.td,{children:["The player's icon ID, ranging from 0 to 99. This means there is a maximum of 100 map icons. ID can be used in ",(0,s.jsx)(n.a,{href:"/docs/scripting/functions/RemovePlayerMapIcon",children:"RemovePlayerMapIcon"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Float",":x"]}),(0,s.jsx)(n.td,{children:"The X coordinate to place the map icon at."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Float",":y"]}),(0,s.jsx)(n.td,{children:"The Y coordinate to place the map icon at."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Float",":z"]}),(0,s.jsx)(n.td,{children:"The Z coordinate to place the map icon at."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"markertype"}),(0,s.jsxs)(n.td,{children:["The ",(0,s.jsx)(n.a,{href:"/docs/scripting/resources/mapicons",children:"icon"})," to set."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"color"}),(0,s.jsx)(n.td,{children:"The color of the icon, as an integer or hex in RGBA color format. This should only be used with the square icon (ID: 0)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"style"}),(0,s.jsxs)(n.td,{children:["The ",(0,s.jsx)(n.a,{href:"/docs/scripting/resources/mapiconstyles",children:"style"})," of icon."]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,s.jsx)(n.p,{children:"1: The function executed successfully."}),"\n",(0,s.jsx)(n.p,{children:"0: The function failed to execute. Player is not connected."}),"\n",(0,s.jsx)(n.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"public OnPlayerConnect( playerid )\n{\n    // This example demonstrates how to create a dollar-icon on top of a 24/7 located\n    // in Las Venturas. This way new players know where to go with their money!\n    SetPlayerMapIcon(playerid, 12, 2204.9468, 1986.2877, 16.7380, 52, 0, MAPICON_LOCAL);\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",children:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"If you use an invalid marker type, it will create ID 1 (White Square). If you use an icon ID that is already in use, it will replace the current map icon using that ID."})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["You can only have 100 map icons! Marker type 1 (",(0,s.jsx)(n.img,{src:"https://assets.open.mp/assets/images/mapIcons/icon1.gif",alt:""}),"), 2 (",(0,s.jsx)(n.img,{src:"https://assets.open.mp/assets/images/mapIcons/icon2.gif",alt:""}),"), 4 (",(0,s.jsx)(n.img,{src:"https://assets.open.mp/assets/images/mapIcons/icon4.gif",alt:""}),"), and 56 (",(0,s.jsx)(n.img,{src:"https://assets.open.mp/assets/images/mapIcons/icon56.gif",alt:""}),") will cause your game to crash if you have map legends enabled while viewing the map."]})}),"\n",(0,s.jsx)(n.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/scripting/functions/RemovePlayerMapIcon",children:"RemovePlayerMapIcon"}),": Remove a map icon for a player."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/scripting/functions/SetPlayerMarkerForPlayer",children:"SetPlayerMarkerForPlayer"}),": Set a player's marker."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return a}});var r=t(67294);let s={},i=r.createContext(s);function a(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);