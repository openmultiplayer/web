"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["49784"],{76062:function(e,t,l){l.r(t),l.d(t,{default:()=>p,frontMatter:()=>a,metadata:()=>n,assets:()=>o,toc:()=>d,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/GetPlayer3DTextLabelPos","title":"GetPlayer3DTextLabelPos","description":"Gets the player\'s 3D text label position.","source":"@site/docs/scripting/functions/GetPlayer3DTextLabelPos.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayer3DTextLabelPos","permalink":"/fil/docs/scripting/functions/GetPlayer3DTextLabelPos","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayer3DTextLabelPos.md","tags":[{"inline":true,"label":"player","permalink":"/fil/docs/tags/player"},{"inline":true,"label":"3dtextlabel","permalink":"/fil/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"GetPlayer3DTextLabelPos","sidebar_label":"GetPlayer3DTextLabelPos","description":"Gets the player\'s 3D text label position.","tags":["player","3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayer3DTextLabelLOS","permalink":"/fil/docs/scripting/functions/GetPlayer3DTextLabelLOS"},"next":{"title":"GetPlayer3DTextLabelText","permalink":"/fil/docs/scripting/functions/GetPlayer3DTextLabelText"}}'),r=l("85893"),i=l("50065");let a={title:"GetPlayer3DTextLabelPos",sidebar_label:"GetPlayer3DTextLabelPos",description:"Gets the player's 3D text label position.",tags:["player","3dtextlabel"]},s=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarn:l}=t;return l||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Gets the player's 3D text label position."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["PlayerText3D",":textid"]}),(0,r.jsx)(t.td,{children:"The ID of the player's 3D text label to get the position of."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":x"]}),(0,r.jsx)(t.td,{children:"An float variable into which to store the X coordinate, passed by reference."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":y"]}),(0,r.jsx)(t.td,{children:"An float variable into which to store the Y coordinate, passed by reference."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":z"]}),(0,r.jsx)(t.td,{children:"An float variable into which to store the Z coordinate, passed by reference."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'new PlayerText3D:playerTextId;\nnew Float:playerX, Float:playerY, Float:playerZ;\n\nGetPlayerPos(playerid, playerX, playerY, playerZ);\nplayerTextId = CreatePlayer3DTextLabel(playerid, "Hello\\nI\'m at your position", 0x008080FF, playerX, playerY, playerZ, 40.0);\n\nnew Float:x, Float:y, Float:z;\nGetPlayer3DTextLabelPos(playerid, playerTextId, x, y, z);\n'})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Get3DTextLabelPos",children:"Get3DTextLabelPos"}),": Gets the 3D text label position."]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,t,l){l.d(t,{Z:function(){return s},a:function(){return a}});var n=l(67294);let r={},i=n.createContext(r);function a(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);