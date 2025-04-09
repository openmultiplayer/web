"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["80982"],{9494:function(e,t,l){l.r(t),l.d(t,{default:()=>u,frontMatter:()=>a,metadata:()=>r,assets:()=>o,toc:()=>d,contentTitle:()=>s});var r=JSON.parse('{"id":"scripting/functions/SetPlayer3DTextLabelVirtualWorld","title":"SetPlayer3DTextLabelVirtualWorld","description":"Sets the player\'s 3D text label virtual world id.","source":"@site/docs/scripting/functions/SetPlayer3DTextLabelVirtualWorld.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayer3DTextLabelVirtualWorld","permalink":"/pl/docs/scripting/functions/SetPlayer3DTextLabelVirtualWorld","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayer3DTextLabelVirtualWorld.md","tags":[{"inline":true,"label":"player","permalink":"/pl/docs/tags/player"},{"inline":true,"label":"3dtextlabel","permalink":"/pl/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"SetPlayer3DTextLabelVirtualWorld","sidebar_label":"SetPlayer3DTextLabelVirtualWorld","description":"Sets the player\'s 3D text label virtual world id.","tags":["player","3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"SetPickupVirtualWorld","permalink":"/pl/docs/scripting/functions/SetPickupVirtualWorld"},"next":{"title":"SetPlayerAdmin","permalink":"/pl/docs/scripting/functions/SetPlayerAdmin"}}'),i=l("85893"),n=l("50065");let a={title:"SetPlayer3DTextLabelVirtualWorld",sidebar_label:"SetPlayer3DTextLabelVirtualWorld",description:"Sets the player's 3D text label virtual world id.",tags:["player","3dtextlabel"]},s=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components},{VersionWarn:l}=t;return l||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Sets the player's 3D text label virtual world id."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["PlayerText3D",":textid"]}),(0,i.jsx)(t.td,{children:"The ID of the player's 3D text label to set the virtual world id."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"virtualWorld"}),(0,i.jsx)(t.td,{children:"The virtual world in which you are able to see the 3D Text"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'new PlayerText3D:playerTextId;\nnew Float:X, Float:Y, Float:Z;\n\nGetPlayerPos(playerid, X, Y, Z);\nplayerTextId = CreatePlayer3DTextLabel(playerid, "Hello\\nI\'m at your position", 0x008080FF, X, Y, Z, 40.0);\n\nSetPlayer3DTextLabelVirtualWorld(playerid, playerTextId, 60);\n'})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"There is no virtual world support for player 3D text labels.\nThis function does nothing and is fundamentally broken!"})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayer3DTextLabelVirtualWorld",children:"GetPlayer3DTextLabelVirtualWorld"}),": Gets the player's 3D text label virtual world id."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"Set3DTextLabelVirtualWorld",children:"Set3DTextLabelVirtualWorld"}),": Sets the 3D text label virtual world id."]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,t,l){l.d(t,{Z:function(){return s},a:function(){return a}});var r=l(67294);let i={},n=r.createContext(i);function a(e){let t=r.useContext(n);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);