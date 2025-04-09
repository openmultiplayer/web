"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["18644"],{2642:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>o,toc:()=>d,contentTitle:()=>s});var r=JSON.parse('{"id":"scripting/functions/GetPlayerDialogData","title":"GetPlayerDialogData","description":"Get the data of the dialog currently show to the player.","source":"@site/docs/scripting/functions/GetPlayerDialogData.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerDialogData","permalink":"/tr/docs/scripting/functions/GetPlayerDialogData","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerDialogData.md","tags":[{"inline":true,"label":"player","permalink":"/tr/docs/tags/player"},{"inline":true,"label":"dialog","permalink":"/tr/docs/tags/dialog"}],"version":"current","frontMatter":{"title":"GetPlayerDialogData","sidebar_label":"GetPlayerDialogData","description":"Get the data of the dialog currently show to the player.","tags":["player","dialog"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerDialog","permalink":"/tr/docs/scripting/functions/GetPlayerDialog"},"next":{"title":"GetPlayerDialogID","permalink":"/tr/docs/scripting/functions/GetPlayerDialogID"}}'),l=n("85893"),i=n("50065");let a={title:"GetPlayerDialogData",sidebar_label:"GetPlayerDialogData",description:"Get the data of the dialog currently show to the player.",tags:["player","dialog"]},s=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function c(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Get the data of the dialog currently show to the player."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"The ID of the player to get the data."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["&DIALOG_STYLE",":style"]}),(0,l.jsx)(t.td,{children:"A variable into which to store the style, passed by reference."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"title[]"}),(0,l.jsx)(t.td,{children:"An array variable into which to store the title, passed by reference."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"titleSize"}),(0,l.jsx)(t.td,{children:"The size of the title array."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"body[]"}),(0,l.jsx)(t.td,{children:"An array variable into which to store the body, passed by reference."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"bodySize"}),(0,l.jsx)(t.td,{children:"The size of the body array."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"button1[]"}),(0,l.jsx)(t.td,{children:"An array variable into which to store the button1, passed by reference."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"button1Size"}),(0,l.jsx)(t.td,{children:"The size of the button1 array."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"button2[]"}),(0,l.jsx)(t.td,{children:"An array variable into which to store the button2, passed by reference."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"button2Size"}),(0,l.jsx)(t.td,{children:"The size of the button2 array."})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"false"})," - The function failed to execute. This means the player is not connected or they don't have a dialog open."]}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'enum\n{\n    DIALOG_LOGIN\n}\n\nShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Enter your password below:", "Login", "Cancel");\n\nnew \n    DIALOG_STYLE:style,\n    title[32],\n    body[64],\n    button1[16],\n    button2[16];\n\nGetPlayerDialogData(playerid, style, title, sizeof(title), body, sizeof(body), button1, sizeof(button1), button2, sizeof(button2));\n'})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"ShowPlayerDialog",children:"ShowPlayerDialog"}),": Shows the player a synchronous (only one at a time) dialog box."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"HidePlayerDialog",children:"HidePlayerDialog"}),": Hides the dialog currently show to the player."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetPlayerDialogID",children:"GetPlayerDialogID"}),": Get the ID of the dialog currently show to the player."]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"../callbacks/OnDialogResponse",children:"OnDialogResponse"}),": Called when a player responds to a dialog."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return a}});var r=n(67294);let l={},i=r.createContext(l);function a(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);