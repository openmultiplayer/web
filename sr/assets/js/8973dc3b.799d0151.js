"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["6216"],{95691:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"scripting/functions/SetPlayerMapIcon","title":"SetPlayerMapIcon","description":"Place an icon/marker on a player\'s map.","source":"@site/docs/scripting/functions/SetPlayerMapIcon.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerMapIcon","permalink":"/sr/docs/scripting/functions/SetPlayerMapIcon","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerMapIcon.md","tags":[{"inline":true,"label":"player","permalink":"/sr/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerMapIcon","sidebar_label":"SetPlayerMapIcon","description":"Place an icon/marker on a player\'s map.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerInterior","permalink":"/sr/docs/scripting/functions/SetPlayerInterior"},"next":{"title":"SetPlayerMarkerForPlayer","permalink":"/sr/docs/scripting/functions/SetPlayerMarkerForPlayer"}}'),r=s("85893"),i=s("50065");let a={title:"SetPlayerMapIcon",sidebar_label:"SetPlayerMapIcon",description:"Place an icon/marker on a player's map.",tags:["player"]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Place an icon/marker on a player's map. Can be used to mark locations such as banks and hospitals to players."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"The ID of the player to set the map icon for."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"iconid"}),(0,r.jsxs)(n.td,{children:["The player's icon ID, ranging from 0 to 99. This means there is a maximum of 100 map icons. ID can be used in ",(0,r.jsx)(n.a,{href:"RemovePlayerMapIcon",children:"RemovePlayerMapIcon"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":x"]}),(0,r.jsx)(n.td,{children:"The X coordinate to place the map icon at."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":y"]}),(0,r.jsx)(n.td,{children:"The Y coordinate to place the map icon at."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":z"]}),(0,r.jsx)(n.td,{children:"The Z coordinate to place the map icon at."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"markerType"}),(0,r.jsxs)(n.td,{children:["The ",(0,r.jsx)(n.a,{href:"../resources/mapicons",children:"icon"})," to set."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"colour"}),(0,r.jsx)(n.td,{children:"The color of the icon, as an integer or hex in RGBA color format. This should only be used with the square icon (ID: 0)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["MAPICON",":style"]}),(0,r.jsxs)(n.td,{children:["The ",(0,r.jsx)(n.a,{href:"../resources/mapiconstyles",children:"style"})," of icon."]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"false"})," - The function failed to execute. Player is not connected."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"public OnPlayerConnect(playerid)\n{\n    // This example demonstrates how to create a dollar-icon on top of a 24/7 located\n    // in Las Venturas. This way new players know where to go with their money!\n    SetPlayerMapIcon(playerid, 12, 2204.9468, 1986.2877, 16.7380, 52, 0, MAPICON_LOCAL);\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If you use an invalid marker type, it will create ID 1 (White Square ",(0,r.jsx)(n.img,{src:"https://assets.open.mp/assets/images/mapIcons/icon1.gif",alt:""}),")."]}),"\n",(0,r.jsx)(n.li,{children:"If you use an icon ID that is already in use, it will replace the current map icon using that ID."}),"\n"]})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["You can only have 100 map icons. To circumvent this limit, you can use the ",(0,r.jsx)(n.a,{href:"https://github.com/samp-incognito/samp-streamer-plugin",children:"streamer"})," plugin."]}),"\n",(0,r.jsxs)(n.li,{children:["Marker type 1 (",(0,r.jsx)(n.img,{src:"https://assets.open.mp/assets/images/mapIcons/icon1.gif",alt:""}),"), 2 (",(0,r.jsx)(n.img,{src:"https://assets.open.mp/assets/images/mapIcons/icon2.gif",alt:""}),"), 4 (",(0,r.jsx)(n.img,{src:"https://assets.open.mp/assets/images/mapIcons/icon4.gif",alt:""}),"), and 56 (",(0,r.jsx)(n.img,{src:"https://assets.open.mp/assets/images/mapIcons/icon56.gif",alt:""}),") will cause your game to crash if you have map legends enabled while viewing the map."]}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"RemovePlayerMapIcon",children:"RemovePlayerMapIcon"}),": Remove a map icon for a player."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"SetPlayerMarkerForPlayer",children:"SetPlayerMarkerForPlayer"}),": Set a player's marker."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../resources/mapicons",children:"Map Icons"}),": A list of map icons."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../resources/mapiconstyles",children:"Map Icon Styles"}),": A list of map icon styles."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return a}});var t=s(67294);let r={},i=t.createContext(r);function a(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);