"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["29705"],{93485:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>a,toc:()=>d,contentTitle:()=>o});var s=JSON.parse('{"id":"scripting/functions/SetPlayerPosFindZ","title":"SetPlayerPosFindZ","description":"This sets the players position then adjusts the players z-coordinate to the nearest solid ground under the position.","source":"@site/docs/scripting/functions/SetPlayerPosFindZ.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerPosFindZ","permalink":"/it/docs/scripting/functions/SetPlayerPosFindZ","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerPosFindZ.md","tags":[{"inline":true,"label":"player","permalink":"/it/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerPosFindZ","sidebar_label":"SetPlayerPosFindZ","description":"This sets the players position then adjusts the players z-coordinate to the nearest solid ground under the position.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerPos","permalink":"/it/docs/scripting/functions/SetPlayerPos"},"next":{"title":"SetPlayerRaceCheckpoint","permalink":"/it/docs/scripting/functions/SetPlayerRaceCheckpoint"}}'),i=n("85893"),r=n("50065");let l={title:"SetPlayerPosFindZ",sidebar_label:"SetPlayerPosFindZ",description:"This sets the players position then adjusts the players z-coordinate to the nearest solid ground under the position.",tags:["player"]},o=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function c(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"This sets the players position then adjusts the players z-coordinate to the nearest solid ground under the position."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player to set the position of."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":x"]}),(0,i.jsx)(t.td,{children:"The X coordinate to position the player at."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":y"]}),(0,i.jsx)(t.td,{children:"The X coordinate to position the player at."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":z"]}),(0,i.jsx)(t.td,{children:"The Z coordinate to position the player at."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"false"})," - The function failed to execute. This means the player specified does not exist."]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"SetPlayerPosFindZ(playerid, 1234.5, 1234.5, 1000.0);\n"})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["This function does not work if the new coordinates are far away from where the player currently is. The Z height will be 0, which will likely put them underground. It is highly recommended that the ",(0,i.jsx)(t.a,{href:"https://github.com/philip1337/samp-plugin-mapandreas",children:"MapAndreas"})," or ",(0,i.jsx)(t.a,{href:"https://github.com/Pottus/ColAndreas",children:"ColAndreas"})," plugin be used instead."]})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPlayerPos",children:"SetPlayerPos"}),": Set a player's position."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"../callbacks/OnPlayerClickMap",children:"OnPlayerClickMap"}),": Called when a player sets a waypoint/target on the pause menu map."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return l}});var s=n(67294);let i={},r=s.createContext(i);function l(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);