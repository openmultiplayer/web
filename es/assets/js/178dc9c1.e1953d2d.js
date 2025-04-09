"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["70934"],{438:function(e,t,r){r.r(t),r.d(t,{default:()=>c,frontMatter:()=>i,metadata:()=>a,assets:()=>d,toc:()=>o,contentTitle:()=>s});var a=JSON.parse('{"id":"scripting/functions/PlayerTextDrawAlignment","title":"PlayerTextDrawAlignment","description":"Set the text alignment of a player-textdraw.","source":"@site/docs/scripting/functions/PlayerTextDrawAlignment.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerTextDrawAlignment","permalink":"/es/docs/scripting/functions/PlayerTextDrawAlignment","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/PlayerTextDrawAlignment.md","tags":[{"inline":true,"label":"player","permalink":"/es/docs/tags/player"},{"inline":true,"label":"textdraw","permalink":"/es/docs/tags/textdraw"},{"inline":true,"label":"playertextdraw","permalink":"/es/docs/tags/playertextdraw"}],"version":"current","frontMatter":{"title":"PlayerTextDrawAlignment","sidebar_label":"PlayerTextDrawAlignment","description":"Set the text alignment of a player-textdraw.","tags":["player","textdraw","playertextdraw"]},"sidebar":"docsSidebar","previous":{"title":"PlayerSpectateVehicle","permalink":"/es/docs/scripting/functions/PlayerSpectateVehicle"},"next":{"title":"PlayerTextDrawBackgroundColor","permalink":"/es/docs/scripting/functions/PlayerTextDrawBackgroundColor"}}'),n=r("85893"),l=r("50065");let i={title:"PlayerTextDrawAlignment",sidebar_label:"PlayerTextDrawAlignment",description:"Set the text alignment of a player-textdraw.",tags:["player","textdraw","playertextdraw"]},s=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function x(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Set the text alignment of a player-textdraw."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player whose player-textdraw to set the alignment of."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["PlayerText",":textid"]}),(0,n.jsx)(t.td,{children:"The ID of the player-textdraw to set the alignment of."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["TEXT_DRAW_ALIGN",":alignment"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"TEXT_DRAW_ALIGN_LEFT"})," / ",(0,n.jsx)(t.code,{children:"TEXT_DRAW_ALIGN_CENTER"})," / ",(0,n.jsx)(t.code,{children:"TEXT_DRAW_ALIGN_RIGHT"})]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'/*\n    TEXT_DRAW_ALIGN_LEFT\n    TEXT_DRAW_ALIGN_CENTER\n    TEXT_DRAW_ALIGN_RIGHT\n*/\n\nnew PlayerText:gMyTextdraw[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    gMyTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 425.0, "This is an example textdraw");\n    PlayerTextDrawAlignment(playerid, gMyTextdraw[playerid], TEXT_DRAW_ALIGN_CENTER); // Align the textdraw in the center\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["For alignment 2 (TEXT_DRAW_ALIGN_CENTER) the x and y values of TextSize need to be swapped, see notes at ",(0,n.jsx)(t.a,{href:"PlayerTextDrawTextSize",children:"PlayerTextDrawTextSize"}),"."]})}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["If the textdraw is already shown for the player, it must be re-shown (",(0,n.jsx)(t.a,{href:"PlayerTextDrawShow",children:"PlayerTextDrawShow"}),") to show the changes of this function."]})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"CreatePlayerTextDraw",children:"CreatePlayerTextDraw"}),": Create a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawDestroy",children:"PlayerTextDrawDestroy"}),": Destroy a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawGetAlignment",children:"PlayerTextDrawGetAlignment"}),": Gets the text alignment of a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawColor",children:"PlayerTextDrawColor"}),": Set the color of the text in a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawBoxColor",children:"PlayerTextDrawBoxColor"}),": Set the color of a player-textdraw's box."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawBackgroundColor",children:"PlayerTextDrawBackgroundColor"}),": Set the background color of a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawFont",children:"PlayerTextDrawFont"}),": Set the font of a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawLetterSize",children:"PlayerTextDrawLetterSize"}),": Set the letter size of the text in a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawTextSize",children:"PlayerTextDrawTextSize"}),": Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable)."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawSetOutline",children:"PlayerTextDrawSetOutline"}),": Toggle the outline on a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawSetShadow",children:"PlayerTextDrawSetShadow"}),": Set the shadow on a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawSetProportional",children:"PlayerTextDrawSetProportional"}),": Scale the text spacing in a player-textdraw to a proportional ratio."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawUseBox",children:"PlayerTextDrawUseBox"}),": Toggle the box on a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawSetString",children:"PlayerTextDrawSetString"}),": Set the text of a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawShow",children:"PlayerTextDrawShow"}),": Show a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawHide",children:"PlayerTextDrawHide"}),": Hide a player-textdraw."]}),"\n"]})]})}function c(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return i}});var a=r(67294);let n={},l=a.createContext(n);function i(e){let t=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);