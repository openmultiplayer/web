"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["13221"],{45064:function(e,t,r){r.r(t),r.d(t,{default:()=>x,frontMatter:()=>l,metadata:()=>n,assets:()=>o,toc:()=>d,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/TextDrawShowForPlayer","title":"TextDrawShowForPlayer","description":"Shows a textdraw for a specific player.","source":"@site/docs/scripting/functions/TextDrawShowForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TextDrawShowForPlayer","permalink":"/fil/docs/scripting/functions/TextDrawShowForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/TextDrawShowForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/fil/docs/tags/player"},{"inline":true,"label":"textdraw","permalink":"/fil/docs/tags/textdraw"}],"version":"current","frontMatter":{"title":"TextDrawShowForPlayer","sidebar_label":"TextDrawShowForPlayer","description":"Shows a textdraw for a specific player.","tags":["player","textdraw"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawShowForAll","permalink":"/fil/docs/scripting/functions/TextDrawShowForAll"},"next":{"title":"TextDrawTextSize","permalink":"/fil/docs/scripting/functions/TextDrawTextSize"}}'),i=r("85893"),a=r("50065");let l={title:"TextDrawShowForPlayer",sidebar_label:"TextDrawShowForPlayer",description:"Shows a textdraw for a specific player.",tags:["player","textdraw"]},s=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Shows a textdraw for a specific player."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player to show the textdraw for."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Text",":textid"]}),(0,i.jsxs)(t.td,{children:["The ID of the textdraw to show.",(0,i.jsx)("br",{}),"Returned by ",(0,i.jsx)(t.a,{href:"TextDrawCreate",children:"TextDrawCreate"}),"."]})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"false"})," - The function failed to execute. This means either the player and/or textdraw specified does not exist."]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'new Text:gMyTextdraw;\n\npublic OnGameModeInit()\n{\n    gMyTextdraw = TextDrawCreate(100.0, 100.0, "Welcome!");\n    return 1;\n}\n\npublic OnPlayerConnect(playerid)\n{\n    TextDrawShowForPlayer(playerid, gMyTextdraw);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"If only a single player will see a textdraw, it might be wise to use player-textdraws instead. This is also useful for textdraws that need to show information specific for an individual player."})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawHideForPlayer",children:"TextDrawHideForPlayer"}),": Hide a textdraw for a certain player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawShowForAll",children:"TextDrawShowForAll"}),": Show a textdraw for all players."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawHideForAll",children:"TextDrawHideForAll"}),": Hide a textdraw for all players."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"IsTextDrawVisibleForPlayer",children:"IsTextDrawVisibleForPlayer"}),": Checks if a textdraw is shown for a player."]}),"\n"]})]})}function x(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return l}});var n=r(67294);let i={},a=n.createContext(i);function l(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);