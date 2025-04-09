"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["74645"],{87570:function(e,r,t){t.r(r),t.d(r,{default:()=>x,frontMatter:()=>o,metadata:()=>a,assets:()=>d,toc:()=>s,contentTitle:()=>i});var a=JSON.parse('{"id":"scripting/functions/PlayerTextDrawGetBackgroundCol","title":"PlayerTextDrawGetBackgroundCol","description":"Gets the background color of a player-textdraw","source":"@site/docs/scripting/functions/PlayerTextDrawGetBackgroundCol.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerTextDrawGetBackgroundCol","permalink":"/sl/docs/scripting/functions/PlayerTextDrawGetBackgroundCol","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/PlayerTextDrawGetBackgroundCol.md","tags":[{"inline":true,"label":"player","permalink":"/sl/docs/tags/player"},{"inline":true,"label":"textdraw","permalink":"/sl/docs/tags/textdraw"},{"inline":true,"label":"playertextdraw","permalink":"/sl/docs/tags/playertextdraw"}],"version":"current","frontMatter":{"title":"PlayerTextDrawGetBackgroundCol","sidebar_label":"PlayerTextDrawGetBackgroundCol","description":"Gets the background color of a player-textdraw","tags":["player","textdraw","playertextdraw"]},"sidebar":"docsSidebar","previous":{"title":"PlayerTextDrawGetAlignment","permalink":"/sl/docs/scripting/functions/PlayerTextDrawGetAlignment"},"next":{"title":"PlayerTextDrawGetBackgroundColour","permalink":"/sl/docs/scripting/functions/PlayerTextDrawGetBackgroundColour"}}'),l=t("85893"),n=t("50065");let o={title:"PlayerTextDrawGetBackgroundCol",sidebar_label:"PlayerTextDrawGetBackgroundCol",description:"Gets the background color of a player-textdraw",tags:["player","textdraw","playertextdraw"]},i=void 0,d={},s=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components},{VersionWarn:t}=r;return t||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(r.p,{children:"Gets the background color of a player-textdraw"}),"\n",(0,l.jsxs)(r.table,{children:[(0,l.jsx)(r.thead,{children:(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.th,{children:"Name"}),(0,l.jsx)(r.th,{children:"Description"})]})}),(0,l.jsxs)(r.tbody,{children:[(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"playerid"}),(0,l.jsx)(r.td,{children:"The ID of the player"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsxs)(r.td,{children:["PlayerText",":textid"]}),(0,l.jsx)(r.td,{children:"The ID of the player textdraw to get the background color of"})]})]})]}),"\n",(0,l.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(r.p,{children:"Returns the background color of the player-textdraw."}),"\n",(0,l.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-c",children:'new PlayerText:pTextdraw[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    pTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my OPEN.MP server");\n    PlayerTextDrawSetOutline(playerid, pTextdraw[playerid], 1);\n    PlayerTextDrawBackgroundColor(playerid, pTextdraw[playerid], 0x00FF00FF);\n    PlayerTextDrawShow(playerid, pTextdraw[playerid]);\n\n    new backgroundColor = PlayerTextDrawGetBackgroundCol(playerid, pTextdraw[playerid]);\n    // backgroundColor = 0x00FF00FF\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"CreatePlayerTextDraw",children:"CreatePlayerTextDraw"}),": Create a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawDestroy",children:"PlayerTextDrawDestroy"}),": Destroy a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawBoxColor",children:"PlayerTextDrawBoxColor"}),": Set the color of a player-textdraw's box."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawBackgroundColor",children:"PlayerTextDrawBackgroundColor"}),": Set the background color of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawAlignment",children:"PlayerTextDrawAlignment"}),": Set the alignment of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawFont",children:"PlayerTextDrawFont"}),": Set the font of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawLetterSize",children:"PlayerTextDrawLetterSize"}),": Set the letter size of the text in a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawTextSize",children:"PlayerTextDrawTextSize"}),": Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable)."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetOutline",children:"PlayerTextDrawSetOutline"}),": Toggle the outline on a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetShadow",children:"PlayerTextDrawSetShadow"}),": Set the shadow on a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetProportional",children:"PlayerTextDrawSetProportional"}),": Scale the text spacing in a player-textdraw to a proportional ratio."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawUseBox",children:"PlayerTextDrawUseBox"}),": Toggle the box on a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetString",children:"PlayerTextDrawSetString"}),": Set the text of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawShow",children:"PlayerTextDrawShow"}),": Show a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawHide",children:"PlayerTextDrawHide"}),": Hide a player-textdraw."]}),"\n"]})]})}function x(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return i},a:function(){return o}});var a=t(67294);let l={},n=a.createContext(l);function o(e){let r=a.useContext(n);return a.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),a.createElement(n.Provider,{value:r},e.children)}}}]);