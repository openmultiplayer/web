"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["59317"],{65405:function(e,r,s){s.r(r),s.d(r,{default:()=>h,frontMatter:()=>a,metadata:()=>n,assets:()=>o,toc:()=>d,contentTitle:()=>i});var n=JSON.parse('{"id":"scripting/functions/ShowPlayerMarkers","title":"ShowPlayerMarkers","description":"Toggles player markers (blips on the radar).","source":"@site/docs/scripting/functions/ShowPlayerMarkers.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ShowPlayerMarkers","permalink":"/sl/docs/scripting/functions/ShowPlayerMarkers","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/ShowPlayerMarkers.md","tags":[{"inline":true,"label":"player","permalink":"/sl/docs/tags/player"}],"version":"current","frontMatter":{"title":"ShowPlayerMarkers","sidebar_label":"ShowPlayerMarkers","description":"Toggles player markers (blips on the radar).","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"ShowPlayerDialog","permalink":"/sl/docs/scripting/functions/ShowPlayerDialog"},"next":{"title":"ShowPlayerNameTagForPlayer","permalink":"/sl/docs/scripting/functions/ShowPlayerNameTagForPlayer"}}'),l=s("85893"),t=s("50065");let a={title:"ShowPlayerMarkers",sidebar_label:"ShowPlayerMarkers",description:"Toggles player markers (blips on the radar).",tags:["player"]},i=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Marker Modes",id:"marker-modes",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function c(e){let r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(r.p,{children:["Toggles player markers (blips on the radar). Must be used when the server starts (OnGameModeInit). For other times, see ",(0,l.jsx)(r.a,{href:"SetPlayerMarkerForPlayer",children:"SetPlayerMarkerForPlayer"}),"."]}),"\n",(0,l.jsxs)(r.table,{children:[(0,l.jsx)(r.thead,{children:(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.th,{children:"Name"}),(0,l.jsx)(r.th,{children:"Description"})]})}),(0,l.jsx)(r.tbody,{children:(0,l.jsxs)(r.tr,{children:[(0,l.jsxs)(r.td,{children:["PLAYER_MARKERS_MODE",":mode"]}),(0,l.jsxs)(r.td,{children:["The ",(0,l.jsx)(r.a,{href:"../resources/markermodes",children:"mode"})," to use for markers. They can be streamed, meaning they are only visible to nearby players."]})]})})]}),"\n",(0,l.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(r.p,{children:"This function does not return any specific values."}),"\n",(0,l.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    // Player markers only visible to nearby players\n    ShowPlayerMarkers(PLAYER_MARKERS_MODE_STREAMED);\n}\n"})}),"\n",(0,l.jsx)(r.h2,{id:"marker-modes",children:"Marker Modes"}),"\n",(0,l.jsxs)(r.table,{children:[(0,l.jsx)(r.thead,{children:(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.th,{children:"ID"}),(0,l.jsx)(r.th,{children:"MODE"})]})}),(0,l.jsxs)(r.tbody,{children:[(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"0"}),(0,l.jsx)(r.td,{children:"PLAYER_MARKERS_MODE_OFF"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"1"}),(0,l.jsx)(r.td,{children:"PLAYER_MARKERS_MODE_GLOBAL"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"2"}),(0,l.jsx)(r.td,{children:"PLAYER_MARKERS_MODE_STREAMED"})]})]})]}),"\n",(0,l.jsx)(r.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(r.admonition,{type:"tip",children:(0,l.jsx)(r.p,{children:"It is also possible to set a player's color to a color that has full transparency (no alpha value). This makes it possible to show markers on a per-player basis."})}),"\n",(0,l.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"SetPlayerMarkerForPlayer",children:"SetPlayerMarkerForPlayer"}),": Set a player's marker."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"LimitPlayerMarkerRadius",children:"LimitPlayerMarkerRadius"}),": Limit the player marker radius."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"ShowNameTags",children:"ShowNameTags"}),": Set nametags on or off."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"SetPlayerColor",children:"SetPlayerColor"}),": Set a player's color."]}),"\n"]}),"\n",(0,l.jsx)(r.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"../resources/markermodes",children:"Marker Modes"})}),"\n"]})]})}function h(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},50065:function(e,r,s){s.d(r,{Z:function(){return i},a:function(){return a}});var n=s(67294);let l={},t=n.createContext(l);function a(e){let r=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);