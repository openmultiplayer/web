"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["59707"],{7224:function(e,r,t){t.r(r),t.d(r,{default:()=>c,frontMatter:()=>n,metadata:()=>a,assets:()=>s,toc:()=>o,contentTitle:()=>d});var a=JSON.parse('{"id":"scripting/functions/PlayerTextDrawGetPreviewModel","title":"PlayerTextDrawGetPreviewModel","description":"Gets the preview model of a 3D preview player-textdraw.","source":"@site/docs/scripting/functions/PlayerTextDrawGetPreviewModel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerTextDrawGetPreviewModel","permalink":"/pt-BR/docs/scripting/functions/PlayerTextDrawGetPreviewModel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/PlayerTextDrawGetPreviewModel.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"},{"inline":true,"label":"textdraw","permalink":"/pt-BR/docs/tags/textdraw"},{"inline":true,"label":"playertextdraw","permalink":"/pt-BR/docs/tags/playertextdraw"}],"version":"current","frontMatter":{"title":"PlayerTextDrawGetPreviewModel","sidebar_label":"PlayerTextDrawGetPreviewModel","description":"Gets the preview model of a 3D preview player-textdraw.","tags":["player","textdraw","playertextdraw"]},"sidebar":"docsSidebar","previous":{"title":"PlayerTextDrawGetPos","permalink":"/pt-BR/docs/scripting/functions/PlayerTextDrawGetPos"},"next":{"title":"PlayerTextDrawGetPreviewRot","permalink":"/pt-BR/docs/scripting/functions/PlayerTextDrawGetPreviewRot"}}'),l=t("85893"),i=t("50065");let n={title:"PlayerTextDrawGetPreviewModel",sidebar_label:"PlayerTextDrawGetPreviewModel",description:"Gets the preview model of a 3D preview player-textdraw.",tags:["player","textdraw","playertextdraw"]},d=void 0,s={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function x(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarn:t}=r;return t||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(r.p,{children:"Gets the preview model of a 3D preview player-textdraw."}),"\n",(0,l.jsxs)(r.table,{children:[(0,l.jsx)(r.thead,{children:(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.th,{children:"Name"}),(0,l.jsx)(r.th,{children:"Description"})]})}),(0,l.jsxs)(r.tbody,{children:[(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"playerid"}),(0,l.jsx)(r.td,{children:"The ID of the player."})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsxs)(r.td,{children:["PlayerText",":textid"]}),(0,l.jsx)(r.td,{children:"The ID of the player-textdraw to get the preview model of."})]})]})]}),"\n",(0,l.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(r.p,{children:"Returns the 3D player-textdraw preview model."}),"\n",(0,l.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-c",children:'new PlayerText:gTextDraw[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    gTextDraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "_");\n    PlayerTextDrawFont(playerid, gTextDraw[playerid], TEXT_DRAW_FONT_MODEL_PREVIEW);\n    PlayerTextDrawUseBox(playerid, gTextDraw[playerid], true);\n    PlayerTextDrawBoxColor(playerid, gTextDraw[playerid], 0x000000FF);\n    PlayerTextDrawTextSize(playerid, gTextDraw[playerid], 40.0, 40.0);\n    PlayerTextDrawSetPreviewModel(playerid, gTextDraw[playerid], 411);\n    PlayerTextDrawShow(playerid, gTextDraw[playerid]);\n\n    new previewModel = PlayerTextDrawGetPreviewModel(playerid, gTextDraw[playerid]);\n    // previewModel = 411\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawCreate",children:"PlayerTextDrawCreate"}),": Create a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawDestroy",children:"PlayerTextDrawDestroy"}),": Destroy a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetPreviewModel",children:"PlayerTextDrawSetPreviewModel"}),": Sets a player textdraw 3D preview sprite of a specified model ID."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawColor",children:"PlayerTextDrawColor"}),": Set the color of the text in a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawBoxColor",children:"PlayerTextDrawBoxColor"}),": Set the color of a player-textdraw's box."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawBackgroundColor",children:"PlayerTextDrawBackgroundColor"}),": Set the background color of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawAlignment",children:"PlayerTextDrawAlignment"}),": Set the alignment of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawFont",children:"PlayerTextDrawFont"}),": Set the font of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawLetterSize",children:"PlayerTextDrawLetterSize"}),": Set the letter size of the text in a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawTextSize",children:"PlayerTextDrawTextSize"}),": Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable)."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetOutline",children:"PlayerTextDrawSetOutline"}),": Toggle the outline on a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetShadow",children:"PlayerTextDrawSetShadow"}),": Set the shadow on a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetProportional",children:"PlayerTextDrawSetProportional"}),": Scale the text spacing in a player-textdraw to a proportional ratio."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawUseBox",children:"PlayerTextDrawUseBox"}),": Toggle the box on a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetString",children:"PlayerTextDrawSetString"}),": Set the text of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawShow",children:"PlayerTextDrawShow"}),": Show a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawHide",children:"PlayerTextDrawHide"}),": Hide a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"IsPlayerTextDrawVisible",children:"IsPlayerTextDrawVisible"}),": Checks if a player-textdraw is shown for the player."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"IsValidPlayerTextDraw",children:"IsValidPlayerTextDraw"}),": Checks if a player-textdraw is valid."]}),"\n"]})]})}function c(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return d},a:function(){return n}});var a=t(67294);let l={},i=a.createContext(l);function n(e){let r=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:n(e.components),a.createElement(i.Provider,{value:r},e.children)}}}]);