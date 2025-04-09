"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["10563"],{54190:function(e,n,r){r.r(n),r.d(n,{default:()=>c,frontMatter:()=>i,metadata:()=>a,assets:()=>s,toc:()=>d,contentTitle:()=>o});var a=JSON.parse('{"id":"scripting/functions/CreatePlayerGangZone","title":"CreatePlayerGangZone","description":"Create player gangzone","source":"@site/docs/scripting/functions/CreatePlayerGangZone.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/CreatePlayerGangZone","permalink":"/id/docs/scripting/functions/CreatePlayerGangZone","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/CreatePlayerGangZone.md","tags":[{"inline":true,"label":"player","permalink":"/id/docs/tags/player"},{"inline":true,"label":"gangzone","permalink":"/id/docs/tags/gangzone"},{"inline":true,"label":"playergangzone","permalink":"/id/docs/tags/playergangzone"}],"version":"current","frontMatter":{"title":"CreatePlayerGangZone","sidebar_label":"CreatePlayerGangZone","description":"Create player gangzone","tags":["player","gangzone","playergangzone"]},"sidebar":"docsSidebar","previous":{"title":"CreatePlayer3DTextLabel","permalink":"/id/docs/scripting/functions/CreatePlayer3DTextLabel"},"next":{"title":"CreatePlayerObject","permalink":"/id/docs/scripting/functions/CreatePlayerObject"}}'),t=r("85893"),l=r("50065");let i={title:"CreatePlayerGangZone",sidebar_label:"CreatePlayerGangZone",description:"Create player gangzone",tags:["player","gangzone","playergangzone"]},o=void 0,s={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"GangZone Editors",id:"gangzone-editors",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Create player gangzone. This can be used as a way around the global gangzone limit."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playerid"}),(0,t.jsx)(n.td,{children:"The ID of the player to whom the player gangzone will be created."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Float",":minX"]}),(0,t.jsx)(n.td,{children:"The X coordinate for the west side of the player gangzone."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Float",":minY"]}),(0,t.jsx)(n.td,{children:"The Y coordinate for the south side of the player gangzone."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Float",":maxX"]}),(0,t.jsx)(n.td,{children:"The X coordinate for the east side of the player gangzone."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Float",":maxY"]}),(0,t.jsx)(n.td,{children:"The Y coordinate for the north side of the player gangzone."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:["The ID of the created player gangzone, returns ",(0,t.jsx)(n.strong,{children:"-1"})," if not created"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"// This variable is used to store the id of the gangzone\n// so that we can use it throught the script\nnew gGangZoneID[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    // Create the gangzone\n    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"                          MaxY\n                          v\n             -------------* < MaxX\n             |            |\n             |  gangzone  |\n             |   center   |\n             |            |\n      MinX > *-------------\n             ^\n             MinY\n"})}),"\n",(0,t.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"There is a limit of 1024 gangzones."}),"\n",(0,t.jsx)(n.li,{children:"Putting the parameters in the wrong order results in glitchy behavior."}),"\n"]})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["This function merely CREATES the gangzone, you must use ",(0,t.jsx)(n.a,{href:"PlayerGangZoneShow",children:"PlayerGangZoneShow"})," to show it."]})}),"\n",(0,t.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"PlayerGangZoneDestroy",children:"PlayerGangZoneDestroy"}),": Destroy player gangzone."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"PlayerGangZoneShow",children:"PlayerGangZoneShow"}),": Show player gangzone in a color."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"PlayerGangZoneHide",children:"PlayerGangZoneHide"}),": Hide player gangzone."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"PlayerGangZoneFlash",children:"PlayerGangZoneFlash"}),": Start player gangzone flash."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"PlayerGangZoneStopFlash",children:"PlayerGangZoneStopFlash"}),": Stop player gangzone flash."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"PlayerGangZoneGetColour",children:"PlayerGangZoneGetColour"}),": Get the colour of a player gangzone."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"PlayerGangZoneGetFlashColour",children:"PlayerGangZoneGetFlashColour"}),": Get the flashing colour of a player gangzone."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"PlayerGangZoneGetPos",children:"PlayerGangZoneGetPos"}),": Get the position of a gangzone, represented by minX, minY, maxX, maxY coordinates."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"IsValidPlayerGangZone",children:"IsValidPlayerGangZone"}),": Check if the player gangzone valid."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"IsPlayerInPlayerGangZone",children:"IsPlayerInPlayerGangZone"}),": Check if the player in player gangzone."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"IsPlayerGangZoneVisible",children:"IsPlayerGangZoneVisible"}),": Check if the player gangzone is visible."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"IsPlayerGangZoneFlashing",children:"IsPlayerGangZoneFlashing"}),": Check if the player gangzone is flashing."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"UsePlayerGangZoneCheck",children:"UsePlayerGangZoneCheck"}),": Enables the callback when a player enters/leaves this zone."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"gangzone-editors",children:"GangZone Editors"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://dev.prineside.com/en/gtasa_gangzone_editor/",children:"Prineside DevTools GangZone Editor"})}),"\n"]})]})}function c(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return i}});var a=r(67294);let t={},l=a.createContext(t);function i(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);