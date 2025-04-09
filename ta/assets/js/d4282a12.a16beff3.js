"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["65178"],{9656:function(e,r,t){t.r(r),t.d(r,{default:()=>h,frontMatter:()=>n,metadata:()=>l,assets:()=>s,toc:()=>d,contentTitle:()=>o});var l=JSON.parse('{"id":"scripting/functions/PlayerTextDrawSetPreviewVehCol","title":"PlayerTextDrawSetPreviewVehCol","description":"Set the color of a vehicle in a player-textdraw model preview (if a vehicle is shown).","source":"@site/docs/scripting/functions/PlayerTextDrawSetPreviewVehCol.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerTextDrawSetPreviewVehCol","permalink":"/ta/docs/scripting/functions/PlayerTextDrawSetPreviewVehCol","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/PlayerTextDrawSetPreviewVehCol.md","tags":[{"inline":true,"label":"player","permalink":"/ta/docs/tags/player"},{"inline":true,"label":"textdraw","permalink":"/ta/docs/tags/textdraw"},{"inline":true,"label":"playertextdraw","permalink":"/ta/docs/tags/playertextdraw"}],"version":"current","frontMatter":{"title":"PlayerTextDrawSetPreviewVehCol","sidebar_label":"PlayerTextDrawSetPreviewVehCol","description":"Set the color of a vehicle in a player-textdraw model preview (if a vehicle is shown).","tags":["player","textdraw","playertextdraw"]},"sidebar":"docsSidebar","previous":{"title":"PlayerTextDrawSetPreviewRot","permalink":"/ta/docs/scripting/functions/PlayerTextDrawSetPreviewRot"},"next":{"title":"PlayerTextDrawSetPreviewVehicleColours","permalink":"/ta/docs/scripting/functions/PlayerTextDrawSetPreviewVehicleColours"}}'),a=t("85893"),i=t("50065");let n={title:"PlayerTextDrawSetPreviewVehCol",sidebar_label:"PlayerTextDrawSetPreviewVehCol",description:"Set the color of a vehicle in a player-textdraw model preview (if a vehicle is shown).",tags:["player","textdraw","playertextdraw"]},o=void 0,s={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function c(e){let r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(r.p,{children:"Set the color of a vehicle in a player-textdraw model preview (if a vehicle is shown)."}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Name"}),(0,a.jsx)(r.th,{children:"Description"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"playerid"}),(0,a.jsx)(r.td,{children:"The ID of the player whose player-textdraw to change."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsxs)(r.td,{children:["PlayerText",":textid"]}),(0,a.jsx)(r.td,{children:"The ID of the player's player-textdraw to change."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"colour1"}),(0,a.jsx)(r.td,{children:"The color to set the vehicle's primary color to."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"colour2"}),(0,a.jsx)(r.td,{children:"The color to set the vehicle's secondary color to."})]})]})]}),"\n",(0,a.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(r.p,{children:"This function does not return any specific values."}),"\n",(0,a.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-c",children:'new PlayerText:gTextDraw[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    gTextDraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "_");\n    PlayerTextDrawFont(playerid, gTextDraw[playerid], TEXT_DRAW_FONT_MODEL_PREVIEW);\n    PlayerTextDrawUseBox(playerid, gTextDraw[playerid], true);\n    PlayerTextDrawBoxColor(playerid, gTextDraw[playerid], 0x000000FF);\n    PlayerTextDrawTextSize(playerid, gTextDraw[playerid], 40.0, 40.0);\n    \n    PlayerTextDrawSetPreviewModel(playerid, gTextDraw[playerid], 411);\n    PlayerTextDrawSetPreviewVehCol(playerid, gTextDraw[playerid], 3, 6);\n\n    PlayerTextDrawShow(playerid, gTextDraw[playerid]);\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(r.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(r.admonition,{type:"warning",children:(0,a.jsxs)(r.p,{children:["The textdraw MUST use the font ",(0,a.jsx)(r.code,{children:"TEXT_DRAW_FONT_MODEL_PREVIEW"})," and be showing a vehicle in order for this function to have effect."]})}),"\n",(0,a.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"PlayerTextDrawSetPreviewModel",children:"PlayerTextDrawSetPreviewModel"}),": Set model ID of a 3D player textdraw preview."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"PlayerTextDrawSetPreviewRot",children:"PlayerTextDrawSetPreviewRot"}),": Set rotation of a 3D player textdraw preview."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"PlayerTextDrawFont",children:"PlayerTextDrawFont"}),": Set the font of a player-textdraw."]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"../callbacks/OnPlayerClickPlayerTextDraw",children:"OnPlayerClickPlayerTextDraw"}),": Called when a player clicks on a player-textdraw."]}),"\n"]})]})}function h(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return o},a:function(){return n}});var l=t(67294);let a={},i=l.createContext(a);function n(e){let r=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),l.createElement(i.Provider,{value:r},e.children)}}}]);