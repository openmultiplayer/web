"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["69382"],{65621:function(e,t,r){r.r(t),r.d(t,{default:()=>c,frontMatter:()=>i,metadata:()=>a,assets:()=>o,toc:()=>d,contentTitle:()=>s});var a=JSON.parse('{"id":"scripting/functions/PlayerTextDrawGetOutline","title":"PlayerTextDrawGetOutline","description":"Get the outline size on a player-textdraw.","source":"@site/docs/scripting/functions/PlayerTextDrawGetOutline.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerTextDrawGetOutline","permalink":"/sl/docs/scripting/functions/PlayerTextDrawGetOutline","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/PlayerTextDrawGetOutline.md","tags":[{"inline":true,"label":"player","permalink":"/sl/docs/tags/player"},{"inline":true,"label":"textdraw","permalink":"/sl/docs/tags/textdraw"},{"inline":true,"label":"playertextdraw","permalink":"/sl/docs/tags/playertextdraw"}],"version":"current","frontMatter":{"title":"PlayerTextDrawGetOutline","sidebar_label":"PlayerTextDrawGetOutline","description":"Get the outline size on a player-textdraw.","tags":["player","textdraw","playertextdraw"]},"sidebar":"docsSidebar","previous":{"title":"PlayerTextDrawGetLetterSize","permalink":"/sl/docs/scripting/functions/PlayerTextDrawGetLetterSize"},"next":{"title":"PlayerTextDrawGetPos","permalink":"/sl/docs/scripting/functions/PlayerTextDrawGetPos"}}'),l=r("85893"),n=r("50065");let i={title:"PlayerTextDrawGetOutline",sidebar_label:"PlayerTextDrawGetOutline",description:"Get the outline size on a player-textdraw.",tags:["player","textdraw","playertextdraw"]},s=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function x(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Get the outline size on a player-textdraw."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"The ID of the player."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["PlayerText",":textid"]}),(0,l.jsx)(t.td,{children:"The ID of the player-textdraw to get the outline size of."})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(t.p,{children:"Returns the player-textdraw outline size."}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'new PlayerText:welcomeText[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my OPEN.MP server");\n    PlayerTextDrawSetOutline(playerid, welcomeText[playerid], 1);\n    PlayerTextDrawShow(playerid, welcomeText[playerid]);\n\n    new outline = PlayerTextDrawGetOutline(playerid, welcomeText[playerid]);\n    // outline = 1\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawCreate",children:"PlayerTextDrawCreate"}),": Create a player-textdraw."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawDestroy",children:"PlayerTextDrawDestroy"}),": Destroy a player-textdraw."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawSetOutline",children:"PlayerTextDrawSetOutline"}),": Toggle the outline on a player-textdraw."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawColor",children:"PlayerTextDrawColor"}),": Set the color of the text in a player-textdraw."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawBoxColor",children:"PlayerTextDrawBoxColor"}),": Set the color of a player-textdraw's box."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawBackgroundColor",children:"PlayerTextDrawBackgroundColor"}),": Set the background color of a player-textdraw."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawAlignment",children:"PlayerTextDrawAlignment"}),": Set the alignment of a player-textdraw."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawFont",children:"PlayerTextDrawFont"}),": Set the font of a player-textdraw."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawLetterSize",children:"PlayerTextDrawLetterSize"}),": Set the letter size of the text in a player-textdraw."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawTextSize",children:"PlayerTextDrawTextSize"}),": Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable)."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawSetProportional",children:"PlayerTextDrawSetProportional"}),": Scale the text spacing in a player-textdraw to a proportional ratio."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawUseBox",children:"PlayerTextDrawUseBox"}),": Toggle the box on a player-textdraw."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawSetString",children:"PlayerTextDrawSetString"}),": Set the text of a player-textdraw."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawShow",children:"PlayerTextDrawShow"}),": Show a player-textdraw."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawHide",children:"PlayerTextDrawHide"}),": Hide a player-textdraw."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"IsPlayerTextDrawVisible",children:"IsPlayerTextDrawVisible"}),": Checks if a player-textdraw is shown for the player."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"IsValidPlayerTextDraw",children:"IsValidPlayerTextDraw"}),": Checks if a player-textdraw is valid."]}),"\n"]})]})}function c(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return i}});var a=r(67294);let l={},n=a.createContext(l);function i(e){let t=a.useContext(n);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);