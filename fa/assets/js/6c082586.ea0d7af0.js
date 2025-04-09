"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["97917"],{97171:function(e,n,r){r.r(n),r.d(n,{default:()=>g,frontMatter:()=>o,metadata:()=>a,assets:()=>t,toc:()=>h,contentTitle:()=>i});var a=JSON.parse('{"id":"scripting/functions/IsGangZoneFlashingForPlayer","title":"IsGangZoneFlashingForPlayer","description":"Check if the gangzone is flashing for player","source":"@site/docs/scripting/functions/IsGangZoneFlashingForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsGangZoneFlashingForPlayer","permalink":"/fa/docs/scripting/functions/IsGangZoneFlashingForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsGangZoneFlashingForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/fa/docs/tags/player"},{"inline":true,"label":"gangzone","permalink":"/fa/docs/tags/gangzone"}],"version":"current","frontMatter":{"title":"IsGangZoneFlashingForPlayer","sidebar_label":"IsGangZoneFlashingForPlayer","description":"Check if the gangzone is flashing for player","tags":["player","gangzone"]},"sidebar":"docsSidebar","previous":{"title":"IsBanned","permalink":"/fa/docs/scripting/functions/IsBanned"},"next":{"title":"IsGangZoneVisibleForPlayer","permalink":"/fa/docs/scripting/functions/IsGangZoneVisibleForPlayer"}}'),l=r("85893"),s=r("50065");let o={title:"IsGangZoneFlashingForPlayer",sidebar_label:"IsGangZoneFlashingForPlayer",description:"Check if the gangzone is flashing for player",tags:["player","gangzone"]},i=void 0,t={},h=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let n={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{VersionWarn:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Check if the gangzone is flashing for player."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The ID of the player to be checked."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"zoneid"}),(0,l.jsx)(n.td,{children:"The ID of the gangzone."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"true"})," - The gangzone is flashing for player."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"false"})," - The gangzone is not flashing for player."]}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneDestroy",children:"GangZoneDestroy"}),": Destroy a gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneShowForPlayer",children:"GangZoneShowForPlayer"}),": Show a gangzone for a player."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneShowForAll",children:"GangZoneShowForAll"}),": Show a gangzone for all players."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneHideForPlayer",children:"GangZoneHideForPlayer"}),": Hide a gangzone for a player."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneHideForAll",children:"GangZoneHideForAll"}),": Hide a gangzone for all players."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneFlashForPlayer",children:"GangZoneFlashForPlayer"}),": Make a gangzone flash for a player."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneFlashForAll",children:"GangZoneFlashForAll"}),": Make a gangzone flash for all players."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneStopFlashForPlayer",children:"GangZoneStopFlashForPlayer"}),": Stop a gangzone flashing for a player."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneStopFlashForAll",children:"GangZoneStopFlashForAll"}),": Stop a gangzone flashing for all players."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"IsValidGangZone",children:"IsValidGangZone"}),": Check if the gangzone valid."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"IsPlayerInGangZone",children:"IsPlayerInGangZone"}),": Check if the player in gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"IsGangZoneVisibleForPlayer",children:"IsGangZoneVisibleForPlayer"}),": Check if the gangzone is visible for player."]}),"\n"]})]})}function g(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return o}});var a=r(67294);let l={},s=a.createContext(l);function o(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);