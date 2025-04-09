"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["26692"],{60117:function(e,r,t){t.r(r),t.d(r,{default:()=>x,frontMatter:()=>n,metadata:()=>l,assets:()=>d,toc:()=>o,contentTitle:()=>s});var l=JSON.parse('{"id":"scripting/functions/PlayerTextDrawSetPreviewModel","title":"PlayerTextDrawSetPreviewModel","description":"Sets a player textdraw 3D preview sprite of a specified model ID.","source":"@site/docs/scripting/functions/PlayerTextDrawSetPreviewModel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerTextDrawSetPreviewModel","permalink":"/sr/docs/scripting/functions/PlayerTextDrawSetPreviewModel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/PlayerTextDrawSetPreviewModel.md","tags":[{"inline":true,"label":"player","permalink":"/sr/docs/tags/player"},{"inline":true,"label":"textdraw","permalink":"/sr/docs/tags/textdraw"},{"inline":true,"label":"playertextdraw","permalink":"/sr/docs/tags/playertextdraw"}],"version":"current","frontMatter":{"title":"PlayerTextDrawSetPreviewModel","sidebar_label":"PlayerTextDrawSetPreviewModel","description":"Sets a player textdraw 3D preview sprite of a specified model ID.","tags":["player","textdraw","playertextdraw"]},"sidebar":"docsSidebar","previous":{"title":"PlayerTextDrawSetPos","permalink":"/sr/docs/scripting/functions/PlayerTextDrawSetPos"},"next":{"title":"PlayerTextDrawSetPreviewRot","permalink":"/sr/docs/scripting/functions/PlayerTextDrawSetPreviewRot"}}'),a=t("85893"),i=t("50065");let n={title:"PlayerTextDrawSetPreviewModel",sidebar_label:"PlayerTextDrawSetPreviewModel",description:"Sets a player textdraw 3D preview sprite of a specified model ID.",tags:["player","textdraw","playertextdraw"]},s=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function c(e){let r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(r.p,{children:"Sets a player textdraw 3D preview sprite of a specified model ID."}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Name"}),(0,a.jsx)(r.th,{children:"Description"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"playerid"}),(0,a.jsx)(r.td,{children:"The PlayerTextDraw player ID."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsxs)(r.td,{children:["PlayerText",":textid"]}),(0,a.jsx)(r.td,{children:"The textdraw id that will display the 3D preview."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"model"}),(0,a.jsxs)(r.td,{children:["The GTA SA or SA",":MP"," model ID to display."]})]})]})]}),"\n",(0,a.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"true"})," - The function was executed successfully. If an invalid model is passed 'success' is reported, but the model will appear as a yellow/black question mark."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"false"})," - The function failed to execute. Player and/or textdraw do not exist."]}),"\n",(0,a.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-c",children:'new PlayerText:gTextDraw[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    gTextDraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "_");\n    PlayerTextDrawFont(playerid, gTextDraw[playerid], TEXT_DRAW_FONT_MODEL_PREVIEW);\n    PlayerTextDrawUseBox(playerid, gTextDraw[playerid], true);\n    PlayerTextDrawBoxColor(playerid, gTextDraw[playerid], 0x000000FF);\n    PlayerTextDrawTextSize(playerid, gTextDraw[playerid], 40.0, 40.0);\n    \n    PlayerTextDrawSetPreviewModel(playerid, gTextDraw[playerid], 411); // Show an Infernus (model 411)\n    //PlayerTextDrawSetPreviewModel(playerid, gTextDraw[playerid], 0); // Display model 0 (CJ Skin)\n    //PlayerTextDrawSetPreviewModel(playerid, gTextDraw[playerid], 18646); // Display model 18646 (police light object)\n\n    PlayerTextDrawShow(playerid, gTextDraw[playerid]);\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(r.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(r.admonition,{type:"warning",children:(0,a.jsxs)(r.p,{children:["The textdraw MUST use the font type ",(0,a.jsx)(r.code,{children:"TEXT_DRAW_FONT_MODEL_PREVIEW"})," in order for this function to have effect."]})}),"\n",(0,a.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"PlayerTextDrawGetPreviewModel",children:"PlayerTextDrawGetPreviewModel"}),": Gets the preview model of a 3D preview player-textdraw."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"PlayerTextDrawSetPreviewRot",children:"PlayerTextDrawSetPreviewRot"}),": Set rotation of a 3D player textdraw preview."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"PlayerTextDrawSetPreviewVehCol",children:"PlayerTextDrawSetPreviewVehCol"}),": Set the colours of a vehicle in a 3D player textdraw preview."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"PlayerTextDrawFont",children:"PlayerTextDrawFont"}),": Set the font of a player-textdraw."]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"../callbacks/OnPlayerClickPlayerTextDraw",children:"OnPlayerClickPlayerTextDraw"}),": Called when a player clicks on a player-textdraw."]}),"\n"]})]})}function x(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return s},a:function(){return n}});var l=t(67294);let a={},i=l.createContext(a);function n(e){let r=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),l.createElement(i.Provider,{value:r},e.children)}}}]);