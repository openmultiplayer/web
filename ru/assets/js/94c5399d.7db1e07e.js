"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["53309"],{71596:function(e,t,l){l.r(t),l.d(t,{default:()=>p,frontMatter:()=>a,metadata:()=>n,assets:()=>d,toc:()=>o,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/IsValidPlayer3DTextLabel","title":"IsValidPlayer3DTextLabel","description":"Checks if a player\'s 3D text label is valid.","source":"@site/docs/scripting/functions/IsValidPlayer3DTextLabel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsValidPlayer3DTextLabel","permalink":"/ru/docs/scripting/functions/IsValidPlayer3DTextLabel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsValidPlayer3DTextLabel.md","tags":[{"inline":true,"label":"player","permalink":"/ru/docs/tags/player"},{"inline":true,"label":"3dtextlabel","permalink":"/ru/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"IsValidPlayer3DTextLabel","sidebar_label":"IsValidPlayer3DTextLabel","description":"Checks if a player\'s 3D text label is valid.","tags":["player","3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"IsValidPickup","permalink":"/ru/docs/scripting/functions/IsValidPickup"},"next":{"title":"IsValidPlayerGangZone","permalink":"/ru/docs/scripting/functions/IsValidPlayerGangZone"}}'),i=l("85893"),r=l("50065");let a={title:"IsValidPlayer3DTextLabel",sidebar_label:"IsValidPlayer3DTextLabel",description:"Checks if a player's 3D text label is valid.",tags:["player","3dtextlabel"]},s=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{VersionWarn:l}=t;return l||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Checks if a player's 3D text label is valid."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["PlayerText3D",":textid"]}),(0,i.jsx)(t.td,{children:"The ID of the player's 3D text label to check."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(t.p,{children:["This function returns ",(0,i.jsx)(t.strong,{children:"true"})," if the player's 3D text label is valid, or ",(0,i.jsx)(t.strong,{children:"false"})," if it is not."]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'new PlayerText3D:playerTextId;\nnew Float:X, Float:Y, Float:Z;\n\nGetPlayerPos(playerid, X, Y, Z);\nplayerTextId = CreatePlayer3DTextLabel(playerid, "Hello\\nI\'m at your position", 0x008080FF, X, Y, Z, 40.0);\n\nif (IsValidPlayer3DTextLabel(playerid, playerTextId))\n{\n    // Do something\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"CreatePlayer3DTextLabel",children:"CreatePlayer3DTextLabel"}),": Creates a 3D Text Label only for a specific player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"IsValid3DTextLabel",children:"IsValid3DTextLabel"}),": Checks if a 3D text label is valid."]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,t,l){l.d(t,{Z:function(){return s},a:function(){return a}});var n=l(67294);let i={},r=n.createContext(i);function a(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);