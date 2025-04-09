"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["45571"],{49535:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>a,assets:()=>o,toc:()=>x,contentTitle:()=>l});var a=JSON.parse('{"id":"scripting/functions/TextDrawCreate","title":"TextDrawCreate","description":"Creates a textdraw.","source":"@site/docs/scripting/functions/TextDrawCreate.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TextDrawCreate","permalink":"/ta/docs/scripting/functions/TextDrawCreate","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/TextDrawCreate.md","tags":[{"inline":true,"label":"textdraw","permalink":"/ta/docs/tags/textdraw"}],"version":"current","frontMatter":{"title":"TextDrawCreate","sidebar_label":"TextDrawCreate","description":"Creates a textdraw.","tags":["textdraw"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawColour","permalink":"/ta/docs/scripting/functions/TextDrawColour"},"next":{"title":"TextDrawDestroy","permalink":"/ta/docs/scripting/functions/TextDrawDestroy"}}'),n=r("85893"),i=r("50065");let s={title:"TextDrawCreate",sidebar_label:"TextDrawCreate",description:"Creates a textdraw.",tags:["textdraw"]},l=void 0,o={},x=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",del:"del",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Creates a textdraw. Textdraws are, as the name implies, text (mainly - there can be boxes, sprites and model previews (skins/vehicles/weapons/objects too) that is drawn on a player's screens. See this page for extensive information about textdraws."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Float",":x"]}),(0,n.jsx)(t.td,{children:"The X (left/right) coordinate to create the textdraw at."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Float",":y"]}),(0,n.jsx)(t.td,{children:"The Y (up/down) coordinate to create the textdraw at."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"const format[]"}),(0,n.jsx)(t.td,{children:"The text that will appear in the textdraw."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"OPEN_MP_TAGS:..."}),(0,n.jsx)(t.td,{children:"Indefinite number of arguments of any tag."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"The ID of the created textdraw."}),"\n",(0,n.jsxs)(t.p,{children:["Textdraw IDs start at ",(0,n.jsx)(t.strong,{children:"0"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'// This variable is used to store the id of the textdraw\n// so that we can use it throught the script\nnew Text:gMyTextdraw;\n\npublic OnGameModeInit()\n{\n    // This line is used to create the textdraw.\n    // Note: This creates a textdraw without any formatting.\n    gMyTextdraw = TextDrawCreate(240.0, 580.0, "Welcome to my OPEN.MP server");\n    return 1;\n}\n\npublic OnPlayerConnect(playerid)\n{\n    //This is used to show the player the textdraw when they connect.\n    TextDrawShowForPlayer(playerid, gMyTextdraw);\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"x, y"}),' coordinate is the top left coordinate for the text draw area based on a 640x480 "canvas" (irrespective of screen resolution).']}),"\n",(0,n.jsxs)(t.li,{children:["If you plan on using ",(0,n.jsx)(t.a,{href:"TextDrawAlignment",children:"TextDrawAlignment"})," with alignment 3 (",(0,n.jsx)(t.code,{children:"TEXT_DRAW_ALIGN_RIGHT"}),"), the ",(0,n.jsx)(t.code,{children:"x, y"})," coordinate is the top right coordinate for the text draw."]}),"\n",(0,n.jsxs)(t.li,{children:["This function merely CREATES the textdraw, you must use ",(0,n.jsx)(t.a,{href:"TextDrawShowForPlayer",children:"TextDrawShowForPlayer"})," or ",(0,n.jsx)(t.a,{href:"TextDrawShowForAll",children:"TextDrawShowForAll"})," to show it."]}),"\n",(0,n.jsx)(t.li,{children:"It is recommended to use WHOLE numbers instead of decimal positions when creating textdraws to ensure resolution friendly design."}),"\n"]})}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["Keyboard key mapping codes (such as ",(0,n.jsx)(t.del,{children:"k~~VEHICLE_ENTER_EXIT"}),") don't work beyond 255th character."]})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawDestroy",children:"TextDrawDestroy"}),": Destroy a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawColor",children:"TextDrawColor"}),": Set the color of the text in a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawBoxColor",children:"TextDrawBoxColor"}),": Set the color of the box in a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawBackgroundColor",children:"TextDrawBackgroundColor"}),": Set the background color of a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawAlignment",children:"TextDrawAlignment"}),": Set the alignment of a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawFont",children:"TextDrawFont"}),": Set the font of a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawLetterSize",children:"TextDrawLetterSize"}),": Set the letter size of the text in a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawTextSize",children:"TextDrawTextSize"}),": Set the size of a textdraw box."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawSetOutline",children:"TextDrawSetOutline"}),": Choose whether the text has an outline."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawSetShadow",children:"TextDrawSetShadow"}),": Toggle shadows on a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawSetProportional",children:"TextDrawSetProportional"}),": Scale the text spacing in a textdraw to a proportional ratio."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawUseBox",children:"TextDrawUseBox"}),": Toggle if the textdraw has a box or not."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawSetString",children:"TextDrawSetString"}),": Set the text in an existing textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),": Show a textdraw for a certain player."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawHideForPlayer",children:"TextDrawHideForPlayer"}),": Hide a textdraw for a certain player."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawShowForAll",children:"TextDrawShowForAll"}),": Show a textdraw for all players."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawHideForAll",children:"TextDrawHideForAll"}),": Hide a textdraw for all players."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"IsTextDrawVisibleForPlayer",children:"IsTextDrawVisibleForPlayer"}),": Checks if a textdraw is shown for the player."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"IsValidTextDraw",children:"IsValidTextDraw"}),": Checks if a textdraw is valid."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawGetAlignment",children:"TextDrawGetAlignment"}),": Gets the text alignment of a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawGetBackgroundColour",children:"TextDrawGetBackgroundColour"}),": Gets the background colour of a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawGetBoxColour",children:"TextDrawGetBoxColour"}),": Gets the box colour of a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawGetColour",children:"TextDrawGetColour"}),": Gets the text colour of a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawGetFont",children:"TextDrawGetFont"}),": Gets the text font of a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawGetLetterSize",children:"TextDrawGetLetterSize"}),": Gets the width and height of the letters."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawGetOutline",children:"TextDrawGetOutline"}),": Gets the thickness of a textdraw's text's outline."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawGetPos",children:"TextDrawGetPos"}),": Gets the position of a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawGetPreviewModel",children:"TextDrawGetPreviewModel"}),": Gets the preview model of a 3D preview textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawGetPreviewRot",children:"TextDrawGetPreviewRot"}),": Gets the rotation and zoom of a 3D model preview textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawGetPreviewVehCol",children:"TextDrawGetPreviewVehCol"}),": Gets the preview vehicle colors of a 3D preview textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawGetPreviewVehicleColours",children:"TextDrawGetPreviewVehicleColours"}),": Gets the preview vehicle colours of a 3D preview textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawGetShadow",children:"TextDrawGetShadow"}),": Gets the size of a textdraw's text's shadow."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawGetString",children:"TextDrawGetString"}),": Gets the text of a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawGetTextSize",children:"TextDrawGetTextSize"}),": Gets the X axis and Y axis of the textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawIsBox",children:"TextDrawIsBox"}),": Checks if a textdraw is box."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawIsProportional",children:"TextDrawIsProportional"}),": Checks if a textdraw is proportional."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawIsSelectable",children:"TextDrawIsSelectable"}),": Checks if a textdraw is selectable."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawSetPos",children:"TextDrawSetPos"}),": Sets the position of a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawSetStringForPlayer",children:"TextDrawSetStringForPlayer"}),": Changes the text on a textdraw for a specific player."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../resources/textdrawsprites",children:"TextDraw Sprites"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return s}});var a=r(67294);let n={},i=a.createContext(n);function s(e){let t=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);