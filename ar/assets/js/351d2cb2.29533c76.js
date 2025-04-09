"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["10579"],{77682:function(e,l,t){t.r(l),t.d(l,{default:()=>p,frontMatter:()=>r,metadata:()=>a,assets:()=>c,toc:()=>o,contentTitle:()=>s});var a=JSON.parse('{"id":"scripting/callbacks/OnPlayerClickMap","title":"OnPlayerClickMap","description":"This callback is called when a player places a target/waypoint on the pause menu map (by right-clicking).","source":"@site/docs/scripting/callbacks/OnPlayerClickMap.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerClickMap","permalink":"/ar/docs/scripting/callbacks/OnPlayerClickMap","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerClickMap.md","tags":[{"inline":true,"label":"player","permalink":"/ar/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerClickMap","sidebar_label":"OnPlayerClickMap","description":"This callback is called when a player places a target/waypoint on the pause menu map (by right-clicking).","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerClickGangZone","permalink":"/ar/docs/scripting/callbacks/OnPlayerClickGangZone"},"next":{"title":"OnPlayerClickPlayer","permalink":"/ar/docs/scripting/callbacks/OnPlayerClickPlayer"}}'),n=t("85893"),i=t("50065");let r={title:"OnPlayerClickMap",sidebar_label:"OnPlayerClickMap",description:"This callback is called when a player places a target/waypoint on the pause menu map (by right-clicking).",tags:["player"]},s=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let l={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(l.p,{children:"This callback is called when a player places a target/waypoint on the pause menu map (by right-clicking)."}),"\n",(0,n.jsxs)(l.table,{children:[(0,n.jsx)(l.thead,{children:(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.th,{children:"Name"}),(0,n.jsx)(l.th,{children:"Description"})]})}),(0,n.jsxs)(l.tbody,{children:[(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"playerid"}),(0,n.jsx)(l.td,{children:"The ID of the player that placed a target/waypoint"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsxs)(l.td,{children:["Float",":fX"]}),(0,n.jsx)(l.td,{children:"The X float coordinate where the player clicked"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsxs)(l.td,{children:["Float",":fY"]}),(0,n.jsx)(l.td,{children:"The Y float coordinate where the player clicked"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsxs)(l.td,{children:["Float",":fZ"]}),(0,n.jsx)(l.td,{children:"The Z float coordinate where the player clicked (inaccurate - see note below)"})]})]})]}),"\n",(0,n.jsx)(l.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(l.p,{children:"1 - Will prevent other filterscripts from receiving this callback."}),"\n",(0,n.jsx)(l.p,{children:"0 - Indicates that this callback will be passed to the next filterscript."}),"\n",(0,n.jsx)(l.p,{children:"It is always called first in gamemode."}),"\n",(0,n.jsx)(l.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-c",children:"public OnPlayerClickMap(playerid, Float:fX, Float:fY, Float:fZ)\n{\n    SetPlayerPosFindZ(playerid, fX, fY, fZ);\n    return 1;\n}\n"})}),"\n",(0,n.jsx)(l.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(l.admonition,{type:"tip",children:(0,n.jsxs)(l.p,{children:["As the callback name says, its only called when the player click to mark the target and not when pressed the key. The Z value returned will be 0 (invalid) if the clicked area on the map is far away from the player; use the ",(0,n.jsx)(l.a,{href:"https://github.com/philip1337/samp-plugin-mapandreas",children:"MapAndreas"})," or ",(0,n.jsx)(l.a,{href:"https://github.com/Pottus/ColAndreas",children:"ColAndreas"})," plugin to get a more accurate Z coordinate."]})}),"\n",(0,n.jsx)(l.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsx)(l.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"../functions/GetPlayerPos",children:"GetPlayerPos"}),": Get a player's position."]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"../functions/SetPlayerPos",children:"SetPlayerPos"}),": Set a player's position."]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"../functions/SetPlayerPosFindZ",children:"SetPlayerPosFindZ"}),": Set a player's position and find the ground."]}),"\n"]})]})}function p(e={}){let{wrapper:l}={...(0,i.a)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,l,t){t.d(l,{Z:function(){return s},a:function(){return r}});var a=t(67294);let n={},i=a.createContext(n);function r(e){let l=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(l):{...l,...e}},[l,e])}function s(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(i.Provider,{value:l},e.children)}}}]);