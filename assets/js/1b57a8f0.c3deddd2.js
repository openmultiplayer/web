"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["51765"],{26760:function(e,i,n){n.r(i),n.d(i,{default:()=>p,frontMatter:()=>a,metadata:()=>t,assets:()=>o,toc:()=>d,contentTitle:()=>s});var t=JSON.parse('{"id":"scripting/functions/HidePlayerDialog","title":"HidePlayerDialog","description":"Hides any dialog the player may currently be able to see.","source":"@site/docs/scripting/functions/HidePlayerDialog.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/HidePlayerDialog","permalink":"/docs/scripting/functions/HidePlayerDialog","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/HidePlayerDialog.md","tags":[{"inline":true,"label":"player","permalink":"/docs/tags/player"},{"inline":true,"label":"dialog","permalink":"/docs/tags/dialog"}],"version":"current","frontMatter":{"title":"HidePlayerDialog","sidebar_label":"HidePlayerDialog","description":"Hides any dialog the player may currently be able to see.","tags":["player","dialog"]},"sidebar":"docsSidebar","previous":{"title":"HidePickupForPlayer","permalink":"/docs/scripting/functions/HidePickupForPlayer"},"next":{"title":"HideVehicle","permalink":"/docs/scripting/functions/HideVehicle"}}'),r=n("85893"),l=n("50065");let a={title:"HidePlayerDialog",sidebar_label:"HidePlayerDialog",description:"Hides any dialog the player may currently be able to see.",tags:["player","dialog"]},s=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:n}=i;return n||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(i.p,{children:"Hides any dialog the player may currently be able to see."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Name"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsx)(i.tbody,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"playerid"}),(0,r.jsx)(i.td,{children:"The ID of the player to hide their current dialog from."})]})})]}),"\n",(0,r.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"false"})," - The function failed to execute. This means the player is not connected or they aren't looking at a dialog."]}),"\n",(0,r.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    if (IsAccountRegistered(playerid)) // Imaginary function to check if the player name is registered\n    {\n        ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_PASSWORD, "Login", "Insert Your Password", "Login", ""); // shows login dialog to player\n        \n        new ipAddress[16];\n        GetPlayerIp(playerid, ipAddress, sizeof(ipAddress)); // get player\'s ip address\n        \n        if (IsBanned(ipAddress)) // check if the player ip is banned\n        {\n            SendClientMessage(playerid, 0xFF0000FF, "You are banned from this server!"); \n            HidePlayerDialog(playerid); // Hides login dialog\n        }\n    }\n}\n'})}),"\n",(0,r.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"ShowPlayerDialog",children:"ShowPlayerDialog"}),": Shows the player a synchronous (only one at a time) dialog box."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"GetPlayerDialogData",children:"GetPlayerDialogData"}),": Get the data of the dialog currently show to the player."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"GetPlayerDialogID",children:"GetPlayerDialogID"}),": Get the ID of the dialog currently show to the player."]}),"\n"]})]})}function p(e={}){let{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return s},a:function(){return a}});var t=n(67294);let r={},l=t.createContext(r);function a(e){let i=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);