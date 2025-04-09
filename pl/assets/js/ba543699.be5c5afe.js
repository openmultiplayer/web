"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["92379"],{82925:function(e,r,t){t.r(r),t.d(r,{default:()=>c,frontMatter:()=>i,metadata:()=>a,assets:()=>o,toc:()=>x,contentTitle:()=>s});var a=JSON.parse('{"id":"scripting/functions/PlayerTextDrawIsBox","title":"PlayerTextDrawIsBox","description":"Checks if a player-textdraw is box.","source":"@site/docs/scripting/functions/PlayerTextDrawIsBox.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerTextDrawIsBox","permalink":"/pl/docs/scripting/functions/PlayerTextDrawIsBox","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/PlayerTextDrawIsBox.md","tags":[{"inline":true,"label":"player","permalink":"/pl/docs/tags/player"},{"inline":true,"label":"textdraw","permalink":"/pl/docs/tags/textdraw"},{"inline":true,"label":"playertextdraw","permalink":"/pl/docs/tags/playertextdraw"}],"version":"current","frontMatter":{"title":"PlayerTextDrawIsBox","sidebar_label":"PlayerTextDrawIsBox","description":"Checks if a player-textdraw is box.","tags":["player","textdraw","playertextdraw"]},"sidebar":"docsSidebar","previous":{"title":"PlayerTextDrawHide","permalink":"/pl/docs/scripting/functions/PlayerTextDrawHide"},"next":{"title":"PlayerTextDrawIsProportional","permalink":"/pl/docs/scripting/functions/PlayerTextDrawIsProportional"}}'),l=t("85893"),n=t("50065");let i={title:"PlayerTextDrawIsBox",sidebar_label:"PlayerTextDrawIsBox",description:"Checks if a player-textdraw is box.",tags:["player","textdraw","playertextdraw"]},s=void 0,o={},x=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components},{VersionWarn:t}=r;return t||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(r.p,{children:"Checks if a player-textdraw is box."}),"\n",(0,l.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(r.table,{children:[(0,l.jsx)(r.thead,{children:(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.th,{children:"Name"}),(0,l.jsx)(r.th,{children:"Description"})]})}),(0,l.jsxs)(r.tbody,{children:[(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"playerid"}),(0,l.jsx)(r.td,{children:"The ID of the player."})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsxs)(r.td,{children:["Text",":textid"]}),(0,l.jsx)(r.td,{children:"The ID of the player-textdraw to check."})]})]})]}),"\n",(0,l.jsx)(r.h2,{id:"return-values",children:"Return Values"}),"\n",(0,l.jsxs)(r.p,{children:["Returns ",(0,l.jsx)(r.strong,{children:"true"})," if the player-textdraw is box, otherwise ",(0,l.jsx)(r.strong,{children:"false"}),"."]}),"\n",(0,l.jsx)(r.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-c",children:'new PlayerText:welcomeText[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 40.0, 140.0, "_~N~Welcome!~N~_");\n    PlayerTextDrawUseBox(playerid, welcomeText[playerid], true); // Toggle box ON\n    PlayerTextDrawBoxColor(playerid, welcomeText[playerid], 0x00000066); // Set the box color to a semi-transparent black\n    PlayerTextDrawShow(playerid, welcomeText[playerid]);\n\n    if (PlayerTextDrawIsBox(playerid, welcomeText[playerid]))\n    {\n        // Player-Textdraw is box\n    }\n    else\n    {\n        // Player-Textdraw is not box\n    }\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawCreate",children:"PlayerTextDrawCreate"}),": Create a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawDestroy",children:"PlayerTextDrawDestroy"}),": Destroy a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawUseBox",children:"PlayerTextDrawUseBox"}),": Toggle the box on a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawColor",children:"PlayerTextDrawColor"}),": Set the color of the text in a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawBoxColor",children:"PlayerTextDrawBoxColor"}),": Set the color of a player-textdraw's box."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawBackgroundColor",children:"PlayerTextDrawBackgroundColor"}),": Set the background color of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawAlignment",children:"PlayerTextDrawAlignment"}),": Set the alignment of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawFont",children:"PlayerTextDrawFont"}),": Set the font of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawLetterSize",children:"PlayerTextDrawLetterSize"}),": Set the letter size of the text in a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawTextSize",children:"PlayerTextDrawTextSize"}),": Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable)."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetOutline",children:"PlayerTextDrawSetOutline"}),": Toggle the outline on a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetShadow",children:"PlayerTextDrawSetShadow"}),": Set the shadow on a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetProportional",children:"PlayerTextDrawSetProportional"}),": Scale the text spacing in a player-textdraw to a proportional ratio."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetString",children:"PlayerTextDrawSetString"}),": Set the text of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawShow",children:"PlayerTextDrawShow"}),": Show a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawHide",children:"PlayerTextDrawHide"}),": Hide a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"IsPlayerTextDrawVisible",children:"IsPlayerTextDrawVisible"}),": Checks if a player-textdraw is shown for the player."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"IsValidPlayerTextDraw",children:"IsValidPlayerTextDraw"}),": Checks if a player-textdraw is valid."]}),"\n"]})]})}function c(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return s},a:function(){return i}});var a=t(67294);let l={},n=a.createContext(l);function i(e){let r=a.useContext(n);return a.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),a.createElement(n.Provider,{value:r},e.children)}}}]);