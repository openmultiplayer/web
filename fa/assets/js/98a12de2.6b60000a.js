"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["89993"],{12559:function(e,t,r){r.r(t),r.d(t,{default:()=>x,frontMatter:()=>l,metadata:()=>i,assets:()=>s,toc:()=>c,contentTitle:()=>a});var i=JSON.parse('{"id":"scripting/functions/TextDrawGetPreviewVehicleColours","title":"TextDrawGetPreviewVehicleColours","description":"Gets the preview vehicle colours of a 3D preview textdraw.","source":"@site/docs/scripting/functions/TextDrawGetPreviewVehicleColours.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TextDrawGetPreviewVehicleColours","permalink":"/fa/docs/scripting/functions/TextDrawGetPreviewVehicleColours","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/TextDrawGetPreviewVehicleColours.md","tags":[{"inline":true,"label":"textdraw","permalink":"/fa/docs/tags/textdraw"}],"version":"current","frontMatter":{"title":"TextDrawGetPreviewVehicleColours","sidebar_label":"TextDrawGetPreviewVehicleColours","description":"Gets the preview vehicle colours of a 3D preview textdraw.","tags":["textdraw"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawGetPreviewVehCol","permalink":"/fa/docs/scripting/functions/TextDrawGetPreviewVehCol"},"next":{"title":"TextDrawGetShadow","permalink":"/fa/docs/scripting/functions/TextDrawGetShadow"}}'),n=r("85893"),o=r("50065");let l={title:"TextDrawGetPreviewVehicleColours",sidebar_label:"TextDrawGetPreviewVehicleColours",description:"Gets the preview vehicle colours of a 3D preview textdraw.",tags:["textdraw"]},a=void 0,s={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Gets the preview vehicle colours of a 3D preview textdraw."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Text",":textid"]}),(0,n.jsx)(t.td,{children:"The ID of the textdraw to get the vehicle colours of."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"&colour1"}),(0,n.jsx)(t.td,{children:"A variable into which to store the colour1, passed by reference."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"&colour2"}),(0,n.jsx)(t.td,{children:"A variable into which to store the colour2, passed by reference."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'new Text:gMyTextdraw;\n\npublic OnGameModeInit()\n{\n    gMyTextdraw = TextDrawCreate(320.0, 240.0, "_");\n    TextDrawFont(gMyTextdraw, TEXT_DRAW_FONT_MODEL_PREVIEW);\n    TextDrawUseBox(gMyTextdraw, true);\n    TextDrawBoxColour(gMyTextdraw, 0x000000FF);\n    TextDrawTextSize(gMyTextdraw, 40.0, 40.0);\n    TextDrawSetPreviewModel(gMyTextdraw, 411);\n    TextDrawSetPreviewVehicleColours(gMyTextdraw, 6, 8);\n\n    new colour1, colour2;\n    TextDrawGetPreviewVehicleColours(gMyTextdraw, colour1, colour2);\n    // colour1 = 6\n    // colour2 = 8\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawSetPreviewModel",children:"TextDrawSetPreviewModel"}),": Set the 3D preview model of a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawSetPreviewRot",children:"TextDrawSetPreviewRot"}),": Set rotation of a 3D textdraw preview."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawFont",children:"TextDrawFont"}),": Set the font of a textdraw."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../callbacks/OnPlayerClickTextDraw",children:"OnPlayerClickTextDraw"}),": Called when a player clicks on a textdraw."]}),"\n"]})]})}function x(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return a},a:function(){return l}});var i=r(67294);let n={},o=i.createContext(n);function l(e){let t=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);