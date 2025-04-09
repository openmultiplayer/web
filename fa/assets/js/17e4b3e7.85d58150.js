"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["89283"],{55920:function(e,t,r){r.r(t),r.d(t,{default:()=>u,frontMatter:()=>i,metadata:()=>n,assets:()=>a,toc:()=>c,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/GetPlayerColor","title":"GetPlayerColor","description":"Gets the color of the player\'s name and radar marker.","source":"@site/docs/scripting/functions/GetPlayerColor.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerColor","permalink":"/fa/docs/scripting/functions/GetPlayerColor","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerColor.md","tags":[{"inline":true,"label":"player","permalink":"/fa/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerColor","sidebar_label":"GetPlayerColor","description":"Gets the color of the player\'s name and radar marker.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerClass","permalink":"/fa/docs/scripting/functions/GetPlayerClass"},"next":{"title":"GetPlayerCustomSkin","permalink":"/fa/docs/scripting/functions/GetPlayerCustomSkin"}}'),l=r("85893"),o=r("50065");let i={title:"GetPlayerColor",sidebar_label:"GetPlayerColor",description:"Gets the color of the player's name and radar marker.",tags:["player"]},s=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Gets the color of the player's name and radar marker. Only works after SetPlayerColor."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"The ID of the player to get the color of."})]})})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(t.p,{children:"The player's color. 0 if no color set or player not connected."}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:"SendClientMessage(playerid, GetPlayerColor(playerid), \"This message is in your color\xa0:)\");\n\nnew output[144];\nformat(output, sizeof(output), \"You can also use the player's color for {%06x}color embedding!\", GetPlayerColor(playerid) >>> 8);\nSendClientMessage(playerid, -1, output);\n// will output the message in white, with ''color embedding'' in the player's color\n"})}),"\n",(0,l.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(t.admonition,{type:"warning",children:(0,l.jsxs)(t.p,{children:["GetPlayerColor will return nothing (0) unless SetPlayerColor has been used first. Click ",(0,l.jsx)(t.a,{href:"../../tutorials/colorfix",children:"HERE"})," for a fix."]})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"SetPlayerColor",children:"SetPlayerColor"}),": Set a player's color."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"ChangeVehicleColor",children:"ChangeVehicleColor"}),": Set the color of a vehicle."]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return i}});var n=r(67294);let l={},o=n.createContext(l);function i(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);