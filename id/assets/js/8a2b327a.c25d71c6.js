"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["77096"],{12539:function(e,t,l){l.r(t),l.d(t,{default:()=>x,frontMatter:()=>o,metadata:()=>r,assets:()=>s,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"scripting/functions/GetPlayer3DTextLabelColor","title":"GetPlayer3DTextLabelColor","description":"Gets the player\'s 3D text label color.","source":"@site/docs/scripting/functions/GetPlayer3DTextLabelColor.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayer3DTextLabelColor","permalink":"/id/docs/scripting/functions/GetPlayer3DTextLabelColor","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayer3DTextLabelColor.md","tags":[{"inline":true,"label":"player","permalink":"/id/docs/tags/player"},{"inline":true,"label":"3dtextlabel","permalink":"/id/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"GetPlayer3DTextLabelColor","sidebar_label":"GetPlayer3DTextLabelColor","description":"Gets the player\'s 3D text label color.","tags":["player","3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayer3DTextLabelAttachedData","permalink":"/id/docs/scripting/functions/GetPlayer3DTextLabelAttachedData"},"next":{"title":"GetPlayer3DTextLabelColour","permalink":"/id/docs/scripting/functions/GetPlayer3DTextLabelColour"}}'),n=l("85893"),a=l("50065");let o={title:"GetPlayer3DTextLabelColor",sidebar_label:"GetPlayer3DTextLabelColor",description:"Gets the player's 3D text label color.",tags:["player","3dtextlabel"]},i=void 0,s={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["This function is deprecated. Please see ",(0,n.jsx)(t.a,{href:"GetPlayer3DTextLabelColour",children:"GetPlayer3DTextLabelColour"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Gets the player's 3D text label color."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["PlayerText3D",":textid"]}),(0,n.jsx)(t.td,{children:"The ID of the player's 3D text label to get the color of."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"Returns the player's 3D text label color."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'new PlayerText3D:playerTextId;\nnew Float:X, Float:Y, Float:Z;\nnew color;\n\nGetPlayerPos(playerid, X, Y, Z);\nplayerTextId = CreatePlayer3DTextLabel(playerid, "Hello\\nI\'m at your position", 0x008080FF, X, Y, Z, 40.0);\n\ncolor = GetPlayer3DTextLabelColor(playerid, playerTextId);\n// color = 0x008080FF\n'})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"Get3DTextLabelColor",children:"Get3DTextLabelColor"}),": Gets the 3D text label color."]}),"\n"]})]})}function x(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,t,l){l.d(t,{Z:function(){return i},a:function(){return o}});var r=l(67294);let n={},a=r.createContext(n);function o(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);