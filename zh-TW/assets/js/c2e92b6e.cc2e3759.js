"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["35381"],{53228:function(e,t,r){r.r(t),r.d(t,{default:()=>c,frontMatter:()=>i,metadata:()=>a,assets:()=>o,toc:()=>d,contentTitle:()=>s});var a=JSON.parse('{"id":"scripting/functions/PlayerTextDrawFont","title":"PlayerTextDrawFont","description":"Change the font of a player-textdraw.","source":"@site/docs/scripting/functions/PlayerTextDrawFont.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerTextDrawFont","permalink":"/zh-TW/docs/scripting/functions/PlayerTextDrawFont","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/PlayerTextDrawFont.md","tags":[{"inline":true,"label":"player","permalink":"/zh-TW/docs/tags/player"},{"inline":true,"label":"textdraw","permalink":"/zh-TW/docs/tags/textdraw"},{"inline":true,"label":"playertextdraw","permalink":"/zh-TW/docs/tags/playertextdraw"}],"version":"current","frontMatter":{"title":"PlayerTextDrawFont","sidebar_label":"PlayerTextDrawFont","description":"Change the font of a player-textdraw.","tags":["player","textdraw","playertextdraw"]},"sidebar":"docsSidebar","previous":{"title":"PlayerTextDrawDestroy","permalink":"/zh-TW/docs/scripting/functions/PlayerTextDrawDestroy"},"next":{"title":"PlayerTextDrawGetAlignment","permalink":"/zh-TW/docs/scripting/functions/PlayerTextDrawGetAlignment"}}'),n=r("85893"),l=r("50065");let i={title:"PlayerTextDrawFont",sidebar_label:"PlayerTextDrawFont",description:"Change the font of a player-textdraw.",tags:["player","textdraw","playertextdraw"]},s=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function x(e){let t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Change the font of a player-textdraw."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player whose player-textdraw to change the font of"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["PlayerText",":textid"]}),(0,n.jsx)(t.td,{children:"The ID of the player-textdraw to change the font of"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["TEXT_DRAW_FONT",":font"]}),(0,n.jsx)(t.td,{children:"There are four font styles as shown below. A font value greater than 3 does not display, and anything greater than 16 crashes the client."})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["Available Styles:\n",(0,n.jsx)(t.img,{src:"https://assets.open.mp/assets/images/textdraws/Textdraw_font_styles.png",alt:"Available Styles"})]}),"\n",(0,n.jsxs)(t.p,{children:["Available Fonts:\n",(0,n.jsx)(t.img,{src:"https://assets.open.mp/assets/images/textdraws/Textdraw_Fonts.png",alt:"Available Fonts"})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:"/*\n    TEXT_DRAW_FONT_0\n    TEXT_DRAW_FONT_1\n    TEXT_DRAW_FONT_2\n    TEXT_DRAW_FONT_3\n    TEXT_DRAW_FONT_SPRITE_DRAW\n    TEXT_DRAW_FONT_MODEL_PREVIEW\n*/\n\nnew PlayerText:welcomeText[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    // First, create the textdraw\n    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, \"Welcome to my server!\");\n    \n    // Set the font of player-textdraw 'welcomeText[playerid]' to 2.\n    PlayerTextDrawFont(playerid, welcomeText[playerid], TEXT_DRAW_FONT_2);\n    \n    // Show 'welcomeText[playerid]' to player\n    PlayerTextDrawShow(playerid, welcomeText[playerid]);\n\n    return 1;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"CreatePlayerTextDraw",children:"CreatePlayerTextDraw"}),": Create a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawDestroy",children:"PlayerTextDrawDestroy"}),": Destroy a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawGetFont",children:"PlayerTextDrawGetFont"}),": Gets the text font of a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawColor",children:"PlayerTextDrawColor"}),": Set the color of the text in a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawBoxColor",children:"PlayerTextDrawBoxColor"}),": Set the color of a player-textdraw's box."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawBackgroundColor",children:"PlayerTextDrawBackgroundColor"}),": Set the background color of a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawAlignment",children:"PlayerTextDrawAlignment"}),": Set the alignment of a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawLetterSize",children:"PlayerTextDrawLetterSize"}),": Set the letter size of the text in a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawTextSize",children:"PlayerTextDrawTextSize"}),": Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable)."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawSetOutline",children:"PlayerTextDrawSetOutline"}),": Toggle the outline on a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawSetShadow",children:"PlayerTextDrawSetShadow"}),": Set the shadow on a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawSetProportional",children:"PlayerTextDrawSetProportional"}),": Scale the text spacing in a player-textdraw to a proportional ratio."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawUseBox",children:"PlayerTextDrawUseBox"}),": Toggle the box on a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawSetString",children:"PlayerTextDrawSetString"}),": Set the text of a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawShow",children:"PlayerTextDrawShow"}),": Show a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawHide",children:"PlayerTextDrawHide"}),": Hide a player-textdraw."]}),"\n"]})]})}function c(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return i}});var a=r(67294);let n={},l=a.createContext(n);function i(e){let t=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);