"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["68871"],{15696:function(e,t,l){l.r(t),l.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>n,assets:()=>s,toc:()=>c,contentTitle:()=>o});var n=JSON.parse('{"id":"scripting/functions/GetPlayerDialogID","title":"GetPlayerDialogID","description":"Get the ID of the dialog currently show to the player.","source":"@site/docs/scripting/functions/GetPlayerDialogID.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerDialogID","permalink":"/ta/docs/scripting/functions/GetPlayerDialogID","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerDialogID.md","tags":[{"inline":true,"label":"player","permalink":"/ta/docs/tags/player"},{"inline":true,"label":"dialog","permalink":"/ta/docs/tags/dialog"}],"version":"current","frontMatter":{"title":"GetPlayerDialogID","sidebar_label":"GetPlayerDialogID","description":"Get the ID of the dialog currently show to the player.","tags":["player","dialog"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerDialogData","permalink":"/ta/docs/scripting/functions/GetPlayerDialogData"},"next":{"title":"GetPlayerDistanceFromPoint","permalink":"/ta/docs/scripting/functions/GetPlayerDistanceFromPoint"}}'),a=l("85893"),i=l("50065");let r={title:"GetPlayerDialogID",sidebar_label:"GetPlayerDialogID",description:"Get the ID of the dialog currently show to the player.",tags:["player","dialog"]},o=void 0,s={},c=[{value:"Description",id:"description",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarn:l}=t;return l||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l,{version:"omp v1.1.0.2612"}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Get the ID of the dialog currently show to the player."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"The ID of the player."})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"return-values",children:"Return Values"}),"\n",(0,a.jsx)(t.p,{children:"Returns the dialog ID."}),"\n",(0,a.jsxs)(t.p,{children:["Or ",(0,a.jsx)(t.strong,{children:"INVALID_DIALOG_ID"})," if the player is not connected or has no dialog open."]}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:"new dialogID = GetPlayerDialogID(playerid);\nif (dialogID != INVALID_DIALOG_ID)\n{\n    // The player has an open dialog\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPlayerDialogData",children:"GetPlayerDialogData"}),": Get the data of the dialog currently show to the player."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"ShowPlayerDialog",children:"ShowPlayerDialog"}),": Shows the player a synchronous (only one at a time) dialog box."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"../callbacks/OnDialogResponse",children:"OnDialogResponse"}),": Called when a player responds to a dialog."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,t,l){l.d(t,{Z:function(){return o},a:function(){return r}});var n=l(67294);let a={},i=n.createContext(a);function r(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);