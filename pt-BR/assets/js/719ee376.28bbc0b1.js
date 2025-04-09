"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["20737"],{75779:function(e,t,r){r.r(t),r.d(t,{default:()=>c,frontMatter:()=>l,metadata:()=>n,assets:()=>s,toc:()=>x,contentTitle:()=>o});var n=JSON.parse('{"id":"scripting/functions/TextDrawSetStringForPlayer","title":"TextDrawSetStringForPlayer","description":"Changes the text on a textdraw for a specific player.","source":"@site/docs/scripting/functions/TextDrawSetStringForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TextDrawSetStringForPlayer","permalink":"/pt-BR/docs/scripting/functions/TextDrawSetStringForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/TextDrawSetStringForPlayer.md","tags":[{"inline":true,"label":"textdraw","permalink":"/pt-BR/docs/tags/textdraw"}],"version":"current","frontMatter":{"title":"TextDrawSetStringForPlayer","sidebar_label":"TextDrawSetStringForPlayer","description":"Changes the text on a textdraw for a specific player.","tags":["textdraw"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawSetString","permalink":"/pt-BR/docs/scripting/functions/TextDrawSetString"},"next":{"title":"TextDrawShowForAll","permalink":"/pt-BR/docs/scripting/functions/TextDrawShowForAll"}}'),a=r("85893"),i=r("50065");let l={title:"TextDrawSetStringForPlayer",sidebar_label:"TextDrawSetStringForPlayer",description:"Changes the text on a textdraw for a specific player.",tags:["textdraw"]},o=void 0,s={},x=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Changes the text on a textdraw for a specific player."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Text",":textid"]}),(0,a.jsx)(t.td,{children:"The ID of the TextDraw to change"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"The ID of the player"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"const format[]"}),(0,a.jsx)(t.td,{children:"The new string for the TextDraw"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"OPEN_MP_TAGS:..."}),(0,a.jsx)(t.td,{children:"Indefinite number of arguments of any tag"})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:'new Text:gMyTextdraw;\n\npublic OnGameModeInit()\n{\n    gMyTextdraw = TextDrawCreate(317.799987, 331.475006, "Hi, how are you?");\n    TextDrawLetterSize(gMyTextdraw, 0.238997, 1.250000);\n    TextDrawTextSize(gMyTextdraw, 505.000000, 202.000000);\n    TextDrawAlignment(gMyTextdraw, TEXT_DRAW_ALIGN_CENTER);\n    TextDrawColor(gMyTextdraw, 0xFFFFFFFF);\n    TextDrawSetShadow(gMyTextdraw, 0);\n    TextDrawSetOutline(gMyTextdraw, 1);\n    TextDrawBackgroundColor(gMyTextdraw, 255);\n    TextDrawFont(gMyTextdraw, TEXT_DRAW_FONT_1);\n    TextDrawSetProportional(gMyTextdraw, true);\n    return 1;\n}\n\npublic OnPlayerConnect(playerid)\n{\n    new playerName[MAX_PLAYER_NAME];\n    GetPlayerName(playerid, playerName, sizeof playerName);\n\n    TextDrawShowForPlayer(playerid, gMyTextdraw);\n\n    TextDrawSetStringForPlayer(gMyTextdraw, playerid, "Welcome %s!", playerName);\n    return 1;\n}\n\npublic OnPlayerRequestClass(playerid, classid)\n{\n    TextDrawSetStringForPlayer(gMyTextdraw, playerid, "You chose class %d", classid);\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsxs)(t.p,{children:["There are limits to the length of textdraw strings - see ",(0,a.jsx)(t.a,{href:"../resources/limits",children:"here"})," for more info."]})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawCreate",children:"TextDrawCreate"}),": Create a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawDestroy",children:"TextDrawDestroy"}),": Destroy a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawSetString",children:"TextDrawSetString"}),": Changes the text on a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawColor",children:"TextDrawColor"}),": Set the color of the text in a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawBoxColor",children:"TextDrawBoxColor"}),": Set the color of the box in a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawBackgroundColor",children:"TextDrawBackgroundColor"}),": Set the background color of a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawAlignment",children:"TextDrawAlignment"}),": Set the alignment of a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawFont",children:"TextDrawFont"}),": Set the font of a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawLetterSize",children:"TextDrawLetterSize"}),": Set the letter size of the text in a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawTextSize",children:"TextDrawTextSize"}),": Set the size of a textdraw box."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawSetOutline",children:"TextDrawSetOutline"}),": Choose whether the text has an outline."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawSetShadow",children:"TextDrawSetShadow"}),": Toggle shadows on a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawSetProportional",children:"TextDrawSetProportional"}),": Scale the text spacing in a textdraw to a proportional ratio."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawUseBox",children:"TextDrawUseBox"}),": Toggle if the textdraw has a box or not."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),": Show a textdraw for a certain player."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawHideForPlayer",children:"TextDrawHideForPlayer"}),": Hide a textdraw for a certain player."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawShowForAll",children:"TextDrawShowForAll"}),": Show a textdraw for all players."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawHideForAll",children:"TextDrawHideForAll"}),": Hide a textdraw for all players."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawGetString",children:"TextDrawGetString"}),": Gets the text of a textdraw."]}),"\n"]})]})}function c(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return o},a:function(){return l}});var n=r(67294);let a={},i=n.createContext(a);function l(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);