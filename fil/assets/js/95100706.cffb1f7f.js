"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["35662"],{67094:function(e,r,t){t.r(r),t.d(r,{default:()=>x,frontMatter:()=>a,metadata:()=>n,assets:()=>o,toc:()=>d,contentTitle:()=>l});var n=JSON.parse('{"id":"scripting/functions/IsTextDrawVisibleForPlayer","title":"IsTextDrawVisibleForPlayer","description":"Checks if a textdraw is shown for a player.","source":"@site/docs/scripting/functions/IsTextDrawVisibleForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsTextDrawVisibleForPlayer","permalink":"/fil/docs/scripting/functions/IsTextDrawVisibleForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsTextDrawVisibleForPlayer.md","tags":[{"inline":true,"label":"textdraw","permalink":"/fil/docs/tags/textdraw"}],"version":"current","frontMatter":{"title":"IsTextDrawVisibleForPlayer","sidebar_label":"IsTextDrawVisibleForPlayer","description":"Checks if a textdraw is shown for a player.","tags":["textdraw"]},"sidebar":"docsSidebar","previous":{"title":"IsRepeatingTimer","permalink":"/fil/docs/scripting/functions/IsRepeatingTimer"},"next":{"title":"IsTrailerAttachedToVehicle","permalink":"/fil/docs/scripting/functions/IsTrailerAttachedToVehicle"}}'),i=t("85893"),s=t("50065");let a={title:"IsTextDrawVisibleForPlayer",sidebar_label:"IsTextDrawVisibleForPlayer",description:"Checks if a textdraw is shown for a player.",tags:["textdraw"]},l=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{VersionWarn:t}=r;return t||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(r.p,{children:"Checks if a textdraw is shown for a player."}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Name"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"playerid"}),(0,i.jsx)(r.td,{children:"The ID of the player to check."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.td,{children:["Text",":textid"]}),(0,i.jsx)(r.td,{children:"The ID of the textdraw."})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"true"})," - Textdraw is shown for the player."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"false"})," - Textdraw is not shown for the player."]}),"\n",(0,i.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:'new Text:gMyTextdraw;\n\npublic OnGameModeInit()\n{\n    gMyTextdraw = TextDrawCreate(240.0, 580.0, "Example Text");\n    return 1;\n}\n\npublic OnPlayerConnect(playerid)\n{\n    TextDrawShowForPlayer(playerid, gMyTextdraw);\n    return 1;\n}\n\npublic OnPlayerSpawn(playerid)\n{\n    if (IsTextDrawVisibleForPlayer(playerid, gMyTextdraw))\n    {\n        // gMyTextdraw is shown for the player\n    }\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawCreate",children:"TextDrawCreate"}),": Creates a textdraw."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),": Show a textdraw for a certain player."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawHideForPlayer",children:"TextDrawHideForPlayer"}),": Hide a textdraw for a certain player."]}),"\n"]})]})}function x(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return l},a:function(){return a}});var n=t(67294);let i={},s=n.createContext(i);function a(e){let r=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);