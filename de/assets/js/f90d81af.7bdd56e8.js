"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["46559"],{25613:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"scripting/resources/dialogstyles","title":"Dialog Styles","description":"- In OnDialogResponse, pressing button1 sets response to 1, while pressing button2 sets response to 0.","source":"@site/docs/scripting/resources/dialogstyles.md","sourceDirName":"scripting/resources","slug":"/scripting/resources/dialogstyles","permalink":"/de/docs/scripting/resources/dialogstyles","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/resources/dialogstyles.md","tags":[],"version":"current","frontMatter":{"title":"Dialog Styles","sidebar_label":"Dialog Styles"},"sidebar":"docsSidebar","previous":{"title":"Damage Status","permalink":"/de/docs/scripting/resources/damagestatus"},"next":{"title":"Door States","permalink":"/de/docs/scripting/resources/doorstates"}}'),i=n("85893"),l=n("50065");let r={title:"Dialog Styles",sidebar_label:"Dialog Styles"},o=void 0,d={},c=[{value:"Style 0: <code>DIALOG_STYLE_MSGBOX</code>",id:"style-0-dialog_style_msgbox",level:2},{value:"Response Output",id:"response-output",level:3},{value:"Style 1: <code>DIALOG_STYLE_INPUT</code>",id:"style-1-dialog_style_input",level:2},{value:"Response Output",id:"response-output-1",level:3},{value:"Style 2: <code>DIALOG_STYLE_LIST</code>",id:"style-2-dialog_style_list",level:2},{value:"Response output:",id:"response-output-2",level:3},{value:"Style 3: <code>DIALOG_STYLE_PASSWORD</code>",id:"style-3-dialog_style_password",level:2},{value:"Response Output",id:"response-output-3",level:3},{value:"Style 4: <code>DIALOG_STYLE_TABLIST</code>",id:"style-4-dialog_style_tablist",level:2},{value:"Style 5: <code>DIALOG_STYLE_TABLIST_HEADERS</code>",id:"style-5-dialog_style_tablist_headers",level:2}];function a(e){let s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["In ",(0,i.jsx)(s.a,{href:"../callbacks/OnDialogResponse",children:"OnDialogResponse"}),", pressing ",(0,i.jsx)(s.strong,{children:"button1"})," sets ",(0,i.jsx)(s.strong,{children:"response"})," to ",(0,i.jsx)(s.strong,{children:"1"}),", while pressing ",(0,i.jsx)(s.strong,{children:"button2"})," sets ",(0,i.jsx)(s.strong,{children:"response"})," to ",(0,i.jsx)(s.strong,{children:"0"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Every dialog can have an optional button 2. To make it disappear leave it empty, like in the first example. Players won't be able to click it, but they will be able to press ESC and trigger ",(0,i.jsx)(s.a,{href:"../callbacks/OnDialogResponse",children:"OnDialogResponse"})," with ",(0,i.jsx)(s.strong,{children:"response"})," = ",(0,i.jsx)(s.strong,{children:"0"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"../functions/ShowPlayerDialog",children:"ShowPlayerDialog"}),": Color embedding can be used for every string: ",(0,i.jsx)(s.strong,{children:"caption"}),", ",(0,i.jsx)(s.strong,{children:"info"}),", ",(0,i.jsx)(s.strong,{children:"button1"})," and ",(0,i.jsx)(s.strong,{children:"button2"}),"."]}),"\n"]})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["This page describes the behavior of ",(0,i.jsx)(s.a,{href:"../functions/ShowPlayerDialog",children:"ShowPlayerDialog"})," and ",(0,i.jsx)(s.a,{href:"../callbacks/OnDialogResponse",children:"OnDialogResponse"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["For various limitations, visit the ",(0,i.jsx)(s.a,{href:"../resources/limits",children:"Limits"})," page."]}),"\n",(0,i.jsx)(s.li,{children:"For the response examples, this code will be used:"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",children:"public OnDialogResponse( playerid, dialogid, response, listitem, inputtext[ ] )\n{\n    printf(\"playerid = %d, dialogid = YOUR_DIALOGID, response = %d, listitem = %d, inputtext = '%s' (size: %d)\", playerid, response, listitem, inputtext, strlen(inputtext));\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(s.h2,{id:"style-0-dialog_style_msgbox",children:["Style 0: ",(0,i.jsx)(s.code,{children:"DIALOG_STYLE_MSGBOX"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://assets.open.mp/assets/images/dialogStyles/Dialog_style_msgbox.png",alt:""})}),"\n",(0,i.jsx)(s.p,{children:"Showing:"}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\\t"})," adds a TAB (more space)."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\\n"})," creates a new line."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"colorslist#color-embedding",children:"Color embedding"})," won't reset after ",(0,i.jsx)(s.strong,{children:"\\n"})," or ",(0,i.jsx)(s.strong,{children:"\\t"}),"."]}),"\n"]})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",children:'ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_MSGBOX, "Caption", "Info\\n\\tInfo", "Button 1", "");\n'})}),"\n",(0,i.jsx)(s.h3,{id:"response-output",children:"Response Output"}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"listitem"})," is always ",(0,i.jsx)(s.strong,{children:"-1"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"inputtext"})," is always empty."]}),"\n"]})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",children:"// pressed the button\nplayerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = -1, inputtext = '' (size: 0)\n\n// pressed ESC (as the second button isn't visible)\nplayerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = -1, inputtext = '' (size: 0)\n"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(s.h2,{id:"style-1-dialog_style_input",children:["Style 1: ",(0,i.jsx)(s.code,{children:"DIALOG_STYLE_INPUT"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://assets.open.mp/assets/images/dialogStyles/Dialog_style_input.png",alt:""})}),"\n",(0,i.jsx)(s.p,{children:"Showing:"}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\\t"})," adds a TAB (more space)."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\\n"})," creates a new line."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"colorslist#color-embedding",children:"Color embedding"})," won't reset after ",(0,i.jsx)(s.strong,{children:"\\n"})," or ",(0,i.jsx)(s.strong,{children:"\\t"}),"."]}),"\n"]})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",children:'ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_INPUT, "Caption", "Enter information below:", "Button 1", "Button 2");\n'})}),"\n",(0,i.jsx)(s.h3,{id:"response-output-1",children:"Response Output"}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"listitem"})," is always ",(0,i.jsx)(s.strong,{children:"-1"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"inputtext"})," is the text written by the user, including colors."]}),"\n"]})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",children:"// wrote \"input\" and pressed the left button\nplayerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = -1, inputtext = 'input' (size: 5)\n\n// wrote \"input\" and pressed the right button\nplayerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = -1, inputtext = 'input' (size: 5)\n"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(s.h2,{id:"style-2-dialog_style_list",children:["Style 2: ",(0,i.jsx)(s.code,{children:"DIALOG_STYLE_LIST"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://assets.open.mp/assets/images/dialogStyles/Dialog_style_list.png",alt:""})}),"\n",(0,i.jsx)(s.p,{children:"Showing:"}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\\t"})," adds a TAB (more space)."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\\n"})," creates a new line."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"colorslist#color-embedding",children:"Color embedding"})," won't reset after ",(0,i.jsx)(s.strong,{children:"\\t"}),"."]}),"\n"]})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",children:'ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_LIST, "Caption", "Item 0\\n{FFFF00}Item 1\\nItem 2", "Button 1", "Button 2");\n'})}),"\n",(0,i.jsx)(s.h3,{id:"response-output-2",children:"Response output:"}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"listitem"})," is the number of the selected item, starting from ",(0,i.jsx)(s.strong,{children:"0"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"inputtext"})," is the text contained by the selected listitem, without the colors."]}),"\n"]})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",children:"// selected the first list item and pressed the left button\nplayerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = 0, inputtext = 'Item 0' (size: 6)\n\n// selected the second list item and pressed the right button\nplayerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = 1, inputtext = 'Item 1' (size: 6)\n"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(s.h2,{id:"style-3-dialog_style_password",children:["Style 3: ",(0,i.jsx)(s.code,{children:"DIALOG_STYLE_PASSWORD"})]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Similar to ",(0,i.jsx)(s.strong,{children:"DIALOG_STYLE_INPUT"}),"."]}),"\n"]})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://assets.open.mp/assets/images/dialogStyles/Dialog_style_password.png",alt:""})}),"\n",(0,i.jsx)(s.p,{children:"Showing:"}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\\t"})," adds a TAB (more space)."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\\n"})," creates a new line."]}),"\n"]})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",children:'ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_PASSWORD, "Caption", "Enter private information below:", "Button 1", "Button 2");\n'})}),"\n",(0,i.jsx)(s.h3,{id:"response-output-3",children:"Response Output"}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"listitem"})," is always ",(0,i.jsx)(s.strong,{children:"-1"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"inputtext"})," is the text contained by the selected listitem, without the colors."]}),"\n"]})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",children:"// wrote \"input\" and pressed the left button\nplayerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = -1, inputtext = 'input' (size: 5)\n\n// wrote \"input\" and pressed the right button\nplayerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = -1, inputtext = 'input' (size: 5)\n"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(s.h2,{id:"style-4-dialog_style_tablist",children:["Style 4: ",(0,i.jsx)(s.code,{children:"DIALOG_STYLE_TABLIST"})]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Similar to ",(0,i.jsx)(s.strong,{children:"DIALOG_STYLE_LIST"}),"."]}),"\n"]})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://assets.open.mp/assets/images/dialogStyles/Dialog_style_tablist.png",alt:""})}),"\n",(0,i.jsx)(s.p,{children:"Showing:"}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\\t"})," creates a new column."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\\n"})," creates a new list item."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"colorslist#color-embedding",children:"Color embedding"})," resets after ",(0,i.jsx)(s.strong,{children:"\\n"})," and ",(0,i.jsx)(s.strong,{children:"\\t"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["The first ",(0,i.jsx)(s.strong,{children:"info"})," row contains the header."]}),"\n"]})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",children:'ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_TABLIST, "Caption",\n"Deagle\\t$5000\\t100\\n\\\n{FF0000}Sawnoff\\t{33AA33}$5000\\t100\\n\\\nPistol\\t$1000\\t50",\n"Button 1", "Button 2");\n'})}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"listitem"})," is the number of the selected item, starting from ",(0,i.jsx)(s.strong,{children:"0"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"inputtext"})," is the text contained by the ",(0,i.jsx)(s.em,{children:"first column"})," of the selected ",(0,i.jsx)(s.strong,{children:"listitem"}),", without the colors."]}),"\n"]})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",children:"// selected the first list item and pressed the left button\nplayerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = 0, inputtext = 'Deagle' (size: 6)\n\n// selected the second list item and pressed the right button\nplayerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = 1, inputtext = 'Sawnoff' (size: 7)\n"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(s.h2,{id:"style-5-dialog_style_tablist_headers",children:["Style 5: ",(0,i.jsx)(s.code,{children:"DIALOG_STYLE_TABLIST_HEADERS"})]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Similar to ",(0,i.jsx)(s.strong,{children:"DIALOG_STYLE_LIST"}),"."]}),"\n"]})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://assets.open.mp/assets/images/dialogStyles/Dialog_style_tablist_headers.png",alt:""})}),"\n",(0,i.jsx)(s.p,{children:"Showing:"}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\\t"})," creates a new column."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\\n"})," creates a new list item."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"colorslist#color-embedding",children:"Color embedding"})," resets after ",(0,i.jsx)(s.strong,{children:"\\n"})," and ",(0,i.jsx)(s.strong,{children:"\\t"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["The first ",(0,i.jsx)(s.strong,{children:"info"})," row contains the header."]}),"\n"]})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",children:'ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_TABLIST_HEADERS, "Caption",\n"Header 1\\tHeader 2\\tHeader 3\\n\\\nItem 1 Column 1\\tItem 1 Column 2\\tItem 1 Column 3\\n\\\n{FF0000}Item 2 Column 1\\t{33AA33}Item 2 Column 2\\tItem 2 Column 3",\n"Button 1", "Button 2");\n'})}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"listitem"})," is the number of the selected item, starting from ",(0,i.jsx)(s.strong,{children:"0"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"inputtext"})," is the text contained by the ",(0,i.jsx)(s.em,{children:"first column"})," of the selected ",(0,i.jsx)(s.strong,{children:"listitem"}),", without the colors."]}),"\n"]})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",children:"// selected the first list item and pressed the left button\nplayerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = 0, inputtext = 'Item 1 Column 1' (size: 15)\n\n// selected the first list item and pressed the right button\nplayerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = 1, inputtext = 'Item 2 Column 1' (size: 15)\n"})})]})}function h(e={}){let{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},50065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return r}});var t=n(67294);let i={},l=t.createContext(i);function r(e){let s=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);