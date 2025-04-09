"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["53309"],{71596:function(e,t,l){l.r(t),l.d(t,{default:()=>p,frontMatter:()=>r,metadata:()=>i,assets:()=>d,toc:()=>o,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/functions/IsValidPlayer3DTextLabel","title":"IsValidPlayer3DTextLabel","description":"Checks if a player\'s 3D text label is valid.","source":"@site/docs/scripting/functions/IsValidPlayer3DTextLabel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsValidPlayer3DTextLabel","permalink":"/id/docs/scripting/functions/IsValidPlayer3DTextLabel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsValidPlayer3DTextLabel.md","tags":[{"inline":true,"label":"player","permalink":"/id/docs/tags/player"},{"inline":true,"label":"3dtextlabel","permalink":"/id/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"IsValidPlayer3DTextLabel","sidebar_label":"IsValidPlayer3DTextLabel","description":"Checks if a player\'s 3D text label is valid.","tags":["player","3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"IsValidPickup","permalink":"/id/docs/scripting/functions/IsValidPickup"},"next":{"title":"IsValidPlayerGangZone","permalink":"/id/docs/scripting/functions/IsValidPlayerGangZone"}}'),n=l("85893"),a=l("50065");let r={title:"IsValidPlayer3DTextLabel",sidebar_label:"IsValidPlayer3DTextLabel",description:"Checks if a player's 3D text label is valid.",tags:["player","3dtextlabel"]},s=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components},{VersionWarn:l}=t;return l||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{version:"omp v1.1.0.2612"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Checks if a player's 3D text label is valid."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["PlayerText3D",":textid"]}),(0,n.jsx)(t.td,{children:"The ID of the player's 3D text label to check."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:["This function returns ",(0,n.jsx)(t.strong,{children:"true"})," if the player's 3D text label is valid, or ",(0,n.jsx)(t.strong,{children:"false"})," if it is not."]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'new PlayerText3D:playerTextId;\nnew Float:X, Float:Y, Float:Z;\n\nGetPlayerPos(playerid, X, Y, Z);\nplayerTextId = CreatePlayer3DTextLabel(playerid, "Hello\\nI\'m at your position", 0x008080FF, X, Y, Z, 40.0);\n\nif (IsValidPlayer3DTextLabel(playerid, playerTextId))\n{\n    // Do something\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"CreatePlayer3DTextLabel",children:"CreatePlayer3DTextLabel"}),": Creates a 3D Text Label only for a specific player."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"IsValid3DTextLabel",children:"IsValid3DTextLabel"}),": Checks if a 3D text label is valid."]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},50065:function(e,t,l){l.d(t,{Z:function(){return s},a:function(){return r}});var i=l(67294);let n={},a=i.createContext(n);function r(e){let t=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);