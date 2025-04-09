"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["53540"],{51031:function(e,t,r){r.r(t),r.d(t,{default:()=>x,frontMatter:()=>i,metadata:()=>a,assets:()=>o,toc:()=>s,contentTitle:()=>d});var a=JSON.parse('{"id":"scripting/functions/PlayerTextDrawSetPreviewRot","title":"PlayerTextDrawSetPreviewRot","description":"Sets the rotation and zoom of a 3D model preview player-textdraw.","source":"@site/docs/scripting/functions/PlayerTextDrawSetPreviewRot.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerTextDrawSetPreviewRot","permalink":"/it/docs/scripting/functions/PlayerTextDrawSetPreviewRot","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/PlayerTextDrawSetPreviewRot.md","tags":[{"inline":true,"label":"player","permalink":"/it/docs/tags/player"},{"inline":true,"label":"textdraw","permalink":"/it/docs/tags/textdraw"},{"inline":true,"label":"playertextdraw","permalink":"/it/docs/tags/playertextdraw"}],"version":"current","frontMatter":{"title":"PlayerTextDrawSetPreviewRot","sidebar_label":"PlayerTextDrawSetPreviewRot","description":"Sets the rotation and zoom of a 3D model preview player-textdraw.","tags":["player","textdraw","playertextdraw"]},"sidebar":"docsSidebar","previous":{"title":"PlayerTextDrawSetPreviewModel","permalink":"/it/docs/scripting/functions/PlayerTextDrawSetPreviewModel"},"next":{"title":"PlayerTextDrawSetPreviewVehCol","permalink":"/it/docs/scripting/functions/PlayerTextDrawSetPreviewVehCol"}}'),l=r("85893"),n=r("50065");let i={title:"PlayerTextDrawSetPreviewRot",sidebar_label:"PlayerTextDrawSetPreviewRot",description:"Sets the rotation and zoom of a 3D model preview player-textdraw.",tags:["player","textdraw","playertextdraw"]},d=void 0,o={},s=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function c(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Sets the rotation and zoom of a 3D model preview player-textdraw."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"The ID of the player whose player-textdraw to change."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["PlayerText",":textid"]}),(0,l.jsx)(t.td,{children:"The ID of the player-textdraw to change."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":rotX"]}),(0,l.jsx)(t.td,{children:"The X rotation value."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":rotY"]}),(0,l.jsx)(t.td,{children:"The Y rotation value."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":rotZ"]}),(0,l.jsx)(t.td,{children:"The Z rotation value."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":zoom"]}),(0,l.jsx)(t.td,{children:"The zoom value, default value 1.0, smaller values make the camera closer and larger values make the camera further away."})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'new PlayerText:gMyTextdraw[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    gMyTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "_");\n    PlayerTextDrawFont(playerid, gMyTextdraw[playerid], TEXT_DRAW_FONT_MODEL_PREVIEW);\n    PlayerTextDrawUseBox(playerid, gMyTextdraw[playerid], 1);\n    PlayerTextDrawBoxColor(playerid, gMyTextdraw[playerid], 0x000000FF);\n    PlayerTextDrawTextSize(playerid, gMyTextdraw[playerid], 40.0, 40.0);\n    PlayerTextDrawSetPreviewModel(playerid, gMyTextdraw[playerid], 411);\n    PlayerTextDrawSetPreviewRot(playerid, gMyTextdraw[playerid], -10.0, 0.0, -20.0, 1.0);\n\n    PlayerTextDrawShow(playerid, gMyTextdraw[playerid]);\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(t.admonition,{type:"warning",children:(0,l.jsxs)(t.p,{children:["The textdraw MUST use the font type ",(0,l.jsx)(t.code,{children:"TEXT_DRAW_FONT_MODEL_PREVIEW"})," and already have a model set in order for this function to have effect."]})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"TextDrawSetPreviewRot",children:"TextDrawSetPreviewRot"}),": Set rotation of a 3D textdraw preview."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawSetPreviewModel",children:"PlayerTextDrawSetPreviewModel"}),": Set model ID of a 3D player textdraw preview."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawSetPreviewVehCol",children:"PlayerTextDrawSetPreviewVehCol"}),": Set the colours of a vehicle in a 3D player textdraw preview."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawFont",children:"PlayerTextDrawFont"}),": Set the font of a player-textdraw."]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"../callbacks/OnPlayerClickPlayerTextDraw",children:"OnPlayerClickPlayerTextDraw"}),": Called when a player clicks on a player-textdraw."]}),"\n"]})]})}function x(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return d},a:function(){return i}});var a=r(67294);let l={},n=a.createContext(l);function i(e){let t=a.useContext(n);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);