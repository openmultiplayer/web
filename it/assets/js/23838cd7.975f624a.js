"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["76298"],{93214:function(e,r,t){t.r(r),t.d(r,{default:()=>p,frontMatter:()=>n,metadata:()=>l,assets:()=>s,toc:()=>d,contentTitle:()=>o});var l=JSON.parse('{"id":"scripting/functions/PlayerTextDrawGetPreviewVehicleColours","title":"PlayerTextDrawGetPreviewVehicleColours","description":"Gets the preview vehicle colors of a 3D preview player-textdraw.","source":"@site/docs/scripting/functions/PlayerTextDrawGetPreviewVehicleColours.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerTextDrawGetPreviewVehicleColours","permalink":"/it/docs/scripting/functions/PlayerTextDrawGetPreviewVehicleColours","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/PlayerTextDrawGetPreviewVehicleColours.md","tags":[{"inline":true,"label":"player","permalink":"/it/docs/tags/player"},{"inline":true,"label":"textdraw","permalink":"/it/docs/tags/textdraw"},{"inline":true,"label":"playertextdraw","permalink":"/it/docs/tags/playertextdraw"}],"version":"current","frontMatter":{"title":"PlayerTextDrawGetPreviewVehicleColours","sidebar_label":"PlayerTextDrawGetPreviewVehicleColours","description":"Gets the preview vehicle colors of a 3D preview player-textdraw.","tags":["player","textdraw","playertextdraw"]},"sidebar":"docsSidebar","previous":{"title":"PlayerTextDrawGetPreviewVehCol","permalink":"/it/docs/scripting/functions/PlayerTextDrawGetPreviewVehCol"},"next":{"title":"PlayerTextDrawGetShadow","permalink":"/it/docs/scripting/functions/PlayerTextDrawGetShadow"}}'),a=t("85893"),i=t("50065");let n={title:"PlayerTextDrawGetPreviewVehicleColours",sidebar_label:"PlayerTextDrawGetPreviewVehicleColours",description:"Gets the preview vehicle colors of a 3D preview player-textdraw.",tags:["player","textdraw","playertextdraw"]},o=void 0,s={},d=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function c(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarn:t}=r;return t||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,a.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(r.p,{children:"Gets the preview vehicle colors of a 3D preview player-textdraw."}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Name"}),(0,a.jsx)(r.th,{children:"Description"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"playerid"}),(0,a.jsx)(r.td,{children:"The ID of the player."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsxs)(r.td,{children:["PlayerText",":textid"]}),(0,a.jsx)(r.td,{children:"The ID of the player-textdraw to get the vehicle colors of."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"&colour1"}),(0,a.jsx)(r.td,{children:"A variable into which to store the colour1, passed by reference."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"&colour2"}),(0,a.jsx)(r.td,{children:"A variable into which to store the colour2, passed by reference."})]})]})]}),"\n",(0,a.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-c",children:'new PlayerText:pTextdraw[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    pTextdraw[playerid] = CreatePlayerTextDraw(playeird, 320.0, 240.0, "_");\n    PlayerTextDrawFont(playerid, pTextdraw[playerid], TEXT_DRAW_FONT_MODEL_PREVIEW);\n    PlayerTextDrawUseBox(playerid, pTextdraw[playerid], true);\n    PlayerTextDrawBoxColor(playerid, pTextdraw[playerid], 0x000000FF);\n    PlayerTextDrawTextSize(playerid, pTextdraw[playerid], 40.0, 40.0);\n    PlayerTextDrawSetPreviewModel(playerid, pTextdraw[playerid], 411);\n    PlayerTextDrawSetPreviewVehicleColours(playerid, pTextdraw[playerid], 6, 8);\n\n    new colour1, colour2;\n    PlayerTextDrawGetPreviewVehicleColours(playerid, pTextdraw[playerid], colour1, colour2);\n    // colour1 = 6\n    // colour2 = 8\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"PlayerTextDrawSetPreviewModel",children:"PlayerTextDrawSetPreviewModel"}),": Set model ID of a 3D player textdraw preview."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"PlayerTextDrawSetPreviewRot",children:"PlayerTextDrawSetPreviewRot"}),": Set rotation of a 3D player textdraw preview."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"PlayerTextDrawFont",children:"PlayerTextDrawFont"}),": Set the font of a player-textdraw."]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"../callbacks/OnPlayerClickPlayerTextDraw",children:"OnPlayerClickPlayerTextDraw"}),": Called when a player clicks on a player-textdraw."]}),"\n"]})]})}function p(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return o},a:function(){return n}});var l=t(67294);let a={},i=l.createContext(a);function n(e){let r=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),l.createElement(i.Provider,{value:r},e.children)}}}]);