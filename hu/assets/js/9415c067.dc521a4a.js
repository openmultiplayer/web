"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["62879"],{64663:function(e,r,t){t.r(r),t.d(r,{default:()=>x,frontMatter:()=>l,metadata:()=>n,assets:()=>d,toc:()=>o,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/TextDrawHideForPlayer","title":"TextDrawHideForPlayer","description":"Hides a textdraw for a specific player.","source":"@site/docs/scripting/functions/TextDrawHideForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TextDrawHideForPlayer","permalink":"/hu/docs/scripting/functions/TextDrawHideForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/TextDrawHideForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/hu/docs/tags/player"},{"inline":true,"label":"textdraw","permalink":"/hu/docs/tags/textdraw"}],"version":"current","frontMatter":{"title":"TextDrawHideForPlayer","sidebar_label":"TextDrawHideForPlayer","description":"Hides a textdraw for a specific player.","tags":["player","textdraw"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawHideForAll","permalink":"/hu/docs/scripting/functions/TextDrawHideForAll"},"next":{"title":"TextDrawIsBox","permalink":"/hu/docs/scripting/functions/TextDrawIsBox"}}'),i=t("85893"),a=t("50065");let l={title:"TextDrawHideForPlayer",sidebar_label:"TextDrawHideForPlayer",description:"Hides a textdraw for a specific player.",tags:["player","textdraw"]},s=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(r.p,{children:"Hides a textdraw for a specific player."}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Name"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"playerid"}),(0,i.jsx)(r.td,{children:"The ID of the player that the textdraw should be hidden for"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.td,{children:["Text",":textid"]}),(0,i.jsx)(r.td,{children:"The ID of the textdraw to hide"})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(r.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:'new Text:gMyTextdraw;\n\npublic OnGameModeInit()\n{\n    gMyTextdraw = TextDrawCreate(123.0, 123.0, "Example");\n    return 1;\n}\n\npublic OnGameModeExit()\n{\n    TextDrawDestroy(gMyTextdraw);\n    return 1;\n}\n\npublic OnPlayerSpawn(playerid)\n{\n    TextDrawShowForPlayer(playerid, gMyTextdraw);\n    return 1;\n}\n\npublic OnPlayerDeath(playerid, reason)\n{\n    TextDrawHideForPlayer(playerid, gMyTextdraw);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawHideForAll",children:"TextDrawHideForAll"}),": Hide a textdraw for all players."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),": Show a textdraw for a certain player."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawShowForAll",children:"TextDrawShowForAll"}),": Show a textdraw for all players."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"IsTextDrawVisibleForPlayer",children:"IsTextDrawVisibleForPlayer"}),": Checks if a textdraw is shown for a player."]}),"\n"]})]})}function x(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return s},a:function(){return l}});var n=t(67294);let i={},a=n.createContext(i);function l(e){let r=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);