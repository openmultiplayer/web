"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["95493"],{61668:function(e,n,o){o.r(n),o.d(n,{default:()=>c,frontMatter:()=>i,metadata:()=>r,assets:()=>s,toc:()=>d,contentTitle:()=>t});var r=JSON.parse('{"id":"scripting/functions/GangZoneGetPos","title":"GangZoneGetPos","description":"Get the position of a gangzone, represented by minX, minY, maxX, maxY coordinates","source":"@site/docs/scripting/functions/GangZoneGetPos.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GangZoneGetPos","permalink":"/fil/docs/scripting/functions/GangZoneGetPos","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GangZoneGetPos.md","tags":[{"inline":true,"label":"player","permalink":"/fil/docs/tags/player"},{"inline":true,"label":"gangzone","permalink":"/fil/docs/tags/gangzone"}],"version":"current","frontMatter":{"title":"GangZoneGetPos","sidebar_label":"GangZoneGetPos","description":"Get the position of a gangzone, represented by minX, minY, maxX, maxY coordinates","tags":["player","gangzone"]},"sidebar":"docsSidebar","previous":{"title":"GangZoneGetFlashColourForPlayer","permalink":"/fil/docs/scripting/functions/GangZoneGetFlashColourForPlayer"},"next":{"title":"GangZoneHideForAll","permalink":"/fil/docs/scripting/functions/GangZoneHideForAll"}}'),a=o("85893"),l=o("50065");let i={title:"GangZoneGetPos",sidebar_label:"GangZoneGetPos",description:"Get the position of a gangzone, represented by minX, minY, maxX, maxY coordinates",tags:["player","gangzone"]},t=void 0,s={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:o}=n;return o||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o,{version:"omp v1.1.0.2612"}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Get the position of a gangzone, represented by minX, minY, maxX, maxY coordinates."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"zoneid"}),(0,a.jsx)(n.td,{children:"The ID of the zone to the coordinates of which want to get."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:["&Float",":minX"]}),(0,a.jsx)(n.td,{children:"The X coordinate for the west side of the player gangzone."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:["&Float",":minY"]}),(0,a.jsx)(n.td,{children:"The Y coordinate for the south side of the player gangzone."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:["&Float",":maxX"]}),(0,a.jsx)(n.td,{children:"The X coordinate for the east side of the player gangzone."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:["&Float",":maxY"]}),(0,a.jsx)(n.td,{children:"The Y coordinate for the north side of the player gangzone."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsxs)(n.p,{children:["This function always returns ",(0,a.jsx)(n.strong,{children:"true"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"new gangZone;\n\npublic OnGameModeInit()\n{\n    gangZone = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);\n\n    new \n        Float:minX,\n        Float:minY,\n        Float:maxX,\n        Float:maxY;\n    \n    GangZoneGetPos(gangZone, minX, minY, maxX, maxY);\n    return 1;\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GangZoneDestroy",children:"GangZoneDestroy"}),": Destroy a gangzone."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GangZoneShowForPlayer",children:"GangZoneShowForPlayer"}),": Show a gangzone for a player."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GangZoneShowForAll",children:"GangZoneShowForAll"}),": Show a gangzone for all players."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GangZoneHideForPlayer",children:"GangZoneHideForPlayer"}),": Hide a gangzone for a player."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GangZoneHideForAll",children:"GangZoneHideForAll"}),": Hide a gangzone for all players."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GangZoneFlashForPlayer",children:"GangZoneFlashForPlayer"}),": Make a gangzone flash for a player."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GangZoneFlashForAll",children:"GangZoneFlashForAll"}),": Make a gangzone flash for all players."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GangZoneStopFlashForPlayer",children:"GangZoneStopFlashForPlayer"}),": Stop a gangzone flashing for a player."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GangZoneStopFlashForAll",children:"GangZoneStopFlashForAll"}),": Stop a gangzone flashing for all players."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"IsValidGangZone",children:"IsValidGangZone"}),": Check if the gangzone valid."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"IsPlayerInGangZone",children:"IsPlayerInGangZone"}),": Check if the player in gangzone."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"IsGangZoneVisibleForPlayer",children:"IsGangZoneVisibleForPlayer"}),": Check if the gangzone is visible for player."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GangZoneGetFlashColourForPlayer",children:"GangZoneGetFlashColourForPlayer"}),": Get the flashing colour of a gangzone for player."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"IsGangZoneFlashingForPlayer",children:"IsGangZoneFlashingForPlayer"}),": Check if the gangzone is flashing for player."]}),"\n"]})]})}function c(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},50065:function(e,n,o){o.d(n,{Z:function(){return t},a:function(){return i}});var r=o(67294);let a={},l=r.createContext(a);function i(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);