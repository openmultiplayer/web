"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["66777"],{50545:function(e,t,r){r.r(t),r.d(t,{default:()=>x,frontMatter:()=>a,metadata:()=>n,assets:()=>o,toc:()=>d,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/HideGameTextForPlayer","title":"HideGameTextForPlayer","description":"Stop showing a gametext style to a player.","source":"@site/docs/scripting/functions/HideGameTextForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/HideGameTextForPlayer","permalink":"/tr/docs/scripting/functions/HideGameTextForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/HideGameTextForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/tr/docs/tags/player"},{"inline":true,"label":"gametext","permalink":"/tr/docs/tags/gametext"}],"version":"current","frontMatter":{"title":"HideGameTextForPlayer","sidebar_label":"HideGameTextForPlayer","description":"Stop showing a gametext style to a player.","tags":["player","gametext"]},"sidebar":"docsSidebar","previous":{"title":"HideGameTextForAll","permalink":"/tr/docs/scripting/functions/HideGameTextForAll"},"next":{"title":"HideMenuForPlayer","permalink":"/tr/docs/scripting/functions/HideMenuForPlayer"}}'),i=r("85893"),l=r("50065");let a={title:"HideGameTextForPlayer",sidebar_label:"HideGameTextForPlayer",description:"Stop showing a gametext style to a player.",tags:["player","gametext"]},s=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Stop showing a gametext style to a player."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player to hide the gametext for."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"style"}),(0,i.jsxs)(t.td,{children:["The ",(0,i.jsx)(t.a,{href:"../resources/gametextstyles",children:"style"})," of text to hide."]})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"This function does not return any specific value."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"public OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    HideGameTextForPlayer(playerid, 3);\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"HideGameTextForAll",children:"HideGameTextForAll"}),": Stop showing a gametext style for all players."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GameTextForPlayer",children:"GameTextForPlayer"}),": Display gametext to a player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GameTextForAll",children:"GameTextForAll"}),": Display gametext to all players."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetGameText",children:"GetGameText"}),": Gets all the information on the given game text style."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"HasGameText",children:"HasGameText"}),": Does the player currently have text in the given gametext style displayed?"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawHideForAll",children:"TextDrawHideForAll"}),": Hide a textdraw for all players."]}),"\n"]})]})}function x(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return a}});var n=r(67294);let i={},l=n.createContext(i);function a(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);