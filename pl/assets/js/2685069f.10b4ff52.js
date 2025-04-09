"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["32156"],{35852:function(e,t,a){a.r(t),a.d(t,{default:()=>x,frontMatter:()=>i,metadata:()=>l,assets:()=>d,toc:()=>c,contentTitle:()=>s});var l=JSON.parse('{"id":"scripting/functions/GetPlayer3DTextLabelDrawDist","title":"GetPlayer3DTextLabelDrawDist","description":"Gets the player\'s 3D text label draw distance.","source":"@site/docs/scripting/functions/GetPlayer3DTextLabelDrawDist.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayer3DTextLabelDrawDist","permalink":"/pl/docs/scripting/functions/GetPlayer3DTextLabelDrawDist","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayer3DTextLabelDrawDist.md","tags":[{"inline":true,"label":"player","permalink":"/pl/docs/tags/player"},{"inline":true,"label":"3dtextlabel","permalink":"/pl/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"GetPlayer3DTextLabelDrawDist","sidebar_label":"GetPlayer3DTextLabelDrawDist","description":"Gets the player\'s 3D text label draw distance.","tags":["player","3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayer3DTextLabelColour","permalink":"/pl/docs/scripting/functions/GetPlayer3DTextLabelColour"},"next":{"title":"GetPlayer3DTextLabelDrawDistance","permalink":"/pl/docs/scripting/functions/GetPlayer3DTextLabelDrawDistance"}}'),n=a("85893"),r=a("50065");let i={title:"GetPlayer3DTextLabelDrawDist",sidebar_label:"GetPlayer3DTextLabelDrawDist",description:"Gets the player's 3D text label draw distance.",tags:["player","3dtextlabel"]},s=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["This function is deprecated. Please see ",(0,n.jsx)(t.a,{href:"GetPlayer3DTextLabelDrawDistance",children:"GetPlayer3DTextLabelDrawDistance"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Gets the player's 3D text label draw distance."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["PlayerText3D",":textid"]}),(0,n.jsx)(t.td,{children:"The ID of the player's 3D text label to get the draw distance of."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"Returns the draw distance of the player's 3D text label as float."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'new PlayerText3D:playerTextId;\nnew Float:X, Float:Y, Float:Z;\nnew Float:drawDistance;\n\nGetPlayerPos(playerid, X, Y, Z);\nplayerTextId = CreatePlayer3DTextLabel(playerid, "Hello\\nI\'m at your position", 0x008080FF, X, Y, Z, 40.0);\n\ndrawDistance = GetPlayer3DTextLabelDrawDist(playerid, playerTextId);\n// drawDistance = 40.0\n'})}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["This function is just short name of ",(0,n.jsx)(t.a,{href:"GetPlayer3DTextLabelDrawDistance",children:"GetPlayer3DTextLabelDrawDistance"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"SetPlayer3DTextLabelDrawDistance",children:"SetPlayer3DTextLabelDrawDistance"}),": Sets the player's 3D text label draw distance."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"Get3DTextLabelDrawDistance",children:"Get3DTextLabelDrawDistance"}),": Gets the 3D text label draw distance."]}),"\n"]})]})}function x(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},50065:function(e,t,a){a.d(t,{Z:function(){return s},a:function(){return i}});var l=a(67294);let n={},r=l.createContext(n);function i(e){let t=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);