"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["8672"],{95849:function(e,t,l){l.r(t),l.d(t,{default:()=>u,frontMatter:()=>a,metadata:()=>r,assets:()=>s,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"scripting/functions/GetPlayer3DTextLabelColour","title":"GetPlayer3DTextLabelColour","description":"Gets the player\'s 3D text label colour.","source":"@site/docs/scripting/functions/GetPlayer3DTextLabelColour.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayer3DTextLabelColour","permalink":"/th/docs/scripting/functions/GetPlayer3DTextLabelColour","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayer3DTextLabelColour.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"},{"inline":true,"label":"3dtextlabel","permalink":"/th/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"GetPlayer3DTextLabelColour","sidebar_label":"GetPlayer3DTextLabelColour","description":"Gets the player\'s 3D text label colour.","tags":["player","3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayer3DTextLabelColor","permalink":"/th/docs/scripting/functions/GetPlayer3DTextLabelColor"},"next":{"title":"GetPlayer3DTextLabelDrawDist","permalink":"/th/docs/scripting/functions/GetPlayer3DTextLabelDrawDist"}}'),n=l("85893"),o=l("50065");let a={title:"GetPlayer3DTextLabelColour",sidebar_label:"GetPlayer3DTextLabelColour",description:"Gets the player's 3D text label colour.",tags:["player","3dtextlabel"]},i=void 0,s={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components},{VersionWarn:l}=t;return l||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{version:"omp v1.1.0.2612"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Gets the player's 3D text label colour."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["PlayerText3D",":textid"]}),(0,n.jsx)(t.td,{children:"The ID of the player's 3D text label to get the colour of."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"Returns the player's 3D text label colour."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'new PlayerText3D:playerTextId;\nnew Float:x, Float:y, Float:z;\nnew colour;\n\nGetPlayerPos(playerid, x, y, z);\nplayerTextId = CreatePlayer3DTextLabel(playerid, "Hello\\nI\'m at your position", 0x008080FF, x, y, z, 40.0);\n\ncolour = GetPlayer3DTextLabelColour(playerid, playerTextId);\n// colour = 0x008080FF\n'})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"Get3DTextLabelColour",children:"Get3DTextLabelColour"}),": Gets the 3D text label colour."]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,t,l){l.d(t,{Z:function(){return i},a:function(){return a}});var r=l(67294);let n={},o=r.createContext(n);function a(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);