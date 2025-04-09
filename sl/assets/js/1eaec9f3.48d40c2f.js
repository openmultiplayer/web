"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["64606"],{77006:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"scripting/functions/GetGameText","title":"GetGameText","description":"Returns all the information on the given game text style.","source":"@site/docs/scripting/functions/GetGameText.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetGameText","permalink":"/sl/docs/scripting/functions/GetGameText","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetGameText.md","tags":[{"inline":true,"label":"player","permalink":"/sl/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetGameText","sidebar_label":"GetGameText","description":"Returns all the information on the given game text style.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetDefaultPlayerColour","permalink":"/sl/docs/scripting/functions/GetDefaultPlayerColour"},"next":{"title":"GetGravity","permalink":"/sl/docs/scripting/functions/GetGravity"}}'),i=n("85893"),s=n("50065");let l={title:"GetGameText",sidebar_label:"GetGameText",description:"Returns all the information on the given game text style.",tags:["player"]},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Returns all the information on the given game text style."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player to get the rotation of."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"style"}),(0,i.jsxs)(t.td,{children:["The ",(0,i.jsx)(t.a,{href:"../resources/gametextstyles",children:"style"})," of text to get the data for."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"message[]"}),(0,i.jsx)(t.td,{children:"Return array for the text string."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"len = sizeof (message)"}),(0,i.jsx)(t.td,{children:"Size of the output."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"time"}),(0,i.jsx)(t.td,{children:"The time the gametext was originally shown for."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"remaining"}),(0,i.jsx)(t.td,{children:"How much of that time is still remaining."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"true - The function was executed successfully."}),"\n",(0,i.jsx)(t.p,{children:"false - The function failed to execute. This means the player specified does not exist or the style is invalid."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    GameTextForPlayer(playerid, "Welcome to the server!", 5000, 3);\n\n    new \n        message[32],\n        time,\n        remaining;\n\n    GetGameText(playerid, 3, message, sizeof(message), time, remaining);\n    // message = "Welcome to the server!"\n    // time = 5000\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GameTextForPlayer",children:"GameTextForPlayer"}),": Display gametext to a player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"HideGameTextForPlayer",children:"HideGameTextForPlayer"}),": Stop showing a gametext style to a player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GameTextForAll",children:"GameTextForAll"}),": Display gametext to all players."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"HideGameTextForAll",children:"HideGameTextForAll"}),": Stop showing a gametext style for all players."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"HasGameText",children:"HasGameText"}),": Does the player currently have text in the given gametext style displayed?"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return l}});var r=n(67294);let i={},s=r.createContext(i);function l(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);