"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["16157"],{43651:function(e,n,a){a.r(n),a.d(n,{default:()=>g,frontMatter:()=>s,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>t});var r=JSON.parse('{"id":"scripting/functions/IsPlayerGangZoneVisible","title":"IsPlayerGangZoneVisible","description":"Check if the player gangzone is visible.","source":"@site/docs/scripting/functions/IsPlayerGangZoneVisible.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerGangZoneVisible","permalink":"/fr/docs/scripting/functions/IsPlayerGangZoneVisible","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsPlayerGangZoneVisible.md","tags":[{"inline":true,"label":"player","permalink":"/fr/docs/tags/player"},{"inline":true,"label":"gangzone","permalink":"/fr/docs/tags/gangzone"},{"inline":true,"label":"playergangzone","permalink":"/fr/docs/tags/playergangzone"}],"version":"current","frontMatter":{"title":"IsPlayerGangZoneVisible","sidebar_label":"IsPlayerGangZoneVisible","description":"Check if the player gangzone is visible.","tags":["player","gangzone","playergangzone"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerGangZoneFlashing","permalink":"/fr/docs/scripting/functions/IsPlayerGangZoneFlashing"},"next":{"title":"IsPlayerInAnyVehicle","permalink":"/fr/docs/scripting/functions/IsPlayerInAnyVehicle"}}'),l=a("85893"),i=a("50065");let s={title:"IsPlayerGangZoneVisible",sidebar_label:"IsPlayerGangZoneVisible",description:"Check if the player gangzone is visible.",tags:["player","gangzone","playergangzone"]},t=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarn:a}=n;return a||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Check if the player gangzone is visible."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The ID of the player to whom player gangzone is bound."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"zoneid"}),(0,l.jsx)(n.td,{children:"The ID of the player gangzone."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"true"})," - The player gangzone is visible."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"false"})," - The player gangzone is not visible."]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'new gGangZoneID[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    // Create the gangzone\n    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);\n\n    // Show the gangzone to player\n    PlayerGangZoneShow(playerid, gGangZoneID[playerid], 0xFF0000FF);\n    return 1;\n}\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/zone", true))\n    {\n        if (IsPlayerGangZoneVisible(playerid, gGangZoneID[playerid]))\n        {\n            SendClientMessage(playerid, 0x00FF00FF, "Gangzone is visible.");\n        }\n        else\n        {\n            SendClientMessage(playerid, 0xFF0000FF, "Gangzone is not visible.");\n        }\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"CreatePlayerGangZone",children:"CreatePlayerGangZone"}),": Create player gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"PlayerGangZoneDestroy",children:"PlayerGangZoneDestroy"}),": Destroy player gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"PlayerGangZoneShow",children:"PlayerGangZoneShow"}),": Show player gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"PlayerGangZoneHide",children:"PlayerGangZoneHide"}),": Hide player gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"PlayerGangZoneFlash",children:"PlayerGangZoneFlash"}),": Start player gangzone flash."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"PlayerGangZoneStopFlash",children:"PlayerGangZoneStopFlash"}),": Stop player gangzone flash."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"PlayerGangZoneGetFlashColour",children:"PlayerGangZoneGetFlashColour"}),": Get the flashing colour of a player gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"PlayerGangZoneGetColour",children:"PlayerGangZoneGetColour"}),": Get the colour of a player gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"PlayerGangZoneGetPos",children:"PlayerGangZoneGetPos"}),": Get the position of a gangzone, represented by minX, minY, maxX, maxY coordinates."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"IsValidPlayerGangZone",children:"IsValidPlayerGangZone"}),": Check if the player gangzone valid."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"IsPlayerInPlayerGangZone",children:"IsPlayerInPlayerGangZone"}),": Check if the player in player gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"IsPlayerGangZoneFlashing",children:"IsPlayerGangZoneFlashing"}),": Check if the player gangzone is flashing."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"UsePlayerGangZoneCheck",children:"UsePlayerGangZoneCheck"}),": Enables the callback when a player enters/leaves this zone."]}),"\n"]})]})}function g(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return t},a:function(){return s}});var r=a(67294);let l={},i=r.createContext(l);function s(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);