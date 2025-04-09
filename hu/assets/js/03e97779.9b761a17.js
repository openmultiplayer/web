"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["70278"],{99397:function(e,n,r){r.r(n),r.d(n,{default:()=>d,frontMatter:()=>t,metadata:()=>o,assets:()=>i,toc:()=>h,contentTitle:()=>s});var o=JSON.parse('{"id":"scripting/functions/GangZoneGetFlashColourForPlayer","title":"GangZoneGetFlashColourForPlayer","description":"Get the flashing colour of a gangzone for player","source":"@site/docs/scripting/functions/GangZoneGetFlashColourForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GangZoneGetFlashColourForPlayer","permalink":"/hu/docs/scripting/functions/GangZoneGetFlashColourForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GangZoneGetFlashColourForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/hu/docs/tags/player"},{"inline":true,"label":"gangzone","permalink":"/hu/docs/tags/gangzone"}],"version":"current","frontMatter":{"title":"GangZoneGetFlashColourForPlayer","sidebar_label":"GangZoneGetFlashColourForPlayer","description":"Get the flashing colour of a gangzone for player","tags":["player","gangzone"]},"sidebar":"docsSidebar","previous":{"title":"GangZoneGetColourForPlayer","permalink":"/hu/docs/scripting/functions/GangZoneGetColourForPlayer"},"next":{"title":"GangZoneGetPos","permalink":"/hu/docs/scripting/functions/GangZoneGetPos"}}'),l=r("85893"),a=r("50065");let t={title:"GangZoneGetFlashColourForPlayer",sidebar_label:"GangZoneGetFlashColourForPlayer",description:"Get the flashing colour of a gangzone for player",tags:["player","gangzone"]},s=void 0,i={},h=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let n={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components},{VersionWarn:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Get the flashing colour of a gangzone for player."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The ID of the player you need to get."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"zoneid"}),(0,l.jsx)(n.td,{children:"The ID of the gangzone."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"Flashing color of gangzone for player."}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"0:"})," Failed to execute the function. The gangzone is not shown for the player."]}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneDestroy",children:"GangZoneDestroy"}),": Destroy a gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneShowForPlayer",children:"GangZoneShowForPlayer"}),": Show a gangzone for a player."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneShowForAll",children:"GangZoneShowForAll"}),": Show a gangzone for all players."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneHideForPlayer",children:"GangZoneHideForPlayer"}),": Hide a gangzone for a player."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneHideForAll",children:"GangZoneHideForAll"}),": Hide a gangzone for all players."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneFlashForPlayer",children:"GangZoneFlashForPlayer"}),": Make a gangzone flash for a player."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneFlashForAll",children:"GangZoneFlashForAll"}),": Make a gangzone flash for all players."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneStopFlashForPlayer",children:"GangZoneStopFlashForPlayer"}),": Stop a gangzone flashing for a player."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneStopFlashForAll",children:"GangZoneStopFlashForAll"}),": Stop a gangzone flashing for all players."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"IsValidGangZone",children:"IsValidGangZone"}),": Check if the gangzone valid."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"IsPlayerInGangZone",children:"IsPlayerInGangZone"}),": Check if the player in gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"IsGangZoneVisibleForPlayer",children:"IsGangZoneVisibleForPlayer"}),": Check if the gangzone is visible for player."]}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return t}});var o=r(67294);let l={},a=o.createContext(l);function t(e){let n=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);